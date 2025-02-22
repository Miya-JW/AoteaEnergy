import React from 'react';
import ShareIcon from '../../assets/svg/share1.svg'

interface NavigationBarHistoryProps {
    page: 'generation-and-usage' | 'energy-efficiency-ratio' | 'generation-efficiency';
}
const NavigationBarHistory: React.FC<NavigationBarHistoryProps> = ({ page }) => {
    return (
        <div className='flex-left mt-100  '>


            <div className={`two-column-layout p-10-20 cursor-pointer ${page === 'generation-and-usage' ? 'navigation-menu' : ''}`} onClick={() => window.location.href = '/generation-and-usage'} >
                <div className='font-28'>Generation and Usage</div>
                <img src={ShareIcon} alt='share' className='ml-30' />
            </div>

            <div className={`two-column-layout p-10-20 ml-50 cursor-pointer ${page === 'energy-efficiency-ratio' ? 'navigation-menu' : ''}`} onClick={() => window.location.href = '/energy-efficiency-ratio'}>
                <div className='font-28 '>Energy Efficiency Ratio</div>
                <img src={ShareIcon} alt='share' className='ml-30' />
            </div>

            <div className={`two-column-layout p-10-20 ml-50 cursor-pointer ${page === 'generation-efficiency' ? 'navigation-menu' : ''}`} onClick={() => window.location.href = '/generation-efficiency'}>
                <div className='font-28 '>Generation Efficiency</div>
                <img src={ShareIcon} alt='share' className='ml-30' />
            </div>
        </div>
    );
};

export default NavigationBarHistory;