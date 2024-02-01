import "./style.css";

import verifyEmail from "./emailValidation";

import verifyCountry from "./countryValidation";

import verifyZipCode from "./zipCodeValidation";

const component = () => {
  const { form, email, emailError } = verifyEmail();

  const { country, countryError } = verifyCountry();

  const { zipCode, zipCodeError } = verifyZipCode();

  return {
    form,
    email,
    emailError,
    country,
    countryError,
    zipCode,
    zipCodeError,
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

console.log("abelha");
