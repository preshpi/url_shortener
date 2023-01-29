import React, { useState } from "react";


function Input({ setInputvalue }) {
    const [value, setValue] = useState("")
   
    const handleClick = () => {
        setInputvalue(value);
        setValue("")          
    }
  return (
    <div className="grid items-center justify-center">
      <p className="text-center text-x text-white italic mb-3">Shorten your URL in seconds...</p>
      <form className="inline-flex">
        <div className="lg:w-[700px] rounded-md lg:flex grid space-y-4 lg:space-y-0">
          <input
            className="lg:w-[500px] md:w-[450px] w-[300px] px-5 py-5 outline-none"
            placeholder="Paste URL"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
          <div className="grid justify-center items-center rounded-sm">
            <button
              className="bg-[#5250bb] hover:opacity-75 lg:w-[200px] w-[150px] lg:text-xl md:text-x text-sm px-5 py-5 button-color rounded-sm"
              onClick={handleClick}
            >
              SHORTEN ME!
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Input;
