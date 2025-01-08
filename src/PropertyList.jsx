import PropertyListItem from "./PropertyListItem";
import "./PropertyList.css";

export default function PropertyList({ properties }) {
    return (
        <div className="PropertyContainer">
            {properties.map((p) => (
                <PropertyListItem
                    key={p.id} // This is correct: key goes on the parent list element
                    name={p.name}
                    rating={p.rating}
                    price={p.price}
                />
            ))}
        </div>
    );
}
