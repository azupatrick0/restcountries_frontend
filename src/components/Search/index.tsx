import React, { SFC, ChangeEvent } from 'react';
import Button from 'components/Button';

interface iProps {
  onClick?: () => void;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Search:SFC<iProps> = ({ value, onChange, onClick }) => (
  <div className="search">
    <input className="search__input" type="text" placeholder="Enter Country names (e.g Malta, Spain) or just Malta" value={value} onChange={onChange} />
    <Button
      onClick={onClick}
    >
      SEARCH &#8594;
    </Button>
  </div>
);

export default Search;
