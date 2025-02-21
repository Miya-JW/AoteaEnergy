import React from 'react';
import EnergyFlowDiagram from '../diagrams/EnergyFlow';

const EnergyFlow: React.FC = () => {
    return (
        <div className='energyFlow transparent-card flex-column-left'>

            <div className='text-center mt-30 font-20'>Energy Flow</div>

            <div className='mt-20' style={{height:'60%', width:'100%',backgroundColor:'red'}}>
                {/* energy flow */}
                <EnergyFlowDiagram/>
            </div>

            {/* content */}
            <div className='ml-50 mt-20'>
                <div className='flex-left'>
                    <div className='font-16'>Current Power Source:</div>
                    {/* TODO */}
                    <div className='font-20 ml-10'>Solar</div>
                </div>

                <div className='flex-left mt-20'>
                    <div className='font-16'>Battery Status:</div>
                    {/* TODO */}
                    <div className='font-20 ml-10'>Not Charging</div>
                </div>
                <div className='flex-left mt-20'>
                    <div className='font-16'>Grid Energy Transfer:</div>
                    {/* TODO */}
                    <div className='font-20 ml-10'>On</div>
                </div>
                <div className='flex-left mt-20'>
                    <div className='font-16'>Grid Energy Purchase:</div>
                    {/* TODO */}
                    <div className='font-20 ml-10'>Off</div>
                </div>
            </div>
        </div>

    );
};

export default EnergyFlow;