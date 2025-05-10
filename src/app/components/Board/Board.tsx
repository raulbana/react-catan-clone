"use client";
import React from "react";
import Tile, { EdgePosition, VertexPosition } from "../Tile/Tile";
import useBoard from "./useBoard";
import Strucutre from "../Structure/Strucutre";
import { vertexPositions, edgePositions } from "@/app/utils/positionUtils";

const Board: React.FC = () => {
  const {
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
  } = useBoard();

  return (
    <div className="flex flex-col items-center mt-12">
      <div className="flex gap-2 mb-4">
        <button
          className={`px-4 py-2 rounded ${
            buildMode === "village" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setBuildMode("village")}
        >
          Construir Vilarejo
        </button>
        <button
          className={`px-4 py-2 rounded ${
            buildMode === "city" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setBuildMode("city")}
        >
          Construir Cidade
        </button>
        <button
          className={`px-4 py-2 rounded ${
            buildMode === "road" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setBuildMode("road")}
        >
          Construir Estrada
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => setBuildMode("none")}
        >
          Cancelar
        </button>
      </div>
      <div className="flex flex-col flex-wrap justify-center items-center relative">
        {rows.map((row, i) => (
          <div key={i} className={`flex justify-center ${rowMargin[i]}`}>
            {row.map((tile, j) => (
              <Tile
                key={j}
                resource={tile.resource}
                number={tile.number}
                id={tile.id}
                onVertexClick={handleVertexClick}
                onEdgeClick={handleEdgeClick}
              />
            ))}
          </div>
        ))}
        {structures.map((structure, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              top: `${
                structure.position.type === "vertex"
                  ? vertexPositions[
                      structure.position.position as VertexPosition
                    ].y
                  : edgePositions[structure.position.position as EdgePosition]
                      .position.y
              }px`,
              left: `${
                structure.position.type === "vertex"
                  ? vertexPositions[
                      structure.position.position as VertexPosition
                    ].x
                  : edgePositions[structure.position.position as EdgePosition]
                      .position.x
              }px`,
              transform: `translate(-50%, -50%) ${
                structure.position.type === "edge"
                  ? `rotate(${
                      edgePositions[structure.position.position as EdgePosition]
                        .rotation
                    }deg)`
                  : ""
              }`,
            }}
          >
            <Strucutre type={structure.type} color={structure.color} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
