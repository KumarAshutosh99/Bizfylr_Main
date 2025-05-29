document.addEventListener("DOMContentLoaded", () => {
  // ----- Form Handling -----
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
      }

      // Example: send form data via Fetch or log it
      console.log("Form Submitted", { name, email, message });

      // Reset form
      form.reset();
    });
  }

  // ----- Counter Animation -----
  const counters = document.querySelectorAll(".counter");

  const runCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    const speed = 200;
    const increment = Math.ceil(target / speed);

    const updateCount = () => {
      const count = +counter.innerText;
      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };

    updateCount();
  };

  if (counters.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runCounter(entry.target);
            observer.unobserve(entry.target); // Run once per counter
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    counters.forEach((counter) => {
      observer.observe(counter);
    });
  }

  // ----- Navbar Close Button -----
  const closeBtn = document.querySelector('#mainNavbar .btn-close');
  const navbarCollapse = document.getElementById('mainNavbar');

  if (closeBtn && navbarCollapse) {
    closeBtn.addEventListener('click', () => {
      let collapseInstance = bootstrap.Collapse.getInstance(navbarCollapse);
      if (!collapseInstance) {
        collapseInstance = new bootstrap.Collapse(navbarCollapse, {
          toggle: false,
        });
      }
      collapseInstance.hide();
    });
  }
});
