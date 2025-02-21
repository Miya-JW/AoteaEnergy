import React from 'react';

const WeatherUVIntensity: React.FC = () => {
    return (
        <div className='flex-column-left ml-100 width-100 height-100'>
            <div className='flex-left-center mt-30'>
                <div className='font-24'>UV Intensity:</div>
                <div className='font-18 ml-10'>9.8mW/cm²</div>
            </div>
            <div className='flex-column-left mt-30 width-80 height-80 ' style={{backgroundColor:'red'}}>
            WeatherUVIntensity.tsx 
            </div>
           
        </div>
    );
};

export default WeatherUVIntensity;