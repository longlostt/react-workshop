export default function DoubleDice() {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    const styles = {color: num1 == num2 ?  "green" : "red"};
    
    return (
        <div >
            {num1 === num2 ? <h1 style={styles}>You win!</h1> : <h1 style={styles}>You lose!</h1>}
            {/* num1 === num2 && <h1 style={styles} >You win!</h1> */}
            <p>First die: {num1}</p>
            <p>Second die: {num2}</p>   
            
        </div>
    )
}
// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
    
//     return (
//         <div>
//             {num1 === num2 ? <h1>You win!</h1> : null}
//             <p>First die: {num1}</p>
//             <p>Second die: {num2}</p>
            
//         </div>
//     )
// }
