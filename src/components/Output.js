import "./Picker.css";
import React, {useState} from "react";

function Output(props) {

    const COPY = <span><p>To Put in Code 1</p><p>(click to copy to clipboard)</p></span>;
    const COPIED = <p>Copied to clipboard!</p>;

    let [labelText, setLabelText] = useState(COPY);

    function copyToClipboard() {
        window.navigator.clipboard.writeText(props.value);
        setLabelText(COPIED);
        setTimeout(() => setLabelText(COPY), 1000);
    }

    return (
        <div onClick={copyToClipboard} className="Output">
            <label>{labelText}</label>
            <textarea value={props.value} readonly></textarea>
        </div>
    )
}

export default Output;