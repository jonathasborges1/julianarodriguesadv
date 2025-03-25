// src/lib/ThemeRegistry.tsx
"use client";

import * as React from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "./createEmotionCache";

// 🔧 Criação do cache SSR
const cache = createEmotionCache();

const theme = createTheme({
  palette: {
    mode: "dark", // ou "light", conforme desejado
    primary: { main: "#DAA520" },
    background: { default: "#121212" },
  },
});

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
