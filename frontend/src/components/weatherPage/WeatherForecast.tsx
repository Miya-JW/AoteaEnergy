import React from 'react';
import TemperatureIcon from '../../assets/svg/temperater.svg';

const WeatherForecast: React.FC = () => {
    return (
        <div className='flex-column width-100 height-100'>
            <div className='font-40 '>Great Barrier Island</div>

            <div className='flex transparent-card width-80 height-15 mt-30'>
                {/* TODO */}
                <div className='font-40'>20°C</div>

                <div className='flex-column-center ml-50'>
                    <img src={TemperatureIcon} alt='temperature' />
                    <div className='two-column-layout mt--20'>
                        {/* TODO */}
                        <div>12°C</div>
                        <div>20°C</div>
                    </div>
                </div>
            </div>

            <div className='flex-column-left mt-30 width-80 height-80 ' style={{backgroundColor:'red'}}>
                future one week weather forecast
            </div>
        </div>
    );
};

export default WeatherForecast;