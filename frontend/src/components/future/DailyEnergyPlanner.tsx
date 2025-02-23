import React from 'react';
import ShareIcon from '../../assets/svg/share.svg';
import ArrowIcon from '../../assets/svg/arrowRight.svg';
import CalendarIcon from '../../assets/svg/calendar.svg';
import WeatherIcon from '../../assets/svg/temperater.svg';
import AppianceSelection from '../diagrams/FutureApplianceSelection';

const DailyEnergyPlanner: React.FC = () => {
    return (
        <div className='ml-30'>
            {/* share icon */}
            <div className='centered-content circle size-40 background-color-light mt-10 mr-10 self-end' >
                <img src={ShareIcon} alt='share' className='size-20' />
            </div>

            {/* title */}
            <div className='mt-30'>
                <div className='font-40'>Daily Energy Planner</div>
                <div className='flex-left-center mt-10'>
                    <div className='font-18 '>Set your appliance preferences</div>
                    <img src={ArrowIcon} alt='arrow' className='size-30 ml-10' />
                </div>
            </div>

            {/* weather */}
            <div className='two-column-layout mt-70 width-55'>
                <div className='flex'>
                    <img src={CalendarIcon} alt='calendar' className='size-40' />
                    <div className='font-40 ml-20'>17</div>
                    <div className='font-28 ml-10'>June</div>
                </div>
                <div className='flex-column'>
                    <img src={WeatherIcon} alt='weather' className='size-60' />
                    <div className='flex mt--20'>
                        <div>12°C</div>
                        <div className='ml-20'>20°C</div>
                    </div>
                </div>
            </div>

            {/* energy forecast */}
            <AppianceSelection />

            {/* suggestion */}
            <div className='mt-70 width-90 height-20'>
                <div className='font-24'>Suggestion:</div>
                {/* TODO */}
                <div className='font-16 mt-10'>Set the Smart Energy Share’s automatic transfer to activate at a 70% battery charge level. This setting stops further charging and directs excess power to the grid while maintaining sufficient energy for household needs, enhancing your potential earnings.</div>
            </div>

        </div>
    );
};

export default DailyEnergyPlanner;