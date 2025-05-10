import { useEffect, useState } from "react";
import { Resource } from "../../models/types";
import { EdgePosition, TileProps, VertexPosition } from "../Tile/Tile";
import { theme } from "@/app/themes/theme";
import { PlacedStructure } from "@/app/utils/positionUtils";

const useBoard = () => {
  type BuildMode = "village" | "city" | "road" | "none";

  const [rows, setRows] = useState<TileProps[][]>([]);
  const [tiles, setTiles] = useState<TileProps[]>([]);
  const [structures, setStructures] = useState<PlacedStructure[]>([]);
  const [buildMode, setBuildMode] = useState<BuildMode>("none");
  const currentPlayerColor = theme.colors.purple;

  const rowMargin = [
    "mt-0",
    "mt-[-26px]",
    "mt-[-26px]",
    "mt-[-26px]",
    "mt-[-26px]",
  ];

  const handleVertexClick = (tileId: number, vertex: VertexPosition) => {
    if (buildMode === "village" || buildMode === "city") {
      const newStructure: PlacedStructure = {
        position: {
          tileId,
          position: vertex,
          type: "vertex",
        },
        type: buildMode,
        color: currentPlayerColor,
      };

      setStructures([...structures, newStructure]);
    }
  };

  const handleEdgeClick = (tileId: number, edge: EdgePosition) => {
    if (buildMode === "road") {
      const newStructure: PlacedStructure = {
        position: {
          tileId,
          position: edge,
          type: "edge",
        },
        type: "road",
        color: currentPlayerColor,
      };

      setStructures([...structures, newStructure]);
    }
  };

  useEffect(() => {
    const tiles = generateTiles();
    setTiles(tiles);
    const rows = [
      tiles.slice(0, 3),
      tiles.slice(3, 7),
      tiles.slice(7, 12),
      tiles.slice(12, 16),
      tiles.slice(16, 19),
    ];
    setRows(rows);
  }, []);

  const generateTiles = () => {
    const resources: (Resource)[] = [
      "wood",
      "wood",
      "wood",
      "wood",
      "clay",
      "clay",
      "clay",
      "sheep",
      "sheep",
      "sheep",
      "sheep",
      "wheat",
      "wheat",
      "wheat",
      "wheat",
      "stone",
      "stone",
      "stone",
      "desert",
    ];

    const numbers: number[] = [
      2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12,
    ];

    const shuffledResources = resources.sort(() => Math.random() - 0.5);
    const shuffledNumbers = numbers.sort(() => Math.random() - 0.5);

    const tiles: TileProps[] = [];
    let numberIndex = 0;

    for (let i = 0; i < shuffledResources.length; i++) {
      const resource = shuffledResources[i];
      const number = resource === "desert" ? 0 : shuffledNumbers[numberIndex++];
      tiles.push({
        id: i + 1,
        resource,
        number,
        onVertexClick: handleVertexClick,
        onEdgeClick: handleEdgeClick,
      });
    }

    return tiles;
  };

  return {
    generateTiles,
    rowMargin,
    rows,
    tiles,
    buildMode,
    setBuildMode,
    handleVertexClick,
    handleEdgeClick,
    structures,
    setStructures,
    currentPlayerColor,
  };
};

export default useBoard;
