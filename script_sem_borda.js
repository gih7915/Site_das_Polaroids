document.addEventListener("DOMContentLoaded", function () {
  const kitTamanhoSelect = document.getElementById("kit-tamanho");
  const tipoKitSelect = document.getElementById("tipo-kit");
  const totalElement = document.getElementById("total");
  const comprarLink = document.getElementById("comprar-link");

  const precosBase = {
    10: 10.0,
    20: 18.0,
    30: 27.0,
    50: 47.0,
    70: 66.0,
    100: 98.0,
  };

  function atualizarTotal() {
    const quantidade = parseInt(kitTamanhoSelect.value);
    const precoBase = precosBase[quantidade];
    const tipoKitMultiplicador = parseFloat(tipoKitSelect.value);
    const total = precoBase * tipoKitMultiplicador;
    totalElement.textContent = total.toFixed(2);
    atualizarLinkWhatsApp(quantidade, total.toFixed(2), tipoKitMultiplicador);
  }

  function atualizarLinkWhatsApp(quantidade, total, tipoKitMultiplicador) {
    const tipoKitTexto =
      tipoKitSelect.options[tipoKitSelect.selectedIndex].text;
    const mensagem = `Olá, gostaria de comprar o kit com ${quantidade} fotos do tipo "${tipoKitTexto}" no valor total de R$ ${total}.`;
    const numeroWhatsApp = "5561992432061"; // Substitua pelo seu número do WhatsApp com o código do país
    const link = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(
      mensagem
    )}`;
    comprarLink.href = link;
  }

  kitTamanhoSelect.addEventListener("change", atualizarTotal);
  tipoKitSelect.addEventListener("change", atualizarTotal);

  // Inicializa o link com os valores padrão
  atualizarTotal();
});
