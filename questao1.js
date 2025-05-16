const IDADE_MINIMA_DESCONTO = 18;
let idadeCliente = 25;
let tipoAssinaturaCliente = "Premium";
const ASSINATURA_NECESSARIA = "Premium";


if (idadeCliente >= IDADE_MINIMA_DESCONTO && tipoAssinaturaCliente === ASSINATURA_NECESSARIA) {
    console.log("Parabéns! Você é elegível para o desconto especial.");
} else {
  console.log("Desculpe, você não atende aos critérios para o desconto especial.");
}
