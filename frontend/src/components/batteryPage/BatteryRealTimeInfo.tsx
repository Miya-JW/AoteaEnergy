import React from 'react';

const BatteryRealTimeInfo: React.FC = () => {


    return (
        <div className='transparent-card width-50 height-50 ml-50 p-50 flex-column-left' >
            {/* content */}
            <div>
                <div className='font-28'>Battery Health:</div>

                <div className='flex-left-center mt-10'>
                    <div className='font-18'>Condition:</div>
                    {/* TODO */}
                    <div className='font-20 ml-20'>Good</div>
                </div>
                <div className='flex-left-center'>
                    <div className='font-18'>Estimated Lifespan:</div>
                    {/* TODO */}
                    <div className='font-20 ml-20'>5000 cycles</div>
                </div>
            </div>

            <div className='mt-50'>
                <div className='font-28'>Charge/Discharge Rates:</div>

                <div className='flex-left-center mt-10'>
                    <div className='font-18'>Charging Rate:</div>
                    {/* TODO */}
                    <div className='font-20 ml-20'>0kWh(Not charging)</div>
                </div>
                <div className='flex-left-center'>
                    <div className='font-18'>Estimated Lifespan:</div>
                    {/* TODO */}
                    <div className='font-20 ml-20'>5000 cycles</div>
                </div>
            </div>

            <div  className='mt-50'>
                <div className='font-28'>Temperature Monitoring:</div>
                <div className='flex-left-center mt-10'>
                    <div className='font-18'>Current Temperature:</div>
                    {/* TODO */}
                    <div className='font-20 ml-20'>20°C</div>
                </div>
                <div className='flex-left-center'>
                    <div className='font-18'>Alerts:</div>
                    {/* TODO */}
                    <div className='font-20 ml-20'>No temperature warnings</div>
                </div>
            </div>

            <div  className='mt-50'>
                <div className='font-28'>Maintenance Alerts:</div>
                <div className='flex-left-center mt-10'>
                    <div className='font-18'>Recommended Check-Up:</div>
                    {/* TODO */}
                    <div className='font-20 ml-20'>Every 3 months</div>
                </div>
                <div className='flex-left-center'>
                    <div className='font-18'>Action Required:</div>
                    {/* TODO */}
                    <div className='font-20 ml-20'>Clean connections, check for wear and tear</div>
                </div>
            </div>
        </div>
    );
};

export default BatteryRealTimeInfo;