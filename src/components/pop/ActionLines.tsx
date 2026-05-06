interface ActionLinesProps {
  color?: string
}

export function ActionLines({ color }: ActionLinesProps) {
  return (
    <div
      className="action-lines"
      style={color ? { background: undefined } : undefined}
    />
  )
}