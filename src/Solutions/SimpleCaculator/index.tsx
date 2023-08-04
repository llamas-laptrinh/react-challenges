import { useState } from "react"

export default function SimpleCaculator() {
    const [val, setVal] = useState("0");
    const [operation, setOperation] = useState("");
    const [listResults, setListResults] = useState<string[]>([]);

    function calculation(x: number) {
        if (operation == "") {
            if (x == 0) {
                setVal((parseInt(val) + x).toString());
            } else {
                setVal((parseInt(val) * 10 + x).toString());
            }
        } else {
            switch (operation) {
                case "+":
                    setVal((parseFloat(val) + x).toFixed(2).toString());
                    setOperation("");
                    break;
                case "-":
                    setVal((parseFloat(val) - x).toFixed(2).toString());
                    setOperation("");
                    break;
                case "*":
                    setVal((parseFloat(val) * x).toFixed(2).toString());
                    setOperation("");
                    break;
                case "/":
                    setVal((parseFloat(val) / x).toFixed(2).toString());
                    setOperation("");
                    break;
                case ".":
                    if (val.length == 4) {
                        alert('Limit to only 2 decimal places!');
                        return;
                    }
                    setVal((parseFloat(val) + x * Math.pow(0.1, val.slice(val.indexOf("."), val.length).length)).toString());
                    break;

                default:
                    break;
            }
        }
    }

    return (
        <div>
            <h3>Simple Caculator</h3>
            <div>
                <div className="container">
                    <input size={13} style={{
                        fontSize: "1em", lineHeight: "32px", borderRadius: "4px",
                        border: "1px solid black"
                    }} type="text" placeholder={val.toString()} value={val} onChange={(e) => setVal(e.target.value)} />
                    <button onClick={() => {
                        setVal("0");
                        setOperation("");
                    }} style={{ backgroundColor: 'red' }}>C</button>
                </div>
                <div className="container">
                    <div className="item">
                        <button onClick={() => calculation(7)}>7</button>
                        <button onClick={() => calculation(8)}>8</button>
                        <button onClick={() => calculation(9)}>9</button>
                        <button onClick={() => {
                            setOperation('/')
                        }} style={{ backgroundColor: 'orange' }}>/</button>
                    </div>
                    <div className="item">
                        <button onClick={() => calculation(4)}>4</button>
                        <button onClick={() => calculation(5)}>5</button>
                        <button onClick={() => calculation(6)}>6</button>
                        <button onClick={() => setOperation("*")} style={{ backgroundColor: 'orange' }}>*</button>
                    </div>
                    <div className="item">
                        <button onClick={() => calculation(1)}>1</button>
                        <button onClick={() => calculation(2)}>2</button>
                        <button onClick={() => calculation(3)}>3</button>
                        <button onClick={() => setOperation("-")} style={{ backgroundColor: 'orange' }}>-</button>
                    </div>
                    <div className="item">
                        <button onClick={() => calculation(0)}>0</button>
                        <button onClick={() => {
                            setOperation(".");
                        }}>.</button>
                        <button onClick={() => setListResults([...listResults, val])} style={{ backgroundColor: 'orange' }}>=</button>
                        <button onClick={() => setOperation("+")} style={{ backgroundColor: 'orange' }}>+</button>
                    </div>
                    <div>
                        <p style={{ marginBottom: '0px' }}>List of recent calculations: </p>
                        <div style={{ width: "200px" }}>
                            {listResults.map((item, key) => <span style={{ margin: "4px" }} key={key}>{item}</span>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
