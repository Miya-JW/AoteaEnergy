import React from 'react';
import Header from '../components/header/Header';
import SideBar from '../components/sideMenu/SideMenu';
import NavigationBar from '../components/header/NavigationBarRealtime';

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

                <NavigationBar page='solar' />

                <div className='flex-column width-100 height-70 mt-100' >

                    {/* top row */}
                    <div className='flex width-100 height-40 ' >

                        {/* current output REUSE */}
                        <div className='flex-column width-30 height-100 transparent-card'>
                            <div className=' flex-left-center mt-20 '>
                                <div className='font-24 '>Current Power Output:</div>
                                {/* TODO */}
                                <div className='font-20 ml-10'>17kWh/h</div>
                            </div>
                            <SolarCurrentPowerOutput />
                        </div>


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