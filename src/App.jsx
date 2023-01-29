import React from "react";
import Animatedbg from "./components/Animatedbg";
import UrlShort from "./components/urlShort";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="">
      <Nav />
      <div className="items-center grid place-center h-[80vh] mx-auto lg:w-[50%]">
        <UrlShort />
        <Animatedbg />
      </div>
    </div>
  );
}

export default App;
