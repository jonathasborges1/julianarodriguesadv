export interface EmailGoogleForm {
  email: string;
  subject: string;
  message: string;
}

export const SendEmailWithGoogleForm = async (
  form: EmailGoogleForm
): Promise<void> => {
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      // Mensagem padrão de erro com status HTTP
      let errorMessage = `Erro ao enviar email, teste mais tarde | ${response.status}`;

      try {
        const contentType = response.headers.get("content-type");

        // Se for JSON, tenta extrair uma mensagem de erro
        if (contentType && contentType.includes("application/json")) {
          const json = await response.json();
          errorMessage = json.message || errorMessage;
        } else {
          // Se for texto (mas não HTML), exibe como mensagem
          const text = await response.text();
          if (!text.startsWith("<!DOCTYPE html")) {
            errorMessage = text;
          }
        }
      } catch (parseError) {
        console.warn("Erro ao interpretar resposta:", parseError);
      }

      throw new Error(errorMessage);
    }

    // Caso sucesso
    const responseBody = await response.json();
    console.info("SendEmailWithGoogleForm > responseBody:", responseBody);
  } catch (error) {
    console.error("SendEmailWithGoogleForm:", error);
    throw error; // Continua sendo tratado pelo Formik
  }
};
