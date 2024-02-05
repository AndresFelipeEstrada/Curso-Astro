import { useState } from "preact/hooks";

export default function Gretting({ messages }) {

  const ramdonMessage = () => messages[(Math.floor(Math.random() * messages.length))]

  const [gretting, setGretting] = useState(ramdonMessage())

  return (
    <div>
      <h3 class='gretting-title'>{gretting} Gracias por su visita</h3>
      <button style={
        { color: 'white', backgroundColor: '#4c1d95', padding: '0.5rem 1rem', border: 'none', cursor: 'pointer', textTransform: 'uppercase', fontWeight: 'bold' }
      } onClick={() => setGretting(ramdonMessage())}>
        Nuevo saludo
      </button>
    </div>
  )
}
