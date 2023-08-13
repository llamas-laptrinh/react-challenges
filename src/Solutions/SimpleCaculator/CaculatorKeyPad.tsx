import React, { useState } from "react";

type TypeItem = {
    setResult : (result : string) => void
}

export default function CaculatorKeyPad({setResult} : TypeItem) {
    const [input, setInput] = useState<string>("");
    setResult(input.toString());

    const handleClick = (e: any) => {
        setInput(input.concat(e.target.name).toString());
    }

    const clear = () => {
        setInput("");
    }

    const backspace = () => {
        setInput(input.slice(0, input.length - 1));
    }

    const Caculator = () => {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput("Error0");
        }
    }

    return (
        <div className="keypad">
            <button onClick={clear} id="clear">Clear</button>
            <button onClick={backspace} id="backspace">C</button>
            <button name="/" onClick={handleClick}>&divide;</button>
            <button name="7" onClick={handleClick}>7</button>
            <button name="8" onClick={handleClick}>8</button>
            <button name="9" onClick={handleClick}>9</button>
            <button name="+" onClick={handleClick}>&times;</button>
            <button name="4" onClick={handleClick}>4</button>
            <button name="5" onClick={handleClick}>5</button>
            <button name="6" onClick={handleClick}>6</button>
            <button name="-" onClick={handleClick}>&ndash;</button>
            <button name="1" onClick={handleClick}>1</button>
            <button name="2" onClick={handleClick}>2</button>
            <button name="3" onClick={handleClick}>3</button>
            <button name="+" onClick={handleClick}>+</button>
            <button name="0" onClick={handleClick}>0</button>
            <button name="." onClick={handleClick}>.</button>
            <button onClick={Caculator} id="result">=</button>
        </div>
    );
};