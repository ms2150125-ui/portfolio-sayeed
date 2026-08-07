document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const alertBox = document.getElementById("contact-alert");
  if (!form || !alertBox) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alertBox.style.display = "block";
    alertBox.style.background = "#e6f7e6";
    alertBox.style.color = "#1e7e34";
    alertBox.textContent = "Thanks! Your message has been sent — we'll get back to you soon.";
    form.reset();
  });
});
