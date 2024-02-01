const verifyZipCode = () => {
  const form = document.querySelector("form");

  const zipCode = document.querySelector("#zip_code");

  const zipCodeError = document.querySelector("#zip_code + .error");

  const warnings = document.querySelector(".warnings");

  zipCode.addEventListener("input", () => {
    if (isValidZipCode(zipCode.value)) {
      zipCodeError.textContent = "";

      zipCodeError.className = "error";

      empty(warnings);
    } else {
      showError();
    }
  });

  form.addEventListener("submit", (e) => {
    if (isValidZipCode(zipCode.value) === false) {
      showError();

      e.preventDefault();
    }
  });

  function showError() {
    zipCodeError.className = "error active";

    if (zipCode.validity.valueMissing) {
      zipCodeError.textContent = "You need to enter a Zip Code";
    } else {
      if (zipCode.validity.tooShort) {
        zipCodeError.textContent = `Zip Code should be at least ${zipCode.minLength} characters; you entered ${zipCode.value.length}.`;
      } else {
        zipCodeError.className = "error";

        empty(warnings);

        const firstTip = document.createElement("li");
        firstTip.textContent = "Remember, you can only use numbers;";

        const secondTip = document.createElement("li");
        secondTip.textContent =
          "The basic format consist of 5 digits, but you can add a hyphen and 4 more digits;";

        const thirdTip = document.createElement("li");
        thirdTip.textContent =
          "Some valid Zip Codes: 20521-9000; 42223; 85254;";

        warnings.append(firstTip, secondTip, thirdTip);
      }
    }
  }

  function isValidZipCode(code) {
    return /^\d{5}(-\d{4})?$/.test(code);
  }

  function empty(element) {
    element.replaceChildren();
  }

  return { form, zipCode, zipCodeError };
};

export default verifyZipCode;
