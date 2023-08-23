import { useEffect } from "react";
import "../styles/globals.css";

import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";

import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

import { ThirdwebProvider, ThirdwebSDKProvider } from "@thirdweb-dev/react";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThirdwebSDKProvider
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
    >
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
        clientId={"b4bb3bbb64fb1ca7ecb6311dab128c76"}
      >
       
          <Head>
            <title>Title</title>
            <link rel="icon" href="/favicon/favicon.ico" />

            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#000000" />
          </Head>
          <DefaultSeo
            openGraph={{
              type: "website",
              locale: "en_US",
             
              site_name: "Title",
              title: "Title",
              description: "description",
             
            }}
            twitter={{
              handle: "@",
              site: "@",
              cardType: "summary_large_image",
            }}
            additionalLinkTags={[
              {
                rel: "icon",
                href: "/favicon/favicon.ico",
              },
            ]}
          />
      
            <Component {...pageProps} />
   
      
      </ThirdwebProvider>
    </ThirdwebSDKProvider>
  );
}

export default MyApp;