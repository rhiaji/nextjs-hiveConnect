'use client'
import { useEffect, useState } from 'react'
import React from 'react'
import Nav from '../../public/css/header.module.css'

const navigation = () => {
    function login() {
        // Request the sign buffer from Hive Keychain
        const username = window.prompt('Enter Hive Username Here')

        if (username) {
            hive_keychain.requestSignBuffer(
                username,
                'AutoCore Login', // This is your custom message
                'Posting',
                function (response) {
                    if (response.success) {
                        alert(`You are now logged in!`)
                    } else {
                        console.error(response.error)
                        alert('Login failed. Please try again.')
                    }
                }
            )
        } else {
            alert('Username is required. Please try again.')
        }
    }

    return (
        <div className={Nav.main}>
            <img src="../images/hiveConnect.png" alt="hiveConnect" />
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/create">Create</a>
                    </li>
                    <li>
                        <a href="">Transactions</a>
                    </li>
                    <li>
                        <a href="">Hive Wallet</a>
                    </li>
                </ul>
            </nav>
            <button onClick={() => login()}>Login</button>
        </div>
    )
}

export default navigation
