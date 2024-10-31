// App.tsx
import React, { useState, useEffect } from 'react';

import EquipmentPanel from '../components/EquipmentPanel/EquipmentPanel';
import Toolbar from '../components/Toolbar/Toolbar';
import CanvasArea from '../components/CanvasArea/CanvasArea';

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

const App: React.FC = () => {
  const [elements, setElements] = useState<Element[]>([]);
  const [scale, setScale] = useState<number>(1);
  const [selectedElementId, setSelectedElementId] = useState<string | null>(
    null
  );

  const handleZoomIn = () => {
    setScale((prevScale) => prevScale * 1.1);
  };

  const handleZoomOut = () => {
    setScale((prevScale) => prevScale * 0.9);
  };

  const handleDelete = () => {
    if (selectedElementId) {
      setElements(elements.filter((el) => el.id !== selectedElementId));
      setSelectedElementId(null);
    }
  };

  // В функции handleAddElement при добавлении стрелки задаем начальные и конечные координаты
  const handleAddElement = (type: 'equipment' | 'flow') => {
    const newElement: Element =
      type === 'equipment'
        ? { id: Math.random().toString(), type, x: 100, y: 100 }
        : {
            id: Math.random().toString(),
            type,
            startX: 100,
            startY: 100,
            endX: 150,
            endY: 100,
          };
    setElements([...elements, newElement]);
  };

  // Функция для обновления позиции элемента
  const handleUpdateElementPosition = (
    id: string,
    newProps: Partial<Element>
  ) => {
    setElements((prevElements) =>
      prevElements.map((el) => (el.id === id ? { ...el, ...newProps } : el))
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Delete') {
        handleDelete();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedElementId, elements]);

  return (
    <div className="app">
      <Toolbar
        onAddElement={handleAddElement}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onTogglePanMode={() => {}}
      />
      <div className="main-content">
        <CanvasArea
          scale={scale}
          elements={elements}
          selectedElementId={selectedElementId}
          onSelectElement={setSelectedElementId}
          onUpdateElementPosition={handleUpdateElementPosition}
        />
        <EquipmentPanel onAddElement={handleAddElement} />
      </div>
    </div>
  );
};

export default App;
