import React from 'react';

const Prayers = ({ prayer }) => {
    const { name, details, img, duration } = prayer;
    return (
        <div className='border-2 bg-white h-[360px] rounded-lg font-serif relative'>
            <div className='m-2'>
                <img className='w-full h-40 rounded-lg' src={img} alt="" />
                <h1 className='text-3xl font-semibold'>{name}</h1>
                <p>{details}</p>
                <p className='font-semibold'>Duration: {duration}minutes</p>
                <button className='border-2 bg-cyan-400 rounded-lg p-2 mt-5 text-blue font-serif font-semibold absolute bottom-1'>Prayed Today</button>
            </div>
        </div>
    );
};

export default Prayers;