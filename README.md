# NFT Raffle

This is a tool for creating raffles on the XRP Ledger.

This is a submittion for the [XRP Ledger hackathon](https://devpost.com/software/nft-raffle).

## Inspiration

My good friend, Nicole runs a small catering business from her kitchen in Barbados. She cooks food for collection and delivery by foot in her neighbourhood. She had managed to save up for a used car to help grow her business and be able to expand her delivery area. Four days after getting the car, a truck hit her and the car was written off. Luckily she was OK, but the car is beyond repair. As it was so old, and purchased from a family member there is no official valuation and insurance will unlikely pay out anything near the cost of actually replacing it.

So I came up with the idea of running a fundraiser to buy her another car. The plan is to raffle off a handmade crochet blanket made by my wife. 

But we need a way to run the raffle. Here is where the XRP Ledger, XLS-20 NFTs and hooks come in!

## What it does

NFT Raffle allows people to purchase any number of raffle tickets by sending a payment to a particular XRP Ledger address. A hook listens on the account and dynamically generates numbered NFTs and sends them back by return (or to a nominated address in the memo field) automatically. e.g. if each ticket is 10 XRP, and someone sends 50 XRP to the raffle address, then the hook creates 5 NFTs and offers to sell them to that specific address for 0 (as they have already been purchased).

This means the NFTs are not created until they are purchased (saves ledger bloat) and each one can be customised on creation with a unique number, or even a message.

## How we built it

We used XLS-20 and Hooks on the XRP Ledger in order to dynamically mint NFTs to send to the user. The hooks part was developed using the Hooks Builder UI by XRPL Labs over a number of live streaming sessions on Twitch. The NFT image itself is stored on [NFT.storage](https://NFT.storage) by Protocol Labs.

[![Hackathon stream ep 1](https://github.com/hammertoe/nft_raffle/blob/main/images/hackathon-ep1-image.jpg)](https://cinnamon.video/watch?v=889017736968012801)

[![Hackathon stream ep 2](https://github.com/hammertoe/nft_raffle/blob/main/images/hackathon-ep2-image.jpg)](https://cinnamon.video/watch?v=889017736968012801)

## Challenges we ran into

## Accomplishments that we're proud of

## What we learned

## What's next for NFT Raffle


https://bafkreigtjbmwxkbaj4gnesjbq7yzwyat5xgg5wrjusymxvb4ratkdtylci.ipfs.nftstorage.link/
