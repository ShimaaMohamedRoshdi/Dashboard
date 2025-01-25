
// // import React from 'react';
// // import { StrictMode } from 'react';
// // import { createRoot } from 'react-dom/client';
// // import './index.css';
// // import App from './App.jsx';
// // import { ContextProvider } from './contexts/ContextProvider.jsx'; // Ensure this path is correct

// // import '@syncfusion/ej2-react-charts/styles/material.css'; // For chart-specific styles
// // import '@syncfusion/ej2-base/styles/material.css'; // Or another theme like bootstrap.css

// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //     <ContextProvider>
// //       <App />
// //     </ContextProvider>
// //   </StrictMode>
// // );
// import React from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import { ContextProvider } from "./contexts/ContextProvider.jsx";


// import '@syncfusion/ej2-base/styles/material.css';


// // Import your own global styles, if any
// import "./index.css";

// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <ContextProvider>
//       <App />
//     </ContextProvider>
//   </React.StrictMode>
// );
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";

// Syncfusion global styles
import "@syncfusion/ej2-base/styles/material.css"; // Choose a theme

// Your own global styles
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);

