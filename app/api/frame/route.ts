import { NextRequest, NextResponse } from "next/server";

const pinataCID: string = "QmVKajgGbgq43gRKgFC56iq9q2fGAAUqMky4hGKSkTGzpy";

function makeFrame(id: number): NextResponse {
  const nextId = id + 1;
  let imageName: string;
  const imageExtension: string = ".png";
  let image: string;

  if (id === 4) {
    return new NextResponse(
      `<!DOCTYPE html><html><head>
          <title>This is frame ${id}</title>
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${pinataCID}/play_machli.png" />
          <meta property="fc:frame:button:1" content="Free mint shhh" />
          <meta property="fc:frame:button:1:action" content="post_redirect" />
          <meta property="fc:frame:button:2" content="Tutorial I followed" />
          <meta property="fc:frame:button:2:action" content="post_redirect" />
          <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
        </head></html>`,
    );
  }

  if (id === 1) {
    imageName = "ek_machli";
  } else if (id === 2) {
    imageName = "paani_mae_gayi";
  } else {
    imageName = "chapakk";
  }
  image = imageName + imageExtension;

  return new NextResponse(
    `<!DOCTYPE html><html><head>
        <title>This is frame ${id}</title>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${pinataCID}/${image}" />
        <meta property="fc:frame:button:1" content="Next Page" />
        <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
      </head></html>`,
  );
}

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams;
  const id: any = searchParams.get("id");
  const idAsNumber: number = parseInt(id);

  return makeFrame(idAsNumber);
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = "force-dynamic";
