// ShoppingListItem.js
export default function ShoppingListItem({ item, quantity, completed }) {
    return (
        <li style={{ 
            color: completed ? "gray" : "white", 
            textDecoration: completed ? "line-through" : "" }}>
                 
            {quantity} {item}
        </li>
    );
}
