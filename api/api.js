"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAPI = void 0;
const fetch_utils_1 = require("utils/fetch.utils");
function getAPI(API_ENDPOINTS, ENDPOINT_NAMES, IS_NOT_MOCK, fetchUrl = fetch_utils_1.fetchUrl) {
    return class API {
        static login(email, password) {
            return IS_NOT_MOCK ? fetchUrl({
                url: `${API_ENDPOINTS[ENDPOINT_NAMES.USERS.name]}/sign_in`,
                method: "POST",
                params: { user: { email, password } }
            }) : Promise.resolve({ id: 1 });
        }
        static autoLogin() {
            return fetchUrl({
                url: `${API_ENDPOINTS[ENDPOINT_NAMES.GENERAL_RUBY.name]}/api/v2${ENDPOINT_NAMES.USERS.path}/get_current_user`
            });
        }
    };
}
exports.getAPI = getAPI;
