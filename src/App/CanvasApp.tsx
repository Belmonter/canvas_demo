import React, { useEffect, useRef, useState } from 'react';
import { Canvas, loadSVGFromURL, Group } from 'fabric';

import plusIcon from '../assets/plus.svg';
import styles from './App.module.scss';
import { CanvasPanel } from '../components/CanvasPanel/CanvasPanel';

const CanvasApp: React.FC = () => {
  // Реф ссылка на элемент канваса
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [canvas, setCanvas] = useState<CanvasRenderingContext2D | null>(null);

  // Эффект инициализации канваса
  useEffect(() => {
    if (canvasRef.current) {
      const fabricJs = new Canvas(canvasRef.current, {
        width: 1180,
        height: 520,
      });

      fabricJs.backgroundColor = '#fff';

      loadSVGFromURL(plusIcon)
        .then((result) => {
          const objects = result.objects
            ? result.objects.filter((obj) => obj !== null)
            : [];

          const svgObject = new Group(objects);

          fabricJs.add(svgObject);
          fabricJs.renderAll();
        })
        .catch((error) => console.error('Ошибка загрузки SVG:', error));

      setCanvas(fabricJs.getContext());

      return () => {
        fabricJs.dispose();
      };
    }
  }, []);

  return (
    <div className={styles.CanvasApp}>
      <div className={styles.canvas}>
        <CanvasPanel />
        <canvas id={'canvas'} ref={canvasRef} />
      </div>
    </div>
  );
};

export default CanvasApp;
