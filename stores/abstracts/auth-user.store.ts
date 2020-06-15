import { action, computed, observable, runInAction } from "mobx";

import { IUser } from "typescript/abstracts/model.types";
import { IAuthUserStore } from "typescript/abstracts/store.types";
import { TLoginStatuses } from "typescript/types";

import { IApi } from "api/api";
import useAsyncStorage from "utils/async-storage.utils";

export const initialData = {
  authUser: null,
  loginError: false,
  pendingLogin: true,
  loginStatus: "idle"
};

class AuthUserStore<AuthUser extends IUser>
  implements IAuthUserStore<AuthUser> {
  API: IApi | any;
  options: {
    auth_storage_key?: string;
    default_settings?: Record<string, any>;
  };

  @observable authUser: AuthUser | null | undefined = initialData.authUser;
  @observable loginError: boolean = initialData.loginError;
  @observable
  loginStatus: TLoginStatuses = initialData.loginStatus as TLoginStatuses;
  @observable pendingLogin: boolean = initialData.pendingLogin;

  constructor({ API, options = {} }: Partial<IAuthUserStore<AuthUser>>) {
    this.API = API;
    this.options = options;

    this.initFromLocalStorage();

    this.getUserObject = this.getUserObject.bind(this);
  }

  getUserObject(response: any, isLogin: boolean = true) {
    const oldUser: any = this.authUser || {};

    const { user } = response;
    const authUser: any = {
      first_name: user.first_name,
      last_name: user.last_name,
      role: user.role,
      company_name: user.company_name,
      id: user.id,
      email: user.email,
      metric_units: !!user.metric_units,
      jwt_token: user.jwt_token ? user.jwt_token : oldUser.jwt_token,
      authentication_token: isLogin
        ? response.api_token
        : user.authentication_token || oldUser.authentication_token || "",
      settings: response.settings || this.options.default_settings
    };

    return authUser;
  }

  @computed
  get signedIn() {
    return !!(this.authUser && this.authUser.authentication_token);
  }

  @computed
  get authToken() {
    return this.authUser ? this.authUser.authentication_token : "";
  }

  @computed
  get jwtToken() {
    return this.authUser ? this.authUser.jwt_token : "";
  }

  @computed
  get settings() {
    return this.authUser
      ? this.authUser.settings || this.options.default_settings
      : this.options.default_settings;
  }

  @action.bound
  async initFromLocalStorage() {
    let AsyncStorage: any;

    try {
      AsyncStorage = new useAsyncStorage(this.options.auth_storage_key || "");

      const authUser = await AsyncStorage.getItem().then(
        (userJson: string | null) => (userJson ? JSON.parse(userJson) : null)
      );

      if (authUser) {
        authUser.settings = authUser.settings || this.options.default_settings;
        this.autoSignIn();
      }

      runInAction(() => {
        this.authUser = authUser;
        this.pendingLogin = false;
      });
    } catch (e) {
      return null;
    } finally {
      AsyncStorage = null;
    }
  }

  @action.bound
  async signIn(email: string, password: string) {
    let AsyncStorage: any;
    let result: any = null;

    this.loginError = false;
    this.loginStatus = "pending";
    try {
      AsyncStorage = new useAsyncStorage(this.options.auth_storage_key || "");
      const response = await this.API.login(email, password);

      const authUser = this.getUserObject(response);

      runInAction(() => {
        this.authUser = (authUser as AuthUser);
        this.pendingLogin = false;
        this.loginStatus = "confirm";
      });

      AsyncStorage.setItem(JSON.stringify(this.authUser));

      result = authUser;
    } catch (error) {
      runInAction(() => {
        this.authUser = null;
        this.loginError = true;
        this.loginStatus = "idle";
      });
    } finally {
      AsyncStorage = null
    }

    return result;
  }

  @action.bound
  async autoSignIn() {
    let AsyncStorage: any;
    let result: any = null;

    try {
      AsyncStorage = new useAsyncStorage(this.options.auth_storage_key || "");

      const response = await this.API.autoLogin();
      const authUser = this.getUserObject(
        response,
        false
      );

      runInAction(() => {
        this.authUser = (authUser as AuthUser);
      });

      AsyncStorage.setItem(JSON.stringify(this.authUser));

      result = authUser;
    } catch (error) {}
    finally {
      AsyncStorage = null;
    }

    return result;
  }
  @action.bound
  async signOut() {
    let AsyncStorage: any;
    let result: any = null;

    try {
      AsyncStorage = new useAsyncStorage(this.options.auth_storage_key || "");
      await AsyncStorage.removeItem();

      runInAction(() => {
        this.authUser = null;
        this.loginStatus = "idle";
      });

      result = true;
    } catch (e) {}
    finally {
      AsyncStorage = null;
    }

    return result;
  }
}

export default AuthUserStore;
