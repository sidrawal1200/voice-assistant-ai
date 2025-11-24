import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import { getUserByEmail, putUser } from './lib/dynamo'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret'

function json(statusCode: number, body: any): APIGatewayProxyResult {
  return { statusCode, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }
}

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const path = event.path || '/'
  const method = (event.httpMethod || 'GET').toUpperCase()

  try {
    if (path === '/auth/register' && method === 'POST') {
      const body = event.body ? JSON.parse(event.body) : {}
      const { email, password } = body
      if (!email || !password) return json(400, { error: 'email and password required' })
      const existing = await getUserByEmail(email)
      if (existing) return json(409, { error: 'user exists' })
      const salt = bcrypt.genSaltSync(10)
      const hash = bcrypt.hashSync(password, salt)
      const user = { email, passwordHash: hash, createdAt: new Date().toISOString() }
      await putUser(user)
      return json(201, { ok: true })
    }

    if (path === '/auth/login' && method === 'POST') {
      const body = event.body ? JSON.parse(event.body) : {}
      const { email, password } = body
      if (!email || !password) return json(400, { error: 'email and password required' })
      const user = await getUserByEmail(email)
      if (!user) return json(401, { error: 'invalid credentials' })
      const valid = bcrypt.compareSync(password, user.passwordHash)
      if (!valid) return json(401, { error: 'invalid credentials' })
      const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '7d' })
      return json(200, { token })
    }

    if (path === '/health' && method === 'GET') {
      return json(200, { status: 'ok' })
    }

    // Demo fallback route for frontend preview
    if (method === 'GET') {
      return json(200, { message: 'VA Portal backend (demo) — implement endpoints for production' })
    }

    return json(404, { error: 'not found' })
  } catch (err: any) {
    return json(500, { error: err.message || 'server error' })
  }
}
