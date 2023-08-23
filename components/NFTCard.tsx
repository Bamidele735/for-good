import {
  ThirdwebNftMedia,
  useContract,
  useNFT,
  MediaRenderer,
  Web3Button,
} from "@thirdweb-dev/react";
import type { FC } from "react";
import {
  nftDropContractAddress,
  stakingContractAddress,
  stakingAbi,
} from "../constants/contractAddresses";

interface NFTCardProps {
  tokenId: number;
}

const NFTCard: FC<NFTCardProps> = ({ tokenId }) => {
  const { contract } = useContract(nftDropContractAddress, "nft-drop");
  const { data: nft } = useNFT(contract, tokenId);

  return (
    <div className="col30 nftBoxGrid">
      {nft ? (
        <div className=" ">
          {nft.metadata && <ThirdwebNftMedia metadata={nft.metadata} />}
          <h4>#{nft.metadata.id}</h4>

          <h3>{nft.metadata.name}</h3>
          <Web3Button
            action={(contract) => contract?.call("withdraw", [nft.metadata.id])}
            contractAddress={stakingContractAddress}
            className="Web3Button_stake"
            contractAbi={stakingAbi}
          >
            Withdraw
          </Web3Button>
        </div>
      ) : (
        "No Nfts Staked"
      )}
    </div>
  );
};
export default NFTCard;