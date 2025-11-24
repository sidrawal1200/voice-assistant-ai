import React from 'react'
import { NavLink } from 'react-router-dom'

const items = [
  { to: '/', label: 'Dashboard' },
  { to: '/kb', label: 'Knowledge Base' },
  { to: '/voice', label: 'Voice Selection' },
  { to: '/calls', label: 'Call Recordings' },
  { to: '/settings', label: 'Client Settings' },
]

export default function Sidebar() {
  return (
    <aside className="w-64 p-6 border-r border-gray-800">
      <nav className="flex flex-col gap-3">
        {items.map((it) => (
          <NavLink
            key={it.to}
            to={it.to}
            className={({ isActive }) =>
              `block px-3 py-2 rounded ${isActive ? 'bg-white text-black' : 'text-muted'}`
            }
          >
            {it.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
