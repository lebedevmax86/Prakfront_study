import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import { ApartmentPage } from './Pages/ApartmentPage';
import { ProfilePage } from './Pages/ProfilePage';
import { RegPage } from './Pages/RegPage';
import { NoteFoundPage } from './Pages/NotFoundPage';
import { HomePage } from './Pages/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="apartment/:apartmentId" element={<ApartmentPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="reg" element={<RegPage />} />
        <Route path="*" element={<NoteFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
