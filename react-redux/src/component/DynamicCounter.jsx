import React from 'react'
import { decrement, increment } from '../redux/counter/actions';
import { connect, useDispatch, useSelector } from 'react-redux';

const DynamicCounter = () => {
    const count = useSelector((state)=> state.daynamicReducer.value);
    const dispatch = useDispatch();

    const handleIncrement = (value)=>{
        dispatch(increment(value));
    }
    const handleDecrement = (value)=>{
        dispatch(decrement(value));
    }
    return (
        <div>
            <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
                <div className="text-2xl font-semibold">{count}</div>
                <div className="flex space-x-3">
                    <button
                        className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                        onClick={()=>handleIncrement(5)}
                    >
                        Increment
                    </button>
                    <button
                        className="bg-red-400 text-white px-3 py-2 rounded shadow"
                        onClick={()=>handleDecrement(1)}
                    >
                        Decrement
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DynamicCounter;