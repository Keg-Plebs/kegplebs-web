import { ethers } from "ethers";
import { useState, useContext } from "react";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk'

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
	// const providerOptions = {
	// 	walletConnect: {
	// 		package: WalletConnectProvider,
	// 		options: {
	// 			infuraId: 
	// 		}
	// 	}
	// }

	// Creates a Web3Modal instance for connecting multiple providers
	// const getWeb3Modal = async () => {
	// 	const web3Modal = new Web3Modal({
	// 		network: "rinkeby", //might want to set this to ropsten for testing
	// 		cacheProvider: false,
	// 		disableInjectedProvider: false,
	// 		providerOptions
	// 	});

	// 	return web3Modal;
	// };

	const APP_NAME = 'Keg Plebs'
	const APP_LOGO_URL = 'https://kegplebs.com/sun.png'
	const DEFAULT_ETH_JSONRPC_URL = 'https://mainnet.infura.io/v3/ad114c65375d43c4865cf483897e70d6'
	const DEFAULT_CHAIN_ID = 1

	// async function fetchWithTimeout(resource, options = {}) {
	// 	const { timeout = 5000 } = options; // 5s

	// 	const controller = new AbortController();
	// 	const id = setTimeout(() => controller.abort(), timeout);
	// 	const response = await fetch(resource, {
	// 		...options,
	// 		signal: controller.signal
	// 	});
	// 	clearTimeout(id);
	// 	return response;
	// }

	// Connects user to the website
	const connect = async () => {
		try {
			// Gets a new Web3Modal instance and creates a connection
			// const web3Modal = await getWeb3Modal();
			// const web3Connect = await web3Modal.connect();

			if (!window.ethereum)
				throw new Error("No crypto wallet found. Please install it -");

			// const coinbaseProvider = coinbaseWallet.makeWeb3Provider(DEFAULT_ETH_JSONRPC_URL, DEFAULT_CHAIN_ID)
			let provider

			console.log(window.ethereum)

			if (!window.ethereum.isCoinbaseWallet) {
				setConnection(true);
				provider = new ethers.providers.Web3Provider(window.ethereum);
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

			} else {
				try {
					setConnection(true);
					const coinbaseWallet = new CoinbaseWalletSDK({
						appName: APP_NAME,
						appLogoUrl: APP_LOGO_URL,
						darkMode: false
					})

					const connection = coinbaseWallet.makeWeb3Provider(DEFAULT_ETH_JSONRPC_URL, DEFAULT_CHAIN_ID)
					provider = new ethers.providers.Web3Provider(connection);
					await provider.send('eth_requestAccounts')
						.then((accounts) => {
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
				} catch (err) {
					throw new Error("No crypto wallet found. Please install it -");
				}
			}



			// Gets the network of the provider as an ID
			const { chainId } = await provider.getNetwork()

			// Throws an error if the network is not mainnet (mainnet ID being 1)
			if (chainId != 1) {
				throw new Error('Not connected to Mainnet')
			}

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

			supabase.auth.setAuth(token);

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
			// if (window.ethereum.isCoinbaseWallet) {
			// 	coinbaseWallet.disconnect()
			// }
		}
	};

	// Toggles the connection, allowing a user to disconnect their wallet
	const toggleConnection = () => {
		if (connection) {
			setConnection(false);
			setProvider(null);
			setLoggedIn(false);
			setAccount("");
			// if (window.ethereum.isCoinbaseWallet) {
			// 	coinbaseWallet.disconnect()
			// }

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
