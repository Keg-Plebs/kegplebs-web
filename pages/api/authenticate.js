import supabase from '../../services/database'
import { v4 as uuidv4 } from 'uuid';

// https://www.youtube.com/watch?v=tVyQZ0CiMWI
// https://mirror.xyz/sha.eth/i6ry1Mxez53z91ef375sMe2rO1NvK2ipACyzKA4SR9g

// Wallet authentication API
const authenticate = async (req, res) => {

    // Receive the posted address
    const { address } = req.body;

    // Generates a cryptographically secure nonce for the user to sign
    const nonce = uuidv4();

    // Gets the nonce based on the user's address
    let { data, error } = await supabase
        .from('users')
        .select('nonce')
        .eq('address', address)

    // Send the generated nonce back to the client to sign
    // res.status(200).json({ nonce })

    if (data.length > 0) {
        // Updates the existing user record and nonce
        let { data, error } = await supabase.from('users').update({ nonce }).match({ address })
    } else {
        // Creates a new user record and nonce
        let { data, error } = await supabase.from('users').insert({ nonce, address })
    }

    if (error) {
        res.status(400).json({ error: error.message });
    } else {
        res.status(200).json({ nonce })
    }
}

export default authenticate;
