import React, { SFC } from 'react';

interface iProps {
  onClick?: () => void;
  className?: string;
}

const Button:SFC<iProps> = ({
  children, onClick, className,
}) => (
  <div>
     <button
      onClick={onClick}
      className={className}
     >
      {children}
    </button>
  </div>
);

export default Button;
