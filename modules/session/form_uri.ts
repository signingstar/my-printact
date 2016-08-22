let { format, parse } = require("url");
import { find } from "underscore";

let sessionPaths = ['login', 'signup', 'forgot-password', 'password-reset', 'signout'];

export const getUriWithRefUrl = (action: string, refUrl: string) : string => {
  let pathname = "/" + action;
  if (!refUrl) {
    return pathname;
  }

  return format({
    pathname: pathname,
    query: {ref_url: refUrl}
  });
};

export const getUriWithCheck = (isLogged: boolean, refUrl: string) => {
  let homePageUri = format({pathname: '/'});

  if(!refUrl) {
    return homePageUri;
  }

  let refUrlPath = parse(refUrl, true);
  let pathname = refUrlPath.pathname.replace('/', '');

  let isUrlInvalid = find(sessionPaths, (val) => val === pathname);

  if(isUrlInvalid) {
    return homePageUri;
  } else {
    return format({
      pathname: refUrlPath.path
    })
  }
}
