document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");
  const alertBox = document.getElementById("register-alert");
  if (!form || !alertBox) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const pass = document.getElementById("reg-pass").value;
    const confirm = document.getElementById("reg-confirm-pass").value;

    if (pass !== confirm) {
      alertBox.style.display = "block";
      alertBox.style.background = "#fdeaea";
      alertBox.style.color = "#b30000";
      alertBox.textContent = "Passwords do not match. Please try again.";
      return;
    }

    alertBox.style.display = "block";
    alertBox.style.background = "#e6f7e6";
    alertBox.style.color = "#1e7e34";
    alertBox.textContent = "Account created successfully!";
    form.reset();
  });
});
