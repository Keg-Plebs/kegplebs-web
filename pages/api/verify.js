import { ethers } from 'ethers'
import { gun } from './services/database'

// https://www.youtube.com/watch?v=tVyQZ0CiMWI
// https://mirror.xyz/sha.eth/i6ry1Mxez53z91ef375sMe2rO1NvK2ipACyzKA4SR9g

// Signature verification API
const verify = (req, res) => {

    // Initially set verification to false
    let verified = false;

    // Receive the posted address and signature
    const { address, signature } = req.body;

    // Get the nonce from the data base for the address
    gun.get('root').get('users').get(address).once((nonce) => {

        // Responds with an errr if the nonce can't be found
        if (nonce == null) {
            res.status(404).json({});
            return;
        }

        // Creates the message that was signed on the client
        const message = "Sign this nonce to connect: " + nonce;

        // Verifies the signature by returning the address of the signee
        const signerAddress = ethers.utils.verifyMessage(message, signature);

        // If the signature address matches the posted one, the wallet is verified.
        if (address == signerAddress) {
            verified = true;
        }

        // Send the verification back to the client
        res.status(200).json({ verified });
    });
}

export default verify