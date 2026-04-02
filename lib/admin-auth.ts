import { cookies } from 'next/headers'
import { verifyToken, COOKIE_NAME } from './auth'

export async function requireAdmin() {
  const cookieStore = await cookies()
  const token = cookieStore.get(COOKIE_NAME)?.value
  if (!token) return null
  return verifyToken(token)
}
