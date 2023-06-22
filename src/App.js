import Header from "./Components/Header";
import { AddPass } from "./Components/AddPass";
import { walletContext } from "./utils/context";
import { useState } from "react";

function App() {
  const [address, setAddress] = useState("");
  return (
    <walletContext.Provider value={{ address, setAddress }}>
      <Header title="Password Manager" />
      <AddPass addPass />
    </walletContext.Provider>
  );
}

export default App;
