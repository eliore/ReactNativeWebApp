import { FETCH_STATES } from "constants/types.constants";
import { action, observable, runInAction } from "mobx";
import { IUser } from "typescript/abstracts/model.types";
import { IAppStore, IAuthUserStore } from "typescript/abstracts/store.types";
import { TFetchStates } from "typescript/types";

const defaultInitialResources: any = [];
import { IApi } from "api/api";

class AppStore<AuthUserStore extends IAuthUserStore<IUser>>
  implements IAppStore<AuthUserStore> {
  API: IApi | any;
  authUserStore?: AuthUserStore;
  stores: Record<string, any> = {};
  options: {
    initialResources?: string[];
  };

  constructor({
    API,
    authUserStore,
    stores = {},
    options = { initialResources: defaultInitialResources }
  }: Partial<IAppStore<AuthUserStore>>) {
    this.API = API;

    this.authUserStore = authUserStore;
    this.stores = stores;
    this.options = options;
  }

  @observable fetchState: TFetchStates = null;
  @observable lastUpdated: Date | null = null;
  @observable appRefreshing: boolean = false;

  @action.bound
  setAppRefreshState(isRefreshing: boolean = false) {
    this.appRefreshing = isRefreshing;
  }

  @action.bound
  async fetchInitial(
    refresh?: boolean,
    resources: string[] = this.options.initialResources || [],
    functionName: string = "fetchAll",
    functionParameter?: any
  ) {

    if (!refresh) {
      this.fetchState = (FETCH_STATES.PENDING as TFetchStates);
    }

    try {
      const results = await Promise.all(
        resources.map(resource => {
          return this.stores[`${resource}Store`][functionName](
            functionParameter
          );
        })
      );

      runInAction(() => {
        if (functionName === "fetchAll") {
          this.lastUpdated = new Date();
        }

        if (!refresh) {
          this.fetchState = (FETCH_STATES.DONE as TFetchStates);
        }
      });

      return results;
    } catch (error) {
      console.log("Failed to fetch initial data", error);
      if (!refresh) {
        runInAction(() => {
          this.fetchState = (FETCH_STATES.ERROR as TFetchStates);
        });
      }

      return error;
    }
  }

  @action.bound
  appSignOut(resources: string[] = this.options.initialResources || []) {
    resources.reverse().map(resource => {
      return this.stores[`${resource}Store`].initialAll();
    });

    if (this.authUserStore) {
      this.authUserStore.signOut();
    }
  }
}

export default AppStore;
