document.addEventListener("DOMContentLoaded", () => {
    const fabricas = document.querySelector("#fabricas");
    const produtos = document.querySelector("#produtos");
  
    fabricas.onclick = () => {
      window.open("fabrica.html", "_self");
    };

    produtos.onclick = () => {
      window.open("produto.html", "_self");
    };
  });
  