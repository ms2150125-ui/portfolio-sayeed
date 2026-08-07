document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("findBloodForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const results = document.getElementById("donor-results");
    if (results) {
      results.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
