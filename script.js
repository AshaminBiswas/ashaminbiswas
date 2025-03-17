// render the settings object
//console.log('settings', [object Object]);
document.addEventListener("DOMContentLoaded", function () {
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: "#4A6CF7",
            50: "#f8f8f8",
            100: "#e8e8e8",
            200: "#d3d3d3",
            300: "#a3a3a3",
            400: "#737373",
            500: "#525252",
            600: "#404040",
            700: "#262626",
            800: "#171717",
            900: "#0a0a0a",
            950: "#030303",
          },
          secondary: {
            DEFAULT: "#2D3748",
            50: "#f8f8f8",
            100: "#e8e8e8",
            200: "#d3d3d3",
            300: "#a3a3a3",
            400: "#737373",
            500: "#525252",
            600: "#404040",
            700: "#262626",
            800: "#171717",
            900: "#0a0a0a",
            950: "#030303",
          },
          accent: {
            DEFAULT: "",
            50: "#f8f8f8",
            100: "#e8e8e8",
            200: "#d3d3d3",
            300: "#a3a3a3",
            400: "#737373",
            500: "#525252",
            600: "#404040",
            700: "#262626",
            800: "#171717",
            900: "#0a0a0a",
            950: "#030303",
          },
        },
        fontFamily: {
          sans: [
            "Poppins, sans-serif",
            "Inter",
            "system-ui",
            "-apple-system",
            "BlinkMacSystemFont",
            "Segoe UI",
            "Helvetica Neue",
            "Arial",
            "sans-serif",
          ],
          heading: [
            "Montserrat, sans-serif",
            "Inter",
            "system-ui",
            "sans-serif",
          ],
          body: ["Montserrat, sans-serif", "Inter", "system-ui", "sans-serif"],
        },
        spacing: {
          18: "4.5rem",
          22: "5.5rem",
          30: "7.5rem",
        },
        maxWidth: {
          "8xl": "88rem",
          "9xl": "96rem",
        },
        animation: {
          "fade-in": "fadeIn 0.5s ease-in",
          "fade-out": "fadeOut 0.5s ease-out",
          "slide-up": "slideUp 0.5s ease-out",
          "slide-down": "slideDown 0.5s ease-out",
          "slide-left": "slideLeft 0.5s ease-out",
          "slide-right": "slideRight 0.5s ease-out",
          "scale-in": "scaleIn 0.5s ease-out",
          "scale-out": "scaleOut 0.5s ease-out",
          "spin-slow": "spin 3s linear infinite",
          "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          "bounce-slow": "bounce 3s infinite",
          float: "float 3s ease-in-out infinite",
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: "0" },
            "100%": { opacity: "1" },
          },
          fadeOut: {
            "0%": { opacity: "1" },
            "100%": { opacity: "0" },
          },
          slideUp: {
            "0%": { transform: "translateY(20px)", opacity: "0" },
            "100%": { transform: "translateY(0)", opacity: "1" },
          },
          slideDown: {
            "0%": { transform: "translateY(-20px)", opacity: "0" },
            "100%": { transform: "translateY(0)", opacity: "1" },
          },
          slideLeft: {
            "0%": { transform: "translateX(20px)", opacity: "0" },
            "100%": { transform: "translateX(0)", opacity: "1" },
          },
          slideRight: {
            "0%": { transform: "translateX(-20px)", opacity: "0" },
            "100%": { transform: "translateX(0)", opacity: "1" },
          },
          scaleIn: {
            "0%": { transform: "scale(0.9)", opacity: "0" },
            "100%": { transform: "scale(1)", opacity: "1" },
          },
          scaleOut: {
            "0%": { transform: "scale(1.1)", opacity: "0" },
            "100%": { transform: "scale(1)", opacity: "1" },
          },
          float: {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-10px)" },
          },
        },
        aspectRatio: {
          portrait: "3/4",
          landscape: "4/3",
          ultrawide: "21/9",
        },
      },
    },
    variants: {
      extend: {
        opacity: ["disabled"],
        cursor: ["disabled"],
        backgroundColor: ["active", "disabled"],
        textColor: ["active", "disabled"],
      },
    },
  };
});

