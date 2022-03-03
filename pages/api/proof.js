import MerkleTree from 'merkletreejs'
import * as keccak256 from 'keccak256'

// Dummy list of addresses
let whitelistsAddresses = [
    "0xeeA26c72182C96fD121db4b111C3f43607aaA809",
    "0x4f0725D78e4333C5Fa3c62805a715D6084258935",
    "0xBcf7A9Cc71c8F442668F06eda14bf7D111d52A1F",
    "0x84e950B2d8B70Dc899aaE64880dD2c2A833d785C"
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