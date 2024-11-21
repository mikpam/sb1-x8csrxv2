import React from 'react';
import { motion, useAnimationControls } from 'framer-motion';

interface ETLConnectorProps {
  startElement: HTMLElement | null;
  endElement: HTMLElement | null;
  isActive?: boolean;
}

const ETLConnector: React.FC<ETLConnectorProps> = ({ startElement, endElement, isActive = false }) => {
  const pathRef = React.useRef<SVGPathElement>(null);
  const controls = useAnimationControls();
  const [path, setPath] = React.useState("");
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });

  const updatePath = React.useCallback(() => {
    if (startElement && endElement) {
      const container = startElement.closest('.etl-container');
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const startRect = startElement.getBoundingClientRect();
      const endRect = endElement.getBoundingClientRect();

      // Calculate positions relative to the container
      const startX = startRect.right - containerRect.left;
      const startY = startRect.top + startRect.height / 2 - containerRect.top;
      const endX = endRect.left - containerRect.left;
      const endY = endRect.top + endRect.height / 2 - containerRect.top;

      // Update SVG dimensions
      setDimensions({
        width: containerRect.width,
        height: containerRect.height
      });

      // Create curved path
      const controlX1 = startX + (endX - startX) * 0.4;
      const controlY1 = startY;
      const controlX2 = startX + (endX - startX) * 0.6;
      const controlY2 = endY;

      setPath(`M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`);
    }
  }, [startElement, endElement]);

  React.useEffect(() => {
    updatePath();

    // Set up resize observer
    const resizeObserver = new ResizeObserver(() => {
      updatePath();
    });

    if (startElement) {
      resizeObserver.observe(startElement);
    }
    if (endElement) {
      resizeObserver.observe(endElement);
    }

    const container = startElement?.closest('.etl-container');
    if (container) {
      resizeObserver.observe(container);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [startElement, endElement, updatePath]);

  React.useEffect(() => {
    if (isActive && pathRef.current) {
      controls.start({
        pathOffset: [0, 1],
        transition: {
          duration: 1.2,
          ease: "linear",
          repeat: Infinity
        }
      });
    } else {
      controls.stop();
    }
  }, [isActive, controls]);

  if (!path) return null;

  return (
    <svg 
      className="absolute inset-0 pointer-events-none" 
      width={dimensions.width} 
      height={dimensions.height}
      style={{ overflow: 'visible' }}
    >
      <motion.path
        ref={pathRef}
        d={path}
        stroke={isActive ? "#FF9966" : "#1a1b1e"}
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: 1,
          stroke: isActive ? "#FF9966" : "#1a1b1e"
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut"
        }}
      />
      {isActive && (
        <motion.circle
          r="4"
          fill="#FF9966"
          animate={controls}
          style={{
            offsetPath: `path('${path}')`,
            offsetRotate: "auto"
          }}
        />
      )}
    </svg>
  );
};

export default ETLConnector;