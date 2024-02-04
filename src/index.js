import "./style.css";

import verifyEmail from "./validation/emailValidation";

import verifyCountry from "./validation/countryValidation";

import verifyZipCode from "./validation/zipCodeValidation";

import verifyPassword from "./validation/passwordValidation";

import verifyConfirmPassword from "./validation/confirmValidation";

const component = () => {
  const { form, email, emailError } = verifyEmail();

  const { country, countryError } = verifyCountry();

  const { zipCode, zipCodeError } = verifyZipCode();

  const { password, passwordError } = verifyPassword();

  const { confirm_password, confirmError } = verifyConfirmPassword();

  return {
    form,
    email,
    emailError,
    country,
    countryError,
    zipCode,
    zipCodeError,
    password,
    passwordError,
    confirm_password,
    confirmError,
  };
};

const page = component();

for (let key in page) {
  page[key];
}
