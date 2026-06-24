// Guard: this repo standardizes on pnpm. npm/yarn would regenerate
// package-lock.json, which silently drifts from pnpm-lock.yaml and breaks
// Netlify's frozen-lockfile install. Runs from the `preinstall` script.
// Self-contained on purpose: no network fetch, just the package-manager UA.
const ua = process.env.npm_config_user_agent || "";
if (!ua.startsWith("pnpm")) {
  console.error("\n✗ This repo uses pnpm. Run `pnpm install`, not npm or yarn.\n");
  process.exit(1);
}
