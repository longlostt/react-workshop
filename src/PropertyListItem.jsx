export default function PropertyListItem({ name, rating, price }) {
    return (
        <div className='PropertyItem'>
            <h1> {name}</h1>
            <p><b>{price} $ a night</b></p>
            <p><b>Rating: {`⭐ ${rating}`}</b></p>
        </div>
    );
}
