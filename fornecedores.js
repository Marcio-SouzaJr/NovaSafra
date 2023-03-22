document.addEventListener("DOMContentLoaded", () => {
    const fabricas = document.querySelector("#fabricas");
    // const email = document.querySelector("#email");
  
    fabricas.onclick = () => {
      window.open("fabrica.html", "_self");
    };
  });
  