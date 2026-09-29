import { useState } from 'react'

export function App() {
  const [hide, setHide] = useState(false)

  // if (hide) return null

  return (
    <div className="bg-[#131416] p-2 h-screen text-white">
      {!hide && <p>Helloooo baby!</p>}

      <button className="bg-sky-800 p-1 w-30" onClick={() => setHide(!hide)}>
        {hide ? 'unhided' : 'hide'} text
      </button>
    </div>
  )
}
