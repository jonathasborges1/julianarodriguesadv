import { NextRequest, NextResponse } from "next/server";

const ACTION_URL =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLScoQvQocgpRJN_pq--JkyZrZZ_mNVyaa1i9AJGWpupQmGBZGg/formResponse";

const EMAIL_ID = "entry.2045730290";
const SUBJECT_ID = "entry.597770551";
const MESSAGE_ID = "entry.2013840423";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const formBody = new URLSearchParams({
      [EMAIL_ID]: body.email,
      [SUBJECT_ID]: body.subject,
      [MESSAGE_ID]: body.message,
    }).toString();

    const response = await fetch(ACTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody,
    });

    const text = await response.text();

    if (response.ok) {
      return NextResponse.json(
        { message: "Formulário enviado com sucesso!" },
        { status: 200 }
      );
    } else {
      console.error("Erro ao enviar formulário:", text);
      return NextResponse.json(
        {
          message: "Erro ao enviar os dados para o Google Forms.",
          status: response.status,
          details: text,
        },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("Erro inesperado ao processar envio:", error);
    return NextResponse.json(
      { message: "Erro inesperado ao processar envio.", error },
      { status: 500 }
    );
  }
}
