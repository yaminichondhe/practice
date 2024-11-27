import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Attendance from './components/Attendance/Attendance'; // Import components for each route
import Statistics from './components/Statistics/Statistics';
import NotesOpen from './components/Notes/NotesOpen';
import Achi from './components/Achievement/acheivement';

import Forum2 from './components/Forum/Forum2';
import Slog from './components/login forms/Slog';
import Tlog from './components/login forms/Tlog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Attendance/Attendance",
    element: <Attendance />, // Add corresponding components here
  },
  {
    path: "/Statistics/Statistics",
    element: <Statistics />,
  },
  {
    path: "/Notes/NotesOpen",
    element: <NotesOpen />,
  },
  {
    path: "/Achievement/achievement",
    element: <Achi />,
  },
  {
    path: "/Forum/Forum2",
    element: <Forum2 />,
  },
  {
    path: "/login forms/Slog",
    element: <Slog />,
  },
  {
    path: "/login forms/Tlog",
    element: <Tlog />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

reportWebVitals();
