import { prisma } from './db'
import type { SiteConfig, TeamMember, Program, Project, Innovator, Metric, Value } from './types'

function safeJsonParse<T>(str: string, fallback: T): T {
  try { return JSON.parse(str) } catch { return fallback }
}

const fallbackSiteConfig: SiteConfig = {
  name: 'Kakebe Technologies',
  tagline: 'Building the Next Gen of Innovators',
  description: 'An innovation hub where young technologists are equipped, mentored, and launched into the future.',
  email: 'service@kakebe.tech',
  phone: '0393249845',
  address: 'Plot 43 Inomo Road, Lira City',
  social: { twitter: '', linkedin: '', github: '' },
}

export async function getSiteConfig(): Promise<SiteConfig> {
  try {
    const config = await prisma.siteConfig.findFirst()
    if (!config) return fallbackSiteConfig
    return {
      name: config.name,
      tagline: config.tagline,
      description: config.description,
      email: config.email,
      phone: config.phone,
      address: config.address,
      social: {
        twitter: config.twitter || undefined,
        linkedin: config.linkedin || undefined,
        github: config.github || undefined,
      },
    }
  } catch {
    return fallbackSiteConfig
  }
}

export async function getHeroSection() {
  const fallback = {
    headline: 'Building the Next Gen of Innovators',
    subheadline: 'An innovation hub where young technologists are equipped, mentored, and launched into the future.',
    cta1Label: 'Meet Our Innovators',
    cta1Href: '/innovators',
    cta2Label: 'Explore Programs',
    cta2Href: '/programs',
  }
  try {
    const h = await prisma.heroSection.findFirst()
    if (!h) return fallback
    return {
      headline: h.headline || fallback.headline,
      subheadline: h.subheadline || fallback.subheadline,
      cta1Label: h.cta1Label || fallback.cta1Label,
      cta1Href: h.cta1Href || fallback.cta1Href,
      cta2Label: h.cta2Label || fallback.cta2Label,
      cta2Href: h.cta2Href || fallback.cta2Href,
    }
  } catch {
    return fallback
  }
}

export async function getMetrics(): Promise<Metric[]> {
  try {
    const rows = await prisma.metric.findMany({ orderBy: { order: 'asc' } })
    return rows.map(m => ({
      label: m.label,
      value: parseFloat(m.value) || 0,
      suffix: m.suffix || undefined,
      prefix: m.prefix || undefined,
    }))
  } catch {
    return []
  }
}

export async function getValues(): Promise<Value[]> {
  try {
    const rows = await prisma.value.findMany({ orderBy: { order: 'asc' } })
    return rows.map(v => ({
      id: String(v.id),
      title: v.title,
      description: v.description,
      icon: v.icon || undefined,
    }))
  } catch {
    return []
  }
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const rows = await prisma.teamMember.findMany({ orderBy: { order: 'asc' } })
    return rows.map(m => ({
      id: String(m.id),
      name: m.name,
      role: m.role,
      category: safeJsonParse<TeamMember['category']>(m.categories, []),
      image: m.image,
      bio: m.bio,
      linkedin: m.linkedin || undefined,
      twitter: m.twitter || undefined,
    }))
  } catch {
    return []
  }
}

export async function getPrograms(): Promise<Program[]> {
  try {
    const rows = await prisma.program.findMany({ orderBy: { order: 'asc' } })
    return rows.map(p => ({
      id: String(p.id),
      title: p.title,
      description: p.description,
      icon: p.icon,
      features: safeJsonParse<string[]>(p.features, []),
    }))
  } catch {
    return []
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    const rows = await prisma.project.findMany({ orderBy: { order: 'asc' } })
    return rows.map(p => ({
      id: String(p.id),
      slug: p.slug,
      title: p.title,
      description: p.description,
      category: p.category,
      image: p.image,
      tags: safeJsonParse<string[]>(p.tags, []),
      innovators: safeJsonParse<string[]>(p.innovators, []),
    }))
  } catch {
    return []
  }
}

export async function getInnovators(): Promise<Innovator[]> {
  try {
    const rows = await prisma.innovator.findMany({ orderBy: { order: 'asc' } })
    return rows.map(i => ({
      id: String(i.id),
      slug: i.slug,
      name: i.name,
      tagline: i.tagline,
      image: i.image,
      bio: i.bio,
      projects: safeJsonParse<string[]>(i.projects, []),
      skills: safeJsonParse<string[]>(i.skills, []),
      quote: i.quote || undefined,
      featured: i.featured,
    }))
  } catch {
    return []
  }
}

export async function getInnovatorBySlug(slug: string): Promise<Innovator | null> {
  try {
    const i = await prisma.innovator.findUnique({ where: { slug } })
    if (!i) return null
    return {
      id: String(i.id),
      slug: i.slug,
      name: i.name,
      tagline: i.tagline,
      image: i.image,
      bio: i.bio,
      projects: safeJsonParse<string[]>(i.projects, []),
      skills: safeJsonParse<string[]>(i.skills, []),
      quote: i.quote || undefined,
      featured: i.featured,
    }
  } catch {
    return null
  }
}
