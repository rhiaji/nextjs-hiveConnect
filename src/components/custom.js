import custom from '../../public/css/custom.module.css'

const CustomContent = () => {
    return (
        <div className={custom.container}>
            <div className={custom.option}>
                <button className={custom.active}>Create</button>
                <button>Manage</button>
            </div>
            <div className={custom.content}>
                <div className={custom.nav}>
                    <select id="actionDropdown">
                        <option value="createToken">Create Token</option>
                        <option value="createNFT">Create NFT</option>
                    </select>
                </div>
                <div className={custom.json}>
                    <div className={custom.center}>
                        <div className={custom.input}>
                            <label>Token Name:</label>
                            <input type="text" id="sender" placeholder="Input Sender Here...."></input>
                        </div>
                        <div className={custom.input}>
                            <label>Token Symbol:</label>
                            <input type="text" id="receiver" placeholder="Input Receiver Here...."></input>
                        </div>

                        <div className={custom.input}>
                            <label>Decimal Precision:</label>
                            <input type="number" id="quantity" placeholder="Input Quantity Here...."></input>
                        </div>

                        <div className={custom.input}>
                            <label>Max Supply:</label>
                            <input type="text" id="token" placeholder="Input Token Name Here...."></input>
                        </div>

                        <div className={custom.input}>
                            <label>URL:</label>
                            <input type="text" id="memo" placeholder="Input Memo Here...."></input>
                        </div>
                        <div className={custom.input}>
                            <button>Create Token</button>
                        </div>
                    </div>
                    <div className={custom.center}>
                        <div className={custom.input}>
                            <label>Sender:</label>
                            <input type="text" id="sender" placeholder="Input Sender Here...."></input>
                        </div>
                        <div className={custom.input}>
                            <label>Receiver:</label>
                            <input type="text" id="receiver" placeholder="Input Receiver Here...."></input>
                        </div>

                        <div className={custom.input}>
                            <label>Quantity:</label>
                            <input type="number" id="quantity" placeholder="Input Quantity Here...."></input>
                        </div>

                        <div className={custom.input}>
                            <label>Token Name:</label>
                            <input type="text" id="token" placeholder="Input Token Name Here...."></input>
                        </div>

                        <div className={custom.input}>
                            <label>Memo:</label>
                            <input type="text" id="memo" placeholder="Input Memo Here...."></input>
                        </div>
                        <div className={custom.input}>
                            <button>Create NFT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomContent
