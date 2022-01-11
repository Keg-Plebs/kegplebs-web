import { useState, useEffect } from 'react'
import { getCurrentWalletConnected, connectWallet } from '../utils/interact';
import { button } from '../styles/Connect.module.css';

// https://docs.alchemy.com/alchemy/tutorials/nft-minter#bonus-put-your-nft-minter-to-work
const Connect = () => {

    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");

    useEffect(async () => {
        const { address, status } = await getCurrentWalletConnected();
        setWallet(address);
        setStatus(status);

        addWalletListener();
    }, []);

    const connectWalletPressed = async () => {
        const walletResponse = await connectWallet();
        setWallet(walletResponse.address);
        setStatus(walletResponse.status);
    };

    function addWalletListener() {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts) => {
                if (accounts.length > 0) {
                    setWallet(accounts[0]);
                    setStatus("");
                } else {
                    setWallet("");
                    setStatus("");
                }
            });
        } else {
            setStatus("");
        }
    }

    return (
        <button
            onClick={connectWalletPressed}
            className={button}
        >
            {walletAddress.length > 0 ? (
                "Connected: " +
                String(walletAddress).substring(0, 6) +
                "..." +
                String(walletAddress).substring(38)
            ) : (
                <span>Connect Wallet</span>
            )}
        </button>
    )
}

export default Connect