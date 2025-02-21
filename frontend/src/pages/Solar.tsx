import React from 'react';
import Header from '../components/header/Header';
import SideBar from '../components/sideMenu/SideMenu';
import BackIcon from '../assets/svg/back.svg';
import ShareIcon from '../assets/svg/share1.svg';

import SolarCurrentPowerOutput from '../components/diagrams/SolarCurrentPowerOutput';
import SolarPanelHealthStatus from '../components/solarPage/SolarPanelHealthStatus';
import SolarEfficiency from '../components/diagrams/SolarEfficiency';
import SolarHourlyGeneration from '../components/diagrams/SolarHourlyGeneration';
import SolarHourlyTemperature from '../components/diagrams/SolarHourlyTemperature';

const Solar: React.FC = () => {
    return (
        <div className='mainPage'>
            <SideBar />
            <div>
                <Header page={'realTime'} />

                <div className='mt-100 two-column-layout width-60'>
                    <img src={BackIcon} alt='back' className='cursor-pointer' />
                    <div className='flex'>
                        <div className='font-40'>Solar</div>
                        <img src={ShareIcon} alt='share' className='ml-30' />
                    </div>
                </div>

                <div className='flex-column width-100 height-70 mt-100' >

                    {/* top row */}
                    <div className='flex width-100 height-40 ' >

                        {/* current output */}
                        <SolarCurrentPowerOutput />

                        {/* efficiency */}
                        <SolarEfficiency />

                        {/* health status */}
                        <SolarPanelHealthStatus />
                    </div>

                    {/* bottom row */}
                    <div className='flex width-90 height-60 mt-30 ' >
                        <SolarHourlyGeneration />
                        <SolarHourlyTemperature />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Solar;