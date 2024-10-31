import React from 'react';

interface EquipmentPanelProps {
  onAddElement: (type: 'equipment' | 'flow') => void;
}

const EquipmentPanel: React.FC<EquipmentPanelProps> = ({ onAddElement }) => {
  return (
    <div className="equipment-panel">
      <h3>Элементы</h3>
      <button onClick={() => onAddElement('equipment')}>
        Добавить Оборудование
      </button>
      <button onClick={() => onAddElement('flow')}>Добавить Поток</button>
    </div>
  );
};

export default EquipmentPanel;
