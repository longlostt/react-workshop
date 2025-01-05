import './App.css'
import Chicken from './Chicken'
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker' 
import DoubleDice from './DoubleDice'
import ColorList from './ColorList'
function App() { {/* whatever is in curly braces IS JUST JAVASCRIPT*/}
  return (
    <div className="App">
      {/* <DoubleDice/>
      <DoubleDice/>
      <DoubleDice/> */}

      <ColorList color={["red", "pink", "yellow", "#f14c"]}/>
      
      {/* <ListPicker items={[1, 2, 3, 4, 5]}/>
      <ListPicker items={["s", "a", "d", "b", "n"]}/> */}

      {/* <Die numSides={20}/> 
      <Die numSides={9}/>
      <Die />
      <Greeter person="Willi" from="Bubba"/> */}
    </div>
  );
}

export default App
