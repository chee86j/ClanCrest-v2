# ClanCrest-v2

ClanCrest is a family-tree application scaffold with a Vite/React frontend and an Express backend.

## Current status

This repository has a security baseline and CI checks, but it is **not production-ready** yet. The dashboard is intentionally locked until real server-side authentication is implemented.

## Local development

Backend:

```bash
cd backend
cp .env.example .env
npm ci
npm run dev
```

Frontend:

```bash
cd frontend
cp .env.example .env
npm ci
npm run dev
```

## Security posture

- Do not commit `.env` files or real credentials.
- The frontend may only use public `VITE_` variables.
- Protected backend routes must use server-side authentication.
- Future family-tree APIs must enforce record ownership in the database query/data-access layer.
- Do not trust browser-submitted `userId`, `ownerId`, `role`, or permission fields.

## Next production milestones

1. Choose and implement authentication provider.
2. Add database schema for users, family trees, members, relationships, and invitations.
3. Add protected CRUD APIs with server-side validation and record-level authorization.
4. Add tests for unauthenticated access and cross-user access denial.
5. Configure production HTTPS, CORS origins, and deployment secrets.
