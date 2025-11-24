import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

export default function App() {
  return (
  <div className="min-h-screen font-sans bg-blackbg">
      <Header />
      <div className="flex">
        <Sidebar />
      <main className="flex-1 p-6 bevelled">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
