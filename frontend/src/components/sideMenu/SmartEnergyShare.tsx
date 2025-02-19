import React from "react";
import SwitchIcon from '../../assets/svg/switch.svg';

const SmartEnergyShare: React.FC = () => {
    return (
        <div className='two-column-layout mt-50'>
            {/* smart energy share */}
            <div className='font-20'>Smart Energy Share</div>
            <img src={SwitchIcon} alt='switch-icon' />
        </div>
    );
};

export default SmartEnergyShare;