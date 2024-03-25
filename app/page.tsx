import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

const pinataCID: string = "QmVKajgGbgq43gRKgFC56iq9q2fGAAUqMky4hGKSkTGzpy";

const frameMetaData = getFrameMetadata({
  buttons: [
    {
      label: "Play",
    },
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${pinataCID}/play_machli.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: "Play Machli",
  description:
    "A frame in framecaster to play the simple button pressing machli game",
  openGraph: {
    title: "Play Machli",
    description:
      "A frame in framecaster to play the simple button pressing machli game",
    images: [
      `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${pinataCID}/play_machli.png`,
    ],
  },
  other: {
    ...frameMetaData,
  },
};

export default function page() {
  return <h1>Hello Frames</h1>;
}
