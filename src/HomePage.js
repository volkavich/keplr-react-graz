import "./HomePage.css";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useActiveChain,
  useSendIbcTokens,
} from "graz";

function HomePage() {
  const { isConnected, data: account } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const activeChain = useActiveChain();
  const { sendIbcTokens } = useSendIbcTokens();

  return (
    <div>
      <header>
        <h2>{isConnected ? "Connected" : "Disconnected"}</h2>
        <h3>
          Active chain id: <b>{activeChain?.chainId}</b>
        </h3>
        <h3>
          Name: <b>{account?.name}</b>
        </h3>
        <h3>
          Address: <b>{account?.bech32Address}</b>
        </h3>
        <button onClick={() => (isConnected ? disconnect() : connect())}>
          {isConnected ? "Disconnect" : "Connect Wallet"}
        </button>
        <button
          onClick={() =>
            sendIbcTokens({
              recipientAddress: "cosmos1qgxs4xtvzk2a2zjng7fzjklkmt5z85c52gsc35",
              transferAmount: 0,
            })
          }
        >
          Send Tokens
        </button>
      </header>
    </div>
  );
}

export default HomePage;
