import React, { useState } from 'react';

const ZipcodeInput: React.FC = () => {
  const [zipcode, setZipcode] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const inputZipcode = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value: string = e.target.value;
    const isNumber: Boolean = /(^[0-9]*$)/.test(value);
    const isValid: Boolean = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value);

    if (isNumber) setZipcode(e.target.value);

    if (value === "" || zipcode === "") {
      setErrorMsg("");
    } else {
      if (isValid) setErrorMsg("");
      else setErrorMsg("Invalid zip code!");
    }
  }

  const autoComplete = (): void => {
    const n: number = 1e7;
    let currentValue: string = zipcode;

    if (zipcode.length > 5) {
      currentValue = currentValue.substr(0, 5);
    } else {
      for (let i: number = zipcode.length; i < 5; i++) {
        currentValue += Math.floor((Math.random() * n % 10));
      }
    }

    setZipcode(currentValue);
    setErrorMsg("");
  }

  return (
    <div className='flex justify-center items-center min-h-[100vh]'>
      <div className="flex flex-col items-start">
        <div className="flex">
          <input
            type="text"
            value={zipcode}
            placeholder="Enter American zip code"
            className={`p-2 border-2 rounded-md text-lg text-sky-800 mr-2 ${errorMsg ? 'border-red-600 ' : 'border-sky-800'}`}
            onChange={inputZipcode}
          />

          <button className='p-2 bg-sky-800 rounded-md text-white text-lg hover:bg-sky-600' onClick={autoComplete}>Auto</button>
        </div>

        {errorMsg && <div className='text-red-600 mt-1'>{errorMsg}</div>}
      </div>
    </div>
  )
}

export default ZipcodeInput;