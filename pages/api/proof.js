import MerkleTree from 'merkletreejs'
import * as keccak256 from 'keccak256'

const whitelistsAddresses = require('../../public/Wallet_Submission_Keg_Plebs_-_Sheet1_1.json')

// Hashes all the leaf nodes (addresses) using the keccak256 hash function
const leafNodes = whitelistsAddresses.map(address => keccak256(address));

// Creates the merkle tree using the leafnodes and the hash function
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

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