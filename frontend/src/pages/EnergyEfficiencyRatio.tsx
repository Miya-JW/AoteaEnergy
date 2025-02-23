import React from 'react';
import Header from '../components/header/Header';
import SideBar from '../components/sideMenu/SideMenu';
import NavigationBarHistory from '../components/header/NavigationBarHistory';
import EER from '../components/history/EER';
import HistoryMonthlyCalendar from '../components/diagrams/HistoryMonthlyCalendar';
import HistoryYearlyCalendar from '../components/diagrams/HistoryYearlyCalendar';

const EnergyEfficiencyRatio: React.FC = () => {
    return (
        <div className='mainPage'>
            <SideBar />
            <div>
                <Header page={'history'} />
                <NavigationBarHistory page='energy-efficiency-ratio' />

                <div className='mt-50 width-100 height-80' >

                    <div className='flex width-100 height-40' >
                        <div className='width-60 height-100 transparent-card'>
                            <EER />
                        </div>
                        <div className='width-40 height-100 ml-50'>
                            <HistoryMonthlyCalendar />
                        </div>
                    </div>
                    <div className='width-100 height-50 mt-50 transparent-card'>
                        <HistoryYearlyCalendar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnergyEfficiencyRatio;