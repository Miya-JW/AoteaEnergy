import React from 'react';
import Header from '../components/header/Header';
import SideBar from '../components/sideMenu/SideMenu';
import EnergyFlow from '../components/realTime/EnergyFlow';
import SmartEnergyShare from '../components/realTime/SmartEnergyShare';
import SolarOverview from '../components/realTime/SolarOverview';
import WeatherOverview from '../components/realTime/WeatherOverview';
import BatteryOverview from '../components/realTime/BatteryOverview';


const Dashboard: React.FC = () => {
    return (
        <div className='mainPage'>
            <SideBar />
            <div>
                <Header page={'realTime'} />
                <div className='realTimeContainer'>
                    <SmartEnergyShare />
                    <EnergyFlow />
                    <SolarOverview />
                    <WeatherOverview />
                    <BatteryOverview />
                </div>
            </div>

        </div>
    );
};

export default Dashboard;