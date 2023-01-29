import React, { useState } from "react";
import Input from "./Input"
import Linkgen from "./Linkgen"

function urlShort() {
      const [inputValue, setInputvalue] = useState("")

  return (
      <div className="grid items-center place-center h-[300px]">
        <Input setInputvalue={setInputvalue} />
        <Linkgen inputValue={inputValue} />
      </div>
  );
}

export default urlShort;
