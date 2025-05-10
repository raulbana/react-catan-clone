import { StructureProps } from "../Structure/Strucutre"

export interface ThiefProps extends StructureProps {
  type: 'thief'
}

const Thief: React.FC<ThiefProps> = ({ color, size = 24, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    style={{ display: 'block' }}
  >
    <ellipse cx="12" cy="16" rx="6" ry="5" fill={color} stroke="#222" strokeWidth="2" />
    <path
      d="M10,10 Q12,8 14,10"
      fill={color}
      stroke="#222"
      strokeWidth="2"
    />
    <rect x="10" y="10" width="4" height="2" fill="#222" rx="1" />
    <line x1="11" y1="10" x2="13" y2="10" stroke="white" strokeWidth="1" />
  </svg>
)

export default Thief
