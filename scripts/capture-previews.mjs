// Captures a screenshot of every live project in lib/data.ts into public/previews/.
// Run with: npm run previews   (macOS: uses Google Chrome headless + sips)
// If a site is unreachable its old screenshot is removed, so the site shows the text card instead.
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, rmSync, statSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

const CHROME =
  process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const OUT = join(process.cwd(), "public", "previews");
mkdirSync(OUT, { recursive: true });

const src = readFileSync(join(process.cwd(), "lib", "data.ts"), "utf8");
const work = src.slice(src.indexOf("export const work"), src.indexOf("export const experience"));
const items = [...work.matchAll(/slug: "([^"]+)"[\s\S]*?href: "(https?:\/\/[^"]+)"/g)].map(
  ([, slug, href]) => ({ slug, href }),
);

for (const { slug, href } of items) {
  const final = join(OUT, `${slug}.jpg`);
  try {
    const res = await fetch(href, { redirect: "follow", signal: AbortSignal.timeout(15000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const png = join(tmpdir(), `${slug}-${Date.now()}.png`);
    execFileSync(CHROME, [
      "--headless=new",
      "--hide-scrollbars",
      "--disable-gpu",
      "--virtual-time-budget=8000",
      "--window-size=1440,1400",
      `--screenshot=${png}`,
      href,
    ], { stdio: "ignore", timeout: 60000 });
    if (!existsSync(png) || statSync(png).size < 5000) throw new Error("blank screenshot");

    // Keep the top 1440×760 (above bottom-pinned cookie banners), then shrink to 960 wide.
    // sips treats a 0,0 offset as "centre", so 1,1 is used to anchor the crop to the top.
    execFileSync("sips", ["--cropToHeightWidth", "760", "1440", "--cropOffset", "1", "1", png], { stdio: "ignore" });
    execFileSync("sips", ["-s", "format", "jpeg", "-s", "formatOptions", "72", "--resampleWidth", "960", png, "--out", final], { stdio: "ignore" });
    rmSync(png);
    console.log(`✓ ${slug}  ${href}`);
  } catch (err) {
    rmSync(final, { force: true });
    console.log(`✕ ${slug}  ${href}  (${err.message}) → text card fallback`);
  }
}
