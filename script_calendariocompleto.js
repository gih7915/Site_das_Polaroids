document.addEventListener("DOMContentLoaded", function () {
  const tipoKitSelect = document.getElementById("tipo-kit");
  const totalElement = document.getElementById("total");
  const comprarLink = document.getElementById("comprar-link");
  const quantidade = 19.99; // Quantidade fixa de 12 polaroids

  function atualizarTotal() {
    const preco = parseFloat(tipoKitSelect.value);
    const total = quantidade * preco;
    totalElement.textContent = total.toFixed(2);
    atualizarLinkWhatsApp(total.toFixed(2));
  }

  function atualizarLinkWhatsApp(total) {
    const tipoKitTexto =
      tipoKitSelect.options[tipoKitSelect.selectedIndex].text;
    const mensagem = `Olá, gostaria de comprar o Calendário Completo 2024 do tipo "${tipoKitTexto}" no valor total de R$ ${total}.`;
    const numeroWhatsApp = "5561992432061"; // Substitua pelo seu número do WhatsApp com o código do país
    const link = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(
      mensagem
    )}`;
    comprarLink.href = link;
  }

  tipoKitSelect.addEventListener("change", atualizarTotal);

  // Inicializa o link com os valores padrão
  atualizarTotal();
});
