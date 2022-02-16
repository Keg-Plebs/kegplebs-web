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

const Roadmap = () => {
    const [hovered, setHovered] = useState('');
    const [screenWidth, setScreenWidth] = useState(20000);
    const mobile = screenWidth < 500 ? true : false;

    const ref = useRef();
    
    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth);
        }

    }, []);


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

    const infoTags = {
        "one": ( <div 
                className={milestoneInfo}
                style={{ display: hovered === 'one' ? "flex" : "none"}}
            >
                {   
                    Object.values(data.one.desc).map((child, key) => {
                        return <p key={key}>{child}</p> 
                    })
                }
            </div> 
        ),
        "two": (<div 
                    className={milestoneInfo}
                    style={{ display: hovered === 'two' ? "flex" : "none" }}
                >
                    { 
                        Object.values(data.two.desc).map((child, key) => {
                            return <p key={key}>{child}</p> 
                        })
                    }
                </div>
        ),
        "three": (<div 
                    className={milestoneInfo}
                    style={{ display: hovered === 'three' ? "flex" : "none" }}
                >
                    { 
                        Object.values(data.three.desc).map((child, key) => {
                            return <p key={key}>{child}</p> 
                        })
                    }
                </div>
        ),
        "four": (<div 
                    className={milestoneInfo}
                    style={{ display: hovered === 'four' ? "flex" : "none" }}
                >
                    { 
                        Object.values(data.four.desc).map((child, key) => {
                            return <p key={key}>{child}</p> 
                        })
                    }
                </div>
        ),
        "five": (<div 
                    className={milestoneInfo}
                    style={{ display: hovered === 'five' ? "flex" : "none" }}
                >
                    { 
                        Object.values(data.five.desc).map((child, key) => {
                            return <p key={key}>{child}</p> 
                        })
                    }
                </div>
        ),
        "six": (<div 
                    className={milestoneInfo}
                    style={{ display: hovered === 'six' ? "flex" : "none" }}
                >
                    { 
                        Object.values(data.six.desc).map((child, key) => {
                            return <p key={key}>{child}</p> 
                        })
                    }
                </div>
        )
    }

    return(
        <div className={`${sectionStyles.main} ${roadmap}`}>
            
            <div className={sectionHeader}></div>
            <div className={contentContainer}>
                
                <div className={timeline}>
                    <div className={`${left} ${one}`}>
                        <h2 className={milestoneHeadings}
                            onPointerOver={() => {
                                setHovered('one')
                            }}
                            onPointerOut={() => {
                                setHovered('');
                            }}
                        >
                            {data.one.milestone}
                        </h2>
                        {
                            mobile ? infoTags.one : <></>
                        }
                    </div>
                    {
                        mobile ? <></> : infoTags.one
                    }

                    <div className={`${left} ${two}`}>
                        <h2 className={milestoneHeadings}
                            onPointerOver={() => {
                                setHovered('two')
                            }}
                            onPointerOut={() => {
                                setHovered(''); 
                            }}
                        >
                            {data.two.milestone}
                        </h2>
                        {
                            mobile ? infoTags.two : <></>
                        }
                    </div>
                    {
                        mobile ? <></> : infoTags.two
                    }
                    
                    <div className={`${left} ${three}`}>
                        <h2 className={milestoneHeadings}
                            onPointerOver={() => {
                                setHovered('three')
                            }}
                            onPointerOut={() => {
                                setHovered('');
                            }}
                        >
                            {data.three.milestone}
                        </h2>
                    {
                            mobile ? infoTags.three : <></>
                        }
                    </div>
                    {
                        mobile ? <></> : infoTags.three
                    }
                    
                    <div className={`${left} ${four}`}>
                        <h2 className={milestoneHeadings}
                            onPointerOver={() => {
                                setHovered('four')
                            }}
                            onPointerOut={() => {
                                setHovered('');
                            }}
                        >
                            {data.four.milestone}
                        </h2>
                        {
                            mobile ? infoTags.four : <></>
                        }
                    </div>
                    {
                        mobile ? <></> : infoTags.four
                    }
                    
                    <div className={`${left} ${five}`}>
                        <h2 className={milestoneHeadings}
                            onPointerOver={() => {
                                setHovered('five')
                            }}
                            onPointerOut={() => {
                                setHovered('');
                            }}
                        >
                            {data.five.milestone}
                        </h2>
                        {
                            mobile ? infoTags.five : <></>
                        }
                    </div>
                    {
                        mobile ? <></> : infoTags.five
                    }
                    <div className={`${left} ${six}`}>
                        <h2 className={milestoneHeadings}
                            onPointerOver={() => {
                                setHovered('six')
                            }}
                            onPointerOut={() => {
                                setHovered('');
                            }}
                        >
                            {data.six.milestone}
                        </h2>
                        {
                            mobile ? infoTags.six : <></>
                        }
                    </div>
                    {
                        mobile ? <></> : infoTags.six
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