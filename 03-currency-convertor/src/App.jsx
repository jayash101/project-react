import React, { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("npr");

  // Custom Hook
  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convertAmount = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <main className="flex h-screen w-full flex-wrap items-center justify-center bg-blue-500 font-mono">
        <div className="w-full">
          <h1 className="mb-8 text-center text-3xl font-bold text-white [text-shadow:0.1vw_0_0.5vw_yellow]">
            Currency Converter
          </h1>

          <div className="border-gray-60 mx-auto w-full max-w-md rounded-lg border bg-white/20 p-5 [box-shadow:0_0_1vw_white_inset]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convertAmount();
              }}
            >
              <div className="mb-1 w-full">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => {
                    setFrom(currency);
                  }}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>

              <div className="relative h-0.5 w-full">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md border-2 border-white bg-blue-600 px-2 py-0.5 uppercase tracking-widest text-white hover:border-blue-200 hover:bg-blue-200 hover:font-bold hover:text-blue-600"
                  onClick={swap}
                >
                  swap
                </button>
              </div>

              <div className="mb-4 mt-1 w-full">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-4 py-3 text-white shadow-lg hover:bg-blue-800"
              >
                Convert
                <span className="mx-2 text-green-200 [text-shadow:0_0_0.5vw]">
                  {from.toUpperCase()}
                </span>
                to
                <spa className="mx-2 text-green-200 [text-shadow:0_0_0.5vw]">
                  {to.toUpperCase()}
                </spa>
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
