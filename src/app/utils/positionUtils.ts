import { VertexPosition, EdgePosition } from '../components/Tile/Tile';
import { StructurePosition, StructureRotation } from '../components/Structure/Strucutre';

export const vertexPositions: Record<VertexPosition, StructurePosition> = {
  'top': { x: 50, y: -5 },
  'top-right': { x: 95, y: 25 },
  'bottom-right': { x: 95, y: 75 },
  'bottom': { x: 50, y: 105 },
  'bottom-left': { x: 5, y: 75 },
  'top-left': { x: 5, y: 25 },
};

export const edgePositions: Record<EdgePosition, { position: StructurePosition, rotation: StructureRotation }> = {
  'top': { position: { x: 50, y: 12 }, rotation: 0 },
  'top-right': { position: { x: 75, y: 35 }, rotation: 45 },
  'bottom-right': { position: { x: 75, y: 65 }, rotation: 135 },
  'bottom': { position: { x: 50, y: 88 }, rotation: 0 },
  'bottom-left': { position: { x: 25, y: 65 }, rotation: 45 },
  'top-left': { position: { x: 25, y: 35 }, rotation: 135 },
};

export interface BoardPosition {
  tileId: number;
  position: VertexPosition | EdgePosition;
  type: 'vertex' | 'edge';
}

export interface PlacedStructure {
  position: BoardPosition;
  type: 'village' | 'city' | 'road' | 'thief';
  color: string;
}

export function getBoardPositionCoords(
  position: BoardPosition
): { position: StructurePosition; rotation?: StructureRotation } {
  if (position.type === 'vertex') {
    return { position: vertexPositions[position.position as VertexPosition] };
  } else {
    const edgeInfo = edgePositions[position.position as EdgePosition];
    return { position: edgeInfo.position, rotation: edgeInfo.rotation };
  }
}