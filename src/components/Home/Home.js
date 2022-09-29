import React, { useEffect, useState } from 'react';
import { getTheDb } from '../../utilities/fakeDb';
import Break from '../Break/Break';
import Details from '../Details/Details';
import Display from '../Display/Display';
import Prayers from '../Prayers/Prayers';
import Profile from '../Profile/Profile';

const Home = () => {
    const [prayers, setPrayers] = useState([]);
    const [time, setTime] = useState(0);
    const [gap, setGap] = useState('');

    useEffect(() => {
        const savedTime = getTheDb();
        setGap(savedTime)
    }, [])

    useEffect(() => {
        fetch('prayers.json')
            .then(res => res.json())
            .then(data => setPrayers(data))
    }, [])

    const handleClick = (duration) => {
        const newTime = time + duration;
        setTime(newTime)
    }

    return (
        <div className='grid grid-rows-2 lg:grid-rows-1 grid-flow-row lg:grid-flow-col'>
            <div className='row-span-4 m-0 lg:m-10 mb-0 lg:mb-0'>

                <div className='flex items-center gap-2 mb-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-cyan-400 mt-3 sm:mt-3 md:mt-5   ">
                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                    </svg>

                    <h1 className='text-1xl sm:text-3xl md:text-4xl lg:text-4xl font-serif font-bold text-cyan-400 mt-3 sm:mt-3 md:mt-5 p-0'>Daily Prayer Tracker</h1>
                </div>
                <div className='grid grid-rows-6 sm:grid-rows-3 md:grid-rows-3 lg:grid-rows-2 gap-2 sm:grid-flow-col md:grid-flow-col lg:grid-flow-col'>
                    {
                        prayers.map(prayer => <Prayers handleClick={handleClick} prayer={prayer} key={prayer.id}></Prayers>)
                    }
                </div>
            </div>
            <div className='row-span-1 bg-white mt-3 sm:mt-3 lg:mt-0'>
                <Profile></Profile>
                <Details></Details>
                <Break gap={gap} setGap={setGap}></Break>
                <Display time={time} gap={gap}></Display>
            </div>
        </div>
    );
};

export default Home;