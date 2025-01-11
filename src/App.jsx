import './App.css'
// import Chicken from './Chicken'
// import Greeter from './Greeter'
// import Die from './Die'
// import ListPicker from './ListPicker' 
// import DoubleDice from './DoubleDice'
// import ColorList from './ColorList'
// import ShoppingList from './ShoppingList'
// import PropertyList from './PropertyList'
// import Clicker from './Clicker'
// import ColorBoxes from './pt1/ColorBoxes'
// import ScoreKeeper from './ScoreKeeper';
import EmojiClicker from './EmojiClicker';

// const data = [
//   {id: '1', item: 'eggs', quantity: 2, completed: false},
//   {id: '2', item: 'milk', quantity: 1, completed: true},
//   {id: '3', item: 'chicken breast', quantity: 4, completed: true},
//   {id: '4', item: 'carrots', quantity: 6, completed: true},
// ]
// const properties = [
//   { id: 1, name: "Sunny Beach House", rating: 4.5, price: 250 },
//   { id: 2, name: "Mountain Retreat", rating: 4.7, price: 300 },
//   { id: 3, name: "Cozy Cottage", rating: 4.2, price: 150 },
//   { id: 4, name: "Urban Loft", rating: 4.8, price: 350 },
//   { id: 5, name: "Seaside Villa", rating: 5.0, price: 500 }
// ];

function App() { {/* whatever is in curly braces IS TREATED AS PLAIN JAVASCRIPT*/}
  return (
    <div className="App">
      {/* <DoubleDice/>
      <DoubleDice/>
      <DoubleDice/> */}
      {/* <ColorList color={["red", "pink", "yellow", "#f14c"]}/> */}
      {/* <ListPicker items={[1, 2, 3, 4, 5]}/>
      <ListPicker items={["s", "a", "d", "b", "n"]}/> */}
      {/* <Die numSides={20}/> 
      <Die numSides={9}/>
      <Die />
      <Greeter person="Willi" from="Bubba"/> */}

      {/* <ShoppingList items={data}/> */}

      {/* <PropertyList properties={properties}/> */}

      {/* <Clicker buttonText="Crick Me"/> */}

      {/* <ColorBoxes colors={["red", "blue", "green", "yellow", "purple"]}/> */}

      {/* <ScoreKeeper /> */}

      <EmojiClicker />


    </div>
  );
}

export default App
