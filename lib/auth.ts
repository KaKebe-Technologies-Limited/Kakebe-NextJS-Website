import { SignJWT, jwtVerify } from 'jose'

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET ?? 'fallback-secret-change-in-production'
)

export interface AdminTokenPayload {
  adminId: number
  email: string
}

export async function signToken(payload: AdminTokenPayload): Promise<string> {
  return new SignJWT(payload as unknown as Record<string, unknown>)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(secret)
}

export async function verifyToken(token: string): Promise<AdminTokenPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secret)
    return payload as unknown as AdminTokenPayload
  } catch {
    return null
  }
}

export const COOKIE_NAME = 'admin_token'
