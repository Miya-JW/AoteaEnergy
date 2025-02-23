import React from 'react';
import Header from '../components/header/Header';
import SideBar from '../components/sideMenu/SideMenu';
import NavigationBarHistory from '../components/header/NavigationBarHistory';

import HistoryWeeklyGenerationUsage from '../components/diagrams/HistoryWeeklyGenerationUsage';
import WeeklySummary from '../components/history/WeeklySummary';

const GenerationAndUsage: React.FC = () => {
    return (
        <div className='mainPage'>
            <SideBar />
            <div>
                <Header page={'history'} />
                <div className='width-100 height-80'>
                    <NavigationBarHistory page='generation-and-usage' />

                    {/* weekly monthly yearly */}
                    <div className='flex-left-center mt-30'>
                        <div className='background-time p-5-20 font-16'>Weekly</div>
                        <div className='background-time p-5-20 font-16 ml-20'>Monthly</div>
                        <div className='background-time p-5-20 font-16 ml-20'>Yearly</div>
                    </div>
                    {/* main content */}
                    <div className='flex-center width-100 height-90 mt-30' >
                        <div className='width-50 ' style={{ backgroundColor: 'red' }}>
                            <HistoryWeeklyGenerationUsage />
                        </div>
                        <div className='width-50 ml-50 transparent-card' >
                            <WeeklySummary />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GenerationAndUsage;