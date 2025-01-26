// Captura o formulário pelo ID
const form = document.getElementById('contact-form');

// Adiciona um ouvinte de evento para quando o formulário for enviado
form.addEventListener('submit', function(event) {
  // Impede o envio do formulário, para que você possa capturar os dados primeiro
  event.preventDefault();

  // Captura os dados do formulário
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  // Exibe os dados no console ou faça algo com eles (como enviar para um servidor)
  console.log('Nome:', name);
  console.log('Email:', email);
  console.log('Telefone:', phone);
  console.log('Mensagem:', message);

  // Opcional: exibir uma mensagem de sucesso
  alert("Formulário enviado com sucesso!");

  // Se você quiser limpar o formulário após o envio
  form.reset();
});