import { prisma } from './db'

export async function logActivity(action: string, section: string, details = '') {
  try {
    await prisma.activityLog.create({ data: { action, section, details } })
  } catch {
    // Non-critical — don't throw
  }
}
