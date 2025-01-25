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
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
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
  const { activeMenu, setActiveMenu, currentColor,
     isClicked, setIsClicked,screenSize,setScreenSize } = useStateContext(); 

  // Handle what happens when an icon is clicked
  const handleClick = (section) => {
    setIsClicked((prevState) => ({
      // Close the previous section when opening a new one
      cart: section === 'cart' ? !prevState.cart : false,
      chat: section === 'chat' ? !prevState.chat : false,
      notification: section === 'notifications' ? !prevState.notification : false,
      userProfile: section === 'userProfile' ? !prevState.userProfile : false,
    }));
  };

useEffect(()=>{
const handleResize=()=>setScreenSize
(window.innerWidth);
window.addEventListener('resize' ,handleResize);

handleResize();
return()=> window.removeEventListener('resize',handleResize);

  },[])
  useEffect(()=>{
 if(screenSize<=900){
  setActiveMenu(false)
 }else{
  setActiveMenu(true)
 }
  },[screenSize])

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      {/* NavButton for Menu */}
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu(!activeMenu)}
        icon={<AiOutlineMenu />}
        color="gray"
        dotColor="red"
      />
      
      {/* NavButton for Cart */}
      <NavButton
        title="Cart"
        customFunc={() => handleClick('cart')}
        icon={<FiShoppingCart />}
        color="blue"
        dotColor="green"
      />

      {/* NavButton for Chat */}
      <NavButton
        title="Chat"
        dotColor="#03C9D7"
        customFunc={() => handleClick('chat')}
        color={currentColor} // Ensure currentColor is coming from the context
        icon={<BsChatLeft />}
      />

      {/* NavButton for Notifications */}
      <NavButton
        title="Notifications"
        customFunc={() => handleClick('notifications')}
        icon={<RiNotification3Line />}
        color="purple"
        dotColor="yellow"
      />

      {/* Profile Section */}
      <TooltipComponent content="Profile" position="BottomCenter">
        <div
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
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

      {/* Conditional rendering based on clicked section */}
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
