import { StructureProps } from "../Structure/Strucutre"


export interface RoadProps extends StructureProps {
  type: 'road',
}

const Road: React.FC<RoadProps> = ({ color, size = 24, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    style={{ display: 'block' }}
  >
    <rect x="9" y="3" width="6" height="18" fill={color} stroke="#222" strokeWidth="2" rx="1" />
    <line x1="12" y1="5" x2="12" y2="7" stroke="white" strokeWidth="1.5" />
    <line x1="12" y1="10" x2="12" y2="12" stroke="white" strokeWidth="1.5" />
    <line x1="12" y1="15" x2="12" y2="17" stroke="white" strokeWidth="1.5" />
  </svg>
)

export default Road
