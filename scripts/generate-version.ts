import { execSync } from "child_process";
import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

// 🔧 Corrige __dirname para funcionar em ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const baseVersion = "1.0.";
const commitCount = execSync("git rev-list --count HEAD").toString().trim();
const version = `${baseVersion}${commitCount}`;

const outputPath = resolve(__dirname, "../public/version.json");

try {
  writeFileSync(outputPath, JSON.stringify({ version }, null, 2), {
    encoding: "utf-8",
  });
  console.log(`✅ Versão gerada: ${version}`);
} catch (error) {
  console.error("❌ Erro ao gerar a versão do projeto:", error);
}
