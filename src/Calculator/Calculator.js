import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Calculator.css";

const Calculator = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const inputNumber = (number) =>
    dispatch({ type: "ADD_NUMBER", value: number });
  const calculate = () =>
    dispatch({ type: "CALCULATE", value: state.InputValue });

  const displayInputValueHandler = () =>
    dispatch({ type: "DISPLAY", value: state.InputValue });

  const calcKeyPad = state.numbers.map((keypad) => {
    return (
      <input
        key={keypad}
        type="submit"
        value={keypad}
        className="KeyPad"
        onClick={() => inputNumber(keypad)}
      />
    );
  });

  const displayValue = (
    <input
      type="text"
      className="displayValue"
      onChange={displayInputValueHandler}
      value={
        state.InputValue.length === 0 ? "Введите значение" : state.InputValue
      }
    />
  );
  console.log(state);
  return (
    <>
      <div className="keyPadForm">
        {displayValue}
        {calcKeyPad}
        <input
          type="submit"
          value="="
          className="calculateButton"
          onClick={calculate}
        />
      </div>
    </>
  );
};

export default Calculator;
