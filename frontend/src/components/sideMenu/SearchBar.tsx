import React from 'react';
import Search from '../../assets/svg/search.svg';

const SideBar: React.FC = () => {
    return (
        <div className='flex'>
            <input type='text' placeholder='Search...' className='search-bar' />
            <img src={Search} alt='search-icon' className='mt-50 ml-10 ' />
        </div>

    );
};

export default SideBar;