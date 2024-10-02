import React, { useState } from "react";
import Button from "./Button";

function App() {
  const [color, setColor] = useState("bg-black");

  return (
    <main
      className={`m-0 box-border h-screen w-screen p-0 text-white ${color}`}
    >
      <section className="container flex h-screen flex-col justify-end pb-4">
        <section className="mx-auto flex w-fit items-center justify-center gap-2 rounded bg-red-50 px-2 py-2">
          <Button
            buttonBG={"bg-red-400"}
            text="red"
            changeColor={(color) => setColor(color)}
          />
          <Button
            buttonBG={"bg-blue-400"}
            text="blue"
            changeColor={(color) => setColor(color)}
          />
          <Button
            buttonBG={"bg-green-400"}
            text="green"
            changeColor={(color) => setColor(color)}
          />
          <Button
            buttonBG={"bg-yellow-400"}
            text="yellow"
            changeColor={(color) => setColor(color)}
          />
          <Button
            buttonBG={"bg-pink-400"}
            text="pink"
            changeColor={(color) => setColor(color)}
          />
          <Button
            buttonBG={"bg-gray-400"}
            text="gray"
            changeColor={(color) => setColor(color)}
          />
          <Button
            buttonBG={"bg-purple-400"}
            text="purple"
            changeColor={(color) => setColor(color)}
          />
          <Button
            buttonBG={"bg-indigo-400"}
            text="indigo"
            changeColor={(color) => setColor(color)}
          />
          <Button
            buttonBG={"bg-orange-400"}
            text="orange"
            changeColor={(color) => setColor(color)}
          />
        </section>
      </section>
    </main>
  );
}

export default App;
