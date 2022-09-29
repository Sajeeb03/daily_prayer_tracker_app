import React, { useEffect, useState } from 'react';
import Prayers from '../Prayers/Prayers';

const Home = () => {
    const [prayers, setPrayers] = useState([]);
    useEffect(() => {
        fetch('prayers.json')
            .then(res => res.json())
            .then(data => setPrayers(data))
    }, [])

    return (
        <div className='grid grid-rows-2 lg:grid-rows-1 grid-flow-row lg:grid-flow-col bg-slate-200'>
            <div className='row-span-4 m-0 lg:m-10'>
                <h1>Daily Prayer Tracker</h1>
                <div className='grid grid-rows-2 gap-2 lg:grid-flow-col'>
                    {
                        prayers.map(prayer => <Prayers prayer={prayer} key={prayer.id}></Prayers>)
                    }
                </div>
            </div>
            <div className='row-span-1 bg-red-600 lg:bg-red-800'>
                hello
            </div>
        </div>
    );
};

export default Home;