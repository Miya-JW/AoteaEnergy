import React from 'react';

const SolarHourlyTemperature: React.FC = () => {
    return (
        <div className='transparent-card width-50 height-100 ml-50 flex-column-left'>

            <div className='mt-20 ml-30 flex-left-center'>
                <div className='font-24'>Panel Temperature:</div>
                {/* TODO */}
                <div className='font-28 ml-10'>32°C</div>
            </div>

            <div className='ml-30 mt-20 width-90 height-100' style={{ backgroundColor: 'red' }}>
                {/* TODO */}
                SolarHourlyTemperature.tsx
            </div>
        </div>

    );
};

export default SolarHourlyTemperature;