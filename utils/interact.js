import { ethers } from 'ethers';

const connectEthereum = async () => {
    if (window.ethereum) {
        let provider = new ethers.providers.Web3Provider(window.ethereum);
        return provider;
    } 
    return null
};

// const getCurrentWalletConnected = async () => {
//     if (window.ethereum) {
//         try {
//             const addressArray = await window.ethereum.request({
//                 method: "eth_accounts",
//             });
//             if (addressArray.length > 0) {
//                 return {
//                     address: addressArray[0],
//                     status: "",
//                 };
//             } else {
//                 return {
//                     address: "",
//                     status: "",
//                 };
//             }
//         } catch (err) {
//             return {
//                 address: "",
//                 status: err.message,
//             };
//         }
//     } else {
//         return {
//             address: "",
//             status: ""
//         };
//     }
// };

export { connectEthereum };