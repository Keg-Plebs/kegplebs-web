import { createContext } from "react";

// Sets provider context to default values
const ProviderContext = createContext({
  provider: null,
  setProvider: () => {}
});

export default ProviderContext;