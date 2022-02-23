import { useEffect, useState } from 'react'
import {
    door,
    bartender,
    bartenderSelect,
    open,
    closed,
    sorryBubble,
    exitOption,
    cheersOption,
    toMint
} from '../styles/Bar.module.css';

import Dapp from './Dapp';

const Bar = props => {
    // will later on get mintAvailable from props

    const [doorState, setDoorState] = useState(false);
    const [bartenderClicked, setBartenderClicked] = useState(false);
    const [cheersScreen, setCheersScreen] = useState(false);
    const [mintAvailable, setMintAvailable] = useState(true);
    const [mintScreen, setMintScreen] = useState(false);

    useEffect( () => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'visible';
        }
    }, []);

    const handleBackgroundClick = () => {
        if(bartenderClicked) setBartenderClicked(false);
    }

    const handleBartenderClicked = () => {
        
        setBartenderClicked(true);
        if(mintAvailable) {
            setTimeout(() => {
                setMintScreen(true);
                setBartenderClicked(false);
            }, 3000);
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
                    <Dapp exitMint={handleMintScreenExit}></Dapp> :
                    <></>
                }
            </div>
        </>
    )
}

export default Bar