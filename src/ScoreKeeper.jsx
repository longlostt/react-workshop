import { useState } from "react";

export default function ScoreKeeper({ numPlayers = 3, target = 10 }) {
    const [scores, setScores] = useState(new Array(numPlayers).fill(0));

    const incrementScore = (idx) => {
        const update = scores.map((score, i) => {
            if (i === idx) {
                return score + 1;
            }
            return score;
        });
          
        setScores(update);
    }



    return (
        <div>
            <h1>Score Keeper</h1>
            <ul>
                {scores.map((score, idx) => (
                    <li key={idx}>
                        Player {idx + 1}: {score}
                        <button onClick={() => incrementScore(idx)} style={{ marginLeft: '15px' }}>+1</button> {score >= target ? 'Winner!' : ''}
                    </li>
                ))}
            </ul>
        </div>
    );
}



