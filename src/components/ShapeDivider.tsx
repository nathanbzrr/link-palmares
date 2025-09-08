import React from 'react';

interface ShapeDividerProps {
  position: 'top' | 'bottom';
  color: string;
  invert?: boolean;
}

const ShapeDivider: React.FC<ShapeDividerProps> = ({ position, color, invert = false }) => {
  const positionClass = position === 'top' ? 'top-0' : 'bottom-0';
  
  let rotation = position === 'top' ? 'rotate-180' : '';
  if (invert) {
    rotation = rotation === 'rotate-180' ? '' : 'rotate-180';
  }

  return (
    <div className={`absolute left-0 w-full overflow-hidden leading-[0] ${positionClass} ${rotation} z-10`}>
      <svg
        className="relative block w-full h-[100px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200 120L0 120L0 0C50.52 71.52 289.42 120 600 120C910.58 120 1149.48 71.52 1200 0L1200 120Z"
          style={{ fill: color }}
        ></path>
      </svg>
    </div>
  );
};

export default ShapeDivider;