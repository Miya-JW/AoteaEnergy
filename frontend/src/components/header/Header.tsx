import React from 'react';

interface HeaderProps {
    page: 'realTime' | 'history' | 'future';
}

const Header: React.FC<HeaderProps> = ({ page }) => {
    return (
        <div className='two-column-layout'>
            <div className='line-height-25 mt-30 ml-10' >
                <div className='font-22'>Hello Miya!</div>
                {/* welcome message */}
                <div className='font-15'>
                    {page === 'realTime' && "Here's your live energy data, updated in real-time!"}
                    {page === 'history' && "Explore your historical energy data, analyzed over time!"}
                    {page === 'future' && "Discover your upcoming energy trends, forecasted for precision planning!"}
                </div>
            </div>
            <div className='two-column-layout  flex'>
                {/* TODO dark mode & notification */}
                <div className='two-column-layout  '>
                    <div className='centered-content circle size-40 background-color-dark ' >
                        <img src='../../src/assets/svg/darkmode.svg' alt="darkmode" className='size-20' />
                    </div>

                    <div className='centered-content circle size-40 background-color-dark ml-15' >
                        <img src='../../src/assets/svg/notification.svg' alt="notification" className='size-20' />
                    </div>
                </div>

                {/*TODO backend : user */}
                <div className='two-column-layout ml-20'>
                    <img src='../../src/assets/image/miya.jpg' alt="user" className='size-55 circle' />
                    <div className='font-14 ml-10'>
                        <div >Miya</div>
                        <div>miya.wujing@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;