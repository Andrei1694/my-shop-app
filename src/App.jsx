import { useState } from "react";
import DefaultNav from "./components/navigation.component";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Outlet />

      <DefaultNav />
    </>
  );
}

export default App;
