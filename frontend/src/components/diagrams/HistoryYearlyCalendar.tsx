import React from 'react';
import ShareIcon from '../../assets/svg/share.svg';

const HistoryYearlyCalendar: React.FC = () => {
    return (
        <div className='width-100 height-100' style={{ paddingTop: '5px' }}>
            {/* share icon */}
            <div className='centered-content circle size-40 background-color-light mt-10 mr-10 self-end' >
                <img src={ShareIcon} alt='share' className='size-20' />
            </div>

            {/* TODO calendar */}
            <div className='width-80 height-60 ml-30' style={{ backgroundColor: 'red' }}>
                {/* HistoryYearlyCalendar */}
                HistoryYearlyCalendar
            </div>

            <div className='two-column-layout-top width-60 mt-20 ml-30'>
                <div className='flex-column-left'>
                    <div className='flex-left-center'>
                        <div className='font-18'>Annual Surplus Days:</div>
                        {/* TODO */}
                        <div className='font-24 ml-10'>40%</div>
                    </div>
                    <div className='flex-left-center'>
                        <div className='font-18'>Peak Surplus Months:</div>
                        {/* TODO */}
                        <div className='font-24 ml-10'>January-March</div>
                    </div>
                </div>

                <div className='flex-column-left'>
                    <div className='flex-left-center'>
                        <div className='font-18'>Yearly EER Improvement:</div>
                        {/* TODO */}
                        <div className='font-24 ml-10'>+3% Efficiency</div>
                    </div>
                    <div className='flex-left-center'>
                        <div className='font-18'>Peak EER Time:</div>
                        {/* TODO */}
                        <div className='font-24 ml-10'>1 PM (Summer)</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HistoryYearlyCalendar;