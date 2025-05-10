import { StructureProps } from "../Structure/Strucutre"

export interface CityProps extends StructureProps {
    type: 'city'
}

const City: React.FC<CityProps> = ({ color, size = 24, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    style={{ display: 'block' }}
  >
    <rect x="3" y="10" width="4" height="11" fill={color} stroke="#222" strokeWidth="2" />
    <rect x="9" y="6" width="4" height="15" fill={color} stroke="#222" strokeWidth="2" />
    <rect x="15" y="13" width="4" height="8" fill={color} stroke="#222" strokeWidth="2" />

    <polygon points="2.5,10 5,6.5 7.5,10" fill={color} stroke="#222" strokeWidth="2" />
    <polygon points="8.5,6 11,2.5 13.5,6" fill={color} stroke="#222" strokeWidth="2" />
    <polygon points="14.5,13 17,9.5 19.5,13" fill={color} stroke="#222" strokeWidth="2" />
  </svg>
)

export default City
