import React from 'react';
import Header from '../components/header/Header';
import SideBar from '../components/sideMenu/SideMenu';
import FutureSuggestion from '../components/future/futureSuggestion';
import DailyEnergyPlanner from '../components/future/DailyEnergyPlanner';
import FutureWeeklyEnergyForecast from '../components/diagrams/FutureWeeklyEnergyForecast';
import FutureApplicationSelection from '../components/diagrams/FutureApplianceSelection';

const FutureForecasting: React.FC = () => {
    return (
        <div className='mainPage'>
            <SideBar />
            <div>
                <Header page={'future'} />
                <div className='flex width-100 height-80 mt-100'>
                    <div className='flex-column width-55 height-100' >
                        <div className='width-100 height-70'>
                            <div className='font-40'>Weekly Energy Forecast</div>
                            <FutureWeeklyEnergyForecast />
                        </div>
                        <div className='width-100 height-30 mt-50'>
                            <FutureSuggestion />
                        </div>
                    </div>
                    <div className='width-45 height-90 ml-30 transparent-card' >
                        <DailyEnergyPlanner />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FutureForecasting;