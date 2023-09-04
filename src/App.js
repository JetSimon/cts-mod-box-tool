import './App.css';
import ModBox from './components/ModBox';
import Picker from './components/Picker';
import React, {useState} from "react";

function App() {

  let [headerColor, setHeaderColor] = useState("#BFE6FF");
  let [headerTextColor, setHeaderTextColor] = useState("#000000");
  let [descriptionBackgroundColor, setDescriptionBackgroundColor] = useState("#BFE6FF");
  let [descriptionTextColor, setDescriptionTextColor] = useState("#000000");
  let [mainColor, setMainColor] = useState("#BFE6FF");
  let [secondaryColor, setSecondaryColor] = useState("#556fb0");
  let [uiTextColor, setUiTextColor] = useState("#FFFFFF");

  return (
    <div className="App">
      <div className='App-pickers'>
        <Picker target="Header Color" color={headerColor} setColor={setHeaderColor}></Picker>
        <Picker target="Header Text Color" color={headerTextColor} setColor={setHeaderTextColor}></Picker>
        <Picker target="Description Background Color" color={descriptionBackgroundColor} setColor={setDescriptionBackgroundColor}></Picker>
        <Picker target="Description Text Color" color={descriptionTextColor} setColor={setDescriptionTextColor}></Picker>
        <Picker target="Main Color" color={mainColor} setColor={setMainColor}></Picker>
        <Picker target="Secondary Color" color={secondaryColor} setColor={setSecondaryColor}></Picker>
        <Picker target="UI Text Color" color={uiTextColor} setColor={setUiTextColor}></Picker>
      </div>
      <div div style={{"display":"inline-block"}}>
        <ModBox headerColor={headerColor} headerTextColor={headerTextColor} descriptionBackgroundColor={descriptionBackgroundColor} descriptionTextColor={descriptionTextColor} mainColor={mainColor} secondaryColor={secondaryColor} uiTextColor={uiTextColor} imageUrl="https://i.imgur.com/3TyYZIa.png" modTitle="Test" description="Test" ></ModBox>
      </div>
    </div>
  );
}

export default App;
