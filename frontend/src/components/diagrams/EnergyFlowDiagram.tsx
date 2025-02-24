import React, { useEffect, useState } from 'react';
import SolarIcon from '../../assets/svg/solar.svg';
import BatteryIcon from '../../assets/svg/battery.svg';
import GridIcon from '../../assets/svg/grid.svg';
import UserIcon from '../../assets/svg/house.svg';
import Generate from '../../assets/svg/generate.svg';
import EnergyFlowLine from '../../assets/svg/energy-flow.svg';
import { getEnergyFlow } from '../../services/realtime/energyFlow';

interface ComponentStatus {
    solar: boolean;
    house: boolean;
    grid: boolean;
    battery: boolean;
}

interface EnergyFlowStatus {
    solar_house: boolean;
    grid_battery: boolean;
    solar_grid: boolean;
    battery_house: boolean;
    solar_battery: boolean;
    grid_house: boolean;
    battery_grid: boolean;
}

const EnergyFlow: React.FC = () => {

    const [status, setStatus] = useState<ComponentStatus>({
        solar: false,
        house: false,
        grid: false,
        battery: false,
    });

    const [flowStatus, setFlowStatus] = useState<EnergyFlowStatus>({
        solar_house: false,
        grid_battery: false,
        solar_grid: false,
        battery_house: false,
        solar_battery: false,
        grid_house: false,
        battery_grid: false,
    });

    useEffect(() => {
        function fetchData() {

            const energyFlows = getEnergyFlow();

            energyFlows.forEach(flow => {
                setStatus(prevStatus => ({
                    ...prevStatus,
                    [flow.source_component]: true,
                    [flow.target_component]: true,
                }));
                const flowKey = `${flow.source_component}_${flow.target_component}` as keyof EnergyFlowStatus;
                if (flowKey in flowStatus) {
                    setFlowStatus(prevStatus => ({
                        ...prevStatus,
                        [flowKey]: true,
                    }));
                }
            });
        }
        fetchData();
    }, []);

    return (
        <div className='relative width-80 height-80'>

            {/* solar icon */}
            <div className=' top-left  size-70 ' >
                <div className='relative circle size-70 centered-content ' >
                    {/* 加hidden 如果不参与 */}
                    <img src={Generate} alt='Generate Icon' className={`size-70 top-left ${status.solar ? '' : 'hidden'} `} />
                    <div className='relative flex-column'>
                        <img src={SolarIcon} alt='Solar Icon' className='size-30' />
                        {/* TODO */}
                        <div className='font-10'>3kWh</div>
                    </div>
                </div>
            </div>

            {/* grid icon */}
            <div className=' bottom-left  size-70 ' >
                <div className='relative circle size-70 centered-content ' >
                    {/* 加hidden 如果不参与 */}
                    <img src={Generate} alt='Generate Icon' className={`size-70 top-left ${status.grid ? '' : 'hidden'} `} />
                    <div className='relative flex-column'>
                        <img src={GridIcon} alt='Grid Icon' className='size-30' />
                        <div className='font-10'></div>
                    </div>
                </div>
            </div>

            {/* house icon */}
            <div className=' top-right  size-70 ' >
                <div className='relative circle size-70 centered-content ' >
                    {/* 加hidden 如果不参与 */}
                    <img src={Generate} alt='Generate Icon' className={`size-70 top-left ${status.house ? '' : 'hidden'} `} />
                    <div className='relative flex-column'>
                        <img src={UserIcon} alt='User Icon' className='size-30' />
                        <div className='font-10'>3.1kWh</div>
                    </div>
                </div>
            </div>

            {/* battery icon */}
            <div className=' bottom-right  size-70 ' >
                <div className='relative circle size-70 centered-content ' >
                    {/* 加hidden 如果不参与 */}
                    <img src={Generate} alt='Generate Icon' className={`size-70 top-left ${status.battery ? '' : 'hidden'} `} />
                    <div className='relative flex-column'>
                        <img src={BatteryIcon} alt='Battery Icon' className='size-30' />
                        <div className='font-10'>80%</div>
                    </div>
                </div>
            </div>

            {/* solar-house */}
            <img src={EnergyFlowLine} alt='Energy Flow Line' className={`energy-flow-line energy-flow-animate-horizontal ${flowStatus.solar_house ? '' : 'hidden'}`} style={{ top: '20px', left: '80px' }} />
            
            {/* grid-battery */}
            <img src={EnergyFlowLine} alt='Energy Flow Line' className={`energy-flow-line energy-flow-animate-horizontal ${flowStatus.grid_battery ? '' : 'hidden'}`} style={{ bottom: '20px', left: '80px' }} />
            
            {/* solar-grid */}
            <img src={EnergyFlowLine} alt='Energy Flow Line' style={{ left: '20px', top: '80px', transform: 'rotate(90deg)' }}  className={`energy-flow-line energy-flow-animate-vertical ${flowStatus.solar_grid ? '' : 'hidden'}`} />
            
            {/* TODO battery-house */}
            <img src={EnergyFlowLine} alt='Energy Flow Line' className={`energy-flow-line ${flowStatus.battery_house ? '' : 'hidden'}`} style={{ right: '25px', bottom: '80px', transform: 'rotate(-90deg)' }} />
            
            {/* TODO solar-battery */}
            <img src={EnergyFlowLine} alt='Energy Flow Line' className={`energy-flow-line ${flowStatus.solar_battery ? '' : 'hidden'}`} style={{ left: '60px', top: '60px', transform: 'rotate(45deg)' }} />
            
            {/* TODO grid-house */}
            <img src={EnergyFlowLine} alt='Energy Flow Line' className={`energy-flow-line ${flowStatus.grid_house ? '' : 'hidden'}`} style={{ left: '70px', bottom: '60px', transform: 'rotate(-45deg)' }} />
            
            {/* TODO battery-grid */}
            <img src={EnergyFlowLine} alt='Energy Flow Line' className={`energy-flow-line ${flowStatus.battery_grid ? '' : 'hidden'}`} style={{ bottom: '20px', right: '80px', transform: 'rotate(180deg)' }} />




        </div>

    );
};

export default EnergyFlow;