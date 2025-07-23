function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  const userMessage = input.value.trim();
  if (!userMessage) return;

  chatBox.innerHTML += `<div><b>Kamu:</b> ${userMessage}</div>`;
  input.value = "";

  // Placeholder bot reply
  setTimeout(() => {
    chatBox.innerHTML += `<div><b>AI:</b> Ini jawaban contoh ya</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1000);
}
