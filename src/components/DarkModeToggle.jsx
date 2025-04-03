import { useStateContext } from '../contexts/ContextProvider';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const DarkModeToggle = () => {
  const { currentMode, toggleMode } = useStateContext();

  return (
    <button 
      onClick={toggleMode} 
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
    >
      {currentMode === 'Dark' ? (
        <MdLightMode size={24} color="yellow" />
      ) : (
        <MdDarkMode size={24} color="black" />
      )}
    </button>
  );
};

export default DarkModeToggle;
