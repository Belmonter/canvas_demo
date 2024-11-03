/// <reference types="vite-plugin-svgr/client" />

import React, { useCallback, useMemo } from 'react';
import {
  addEdge,
  ReactFlow,
  useEdgesState,
  useNodesState,
  OnConnect,
  NodeTypes,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import styles from './App.module.scss';
import { CanvasUpperPanel } from '../components/CanvasPanel/CanvasUpperPanel';
import EquipmentPanel from '../components/EquipmentPanel/EquipmentPanel';
import Eq4 from '../icons/Eq4';
import Eq1Node from '../components/Eq1Node/Eq1Node';
import Eq3Node from '../components/Eq2Node/Eq2Node';

interface Node {
  id: string;
  type: string;
  position: {
    x: number;
    y: number;
  };
  data: {
    label: string;
  };
}

const CanvasApp: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const nodeTypes: NodeTypes = useMemo(
    () => ({
      custom1: Eq1Node,
      custom2: Eq3Node,
      custom3: Eq4,
    }),
    []
  );

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      const nodeType = event.dataTransfer.getData('Text');
      // Получение границ контейнера React Flow
      const reactFlowBounds = event.currentTarget.getBoundingClientRect();

      // Учитываем прокрутку страницы
      const position = {
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      };

      const newNode = {
        id: `custom-${Date.now()}`,
        type: nodeType,
        position,
        data: { label: 'Custom Node' },
      };

      setNodes((nds) => [...nds, newNode]);
    },
    [setNodes]
  );

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  return (
    <div className={styles.CanvasApp}>
      <div className={styles.canvas}>
        <CanvasUpperPanel />
        <div className={styles.reactFlow}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onConnect={onConnect}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onDrop={onDrop}
            onDragOver={onDragOver}
            elementsSelectable={true}
            selectNodesOnDrag={true}
            nodeTypes={nodeTypes}
            fitView
          ></ReactFlow>
        </div>
      </div>
      <EquipmentPanel />
    </div>
  );
};

export default CanvasApp;
