import CardBox from "./components/CardBox";
import ChainsList from "./components/ChainsList";
import ConnectBtn from "./components/ConnectBtn";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function Home() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <div className="w-[100%] h-[100vh] flex justify-center items-center bg-[#fefefe]">
          <div>
            <ChainsList />
            <CardBox />
          </div>
          <ConnectBtn />
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
