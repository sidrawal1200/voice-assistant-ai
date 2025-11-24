import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

export default function App() {
  return (
    <div className="min-h-screen bg-blackbg text-white font-sans">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8 bg-surface min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
