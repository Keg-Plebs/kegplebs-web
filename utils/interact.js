const connectWallet = async () => {
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            const obj = {
                address: addressArray[0],
                status: ""
            };
            return obj;
        } catch (err) {
            return {
                address: "",
                status: err.message
            };
        }
    } else {
        return {
            address: "",
            status: ""
        }
    }
};

const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: "eth_accounts",
            });
            if (addressArray.length > 0) {
                return {
                    address: addressArray[0],
                    status: "",
                };
            } else {
                return {
                    address: "",
                    status: "",
                };
            }
        } catch (err) {
            return {
                address: "",
                status: err.message,
            };
        }
    } else {
        return {
            address: "",
            status: ""
        };
    }
};

export { getCurrentWalletConnected, connectWallet };