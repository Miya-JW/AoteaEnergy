import React from "react";
import RealTimeIcon from '../../assets/svg/realtime.svg';
import HistoryIcon from '../../assets/svg/history.svg';
import FutureIcon from '../../assets/svg/future.svg';
import DataExportIcon from '../../assets/svg/data-export.svg';

const Menu: React.FC = () => {
    return(
        <div className='ml-30'>
        {/* real time */}
        <div className='mt-50'>
            <div className='flex-left cursor-pointer' onClick={() => window.location.href='/'}>
                <img src={RealTimeIcon} alt='realtime-icon' />
                <div className='font-20 ml-20 '>Real-Time Monitoring</div>
            </div>
            <div className='font-16 ml-45'>
                <div className='mt-8 cursor-pointer' onClick={() => window.location.href='/'}>Energy Flow</div>
                <div className='mt-8 cursor-pointer' onClick={() => window.location.href='/battery'}>Battery</div>
                <div className='mt-8 cursor-pointer' onClick={() => window.location.href='/solar'}>Solar</div>
                <div className='mt-8 cursor-pointer' onClick={() => window.location.href='/weather'}>Weather</div>
            </div>
        </div>

        {/* history */}
        <div className='mt-50'>
            <div className='flex-left cursor-pointer' onClick={() => window.location.href='/history'}>
                <img src={HistoryIcon} alt='history-icon' />
                <div className='font-20 ml-20'>Historical Analysis</div>
            </div>
            <div className='font-16 ml-45'>
               <div className='mt-8 cursor-pointer ' onClick={() => window.location.href='/generation-and-usage'}>Generation and Usage</div>
               <div className='mt-8 cursor-pointer' onClick={() => window.location.href='/energy-efficiency-ratio'}>Energy Efficiency Ratio</div>
               <div className='mt-8 cursor-pointer' onClick={() => window.location.href='/generation-efficiency'}>Generation Efficiency</div>
            </div>
        </div>

        {/* future */}
        <div className='mt-50'>
            <div className='flex-left cursor-pointer' onClick={() => window.location.href='/future-forecasting'}>
                <img src={FutureIcon} alt='future-icon' />
                <div className='font-20 ml-20'>Future Forecasting</div>
            </div>
            <div className='font-16 ml-45'>
               <div className='mt-8 cursor-pointer' onClick={() => window.location.href='/future-forecasting'}>Weekly Energy Forecast</div>
               <div className='mt-8 cursor-pointer' onClick={() => window.location.href='/future-forecasting'}>Daily Energy Planner</div>
            </div>
        </div>

        {/* data export */}
        <div className='flex-left mt-50'>
            <img src={DataExportIcon} alt='future-icon' />
            <div className='font-20 ml-20'>Data Export</div>
        </div>
    </div>
    );
};

export default Menu;