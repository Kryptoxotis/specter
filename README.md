# Specter

Autonomous dev agent with chat web UI, ready for Railway deployment.

## Features
- Node.js backend (Express)
- Spectre.js core logic
- REST API for chat
- Simple web chat UI
- Ready for Railway autodeploy

## Getting Started

1. Clone the repo:
   ```sh
   git clone https://github.com/Kryptoxotis/specter.git
   cd specter
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Copy `.env.example` to `.env` and fill in your keys.
4. Start the server:
   ```sh
   npm start
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy on Railway
1. [Create a Railway account](https://railway.app/)
2. Click "New Project" → "Deploy from GitHub repo"
3. Set environment variables in Railway dashboard
4. Railway will autodeploy on every push

---

**Replace `src/spectre.js` with your full Spectre logic!**
