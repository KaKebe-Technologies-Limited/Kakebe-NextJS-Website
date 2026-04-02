
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.SiteConfigScalarFieldEnum = {
  id: 'id',
  name: 'name',
  tagline: 'tagline',
  description: 'description',
  email: 'email',
  phone: 'phone',
  address: 'address',
  twitter: 'twitter',
  linkedin: 'linkedin',
  github: 'github',
  faviconUrl: 'faviconUrl',
  logoUrl: 'logoUrl',
  primaryColor: 'primaryColor',
  formspreeId: 'formspreeId',
  updatedAt: 'updatedAt'
};

exports.Prisma.NavItemScalarFieldEnum = {
  id: 'id',
  label: 'label',
  href: 'href',
  order: 'order'
};

exports.Prisma.FooterConfigScalarFieldEnum = {
  id: 'id',
  brandText: 'brandText',
  copyrightName: 'copyrightName',
  exploreLinks: 'exploreLinks',
  programLinks: 'programLinks',
  updatedAt: 'updatedAt'
};

exports.Prisma.HeroSectionScalarFieldEnum = {
  id: 'id',
  headline: 'headline',
  subheadline: 'subheadline',
  cta1Label: 'cta1Label',
  cta1Href: 'cta1Href',
  cta2Label: 'cta2Label',
  cta2Href: 'cta2Href',
  imageUrl: 'imageUrl',
  updatedAt: 'updatedAt'
};

exports.Prisma.TeamMemberScalarFieldEnum = {
  id: 'id',
  name: 'name',
  role: 'role',
  categories: 'categories',
  image: 'image',
  bio: 'bio',
  linkedin: 'linkedin',
  twitter: 'twitter',
  order: 'order',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProgramScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  icon: 'icon',
  features: 'features',
  order: 'order',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProjectScalarFieldEnum = {
  id: 'id',
  slug: 'slug',
  title: 'title',
  description: 'description',
  category: 'category',
  image: 'image',
  tags: 'tags',
  innovators: 'innovators',
  order: 'order',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.InnovatorScalarFieldEnum = {
  id: 'id',
  slug: 'slug',
  name: 'name',
  tagline: 'tagline',
  image: 'image',
  bio: 'bio',
  projects: 'projects',
  skills: 'skills',
  quote: 'quote',
  featured: 'featured',
  order: 'order',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MetricScalarFieldEnum = {
  id: 'id',
  label: 'label',
  value: 'value',
  suffix: 'suffix',
  prefix: 'prefix',
  order: 'order'
};

exports.Prisma.ValueScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  icon: 'icon',
  order: 'order'
};

exports.Prisma.AboutContentScalarFieldEnum = {
  id: 'id',
  story: 'story',
  mission: 'mission',
  vision: 'vision',
  milestones: 'milestones',
  updatedAt: 'updatedAt'
};

exports.Prisma.PageSEOScalarFieldEnum = {
  id: 'id',
  page: 'page',
  title: 'title',
  description: 'description',
  ogImage: 'ogImage',
  updatedAt: 'updatedAt'
};

exports.Prisma.AdminUserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  passwordHash: 'passwordHash',
  updatedAt: 'updatedAt'
};

exports.Prisma.ActivityLogScalarFieldEnum = {
  id: 'id',
  action: 'action',
  section: 'section',
  details: 'details',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};


exports.Prisma.ModelName = {
  SiteConfig: 'SiteConfig',
  NavItem: 'NavItem',
  FooterConfig: 'FooterConfig',
  HeroSection: 'HeroSection',
  TeamMember: 'TeamMember',
  Program: 'Program',
  Project: 'Project',
  Innovator: 'Innovator',
  Metric: 'Metric',
  Value: 'Value',
  AboutContent: 'AboutContent',
  PageSEO: 'PageSEO',
  AdminUser: 'AdminUser',
  ActivityLog: 'ActivityLog'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
