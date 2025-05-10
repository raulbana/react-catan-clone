import { Resource, Tile as TileType } from "../../models/types";
import React from "react";
import Label from "../Label/Label";
import { theme } from "../../themes/theme";
import { StructureProps } from "../Structure/Strucutre";

export type VertexPosition =
  | "top"
  | "top-right"
  | "bottom-right"
  | "bottom"
  | "bottom-left"
  | "top-left";
export type EdgePosition =
  | "top"
  | "top-right"
  | "bottom-right"
  | "bottom"
  | "bottom-left"
  | "top-left";

export interface TileProps extends TileType {
  id: number;
  number: number;
  structures?: StructureProps[];
  onVertexClick: (tileId: number, vertex: VertexPosition) => void;
  onEdgeClick: (tileId: number, edge: EdgePosition) => void;
}

const pointBase =
  "absolute w-2.5 h-2.5 rounded-full cursor-pointer bg-white border border-black z-10";
const edgeBase = "absolute h-1 w-28 cursor-pointer bg-black opacity-20 z-0";

const Tile: React.FC<TileProps> = ({
  id,
  resource,
  number,
  onVertexClick,
  onEdgeClick,
}) => {
  const resourceColors: Record<Resource, string> = {
    wood: "#8B4513",
    clay: "#D2691E",
    stone: "#A9A9A9",
    sheep: "#7CFC00",
    wheat: "#FFD700",
    desert: "#E0C097",
  };

  const numberColor =
    number === 6 || number === 8 ? theme.colors.danger : theme.colors.black;

  return (
    <div
      className="relative flex justify-center items-center w-[100px] h-[100px] m-[2px] text-base"
      style={{
        backgroundColor: resourceColors[resource],
        clipPath:
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        color: "#fff",
      }}
    >
      {resource !== "desert" && (
        <div
          className="flex items-center justify-center w-[45px] h-[45px] border-2 border-black rounded-full bg-white"
          style={{
            color: number === 6 || number === 8 ? "#f00" : "#000",
          }}
        >
          <Label
            text={`${number}`}
            color={numberColor}
            typography={theme.typography.paragraph.b3v}
          />
        </div>
      )}
      <div
        className={pointBase}
        style={{ top: "-5px", left: "50%", transform: "translateX(-50%)" }}
        onClick={() => onVertexClick(id, "top")}
      />
      <div
        className={pointBase}
        style={{ bottom: "-5px", left: "50%", transform: "translateX(-50%)" }}
        onClick={() => onVertexClick(id, "bottom")}
      />
      <div
        className={pointBase}
        style={{ top: "25%", left: "-5px", transform: "translateY(-50%)" }}
        onClick={() => onVertexClick(id, "top-left")}
      />
      <div
        className={pointBase}
        style={{ top: "25%", right: "-5px", transform: "translateY(-50%)" }}
        onClick={() => onVertexClick(id, "top-right")}
      />
      <div
        className={pointBase}
        style={{ bottom: "25%", left: "-5px", transform: "translateY(50%)" }}
        onClick={() => onVertexClick(id, "bottom-left")}
      />
      <div
        className={pointBase}
        style={{ bottom: "25%", right: "-5px", transform: "translateY(50%)" }}
        onClick={() => onVertexClick(id, "bottom-right")}
      />
      <div
        className={edgeBase}
        style={{
          left: "40%",
          top: "50%",
          transform: "translateY(-50%) rotate(90deg)",
        }}
        onClick={() => onEdgeClick(id, "top")}
      />
      <div
        className={edgeBase}
        style={{
          right: "40%",
          top: "50%",
          transform: "translateY(-50%) rotate(90deg)",
        }}
        onClick={() => onEdgeClick(id, "bottom")}
      />
      <div
        className={edgeBase}
        style={{
          left: 0,
          top: 0,
          transform: "rotate(-26deg)",
        }}
        onClick={() => onEdgeClick(id, "top-left")}
      />
      <div
        className={edgeBase}
        style={{
          right: 0,
          top: 0,
          transform: "rotate(26deg)",
        }}
        onClick={() => onEdgeClick(id, "top-right")}
      />
      <div
        className={edgeBase}
        style={{
          left: 0,
          bottom: 0,
          transform: "rotate(26deg)",
        }}
        onClick={() => onEdgeClick(id, "bottom-left")}
      />
      <div
        className={edgeBase}
        style={{
          right: 0,
          bottom: 0,
          transform: "rotate(-26deg)",
        }}
        onClick={() => onEdgeClick(id, "bottom-right")}
      />
    </div>
  );
};

export default Tile;
