import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/index.css'
import App from './App'
import Dashboard from './pages/Dashboard'
import KB from './pages/KB'
import Voice from './pages/Voice'
import Calls from './pages/Calls'
import Settings from './pages/Settings'
import Login from './pages/Login'
import Register from './pages/Register'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path="kb" element={<KB />} />
          <Route path="voice" element={<Voice />} />
          <Route path="calls" element={<Calls />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
