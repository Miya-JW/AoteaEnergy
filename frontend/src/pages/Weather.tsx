import React from 'react';
import Header from '../components/header/Header';
import SideBar from '../components/sideMenu/SideMenu';
import NavigationBar from '../components/header/NavigationBar';

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

                <div className='two-column-layout-top width-100 height-70 mt-100' style={{ backgroundColor: 'green' }}>

                    {/* left */}
                    <WeatherForecast />

                    {/* right */}
                    <div>
                        <div>
                            <WeatherUVIntensity />
                        </div>
                        <WeatherSuggestion />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;