export default function ColorList({ color }) {
    const elements = [<p>Boba</p>, <p>Tea</p>, <p>Is</p>, <p>Life</p>, <input type="password" name="" id="" />];
    return (
        <div>
            <h2>Color List:</h2>
            <ul >{color.map((color) => <ul style={{color: color}}>{color}</ul>)}</ul>
        </div>
    )
}