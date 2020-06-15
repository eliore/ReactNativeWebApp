import { TAuthType } from "typescript/types";

function buildQueryParams(params: any = {}) {
  const pairs = Object.keys(params).reduce((result: string[], name: string) => {
    let value: string = params[name];

    if (Array.isArray(value)) {
      value = value.join(",");
    }

    return result.concat(`${name}=${value}`);
  }, []);

  return pairs.length ? `?${pairs.join("&")}` : "";
}

export function fetchUrl({
  url,
  method = "GET",
  params,
  authToken,
  baseUrl = "",
  authType = "token",
  jwtToken
}: {
  url: string;
  method?: string;
  params?: any;
  authToken?: string | null;
  baseUrl?: string;
  authType?: TAuthType;
  jwtToken?: string | null;
}) {
  let requestUrl = `${baseUrl}${url}`;
  let requestBody = null;
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Accept-Encoding": "gzip, deflate"
  };

  if (method === "GET") {
    requestUrl += buildQueryParams(params);
  } else {
    requestBody = JSON.stringify(params);
  }

  if (authToken || jwtToken) {
    Object.assign(headers, {
      Authorization:
        authType === "token" ? `Token token=${authToken}` : jwtToken
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
