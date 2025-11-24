# Voice Assistant Client Portal (Scaffold)

This repository contains a frontend and backend scaffold for a client portal to manage AI voice assistants.

- Frontend: `frontend/` — Vite + React + TypeScript + Tailwind (black & white premium theme, demo mode)
- Backend: `backend/` — Serverless Framework + Node.js + TypeScript, DynamoDB, S3 presign, simple email/password auth (demo)

This is a starter scaffold. It provides demo flows and wiring to extend for production.

Quick start (frontend):

```bash
cd frontend
npm install
npm run dev
```

Quick start (backend - offline local dev):

```bash
cd backend
npm install
# You will need the Serverless Framework CLI installed: npm install -g serverless
npx serverless offline start
```

Important notes
- Configure your AWS credentials for Serverless deploy and S3/Dynamo access.
- Store API keys (ElevenLabs, Deepgram, OpenAI) in Secrets Manager and configure the functions to read them.
- This scaffold provides demo-mode UI and minimal backend endpoints. Review security before production.

See `frontend/README.md` and `backend/README.md` for more details.
# voice-assistant-ai