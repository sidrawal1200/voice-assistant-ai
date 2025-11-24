# Backend — Serverless (Node + TypeScript)

This directory contains a Serverless Framework scaffold for Lambdas that provide basic auth (email/password), presigned S3 uploads, and simple demo endpoints.

Local dev:

```bash
cd backend
npm install
# install serverless globally if needed: npm i -g serverless
npx serverless offline start
```

Configuration:
- Copy `.secrets.example` to `.env` and set values
- AWS credentials are required for deploying and for DynamoDB/S3 access

This is a minimal scaffold and must be hardened before production use.
