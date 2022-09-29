import React from 'react';

const Prayers = ({ prayer }) => {
    const { name, details, img, duration } = prayer;
    return (
        <div className='border-2 bg-white rounded-lg h-[300px]'>
            <div className='m-2'>
                <img className='w-full h-40 rounded-lg' src={img} alt="" />
                <h1 className='text-3xl font-semibold'>{name}</h1>
                <p>{details}</p>
                <p className='font-semibold'>Duration: {duration}minutes</p>
            </div>
        </div>
    );
};

export default Prayers;