// JavaScript for animations

// Run when the page loads
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  let isOpen = false;

  // Make sure the mobile menu button exists
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener("click", function () {
      isOpen = !isOpen;
      console.log("Menu button clicked, isOpen:", isOpen); // Debug log

      if (isOpen) {
        // Open menu - use classList instead of style for better compatibility
        mobileMenu.classList.remove("hidden");
        mobileMenu.classList.add("block", "animate-fadeIn");

        // Change icon to X
        menuIcon.innerHTML = `
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            `;
      } else {
        // Close menu
        mobileMenu.classList.add("hidden");
        mobileMenu.classList.remove("block", "animate-fadeIn");

        // Change icon back to hamburger
        menuIcon.innerHTML = `
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            `;
      }
    });
  } else {
    console.error("Mobile menu button not found");
  }

  // Close mobile menu when clicking on a link
  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      isOpen = false;
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("block", "animate-fadeIn");

      menuIcon.innerHTML = `
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          `;
    });
  });

  // Add scroll effect to header
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("py-2", "shadow-lg");
      header.classList.remove("py-4", "shadow-md");
    } else {
      header.classList.add("py-4", "shadow-md");
      header.classList.remove("py-2", "shadow-lg");
    }
  });
});

// Add this extra code to ensure the menu works even if the DOMContentLoaded already happened
(function () {
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.onclick = function () {
        if (mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.remove("hidden");
          mobileMenu.classList.add("block");
        } else {
          mobileMenu.classList.add("hidden");
          mobileMenu.classList.remove("block");
        }
      };
    }
  }
})();

// aboutSection
document.addEventListener("DOMContentLoaded", () => {
  // Trigger animations when the section is in view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document
            .getElementById("about-text")
            .classList.remove("opacity-0", "translate-x-[-50px]");
          document
            .getElementById("about-image")
            .classList.remove("opacity-0", "translate-x-[50px]");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  const aboutSection = document.getElementById("about");
  if (aboutSection) {
    observer.observe(aboutSection);
  }

  // Alternative: trigger immediately for testing
  setTimeout(() => {
    document
      .getElementById("about-text")
      .classList.remove("opacity-0", "translate-x-[-50px]");
    document
      .getElementById("about-image")
      .classList.remove("opacity-0", "translate-x-[50px]");
  }, 500);
});

// Add JavaScript for skill progress animation on scroll
document.addEventListener("DOMContentLoaded", function () {
  const skillBars = document.querySelectorAll(".skill-progress");

  const animateSkills = () => {
    skillBars.forEach((bar) => {
      const position = bar.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (position < screenPosition) {
        const width = bar.getAttribute("data-width");
        bar.style.width = width;
      }
    });
  };

  window.addEventListener("scroll", animateSkills);
  // Initial check in case elements are already in view
  animateSkills();
});

