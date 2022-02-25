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
    plainBottle
} from '../styles/Dapp.module.css'; 
import ProviderContext from './ProviderContext';
import { ethers } from 'ethers';


const PRICE = 0.05;
const contractAbi = [
    {
        "inputs": [
        {
            "internalType": "string",
            "name": "_initURI",
            "type": "string"
        }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "approved",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
        }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
        }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "_reveal",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "allowlistMerkleRoot",
        "outputs": [
        {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "uint256",
            "name": "_mintAmt",
            "type": "uint256"
        },
        {
            "internalType": "bytes32[]",
            "name": "proof",
            "type": "bytes32[]"
        }
        ],
        "name": "allowlistMint",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "allowlistMintPeriod",
        "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
        ],
        "name": "approvedProxy",
        "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "address",
            "name": "owner",
            "type": "address"
        }
        ],
        "name": "balanceOf",
        "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "baseURI",
        "outputs": [
        {
            "internalType": "string",
            "name": "",
            "type": "string"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "address",
            "name": "_proxyAddress",
            "type": "address"
        }
        ],
        "name": "flipProxyState",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }
        ],
        "name": "getApproved",
        "outputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getCost",
        "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "address",
            "name": "owner",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "operator",
            "type": "address"
        }
        ],
        "name": "isApprovedForAll",
        "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "maxAllowlistMintPerAddress",
        "outputs": [
        {
            "internalType": "uint128",
            "name": "",
            "type": "uint128"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "maxPublicMintPerTx",
        "outputs": [
        {
            "internalType": "uint128",
            "name": "",
            "type": "uint128"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
        {
            "internalType": "string",
            "name": "",
            "type": "string"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }
        ],
        "name": "ownerOf",
        "outputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "bool",
            "name": "_state",
            "type": "bool"
        }
        ],
        "name": "pause",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "paused",
        "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "price",
        "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "proxyRegistryAddress",
        "outputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "uint256",
            "name": "_mintAmt",
            "type": "uint256"
        }
        ],
        "name": "publicMint",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "reveal",
        "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "address",
            "name": "from",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "address",
            "name": "from",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        },
        {
            "internalType": "bytes",
            "name": "_data",
            "type": "bytes"
        }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "bytes32",
            "name": "_allowlistMerkleRoot",
            "type": "bytes32"
        }
        ],
        "name": "setAllowlistMerkleRoot",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "address",
            "name": "operator",
            "type": "address"
        },
        {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
        }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "string",
            "name": "_newURI",
            "type": "string"
        }
        ],
        "name": "setBaseURI",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "address",
            "name": "_proxyRegistryAddress",
            "type": "address"
        }
        ],
        "name": "setProxyRegistryAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
        }
        ],
        "name": "supportsInterface",
        "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
        {
            "internalType": "string",
            "name": "",
            "type": "string"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "toggleWhitelisted",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "uint256",
            "name": "_tokenId",
            "type": "uint256"
        }
        ],
        "name": "tokenURI",
        "outputs": [
        {
            "internalType": "string",
            "name": "",
            "type": "string"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalMints",
        "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "address",
            "name": "from",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
        }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
        }
        ],
        "name": "walletOfOwner",
        "outputs": [
        {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }
]
const contractAddress = '0x19Fc8c2eA485E78ea8ad4a60B16e0937F6472B19'

const Dapp = ({exitMint, allowPeriod}) => {
    const { provider, setProvider } = useContext(ProviderContext);
    const [mintCounter, setMintCounter] = useState(0);
    const [maxMintPerTx, setMaxMintPerTx] = useState(0);
    const [txComplete, setTxComplete] = useState(false);
    const [txResult, setTxResult] = useState('');
  
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

        const contract = new ethers.Contract(contractAddress, contractAbi, signer);
        const address = await signer.getAddress();

        const cost = (mintCounter * PRICE).toString();

        try {
            if(allowPeriod) {
                // get merkle tree stuff
                const { hexProof } = await fetch("../../api/proof", {
                    method: "POST",
                    body: JSON.stringify({
                        address
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).json();

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

                const tx = await signer.sendTransaction(allowlistTransactionRequest);
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

                const tx = await signer.sendTransaction(transactionRequest);
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
                            <div></div>
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
                }
            </div>
            <div className={exit} onClick={exitMint}>
                <FontAwesomeIcon icon={faAngleDoubleUp} className={exitIcon}/>
            </div>
        </div>
    )
}

export default Dapp