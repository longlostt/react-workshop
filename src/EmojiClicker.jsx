import { v4 as uuid } from "uuid";
import { useState } from "react";
export default function EmojiClicker() {
    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: "😄" }])

    const addEmoji = () => {
        setEmojis(emojis => [...emojis, { id: uuid(), emoji: "😄" }])
    }

    const deleteEmoji = (id) => {
        setEmojis(emojis => emojis.filter(e => e.id !== id))
    }

    const updateAllEmojis = () => {
        setEmojis(emojis => emojis.map(e => ({ ...e, emoji: "❤️" })))
    }
    return (
        <div>
            {emojis.map(e => <span 
                onClick={() => deleteEmoji(e.id)} 
                key={e.id} 
                style={{ marginBottom: '10px', fontSize: '55px', cursor: "pointer" }}>{e.emoji}</span>)}
            <div><button onClick={addEmoji}>Add Emoji</button></div>
            <div><button onClick={updateAllEmojis}>Update All Emoji</button></div>
        </div>
    );
}