import { NextRequest, NextResponse } from "next/server";

const pinataCID: string = "QmVKajgGbgq43gRKgFC56iq9q2fGAAUqMky4hGKSkTGzpy";
const max_n: number = 3;

function makeFrame(id: number, n: number, cn: number): NextResponse {
  console.log(id, n, cn);
  let imageName: string;
  const imageExtension: string = ".png";
  let image: string;

  if (cn === n) { 
    id = id + 1;
    cn = 0;
  }

  if (id === 4) {
    if (n === max_n) {
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
    n = n + 1;
    id = 1;
  }

  if (id === 1) {
    if (n === 1) {
      imageName = "ek_machli";
    } else if (n === 2) {
      imageName = "do_machli";
    } else if (n === 3) {
      imageName = "teen_machli";
    } else {
      imageName = "error:undefined_machli";
    }
  } else if (id === 2) {
    imageName = "paani_mae_gayi";
  } else if (id === 3) {
    imageName = "chapakk";
  } else {
    imageName = "error:id>3";
  }
  image = imageName + imageExtension;
  cn = cn + 1;

  return new NextResponse(
    `<!DOCTYPE html><html><head>
        <title>This is frame ${id}</title>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${pinataCID}/${image}" />
        <meta property="fc:frame:button:1" content="Next Page" />
        <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${id}&n=${n}&cn=${cn}" />
      </head></html>`,
  );
}

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams;
  const id: any = searchParams.get("id");
  const n: any = searchParams.get("n");
  const cn: any = searchParams.get("cn");
  console.log(id, n, cn);
  let idAsNumber: number = 1;
  let nAsNumber: number = 1;
  let cnAsNumber: number = 0;
  if (id != null) {
    idAsNumber = parseInt(id);
  }
  if (n != null) {
    nAsNumber = parseInt(n);
  }
  if (cn != null) {
    cnAsNumber = parseInt(cn);
  }

  console.log(idAsNumber, nAsNumber, cnAsNumber);

  return makeFrame(idAsNumber, nAsNumber, cnAsNumber);
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = "force-dynamic";
