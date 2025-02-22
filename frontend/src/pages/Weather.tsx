import React from 'react';
import Header from '../components/header/Header';
import SideBar from '../components/sideMenu/SideMenu';
import NavigationBar from '../components/header/NavigationBarRealtime';

import WeatherUVIntensity from '../components/diagrams/WeatherUVIntensity';
import WeatherForecast from '../components/weatherPage/WeatherForecast';
import WeatherSuggestion from '../components/weatherPage/WeatherSuggestion';

const Weather: React.FC = () => {
    return (
        <div className='mainPage'>
            <SideBar />
            <div>
                <Header page={'realTime'} />

                <NavigationBar page='weather' />

                <div className='two-column-layout-top width-100 height-70 mt-100' >

                    {/* left */}
                    <div className='width-30 height-90 mt-50 ' >
                        <WeatherForecast />
                    </div>


                    {/* right */}
                    <div className='flex-column-center width-70 height-90 mt-50 ml-50' >
                        <div className='width-100 height-60 transparent-card' >
                            <WeatherUVIntensity />
                        </div>
                        <div className='width-100 height-30 mt-50 transparent-card' >
                            <WeatherSuggestion />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;