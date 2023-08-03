import { useState } from 'react';
import { SketchPicker } from 'react-color';

export default function ColorPicker() {
    const [color, setColor] = useState("red");
    const [listColor, setListColor] = useState<string[]>([]);

    return (
        <div style={{ width: '210px' }}>
            <SketchPicker
                color={color}
                onChange={(updatedColor) => setColor(updatedColor.hex)}
            ></SketchPicker>
            <button style={{ marginTop: '10px' }} type='button' onClick={() => setListColor([...listColor, color])}>Add Color Picker</button>
            <div style={{ marginLeft: '10px' }}>
                <p style={{ textAlign: 'left' }}>List color: </p>
                {listColor.map((item, key) => <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: `${item}`, display: "inline-block" }} key={key}></div>)}
            </div>
        </div >
    )
}
