
import { useEffect, useState } from 'react';
import {
<<<<<<< HEAD
=======
    background,
>>>>>>> develop
    door,
    bartender,
    bartenderSelect,
    open,
    closed,
    sorryBubble,
<<<<<<< HEAD
    exitOption,
=======
    mintOptions,
    exitOption,
    exitClick,
>>>>>>> develop
    cheersOption
} from '../styles/Bar.module.css';

const Bar = props => {
    const [doorState, setDoorState] = useState(false);
    const [doorClicked, setDoorClicked] = useState(false);
    const [bartenderClicked, setBartenderClicked] = useState(false);
    const [cheers, setCheers] = useState(false);
    const [sorry, setSorry] = useState(true);
    const [mintAvailable, setMintAvailable] = useState(false);

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
        if(mintAvailable) setSorry(false);
        if(doorClicked) setDoorClicked(false);
        setBartenderClicked(true);
    }

    const handleExitBrewery = () => {
        setCheers(true);

        setTimeout(() => {
            props.exitBrewery();
        }, 2000);
    }

    return(
        <>
            <div 
                className={`${doorState ? `${open}` : `${closed}`}`}
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
                ></div>
                <div className={bartender}></div>
                <div className={bartenderSelect}
                    onClick={handleBartenderClicked}
                ></div> 
                {
                    bartenderClicked ? <div className={sorryBubble}></div> : <></>
                    // <div className={mintOptions}></div>
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
                    cheers ? <div className={cheersOption}></div> : <></>
                }
            </div>
        </>
    )
}

export default Bar