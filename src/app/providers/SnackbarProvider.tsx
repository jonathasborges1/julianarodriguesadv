// src/app/providers/SnackbarProvider.tsx
"use client";

import React from "react";
import { SnackbarProvider } from "notistack";

export function NotistackProvider({ children }: { children: React.ReactNode }) {
  return (
    <SnackbarProvider
      maxSnack={3} // Número máximo de Snackbars que podem ser exibidos ao mesmo tempo
      autoHideDuration={4000} // Duração padrão de 4 segundos
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }} // Posição no canto inferior esquerdo
      preventDuplicate // Evita a exibição de Snackbars duplicados
      dense // Usa uma versão mais compacta do Snackbar
    >
      {children}
    </SnackbarProvider>
  );
}
