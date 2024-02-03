import "./style.css";

import verifyEmail from "./emailValidation";

import verifyCountry from "./countryValidation";

import verifyZipCode from "./zipCodeValidation";

import verifyPassword from "./passwordValidation";

const component = () => {
  const { form, email, emailError } = verifyEmail();

  const { country, countryError } = verifyCountry();

  const { zipCode, zipCodeError } = verifyZipCode();

  const { password, passwordError } = verifyPassword();

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
  };
};

const page = component();

page.form;

page.email;

page.emailError;

page.country;

page.countryError;

page.zipCode;

page.zipCodeError;

page.password;

page.passwordError;

console.log("abelha");
