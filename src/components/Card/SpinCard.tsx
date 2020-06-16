import React, { FC } from 'react';

interface iProps {
  spin: string;
  id: string;
}

const SpinCard:FC<iProps> = ({
  spin, id
}) => (
    <div key={id} className="spin__card">
      {spin}
    </div>
);

export default SpinCard;
