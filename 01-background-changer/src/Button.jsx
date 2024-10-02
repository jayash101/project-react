const Button = ({ buttonBG, text, changeColor }) => {
  return (
    <>
      <button
        className={`rounded px-6 py-2 text-lg text-white ${buttonBG}`}
        onClick={() => changeColor(buttonBG)}
      >
        <p className="capitalize">{text}</p>
      </button>
    </>
  );
};

export default Button;
