/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { uuid } from 'uuidv4';
import NavBar from 'components/NavBar';
import SpinCard from 'components/Card/SpinCard';
import Loader from 'components/Loader';
import spin from 'actions/spin';
import Button from 'components/Button';

export interface iState {
	spin: any;
	loading: boolean;
	error: string;
}

export const Slot: FC = () => {
  const [balance, setBalance] = useState('');
	const state = useSelector((state: iState) => state, shallowEqual);
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    if (localStorage.getItem('balance') === null) {
      localStorage.setItem('balance', '20');
    } else if (state.spin.spin.won) {
      const oldBalance:any = localStorage.getItem('balance');
      const newBalance = state.spin.spin.won > 0 ? `${(+oldBalance + 1) + state.spin.spin.won}` : `${+oldBalance + state.spin.spin.won}`;
      localStorage.setItem('balance', newBalance);
      setBalance(newBalance);
    }
  }, [state.spin.spin.won]);

	const setCustomerBalance = () => {
    let balance:any = localStorage.getItem('balance') && localStorage.getItem('balance');
    balance = +balance - 1;
    localStorage.setItem('balance', `${balance}`);
    setBalance(`${balance}`);
	};

	const handleSpin = () => {
    dispatch(spin());
    setCustomerBalance();
	};

	return (
		<div className="spin">
			<NavBar
        balance={balance || 20}
        won={state.spin.spin.won ? state.spin.spin.won : 0}
			/>
      <div className="spin__balance">
        {
          balance === '0' ? 
          <div className="spin__balance-view">
            <span></span>
            <span className="balance__depleted">Balance depleted, please fund again</span>
            <span></span>
          </div>
          :
          <div className="spin__button-view">
            <span></span>
            <Button
              onClick={handleSpin}
              className={"spin__button-view-button"}
            >
              SPIN
            </Button>
            <span></span>
          </div>
          
        }
      </div>
			<div className="cards__layout">
				{state.spin.loading && state.spin.loading ? (
					<Loader />
				) : state.spin.spin.result && state.spin.spin.result.length ? (
					state.spin.spin.result.map((spinResult: string): any => (
						<SpinCard
              spin={spinResult}
              id={uuid()}
              key={uuid()}
						/>
					))
				) : (
					'No spin yet, please click the spin button'
				)}
			</div>
		</div>
	);
};

export default Slot;
