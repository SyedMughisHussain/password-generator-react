import { useState } from "react";

function App() {
  const [rangeVal, setRangeVal] = useState(8);

  return (
    <>
      <div className="flex justify-center text-white">
        <div className="mt-20">
          <h1 className="text-5xl font-bold">Pasword Generator</h1>
          <div className="flex mt-10 mb-5">
            <p className="bg-white text-black p-1 rounded-md w-80">hello</p>
            <button className="ml-5 bg-blue-600 p-2 rounded-md">
              Copy Password
            </button>
          </div>
          <label
            className="mr-5 border pt-2 pb-2 pl-5 pr-5 rounded-md"
            htmlFor="value"
          >
            {rangeVal}
          </label>
          <input
            className="w-72"
            type="range"
            min={8}
            max={30}
            id="vlue"
            onChange={(event) => {
              setRangeVal(event.target.value);
            }}
          />
          <br />
          <input className="mt-5" id="upperCase" type="checkbox" />
          <label htmlFor="upperCase">UpperCase</label>
          <br />
          <input className="mt-5" id="lowerCase" type="checkbox" />
          <label htmlFor="lowerCase">Lowercase</label>
          <br />
          <input className="mt-5" id="numbers" type="checkbox" />
          <label htmlFor="numbers">Numbers</label>
          <br />
          <input className="mt-5" id="symbols" type="checkbox" />
          <label htmlFor="symbols">Symbols</label>
        </div>
      </div>
    </>
  );
}

export default App;
