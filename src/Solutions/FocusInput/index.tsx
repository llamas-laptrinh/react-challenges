import React from "react";
import { useRef } from "react"


export default function FocusInput() {
    const inputref = useRef<any>();
    const [item, setItem] = React.useState<string>("");
    const onFocus = () => {
        inputref.current.focus();
        setItem("https://kenh14cdn.com/thumb_w/620/2020/7/17/brvn-15950048783381206275371.jpg");
    };
        return (

        <div>
            <label className="labelText" htmlFor="input">Input</label>
            <input ref = {inputref} type="text" name="input" id="input" />
            <p className="focusText" onClick={onFocus}>
                Focus
            </p>
            <img src = {item} alt="image" height={50} width={50} />
        </div>
    );
};