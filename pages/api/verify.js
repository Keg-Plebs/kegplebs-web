import supabase from '../../services/database'
import jwt from 'jsonwebtoken'
import { ethers } from 'ethers'

import { NONCE_MESSAGE } from '../../utils/constants';

// https://www.youtube.com/watch?v=tVyQZ0CiMWI
// https://mirror.xyz/sha.eth/i6ry1Mxez53z91ef375sMe2rO1NvK2ipACyzKA4SR9g

// Signature verification API
const verify = async (req, res) => {

    // Initially set verification to false
    let verified = false;

    try {
        // Receive the posted address and signature
        const { address, signature, nonce } = req.body;

        // Creates the message that was signed on the client
        const message = NONCE_MESSAGE + nonce;

        // Verifies the signature by returning the address of the signee
        const signerAddress = ethers.utils.verifyMessage(message, signature);

        // If the signature address matches the posted one, the wallet is verified.
        if (signerAddress !== address) {
            throw new Error("invalid_signature")
        }

        let { data: user, error } = await supabase
            .from('users')
            .select("*")
            .eq('address', address)
            .eq('nonce', nonce)
            .single()

        const token = jwt.sign({
            "aud": "authenticated",
            "exp": Math.floor((Date.now() / 1000) + (60 * 60)),
            "sub": user.id,
            "user_metadata": {
                id: user.id
            },
            "role": "authenticated"
        }, process.env.JWT_SECRET)

        // Send the verification back to the client
        res.status(200).json({ user, token })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

export default verify