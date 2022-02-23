const contractAbi = ''
const contractAddress = ''


import { useState, useEffect, useContext } from 'react';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { 
    dapp,
    mintBottle,
    mintButton,
    mintButtonContainer,
    mintCount,
    countChangeContainer,
    decrement,
    increment,
    decContainer,
    incContainer,
    costContainer,
    currency,
    exit,
    exitIcon,
    request
} from '../styles/Dapp.module.css'; 
import ProviderContext from './ProviderContext';
import { ethers } from 'ethers';

const MAXALLOWLISTMINTS = 3;
const MAXPUBMINTS = 20;
const PRICE = 0.05;

const Dapp = (props) => {
    const { provider, setProvider } = useContext(ProviderContext);
    const [mintCounter, setMintCounter] = useState(0);
    const [maxMintPerTx, setMaxMintPerTx] = useState(0);
    const [walletAddress, setWallet] = useState(""); // check if we can already get this from props
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");

  
    const incrementCounter = () => {
        if(mintCounter < MAXPUBMINTS) setMintCounter(mintCounter + 1);
    }

    const decrementCounter = () => {
        if(mintCounter > 0) setMintCounter(mintCounter - 1);
    }

    const handleMint = async () => {
        // load smart contract
        const contract = await ethers.Contract(contractAddress, contractAbi, provider);

        const isPaused = await contract.paused();
        const isAllow = await contract.allowlistMintPeriod();

        try {
            return {
                success: true,
                status: 'Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx' + txHash
            }
        } catch (e) {
            return {
                success: false,
                status: 'Something went wrong' + e.message
            }
        }

    }

    return(
        <div className={dapp}>
            <div className={mintBottle}>
                <div className={mintButtonContainer}>
                    <div className={mintButton} onClick={handleMint}></div>
                </div> 
                <div className={mintCount}>
                    <h1>{mintCounter}</h1>
                </div>
                <div className={countChangeContainer}>
                    <div className={decContainer}>
                        <div className={decrement} onClick={decrementCounter}></div>
                    </div>
                    <div className={incContainer}>
                        <div className={increment} onClick={incrementCounter}></div>
                    </div>
                </div>
                <div className={costContainer}>
                    <h3>{parseFloat((mintCounter * PRICE).toFixed(2))}</h3>
                    <div className={currency}></div>
                </div>
                <div className={exit} onClick={props.exitMint}>
                    <FontAwesomeIcon icon={faAngleDoubleUp} className={exitIcon}/>
                </div>
                
            </div>
        </div>
    )
}

export default Dapp