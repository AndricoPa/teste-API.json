const url = "http://localhost:3000/pecas";

document.getElementById("dataForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const dataForm = {
    nome: document.getElementById("nome").value,
    preco: document.getElementById("preco").value,
    precoNew: document.getElementById("precoNew").value,
    quantidade: document.getElementById("quantidade").value,
    url: document.getElementById("url").value,
  };

  fetch("http://localhost:3000/pecas", {
    method: "POST", // que estou enviando dados para API
    // headers: {
    //     'Content-Type': 'application/json',
    // },
    body: JSON.stringify(dataForm), // que as informaçoes estão vindo do corpo (nomalmente um formulario)
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
