document.addEventListener("DOMContentLoaded", () => {
  const login = document.querySelector("button");
  const email = document.querySelector("#email");
  const senha = document.querySelector("#senha");

  login.onclick = () => {
    window.open("home.html", "_self");
    return false;
  };
});
