import React, { FC, ChangeEvent } from 'react';
import Search from 'components/Search';
import { Link } from 'react-router-dom';
import logo from 'assets/logo.png';

interface iProps {
	searchValue?: string;
	handleSearchTermChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	handleSearch?: () => void;
  balance?: null | number | string;
  won?: number;
}

const NavBar: FC<iProps> = ({ searchValue, handleSearchTermChange, handleSearch, balance, won }) => {
	return (
		<div className="navbar">
			<div>
				<img src={logo} alt={logo} height="100" />
			</div>
			<div className="navbar__mobile">
				{window.location.href.includes('/slot') ? (
					<Link to="/">
						<span className="pulse">Countries</span>
					</Link>
				) : (
					<Link to="/slot">
						<span className="pulse">Slot</span>
					</Link>
				)}
			</div>
			<div>
				{balance ? (
          <div className="balance">
            <div>Balance: {balance}</div>
            <div className="won">Won: <span>{won}</span></div>
          </div>
					
				) : (
					<Search value={searchValue} onChange={handleSearchTermChange} onClick={handleSearch} />
				)}
			</div>

			<div className="navbar__desktop">
				{window.location.href.includes('/slot') ? (
					<Link to="/">
						<span className="pulse">Countries</span>
					</Link>
				) : (
					<Link to="/slot">
						<span className="pulse">Slot</span>
					</Link>
				)}
			</div>
		</div>
	);
};

export default NavBar;
