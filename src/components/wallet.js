'use client'
import React, { useEffect, useState } from 'react'
import styles from '../../public/css/wallet.module.css'
import SSC from 'sscjs'

const WalletContent = () => {
    // State to hold the data from the Steem Engine API
    const [Data, setData] = useState(null)

    useEffect(() => {
        // Create an instance of SSC with the API URL
        const ssc = new SSC('https://engine.rishipanthee.com')

        // Use the stream method to fetch data
        ssc.find('tokens', 'balances', { account: 'rhiaji' }, 1000, 0, [], (err, result) => {
            if (err) {
                console.error('Error fetching data:', err)
            } else {
                let bal = []
                result.forEach((element) => {
                    const num = Number(element.balance)
                    if (num !== 0) {
                        bal.push(element)
                    }
                })
                // Update the state with the fetched data

                setData(bal)
            }
        })
    }, []) // Empty dependency array ensures that this effect runs only once on mount

    return (
        <div className={styles.container}>
            <div className={styles.head}>Hive Wallet</div>
            {/* Render or use the steemEngineData in your component */}
            {Data && (
                <div>
                    {/* Display the fetched data here */}
                    {Data.map((balances) => (
                        <div key={balances._id}>
                            <p>Symbol: {balances.symbol}</p>
                            <p>Balance: {balances.balance}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default WalletContent
