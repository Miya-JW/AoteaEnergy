import React from 'react';
import ShareIcon from '../../assets/svg/share.svg';
import SunnyIcon from'../../assets/svg/sunny.svg';
import WeatherUVIntensity from '../diagrams/WeatherUVIntensity';

const WeatherOverview: React.FC = () => {
    return (
        <div className='weatherOverview flex-column-left prl-20'>

            <div className='two-column-layout' style={{ width: '100%' }}>
                <div className='text-center mt-30 font-20'>Weather</div>
                <div className='centered-content circle size-40 background-color-light '>
                    <img src={ShareIcon} alt='share' className='size-20' />
                </div>
            </div>

            <div className='font-24 mt-20'>Great Barrier Island</div>

            <div className='two-column-layout' style={{width:'70%'}}>
                {/* TODO */}
                <div className='font-40'>20°C</div>
               <img src={SunnyIcon} alt='sunny' className='size-70' />
            </div>

            {/* UV intensity */}
            <div className='mt-20' style={{height:'50%', width:'100%',backgroundColor:'red'}}>
                <WeatherUVIntensity />
            </div>
        </div>
    );
};

export default WeatherOverview;