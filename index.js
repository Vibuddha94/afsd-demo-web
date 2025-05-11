function loadSavedEmail() {
  const emailInput = document.getElementById('email');
  const savedEmail = localStorage.getItem('rememberedEmail');
  if (savedEmail) {
      emailInput.value = savedEmail;
      document.getElementById('remember').checked = true;
  }
}

function validateLogin() {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const rememberCheckbox = document.getElementById('remember');
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
      alert('Please fill in both email and password fields.');
      return;
  }

  if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
  }

  // Check password
  if (password === 'admin') {
      // Handle "Remember Me"
      if (rememberCheckbox.checked) {
          localStorage.setItem('rememberedEmail', email);
      } else {
          localStorage.removeItem('rememberedEmail');
      }

      // Redirect to home page
      window.location.href = 'home.html';
  } else {
      alert('Incorrect password. Please try again.');
  }
}

function handleForgotPassword() {
  const emailInput = document.getElementById('email');
  const email = emailInput.value.trim();

  if (!email) {
      alert('Please enter your email address to reset your password.');
      return;
  }

  if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
  }

  // Simulate sending password reset link
  alert('A password reset link has been sent to ' + email);
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Load saved email on page load
loadSavedEmail();