import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ClassroomProvider } from '../src/context/context.jsx';
import { AnnouncementsProvider } from '../src/context/Announcements.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClassroomProvider>
    <AnnouncementsProvider>
      <App />
      </AnnouncementsProvider>
    </ClassroomProvider>
  </StrictMode>,
);
