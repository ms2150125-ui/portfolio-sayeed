document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bloodRequestForm");
  const alertBox = document.getElementById("request-alert");
  if (!form || !alertBox) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alertBox.style.display = "block";
    alertBox.style.background = "#e6f7e6";
    alertBox.style.color = "#1e7e34";
    alertBox.textContent = "Your blood request has been submitted. Nearby donors are being notified.";
    form.reset();
  });
});
