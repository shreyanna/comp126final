document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
  
    // Get form fields
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");
  
    // Validate form
    let isValid = true;
  
    // Clear previous error states
    [firstName, lastName, email, phone, message].forEach((field) => {
      field.classList.remove("error");
      if (field.nextElementSibling && field.nextElementSibling.classList.contains("error-message")) {
        field.nextElementSibling.remove();
      }
    });
  
    // Validate required fields
    [firstName, lastName, email, message].forEach((field) => {
      if (!field.value.trim()) {
        field.classList.add("error");
        const errorMessage = document.createElement("div");
        errorMessage.textContent = `${field.placeholder} is required`;
        errorMessage.classList.add("error-message");
        field.parentNode.insertBefore(errorMessage, field.nextSibling);
        isValid = false;
      }
    });
  
    // Email validation
    if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.classList.add("error");
      const errorMessage = document.createElement("div");
      errorMessage.textContent = "Invalid email address";
      errorMessage.classList.add("error-message");
      email.parentNode.insertBefore(errorMessage, email.nextSibling);
      isValid = false;
    }
  
    if (isValid) {
      alert("Thank you for your message. We will review and contact you as soon as possible. - SB Tech Solutions");
      // Reset the form
      document.getElementById("contactForm").reset();
    }
  });
  