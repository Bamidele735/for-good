


import { useEffect } from "react";
import "../styles/globals.css";

import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThirdwebProvider, ThirdwebSDKProvider } from "@thirdweb-dev/react";
import { Optimism } from "@thirdweb-dev/chains";
import { useNetworkMismatch } from "@thirdweb-dev/react";
import "../styles/globals.css";

const activeChain = "Optimism";

function MyApp({ Component, pageProps }: AppProps) {


  useEffect(() => {
    const App = () => {
      const isMismatched = useNetworkMismatch();
    };
  });

  return (
    <ThirdwebSDKProvider activeChain={activeChain}>
      <ThirdwebProvider
        activeChain={{
          // === Required information for connecting to the network === \\
          chainId: 3797, // Chain ID of the network
          // Array of RPC URLs to use
          rpc: ["https://alveychain.rpc.thirdweb.com"],

          // === Information for adding the network to your wallet (how it will appear for first time users) === \\
          // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
          nativeCurrency: {
            decimals: 18,
            name: " AlveyChain Mainnet",
            symbol: "ALV",
          },
          shortName: "ALV", // Display value shown in the wallet UI
          slug: "ALV Mainnet", // Display value shown in the wallet UI
          testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
          chain: "AlveyChain", // Name of the network
          name: "  AlveyChain", // Name of the network
        }}
        clientId={"316ac75a2ee3b40ab6438468663b00b7"}
      >
          <Head>
            <title>Title</title>
            <link rel="icon" href="/favicon/favicon.ico" />

            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#000000" />
          </Head>
         
            <Component {...pageProps} />
      </ThirdwebProvider>
    </ThirdwebSDKProvider>
  );
}

export default MyApp;

        