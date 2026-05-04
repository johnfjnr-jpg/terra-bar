interface PlaceholderProps {
  label?: string
  style?: React.CSSProperties
}

export default function Placeholder({ label, style }: PlaceholderProps) {
  return (
    <div className="tb-placeholder" style={style}>
      {label && <span className="tb-ph-label">{label}</span>}
    </div>
  )
}
