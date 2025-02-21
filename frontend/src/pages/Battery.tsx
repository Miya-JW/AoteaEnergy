import React from 'react';
import Header from '../components/header/Header';
import SideBar from '../components/sideMenu/SideMenu';
import BackIcon from '../assets/svg/back.svg';
import ShareIcon from '../assets/svg/share1.svg';

import BatteryBig from '../components/diagrams/BatteryBig';
import BatteryEstimatedRuntime from '../components/diagrams/BatteryEstimatedRuntime';
import BatteryUsageAndChargeTime from '../components/diagrams/BatteryUsageAndChargeTime';
import BatteryRealTimeInfo from '../components/batteryPage/BatteryRealTimeInfo';

const Battery: React.FC = () => {
    return (
        <div className='mainPage'>
            <SideBar />
            <div>
                <Header page={'realTime'} />

                <div className='mt-100 two-column-layout width-60'>
                    <img src={BackIcon} alt='back' className='cursor-pointer' />
                    <div className='flex'>
                        <div className='font-40'>Battery</div>
                        <img src={ShareIcon} alt='share' className='ml-30' />
                    </div>
                </div>

                <div className='two-column-layout-top width-100 height-100 mt-100' >
                    {/* left */}
                    <div className=' flex-column width-50 height-70 '>

                        <div className='two-column-layout-top width-100 height-30'>
                            {/* maximum capacity and battery status*/}
                            <BatteryBig />
                            {/* estimated runtime */}
                            <BatteryEstimatedRuntime />
                        </div>

                        <BatteryUsageAndChargeTime />

                    </div>

                    {/* right:battery usage and charge time */}
                    <BatteryRealTimeInfo />
                </div>
            </div>
        </div>
    );
};

export default Battery;