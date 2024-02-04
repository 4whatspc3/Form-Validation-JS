const verifyConfirmPassword = () => {
  const form = document.querySelector("form");

  const confirm = document.querySelector("#confirm_password");

  const confirmError = document.querySelector("#confirm_password + .error");

  confirm.addEventListener("input", (e) => {
    if (confirm_password.value === password.value) {
      confirmError.textContent = "";

      confirmError.className = "error";
    } else {
      showError();
    }
  });

  form.addEventListener("submit", (e) => {
    if (confirm_password.value !== password.value) {
      showError();

      e.preventDefault();
    }
  });

  function showError() {
    if (confirm_password.validity.valueMissing) {
      confirmError.textContent = "You need to type the password again";
    } else if (confirm_password.value !== password.value) {
      confirmError.textContent = `Password does not match, try again`;
    }

    confirmError.className = "error active";
  }

  return { form, confirm_password, confirmError };
};

export default verifyConfirmPassword;
