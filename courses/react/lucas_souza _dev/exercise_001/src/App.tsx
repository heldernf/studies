type ICardProp =
  | {
      title: string
      children?: never
    }
  | {
      title?: never
      children: React.ReactNode
    }

const Card = ({ title, children }: ICardProp) => {
  return (
    <div style={{ border: '1px solid white' }}>
      <span>{title || children}</span>
      <div>Context</div>
      <div>Footer</div>
    </div>
  )
}

export function App() {
  return (
    <div className="bg-[#131416] p-2 h-screen text-white">
      Olá
      <p>Card:</p>
      <Card title="Título" />
      <Card>Filho</Card>
    </div>
  )
}
