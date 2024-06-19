var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  // Chama a função somar e verifica se é divisível por 3 e por 7
  somarEVerificarDivisibilidade();
});

// Função somar e verificar divisibilidade por 3 e por 7
function somarEVerificarDivisibilidade() {
  // Captura o que está dentro do primeiro input no formulário
  // Number - Transforma o texto capturado em número
  let primeiro_numero_inteiro = Number(document.getElementById("primeiro_numero_inteiro").value);

  // Realiza a soma do valor capturado com 0 (nesse caso, a soma é irrelevante, poderia ser removida)
  let resultado_soma = primeiro_numero_inteiro;

  // Verifica se o resultado da soma é divisível por 3 e por 7
  if (resultado_soma % 3 === 0 && resultado_soma % 7 === 0) {
    document.getElementById("resultado_soma").value = "O número é divisível por 3 e por 7";
  } else {
    document.getElementById("resultado_soma").value = "O número não é divisível por 3 e por 7";
  }
}
