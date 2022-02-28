import MerkleTree from 'merkletreejs'
import * as keccak256 from 'keccak256'

// Dummy list of addresses
let whitelistsAddresses = [
    "0xeeA26c72182C96fD121db4b111C3f43607aaA809",
    "0x55242580EBe0FB5Eb2E02C40719438D1a203821C",
    "0x938D6c8E5d30fe0641d3b71c8B01C9a373daDfD3",
    "0x133896E34456480878ADa62523B4AE574af37B3F",
    "0xee43b18Cd6934DeFE55a47C4c36B92209e1b5290",
    "0x920627f361E968aa9da4302EbB09ba59754e1c50",
    "0x6DaE362F6cbb47e1D1db8BFbFf91Cb005904808b",
    "0xe2CF5f31Ec67691398769Ca7192cca11f1c94227",
    "0x4f0725D78e4333C5Fa3c62805a715D6084258935"
];

// Hashes all the leaf nodes (addresses) using the keccak256 hash function
const leafNodes = whitelistsAddresses.map(address => keccak256(address));

// Creates the merkle tree using the leafnodes and the hash function
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
console.log(merkleTree.getHexRoot())

// MerkleTree proof API
const proof = (req, res) => {

    // Gets the wallet address from the request body
    const { address } = req.body;

    // Hashes the address using keccak256
    const hashedAddress = keccak256(address);

    // Calculates the proof -- empty array if the address isn't in the tree
    const hexProof = merkleTree.getHexProof(hashedAddress);
    res.status(200).json({hexProof})
}

export default proof