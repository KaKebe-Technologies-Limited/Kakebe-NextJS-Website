/**
 * Static build script for Namecheap shared hosting.
 * Temporarily moves app/api and app/admin (which require a Node.js server)
 * out of the way so Next.js can do a clean static export, then restores them.
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const moves = [
  [path.join(root, "app", "api"), path.join(root, "_api_backup")],
  [path.join(root, "app", "admin"), path.join(root, "_admin_backup")],
];

function move(src, dest) {
  if (fs.existsSync(src)) {
    fs.renameSync(src, dest);
    console.log(`  moved: ${path.relative(root, src)} → ${path.relative(root, dest)}`);
  }
}

function restore(src, dest) {
  if (fs.existsSync(dest)) {
    fs.renameSync(dest, src);
    console.log(`  restored: ${path.relative(root, src)}`);
  }
}

// Clean stale Next.js cache so it doesn't reference moved routes
const nextCache = path.join(root, ".next");
if (fs.existsSync(nextCache)) {
  fs.rmSync(nextCache, { recursive: true, force: true });
  console.log("  cleaned: .next cache");
}

console.log("\n[build-static] Hiding server-only routes...");
for (const [src, dest] of moves) move(src, dest);

let exitCode = 0;
try {
  console.log("[build-static] Running next build...\n");
  execSync("npm run build", { stdio: "inherit", cwd: root });
} catch (e) {
  exitCode = e.status ?? 1;
} finally {
  console.log("\n[build-static] Restoring server-only routes...");
  for (const [src, dest] of moves) restore(src, dest);
}

process.exit(exitCode);
