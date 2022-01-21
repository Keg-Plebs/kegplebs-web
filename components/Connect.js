// import { ethers } from 'ethers' ////////// causing problems - we still need?
import { useState, useEffect, useContext } from 'react'
import { getCurrentWalletConnected, connectWallet, connectEthereum } from '../utils/interact';
import { button } from '../styles/Connect.module.css';
import ProviderContext from './ProviderContext';

// https://docs.alchemy.com/alchemy/tutorials/nft-minter#bonus-put-your-nft-minter-to-work
const Connect = () => {

    const [hovered, hover] = useState(false);
    const [connected, connect] = useState(true);
    const [walletAddress, setWallet] = useState("");

    const { provider, setProvider } = useContext(ProviderContext);

    
    // Toggles connection to window.ethereum
    const toggleConnection = async () => {

        // Toggles connected
        connect(!connected)

        // Updates the provider and wallet address if connected
        if (connected) {

            // Creates a new provider
            const response = connectEthereum()

            // Gets the wallet address from the response -- the new provider
            const signer = (await response).getSigner()
            const address = await signer.getAddress()

            // Updates the provider and wallet address
            setProvider(response);
            setWallet(address)
        
        // Updates on disconnect
        } else {
            setProvider(null)
            setWallet("")
        }
    }

    return (
        <button
            onPointerOver={() => {
                hover(true)
            }}
            onPointerOut={() => {
                hover(false)
            }}
            onClick={() => {
                toggleConnection()
            }}
            className={button}
        >
            {
                walletAddress.length > 0 ? (

                    hovered ? (
                        "Disconnect"
                    ) : (
                        "Connected: " +
                        String(walletAddress).substring(0, 6) +
                        "..." +
                        String(walletAddress).substring(38)
                    )

                ) : (
                    <span>Connect Wallet</span>
                )
            }
        </button>
    )
}

export default Connect