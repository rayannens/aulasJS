const USUARIO_VALIDO = "rayanne";
const SENHA_VALIDA = "amarelinha123";
let usuarioDigitado = "rayanne";
let senhaDigitada = "amarelinha123";
let loginStatusMessage;


if (usuarioDigitado === USUARIO_VALIDO) {
  if (senhaDigitada === SENHA_VALIDA) {
    loginStatusMessage = "Login bem-sucedido! Bem-vindo!";
  } else {
    loginStatusMessage = "Senha incorreta. Tente novamente.";
  }


  var testeEscopoVar = "Sou var dentro do if";
  let testeEscopoLet = "Sou let dentro do if";
} else {
  loginStatusMessage = "Usuário não encontrado.";
}

console.log(loginStatusMessage);

console.log("\n--- Escopo de Variáveis ---");
if (typeof testeEscopoVar !== 'undefined') {
  console.log("Acessando testeEscopoVar fora do if:", testeEscopoVar);
} else {
  console.log("testeEscopoVar não está acessível fora do if (como esperado com var declarado dentro).");
}

if (typeof testeEscopoLet !== 'undefined') {
  console.log("Acessando testeEscopoLet fora do if:", testeEscopoLet);
} else {
  console.log("testeEscopoLet não está acessível fora do if (comportamento esperado de let).");
}

/*Variáveis var declaradas dentro de um bloco (if) têm um escopo mais amplo (função ou global), podendo ser acessadas fora dele. 
Já let e const ficam restritas ao bloco onde foram criadas. 
Usar let e const ajuda a evitar comportamentos inesperados e torna o código mais organizado.*/