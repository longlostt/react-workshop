import { useState } from 'react';

export default function Clicker({ buttonText }) {
    const [num, setNum] = useState(0);

    function handleClick() {
        setNum(num >= 10 ? 0 : num + 1);
    }

    return (
        <div>
            <p>The count: {num}</p>
            <button onClick={handleClick}>{`${buttonText}`}</button>
        </div>
    );
}