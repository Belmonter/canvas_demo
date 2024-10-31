import React from 'react';
import { Stage, Layer, Rect, Arrow, Circle } from 'react-konva';

interface Element {
  id: string;
  type: 'equipment' | 'flow';
  x?: number;
  y?: number;
  startX?: number;
  startY?: number;
  endX?: number;
  endY?: number;
}

interface CanvasAreaProps {
  scale: number;
  elements: Element[];
  selectedElementId: string | null;
  onSelectElement: (id: string | null) => void;
  onUpdateElementPosition: (id: string, newProps: Partial<Element>) => void;
}

const CanvasArea: React.FC<CanvasAreaProps> = ({
  scale,
  elements,
  selectedElementId,
  onSelectElement,
  onUpdateElementPosition,
}) => {
  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      scaleX={scale}
      scaleY={scale}
    >
      <Layer>
        {elements.map((el) => {
          if (el.type === 'equipment') {
            return (
              <Rect
                key={el.id}
                x={el.x}
                y={el.y}
                width={50}
                height={50}
                fill={el.id === selectedElementId ? 'blue' : 'grey'}
                draggable
                onClick={() => onSelectElement(el.id)}
                onDragEnd={(e) => {
                  const { x, y } = e.target.position();
                  onUpdateElementPosition(el.id, { x, y });
                }}
              />
            );
          } else if (el.type === 'flow') {
            return (
              <React.Fragment key={el.id}>
                <Arrow
                  points={[
                    el.startX || 0,
                    el.startY || 0,
                    el.endX || 0,
                    el.endY || 0,
                  ]}
                  stroke={el.id === selectedElementId ? 'blue' : 'black'}
                />
                <Circle
                  x={el.startX}
                  y={el.startY}
                  radius={5}
                  fill="transparent"
                  draggable
                  onDragMove={(e) => {
                    const { x, y } = e.target.position();
                    onUpdateElementPosition(el.id, { startX: x, startY: y });
                  }}
                />
                <Circle
                  x={el.endX}
                  y={el.endY}
                  radius={5}
                  fill="transparent"
                  draggable
                  onDragMove={(e) => {
                    const { x, y } = e.target.position();
                    onUpdateElementPosition(el.id, { endX: x, endY: y });
                  }}
                />
              </React.Fragment>
            );
          }
          return null;
        })}
      </Layer>
    </Stage>
  );
};

export default CanvasArea;
