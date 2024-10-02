function Button({ text, generateJoke }) {
  return (
    <button className="rounded bg-green-600 px-6 py-2 font-mono text-xl tracking-wider hover:bg-green-500" onClick={generateJoke}>
      {text}
    </button>
  );
}

export default Button;
