import React from 'react';
import { setTheDb } from '../../utilities/fakeDb';

const Break = () => {
    const handleDb = (e) => {
        const seconds = e.slice(0, 2);
        setTheDb(seconds);
    }
    return (
        <div className='mt-5 m-2'>
            <p className='text-1xl font-serif font-semibold mb-2'>Add A Break</p>
            <div className='bg-slate-200 rounded-lg flex justify-around mb-5'>
                <p onClick={(e) => handleDb(e.target.innerText)} className="m-3 font-semibold p-3 rounded-full bg-white">20s</p>
                <p onClick={(e) => handleDb(e.target.innerText)} className="m-3 font-semibold p-3 rounded-full bg-white">40s</p>
                <p onClick={(e) => handleDb(e.target.innerText)} className="m-3 font-semibold p-3 rounded-full bg-white">60s</p>
                <p onClick={(e) => handleDb(e.target.innerText)} className="m-3 font-semibold p-3 rounded-full bg-white">80s</p>
            </div>
        </div>
    );
};

export default Break;