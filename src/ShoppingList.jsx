// ShoppingList.js
import ShoppingListItem from "./ShoppingListItem";

export default function ShoppingList({ items }) {
    return (
        <div>
            <h2>TODO list:</h2>
            <ul>
                {items.map((i) => (
                    <ShoppingListItem 
                        key={i.id} // This is correct: key goes on the parent list element
                        item={i.item} 
                        quantity={i.quantity} 
                        completed={i.completed} 
                    />
                ))}
            </ul>
        </div>
    );
}
