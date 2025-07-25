document.addEventListener("DOMContentLoaded", () => {
  const typingEl = document.querySelector(".typing-text");
  const words = [
    "Java Developer.",
    "Problem Solver.",
    "Machine Learning Enthusiast.",
  ];

  let i = 0;
  let j = 0;
  let currentWord = "";
  let isDeleting = false;

  function type() {
    currentWord = words[i];
    if (isDeleting) {
      typingEl.textContent = currentWord.substring(0, j--);
      if (j < 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
        setTimeout(type, 500);
      } else {
        setTimeout(type, 50);
      }
    } else {
      typingEl.textContent = currentWord.substring(0, j++);
      if (j > currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1500);
      } else {
        setTimeout(type, 100);
      }
    }
  }
  type();

  // Animate skill bars on scroll
  const bars = document.querySelectorAll(".bar");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.getAttribute("style").split(":")[1];
      }
    });
  }, {
    threshold: 0.5,
  });

  bars.forEach(bar => observer.observe(bar));
});



