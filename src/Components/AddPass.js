import Web3 from 'web3'
import CryptoJS from 'crypto-js'
import React, { useState } from 'react'
import Header from './Header'


export const AddPass = () => {
    const [website, setWebsite] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setdesc] = useState("");
    //const [message, setMessage] = useState("");

    const [encryptedMessage, setEncryptedMessage] = useState("");
    const [signature, setSignature] = useState("");
    const passPhrase = "YourPassPhrase";
    const account_arr = []; 
    
    const encryptMessage = async (title) => {
    const encryptedMessage = CryptoJS.AES.encrypt(title, desc).toString();
    setEncryptedMessage(encryptedMessage);
    console.log({ encryptedMessage });
    };

    const signMessage = async (encryptedMessage) => {
    if (account_arr.length === 0) {
        alert('Please connect wallet first');
        return;
    }
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        const signature = await window.web3.eth.personal.sign(
        encryptedMessage,
        account_arr[0]
    );
    console.log({ signature });
    setSignature(signature);
    }

        
        
        const addPass = (website, title, desc)=>{
            console.log("Adding this task...",website,title, desc)
            }
        
        const submit = (e)=>{
        e.preventDefault();
        if(!website || !title || !desc){
            alert("Website or Title or Description cannot be blank")
        }
        addPass(website,title, desc);
    }

    }
    return (
        <div className='container my-3'>
            <h3>
                Manager 
            </h3>
            <form >
                <div className='mb-3'>
                    <label htmlfor="website" className='form-label'>Website Name</label>
                    <input type="text" value = {website} onChange={(e)=>setWebsite(e.target.value)} className='form-control' id="website"/>
                </div>
                <div className="mb-3">
                    <label htmlfor="title" className="form-label">Username</label>
                    <input type="text" value = {title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlfor="desc" className="form-label">Password</label>
                    <input type="password" value = {desc} onChange={(e)=>setdesc(e.target.value)} className="form-control" id="desc"/>
                </div>
<div>
            <button
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4`}
                onClick={() => encryptMessage(title)}
            >
                Encrypt Message
            </button>
            <label htmlFor="encryptedMessage" className={`text-2xl`}>
                Encrypted Message
            </label>
            <input
                type="text"
                name="passKey"
                id="key"
                className={`p-2 m-4 text-black border-2 border-black rounded`}
                value={encryptedMessage}
                readOnly={true}
            />
</div>            
    
            {/* sign message using metamask */}
            <div>
            <button
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4`}
                onClick={() => signMessage(desc)}
            >
                Sign Message
            </button>
            <label htmlFor="encryptedMessage" className={`text-2xl`}>
                Signed Message
            </label>
            <input
                type="text"
                name="passKey"
                id="key"
                className={`p-2 m-4 text-black border-2 border-black rounded`}
                value={signature}
                readOnly={true}
            />
            </div>
                
                <button  type="submit" className="btn btn-primary btn-sm" >Add</button>
        </form>
        </div>
    )
}
