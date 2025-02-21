import React from 'react';

const SolarCurrentPowerOutput: React.FC = () => {
    return (
        <div className='flex-column width-30 height-100 transparent-card'>
            <div className=' flex-left-center mt-20 '>
                <div className='font-24 '>Current Power Output:</div>
                {/* TODO */}
                <div className='font-20 ml-10'>17kWh/h</div>
            </div>
            <div className='flex-column width-90 height-80 mt-30 ' style={{ backgroundColor: 'red' }}>
                SolarCurrentPowerOutput.tsx
            </div>
        </div>

    );
};

export default SolarCurrentPowerOutput;