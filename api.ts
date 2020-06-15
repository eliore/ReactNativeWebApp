import { getAPI as sharedGetAPI, IApi } from "api/api";
import { TAuthType } from "typescript/types";
import { fetchUrl as _fetchUrl } from "utils/fetch.utils";

import { API_ENDPOINTS, ENDPOINT_NAMES, IS_NOT_MOCK } from "config/api.config";
import AuthUserStore from "stores/auth-user.store";

export function fetchUrl({
  url,
  method,
  params,
  authType
}: {
  url: string;
  method?: string;
  params?: any;
  authType?: TAuthType;
}): Promise<any> {
  return _fetchUrl({
    url,
    method,
    params,
    baseUrl: "",
    authToken: AuthUserStore.authToken,
    jwtToken: AuthUserStore.jwtToken,
    authType
  });
}


export class LocalAPI {}

export function getAPI(): IApi {
  return sharedGetAPI(API_ENDPOINTS, ENDPOINT_NAMES, IS_NOT_MOCK, fetchUrl);
}

export default getAPI();
