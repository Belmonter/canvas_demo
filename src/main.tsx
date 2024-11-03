import { createRoot } from 'react-dom/client';
import './index.css';

import { ReactFlowProvider } from '@xyflow/react';

import CanvasApp from './App/CanvasApp';

createRoot(document.getElementById('root')!).render(
  <ReactFlowProvider>
    <CanvasApp />
  </ReactFlowProvider>
);
