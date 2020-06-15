import {
  API_BASE_URL as SHARED_API_BASE_URL,
  API_MODES
} from "constants/api.constants";

const DEMO_API_BASE_URL = "";

// @ts-ignore
import { apiMode } from "../app.json";

const API_BASE_URL =
  apiMode === API_MODES.DEMO ? DEMO_API_BASE_URL : SHARED_API_BASE_URL[apiMode];

export const IS_NOT_MOCK = apiMode !== API_MODES.MOCK;

export const API_VERSION = IS_NOT_MOCK ? "/v1" : "";
const API_NAME = "/";
export const APP_BASE_URL = `${API_BASE_URL}${
  IS_NOT_MOCK ? `/api${API_VERSION}${API_NAME}` : ""
}`;

export const APP_DEMO_BASE_URL = `${DEMO_API_BASE_URL}${
  IS_NOT_MOCK ? `/api${API_VERSION}${API_NAME}` : ""
}`;

export const ENDPOINT_NAMES = {
  GENERAL_SERVER: { name: "general_server", path: "" },
  NODE: { name: "node", path: "" },
  USERS: { name: "users", path: "/users" },
};

export const API_ENDPOINTS = {
  [ENDPOINT_NAMES.GENERAL_SERVER.name]:
    apiMode === API_MODES.MOCK
      ? SHARED_API_BASE_URL[API_MODES.STAGING]
      : API_BASE_URL,
  [ENDPOINT_NAMES.NODE.name]: `${APP_BASE_URL}${ENDPOINT_NAMES.NODE.path}`,
  [ENDPOINT_NAMES.USERS.name]: `${
    apiMode === API_MODES.MOCK
      ? SHARED_API_BASE_URL[API_MODES.STAGING]
      : API_BASE_URL
  }${ENDPOINT_NAMES.USERS.path}`
};
