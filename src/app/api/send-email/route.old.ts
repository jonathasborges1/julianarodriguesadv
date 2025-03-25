import { NextRequest, NextResponse } from "next/server";

// const ACTION_URL =
//   "https://script.google.com/macros/s/AKfycbyKBCPLwWX1de4JJzPSW82fczeluNLCi1JRYHQ28NpPVTMWHdZ1pTOUSw9_JEVA1G9y/exec";

const ACTION_URL =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLScoQvQocgpRJN_pq--JkyZrZZ_mNVyaa1i9AJGWpupQmGBZGg/formResponse";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const response = await fetch(ACTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8", // IMPORTANTE
      },
      body: JSON.stringify(body),
    });

    const text = await response.text();

    return new NextResponse(text, {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Erro ao enviar e-mail.", error },
      { status: 500 }
    );
  }
}
