import { v4 as uuidv4 } from 'uuid';
import { gun } from './services/database'

// https://www.youtube.com/watch?v=tVyQZ0CiMWI
// https://mirror.xyz/sha.eth/i6ry1Mxez53z91ef375sMe2rO1NvK2ipACyzKA4SR9g

// TODO: Look into creating a user session when they connect their wallet
// by creating an access token

// Wallet authentication API
const authenticate = (req, res) => {

    // Receive the posted address
    const { address } = req.body;

    // Generates a cryptographically secure nonce for the user to sign
    const nonce = uuidv4();

    // Update the nonce at that address in the data base,
    // by first setting it to null and re-adding it to ensure
    // that it is properly updated.
    gun.get('root').get('users').get(address).put(null);
    gun.get('root').get('users').get(address).put(nonce);

    // Send the generated nonce back to the client to sign
    res.status(200).json({ nonce })
}

export default authenticate;
