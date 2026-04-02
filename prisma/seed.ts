import { PrismaClient } from '../lib/generated/prisma'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // ── Admin user ─────────────────────────────────────────────────────────────
  const passwordHash = await bcrypt.hash('admin123', 12)
  await prisma.adminUser.upsert({
    where: { id: 1 },
    update: {},
    create: { id: 1, email: process.env.ADMIN_EMAIL ?? 'admin@kakebe.tech', passwordHash },
  })
  console.log('✓ Admin user')

  // ── Site config ────────────────────────────────────────────────────────────
  await prisma.siteConfig.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: 'Kakebe Technologies',
      tagline: 'Building the Next Gen of Innovators',
      description: 'Innovation hub empowering the next generation of tech innovators in Uganda.',
      email: 'service@kakebe.tech',
      phone: '0393249845',
      address: 'Plot 43 Inomo Road, Lira City',
      twitter: '',
      linkedin: '',
      github: '',
      faviconUrl: '/favicon.png',
      logoUrl: '',
      primaryColor: '#dc2626',
      formspreeId: 'xkorrnno',
    },
  })
  console.log('✓ Site config')

  // ── Nav items ──────────────────────────────────────────────────────────────
  const navCount = await prisma.navItem.count()
  if (navCount === 0) {
    await prisma.navItem.createMany({
      data: [
        { label: 'Home', href: '/', order: 0 },
        { label: 'About', href: '/about', order: 1 },
        { label: 'Innovators', href: '/innovators', order: 2 },
        { label: 'Team', href: '/team', order: 3 },
        { label: 'Programs', href: '/programs', order: 4 },
        { label: 'Projects', href: '/projects', order: 5 },
        { label: 'Contact', href: '/contact', order: 6 },
      ],
    })
  }
  console.log('✓ Nav items')

  // ── Footer config ──────────────────────────────────────────────────────────
  await prisma.footerConfig.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      brandText: 'Empowering the next generation of innovators and entrepreneurs across Uganda.',
      copyrightName: 'Kakebe Technologies',
      exploreLinks: JSON.stringify([
        { label: 'About', href: '/about' },
        { label: 'Innovators', href: '/innovators' },
        { label: 'Team', href: '/team' },
        { label: 'Projects', href: '/projects' },
      ]),
      programLinks: JSON.stringify([
        { label: 'Technical Training', href: '/programs' },
        { label: 'Startup Incubation', href: '/programs' },
        { label: 'Tech Services', href: '/programs' },
      ]),
    },
  })
  console.log('✓ Footer config')

  // ── Hero section ───────────────────────────────────────────────────────────
  await prisma.heroSection.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      headline: 'Building the Next Gen of Innovators',
      subheadline: 'Kakebe Technologies empowers young innovators with the skills, mentorship, and resources to build transformative solutions.',
      cta1Label: 'Explore Programs',
      cta1Href: '/programs',
      cta2Label: 'Meet Our Team',
      cta2Href: '/team',
      imageUrl: '',
    },
  })
  console.log('✓ Hero section')

  // ── Impact metrics ─────────────────────────────────────────────────────────
  const metricsCount = await prisma.metric.count()
  if (metricsCount === 0) {
    await prisma.metric.createMany({
      data: [
        { label: 'Innovators', value: '250', suffix: '+', order: 0 },
        { label: 'Projects', value: '48', suffix: '', order: 1 },
        { label: 'Programs', value: '13', suffix: '', order: 2 },
        { label: 'Years Active', value: '5', suffix: '+', order: 3 },
      ],
    })
  }
  console.log('✓ Metrics')

  // ── Core values ────────────────────────────────────────────────────────────
  const valuesCount = await prisma.value.count()
  if (valuesCount === 0) {
    await prisma.value.createMany({
      data: [
        { title: 'Innovation', description: 'We foster creative thinking and novel approaches to solving real-world problems.', icon: '💡', order: 0 },
        { title: 'Collaboration', description: 'We believe in the power of teamwork and community-driven development.', icon: '🤝', order: 1 },
        { title: 'Excellence', description: 'We hold ourselves to the highest standards in everything we do.', icon: '⭐', order: 2 },
        { title: 'Impact', description: 'We measure our success by the positive change we create in our communities.', icon: '🎯', order: 3 },
      ],
    })
  }
  console.log('✓ Values')

  // ── About content ──────────────────────────────────────────────────────────
  await prisma.aboutContent.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      story: 'Kakebe Technologies was founded with a vision to transform the tech landscape in Uganda by nurturing local talent and fostering innovation.',
      mission: 'To empower the next generation of innovators and entrepreneurs in Uganda with world-class technical training, mentorship, and resources.',
      vision: 'A Uganda where every young person has access to the tools and knowledge needed to build transformative technology solutions.',
      milestones: JSON.stringify([
        { year: 2019, title: 'Founded', description: 'Kakebe Technologies was established in Lira City.' },
        { year: 2020, title: 'First Cohort', description: 'Graduated our first cohort of 25 innovators.' },
        { year: 2022, title: 'TUY Partnership', description: 'Partnered with TUY to expand our reach across Uganda.' },
        { year: 2024, title: '250+ Innovators', description: 'Reached a milestone of 250+ trained innovators.' },
      ]),
    },
  })
  console.log('✓ About content')

  // ── Page SEO ───────────────────────────────────────────────────────────────
  const pages = ['home', 'about', 'programs', 'projects', 'team', 'innovators', 'contact']
  for (const page of pages) {
    await prisma.pageSEO.upsert({
      where: { page },
      update: {},
      create: {
        page,
        title: `${page.charAt(0).toUpperCase() + page.slice(1)} | Kakebe Technologies`,
        description: 'Kakebe Technologies — Building the Next Gen of Innovators in Uganda.',
        ogImage: '',
      },
    })
  }
  console.log('✓ Page SEO')

  // ── Team members ───────────────────────────────────────────────────────────
  const teamCount = await prisma.teamMember.count()
  if (teamCount === 0) {
    await prisma.teamMember.createMany({
      data: [
        { name: 'Sedrick Otolo', role: 'Director', categories: JSON.stringify(['Management']), image: '/images/team/sedrickotolo.JPG', bio: 'Sedrick is the Director of Kakebe, a platform that creates a space where Ugandan innovators could build world-class technology.', linkedin: 'https://linkedin.com/in/sedrickotolo', order: 0 },
        { name: 'Patrick Okello', role: 'CTO & Cofounder', categories: JSON.stringify(['Management']), image: '/images/team/pk.jpeg', bio: 'Patrick is the Chief Technology Officer and Cofounder of Kakebe, leading technical strategy and innovation.', linkedin: 'https://linkedin.com/in/patrickokello', order: 1 },
        { name: 'Jerome Oscar', role: 'Administrator', categories: JSON.stringify(['Management']), image: '/images/team/jerome.jpeg', bio: 'Jerome designs curriculum and mentorship pathways for innovators at every stage.', linkedin: 'https://linkedin.com/in/jeromeoscar', order: 2 },
        { name: 'Amule Naomi', role: 'Assistant Administrator', categories: JSON.stringify(['Management']), image: '/images/team/naomi.jpeg', bio: 'Naomi supports administrative functions to ensure smooth operations at Kakebe.', linkedin: 'https://linkedin.com/in/amulenaomi', order: 3 },
        { name: 'Bodo Desderio', role: 'Senior Software Developer', categories: JSON.stringify(['Management', 'Developers']), image: '/images/team/bododesderio.jpeg', bio: 'Bodo is a senior software developer at Kakebe, contributing to the development of innovative web applications.', linkedin: 'https://linkedin.com/in/bododesderio', order: 4 },
        { name: 'Okello Gerald Lhasto', role: 'Head of Marketing', categories: JSON.stringify(['Management', 'Marketing Team']), image: '/images/team/LHasto.jpeg', bio: "Okello Gerald leads Kakebe's marketing initiatives and helps promote the platform to innovators.", linkedin: 'https://linkedin.com/in/okellogerald', order: 5 },
        { name: 'Emeju Emmanuel Trevor', role: 'Head of Digital Marketing & Content Creation', categories: JSON.stringify(['Marketing Team', 'Digital Content']), image: '/images/team/trevor.jpeg', bio: "Emeju leads digital marketing and content creation initiatives to promote Kakebe's mission and impact.", linkedin: 'https://linkedin.com/in/emejuemmanuel', order: 6 },
        { name: 'Dovin Ssenyange', role: 'Software Engineer', categories: JSON.stringify(['Developers']), image: '/images/default-avatar.jpg', bio: 'Dovin is a software engineer at Kakebe, contributing to the development of innovative web applications.', linkedin: 'https://linkedin.com/in/dovinssenyange', order: 7 },
        { name: 'Ayo Philip Odongo', role: 'Web Developer', categories: JSON.stringify(['Developers']), image: '/images/team/Phillip.jpeg', bio: 'Ayo Philip is a web developer focused on building responsive and user-friendly web applications at Kakebe.', linkedin: 'https://ug.linkedin.com/in/philipayo', order: 8 },
        { name: 'Munu Preston', role: 'JavaScript Developer', categories: JSON.stringify(['Developers']), image: '/images/default-avatar.jpg', bio: 'Preston is a skilled JavaScript developer contributing to various Kakebe projects.', linkedin: 'https://linkedin.com/in/prestonmunu', order: 9 },
        { name: 'Atim Patricia Prosper', role: 'Digital Content Specialist', categories: JSON.stringify(['Digital Content']), image: '/images/team/prosper.jpeg', bio: 'Patricia creates compelling digital content to showcase Kakebe initiatives.', linkedin: '', order: 10 },
        { name: 'Opio Dickens Agona', role: 'Digital Content Creator', categories: JSON.stringify(['Digital Content']), image: '/images/team/maker.jpeg', bio: 'Dickens is a talented digital content creator at Kakebe, producing engaging visual content.', linkedin: 'https://linkedin.com/in/opiodickensagona', order: 11 },
        { name: 'Daniella', role: 'Content Writer', categories: JSON.stringify(['Digital Content']), image: '/images/default-avatar.jpg', bio: "Daniella writes engaging content for Kakebe's digital platforms.", linkedin: '', order: 12 },
        { name: 'Benzy', role: 'Video Editor', categories: JSON.stringify(['Digital Content']), image: '/images/default-avatar.jpg', bio: "Benzy produces and edits video content for Kakebe's marketing.", linkedin: '', order: 13 },
      ],
    })
  }
  console.log('✓ Team members')

  // ── Programs ───────────────────────────────────────────────────────────────
  const programsCount = await prisma.program.count()
  if (programsCount === 0) {
    await prisma.program.createMany({
      data: [
        { title: 'Mwonya Music Platform', description: 'A digital music streaming and distribution platform showcasing Northern Ugandan talent, enabling artists to monetize their music and reach global audiences.', icon: '🎵', features: JSON.stringify(['50,000+ downloads on Google Play', '4,000+ active users', '60+ registered artists', '300+ songs streamed monthly']), order: 0 },
        { title: 'Kakebe Shop Online', description: 'A secure online marketplace enabling SMEs, vendors, and youth entrepreneurs to sell products and services across Northern Uganda.', icon: '🛒', features: JSON.stringify(['Launch date: December 2025', '10+ suppliers onboarded pre-launch', 'Target: 100,000 users', 'Cities: Gulu, Arua, Soroti']), order: 1 },
        { title: 'Oroma TV', description: 'A digital streaming platform that amplifies local content, entertainment, debates, and stories from Northern Uganda.', icon: '📺', features: JSON.stringify(['70,000+ followers in 5 months', 'Partnership with Q-Investment Ltd', 'Studio setup in progress', 'Full TV production rollout coming']), order: 2 },
        { title: 'Deaf Assist App', description: 'A mobile inclusion tool that connects the deaf and hearing communities through automated sign-language interpretation.', icon: '🤟', features: JSON.stringify(['Sign-language interpretation', 'Communication tools', 'Access to services', 'Target: 10,000+ users first year']), order: 3 },
        { title: 'Kakebe Tech Camp', description: 'A regional tech bootcamp empowering young innovators with AI, robotics, software development, and entrepreneurship skills.', icon: '🏕️', features: JSON.stringify(['256 participants in first edition', 'Second edition planned: December 2025', 'Goal: Train 1,000+ youths in 3 years', 'Skills: AI, Robotics, Software Dev']), order: 4 },
        { title: 'Mentor Me 360', description: 'A structured coaching and mentorship initiative connecting students to professionals, innovators, and entrepreneurs.', icon: '👥', features: JSON.stringify(['Running in Lira University', '800+ students mentored since inception', 'Partner institutions', 'Career path shaping']), order: 5 },
        { title: 'Digital Marketing Program', description: 'A service-led initiative supporting businesses with brand visibility, digital transformation, and online sales strategies.', icon: '📱', features: JSON.stringify(['50+ businesses supported', 'Millions of impressions', 'TikTok, Facebook, and web campaigns', 'Regional digital engagement']), order: 6 },
        { title: 'School Technology Programs', description: 'Tech training delivered to secondary and primary institutions in robotics, software development, and digital literacy.', icon: '🏫', features: JSON.stringify(['5 schools trained', '1,000+ learners directly skilled', 'Robotics & coding', 'Digital literacy']), order: 7 },
        { title: 'In-house Skilling & Internship Hub', description: 'A continuous learning program providing hands-on ICT, design, robotics, and entrepreneurship training at the Kakebe tech hub.', icon: '💼', features: JSON.stringify(['350+ young people trained', '40+ interns placed', 'Hands-on ICT training', 'Real workforce pipeline']), order: 8 },
        { title: 'Lango Innovation Challenge', description: 'A regional innovation program engaging secondary schools and institutions to address local challenges through creative solutions.', icon: '🏆', features: JSON.stringify(['Inaugural edition: 2022', '120 participating youths', '10+ schools participated', 'Grassroots innovation']), order: 9 },
        { title: 'Corporate IT Training', description: 'IT training initiatives extending beyond organizational boundaries to reach youths, offices, corporations, and communities in the Lango Region.', icon: '💻', features: JSON.stringify(['Computer package training', 'Programming essentials', '5-year MOU with Lira University', 'Tech support for students']), order: 10 },
        { title: 'Robotics Trainings', description: 'Programs harnessing robotics to ignite passion for innovation and technology among students in schools through hands-on training.', icon: '🤖', features: JSON.stringify(['5 schools operational', 'Hands-on training', 'Nurturing future robotics experts', 'Youth engagement']), order: 11 },
        { title: 'Tech Talks', description: 'Bi-monthly tech talks bringing together youths from universities, institutions, and businesses to discuss technology and techno-entrepreneurship.', icon: '🎤', features: JSON.stringify(['60-80 youths per session', '1000+ total attendance', '120+ students mentored', 'Google & Polkadot partnership']), order: 12 },
      ],
    })
  }
  console.log('✓ Programs')

  // ── Projects ───────────────────────────────────────────────────────────────
  const projectsCount = await prisma.project.count()
  if (projectsCount === 0) {
    await prisma.project.createMany({
      data: [
        { slug: 'kakebe-shop', title: 'Kakebe Shop', description: 'An integrated e-commerce platform designed to bridge the gap between Ugandan innovators and the global market.', category: 'Internal Projects', image: '/images/projects/kakebe-shop.png', tags: JSON.stringify(['E-commerce', 'Next.js', 'Payment Integration', 'Supply Chain']), innovators: JSON.stringify(['Sedrick Otolo']), order: 0 },
        { slug: 'mwonya-music', title: 'Mwonya Music Platform', description: 'A digital music streaming and distribution platform showcasing Northern Ugandan talent, enabling artists to monetize their music.', category: 'Internal Projects', image: '/images/projects/mwonya.png', tags: JSON.stringify(['Music Streaming', 'Digital Platform', 'Artists']), innovators: JSON.stringify(['Kakebe Team']), order: 1 },
        { slug: 'oroma-tv', title: 'Oroma TV', description: 'A digital streaming platform that amplifies local content, entertainment, debates, and stories from Northern Uganda.', category: 'Internal Projects', image: '/images/projects/aroma.jpg', tags: JSON.stringify(['Streaming', 'Local Content', 'Entertainment']), innovators: JSON.stringify(['Kakebe Team']), order: 2 },
        { slug: 'deaf-assist-app', title: 'Deaf Assist App', description: 'A mobile inclusion tool that connects the deaf and hearing communities through automated sign-language interpretation.', category: 'Internal Projects', image: '/images/projects/deaf.jpg', tags: JSON.stringify(['Accessibility', 'Mobile App', 'Sign Language']), innovators: JSON.stringify(['Kakebe Team']), order: 3 },
        { slug: 'soilla-app', title: 'Soilla App', description: 'An AI-powered app for farmers to improve agricultural productivity and decision-making.', category: 'Internal Projects', image: '/images/projects/soilla.jpg', tags: JSON.stringify(['AI', 'Agriculture', 'Mobile App']), innovators: JSON.stringify(['Kakebe Team']), order: 4 },
        { slug: 'irecover-app', title: 'iRecover App', description: 'A mobile application designed to help users track and recover from various health and wellness challenges.', category: 'Internal Projects', image: '/images/projects/recover.jpg', tags: JSON.stringify(['Mobile App', 'Health', 'Wellness']), innovators: JSON.stringify(['Kakebe Team']), order: 5 },
        { slug: 'rimotly-app', title: 'Rimotly App', description: 'Winner of NASA App Challenge 2024 — an innovative solution addressing environmental challenges.', category: 'Internal Projects', image: '/images/projects/rimotly.jpg', tags: JSON.stringify(['NASA Challenge', 'Innovation', 'Environmental']), innovators: JSON.stringify(['Kakebe Team']), order: 6 },
      ],
    })
  }
  console.log('✓ Projects')

  // ── Innovators ─────────────────────────────────────────────────────────────
  const innovatorsCount = await prisma.innovator.count()
  if (innovatorsCount === 0) {
    await prisma.innovator.createMany({
      data: [
        { slug: 'derick-desderio', name: 'Derick Desderio', tagline: 'Full-Stack Developer & AI Enthusiast', image: '/images/innovators/bododesderio.jpeg', bio: 'Derick is building intelligent automation tools for small businesses across East Uganda. He believes AI should be accessible to everyone.', projects: JSON.stringify(['SmartVendor', 'AgriPredict']), skills: JSON.stringify(['Python', 'React', 'TensorFlow', 'PostgreSQL']), quote: 'Technology is only powerful when it solves real problems for real people.', featured: true, order: 0 },
        { slug: 'jerome-oscar', name: 'Jerome Oscar', tagline: 'IoT Engineer & Hardware Hacker', image: '/images/team/jerome.jpeg', bio: 'Jerome designs low-cost IoT solutions for urban farming and resource management.', projects: JSON.stringify(['FarmSense', 'WaterWatch']), skills: JSON.stringify(['Arduino', 'C++', 'MQTT', 'Node.js']), quote: '', featured: true, order: 1 },
      ],
    })
  }
  console.log('✓ Innovators')

  console.log('\n✅ Database seeded!')
  console.log('   Login: admin@kakebe.tech / admin123')
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(async () => { await prisma.$disconnect() })
