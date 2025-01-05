export default function Greeter({ person, from }) {
  return (
    <>
      <h1 className="Greeter">Hi There, {person}!</h1>
      <h2> - {from}</h2>
    </>
  )
}