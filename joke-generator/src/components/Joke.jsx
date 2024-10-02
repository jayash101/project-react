import { useState } from "react";
import Button from "./Button";

function Joke() {
  const [setup, setSetup] = useState("");
  const [punchline, setPunchline] = useState("");

  const generateJoke = async () => {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke",
    );
    const data = await response.json();

    setSetup(data.setup);
    setPunchline(data.punchline);
  };

  return (
    <>
      <Button text={"Generate joke"} generateJoke={generateJoke} />

      <section className="w-1/2 text-center text-xl flex flex-col gap-2">
        <p className="tracking-widest text-yellow-400">{setup}</p>
        <p className="font-bold tracking-wide text-indigo-200">{punchline ? punchline + " 😂😂😂" : ""}</p>
      </section>
    </>
  );
}

export default Joke;
