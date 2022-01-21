import { useState } from "react";
import ProviderContext from "./ProviderContext";

// Wrapper component for providing ethers.js provider to other components as a global state
const ProviderWrapper = ({ children }) => {

    // State value of the provider
    const [provider, setProvider] = useState(null);
    const value = { provider, setProvider};

    return (
        <ProviderContext.Provider value={value}>
            {children}
        </ProviderContext.Provider>
    )
}

export default ProviderWrapper