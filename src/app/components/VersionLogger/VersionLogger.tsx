"use client";

import { useEffect } from "react";

export function VersionLogger() {
  useEffect(() => {
    fetch("/version.json")
      .then(async (res) => {
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const data = await res.json();

        if (!data.version || !data.commit || !data.buildTime) {
          throw new Error("Campos ausentes no version.json");
        }

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
