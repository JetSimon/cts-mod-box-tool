import React from "react";
import "./Picker.css";

function Picker(props) {

    let inputElement = React.createRef();;

    return (
        <div className="Picker">
            <input ref={x => inputElement = x} onChange={(e) => props.setColor(e.target.value)} type="color" name="picker" value={props.color} />
            <button onClick={() => console.log(inputElement)} className="Picker-color"></button>
            <label htmlFor="picker">{props.target}</label>
        </div>
    )
}

export default Picker;
