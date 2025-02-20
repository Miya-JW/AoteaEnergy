import React from 'react';
import ShareIcon from '../../assets/svg/share.svg';
// 引入太阳能发电图

const SolarOverview: React.FC = () => {
    return (
        <div className='solarOverview flex-column prl-20'>
                    <div className='two-column-layout' style={{ width: '100%' }}>
            <div className='text-center mt-30 font-20'>Solar</div>
            <div className='centered-content circle size-40 background-color-light '>
                <img src={ShareIcon} alt='share' className='size-20' />
            </div>
        </div>
        {/* 太阳能发电图 */}
        <div className='mt-30' style={{height:'70%', width:'100%',backgroundColor:'red'}}></div>
        <div className='flex-left mt-20 '>
            <div className='font-16'>Efficiency:</div>
            {/* TODO  */}
            <div className='font-20 ml-10'>17.5%</div>
        </div>
        </div>
        
    );
};

export default SolarOverview;