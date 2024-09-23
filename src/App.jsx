import React from "react";
import Animatedbg from "./components/Animatedbg";
import UrlShort from "./components/urlShort";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="items-center flex flex-col gap-y-3 justify-center h-screen mx-auto w-full">
      <h1 className="text-[30px] text-white font-bold p-4">MICRO-URL</h1>
      <UrlShort />
      <Animatedbg />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
