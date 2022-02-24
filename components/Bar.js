import { useEffect, useState, useContext } from 'react'
import {
    door,
    bartender,
    bartenderSelect,
    open,
    closed,
    sorryBubble,
    exitOption,
    cheersOption,
    toMint,
    warningNotice
} from '../styles/Bar.module.css';
import ProviderContext from './ProviderContext';
import { ethers } from 'ethers';

import Dapp from './Dapp';
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


const Bar = props => {
    // will later on get mintAvailable from props
    const { provider, setProvider } = useContext(ProviderContext);
    const [doorState, setDoorState] = useState(false);
    const [bartenderClicked, setBartenderClicked] = useState(false);
    const [cheersScreen, setCheersScreen] = useState(false);
    const [mintAvailable, setMintAvailable] = useState(false);
    const [mintScreen, setMintScreen] = useState(false);
    const [warning, setWarning] = useState(false);
    const [isAllowlistPeriod, setAllowlistPeriod] = useState(false);

    useEffect( () => {
        document.body.style.overflow = 'hidden';

        // check if wallet is connected - this data needs to persist when we move from scene to scene


        return () => {
            document.body.style.overflow = 'visible';
        }
    }, []);

    const handleBackgroundClick = () => {
        if(bartenderClicked) setBartenderClicked(false);
    }

    const handleBartenderClicked = async () => {
        if(!provider) {
            // render 'please connect wallet' message at bottom of screeen
            setWarning(true);
            setTimeout(() => {
                setWarning(false);
            }, 3000)
            return;
        } else {
            // connect to contract -> check public paused
            const contract = new ethers.Contract(contractAddress, contractAbi, provider);
            const paused = await contract.paused();
            const isAllow = await contract.allowlistMintPeriod();
            
            setMintAvailable(!paused); // for displaying html
            setAllowlistPeriod(isAllow); // for props

            setBartenderClicked(true);

            if(!paused) {
                setTimeout(() => {
                    setMintScreen(true);
                    setBartenderClicked(false);
                }, 3000);
            } 
        }
    }


    const handleMintScreenExit = () => {
        setMintScreen(false);
    }

    const handleExitBrewery = () => {
        setCheersScreen(true);

        setTimeout(() => {
            props.exitBrewery();
        }, 2000);
    }

    
    let dialogue = <></>;
    if(bartenderClicked && !mintAvailable) dialogue = <div className={sorryBubble}></div>
    else if(bartenderClicked && mintAvailable) dialogue = <div className={toMint}></div>

    return(
        <>
            <div 
                className={`${doorState ? open : closed}`}
                onClick={() => {
                    handleBackgroundClick();
                }}
            >
                
                <div className={door}
                    onPointerOver={() => {
                        setDoorState(true);
                    }}
                    onPointerOut={() => {
                        setDoorState(false);
                    }}
                    onClick={handleExitBrewery}
                    style={{
                        pointerEvents: mintScreen ? 'none' : 'auto'
                    }}
                ></div>
                <div className={bartender}></div>
                <div className={bartenderSelect}
                    onClick={handleBartenderClicked}
                ></div> 
                {
                    dialogue
                }
                {/* {
                    doorClicked ? 
                    <> */}
                        <div className={exitOption}></div> 
                        {/* <div 
                            className={exitClick}
                            onClick={handleExitBrewery}
                        ></div> */}
                    {/* </>
                    : 
                    <></>
                } */}
                {
                    cheersScreen ? <div className={cheersOption}></div> : <></>
                }
                {
                    mintScreen ? 
                    <Dapp exitMint={handleMintScreenExit} allowPeriod={isAllowlistPeriod}></Dapp> :
                    <></>
                }
                {
                    warning ?
                    <div className={warningNotice}>
                        <h3>Please Connect Your Wallet</h3>
                    </div> :
                    <></>
                }
            </div>
        </>
    )
}

export default Bar