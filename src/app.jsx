import React, { useState } from "react";
import Body from "./components/body";
import NavBar from "./components/navbar";

export default function App() {
  const [pageState, setPageState] = useState("Home");
  // handlers
  const handlePage = (target) => setPageState(target);

  return (
    <div>
      <NavBar state={pageState} handler={handlePage} />
      <Body state={pageState} />
    </div>
  );
}
