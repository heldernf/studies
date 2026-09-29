import { useState } from 'react'

export function App() {
  const [count, setCount] = useState(0)

  console.log('Rendered')

  return (
    <div className="bg-[#131416] p-2 h-screen text-white">
      <button
        className="bg-sky-800 p-1 w-20"
        onClick={() => setCount(count + 1)}
      >
        {count}
      </button>
    </div>
  )
}
