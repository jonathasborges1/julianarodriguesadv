"use client";

import * as React from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import createEmotionCache from "./emotion-cache";

const emotionCache = createEmotionCache();

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
