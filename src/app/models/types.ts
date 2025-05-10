export type Resource = "wood" | "clay" | "stone" | "sheep" | "wheat" | "desert"

export type gameColors = "red" | "blue" | "green" | "yellow" | "purple" | "pink" | "white" | "black"

export type StructureType = "village" | "city" | "road"

type hexagonNumber = 0 | 1 | 2 | 3 | 4 | 5;

interface Position {
    tileId: number;
    vertex: hexagonNumber;
    edge: hexagonNumber;
}

export interface Player {
    id: number,
    username: string,
    resources: {
        [key in Resource]: number
    }
    activeColor: gameColors
    victoryPoints: number
    villages: number
    cities: number
    roads: number
}

export interface Tile {
    id: number,
    resource: Resource ,
    number: number,
}

export interface Structure {
    id: number,
    type: StructureType,
    owner: Player,
    position: Position
}
