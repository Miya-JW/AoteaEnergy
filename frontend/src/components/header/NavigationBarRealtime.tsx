import React from 'react';
import BackIcon from '../../assets/svg/back.svg';
import ShareIcon from '../../assets/svg/share1.svg';

interface NavigationBarProps {
    page: 'battery' | 'solar' | 'weather';
}

const NavigationBar: React.FC<NavigationBarProps> = ({ page }) => {
    return (
        <div className='mt-100 two-column-layout width-60'>
            <img src={BackIcon} alt='back' className='cursor-pointer' onClick={() => window.location.href = '/'} />
            <div className='flex'>
                <div className='font-40'>
                    {page === 'battery' && 'Battery'}
                    {page === 'solar' && 'Solar'}
                    {page === 'weather' && 'Weather'}
                </div>
                <img src={ShareIcon} alt='share' className='ml-30' />
            </div>
        </div>
    );
};

export default NavigationBar;