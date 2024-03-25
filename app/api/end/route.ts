import { NextRequest, NextResponse } from "next/server";

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const data = await req.json();
  const buttonId = data.untrustedData.buttonIndex;

  let path: string;
  if (buttonId === 1) {
    path = "youknowit";
  } else if (buttonId === 2) {
    path = "pinatacloud";
  } else {
    path = "undefined";
  }

  const headers: Headers = new Headers();
  headers.set("Location", `${process.env.NEXT_PUBLIC_BASE_URL}/`);
  const response: NextResponse = NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_BASE_URL}/${path}]`,
    {
      headers: headers,
      status: 302,
    },
  );
  return response;
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = "force-dynamic";
