import "./style.css";

import verifyEmail from "./emailValidation";

import verifyCountry from "./countryValidation";

const component = () => {
  const { form, email, emailError } = verifyEmail();

  const { country, countryError } = verifyCountry();

  return { form, email, emailError, country, countryError };
};

const page = component();

page.form;

page.email;

page.emailError;

page.country;

page.countryError;

console.log("abelha");
