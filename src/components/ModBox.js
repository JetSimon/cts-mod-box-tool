import React from "react";
import "./ModBox.css";

const UNFAV = "♥";
const FAV = "♡";
const PLAY = "▶";

function ModBox(props) {
    return (
        <div style={{"backgroundColor":props.mainColor}} className="community-grid-element">
        <div style={{"color":props.headerTextColor,"backgroundColor":props.headerColor}} className="mod-title">
        <p>{props.modTitle}</p>
    </div>
    <img className="mod-image" src={props.imageUrl}></img>
    <div style={{"color":props.descriptionTextColor,"backgroundColor":props.descriptionBackgroundColor}} className="mod-desc">{props.description}</div>
    <div className="hover-button-holder">
        <button style={{"color":props.uiTextColor, "backgroundColor":props.secondaryColor}}  className="hover-button"><span>{PLAY}</span></button>
        <button style={{"color":props.uiTextColor, "backgroundColor":props.secondaryColor}}  className="hover-button"><span>{FAV}</span></button>
    </div>
    <div style={{"color":props.uiTextColor, "backgroundColor":props.secondaryColor}} className="rating-background">
        <div className="mod-rating">1 FAVORITE</div>
    </div>
    </div>
    )
}

export default ModBox;