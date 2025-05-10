import React from 'react'
import useStructure from './useStructure'

export type StructureRotation = 0 | 45 | 90 | 135 | 180 | 225 | 270 | 315

export interface StructurePosition {
    x: number,
    y: number,
}

export interface StructureProps {
    type: 'village' | 'city' | 'thief' | 'road',
    color: string,
    size?: number,
    className?: string,
    rotation?: StructureRotation,
    position?: StructurePosition,
}

const Strucutre: React.FC<StructureProps> = (
    props
) => {

  const {getStructure} = useStructure(props)  
  return (
    getStructure()
  )
}

export default Strucutre