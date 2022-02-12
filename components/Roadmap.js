import { useState } from 'react'
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

    const data = {
        'one': {
            'milestone' : 'Pre-Launch',
            'desc': 'The first collaBREWERY with The Tank Brewing Co is announced by the Keg Plebs team. Community brewing, giveaways and Keg Builder projects begin!'
        },
        'two': {
            'milestone' : 'Mint day | Feb 24',
            'desc': '10,000 Keg Plebs will be available on mint day, That means 10,000 lucky individuals will have the opportunity to gain access to the Keg Pleb Ale Trail, exclusive beer collabs, events, merch and more!'
        },
        'three': {
            'milestone' : 'Keg Plebs X Tank Brewing Miami Launch Event',
            'desc': 'March 17th in  Miami, FL at the Tank Brewing. Beta testing for Pleb Passport begins.'
        },
        'four': {
            'milestone' : 'Ale Trail Selection Cycles Begins',
            'desc': 'The Ale Trail will open to Keg Pleb holders and the 1st Ale Trail selection cycle will begin. From here on out holders will be driving the breweries and NFT projects built on the trail. Two Cycles will be completed in the first six months. (See Ale Trail Selection map for details)'
        },
        'five': {
            'milestone' : 'The Golden Can Hunt',
            'desc': '??????'
        },
        'six': {
            'milestone' : 'KegPleb Non-Profit TapRoom',
            'desc': 'The first NFT funded community grown and owned, non-profit Keg Pleb tap room is formed. The best breweries from across the world will be curated by Keg Pleb members. All decisions will be made through a decentralized voting system. All profits go directly back to holders and local breweries.'
        },
        'seven': {
            'milestone' : 'Physical NYC Tap Room Pop Up',
            'desc': 'Guess where... guess when...'
        }
    }

    return(
        <div className={`${sectionStyles.main} ${roadmap}`}>
            <div className={contentContainer}>
                <div className={timeline}>
                    <div className={sectionHeader}></div>

                    

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
                            
                            <p className={milestoneInfo}
                                style={{ 
                                    display: hovered === 'one' ? "flex" : "none"
                                }}
                            >{data.one.desc}</p> 
                        }
                    </div>
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
                            hovered === 'two' ? 
                            <p className={milestoneInfo}
                            style={{ 
                                display: hovered === 'two' ? "flex" : "none"
                            }}
                            >{data.two.desc}</p> : 
                            <></>
                        }
                    </div>
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
                            hovered === 'three' ? 
                            <p className={milestoneInfo}
                            style={{ 
                                display: hovered === 'three' ? "flex" : "none"
                            }}
                            >{data.three.desc}</p> : 
                            <></>
                        }
                    </div>
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
                            hovered === 'four' ? 
                            <p className={milestoneInfo}
                                style={{ 
                                    display: hovered === 'four' ? "flex" : "none"
                                }}
                            >{data.four.desc}</p> : 
                            <></>
                        }
                    </div>
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
                            hovered === 'five' ? 
                            <p className={milestoneInfo}
                                style={{ 
                                    display: hovered === 'five' ? "flex" : "none"
                                }}
                            >{data.five.desc}</p> : 
                            <></>
                        }
                    </div>
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
                            hovered === 'six' ? 
                            <p className={milestoneInfo}
                                style={{ 
                                    display: hovered === 'six' ? "flex" : "none"
                                }}
                            >{data.six.desc}</p> : 
                            <></>
                        }
                    </div>
                    <div className={`${left} ${seven}`}>
                        <h2 className={milestoneHeadings}
                            onPointerOver={() => {
                                setHovered('seven')
                            }}
                            onPointerOut={() => {
                                setHovered('');
                            }}
                        >
                            {data.seven.milestone}
                        </h2>
                        {
                            hovered === 'seven' ? 
                            <p className={milestoneInfo}
                                style={{ 
                                    display: hovered === 'seven' ? "flex" : "none"
                                }}
                            >{data.seven.desc}</p> : 
                            <></>
                        }
                    </div>
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