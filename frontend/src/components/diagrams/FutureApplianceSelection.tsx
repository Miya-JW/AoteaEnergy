import React from 'react';
import Icon from '../../assets/svg/appliance.svg';
import Icon1 from '../../assets/svg/appliance1.svg';
import Icon2 from '../../assets/svg/appliance2.svg';
import Icon3 from '../../assets/svg/appliance3.svg';
import Icon4 from '../../assets/svg/appliance4.svg';
import Icon5 from '../../assets/svg/appliance5.svg';
import Icon6 from '../../assets/svg/appliance6.svg';
import Icon7 from '../../assets/svg/appliance7.svg';
import Icon8 from '../../assets/svg/appliance8.svg';
import Icon9 from '../../assets/svg/appliance9.svg';

const FutureApplicationSelection: React.FC = () => {
    return (
        <div className='flex-column-left mt-50'>
            {/* generation */}
            <div className='flex-left-center mt-20'>
                <div className='font-24'>Projected Generation:</div>
                <div className='font-28 ml-10'>27.5 kWh</div>
            </div>

            {/* appliance */}
            <div className='flex-left mt-30'>
                <div className='appliance flex' >
                    <img src={Icon1} alt='share' className='size-35' />
                </div>
                <div className='appliance flex ml-10' >
                    <img src={Icon2} alt='share' className='size-35' />
                </div>
                <div className='appliance flex ml-10' >
                    <img src={Icon3} alt='share' className='size-35' />
                </div>
                <div className='appliance flex ml-10' >
                    <img src={Icon4} alt='share' className='size-35' />
                </div>
                <div className='appliance flex ml-10' >
                    <img src={Icon5} alt='share' className='size-35' />
                </div>
                <div className='appliance flex ml-10' >
                    <img src={Icon6} alt='share' className='size-35' />
                </div>
                <div className='appliance flex ml-10' >
                    <img src={Icon7} alt='share' className='size-35' />
                </div>
                <div className='appliance flex ml-10' >
                    <img src={Icon8} alt='share' className='size-35' />
                </div>
                <div className='appliance flex ml-10' >
                    <img src={Icon9} alt='share' className='size-35' />
                </div>
                <img src={Icon} alt='share' className='size-35 ml-10' />
            </div>
            {/* energy forecast */}
            <div className='energy-forecast mt-30 flex-left'>
                <div className='base-line flex'>Baseline</div>
                <div className='energy-forecast-line'></div>
            </div>
            <div className='flex-left-center mt-30'>
                <div className='font-20'>Energy Forecast:</div>
                <div className='font-28 ml-10'>4 kWh</div>
            </div>



        </div>
    );
};

export default FutureApplicationSelection;