const formulario = document.getElementById("formulario");
const botoesPlano = document.querySelectorAll(".plano-btn");
const campoServico = document.getElementById("servico");
const secaoOrcamento = document.getElementById("orcamento");
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const linksMenu = document.querySelectorAll("#nav-menu a");

/* MENU MOBILE */
menuToggle.addEventListener("click", function () {
  navMenu.classList.toggle("active");

  if (navMenu.classList.contains("active")) {
    menuToggle.textContent = "✕";
  } else {
    menuToggle.textContent = "☰";
  }
});

/* FECHAR MENU AO CLICAR EM UM LINK */
linksMenu.forEach((link) => {
  link.addEventListener("click", function () {
    navMenu.classList.remove("active");
    menuToggle.textContent = "☰";
  });
});

/* BOTÕES DOS PLANOS */
botoesPlano.forEach((botao) => {
  botao.addEventListener("click", function () {
    const plano = this.getAttribute("data-plano");

    campoServico.value = plano;

    secaoOrcamento.scrollIntoView({
      behavior: "smooth"
    });
  });
});

/* FORMULÁRIO PARA WHATSAPP */
formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const servico = document.getElementById("servico").value;
  const mensagem = document.getElementById("mensagem").value.trim();

  const numeroWhatsApp = "351967167592";

  if (nome === "" || telefone === "" || servico === "") {
    alert("Por favor, preencha o nome, telefone e escolha o serviço desejado.");
    return;
  }

  const texto = `
Olá, Limpeza Prime! ✨

Gostaria de pedir um orçamento de limpeza.

Dados do cliente:
Nome: ${nome}
Telefone: ${telefone}
Serviço desejado: ${servico}

Detalhes do pedido:
${mensagem || "Ainda não informado."}

Por favor, poderiam enviar mais informações sobre disponibilidade e valores?

Obrigado(a)!
  `;

  const textoFormatado = encodeURIComponent(texto);

  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoFormatado}`;

  window.open(linkWhatsApp, "_blank");
});