import { existsSync } from "fs";

console.log("Checking ClanCrest Backend setup...\n");

if (!existsSync(".env")) {
  console.log(".env file not found!");
  console.log(`
Copy .env.example to .env and fill in real values locally.

Current required variables:
- NODE_ENV
- PORT
- FRONTEND_URL
- ALLOWED_ORIGINS
- REQUEST_BODY_LIMIT

Do not commit .env or real credentials.
  `);
  process.exit(1);
}

console.log(".env file found");
console.log("Setup check completed.");
console.log("Next step: npm run dev");
