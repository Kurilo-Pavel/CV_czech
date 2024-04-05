const FrontendURL = "http://localhost:3000";
let BlockSection = [
  "Home",
  "About me",
  "Resume",
  // "Portfolio",
  "Contact"
];
const USER = "pkuryla";
const PASS = "hcarfnblkzgbehrs"
const Url = "http://localhost:7780";
const Duration = 1000;
const Delay = 0;

const LOGIN = {
  minSymbols: 3,
  maxSymbols: 50,
  regex: function () {
    return new RegExp("^[ a-z0-9а-я]{" +
      this.minSymbols + "," + this.maxSymbols + "}$", "i");
  }
};

const EMAIL = {
  minLength: 3,
  maxLength: 256,
  regex: function () {
    return new RegExp("^(([^<>()[\\]\\\\.,;:\\s@\"]" +
      "+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}" +
      "\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$", "i");
  }
};

const MESSAGE = {
  minSymbols: 1,
  maxSymbols: 300,
  regex: function () {
    return new RegExp("^[\"\\[\\]\\s-:)(/=!#$%&'*+?^_`{|}~.,<>@A-Z0-9А-Я]{" +
      this.minSymbols + "," + this.maxSymbols + "}$", "i");
  }
};

export {USER, PASS, Url, Duration, Delay, FrontendURL, BlockSection, LOGIN, EMAIL, MESSAGE};