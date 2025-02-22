import React from 'react';
import Header from '../components/header/Header';
import SideBar from '../components/sideMenu/SideMenu';
import NavigationBarHistory from '../components/header/NavigationBarHistory';

const GenerationEfficiency: React.FC = () => {
    return (
        <div className='mainPage'>
            <SideBar />
            <div>
                <Header page={'history'} />
                <div className='historyContainer'>
                    <NavigationBarHistory page='generation-efficiency' />
                </div>
            </div>
        </div>
    );
};

export default GenerationEfficiency;