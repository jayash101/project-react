import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef : allow two elements connect with each other
  const passwordRef = useRef(null);

  // copy to clipboard
  const copyPassword = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, password.length);
  }, [password]);

  // useCallback
  const generatePassword = useCallback(() => {
    let passwordText = "";

    let stringText = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) stringText += "0123456789";

    if (characterAllowed) stringText += "!@#$%^&*()_+-={}[]]~`";

    for (let i = 0; i <= length; i++) {
      const randomIndex = Math.floor(Math.random() * stringText.length + 1);

      passwordText += stringText.charAt(randomIndex);
    }

    setPassword(passwordText);
  }, [length, numberAllowed, characterAllowed]);

  //useEffect
  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, characterAllowed, generatePassword]);

  return (
    <main className="flex h-screen flex-col gap-12 bg-black text-white">
      <h1 className="py-4 text-center text-4xl text-green-300">
        Password Generator
      </h1>

      <section className="mx-auto flex w-full max-w-lg flex-col gap-2 rounded-sm bg-fuchsia-600 px-4 py-4">
        <div className="flex items-center">
          <input
            type="text"
            value={password}
            className="inputText w-full rounded-l-sm py-2 indent-3 text-purple-500 outline-none"
            readOnly
            placeholder="Password"
            ref={passwordRef}
          />

          <button
            className="rounded-r-sm bg-pink-500 px-2 py-2"
            onClick={copyPassword}
          >
            Copy
          </button>
        </div>

        <div className="flex items-center justify-around gap-4 py-2">
          <input
            type="range"
            min={8}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />

          <label className="">
            Length: <span className="font-bold">[{length}]</span>
          </label>

          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((numberAllowed) => !numberAllowed);
              }}
            />
            <span>Numbers</span>
          </label>

          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              onChange={() => {
                setCharacterAllowed((characterAllowed) => !characterAllowed);
              }}
            />
            <span>Characters</span>
          </label>
        </div>
      </section>
    </main>
  );
}

export default App;
