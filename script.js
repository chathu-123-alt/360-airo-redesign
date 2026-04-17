let isLogin = true;

function toggle() {
  const title = document.getElementById("title");
  const btn = document.querySelector("button");
  const text = document.querySelector("p");

  if (isLogin) {
    title.innerText = "Sign Up";
    btn.innerText = "Create Account";
    text.innerText = "Already have an account? Sign In";
  } else {
    title.innerText = "Sign In";
    btn.innerText = "Sign In";
    text.innerText = "Don't have an account? Sign Up";
  }

  isLogin = !isLogin;
}

function login() {
  window.location.href = "dashboard.html";
}

function logout() {
  window.location.href = "index.html";
}