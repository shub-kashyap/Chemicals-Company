import React, { useState, useEffect, useRef } from 'react';

export default function AnimatedCounter({ end, duration = 3000 }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  
  useEffect(() => {
    let startTimestamp = null;
    const endVal = parseInt(end, 10) || 0;
    
    // Intersection Observer to trigger animation when in view
    let animationFrameId;
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * endVal);
      
      setCount(currentCount);
      countRef.current = currentCount;
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(endVal);
      }
    };
    
    // Start animation frame
    animationFrameId = requestAnimationFrame(step);
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [end, duration]);

  return <>{count}</>;
}
