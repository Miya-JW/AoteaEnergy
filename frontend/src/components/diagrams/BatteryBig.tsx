import React from 'react';

const BatteryBig: React.FC = () => {
    return (
        <div className='width-60 height-100 flex-column' >
            <div className='flex-left-center'>
                <div className='font-20'>Maximum Capacity:</div>
                {/* TODO */}
                <div className='font-24 ml-10'>96%</div>
            </div>
            <div className='width-100 height-100 mt-30' style={{ backgroundColor: 'red' }}>
                battery status
            </div>
        </div>

    );
};

export default BatteryBig;