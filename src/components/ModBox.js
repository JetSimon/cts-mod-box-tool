import React from "react";
import "./ModBox.css";

const FAV = "♡";
const PLAY = "▶";

function ModBox(props) {
    return (
        <div style={{"backgroundColor":props.mainColor}} className="community-grid-element">
        <div style={{"color":props.headerTextColor,"backgroundColor":props.headerColor}} className="mod-title">
        <p contentEditable>Title Here</p>
    </div>
    <img className="mod-image" alt="Mod" src={props.imageUrl}></img>
    <div style={{"color":props.descriptionTextColor,"backgroundColor":props.descriptionBackgroundColor}} className="mod-desc" contentEditable>Ricotta cheesecake fondue. Port-salut mascarpone cheddar babybel airedale rubber cheese cheesy grin pecorino. Cottage cheese port-salut gouda when the cheese comes out everybody's happy swiss ricotta manchego babybel. Hard cheese cauliflower cheese jarlsberg ricotta mascarpone.</div>
    <div className="hover-button-holder">
        <button style={{"color":props.uiTextColor, "backgroundColor":props.secondaryColor}}  className="hover-button"><span>{PLAY}</span></button>
        <button style={{"color":props.uiTextColor, "backgroundColor":props.secondaryColor}}  className="hover-button"><span>{FAV}</span></button>
    </div>
    <div style={{"color":props.uiTextColor, "backgroundColor":props.secondaryColor}} className="rating-background">
        <div className="mod-rating"><span contentEditable>2</span> FAVORITES</div>
    </div>
    </div>
    )
}

export default ModBox;