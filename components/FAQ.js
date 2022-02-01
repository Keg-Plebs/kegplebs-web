import sectionStyles from '../styles/Section.module.css';
import { faq, sectionHeader, accordion, panel } from '../styles/FAQ.module.css';
import Accordion from './Accordion';

const FAQ = () => {
    const accordionData = {
        sectionOne: {
            question: 'Who are the Keg Plebs?',
            answer: "Born out of a bad batch of fermented hops, Keg Plebs crawled out of the brew vats and into a local brew shop (of which will remain anonymous...for obvious reasons). In an attempt to blend in, the Keg Plebs took cues from the only people they knew, the local yocals. Don't hate them for their adopted style, interests, or bad habits, what they lack in looks they make up for in personality. Fueled by a variety of apré brews, adrenalin and breakfast burritos, the great Keg Pleb migration has begun. Breweries are now accepting applications for resident keg plebs to man the bar, clean the floors and full send-it as needed."
        }, 
        sectionTwo: {
            question: "Craft beer and NFTs?",
            answer: "Keg Plebs is a passion project born out of two of our teams favorite things. Craft beer and NFTs. Both empower creators to build and explore without judgement, expectations, or conventional barriers. Whether it's a wacky and zany brew or a wild and unexpected character, this creative freedom leads to innovation and joy to all that can experience it. In addition, both craft beer and NFTs have the unique and amazing ability to bring people of all walks of life together to form a passionate, inclusive and tight nit community."
        },
        sectionThree: {
            question: "Why Purchase a Keg Pleb NFT?",
            answer: "The Keg Plebs community is the official “collabrewery” of the NFT space. What does this mean you ask? We’re bringing the craft beer community into the digital world, and YOU are the ultimate brew master. As a holder and member of the tribe, your input will drive not only the types of brewery collaborations we pursue, but the creation of the ultimate ale trail. Oh…and did we mention we’ll be partnering with some of your favorite NFT projects for exclusive, real world, beer drops, can art and pop-up events? If that’s not enough (being the sendiest project out there), just remember the fermentation process takes time. You’ve got to stick around if you want to see what we have brewing in the back."
        },
        sectionFour: {
            question: "What is an Ale Trail?",
            answer: "The “Ale Trail” is the physical meets digital brewery hop developed in the Phase 1 of Keg Plebs. This will be the centerpiece of the Keg Pleb community. For every brewery collab, a new location on the ale trail is built. This virtual village will provide an interactive and immersive experience through “NFT-ified” real life craft breweries, and integrations with your favorite NFT projects. As a Keg Pleb holder you will have the exclusive opportunity to experience the ale trail in multiple mediums (but that’s all were spilling for now)."
        },
        sectionFive: {
            question: "Who is Izaac? The artist behind Keg Plebs",
            answer: `Izaac is a professional pixel smith, type-II fun expert, and beer enthusiast.

            With a background as a traditionally trained artist and a BFA from SCAD, Izaac is a shoe designer by day, creating performance running and trail shoes for gutsy, elite athletes, adventure seekers and the regular old plebeian. After a long day skiing, mtn biking, hiking, or trail running, nothing hits better than a cold craft beer with dusty friends. Wanting to capture the convergence of community, craft beer, and adrenaline, Keg-Plebs was born.`
        },
        sectionSix: {
            question: "How many Keg Pleb NFTs are there?",
            answer: "Keg plebs will be made up of 10,000 unique NFTs. If you mint or purchase a Keg Pleb, your ownership will be permanently provable through the blockchain on the Ethereum network. Although a rare few collaborative Keg Plebs may wander into the brew-verse at a later date, there will only ever be 10,000 Keg Plebs available for mint and purchase."
        },
        sectionSeven: {
            question: "When is the launch?",
            answer: "TBA! We are aiming for a release in early feBREWary but are taking as much time as needed to refine and build the project to come out with a full tap of content day one and not just a trickle."
        }
    }

    return(
        <div className={`${sectionStyles.main} ${faq}`}>
            <h1 className={sectionHeader}>FAQ</h1>
            {Object.values(accordionData).map(({question, answer}, i) => {
                return <Accordion key={i} title={question} content={answer}/>;
            })}
        </div>
    )
}

export default FAQ

/**
 * answer font bigger
 * make the background transparent
 */