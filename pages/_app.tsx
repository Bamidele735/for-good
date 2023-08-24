import { useEffect } from "react";
import "../styles/globals.css";

import "tailwindcss/tailwind.css";

import "../styles/home.css";
import "../styles/stake.css";
import type { AppProps } from "next/app";

import { DefaultSeo } from "next-seo";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

import { ThirdwebProvider, ThirdwebSDKProvider } from "@thirdweb-dev/react";



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
          <meta
              name="description"
              content="Welcome to Angle Warriors, your go-to source for all things Nft Staking."
            />
            <link rel="shortcut icon" href="https://ivory-retail-narwhal-261.mypinata.cloud/ipfs/QmPyxSy6vvYqxpepLewJDr4JaSgo6bgdtLA2N1XTmUNsLT?_gl=1*1ukf6z9*_ga*MTg3MjUyNjQ1LjE2NzA1MzMwOTY.*_ga_5RMPXG14TE*MTY5MjE1OTkxNS4xNC4xLjE2OTIxNjA3OTAuNjAuMC4w" />
            <title> Angle Warriors Staking Dapp</title>
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
       <Navbar />
            <Component {...pageProps} />
   
      
      </ThirdwebProvider>
    </ThirdwebSDKProvider>
  );
}

export default MyApp;