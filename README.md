# NFT Raffle

This is a tool for creating raffles on the XRP Ledger.

This is a submittion for the [XRP Ledger hackathon](https://devpost.com/software/nft-raffle).

## Inspiration

![Nic's kitchen](https://raw.githubusercontent.com/hammertoe/nft_raffle/main/images/nicole-souse_small.jpeg) ![Nic's car crash](https://raw.githubusercontent.com/hammertoe/nft_raffle/main/images/nicole-car-crash_small.jpeg)

My good friend, Nicole runs a small catering business from her kitchen in Barbados. She cooks food for collection and delivery by foot in her neighbourhood. She had managed to save up for a used car to help grow her business and be able to expand her delivery area. Four days after getting the car, a truck hit her and the car was written off. Luckily she was OK, but the car is beyond repair. As it was so old, and purchased from a family member there is no official valuation and insurance will unlikely pay out anything near the cost of actually replacing it.

So I came up with the idea of running a fundraiser to buy her another car. The plan is to raffle off a handmade crochet blanket made by my wife. 

But we need a way to run the raffle. Here is where the XRP Ledger, XLS-20 NFTs and hooks come in!

## What it does

NFT Raffle allows people to purchase any number of raffle tickets by sending a payment to a particular XRP Ledger address. A hook listens on the account and dynamically generates numbered NFTs and sends them back by return (or to a nominated address in the memo field) automatically. e.g. if each ticket is 10 XRP, and someone sends 50 XRP to the raffle address, then the hook creates 5 NFTs and offers to sell them to that specific address for 0 (as they have already been purchased).

This means the NFTs are not created until they are purchased (saves ledger bloat) and each one can be customised on creation with a unique number, or even a message.

## How we built it

We used XLS-20 and Hooks on the XRP Ledger in order to dynamically mint NFTs to send to the user. The hooks part was developed using the Hooks Builder UI by XRPL Labs over a number of live streaming sessions on Twitch. The NFT image itself is stored on [NFT.storage](https://NFT.storage) by Protocol Labs.

[![Hackathon stream ep 1](https://raw.githubusercontent.com/hammertoe/nft_raffle/main/images/hackathon-ep1-image.jpg)](https://cinnamon.video/watch?v=889017736968012801)

[![Hackathon stream ep 2](https://raw.githubusercontent.com/hammertoe/nft_raffle/main/images/hackathon-ep2-image.jpg)](https://cinnamon.video/watch?v=889017736968012801)

[![Hackathon stream ep 3](https://raw.githubusercontent.com/hammertoe/nft_raffle/main/images/hackathon-ep3-image.jpg)](https://cinnamon.video/watch?v=889847728106898740)

## Challenges we ran into

The Hooks Builder UI was brand new and as yet unreleased when we were using it. So learning how the UI worked as well as how Hooks themselves worked was a bit of a challenge. As we remembering how to code in C!

With hooks you need to do a certain amount of pre-allocation of memory and reference counting. This was something to get used to and work out exactly when we needed to allocate memory. Could we do it just at the start? Could we incrementally allocate more memory during runtime? Or was it a compile-time macro?

## Accomplishments that we're proud of

Whilst the hooks builder has a number of pre-built template examples to use, none of which included XLS-20 support for minting NFTs. So we had to work out how to mint an NFT using the C API for hooks. We are hoping to contribute an example based on our work back to the Hooks builder UI.

We are proud to showcase live on Twitch how to use the NFT Builder UI, test hooks, test XLS-20, and demo to the world how these technologies can be used together to create applications of real world value on the XRP Ledger.

## What we learned

- How to use the Hooks Builder UI
- How to mint an XLS-20 NFT in C
- How to create an offer to sell an XLS-20 NFT in C
- How to use NFS.Storage to store the NFT jpg on IPFS

## What's next for NFT Raffle

We intend to run a live raffle with the code in order to raffle off a prize in order to raise money for Nicole's car. At the moment this will be a bit difficult as it is running on a testnet, so unable to sell raffle tickets for real-world XRP. So we are considering setting up a sidechain to run this. People will be able to buy tickers sending XRP from the main net to the sidechain. Again, we will stream this live to help others learn how to create sidechains.
