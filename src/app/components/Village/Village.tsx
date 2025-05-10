import { StructureProps } from "../Structure/Strucutre"

export interface VillageProps extends StructureProps {
    type: 'village'
}

const Village: React.FC<VillageProps> = ({ color, size = 18, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    style={{ display: 'block' }}
  >
    <polygon
      points="12,3 3,12 6,12 6,21 18,21 18,12 21,12"
      fill={color}
      stroke="#222"
      strokeWidth={2}
    />
  </svg>
)

export default Village