import React from 'react';

const Blogs = () => {
    return (
        <div className='grid grid-cols-1 sm:grid md:grid-cols-2 lg:grid-cols-3 m-1 sm:m-1 md:m-3 lg:m-10 gap-3 mt-5'>
            <div className='bg-white p-3 text-center mb-5 md:mb-3 lg:mb-5'>
                <h1 className='text-2xl font-serif font-bold'>How does React work ?</h1>
                <p className='text-lg text-left'>React creates a virtual DOM every time we re render the react compares the virtual dom with the actual dom and changes the actual dom in accordance with the changes found in the virtual dom. Hope you liked my answer.</p>
            </div>
            <div className='bg-white p-3 text-center mb-5 md:mb-3 lg:mb-5'>
                <h1 className='text-2xl font-serif font-bold'>What is the difference between state and props?</h1>
                <p className='text-lg text-left'>The main difference is props are immutable but states are not. States determine the certain changes with rendering. And props doesn't changes they just carry an operation or variables to another component.</p>
            </div>
            <div className='bg-white p-3 text-center mb-5 md:mb-3 lg:mb-5'>
                <h1 className='text-2xl font-serif font-bold'>What does useEffect do without loading data?</h1>
                <p className='text-lg text-left'>The hook useEffect works like a conditional when a dependency is provided to the hook it rerenders with the change in the dependency.That makes the app smoother.</p>
            </div>
        </div>
    );
};

export default Blogs;