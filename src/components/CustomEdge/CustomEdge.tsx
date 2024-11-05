import { EdgeProps } from '@xyflow/react';

export const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  style = {},
  markerEnd,
}: EdgeProps) => {
  // const offset = 20; // отступ по необходимости

  const isHorizontal =
    Math.abs(targetX - sourceX) > Math.abs(targetY - sourceY);

  let path = '';

  if (isHorizontal) {
    const midX = (sourceX + targetX) / 2;
    path = `
      M ${sourceX},${sourceY}
      H ${midX}
      V ${targetY}
      H ${targetX}
    `;
  } else {
    const midY = (sourceY + targetY) / 2;
    path = `
      M ${sourceX},${sourceY}
      V ${midY}
      H ${targetX}
      V ${targetY}
    `;
  }

  return (
    <path
      id={id}
      style={style}
      className="react-flow__edge-path"
      d={path}
      markerEnd={markerEnd}
    />
  );
};
