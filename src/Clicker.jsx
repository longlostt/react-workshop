import { useState } from 'react';

export default function Clicker({ buttonText }) {
    const [num, setNum] = useState(0);

    function handleClick() {
        setNum(num => num + 1); // queues up a state change to increment num
    }

    return (
        <div>
            <p>The count: {num}</p>
            <button onClick={handleClick}>{`${buttonText}`}</button>
        </div>
    );
}