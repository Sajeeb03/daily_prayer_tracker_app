import React from 'react';
import image from '../../images/resized.jpg';

const Profile = () => {
    return (
        <div>
            <div className='flex items-center gap-1 mt-5 m-2 mb-5'>
                <img className='rounded-lg h-14 w-12' src={image} alt="" />
                <div className='font-serif'>
                    <h2 className='text-2xl font-bold'>Muntasir Rahman</h2>
                    <p className='flex items-center gap-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-400">
                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                        Rangpur, Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default Profile; <h3>Hello i am sajeeb</h3>