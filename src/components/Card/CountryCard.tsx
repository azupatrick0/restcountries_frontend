import React, { FC } from 'react';
import regionIcon from 'assets/region.png';

interface iProps {
  name: string;
  flag: string;
  region: string;
}

const CountryCard:FC<iProps> = ({
  name, flag, region
}) => (
    <div key={name} className="card">
      <div className="card__image">
       <img height="120" src={flag} alt="flag" />
      </div>

      <div className="card__description">
        <div>
          { name }
        </div>
        <div>
          <img src={regionIcon} height="20" alt="region" /> { region }
        </div>
      </div>
    </div>
);

export default CountryCard;
