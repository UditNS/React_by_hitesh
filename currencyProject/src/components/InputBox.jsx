import React from "react";
import { useId } from "react";

// useId hook is used for generating unique IDs that can be passed to accessibility attributes
// DONOT CALL USEID TO GENERATE KEYS IN A LIST.

function InputBox({
  //  catching the props
  // these are the things which i want from the user
  label,
  amount,
  onAmountChange, // user input (amount that user want to check)
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputID = useId(); //unique ID

  return (
    // the below line uses javascript in classname to make the classes dynamic so that we can change the classname through user input
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputID}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputID}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          // sometimes e.target.value is in string form

          //As onAmountChange is a function so we can't set its default value.
          // To have safety check we do && onAmountChange(Number(e.target.value))
          // && is short circuit check
          //onAmountChange && something means:

          // If onAmountChange is truthy (exists, not null or undefined or false), then run something.
          // If onAmountChange is falsy (not passed by the parent), then do nothing.
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          disabled={currencyDisable}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(Number(e.target.value))
          }
        >
          {currencyOptions.map((val) => (
            // remember the key in loop is required to maintain efficient performance of the app.
            <option key={val} value={val}>
              {val}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
