"use client";

import { useEffect } from "react";

interface Props {
  url: string;
}

export const LogToBrowser = ({ url }: Props) => {
  useEffect(() => {
    console.log("✅ SITE_URL Juliana Rodrigues carregado no navegador:", url);
  }, [url]);

  return null;
};
