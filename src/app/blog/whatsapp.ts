const WHATSAPP_PHONE = "5592982301415";

export function buildArticleWhatsAppUrl(articleTopic: string) {
  const text = `Olá, Dra. Juliana. Vim pelo artigo sobre ${articleTopic} e gostaria de agendar uma consulta para entender meus direitos.`;

  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
    text
  )}`;
}
