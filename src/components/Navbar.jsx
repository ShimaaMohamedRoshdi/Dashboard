
import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg'; // Make sure the path is correct
import { Cart, Chat, Notification, UserProfile } from '.'; // Ensure these components are available
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray dark:hover:bg-dark-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { activeMenu, setActiveMenu, currentColor, currentMode, setMode,
     isClicked, setIsClicked, screenSize, setScreenSize } = useStateContext(); 

  const handleClick = (section) => {
    setIsClicked((prevState) => ({
      cart: section === 'cart' ? !prevState.cart : false,
      chat: section === 'chat' ? !prevState.chat : false,
      notification: section === 'notifications' ? !prevState.notification : false,
      userProfile: section === 'userProfile' ? !prevState.userProfile : false,
    }));
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);

    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className={`flex justify-between p-2 md:mx-6 relative ${currentMode === 'Dark' ? 'dark' : ''}`}>
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu(!activeMenu)}
        icon={<AiOutlineMenu />}
        color="gray"
        dotColor="red"
      />
      
      <NavButton
        title="Cart"
        customFunc={() => handleClick('cart')}
        icon={<FiShoppingCart />}
        color="blue"
        dotColor="green"
      />

      <NavButton
        title="Chat"
        dotColor="#03C9D7"
        customFunc={() => handleClick('chat')}
        color={currentColor}
        icon={<BsChatLeft />}
      />

      <NavButton
        title="Notifications"
        customFunc={() => handleClick('notifications')}
        icon={<RiNotification3Line />}
        color="purple"
        dotColor="yellow"
      />

      <TooltipComponent content="Profile" position="BottomCenter">
        <div
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray dark:hover:bg-dark-gray rounded-lg"
          onClick={() => handleClick('userProfile')}
        >
          <img
            className="rounded-full w-8 h-8"
            src={avatar}
            alt="user-profile"
          />
          <p>
            <span className="text-gray-400 text-14">Hi,</span>{' '}
            <span className="text-gray-400 font-bold ml-1 text-14">Hamza</span>
          </p>
          <MdKeyboardArrowDown className="text-gray-400 text-14" />
        </div>
      </TooltipComponent>

      <NavButton
        title="Toggle Theme"
        customFunc={() => setMode(currentMode === 'Light' ? 'Dark' : 'Light')}
        icon={currentMode === 'Light' ? '🌙' : '☀️'}
        color={currentColor}
      />

      <div className="absolute right-0 top-16 flex flex-col items-center">
        {isClicked.cart && (<Cart />)}
        {isClicked.chat && (<Chat />)}
        {isClicked.notification && (<Notification />)}
        {isClicked.userProfile && (<UserProfile />)}
      </div>
    </div>
  );
};

export default Navbar;
