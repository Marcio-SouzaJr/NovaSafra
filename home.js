document.addEventListener("DOMContentLoaded", () => {
  const clientes = document.querySelector("#clientes");
  const fornecedores = document.querySelector("#fornecedores");
  const vendas = document.querySelector("#vendas");
  const embarques = document.querySelector("#embarques");
  const saldos = document.querySelector("#saldos");
  const relatorios = document.querySelector("#relatorios");

  fornecedores.onclick = () => {
    window.open("fornecedor.html", "_self");
  };

  clientes.onclick = () => {
    window.open("cliente.html", "_self")
  }

  
});
