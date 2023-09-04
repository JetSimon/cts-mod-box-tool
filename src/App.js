import './App.css';
import ModBox from './components/ModBox';
import Picker from './components/Picker';
import TextInput from './components/TextInput';
import Output from './components/Output';
import React, {useState} from "react";

function App() {

  let [headerColor, setHeaderColor] = useState("#BFE6FF");
  let [headerTextColor, setHeaderTextColor] = useState("#000000");
  let [descriptionBackgroundColor, setDescriptionBackgroundColor] = useState("#BFE6FF");
  let [descriptionTextColor, setDescriptionTextColor] = useState("#000000");
  let [mainColor, setMainColor] = useState("#BFE6FF");
  let [secondaryColor, setSecondaryColor] = useState("#556fb0");
  let [uiTextColor, setUiTextColor] = useState("#FFFFFF");
  let [imageUrl, setImageUrl] = useState("https://placekitten.com/g/180/100");

  function getCode() {
    const modBoxTheme = {
      "header_color" : headerColor,
      "header_text_color" : headerTextColor,
      "description_text_color" : descriptionTextColor,
      "description_background_color" : descriptionBackgroundColor,
      "main_color" : mainColor,
      "secondary_color" : secondaryColor,
      "ui_text_color": uiTextColor
    }

    return "campaignTrail_temp.modBoxTheme = " + JSON.stringify(modBoxTheme, "", 5);
  }

  return (
    <div className="App">
      <div className="App-header">Jet's CTS Mod Box Tool</div>
      <div className="App-main">
        <div className='App-pickers'>
          <Picker target="Header Color" color={headerColor} setColor={setHeaderColor}></Picker>
          <Picker target="Header Text Color" color={headerTextColor} setColor={setHeaderTextColor}></Picker>
          <Picker target="Description Background Color" color={descriptionBackgroundColor} setColor={setDescriptionBackgroundColor}></Picker>
          <Picker target="Description Text Color" color={descriptionTextColor} setColor={setDescriptionTextColor}></Picker>
          <Picker target="Main Color" color={mainColor} setColor={setMainColor}></Picker>
          <Picker target="Secondary Color" color={secondaryColor} setColor={setSecondaryColor}></Picker>
          <Picker target="UI Text Color" color={uiTextColor} setColor={setUiTextColor}></Picker>
          <TextInput value={imageUrl} setValue={setImageUrl} placeholder="Paste the url to your image here"></TextInput>
        </div>
        <div div style={{"display":"inline-block"}}>
          <ModBox headerColor={headerColor} headerTextColor={headerTextColor} descriptionBackgroundColor={descriptionBackgroundColor} descriptionTextColor={descriptionTextColor} mainColor={mainColor} secondaryColor={secondaryColor} uiTextColor={uiTextColor} imageUrl={imageUrl}></ModBox>
        </div>
      </div>
      <Output value={getCode()}></Output>
    </div>
  );
}

export default App;
