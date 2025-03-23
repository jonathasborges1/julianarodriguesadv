"use client";

import { useEffect } from "react";

export function VersionLogger() {
  useEffect(() => {
    fetch("/version.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("🧭 Versão do projeto:");
        console.log(`   🔢 Versão: ${data.version}`);
        console.log(`   🧬 Commit: ${data.commit}`);
        console.log(
          `   🕒 Build: ${new Date(data.buildTime).toLocaleString("pt-BR")}`
        );
      })
      .catch((error) => {
        console.error("❌ Erro ao carregar versão do projeto:", error);
      });
  }, []);

  return null;
}