document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS with your public key
  emailjs.init("tBXdx5KB_3Nr2C-v-");

  const contactForm = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");
  const errorMessage = document.getElementById("error-message");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Show loading state on button
    const submitButton = contactForm.querySelector("button[type='submit']");
    const originalButtonText = submitButton.innerHTML;
    submitButton.innerHTML = `<span class="flex items-center justify-center">Sending... <svg class="animate-spin h-5 w-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></span>`;
    submitButton.disabled = true;

    // Get form data and prepare template parameters
    const templateParams = {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    // Send email using EmailJS
    emailjs
      .send("service_jv7krzo", "template_fg2sxhb", templateParams)
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);

          // Reset form
          contactForm.reset();

          // Show success message
          successMessage.classList.remove("hidden");

          // Hide success message after 5 seconds
          setTimeout(() => {
            successMessage.classList.add("hidden");
          }, 5000);
        },
        function (error) {
          console.log("FAILED...", error);

          // Show error message
          errorMessage.classList.remove("hidden");

          // Hide error message after 5 seconds
          setTimeout(() => {
            errorMessage.classList.add("hidden");
          }, 5000);
        }
      )
      .finally(function () {
        // Reset button state
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
      });
  });

  // Form validation
  const inputs = contactForm.querySelectorAll(
    "input[required], textarea[required]"
  );

  inputs.forEach((input) => {
    input.addEventListener("blur", function () {
      validateInput(this);
    });

    input.addEventListener("input", function () {
      if (this.classList.contains("invalid")) {
        validateInput(this);
      }
    });
  });

  function validateInput(input) {
    const errorMessage = input.nextElementSibling;

    if (!input.value.trim()) {
      input.classList.add("invalid", "border-red-500");
      errorMessage.classList.remove("hidden");
      return false;
    } else if (input.type === "email" && !isValidEmail(input.value)) {
      input.classList.add("invalid", "border-red-500");
      errorMessage.classList.remove("hidden");
      return false;
    } else {
      input.classList.remove("invalid", "border-red-500");
      errorMessage.classList.add("hidden");
      return true;
    }
  }

  function isValidEmail(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
});

// testimonials

