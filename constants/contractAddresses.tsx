export const nftDropContractAddress = "0x015Aa1cc295b3C4612DbD509cF6a2D1013E47aDd";
export const tokenContractAddress = "0xCb3e9919C56efF1004E54175a01e39163a352129";
export const stakingContractAddress = "0xF48680aC173b8d9Ae55969a3b61C36E5cd8B3736";
export const stakingAbi = [
    {
      "type": "constructor",
      "inputs": [
        {
          "type": "address",
          "name": "_nftCollection",
          "internalType": "contract IERC721"
        },
        {
          "type": "address",
          "name": "_rewardsToken",
          "internalType": "contract IERC20"
        }
      ]
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }],
      "name": "availableRewards",
      "inputs": [
        { "type": "address", "name": "_staker", "internalType": "address" }
      ]
    },
    {
      "type": "function",
      "stateMutability": "nonpayable",
      "outputs": [],
      "name": "claimRewards",
      "inputs": []
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [{ "type": "address", "name": "", "internalType": "address" }],
      "name": "getOwner",
      "inputs": []
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }],
      "name": "getRewardTokenPerTime",
      "inputs": []
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }],
      "name": "getRewardsPerHour",
      "inputs": []
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [
        {
          "type": "uint256[]",
          "name": "_tokensStaked",
          "internalType": "uint256[]"
        },
        { "type": "uint256", "name": "_rewards", "internalType": "uint256" }
      ],
      "name": "getStakeInfo",
      "inputs": [
        { "type": "address", "name": "staker", "internalType": "address" }
      ]
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [
        {
          "type": "tuple[]",
          "name": "",
          "internalType": "struct Angelwarrior.StakedToken[]",
          "components": [{ "type": "address" }, { "type": "uint256" }]
        }
      ],
      "name": "getStakedTokens",
      "inputs": [
        { "type": "address", "name": "_user", "internalType": "address" }
      ]
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [
        { "type": "address", "name": "", "internalType": "contract IERC721" }
      ],
      "name": "nftCollection",
      "inputs": []
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [
        { "type": "address", "name": "", "internalType": "contract IERC20" }
      ],
      "name": "rewardsToken",
      "inputs": []
    },
    {
      "type": "function",
      "stateMutability": "nonpayable",
      "outputs": [],
      "name": "stake",
      "inputs": [
        { "type": "uint256", "name": "_tokenId", "internalType": "uint256" }
      ]
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [{ "type": "address", "name": "", "internalType": "address" }],
      "name": "stakerAddress",
      "inputs": [{ "type": "uint256", "name": "", "internalType": "uint256" }]
    },
    {
      "type": "function",
      "stateMutability": "view",
      "outputs": [
        { "type": "uint256", "name": "amountStaked", "internalType": "uint256" },
        {
          "type": "uint256",
          "name": "timeOfLastUpdate",
          "internalType": "uint256"
        },
        {
          "type": "uint256",
          "name": "unclaimedRewards",
          "internalType": "uint256"
        }
      ],
      "name": "stakers",
      "inputs": [{ "type": "address", "name": "", "internalType": "address" }]
    },
    {
      "type": "function",
      "stateMutability": "nonpayable",
      "outputs": [],
      "name": "transferOwnership",
      "inputs": [
        { "type": "address", "name": "newOwner", "internalType": "address" }
      ]
    },
    {
      "type": "function",
      "stateMutability": "nonpayable",
      "outputs": [],
      "name": "updateRewardTokenPerTime",
      "inputs": [
        {
          "type": "uint256",
          "name": "_newRewardTokenPerTime",
          "internalType": "uint256"
        }
      ]
    },
    {
      "type": "function",
      "stateMutability": "nonpayable",
      "outputs": [],
      "name": "updateRewardsPerHour",
      "inputs": [
        {
          "type": "uint256",
          "name": "_newRewardsPerHour",
          "internalType": "uint256"
        }
      ]
    },
    {
      "type": "function",
      "stateMutability": "nonpayable",
      "outputs": [],
      "name": "withdraw",
      "inputs": [
        { "type": "uint256", "name": "_tokenId", "internalType": "uint256" }
      ]
    },
    {
      "type": "event",
      "name": "OwnershipTransferred",
      "inputs": [
        { "type": "address", "name": "previousOwner", "indexed": true },
        { "type": "address", "name": "newOwner", "indexed": true }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "RewardsPerHourUpdated",
      "inputs": [
        { "type": "uint256", "name": "newRewardsPerHour", "indexed": false }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "eRewardTokenPerTime",
      "inputs": [
        { "type": "uint256", "name": "newRewardTokenPerTime", "indexed": false }
      ],
      "anonymous": false
    }
  ];  
//0x36a9848B9f4669E8aF13841FCD8f6AA4FC0b91bb
//0xe550Eb934C2291D9A4C9913336409117936f80A0






// // amount
// : 
// "1"
// block_number
// : 
// "42349027"
// block_number_minted
// : 
// "42349027"
// contract_type
// : 
// "ERC721"
// last_metadata_sync
// : 
// "2023-05-06T14:36:31.422Z"
// last_token_uri_sync
// : 
// "2023-05-05T21:17:59.751Z"
// metadata
// : 
// "{\"name\":\"Flowers On A Wednesday #B6\",\"description\":\"Flowers and Tigers and Bears, FlowerPets, Creepets and SteamPets.\",\"image\":\"ipfs://QmNnf2TqLb73ChDyFrr5Vka766dT9DXaZ5RRn8yTg2LfuN/6.png\",\"attributes\":[],\"compiler\":\"mintfoundry.xyz\"}"
// minter_address
// : 
// null
// name
// : 
// "GREAT FLOWERS"
// owner_of
// : 
// "0x80cd52607b7ebd0f9953989cfab6b2d74e9ddee7"
// possible_spam
// : 
// false
// symbol
// : 
// "GDAFOAW"
// token_address
// : 
// "0x421ef0d9679d1c24ef976b06638566a64aac2780"
// token_hash
// : 
// "1ef33fbe357f5a2300bb2452cc68175c"
// token_id
// : 
// "6"
// token_uri
// : 
// "