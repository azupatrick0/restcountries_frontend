import React, { SFC } from 'react';

interface iProps {
  onClick: () => void;
}

const Button:SFC<iProps> = ({
  children, onClick
}) => (
  <div>
     <button
      onClick={onClick}
     >
      {children}
    </button>
  </div>
);

export default Button;
