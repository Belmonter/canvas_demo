import React from 'react';
import { Handle, Position } from '@xyflow/react';

import Eq1 from '../../icons/Eq1';

const Eq1Node = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Eq1 />

      <Handle
        type="target"
        position={Position.Top}
        id={'Eq1Node1-target'}
        onConnect={(e) => console.log(e)}
        style={{
          top: 41,
          left: '2%',
          transform: 'translateX(-50%)',
          background: '#555',
        }}
      />
      <Handle
        type="source"
        position={Position.Top}
        id={'Eq1Node1-source'}
        style={{
          top: 41,
          left: '2%',
          transform: 'translateX(-50%)',
          background: 'transparent',
        }}
      />

      <Handle
        type="target"
        position={Position.Top}
        id={'Eq1Node2-target'}
        style={{
          top: 10,
          left: '96%',
          transform: 'translateX(-50%)',
          background: '#555',
        }}
      />
      <Handle
        type="source"
        position={Position.Top}
        id={'Eq1Node2-source'}
        style={{
          top: 10,
          left: '96%',
          transform: 'translateX(-50%)',
          background: 'transparent',
        }}
      />

      <Handle
        type="target"
        position={Position.Top}
        id={'Eq1Node3-target'}
        style={{
          top: 41,
          left: '96%',
          transform: 'translateX(-50%)',
          background: '#555',
        }}
      />
      <Handle
        type="source"
        position={Position.Top}
        id={'Eq1Node3-source'}
        style={{
          top: 41,
          left: '96%',
          transform: 'translateX(-50%)',
          background: 'transparent',
        }}
      />

      <Handle
        type="target"
        position={Position.Top}
        id={'Eq1Node4-target'}
        style={{
          top: 75,
          left: '96%',
          transform: 'translateX(-50%)',
          background: '#555',
        }}
      />
      <Handle
        type="source"
        position={Position.Top}
        id={'Eq1Node4-source'}
        style={{
          top: 75,
          left: '96%',
          transform: 'translateX(-50%)',
          background: 'transparent',
        }}
      />
    </div>
  );
};

export default Eq1Node;
