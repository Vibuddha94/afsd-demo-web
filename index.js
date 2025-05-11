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

  // Handle "Remember Me"
  if (rememberCheckbox.checked) {
      localStorage.setItem('rememberedEmail', email);
  } else {
      localStorage.removeItem('rememberedEmail');
  }

  // Simulate login
  alert('Login successful! Email: ' + email);
  emailInput.value = '';
  passwordInput.value = '';
  rememberCheckbox.checked = false;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Load saved email on page load
loadSavedEmail();