import { ethers } from "ethers";
import { useState, useContext } from "react";
import Web3Modal from "web3modal";
import Web3 from "web3";
// import WalletConnectProvider from "@walletconnect/web3-provider";

import {
	button,
	buttonWrapperConn,
	buttonDisconnect,
	buttonWrapperDisc,
} from "../styles/Connect.module.css";
import ProviderContext from "./ProviderContext";

import { NONCE_MESSAGE } from "../utils/constants";
import supabase from '../services/database'

// https://docs.alchemy.com/alchemy/tutorials/nft-minter#bonus-put-your-nft-minter-to-work
// https://mirror.xyz/sha.eth/i6ry1Mxez53z91ef375sMe2rO1NvK2ipACyzKA4SR9g

const Connect = (props) => {
	const { provider, setProvider } = useContext(ProviderContext);
	const [hovered, hover] = useState(false);
	const [account, setAccount] = useState("");
	const [connection, setConnection] = useState(false);
	const [loggedIn, setLoggedIn] = useState(false);

	// Using Web3Modal we can add options for other providers besides metamask, like coinbase.
	// for coinbase, it looks like we need to create an infura account
	const providerOptions = {
    // walletConnect: {
    //   package: WalletConnectProvider,
    //   options: {
    //     infuraId: '508517094bb740d181d607782638b5b3'
    //   }
    // }
  }

	// Creates a Web3Modal instance for connecting multiple providers
	const getWeb3Modal = async () => {
		const web3Modal = new Web3Modal({
      network: "ropsten", //might want to set this to ropsten for testing
			cacheProvider: false,
			providerOptions: providerOptions,
		});

		return web3Modal;
	};

	// Connects user to the website
	const connect = async () => {
		try {
			// Gets a new Web3Modal instance and creates a connection
			const web3Modal = await getWeb3Modal();
			const connection = await web3Modal.connect();

			setConnection(connection);

			// Creates an ethers provider using the connection and requests all the
			// accounts of the wallet.

      
			const provider = new ethers.providers.Web3Provider(connection);
			await provider.send("wallet_requestPermissions", [{ eth_accounts: {} }])
        .then((permissions) => {
          const accountsPermission = permissions.find(
            (permission) => permission.parentCapability === 'eth_accounts'
          );
          if (accountsPermission) {
            console.log('eth_accounts permission successfully requested!');
          }
        })
        .catch((error) => {
          if (error.code === 4001) {
            // EIP-1193 userRejectedRequest error
            console.log('Permissions needed to continue.');
          } else {
            console.error(error);
          }

          throw new Error('No wallet connected.');
        });

        

			const signer = provider.getSigner();

			// Gets the address of the wallet
			const address = await signer.getAddress();

			setProvider(provider);
			setAccount(address);

			// Purpose of authentication is to prevent replay attacks.
			// A replay attack is when private data is intercepted and used to
			// to "replay" the transaction. By having the user sign a randomly
			// generated nonce on the server and store it in a database, we're
			// ensuring that no other person can use the same singature if it is
			// intercepted by someone.

			// Authenticates the address by creating a data base entry and unqiue corresponding nonce
			// on the server
			let response = await fetch("../../api/authenticate", {
				method: "POST",
				body: JSON.stringify({
					address,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});

			// Receives the generated nonce and prompts the user to sign the nonce
			const { nonce } = await response.json();
			const signature = await signer.signMessage(NONCE_MESSAGE + nonce);

			// Verifies the signature was signed by the connected address on the server
			response = await fetch("../../api/verify", {
				method: "POST",
				body: JSON.stringify({
					address,
					signature,
					nonce
				}),
				headers: {
					"Content-Type": "application/json"
				},
			});

			// Receives the verification and updates the connection
			const { user, token } = await response.json();

			await supabase.auth.setAuth(token);

			// MAKES A POST TO GET PROOF 
			// response = await fetch("../../api/proof", {
			// 	method: "POST",
			// 	body: JSON.stringify({
			// 		address
			// 	}),
			// 	headers: {
			// 		"Content-Type": "application/json"
			// 	}
			// });

			// const { hexProof } = await response.json();
			// console.log(hexProof)

			if (user) {
				setLoggedIn(true);
				props.onConnected(address);
			} else {
				disconnect();
			}
		} catch (error) {
			setConnection(false);
			setProvider(null);
			setLoggedIn(false);
			setAccount("");
		}
	};

	// Toggles the connection, allowing a user to disconnect their wallet
	const toggleConnection = () => {
		if (connection) {
			setConnection(false);
			setProvider(null);
			setLoggedIn(false);
			setAccount("");

			props.onConnected("");
		} else {
			connect();
		}
	};

	return (
		<div className={loggedIn ? buttonWrapperDisc : buttonWrapperConn}>
			<button
				onPointerOver={() => {
					hover(true);
				}}
				onPointerOut={() => {
					hover(false);
				}}
				onClick={toggleConnection}
				className={loggedIn ? buttonDisconnect : button}
			></button>
		</div>
	);
};

export default Connect;