document.addEventListener("DOMContentLoaded", function () {
  // Sample testimonials data - in a real scenario, this might come from an API
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      content:
        "Working with this team has been transformative for our business. Their attention to detail and innovative solutions helped us increase our revenue by 40% in just 6 months.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Marketing Director, GrowthX",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      content:
        "The level of professionalism and expertise is unmatched. They delivered exactly what we needed, on time and within budget. I highly recommend their services.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      position: "Product Manager, InnovateCorp",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      content:
        "Their creative approach to problem-solving made all the difference. We've seen a significant improvement in our product's performance since implementing their recommendations.",
      rating: 4,
    },
    {
      id: 4,
      name: "David Smith",
      position: "CTO, FutureTech",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      content:
        "I was skeptical at first, but they proved me wrong. The solutions they provided were not only effective but also easy to implement. Our team is now more productive than ever.",
      rating: 5,
    },
    {
      id: 5,
      name: "Lisa Wong",
      position: "Operations Manager, GlobalSolutions",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      content:
        "The team's dedication to our project was exceptional. They went above and beyond to ensure our success, and the results speak for themselves.",
      rating: 5,
    },
    {
      id: 6,
      name: "James Wilson",
      position: "Founder, StartupHub",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      content:
        "From the initial consultation to the final delivery, the experience was seamless. They understood our vision and turned it into reality better than we could have imagined.",
      rating: 4,
    },
  ];

  // DOM elements
  const testimonialsWrapper = document.getElementById("testimonials-wrapper");
  const pagination = document.getElementById("pagination");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  // Configuration
  const testimonialsPerPage = 3;
  let currentPage = 0;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  // Function to generate star rating HTML
  function generateStarRating(rating) {
    let stars = "";
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars +=
          '<svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>';
      } else {
        stars +=
          '<svg class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>';
      }
    }
    return stars;
  }

  // Function to render testimonials for current page
  function renderTestimonials() {
    // Clear previous testimonials
    testimonialsWrapper.innerHTML = "";

    // Calculate start and end indices for current page
    const startIndex = currentPage * testimonialsPerPage;
    const endIndex = Math.min(
      startIndex + testimonialsPerPage,
      testimonials.length
    );

    // Render testimonials for current page with staggered animation
    for (let i = startIndex; i < endIndex; i++) {
      const testimonial = testimonials[i];
      const delay = (i - startIndex) * 0.15; // Stagger the animation

      const testimonialCard = document.createElement("div");
      testimonialCard.className =
        "testimonial-card bg-white p-6 rounded-lg slide-in shadow-lg relative";
      testimonialCard.style.animationDelay = `${delay}s`;

      const gradientBorder = document.createElement("div");
      gradientBorder.className = "gradient-border absolute inset-0";
      testimonialCard.appendChild(gradientBorder);

      const cardContent = `
        <div class="flex flex-col items-center">
          <div class="relative">
            <img src="${testimonial.image}" alt="${
        testimonial.name
      }" class="w-20 h-20 rounded-full object-cover mb-4 border-2 border-purple-500 avatar-glow">
            <div class="absolute bottom-3 right-0 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></div>
          </div>
          <h3 class="text-xl font-bold text-gray-800">${testimonial.name}</h3>
          <p class="text-gray-600 mb-4">${testimonial.position}</p>
          <div class="flex mb-4">
            ${generateStarRating(testimonial.rating)}
          </div>
        </div>
        <p class="text-gray-700 text-center italic">"${testimonial.content}"</p>
      `;

      testimonialCard.innerHTML = cardContent;
      testimonialsWrapper.appendChild(testimonialCard);
    }
  }

  // Function to update pagination
  function updatePagination() {
    pagination.innerHTML = "";

    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement("span");
      dot.className =
        i === currentPage
          ? "w-3 h-3 bg-purple-600 rounded-full transition-all duration-300 transform scale-125 pulse"
          : "w-2 h-2 bg-gray-300 rounded-full cursor-pointer transition-all duration-300 hover:bg-purple-400";

      dot.addEventListener("click", () => {
        currentPage = i;
        renderTestimonials();
        updatePagination();
      });

      pagination.appendChild(dot);
    }
  }

  // Event listeners for navigation buttons
  prevBtn.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      renderTestimonials();
      updatePagination();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages - 1) {
      currentPage++;
      renderTestimonials();
      updatePagination();
    }
  });

  // Initial render
  renderTestimonials();
  updatePagination();

  // Optional: Implement auto-scrolling through testimonials
  let autoScrollInterval;

  function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
      if (currentPage < totalPages - 1) {
        currentPage++;
      } else {
        currentPage = 0;
      }
      renderTestimonials();
      updatePagination();
    }, 5000); // Change testimonials every 5 seconds
  }

  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
  }

  // Start auto-scrolling
  startAutoScroll();

  // Stop auto-scrolling when user interacts with pagination
  testimonialsWrapper.addEventListener("mouseenter", stopAutoScroll);
  pagination.addEventListener("mouseenter", stopAutoScroll);
  prevBtn.addEventListener("mouseenter", stopAutoScroll);
  nextBtn.addEventListener("mouseenter", stopAutoScroll);

  // Resume auto-scrolling when user leaves the testimonials section
  testimonialsWrapper.addEventListener("mouseleave", startAutoScroll);
  pagination.addEventListener("mouseleave", startAutoScroll);
  prevBtn.addEventListener("mouseleave", startAutoScroll);
  nextBtn.addEventListener("mouseleave", startAutoScroll);

  // Optional: Add keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      if (currentPage > 0) {
        currentPage--;
        renderTestimonials();
        updatePagination();
      }
    } else if (e.key === "ArrowRight") {
      if (currentPage < totalPages - 1) {
        currentPage++;
        renderTestimonials();
        updatePagination();
      }
    }
  });

  // Optional: Add touch swipe functionality for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  testimonialsWrapper.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  testimonialsWrapper.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      // Swipe left
      if (currentPage < totalPages - 1) {
        currentPage++;
        renderTestimonials();
        updatePagination();
      }
    } else if (touchEndX > touchStartX + 50) {
      // Swipe right
      if (currentPage > 0) {
        currentPage--;
        renderTestimonials();
        updatePagination();
      }
    }
  }
});

// JavaScript to add the box shadow effect to all skill progress bars
document.addEventListener("DOMContentLoaded", function () {
  // Get all skill progress bars
  const skillBars = document.querySelectorAll(".skill-progress");

  // Apply styles and animation to each bar
  skillBars.forEach((bar) => {
    // Get the target width from the data attribute
    const targetWidth = bar.getAttribute("data-width");

    // Add box shadow to each skill bar
    bar.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";

    // Animate the width
    setTimeout(() => {
      bar.style.width = targetWidth;
    }, 300);
  });
});
