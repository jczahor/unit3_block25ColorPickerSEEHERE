import { useState } from 'react'
const [selectedColor, setSelectedColor] = useState("") /*remember the selectedColor = state. State = state variable. setSelectedColor = setState. setState = adding data. and useState allows lets the component "remember" info about itself*/ 

// Write your Color component here
const Color = ({ color, setSelectedColor }) => {
  return <div className={color} onClick={() => setSelectedColor(color)}></div>; 
};


const App = () => { /*Picker component */
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="orange" setSelectedColor={setSelectedColor}/>
        <Color color="violet" setSelectedColor={setSelectedColor}/>
        <Color color="black" setSelectedColor={setSelectedColor}/>
      </div>
    </div>
  );
};

export default App;
