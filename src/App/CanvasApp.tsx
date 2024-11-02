/// <reference types="vite-plugin-svgr/client" />

import React, { useCallback, useMemo, useState } from 'react';
import ReactFlow, {
  addEdge,
  ReactFlowProvider,
  Node,
  Edge,
  applyNodeChanges,
} from 'react-flow-renderer';

import styles from './App.module.scss';
import { CanvasUpperPanel } from '../components/CanvasPanel/CanvasUpperPanel';
import EquipmentPanel from '../components/EquipmentPanel/EquipmentPanel';
import EquipmentIcon1 from '../icons/EquipmentIcon1';

const CanvasApp: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  const nodeTypes = useMemo(
    () => ({
      custom: EquipmentIcon1,
    }),
    []
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onDrop = useCallback((event) => {
    event.preventDefault();
    const nodeType = 'custom'; // Используем тип 'custom' для кастомного узла
    const position = { x: event.clientX - 250, y: event.clientY - 50 };
    const newNode = {
      id: `custom-${+new Date()}`,
      type: nodeType,
      position,
      data: { label: 'Custom Node' }, // Пример данных, используемых в CustomNode
    };
    setNodes((nds) => [...nds, newNode]);
  }, []);

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  // Реф ссылка на элемент канваса
  // const canvasRef = useRef<HTMLCanvasElement>(null);

  // const [canvas, setCanvas] = useState<CanvasRenderingContext2D | null>(null);
  //
  // // Эффект инициализации канваса
  // useEffect(() => {
  //   if (canvasRef.current) {
  //     const canvas = new Canvas(canvasRef.current, {
  //       width: 1180,
  //       height: 476,
  //       backgroundColor: '#fff',
  //     });
  //
  //     loadSVGFromURL(plusIcon)
  //       .then((result) => {
  //         const objects = result.objects
  //           ? result.objects.filter((obj) => obj !== null)
  //           : [];
  //
  //         const svgObject = new Group(objects);
  //
  //         canvas.add(svgObject);
  //         canvas.renderAll();
  //       })
  //       .catch((error) => console.error('Ошибка загрузки SVG:', error));
  //
  //     setCanvas(canvas.getContext());
  //
  //     return () => {
  //       canvas.dispose();
  //     };
  //   }
  // }, []);

  return (
    <ReactFlowProvider>
      <div className={styles.CanvasApp}>
        <div className={styles.canvas}>
          <CanvasUpperPanel />
          <ReactFlow
            className={styles.reactFlow}
            nodes={nodes}
            edges={edges}
            onConnect={onConnect}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onNodesChange={(changes) =>
              setNodes((nds) => applyNodeChanges(changes, nds))
            }
            onEdgesChange={setEdges}
            nodeTypes={nodeTypes}
            fitView
          ></ReactFlow>
        </div>
        <EquipmentPanel />
      </div>
    </ReactFlowProvider>
  );
};

export default CanvasApp;
