'use client'
import React, { createElement, useEffect, useState } from 'react'
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
            const div = document.getElementById('balances')
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
                <div id="balances">
                    {/* Display the fetched data here */}
                    <table>
                        <thead>
                            <tr>
                                <th>Symbol</th>
                                <th>Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data.map((balances) => (
                                <tr key={balances._id}>
                                    <td>{balances.symbol}</td>
                                    <td>{balances.balance}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default WalletContent
