export default function Die({numSides = 6}) {
    const face = Math.floor(Math.random() * numSides) + 1;
  return (
    <div className="Die">
      <p>{numSides}-sided die roll: {face}</p>
    </div>
  )
}