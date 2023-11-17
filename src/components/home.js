import React from 'react'
import home from '../../public/css/home.module.css'

const Home = () => {
    return (
        <div className={home.container}>
            <div className={home.containerHead}>
                <p>Exchanges</p>
            </div>
            <div className={home.containerContent}>
                <div className={home.row}>
                    <div className={home.contentBox}>
                        <a href="https://dswap.trade/" target="_blank">
                            <img src="../images/dswap.png" alt="dswap" />
                        </a>
                        <p>Dswap</p>
                        <p>
                            DSWAP simplifies token swapping on Hive-Engine with automated conversions and a KYC-free, cost-effective approach.
                            Leveraging Hive's fast 3-second block times, it ensures quick transactions and enables users to move between
                            cryptocurrencies seamlessly, all without gas fees.
                        </p>
                    </div>
                    <div className={home.contentBox}>
                        <a href="https://tribaldex.com/" target="_blank">
                            <img src="../images/tribaldex.png" alt="tribaldex" />
                        </a>
                        <p>Tribaldex</p>
                        <p>
                            Tribaldex is a dedicated exchange platform tailored to the Hive blockchain, enabling users to interact with tokens from
                            diverse Hive communities and tribes, fostering community engagement and supporting decentralized projects.
                        </p>
                    </div>
                    <div className={home.contentBox}>
                        <a href="https://hive-engine.com/" target="_blank">
                            <img src="../images/hiveEngine.png" alt="hiveEngine" />
                        </a>
                        <p>Hive Engine</p>
                        <p>
                            Hive Engine is a gateway to a diverse and dynamic blockchain ecosystem where users and developers can interact with
                            various tokens, assets, and digital collectibles built on the Hive blockchain, all within a user-friendly web interface.
                        </p>
                    </div>
                    <div className={home.contentBox}>
                        <a href="https://beeswap.dcity.io/convert" target="_blank">
                            <img src="../images/beeswap.png" alt="beeswap" />
                        </a>
                        <p>BeeSwap</p>
                        <p>
                            The BeeSwap website provides a convenient and user-friendly platform for token conversion, offering an effortless way to
                            swap tokens and access information on existing token swap pools. Additionally, it simplifies the process of checking your
                            wallet balance and facilitates the seamless transfer of various cryptocurrency assets, ensuring a smooth and efficient
                            experience for users.
                        </p>
                    </div>
                </div>
            </div>
            <div className={home.containerHead}>
                <p>Games</p>
            </div>
            <div className={home.containerContent}>
                <div className={home.row}>
                    <div className={home.contentBox}>
                        <a href="https://splinterlands.com/" target="_blank">
                            <img src="../images/splinterlands.png" alt="splinterlands" />
                        </a>
                        <p>Splinterlands</p>
                        <p>
                            Splinterlands is a popular blockchain-based collectible card game where players build decks of digital cards and battle
                            against others for rewards. It operates on the Hive blockchain, allowing players to trade and own the in-game cards as
                            non-fungible tokens (NFTs). The game's play-to-earn model enables users to earn cryptocurrency and NFT rewards through
                            strategic gameplay.
                        </p>
                    </div>
                    <div className={home.contentBox}>
                        <a href="https://terracoregame.com?ref=rhiaji" target="_blank">
                            <img src="../images/terracore.png" alt="terracore" />
                        </a>
                        <p>TerraCore</p>
                        <p>
                            TerraCore is a captivating Strategy Idle Game under development on the HIVE blockchain by @crypt0gnome and @asgarth. In
                            this game, your objective is to cultivate a thriving community while facing various dangers within the TerraCore universe.
                            This game offers an engaging and immersive gaming experience on the blockchain.
                        </p>
                    </div>
                    <div className={home.contentBox}>
                        <a href="https://splinterforge.io" target="_blank">
                            <img src="../images/splinterforge.png" alt="splinterforge" />
                        </a>
                        <p>Splinterforge</p>
                        <p>
                            Take charge of a formidable team composed of your Splinterlands card collection and lead them into epic battles against
                            powerful bosses and opponents. As you guide your cards to victory, your strategic prowess and skills can propel you up the
                            leaderboard, where top rankings come with lucrative rewards, making every battle a thrilling and rewarding experience.
                        </p>
                    </div>
                    <div className={home.contentBox}>
                        <a href="https://go.splex.gg/?ref=rhiaji" target="_blank">
                            <img src="../images/go.png" alt="go" />
                        </a>
                        <p>Golem Overlord</p>
                        <p>
                            Golem Overlord is an idle game set in a dystopian world, where players act as golemancers responsible for controlling and
                            managing their golems as they navigate and survive within the game's unique environment. The game includes a distinctive
                            in-game currency called PART, essential for various actions, and features like skill systems, leaderboards, and
                            integration with Splex to offer an immersive idle gaming experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
