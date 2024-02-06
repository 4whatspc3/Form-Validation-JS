const verifyPassword = () => {
  const form = document.querySelector("form");

  const password = document.querySelector("#password");

  const passwordError = document.querySelector("#password + .error");

  const warnings = document.querySelector(".password.warnings");

  let submitVal;

  password.addEventListener("input", () => {
    if (
      password.value.length >= 8 &&
      lowerCase(password.value) &&
      upperCase(password.value) &&
      numbers(password.value) &&
      specialChar(password.value)
    ) {
      empty(warnings);

      passwordError.textContent = "";

      passwordError.className = "error";

      warnings.className = "password warnings";

      submitVal = true;
    } else {
      showError("tooShort");
    }
  });

  form.addEventListener("submit", (e) => {
    if (submitVal !== true) {
      showError();

      e.preventDefault();
    }
  });

  function showError() {
    passwordError.className = "error active";

    if (password.validity.valueMissing) {
      passwordError.textContent = "You need to create a password";
    } else {
      passwordError.textContent = "The password must contain:";

      passwordError.className = "error";

      passwordError.textContent = "";

      warnings.className = "password warnings active";

      empty(warnings);

      const firstTip = document.createElement("li");
      firstTip.textContent = "Min. 8 characters;";

      const secondTip = document.createElement("li");
      secondTip.textContent = "Include lowercase letter;";

      const thirdTip = document.createElement("li");
      thirdTip.textContent = "Include uppercase letter;";

      const fourthTip = document.createElement("li");
      fourthTip.textContent = "Include number;";

      const fifthTip = document.createElement("li");
      fifthTip.textContent = "Include a special character: #.-?!@$%^&*";

      warnings.append(firstTip, secondTip, thirdTip, fourthTip, fifthTip);
    }
  }

  function lowerCase(input) {
    return /[a-z]/.test(input);
  }

  function upperCase(input) {
    return /[A-Z]/.test(input);
  }

  function numbers(input) {
    return /\d/.test(input);
  }

  function specialChar(input) {
    return /[#.?!@$%^&*-]/.test(input);
  }

  function empty(element) {
    element.replaceChildren();
  }

  return { form, password, passwordError };
};

export default verifyPassword;
