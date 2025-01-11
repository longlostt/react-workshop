import { useState } from "react";

export default function ScoreKeeper() {
    const [scores, setScores] = useState({p1Score: 0, p2Score: 0});
    
    const incrementP1Score = () => {
        setScores(scores => ({ ...scores, p1Score: scores.p1Score + 1 }));
    };
    const incrementP2Score = () => {
        setScores(scores => ({ ...scores, p2Score: scores.p2Score + 1 }));
    };

    return (
        <div>
            <p>Player 1: {scores.p1Score} </p>
            <p>Player 2: {scores.p2Score}</p>
            <button onClick={incrementP1Score}>+1 Player 1</button>
            <button onClick={incrementP2Score}>+1 Player 2</button>
        </div>
    );
}