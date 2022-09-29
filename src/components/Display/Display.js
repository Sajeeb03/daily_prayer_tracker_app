import React from 'react';
import Swal from 'sweetalert2'

const Display = ({ time, gap }) => {
    const displayAlert = () => {
        Swal.fire(
            'Good job!',
            'You are a good muslim bro!',
            'success'
        )
    }
    return (
        <div>
            <h2 className='text-lg font-serif font-semibold m-2 mb-2'>Prayer Details</h2>
            <div>
                <div className='bg-slate-200 rounded-lg m-2 flex justify-between mb-5 p-3'>
                    <p className='text-lg font-sans font-semibold'>Prayer time</p>
                    <p>{time} minutes</p>
                </div>
                <div className='bg-slate-200 rounded-lg m-2 flex justify-between mb-5 p-3'>
                    <p className='text-lg font-sans font-semibold'>Break time</p>
                    <p>{gap} seconds</p>
                </div>
                <div onClick={displayAlert} className='bg-cyan-400 text-center rounded-lg m-2 mb-5 p-3'>
                    <button className='text-lg font-sans font-semibold'>Activity Completed</button>
                </div>
            </div>
        </div>
    );
};

export default Display;