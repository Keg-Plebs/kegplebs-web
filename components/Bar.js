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
    warningNotice,
    connectWallet
} from '../styles/Bar.module.css';
import {
    contractABI
} from '../utils/constants'
import ProviderContext from './ProviderContext';
import { ethers } from 'ethers';

import Dapp from './Dapp';

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

        if(provider) {
            // connect to contract -> check public paused
            const contract = new ethers.Contract(contractAddress, contractABI, provider);
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
        } else {
            setBartenderClicked(true);
            setTimeout(() => {
                setBartenderClicked(false);
            }, 3000)
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
    if(bartenderClicked && !provider) dialogue = <div className={connectWallet}></div>
    else if(bartenderClicked && !mintAvailable) dialogue = <div className={sorryBubble}></div>
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