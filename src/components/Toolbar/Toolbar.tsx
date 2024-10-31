import React from 'react';

interface ToolbarProps {
  onAddElement: (type: 'equipment' | 'flow') => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onTogglePanMode: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
  onAddElement,
  onZoomIn,
  onZoomOut,
  onTogglePanMode,
}) => {
  return (
    <div className="toolbar">
      <button onClick={() => onAddElement('equipment')}>
        Добавить Оборудование
      </button>
      <button onClick={() => onAddElement('flow')}>Добавить Поток</button>
      <button onClick={onZoomIn}>Увеличить Зум</button>
      <button onClick={onZoomOut}>Уменьшить Зум</button>
      <button onClick={onTogglePanMode}>Режим Панорамирования</button>
    </div>
  );
};

export default Toolbar;
