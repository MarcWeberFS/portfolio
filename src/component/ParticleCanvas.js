import React, { useEffect, useRef } from 'react';
import { ParticleSystem } from '../class/particle-system'; // Adjust the path as needed

const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas.parentElement;
    const resizeCanvas = () => {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };
    
    resizeCanvas(); // Set initial size

    const particleOptions = {
      color: '#EBEBEB',
      count: 60,
      direction: { x: 1, y: 0.75 },
      size: { min: 1, max: 2 },
      duration: { min: 10000, max: 15000 },
      interval: { min: 100, max: 500 },
      amplitude: { min: 10, max: 15 },
      frequency: { min: 2, max: 5 },
      tolerance: 0.3,
    };

    const particleSystem = new ParticleSystem(canvas, particleOptions);
    particleSystem.start();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      particleSystem.stop();
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default ParticleCanvas;
