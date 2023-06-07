import { GrazProvider, mainnetChains } from "graz";
import HomePage from "./HomePage";

function App() {
  return (
    <GrazProvider
      grazOptions={{
        defaultChain: mainnetChains.cosmoshub,
      }}
    >
      <HomePage />
    </GrazProvider>
  );
}

export default App