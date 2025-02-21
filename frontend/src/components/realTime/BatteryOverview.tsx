import React from 'react';
import ShareIcon from '../../assets/svg/share.svg';
import Battery from '../diagrams/Battery';
import BatteryUsageAndChargeTime from '../diagrams/BatteryUsageAndChargeTime';

const BatteryOverview: React.FC = () => (
    <div className='batteryOverview flex-column-left prl-20'>

        <div className='two-column-layout' style={{ width: '100%' }}>
            <div className='text-center mt-30 font-20'>Battery</div>
            <div className='centered-content circle size-40 background-color-light '>
                <img src={ShareIcon} alt='share' className='size-20' />
            </div>
        </div>

        {/* maximum capacity */}
        <div className='flex-left mt-20 '>
            <div className='font-16'>Maximum Capacity</div>
            {/* TODO  */}
            <div className='font-20 ml-10'>96%</div>
        </div>

        {/* 电池电量图 */}
        <div className='mt-10' style={{ backgroundColor: 'red', width: '100%', height: '8%' }}>
            <Battery />
        </div>
        {/* 用电图 */}
        <div className='mt-30' style={{ height: '70%', width: '100%', backgroundColor: 'red' }}>
            <BatteryUsageAndChargeTime />
        </div>

    </div>
);

export default BatteryOverview;