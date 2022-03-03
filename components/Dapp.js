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
    request,
    mintCompletionAlertContainer,
    mintErrorAlertContainer,
    plainBottle
} from '../styles/Dapp.module.css'; 
import {
    contractABI
} from '../utils/constants'
import ProviderContext from './ProviderContext';
import { ethers } from 'ethers';


const PRICE = 0.05;
const contractAddress = '0xd7D1A11946E1FbaB296Bb1f2Ca8a6f554A662eA7'

const Dapp = ({exitMint, allowPeriod}) => {
    const { provider, setProvider } = useContext(ProviderContext);
    const [mintCounter, setMintCounter] = useState(0);
    const [maxMintPerTx, setMaxMintPerTx] = useState(0);
    const [txComplete, setTxComplete] = useState(false);
    const [txResult, setTxResult] = useState('');
    const [txError, setTxError] = useState(false);
    const [txErrorMsg, setTxErrorMsg] = useState('');
  
    useEffect(() => {
        if(allowPeriod) setMaxMintPerTx(3);
        else setMaxMintPerTx(20);
    })

    const incrementCounter = () => {
        if(mintCounter < maxMintPerTx) setMintCounter(mintCounter + 1);
    }

    const decrementCounter = () => {
        if(mintCounter > 0) setMintCounter(mintCounter - 1);
    }

    const handleMint = async () => {
        if(!mintCounter) return;
        const signer = await provider.getSigner();

        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        const address = await signer.getAddress();

        const cost = (mintCounter * PRICE).toString();

        try {
            if(allowPeriod) {
                // get merkle tree stuff
                const response = await fetch("../../api/proof", {
                    method: "POST",
                    body: JSON.stringify({
                        address
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                
                const { hexProof } = await response.json()

                // need to check if hexproof is null or not
                if(!hexProof) return; // will need to notify the user that they are not whitelisted

                const nonce = await signer.getTransactionCount();
                const data = await contract.interface.encodeFunctionData('allowlistMint', [mintCounter, hexProof]);

                const allowlistTransactionRequest =  
                    {
                        from: address,
                        to: contractAddress,
                        nonce: nonce,
                        data: data,
                        value: ethers.utils.parseEther(cost)
                    }

                const tx = await signer.sendTransaction(allowlistTransactionRequest)
                    .catch((error) => {
                        setTxError(true);
                        setTxErrorMsg('Transaction error occured during Allowlist Minting. Please close the mint screen and try again.')
                        throw new Error('Allowlist minting error: ' + error.message)
                    });
                setTxComplete(true);
                setTxResult(tx);

            } else {
                const nonce = await signer.getTransactionCount();
                const data = await contract.interface.encodeFunctionData('publicMint', [mintCounter]);


                // 
                const transactionRequest = 
                    {
                        from: address,
                        to: contractAddress,
                        nonce: nonce,
                        data: data,
                        value: ethers.utils.parseEther(cost)
                    }

                const tx = await signer.sendTransaction(transactionRequest)
                    .catch((error) => {
                        setTxError(true);
                        setTxErrorMsg('Transaction error occured during Public Minting. Please close the mint screen and try again.')
                        throw new Error('Public minting error: ' + error.message)
                    });
                setTxComplete(true);
                setTxResult(tx);
            }

        } catch (e) {
            console.log(e)
            return {
                success: false,
                status: 'Something went wrong' + e.message
            }
        }

    }

    return(
        <div className={dapp}>
            <div className={
                txComplete ? plainBottle : mintBottle
            }
            >
                {
                    !txError ? (
                        txComplete ? 
                        <>
                            <div className={mintCompletionAlertContainer}>
                                <div>
                                    {
                                        mintCounter === 1 ? <h2>You've Minted a Pleb!</h2> : <h2>You've Minted some Plebs!</h2>
                                    }
                                    <p>Here is a link to your Metadata: </p>
                                    <p>Mainnet Transaction Hash: <span>{txResult.hash}</span></p>
                                </div>
                            </div>
                        </> : 
                        <>
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
                        </>
                    ) : 
                    <div className={mintErrorAlertContainer}>
                        <h2>{txErrorMsg}</h2>
                    </div>
                }
            </div>
            <div className={exit} onClick={exitMint}>
                <FontAwesomeIcon icon={faAngleDoubleUp} className={exitIcon}/>
            </div>
        </div>
    )
}

export default Dapp