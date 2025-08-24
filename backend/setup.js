import { execSync } from "child_process";
import { existsSync } from "fs";
import { join } from "path";

console.log("Setting up ClanCrest Backend...\n");

// Check if .env file exists
if (!existsSync(".env")) {
  console.log(".env file not found!");
  console.log("Please create a .env file with the following variables:");
  console.log(`
# Database Configuration
DATABASE_URL="postgresql://postgres:<YOUR_PASSWORD>@localhost:5432/clancrest?schema=public"

# JWT Configuration
JWT_SECRET=<YOUR_SECRET_KEY>

# Google OAuth Credentials
GOOGLE_CLIENT_ID=<YOUR_GOOGLE_CLIENT_ID>.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=<YOUR_GOOGLE_CLIENT_SECRET>

# Server Configuration
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173

# CORS Origins
ALLOWED_ORIGINS=http://localhost:5173
  `);
  process.exit(1);
}

console.log(".env file found");

// Generate Prisma client
console.log("\nGenerating Prisma client...");
try {
  execSync("npm run db:generate", { stdio: "inherit" });
  console.log("Prisma client generated");
} catch (error) {
  console.log("Failed to generate Prisma client");
  process.exit(1);
}

// Create initial migration
console.log("\nCreating initial database migration...");
try {
  execSync("npm run db:migrate", { stdio: "inherit" });
  console.log("Database migration completed");
} catch (error) {
  console.log("Failed to create migration");
  console.log("Make sure PostgreSQL is running and the database exists");
  process.exit(1);
}

console.log("\nSetup completed successfully!");
console.log("\nNext steps:");
console.log("1. Start the server: npm run dev");
console.log("2. Test the API: curl http://localhost:3000/health");
console.log("3. Open Prisma Studio: npm run db:studio"); 