import {EMAIL, LOGIN, MESSAGE} from "@/app/[locale]/constants.mjs";

const emailCheck = (email) => {
  if (!EMAIL.regex().test(email)) {
    return false;
  }
  return true;
};
const loginCheck = (login) => {
  if (!LOGIN.regex().test(login)) {
    return false;
  }
  return true;
};
const messageCheck = (message) => {
  if (!MESSAGE.regex().test(message)) {
    return false;
  }
  return true;
};
export {emailCheck, loginCheck, messageCheck};