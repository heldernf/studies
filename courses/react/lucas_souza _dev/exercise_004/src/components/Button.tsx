const buttonVariants = {
  gray: 'bg-gray-600',
  red: 'bg-red-600',
  green: 'bg-green-600',
  purple: 'bg-purple-600'
}

interface IButtonProps extends React.ComponentProps<'button'> {
  children: React.ReactNode
  className?: never
  variant?: keyof typeof buttonVariants
}

export default function Button({ children, variant, ...args }: IButtonProps) {
  return (
    <button
      {...args}
      className={`${buttonVariants[variant || 'gray']} p-1 rounded`}
    >
      {children}
    </button>
  )
}
