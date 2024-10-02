import { useState } from "react";
import validator from "validator";

const Input = ({ type }) => {
  const [message, setMessage] = useState("");

  const validate = (value) => {
    validator.isStrongPassword(value, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
      ? setMessage("Strong Password")
      : setMessage("Weak Password");
  };

  return (
    <>
      <label className="flex items-center justify-center font-mono text-xl">
        Enter Password:
        <input
          type={type}
          className="ml-2 py-1 indent-2 text-black caret-black"
          onChange={(event) => validate(event.target.value)}
        />
      </label>
      <p className="py-8 text-center text-lg capitalize tracking-[0.5rem]">
        {message === "Strong Password" ? (
          <span className="text-green-500">{message}</span>
        ) : (
          <span className="text-red-500">{message}</span>
        )}
      </p>
    </>
  );
};

export default Input;
