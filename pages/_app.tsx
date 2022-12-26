import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Head>
        <title>EtherWeed-R-Us</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Here at EtherWeed, we believe in the power of NFTs and see the changes theyve already made in our society. It is our mission to ensure that every artist or collector, has an NFT to give to someone who has not had the chance to buy yet. Not too many things are as universally understood , than some bomb a$$ bud! So share the love, take some bud, and remember, here at EtherWeed-R-Us, you matter."
        />
        <meta
          name="keywords"
          content="KronicLabz, KronicKatz, PolyWeed, EtherWeed"
        />
      </Head>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
