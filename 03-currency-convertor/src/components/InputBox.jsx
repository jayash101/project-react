import React, { useId } from "react";

const InputBox = ({
  label,
  amount = "",
  onAmountChange,
  onCurrencyChange,

  // list of currency options
  currencyOptions = [],

  // default currency
  selectCurrency = "usd",

  amountDisable = false,
  currencyDisable = false,
  className = "",
}) => {
  const amountInputId = useId();
  return (
    <>
      <div className={`flex rounded-lg bg-white p-3 text-sm ${className}`}>
        <div className="w-1/2">
          <label
            htmlFor={amountInputId}
            className="mb-2 inline-block text-black/40"
          >
            {label}
          </label>

          <input
            id={amountInputId}
            type="number"
            placeholder="Amount"
            className="w-full bg-transparent py-1.5 outline-none"
            disabled={amountDisable}
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          />
        </div>

        <div className="flex w-1/2 flex-wrap justify-end text-right">
          <p className="mb-2 w-full text-black/40">Currency Type</p>

          <select
            className="cursor-pointer rounded-lg bg-gray-100 py-2 pl-4 font-bold uppercase text-blue-500 outline-none"
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={currencyDisable}
          >
            {currencyOptions.map((currency) => {
              return (
                <option
                  key={currency}
                  value={currency}
                  className="bg-blue-100 text-blue-600"
                >
                  {currency}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export default InputBox;
