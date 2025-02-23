import React from 'react';
import Header from '../components/header/Header';
import SideBar from '../components/sideMenu/SideMenu';
import NavigationBarHistory from '../components/header/NavigationBarHistory';
import GenerationEfficiencyAnalysis from '../components/history/GenerationEfficiencyAnalysis';
import HistoryGenerationEfficiencyWeekly from '../components/diagrams/HistoryGenerationEfficiencyWeekly';
import HistoryGenerationEfficiencyMonthly from '../components/diagrams/HistoryGenerationEfficiencyMonthly';
import HistoryGenerationEfficiencyYearly from '../components/diagrams/HistoryGenerationEfficiencyYearly';


const GenerationEfficiency: React.FC = () => {
    return (
        <div className='mainPage'>
            <SideBar />
            <div>
                <Header page={'history'} />
                <NavigationBarHistory page='generation-efficiency' />
                <div className='flex width-100 height-80 mt-30' >
                    <div className='flex-column-left width-40 height-100' >
                        {/* week */}
                        <div className='width-100 height-50' style={{ backgroundColor: 'red' }}>
                            <HistoryGenerationEfficiencyWeekly />
                        </div>
                        {/* analysis */}
                        <div className='width-100 height-50 mt-30 transparent-card' >
                            <GenerationEfficiencyAnalysis />
                        </div>
                    </div>
                    <div className='flex-column-left width-60 height-100 ml-30' >
                        {/* month */}
                        <div className='width-100 height-50' style={{ backgroundColor: 'red' }}>
                            <HistoryGenerationEfficiencyMonthly />
                        </div>
                        {/* year */}
                        <div className='width-100 height-50 mt-30' style={{ backgroundColor: 'red' }}>
                            <HistoryGenerationEfficiencyYearly />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GenerationEfficiency;