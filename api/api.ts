import { TAuthType } from "typescript/types";
import { fetchUrl as _fetchUrl } from "utils/fetch.utils";

export interface IFetch {
  url: string;
  method?: string;
  params?: any;
  authType?: TAuthType;
}

export interface IApi {
  login: (username: string, password: string) => Promise<any>;
  autoLogin: () => Promise<any>;
}

export function getAPI(
  API_ENDPOINTS: any,
  ENDPOINT_NAMES: any,
  IS_NOT_MOCK: boolean,
  fetchUrl: (Fetch: IFetch) => Promise<any> = _fetchUrl
): IApi {
  return class API {
    static login(email: string, password: string) {
      return IS_NOT_MOCK ? fetchUrl({
        url: `${API_ENDPOINTS[ENDPOINT_NAMES.USERS.name]}/sign_in`,
        method: "POST",
        params: { user: { email, password } }
      }) : Promise.resolve({id: 1});
    }
    static autoLogin() {
      return fetchUrl({
        url: `${API_ENDPOINTS[ENDPOINT_NAMES.GENERAL_RUBY.name]}/api/v2${
          ENDPOINT_NAMES.USERS.path
        }/get_current_user`
      });
    }
  };
}
