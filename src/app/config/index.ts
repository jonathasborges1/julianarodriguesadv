const ConfigApp = {
  RECAPTCHA_KEY:
    process.env.NEXT_PUBLIC_RECAPTCHA_KEY ??
    "6Lda30cpAAAAAHBjRWapooRLO72rh83_VbbKevnf",
  CLIENT_SECRET: process.env.CLIENTE_SECRET ?? "",
  REFRESH_TOKEN: process.env.REFRESH_TOKEN ?? "",
  REFRESH_TOKEN_DO_JHON: process.env.REFRESH_TOKEN_DO_JHON ?? "",
};

export default ConfigApp;
