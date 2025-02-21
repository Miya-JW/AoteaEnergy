import React from 'react';

const SolarHourlyGeneration: React.FC = () => {
    return (

        <div className='transparent-card width-50 height-100 flex-column-left'>
            <div className='mt-20 ml-30 flex-left-center'>
                <div className='font-24'>Energy Generated Today:</div>
                {/* TODO */}
                <div className='font-28 ml-10'>45kWh</div>
            </div>

            <div className='ml-30 mt-20 width-90 height-100' style={{ backgroundColor: 'red' }}>
                {/* TODO */}
                SolarHourlyGeneration.tsx
            </div>
        </div>

    );
};

export default SolarHourlyGeneration;