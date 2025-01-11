import { useState } from "react";
export default function EmojiClicker() {
    const [emojis, setEmojis] = useState(["😄"])

    const addEmoji = () => {
        setEmojis(emojis => [...emojis, "😄"])
    }

    return (
        <div>
            {emojis.map(e => <span style={{marginBottom: '10px', fontSize: '55px'}}>{e}</span>)} 
            <div><button onClick={addEmoji}>Add Emoji</button></div>
        </div>
    );
}