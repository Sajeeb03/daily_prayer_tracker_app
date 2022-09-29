import React from 'react';

const Details = () => {
    return (
        <div className='bg-slate-200 m-2 p-3 rounded-lg flex justify-around'>
            <div>
                <h1><span className='text-2xl font-sans font-semibold'>56</span> <small className='font-semibold'>kg</small></h1>
                <p className='font-semibold'>Weight</p>
            </div>
            <div>
                <h1 className='text-2xl font-sans font-semibold'>5.10</h1>
                <p className='font-semibold'>Height</p>
            </div>
            <div>
                <h1><span className='text-2xl font-sans font-semibold'>24</span> <small className='font-semibold'>years</small></h1>
                <p className='font-semibold'>Age</p>
            </div>
        </div>
    );
};

export default Details;