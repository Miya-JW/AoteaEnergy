import React from 'react';

const EER: React.FC = () => {
    return (
        <div className='mt-50 ml-50'>
            {/* introduction */}
            <div>
                <div className='font-40'>Energy</div>
                <div className='font-40 mt-10'>Efficiency Ratio</div>
                <div className='mt-10 flex-left'>
                    <div className='font-40'>(EER)</div>
                    <div className='font-16 ml-10 width-80'>EER tracks the performance of our solar power system by comparing daily energy generated to energy used. Monitor EER to optimize your solar efficiency.</div>
                </div>
            </div>
            {/* EER bar */}
            <div className='mt-50'>
                <div className='eer-bar'></div>
                <div className='flex-left two-column-layout mt-10' style={{ width: '300px' }} >
                    <div>0.5</div>
                    <div>1.0</div>
                    <div>2.0</div>
                </div>
            </div>

            {/* EER fomular */}
            <div className='mt-40 flex-left-center'>
                <div className='font-24'>EER</div>
                <div className='ml-10 font-18'>=</div>
                <div className='ml-10'>
                    <div className='font-18'>Total Daily Energy Generated (kWh) </div>
                    <div className='eer-line'></div>
                    <div className='font-18'>Total Daily Energy Consumed (kWh) </div>
                </div>

            </div>
        </div>
    );
};

export default EER;