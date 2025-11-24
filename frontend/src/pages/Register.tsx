import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { post } from '../lib/api'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    try {
      await post('/auth/register', { email, password })
      navigate('/login')
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-serif mb-4">Create account</h1>
      <form onSubmit={handleSubmit} className="p-6 bg-black rounded">
        <label className="block mb-2 text-muted">Email</label>
        <input required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 text-black" />
        <label className="block mt-4 mb-2 text-muted">Password</label>
        <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 text-black" />
        {error && <div className="mt-3 text-red-400">{error}</div>}
        <div className="mt-4 flex justify-between items-center">
          <button className="px-4 py-2 border rounded">Create account</button>
          <Link to="/login" className="text-sm text-muted">Sign in</Link>
        </div>
      </form>
    </div>
  )
}
