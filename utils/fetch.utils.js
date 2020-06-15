"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUrl = void 0;
function buildQueryParams(params = {}) {
    const pairs = Object.keys(params).reduce((result, name) => {
        let value = params[name];
        if (Array.isArray(value)) {
            value = value.join(",");
        }
        return result.concat(`${name}=${value}`);
    }, []);
    return pairs.length ? `?${pairs.join("&")}` : "";
}
function fetchUrl({ url, method = "GET", params, authToken, baseUrl = "", authType = "token", jwtToken }) {
    let requestUrl = `${baseUrl}${url}`;
    let requestBody = null;
    const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip, deflate"
    };
    if (method === "GET") {
        requestUrl += buildQueryParams(params);
    }
    else {
        requestBody = JSON.stringify(params);
    }
    if (authToken || jwtToken) {
        Object.assign(headers, {
            Authorization: authType === "token" ? `Token token=${authToken}` : jwtToken
        });
    }
    return fetch(requestUrl, {
        method,
        headers,
        body: requestBody
    }).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw response;
    });
}
exports.fetchUrl = fetchUrl;
