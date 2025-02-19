import React from 'react';
import ArrowIcon from '../../assets/svg/arrow1.svg'
import Switch from '../../assets/svg/switch.svg'
import HouseImg from '../../assets/image/houseImage.png'


const SmartEnergyShare: React.FC = () => {
    return (
        <div className='smartEnergyShare transparent-card '>

            <div className='flex-left mt-100 ml-50'>
                {/* introduction */}
                <div className='flex-column-left font-16'>
                    <div className='font-40'>Smart Energy Share</div>
                    <div className='mt-20'> Optimize and control your solar energy usage. </div>
                    <div className='mt-8'>Enhance efficiency and cut costs </div>
                    <div className='mt-8'>by tailoring the storage and sale </div>
                    <div className='mt-8'>of power back to the grid.</div>
                    {/* set button */}
                    <button className='set-preferences-button mt-50 flex br-8 font-16 pl-20' >
                        Set your preferences
                        <img src={ArrowIcon} alt='arrow' className='ml-10' />
                    </button>
                </div>

                <img src={HouseImg} alt='house' style={{ width: '500px' }} />
            </div>




            <div className='flex-left ml-50 mt-100'>
                
                {/* transfer */}
                <div className='flex-column-left'>
                    <div className='flex'>
                        <div className='font-28'>Automatic Transfer</div>
                        <img src={Switch} alt='switch' className='ml-30'/>
                    </div>
                    <div className='font-18 mt-20'>Maximum Battery Charge Level</div>
                    {/* TODO 80% */}
                    <div className='font-16 mt-10'>Default Setting: 80%</div>
                </div>

                {/* purchase */}
                <div className='flex-column-left ml-100'>
                    <div className='flex'>
                        <div className='font-28'>Automatic Purchase</div>
                        <img src={Switch} alt='switch' className='ml-30'/>
                    </div>
                    <div>
                        <div className='font-18 mt-20'>Auto-Purchase Power Timeframe</div>
                        <div className='font-16 mt-10'>Default Setting: 6PM-9PM</div>
                    </div>
                    <div>
                        <div className='font-18 mt-20'>Minimum Battery Charge Level</div>
                        {/* TODO 20% */}
                        <div className='font-16 mt-10'>Default Setting: 20%</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmartEnergyShare;