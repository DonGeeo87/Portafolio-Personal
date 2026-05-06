interface ChapterNumberProps {
  number: number
  color?: string
}

export function ChapterNumber({ number, color }: ChapterNumberProps) {
  return (
    <span
      className="chapter-number"
      style={color ? { color } : undefined}
    >
      {number}
    </span>
  )
}