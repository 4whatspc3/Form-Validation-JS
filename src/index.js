import "./style.css";

import verifyEmail from "./emailValidation";

const component = () => {
  const { form, email, emailError } = verifyEmail();

  return { form, email, emailError };
};

const page = component();

page.form;

page.email;

page.emailError;

console.log("abelha");
