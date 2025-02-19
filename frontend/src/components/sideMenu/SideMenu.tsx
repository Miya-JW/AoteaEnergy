import React from 'react';
import Menu from '../../assets/svg/menu.svg';
import SearchBar from './SearchBar';
import SmartEnergyShare from './SmartEnergyShare';
import MenuComponent from './Menu';
import BottomMenu from './BottomMenu';



const SideMenu: React.FC = () => {
    return (
        <div className='sideMenu'>
            <div className='two-column-layout'>
                <img src='../../src/assets/image/miya.jpg' alt="user" className='size-55 circle' />
                <img src={Menu} alt='menu-icon' />
            </div>

            {/* search bar */}
            <SearchBar />

            {/* smart energy share */}
            <SmartEnergyShare />

            {/* menu */}
            <MenuComponent />

            {/* bottom menu */}
            <BottomMenu />

        </div>

    );
};

export default SideMenu;