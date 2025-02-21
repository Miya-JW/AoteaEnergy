import React from 'react';

const SolarPanelHealthStatus: React.FC = () => {
    return (
        <div className='flex-column-left width-30 height-100 transparent-card ml-30'>
            <div className=' flex-column-left mt-20 ml-30'>
                <div className='font-24 '>Panel Health Status:</div>

                <div className='flex mt-30'>
                    <div className='font-18'>Current Condition:</div>
                    {/* TODO */}
                    <div className='font-18 color-green ml-10'>Healthy</div>
                </div>

                <div className='flex mt-30'>
                    <div className='font-18'>Faults Detected:</div>
                    {/* TODO */}
                    <div className='font-18 color-green ml-10'>None</div>
                </div>
                <div className='flex mt-30'>
                    <div className='font-18'>Efficiency:</div>
                    {/* TODO */}
                    <div className='font-18 ml-10'>Operating at normal levels</div>
                </div>
                <div className='flex-column-left mt-30'>
                    <div className='font-18'>Recommended Action:</div>
                    {/* TODO */}
                    <div className='font-18 mt-8'>Schedule next inspection in three months</div>
                </div>


            </div>

        </div>
    );
};

export default SolarPanelHealthStatus;