import { useState } from "react";
import { NavBar } from "./NavBar";
import { Header } from "./Header";
import { ContainerRow } from "./ContainerRow";
function App() {
  const [addCart, setAddCart] = useState(0);
  return (
    <>
      <NavBar add={addCart} />
      <Header />
      <ContainerRow
        plus={() => setAddCart((prv) => prv + 1)}
        minus={() => setAddCart((prv) => prv - 1)}
        value={addCart}
      />
    </>
  );
}

export default App;
