import React from 'react';
import Prayers from '../Prayers/Prayers';

const Home = () => {
    return (
        <div className='grid grid-rows-2 grid-flow-row lg:grid-flow-col'>
            <div className='row-span-4 bg-slate-400'>
                <Prayers></Prayers>
            </div>
            <div className='row-span-1 bg-red-600 lg:bg-red-800'>

            </div>
        </div>
    );
};

export default Home;