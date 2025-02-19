import React from 'react';
import LogoutIcon from '../../assets/svg/logout.svg';
import HelpIcon from '../../assets/svg/help.svg';
import SettingsIcon from '../../assets/svg/setting.svg';

const BottomMenu: React.FC = () => {
    return (
        <div className='font-14 bottom-menu'>
            <div className='flex-column'>
                {/* logout */}
                <img src={LogoutIcon} alt='logout-icon' />
                <div className='mt-8'>Logout</div>
            </div>
            <div className='flex-column'>
                {/* help */}
                <img src={HelpIcon} alt='help-icon' />
                <div className='mt-8'>Help</div>
            </div>
            <div className='flex-column'>
                {/* settings */}
                <img src={SettingsIcon} alt='setting-icon' />
                <div className='mt-8'>Settings</div>
            </div>
        </div>
    );
};

export default BottomMenu;