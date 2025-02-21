import React from 'react';

const BatteryEstimatedRuntime: React.FC = () => {
    return (
        <div className='width-40 height-100 flex-column ml-40'>
               <div className='flex-left-center'>
                <div className='font-20'>Estimated Runtime</div>
                
            </div>
            <div className='width-100 height-100 mt-30' style={{ backgroundColor: 'red' }}>
                BatteryEstimatedRuntime.tsx
            </div>
        </div>

    );
};

export default BatteryEstimatedRuntime;