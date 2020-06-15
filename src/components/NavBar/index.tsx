import React, { FC, ChangeEvent } from 'react';
import Search from 'components/Search';
import { Link } from 'react-router-dom';
import logo from 'assets/logo.png';

interface iProps {
  searchValue: string;
  handleSearchTermChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
}

const NavBar:FC<iProps> = ({ searchValue, handleSearchTermChange, handleSearch }) => {
  return (
    <div className="navbar">
      <div>
        <img src={logo} alt={logo} height="100" />
      </div>
      <div className="navbar__mobile">
        { 
          window.location.href.includes('/') ? 
            <Link to="/slot"><span className="pulse">Slot</span></Link>: <Link to="/"><span className="pulse">Home</span></Link>
        }
      </div>
      <Search
        value={searchValue}
        onChange={handleSearchTermChange}
        onClick={handleSearch}
      />
      <div className="navbar__desktop">
        { 
          window.location.href.includes('/') ? 
            <Link to="/slot"><span className="pulse">Slot</span></Link>: <Link to="/"><span className="pulse">Home</span></Link>
        }
      </div>
    </div>
  )
}

export default NavBar;
