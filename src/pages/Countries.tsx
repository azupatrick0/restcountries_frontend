/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import NavBar from 'components/NavBar';
import CountryCard from 'components/Card/CountryCard';
import Loader from 'components/Loader';
import fetchAllCountries from 'actions/fetchAllCountries';
import searchCountries from 'actions/searchCountries';

export interface iState {
	countries: any;
	loading: boolean;
	error: string;
}

const Countries: FC = () => {
	const [ searchValue, setSearchValue ] = useState('');
	const state = useSelector((state: iState) => state, shallowEqual);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllCountries());
	}, []);

	const handleSearchTermChange = (e: { target: { value: React.SetStateAction<string> } }) => {
		setSearchValue(e.target.value);
	};

	const handleSearch = () => {
    dispatch(searchCountries(searchValue));
    setSearchValue('');
	};

	return (
		<div className="countries">
			<NavBar
				searchValue={searchValue}
				handleSearch={handleSearch}
				handleSearchTermChange={handleSearchTermChange}
			/>
			<div className="cards__layout">
				{state.countries.allCountries && state.countries.loading ? (
					<Loader />
				) : state.countries.allCountries && state.countries.allCountries.length ? (
					state.countries.allCountries.map((country: any): any => (
						<CountryCard
							name={country.name}
							flag={country.flag}
							region={country.region}
							key={country.name}
						/>
					))
				) : (
					'No countries found'
				)}
			</div>
		</div>
	);
};

export default Countries;
