import Web3 from "web3";
import CryptoJS from "crypto-js";
import React, { useContext, useState } from "react";
import Header from "./Header";
import { walletContext } from "../utils/context";

export const AddPass = () => {
  const [website, setWebsite] = useState("");
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");

  const [enWebsite, setEnWebsite] = useState("");
  const [enPass, setEnPass] = useState("");
  const [enUsername, setEnUsername] = useState("");

  const [signature, setSignature] = useState("");

  const passPhrase = "YourPassPhrase";
  const { address, setAddress } = useContext(walletContext);

  const encryptMessage = (e) => {
    e.preventDefault();
    setEnWebsite(CryptoJS.AES.encrypt(website, passPhrase).toString());
    setEnUsername(CryptoJS.AES.encrypt(uname, passPhrase).toString());
    setEnPass(CryptoJS.AES.encrypt(pass, passPhrase).toString());
    console.log({ website, uname, pass });
    console.log({ enWebsite, enUsername, enPass });
  };

  //   const signMessage = async (e) => {
  //     e.preventDefault()
  //     if (account_arr.length === 0) {
  //       alert("Please connect wallet first");
  //       return;
  //     }
  //     if (window.ethereum) {
  //       window.web3 = new Web3(window.ethereum);
  //       const signature = await window.web3.eth.personal.sign(
  //         encryptedMessage,
  //         account_arr[0]
  //       );
  //       console.log({ signature });
  //       setSignature(signature);
  //     }

  //     const addPass = (website, title, desc) => {
  //       console.log("Adding this task...", website, title, desc);
  //     };

  //     const submit = (e) => {
  //       e.preventDefault();
  //       if (!website || !title || !desc) {
  //         alert("Website or Title or Description cannot be blank");
  //       }
  //       addPass(website, title, desc);
  //     };
  //   };

  return (
    <div className="container my-3">
      <h3>Manager</h3>
      <form>
        <div className="mb-3">
          <label htmlfor="website" className="form-label">
            Website Name
          </label>
          <input
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="form-control"
            id="website"
          />
        </div>
        <div className="mb-3">
          <label htmlfor="title" className="form-label">
            Username
          </label>
          <input
            type="text"
            value={uname}
            onChange={(e) => setUname(e.target.value)}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlfor="desc" className="form-label">
            Password
          </label>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="form-control"
            id="desc"
          />
        </div>

        <div>
          <button
            className="btn btn-primary btn-sm"
            onClick={(e) => encryptMessage(e)}
          >
            Encrypt Message
          </button>
          <div>
            <label htmlFor="encryptedMessage" className={`text-2xl`}>
              Encrypted Website
            </label>
            <input
              type="text"
              name="passKey"
              id="key"
              className="form-label"
              value={enWebsite}
              readOnly={true}
            />
            <label htmlFor="encryptedMessage" className={`text-2xl`}>
              Encrypted username
            </label>
            <input
              type="text"
              name="passKey"
              id="key"
              className="form-label"
              value={enUsername}
              readOnly={true}
            />
            <label htmlFor="encryptedMessage" className={`text-2xl`}>
              Encrypted Password
            </label>
            <input
              type="text"
              name="passKey"
              id="key"
              className="form-label"
              value={enPass}
              readOnly={true}
            />
          </div>
        </div>

        {/* sign message using metamask */}
        {/* <div>
          <button
            className="btn btn-primary btn-sm"
            onClick={(e) => signMessage(e)}
          >
            Sign Message
          </button>
          <div>
            <label htmlFor="encryptedMessage" className={`text-2xl`}>
              Signed Message
            </label>
            <input
              type="text"
              name="passKey"
              id="key"
              className="form-label"
              value={signature}
              readOnly={true}
            />
          </div>
        </div> */}

        <button type="submit" className="btn btn-primary btn-sm">
          Add
        </button>
      </form>
    </div>
  );
};
