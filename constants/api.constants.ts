export const API_MODES = {
  PRODUCTION: "prod",
  STAGING: "dev",
  DEMO: "demo",
  MOCK: "mock"
};

export const API_BASE_URL = {
  [API_MODES.PRODUCTION]: "",
  [API_MODES.STAGING]: "",
  [API_MODES.DEMO]: "",
  [API_MODES.MOCK]: "https://api.myjson.com/bins"
};
