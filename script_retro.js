document.addEventListener("DOMContentLoaded", function () {
  const quantidadeInput = document.getElementById("quantidade");
  const tipoKitSelect = document.getElementById("tipo-kit");
  const totalElement = document.getElementById("total");
  const comprarLink = document.getElementById("comprar-link");

  function atualizarTotal() {
    const quantidade = parseFloat(quantidadeInput.value);
    const preco = parseFloat(tipoKitSelect.value);
    const total = quantidade * preco;
    totalElement.textContent = total.toFixed(2);
    atualizarLinkWhatsApp(quantidade, total.toFixed(2));
  }

  function atualizarLinkWhatsApp(quantidade, total) {
    const tipoKitTexto =
      tipoKitSelect.options[tipoKitSelect.selectedIndex].text;
    const mensagem = `Olá, gostaria de comprar ${quantidade} unidades do tipo "${tipoKitTexto}" no valor total de R$ ${total}.`;
    const numeroWhatsApp = "5561992432061"; // Substitua pelo seu número do WhatsApp com o código do país
    const link = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(
      mensagem
    )}`;
    comprarLink.href = link;
  }

  quantidadeInput.addEventListener("input", atualizarTotal);
  tipoKitSelect.addEventListener("change", atualizarTotal);

  // Inicializa o link com os valores padrão
  atualizarTotal();
});
