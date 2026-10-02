import { useState } from 'react'

interface IInputAddProps {
  onAdd(label: string): void
}

export default function InputAdd({ onAdd }: IInputAddProps) {
  const [inputText, setInputText] = useState('')
  const isValidInputText = inputText.trim().length > 0

  function handleAdd() {
    onAdd(inputText)
    setInputText('')
  }

  return (
    <div className="flex gap-2">
      <input
        id="input"
        type="text"
        className="border-2"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <button
        disabled={!isValidInputText}
        onClick={handleAdd}
        className="bg-sky-950 p-1 rounded disabled:cursor-not-allowed"
      >
        Adicionar
      </button>
    </div>
  )
}
