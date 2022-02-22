import { useState } from 'react';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { 
    dapp,
    mintBottle,
    mintTitle,
    mintCount,
    countChangeContainer,
    decrement,
    increment,
    decContainer,
    incContainer,
    costContainer,
    currency,
    exit,
    exitIcon
} from '../styles/Dapp.module.css'; 

const MAXALLOWMINTS = 2;
const MAXPUBMINTS = 10;
const PRICE = 0.05;

const Dapp = (props) => {
    const [mintCounter, setMintCounter] = useState(0);

    const incrementCounter = () => {
        if(mintCounter < MAXPUBMINTS) setMintCounter(mintCounter + 1);
    }

    const decrementCounter = () => {
        if(mintCounter > 0) setMintCounter(mintCounter - 1);
    }

    return(
        <div className={dapp}>
            <div className={mintBottle}>
                <div className={mintTitle}></div>
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