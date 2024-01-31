const verifyCountry = () => {
  const form = document.querySelector("form");

  const country = document.querySelector("#country");

  const countryError = document.querySelector("#country + .error");

  country.addEventListener("click", () => {
    if (country.validity.valid) {
      countryError.textContent = "";

      countryError.className = "error";
    } else {
      showError();
    }
    console.log("banana");
  });

  form.addEventListener("submit", (e) => {
    if (!country.validity.valid) {
      showError();

      e.preventDefault();
    }
  });

  function showError() {
    if (country.validity.valueMissing) {
      countryError.textContent = "You need to select a country";
    }

    countryError.className = "error active";
  }

  return { form, country, countryError };
};

export default verifyCountry;
