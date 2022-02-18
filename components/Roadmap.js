import { useState, useRef, useEffect } from 'react'
import ReactCSSTransitionGroup from 'react-transition-group';

import sectionStyles from '../styles/Section.module.css';
import { 
    roadmap,
    sectionHeader,
    contentContainer,
    timeline,
    rightImg,
    left,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    beerDrip,
    beerFoam,
    milestoneInfo,
    milestoneHeadings
 } from '../styles/Roadmap.module.css';

import MilestoneInfo from './MilestoneInfo';

const Roadmap = () => {
    const [clicked, setClicked] = useState(0);
    const [screenWidth, setScreenWidth] = useState(20000);
    const mobile = screenWidth < 800 ? true : false;

    const ref = useRef();
    
    useEffect(() => {
        setScreenWidth(window.innerWidth);

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth);
        }

    }, []);

    const handleBackgroundClick = () => {
        if(clicked) setClicked(0)
    }


    const data = {
        'one': {
            'milestone' : 'Phase Zero',
            'desc': {
                1: "The Tank Brewing Partnership",
                2: "First Community Beer Production Begins",
                3: "First NFT Project Partnership (EtherOrcs)",
                4: "First Partnership Beer Production Begins",
                5: "Second NFT Project Partnership Announced",
                6: "Interactive Website Release"
            }
        },
        'two': {
            'milestone' : 'Mint day | Feb 24',
            'desc': {
                1: '10,000 Keg Plebs will be available on mint day, That means 10,000 lucky individuals will have the opportunity to gain access to the Keg Pleb Ale Trail, exclusive beer collabs, events, merch and more!'
            }
        },
        'three': {
            'milestone' : 'Phase One',
            'desc': {
                1: "Keg Pleb Beer Release March 17th at The Tank Brewing in Miami, FL",
                2: "The Tank Brewing Ale Trail Induction",
                3: "Keg Builder Beer Drops",
                4: "Pleb Passport Beta Released at The Tank",
                5: "3 New Breweries Join the Collective",
                6: "3 New NFT Partners Join the Collective",
                7: "4/1/2022 - Miami (?!?!)"
            }
        },
        'four': {
            'milestone' : 'Phase Two',
            'desc': {
                1: "Rapid Brewery and NFT Partner Expansion",
                2: "Brew Battles Begins (Digital and Physical)",
                3: "Brew Tycoon Playable Asset - Free Air Drop"
            }
        },
        'five': {
            'milestone' : 'Phase Three',
            'desc': {
                1: "2 Breweries per continent in the collaBREWERY",
                2: "Brew Tycoon P2E Game Launches with IRL brewery integrations",
                3: "Keg Pleb Non-Profit Pop-up Taproom Opens"
            }
        },
        'six': {
            'milestone' : 'Phase Four',
            'desc': {
                1: "Keg Pleb Product and Partnership Growth Cycle Continues",
                2: "Additional details announced at the end of Q2"
            }
        }
    }

    return(
        <div className={`${sectionStyles.main} ${roadmap}`}>
            <div className={contentContainer}
                onClick={handleBackgroundClick}
            >
                
                <div className={timeline}>
                    <div className={sectionHeader}></div>
                    <div className={`${left} ${one}`}>
                        <h2 className={milestoneHeadings}
                            onClick={() => setClicked(1)}
                            style={{ width: (clicked === 1 && !mobile) ? '50vw': 'auto' ,
                                textAlign: mobile ? 'center' : 'left',
                            }}
                        >
                            {data.one.milestone}
                        </h2>
                    </div>
                    {
                        clicked === 1 ? <MilestoneInfo data={data.one}></MilestoneInfo> : <></>
                    }
                    

                    <div className={`${left} ${two}`}>
                        <h2 className={milestoneHeadings}
                            onClick={() => setClicked(2)}
                            style={{ width: (clicked === 2 && !mobile) ? '50vw': 'auto' ,
                                textAlign: mobile ? 'center' : 'left',
                            }}
                        >
                            {data.two.milestone}
                        </h2>
                    </div>
                    {
                        clicked === 2 ? <MilestoneInfo data={data.two}></MilestoneInfo> : <></>
                    }
                    
                    <div className={`${left} ${three}`}>
                        <h2 className={milestoneHeadings}
                            onClick={() => setClicked(3)}
                            style={{ width: (clicked === 3 && !mobile) ? '50vw': 'auto' ,
                                textAlign: mobile ? 'center' : 'left',
                            }}
                        >
                            {data.three.milestone}
                        </h2>
                    </div>
                    {
                        clicked === 3 ? <MilestoneInfo data={data.three}></MilestoneInfo> : <></>
                    }
                    
                    <div className={`${left} ${four}`}>
                        <h2 className={milestoneHeadings}
                            onClick={() => setClicked(4)}
                            style={{ width: (clicked === 4 && !mobile) ? '50vw': 'auto' ,
                                textAlign: mobile ? 'center' : 'left',
                            }}
                        >
                            {data.four.milestone}
                        </h2>
                    </div>
                    {
                        clicked === 4 ? <MilestoneInfo data={data.four}></MilestoneInfo> : <></>
                    }
                    
                    <div className={`${left} ${five}`}>
                        <h2 className={milestoneHeadings}
                            onClick={() => setClicked(5)}
                            style={{ width: (clicked === 5 && !mobile) ? '50vw': 'auto' ,
                                textAlign: mobile ? 'center' : 'left',
                            }}
                        >
                            {data.five.milestone}
                        </h2>
                    </div>
                    {
                        clicked === 5 ? <MilestoneInfo data={data.five}></MilestoneInfo> : <></>
                    }

                    <div className={`${left} ${six}`}>
                        <h2 className={milestoneHeadings}
                            onClick={() => setClicked(6)}
                            style={{ width: (clicked === 6 && !mobile) ? '50vw': 'auto' ,
                                textAlign: mobile ? 'center' : 'left',
                            }}
                        >
                            {data.six.milestone}
                        </h2>
                    </div>
                    {
                        clicked === 6 ? <MilestoneInfo data={data.six}></MilestoneInfo> : <></>
                    }
                </div>
                <div className={rightImg}></div>
                <div className={beerDrip}></div>
                <div className={beerFoam}></div>
            </div>
        </div>
    )
}

export default Roadmap

/**
 * Put in front of the FAQ
 */