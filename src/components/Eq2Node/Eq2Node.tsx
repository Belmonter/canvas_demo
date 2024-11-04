import React from 'react';
import { Handle, Position, useConnection } from '@xyflow/react';

import Eq3 from '../../icons/Eq3';

const Eq3Node = () => {
  const connection = useConnection();

  console.log(connection);

  return (
    <div style={{ position: 'relative' }}>
      <Eq3 />

      <Handle
        type="target"
        position={Position.Top}
        id={'Eq3Node1-target'}
        style={{
          top: 41,
          left: '0%',
          transform: 'translateX(-50%)',
          background: '#555',
        }}
      />
      <Handle
        type="source"
        position={Position.Top}
        id={'Eq3Node1-source'}
        style={{
          top: 41,
          left: '0%',
          transform: 'translateX(-50%)',
          background: 'transparent',
        }}
      />

      <Handle
        type="target"
        position={Position.Top}
        id={'Eq3Node2-target'}
        style={{
          top: 10,
          left: '2%',
          transform: 'translateX(-50%)',
          background: '#555',
        }}
      />
      <Handle
        type="source"
        position={Position.Top}
        id={'Eq3Node2-source'}
        style={{
          top: 10,
          left: '2%',
          transform: 'translateX(-50%)',
          background: 'transparent',
        }}
      />

      <Handle
        type="target"
        position={Position.Right}
        id={'Eq3Node3-target'}
        style={{
          top: 41,
          left: '96%',
          transform: 'translateX(-50%)',
          background: '#555',
        }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id={'Eq3Node3-source'}
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
        id={'Eq3Node4-target'}
        style={{
          top: 75,
          left: '2%',
          transform: 'translateX(-50%)',
          background: '#555',
        }}
      />
      <Handle
        type="source"
        position={Position.Top}
        id={'Eq3Node4-source'}
        style={{
          top: 75,
          left: '2%',
          transform: 'translateX(-50%)',
          background: 'transparent',
        }}
      />
    </div>
  );
};

export default Eq3Node;
