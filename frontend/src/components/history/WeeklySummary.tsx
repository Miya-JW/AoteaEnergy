import React from 'react';
import ShareIcon from '../../assets/svg/share.svg';

const WeeklySummary: React.FC = () => {
    return (
        <div className=''>
            {/* share icon */}
            <div className='centered-content circle size-40 background-color-light mt-10 mr-10 self-end' >
                <img src={ShareIcon} alt='share' className='size-20' />
            </div>

            <div className='ml-50 mt-70'>
                <div className='font-28'>Weekly Summary:</div>
                <div className='flex-left-center mt-10'>
                    {/* TODO */}
                    <div className='font-18 '>Energy surplus:</div>
                    <div className='font-24 ml-10'>28kWh</div>
                </div>
            </div>

            <div className='ml-50 mt-50'>
                <div className='font-28'>Weekly Trends:</div>
                {/* TODO */}
                <div className='font-18 mt-10'>Generation up 3% from last week, with improved weather conditions.</div>
            </div>

            <div className='ml-50 mt-50'>
                <div className='font-28'>Lowest Generation Day Analysis:</div>
                {/* TODO */}
                <div className='font-18 mt-10'>Wednesday, 8th June 2024 </div>
                <div className='font-18 mt-10'> Due to cloudy weather</div>
            </div>

            <div className='ml-50 mt-50'>
                <div className='font-28'>High Usage Alert:</div>
                {/* TODO */}
                <div className='font-18 mt-10'> High usage alert on Saturday, 11th June 2024: 38 kWh. </div>
                <div className='font-18 mt-10'> Check for unusual activity.</div>
            </div>

            <div className='ml-50 mt-50'>
                <div className='font-28'>Efficiency Tips:</div>
                {/* TODO */}
                <div className='font-18 mt-10 mr-50'> Consider lowering the battery percentage threshold for Smart Energy Share to increase energy savings and grid contributions during peak production times</div>
            </div>


        </div>
    );
};

export default WeeklySummary; 