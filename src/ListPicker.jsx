export default function ListPicker({ items }) {
    const randIdx = Math.floor(Math.random() * items.length);
    const randElement = items[randIdx]; 
  return (
    <div>
        <h1>Here are your items:</h1>
        <ul>
            {items.map((item) => <ul>{item}</ul>)}
        </ul>
        <h2>And the winner is... {randElement} !</h2>
    </div>
  )
}