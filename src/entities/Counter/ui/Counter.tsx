/* eslint-disable react/button-has-type */
import React from 'react'; // Make sure to import React
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../Model/slice/counterSlice';
import { getCounterValue } from '../Model/selectors/getCounterValue/getCounterValue';
/* eslint-disable i18next/no-literal-string */

const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <>
            <h1 data-testid="value-title">
                Value:
                {counterValue}
            </h1>
            <button data-testid="increment-btn" onClick={increment}>
                Increment
            </button>
            <button data-testid="decrement-btn" onClick={decrement}>
                Decrement
            </button>
        </>
    );
};

export default Counter;
