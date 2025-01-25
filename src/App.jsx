
// Add this to the top of your entry file (e.g., index.js or App.js)
window.__WS_TOKEN__ = null;


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, ThemeSettings, Sidebar } from './components';
import { Ecommerce, Orders, Calender, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import { useStateContext } from './contexts/ContextProvider';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';


function App() {
  const { activeMenu } = useStateContext(); // Correct usage of useStateContext

  return (
    <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        {/* Settings button */}
        <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
              style={{ background: 'blue', borderRadius: '50%' }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>

        {/* Sidebar */}
        <div
          className={`w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white transition-all duration-300 ease-in-out ${
            activeMenu ? 'md:ml-0' : '-ml-72'
          }`}
        >
          <Sidebar />
        </div>

        {/* Main content */}
        <div
          className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}
        >
          {/* Navbar */}
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>

          {/* Routing and Pages */}
          <div>
                <Routes>
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
               {/* <Route path="/calender" element={<Calender />} /> */}
               <Route path="/calendar" element={<Calender />} />

                <Route path="/color-picker" element={<ColorPicker />} />
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
