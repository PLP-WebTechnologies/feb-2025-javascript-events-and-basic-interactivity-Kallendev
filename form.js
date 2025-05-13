document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("feedback");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      feedback.textContent = "Please fill in all fields!";
      feedback.style.color = "red";
    } else if (!validateEmail(email)) {
      feedback.textContent = "Please enter a valid email address!";
      feedback.style.color = "orange";
    } else {
      feedback.textContent = `Thank you, ${name}! Your message has been sent.`;
      feedback.style.color = "green";
      form.reset();
    }

    feedback.classList.remove("hidden");
  });

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});
