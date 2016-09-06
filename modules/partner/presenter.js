import { getUriWithRefUrl, getUriWithCheck } from "../session/form_uri";

const presenter = function(retUrl, isLogged?) {
  let uriWithRef = getUriWithRefUrl('signup', retUrl);
  let parsedUri = getUriWithCheck(isLogged, retUrl);

  return {uriWithRef, parsedUri};
};

export default presenter;