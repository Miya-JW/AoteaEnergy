import React from 'react';
import Header from '../components/header/Header';
import SideBar from '../components/sideMenu/SideMenu';
import NavigationBarHistory from '../components/header/NavigationBarHistory';

const GenerationAndUsage: React.FC = () => {
    return (
        <div className='mainPage'>
            <SideBar />
            <div>
                <Header page={'history'} />
                <div className='historyContainer'>
                   <NavigationBarHistory page='generation-and-usage' />
                </div>
            </div>
        </div>
    );
};

export default GenerationAndUsage;