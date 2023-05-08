import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/GitHubLink";

// This is the chainId your dApp will work on.

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={{

      chainId: 1030,
      rpc: ["https://evm.confluxrpc.com"],

      nativeCurrency: {
        decimals: 18,
        name: "Conflux Token",
        symbol: "CFX",
      },
      shortName: "confluxespace",
      slug: "conflux",
      testnet: false,
      chain: "Conflux Network",
      name: "Conflux Network Mainnet",

    }}>
      <Head>
        <title>PepeChad OG Minting Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="PepeChad OG Minting Page"
        />
        <meta
          name="keywords"
          content="PepeChad OG Minting Page"
        />
      </Head>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
