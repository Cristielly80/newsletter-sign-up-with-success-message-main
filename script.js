
const telaFormulario = document.querySelector(".corpo");
const form = document.querySelector("form");
const telaSucesso = document.querySelector(".corpo2");
const emailInput = document.getElementById("email");
const emailUsuario = document.getElementById("emailUsuario");
const butao2 = document.querySelector(".button2");

form.addEventListener("submit", function(e){ //Função

  e.preventDefault(); //Evita o carregamento da tela depois que clicar o botão.

  const emailDigitado = emailInput.value; //Criar uma variável para pegar o "valor" que é o email digitado.

  emailUsuario.textContent = emailDigitado; //Coloca o valor dentro do Span

  telaFormulario.classList.add("hidden"); // A tela do formulário irá sumir
  telaSucesso.classList.remove("hidden"); // A tela sucesso irá aparecer

});

butao2.addEventListener("click", function (e){ // Função
    
    telaSucesso.classList.add("hidden"); // A tela sucesso irá sumir
    telaFormulario.classList.remove("hidden") // A tela formulário irá aparecer

    emailInput.value = ""; // Faz o campo do input ficar limpo quando voltar.

   // location.reload() // Faz a tela atualizar assim que retorna pro formulário recarregar e tirar o email antes digitado. Para uma nova utilização.




})
