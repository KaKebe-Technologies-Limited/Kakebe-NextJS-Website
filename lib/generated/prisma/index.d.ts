
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model SiteConfig
 * 
 */
export type SiteConfig = $Result.DefaultSelection<Prisma.$SiteConfigPayload>
/**
 * Model NavItem
 * 
 */
export type NavItem = $Result.DefaultSelection<Prisma.$NavItemPayload>
/**
 * Model FooterConfig
 * 
 */
export type FooterConfig = $Result.DefaultSelection<Prisma.$FooterConfigPayload>
/**
 * Model HeroSection
 * 
 */
export type HeroSection = $Result.DefaultSelection<Prisma.$HeroSectionPayload>
/**
 * Model TeamMember
 * 
 */
export type TeamMember = $Result.DefaultSelection<Prisma.$TeamMemberPayload>
/**
 * Model Program
 * 
 */
export type Program = $Result.DefaultSelection<Prisma.$ProgramPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Innovator
 * 
 */
export type Innovator = $Result.DefaultSelection<Prisma.$InnovatorPayload>
/**
 * Model Metric
 * 
 */
export type Metric = $Result.DefaultSelection<Prisma.$MetricPayload>
/**
 * Model Value
 * 
 */
export type Value = $Result.DefaultSelection<Prisma.$ValuePayload>
/**
 * Model AboutContent
 * 
 */
export type AboutContent = $Result.DefaultSelection<Prisma.$AboutContentPayload>
/**
 * Model PageSEO
 * 
 */
export type PageSEO = $Result.DefaultSelection<Prisma.$PageSEOPayload>
/**
 * Model AdminUser
 * 
 */
export type AdminUser = $Result.DefaultSelection<Prisma.$AdminUserPayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SiteConfigs
 * const siteConfigs = await prisma.siteConfig.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more SiteConfigs
   * const siteConfigs = await prisma.siteConfig.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.siteConfig`: Exposes CRUD operations for the **SiteConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SiteConfigs
    * const siteConfigs = await prisma.siteConfig.findMany()
    * ```
    */
  get siteConfig(): Prisma.SiteConfigDelegate<ExtArgs>;

  /**
   * `prisma.navItem`: Exposes CRUD operations for the **NavItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NavItems
    * const navItems = await prisma.navItem.findMany()
    * ```
    */
  get navItem(): Prisma.NavItemDelegate<ExtArgs>;

  /**
   * `prisma.footerConfig`: Exposes CRUD operations for the **FooterConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FooterConfigs
    * const footerConfigs = await prisma.footerConfig.findMany()
    * ```
    */
  get footerConfig(): Prisma.FooterConfigDelegate<ExtArgs>;

  /**
   * `prisma.heroSection`: Exposes CRUD operations for the **HeroSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HeroSections
    * const heroSections = await prisma.heroSection.findMany()
    * ```
    */
  get heroSection(): Prisma.HeroSectionDelegate<ExtArgs>;

  /**
   * `prisma.teamMember`: Exposes CRUD operations for the **TeamMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamMembers
    * const teamMembers = await prisma.teamMember.findMany()
    * ```
    */
  get teamMember(): Prisma.TeamMemberDelegate<ExtArgs>;

  /**
   * `prisma.program`: Exposes CRUD operations for the **Program** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Programs
    * const programs = await prisma.program.findMany()
    * ```
    */
  get program(): Prisma.ProgramDelegate<ExtArgs>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs>;

  /**
   * `prisma.innovator`: Exposes CRUD operations for the **Innovator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Innovators
    * const innovators = await prisma.innovator.findMany()
    * ```
    */
  get innovator(): Prisma.InnovatorDelegate<ExtArgs>;

  /**
   * `prisma.metric`: Exposes CRUD operations for the **Metric** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Metrics
    * const metrics = await prisma.metric.findMany()
    * ```
    */
  get metric(): Prisma.MetricDelegate<ExtArgs>;

  /**
   * `prisma.value`: Exposes CRUD operations for the **Value** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Values
    * const values = await prisma.value.findMany()
    * ```
    */
  get value(): Prisma.ValueDelegate<ExtArgs>;

  /**
   * `prisma.aboutContent`: Exposes CRUD operations for the **AboutContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AboutContents
    * const aboutContents = await prisma.aboutContent.findMany()
    * ```
    */
  get aboutContent(): Prisma.AboutContentDelegate<ExtArgs>;

  /**
   * `prisma.pageSEO`: Exposes CRUD operations for the **PageSEO** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PageSEOS
    * const pageSEOS = await prisma.pageSEO.findMany()
    * ```
    */
  get pageSEO(): Prisma.PageSEODelegate<ExtArgs>;

  /**
   * `prisma.adminUser`: Exposes CRUD operations for the **AdminUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminUsers
    * const adminUsers = await prisma.adminUser.findMany()
    * ```
    */
  get adminUser(): Prisma.AdminUserDelegate<ExtArgs>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "siteConfig" | "navItem" | "footerConfig" | "heroSection" | "teamMember" | "program" | "project" | "innovator" | "metric" | "value" | "aboutContent" | "pageSEO" | "adminUser" | "activityLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      SiteConfig: {
        payload: Prisma.$SiteConfigPayload<ExtArgs>
        fields: Prisma.SiteConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteConfigPayload>
          }
          findFirst: {
            args: Prisma.SiteConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteConfigPayload>
          }
          findMany: {
            args: Prisma.SiteConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteConfigPayload>[]
          }
          create: {
            args: Prisma.SiteConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteConfigPayload>
          }
          createMany: {
            args: Prisma.SiteConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteConfigPayload>[]
          }
          delete: {
            args: Prisma.SiteConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteConfigPayload>
          }
          update: {
            args: Prisma.SiteConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteConfigPayload>
          }
          deleteMany: {
            args: Prisma.SiteConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SiteConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteConfigPayload>
          }
          aggregate: {
            args: Prisma.SiteConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiteConfig>
          }
          groupBy: {
            args: Prisma.SiteConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteConfigCountArgs<ExtArgs>
            result: $Utils.Optional<SiteConfigCountAggregateOutputType> | number
          }
        }
      }
      NavItem: {
        payload: Prisma.$NavItemPayload<ExtArgs>
        fields: Prisma.NavItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NavItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NavItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavItemPayload>
          }
          findFirst: {
            args: Prisma.NavItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NavItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavItemPayload>
          }
          findMany: {
            args: Prisma.NavItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavItemPayload>[]
          }
          create: {
            args: Prisma.NavItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavItemPayload>
          }
          createMany: {
            args: Prisma.NavItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NavItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavItemPayload>[]
          }
          delete: {
            args: Prisma.NavItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavItemPayload>
          }
          update: {
            args: Prisma.NavItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavItemPayload>
          }
          deleteMany: {
            args: Prisma.NavItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NavItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NavItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavItemPayload>
          }
          aggregate: {
            args: Prisma.NavItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNavItem>
          }
          groupBy: {
            args: Prisma.NavItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<NavItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.NavItemCountArgs<ExtArgs>
            result: $Utils.Optional<NavItemCountAggregateOutputType> | number
          }
        }
      }
      FooterConfig: {
        payload: Prisma.$FooterConfigPayload<ExtArgs>
        fields: Prisma.FooterConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FooterConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FooterConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterConfigPayload>
          }
          findFirst: {
            args: Prisma.FooterConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FooterConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterConfigPayload>
          }
          findMany: {
            args: Prisma.FooterConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterConfigPayload>[]
          }
          create: {
            args: Prisma.FooterConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterConfigPayload>
          }
          createMany: {
            args: Prisma.FooterConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FooterConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterConfigPayload>[]
          }
          delete: {
            args: Prisma.FooterConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterConfigPayload>
          }
          update: {
            args: Prisma.FooterConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterConfigPayload>
          }
          deleteMany: {
            args: Prisma.FooterConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FooterConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FooterConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FooterConfigPayload>
          }
          aggregate: {
            args: Prisma.FooterConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFooterConfig>
          }
          groupBy: {
            args: Prisma.FooterConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<FooterConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.FooterConfigCountArgs<ExtArgs>
            result: $Utils.Optional<FooterConfigCountAggregateOutputType> | number
          }
        }
      }
      HeroSection: {
        payload: Prisma.$HeroSectionPayload<ExtArgs>
        fields: Prisma.HeroSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HeroSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HeroSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload>
          }
          findFirst: {
            args: Prisma.HeroSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HeroSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload>
          }
          findMany: {
            args: Prisma.HeroSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload>[]
          }
          create: {
            args: Prisma.HeroSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload>
          }
          createMany: {
            args: Prisma.HeroSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HeroSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload>[]
          }
          delete: {
            args: Prisma.HeroSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload>
          }
          update: {
            args: Prisma.HeroSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload>
          }
          deleteMany: {
            args: Prisma.HeroSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HeroSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HeroSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroSectionPayload>
          }
          aggregate: {
            args: Prisma.HeroSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHeroSection>
          }
          groupBy: {
            args: Prisma.HeroSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<HeroSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.HeroSectionCountArgs<ExtArgs>
            result: $Utils.Optional<HeroSectionCountAggregateOutputType> | number
          }
        }
      }
      TeamMember: {
        payload: Prisma.$TeamMemberPayload<ExtArgs>
        fields: Prisma.TeamMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          findFirst: {
            args: Prisma.TeamMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          findMany: {
            args: Prisma.TeamMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          create: {
            args: Prisma.TeamMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          createMany: {
            args: Prisma.TeamMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          delete: {
            args: Prisma.TeamMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          update: {
            args: Prisma.TeamMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          deleteMany: {
            args: Prisma.TeamMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeamMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          aggregate: {
            args: Prisma.TeamMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamMember>
          }
          groupBy: {
            args: Prisma.TeamMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamMemberCountArgs<ExtArgs>
            result: $Utils.Optional<TeamMemberCountAggregateOutputType> | number
          }
        }
      }
      Program: {
        payload: Prisma.$ProgramPayload<ExtArgs>
        fields: Prisma.ProgramFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgramFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgramFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          findFirst: {
            args: Prisma.ProgramFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgramFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          findMany: {
            args: Prisma.ProgramFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>[]
          }
          create: {
            args: Prisma.ProgramCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          createMany: {
            args: Prisma.ProgramCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgramCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>[]
          }
          delete: {
            args: Prisma.ProgramDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          update: {
            args: Prisma.ProgramUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          deleteMany: {
            args: Prisma.ProgramDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgramUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProgramUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          aggregate: {
            args: Prisma.ProgramAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgram>
          }
          groupBy: {
            args: Prisma.ProgramGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgramGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgramCountArgs<ExtArgs>
            result: $Utils.Optional<ProgramCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Innovator: {
        payload: Prisma.$InnovatorPayload<ExtArgs>
        fields: Prisma.InnovatorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InnovatorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InnovatorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InnovatorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InnovatorPayload>
          }
          findFirst: {
            args: Prisma.InnovatorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InnovatorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InnovatorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InnovatorPayload>
          }
          findMany: {
            args: Prisma.InnovatorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InnovatorPayload>[]
          }
          create: {
            args: Prisma.InnovatorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InnovatorPayload>
          }
          createMany: {
            args: Prisma.InnovatorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InnovatorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InnovatorPayload>[]
          }
          delete: {
            args: Prisma.InnovatorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InnovatorPayload>
          }
          update: {
            args: Prisma.InnovatorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InnovatorPayload>
          }
          deleteMany: {
            args: Prisma.InnovatorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InnovatorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InnovatorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InnovatorPayload>
          }
          aggregate: {
            args: Prisma.InnovatorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInnovator>
          }
          groupBy: {
            args: Prisma.InnovatorGroupByArgs<ExtArgs>
            result: $Utils.Optional<InnovatorGroupByOutputType>[]
          }
          count: {
            args: Prisma.InnovatorCountArgs<ExtArgs>
            result: $Utils.Optional<InnovatorCountAggregateOutputType> | number
          }
        }
      }
      Metric: {
        payload: Prisma.$MetricPayload<ExtArgs>
        fields: Prisma.MetricFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetricFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetricFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          findFirst: {
            args: Prisma.MetricFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetricFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          findMany: {
            args: Prisma.MetricFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>[]
          }
          create: {
            args: Prisma.MetricCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          createMany: {
            args: Prisma.MetricCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetricCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>[]
          }
          delete: {
            args: Prisma.MetricDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          update: {
            args: Prisma.MetricUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          deleteMany: {
            args: Prisma.MetricDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetricUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MetricUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          aggregate: {
            args: Prisma.MetricAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetric>
          }
          groupBy: {
            args: Prisma.MetricGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetricGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetricCountArgs<ExtArgs>
            result: $Utils.Optional<MetricCountAggregateOutputType> | number
          }
        }
      }
      Value: {
        payload: Prisma.$ValuePayload<ExtArgs>
        fields: Prisma.ValueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ValueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ValueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>
          }
          findFirst: {
            args: Prisma.ValueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ValueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>
          }
          findMany: {
            args: Prisma.ValueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>[]
          }
          create: {
            args: Prisma.ValueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>
          }
          createMany: {
            args: Prisma.ValueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ValueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>[]
          }
          delete: {
            args: Prisma.ValueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>
          }
          update: {
            args: Prisma.ValueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>
          }
          deleteMany: {
            args: Prisma.ValueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ValueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ValueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>
          }
          aggregate: {
            args: Prisma.ValueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateValue>
          }
          groupBy: {
            args: Prisma.ValueGroupByArgs<ExtArgs>
            result: $Utils.Optional<ValueGroupByOutputType>[]
          }
          count: {
            args: Prisma.ValueCountArgs<ExtArgs>
            result: $Utils.Optional<ValueCountAggregateOutputType> | number
          }
        }
      }
      AboutContent: {
        payload: Prisma.$AboutContentPayload<ExtArgs>
        fields: Prisma.AboutContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AboutContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AboutContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>
          }
          findFirst: {
            args: Prisma.AboutContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AboutContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>
          }
          findMany: {
            args: Prisma.AboutContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>[]
          }
          create: {
            args: Prisma.AboutContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>
          }
          createMany: {
            args: Prisma.AboutContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AboutContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>[]
          }
          delete: {
            args: Prisma.AboutContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>
          }
          update: {
            args: Prisma.AboutContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>
          }
          deleteMany: {
            args: Prisma.AboutContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AboutContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AboutContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutContentPayload>
          }
          aggregate: {
            args: Prisma.AboutContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAboutContent>
          }
          groupBy: {
            args: Prisma.AboutContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AboutContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AboutContentCountArgs<ExtArgs>
            result: $Utils.Optional<AboutContentCountAggregateOutputType> | number
          }
        }
      }
      PageSEO: {
        payload: Prisma.$PageSEOPayload<ExtArgs>
        fields: Prisma.PageSEOFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageSEOFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageSEOPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageSEOFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageSEOPayload>
          }
          findFirst: {
            args: Prisma.PageSEOFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageSEOPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageSEOFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageSEOPayload>
          }
          findMany: {
            args: Prisma.PageSEOFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageSEOPayload>[]
          }
          create: {
            args: Prisma.PageSEOCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageSEOPayload>
          }
          createMany: {
            args: Prisma.PageSEOCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PageSEOCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageSEOPayload>[]
          }
          delete: {
            args: Prisma.PageSEODeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageSEOPayload>
          }
          update: {
            args: Prisma.PageSEOUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageSEOPayload>
          }
          deleteMany: {
            args: Prisma.PageSEODeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PageSEOUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PageSEOUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageSEOPayload>
          }
          aggregate: {
            args: Prisma.PageSEOAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePageSEO>
          }
          groupBy: {
            args: Prisma.PageSEOGroupByArgs<ExtArgs>
            result: $Utils.Optional<PageSEOGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageSEOCountArgs<ExtArgs>
            result: $Utils.Optional<PageSEOCountAggregateOutputType> | number
          }
        }
      }
      AdminUser: {
        payload: Prisma.$AdminUserPayload<ExtArgs>
        fields: Prisma.AdminUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findFirst: {
            args: Prisma.AdminUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findMany: {
            args: Prisma.AdminUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          create: {
            args: Prisma.AdminUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          createMany: {
            args: Prisma.AdminUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          delete: {
            args: Prisma.AdminUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          update: {
            args: Prisma.AdminUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          deleteMany: {
            args: Prisma.AdminUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          aggregate: {
            args: Prisma.AdminUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminUser>
          }
          groupBy: {
            args: Prisma.AdminUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminUserCountArgs<ExtArgs>
            result: $Utils.Optional<AdminUserCountAggregateOutputType> | number
          }
        }
      }
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>
        fields: Prisma.ActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model SiteConfig
   */

  export type AggregateSiteConfig = {
    _count: SiteConfigCountAggregateOutputType | null
    _avg: SiteConfigAvgAggregateOutputType | null
    _sum: SiteConfigSumAggregateOutputType | null
    _min: SiteConfigMinAggregateOutputType | null
    _max: SiteConfigMaxAggregateOutputType | null
  }

  export type SiteConfigAvgAggregateOutputType = {
    id: number | null
  }

  export type SiteConfigSumAggregateOutputType = {
    id: number | null
  }

  export type SiteConfigMinAggregateOutputType = {
    id: number | null
    name: string | null
    tagline: string | null
    description: string | null
    email: string | null
    phone: string | null
    address: string | null
    twitter: string | null
    linkedin: string | null
    github: string | null
    faviconUrl: string | null
    logoUrl: string | null
    primaryColor: string | null
    formspreeId: string | null
    updatedAt: Date | null
  }

  export type SiteConfigMaxAggregateOutputType = {
    id: number | null
    name: string | null
    tagline: string | null
    description: string | null
    email: string | null
    phone: string | null
    address: string | null
    twitter: string | null
    linkedin: string | null
    github: string | null
    faviconUrl: string | null
    logoUrl: string | null
    primaryColor: string | null
    formspreeId: string | null
    updatedAt: Date | null
  }

  export type SiteConfigCountAggregateOutputType = {
    id: number
    name: number
    tagline: number
    description: number
    email: number
    phone: number
    address: number
    twitter: number
    linkedin: number
    github: number
    faviconUrl: number
    logoUrl: number
    primaryColor: number
    formspreeId: number
    updatedAt: number
    _all: number
  }


  export type SiteConfigAvgAggregateInputType = {
    id?: true
  }

  export type SiteConfigSumAggregateInputType = {
    id?: true
  }

  export type SiteConfigMinAggregateInputType = {
    id?: true
    name?: true
    tagline?: true
    description?: true
    email?: true
    phone?: true
    address?: true
    twitter?: true
    linkedin?: true
    github?: true
    faviconUrl?: true
    logoUrl?: true
    primaryColor?: true
    formspreeId?: true
    updatedAt?: true
  }

  export type SiteConfigMaxAggregateInputType = {
    id?: true
    name?: true
    tagline?: true
    description?: true
    email?: true
    phone?: true
    address?: true
    twitter?: true
    linkedin?: true
    github?: true
    faviconUrl?: true
    logoUrl?: true
    primaryColor?: true
    formspreeId?: true
    updatedAt?: true
  }

  export type SiteConfigCountAggregateInputType = {
    id?: true
    name?: true
    tagline?: true
    description?: true
    email?: true
    phone?: true
    address?: true
    twitter?: true
    linkedin?: true
    github?: true
    faviconUrl?: true
    logoUrl?: true
    primaryColor?: true
    formspreeId?: true
    updatedAt?: true
    _all?: true
  }

  export type SiteConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteConfig to aggregate.
     */
    where?: SiteConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteConfigs to fetch.
     */
    orderBy?: SiteConfigOrderByWithRelationInput | SiteConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SiteConfigs
    **/
    _count?: true | SiteConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SiteConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SiteConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteConfigMaxAggregateInputType
  }

  export type GetSiteConfigAggregateType<T extends SiteConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateSiteConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiteConfig[P]>
      : GetScalarType<T[P], AggregateSiteConfig[P]>
  }




  export type SiteConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteConfigWhereInput
    orderBy?: SiteConfigOrderByWithAggregationInput | SiteConfigOrderByWithAggregationInput[]
    by: SiteConfigScalarFieldEnum[] | SiteConfigScalarFieldEnum
    having?: SiteConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteConfigCountAggregateInputType | true
    _avg?: SiteConfigAvgAggregateInputType
    _sum?: SiteConfigSumAggregateInputType
    _min?: SiteConfigMinAggregateInputType
    _max?: SiteConfigMaxAggregateInputType
  }

  export type SiteConfigGroupByOutputType = {
    id: number
    name: string
    tagline: string
    description: string
    email: string
    phone: string
    address: string
    twitter: string
    linkedin: string
    github: string
    faviconUrl: string
    logoUrl: string
    primaryColor: string
    formspreeId: string
    updatedAt: Date
    _count: SiteConfigCountAggregateOutputType | null
    _avg: SiteConfigAvgAggregateOutputType | null
    _sum: SiteConfigSumAggregateOutputType | null
    _min: SiteConfigMinAggregateOutputType | null
    _max: SiteConfigMaxAggregateOutputType | null
  }

  type GetSiteConfigGroupByPayload<T extends SiteConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteConfigGroupByOutputType[P]>
            : GetScalarType<T[P], SiteConfigGroupByOutputType[P]>
        }
      >
    >


  export type SiteConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tagline?: boolean
    description?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    twitter?: boolean
    linkedin?: boolean
    github?: boolean
    faviconUrl?: boolean
    logoUrl?: boolean
    primaryColor?: boolean
    formspreeId?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteConfig"]>

  export type SiteConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tagline?: boolean
    description?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    twitter?: boolean
    linkedin?: boolean
    github?: boolean
    faviconUrl?: boolean
    logoUrl?: boolean
    primaryColor?: boolean
    formspreeId?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteConfig"]>

  export type SiteConfigSelectScalar = {
    id?: boolean
    name?: boolean
    tagline?: boolean
    description?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    twitter?: boolean
    linkedin?: boolean
    github?: boolean
    faviconUrl?: boolean
    logoUrl?: boolean
    primaryColor?: boolean
    formspreeId?: boolean
    updatedAt?: boolean
  }


  export type $SiteConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SiteConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      tagline: string
      description: string
      email: string
      phone: string
      address: string
      twitter: string
      linkedin: string
      github: string
      faviconUrl: string
      logoUrl: string
      primaryColor: string
      formspreeId: string
      updatedAt: Date
    }, ExtArgs["result"]["siteConfig"]>
    composites: {}
  }

  type SiteConfigGetPayload<S extends boolean | null | undefined | SiteConfigDefaultArgs> = $Result.GetResult<Prisma.$SiteConfigPayload, S>

  type SiteConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SiteConfigFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SiteConfigCountAggregateInputType | true
    }

  export interface SiteConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SiteConfig'], meta: { name: 'SiteConfig' } }
    /**
     * Find zero or one SiteConfig that matches the filter.
     * @param {SiteConfigFindUniqueArgs} args - Arguments to find a SiteConfig
     * @example
     * // Get one SiteConfig
     * const siteConfig = await prisma.siteConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteConfigFindUniqueArgs>(args: SelectSubset<T, SiteConfigFindUniqueArgs<ExtArgs>>): Prisma__SiteConfigClient<$Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SiteConfig that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SiteConfigFindUniqueOrThrowArgs} args - Arguments to find a SiteConfig
     * @example
     * // Get one SiteConfig
     * const siteConfig = await prisma.siteConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteConfigClient<$Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SiteConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteConfigFindFirstArgs} args - Arguments to find a SiteConfig
     * @example
     * // Get one SiteConfig
     * const siteConfig = await prisma.siteConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteConfigFindFirstArgs>(args?: SelectSubset<T, SiteConfigFindFirstArgs<ExtArgs>>): Prisma__SiteConfigClient<$Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SiteConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteConfigFindFirstOrThrowArgs} args - Arguments to find a SiteConfig
     * @example
     * // Get one SiteConfig
     * const siteConfig = await prisma.siteConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteConfigClient<$Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SiteConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SiteConfigs
     * const siteConfigs = await prisma.siteConfig.findMany()
     * 
     * // Get first 10 SiteConfigs
     * const siteConfigs = await prisma.siteConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteConfigWithIdOnly = await prisma.siteConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteConfigFindManyArgs>(args?: SelectSubset<T, SiteConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SiteConfig.
     * @param {SiteConfigCreateArgs} args - Arguments to create a SiteConfig.
     * @example
     * // Create one SiteConfig
     * const SiteConfig = await prisma.siteConfig.create({
     *   data: {
     *     // ... data to create a SiteConfig
     *   }
     * })
     * 
     */
    create<T extends SiteConfigCreateArgs>(args: SelectSubset<T, SiteConfigCreateArgs<ExtArgs>>): Prisma__SiteConfigClient<$Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SiteConfigs.
     * @param {SiteConfigCreateManyArgs} args - Arguments to create many SiteConfigs.
     * @example
     * // Create many SiteConfigs
     * const siteConfig = await prisma.siteConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteConfigCreateManyArgs>(args?: SelectSubset<T, SiteConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SiteConfigs and returns the data saved in the database.
     * @param {SiteConfigCreateManyAndReturnArgs} args - Arguments to create many SiteConfigs.
     * @example
     * // Create many SiteConfigs
     * const siteConfig = await prisma.siteConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SiteConfigs and only return the `id`
     * const siteConfigWithIdOnly = await prisma.siteConfig.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SiteConfig.
     * @param {SiteConfigDeleteArgs} args - Arguments to delete one SiteConfig.
     * @example
     * // Delete one SiteConfig
     * const SiteConfig = await prisma.siteConfig.delete({
     *   where: {
     *     // ... filter to delete one SiteConfig
     *   }
     * })
     * 
     */
    delete<T extends SiteConfigDeleteArgs>(args: SelectSubset<T, SiteConfigDeleteArgs<ExtArgs>>): Prisma__SiteConfigClient<$Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SiteConfig.
     * @param {SiteConfigUpdateArgs} args - Arguments to update one SiteConfig.
     * @example
     * // Update one SiteConfig
     * const siteConfig = await prisma.siteConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteConfigUpdateArgs>(args: SelectSubset<T, SiteConfigUpdateArgs<ExtArgs>>): Prisma__SiteConfigClient<$Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SiteConfigs.
     * @param {SiteConfigDeleteManyArgs} args - Arguments to filter SiteConfigs to delete.
     * @example
     * // Delete a few SiteConfigs
     * const { count } = await prisma.siteConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteConfigDeleteManyArgs>(args?: SelectSubset<T, SiteConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SiteConfigs
     * const siteConfig = await prisma.siteConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteConfigUpdateManyArgs>(args: SelectSubset<T, SiteConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SiteConfig.
     * @param {SiteConfigUpsertArgs} args - Arguments to update or create a SiteConfig.
     * @example
     * // Update or create a SiteConfig
     * const siteConfig = await prisma.siteConfig.upsert({
     *   create: {
     *     // ... data to create a SiteConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SiteConfig we want to update
     *   }
     * })
     */
    upsert<T extends SiteConfigUpsertArgs>(args: SelectSubset<T, SiteConfigUpsertArgs<ExtArgs>>): Prisma__SiteConfigClient<$Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SiteConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteConfigCountArgs} args - Arguments to filter SiteConfigs to count.
     * @example
     * // Count the number of SiteConfigs
     * const count = await prisma.siteConfig.count({
     *   where: {
     *     // ... the filter for the SiteConfigs we want to count
     *   }
     * })
    **/
    count<T extends SiteConfigCountArgs>(
      args?: Subset<T, SiteConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SiteConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SiteConfigAggregateArgs>(args: Subset<T, SiteConfigAggregateArgs>): Prisma.PrismaPromise<GetSiteConfigAggregateType<T>>

    /**
     * Group by SiteConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SiteConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteConfigGroupByArgs['orderBy'] }
        : { orderBy?: SiteConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SiteConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SiteConfig model
   */
  readonly fields: SiteConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SiteConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SiteConfig model
   */ 
  interface SiteConfigFieldRefs {
    readonly id: FieldRef<"SiteConfig", 'Int'>
    readonly name: FieldRef<"SiteConfig", 'String'>
    readonly tagline: FieldRef<"SiteConfig", 'String'>
    readonly description: FieldRef<"SiteConfig", 'String'>
    readonly email: FieldRef<"SiteConfig", 'String'>
    readonly phone: FieldRef<"SiteConfig", 'String'>
    readonly address: FieldRef<"SiteConfig", 'String'>
    readonly twitter: FieldRef<"SiteConfig", 'String'>
    readonly linkedin: FieldRef<"SiteConfig", 'String'>
    readonly github: FieldRef<"SiteConfig", 'String'>
    readonly faviconUrl: FieldRef<"SiteConfig", 'String'>
    readonly logoUrl: FieldRef<"SiteConfig", 'String'>
    readonly primaryColor: FieldRef<"SiteConfig", 'String'>
    readonly formspreeId: FieldRef<"SiteConfig", 'String'>
    readonly updatedAt: FieldRef<"SiteConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SiteConfig findUnique
   */
  export type SiteConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteConfig
     */
    select?: SiteConfigSelect<ExtArgs> | null
    /**
     * Filter, which SiteConfig to fetch.
     */
    where: SiteConfigWhereUniqueInput
  }

  /**
   * SiteConfig findUniqueOrThrow
   */
  export type SiteConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteConfig
     */
    select?: SiteConfigSelect<ExtArgs> | null
    /**
     * Filter, which SiteConfig to fetch.
     */
    where: SiteConfigWhereUniqueInput
  }

  /**
   * SiteConfig findFirst
   */
  export type SiteConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteConfig
     */
    select?: SiteConfigSelect<ExtArgs> | null
    /**
     * Filter, which SiteConfig to fetch.
     */
    where?: SiteConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteConfigs to fetch.
     */
    orderBy?: SiteConfigOrderByWithRelationInput | SiteConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteConfigs.
     */
    cursor?: SiteConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteConfigs.
     */
    distinct?: SiteConfigScalarFieldEnum | SiteConfigScalarFieldEnum[]
  }

  /**
   * SiteConfig findFirstOrThrow
   */
  export type SiteConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteConfig
     */
    select?: SiteConfigSelect<ExtArgs> | null
    /**
     * Filter, which SiteConfig to fetch.
     */
    where?: SiteConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteConfigs to fetch.
     */
    orderBy?: SiteConfigOrderByWithRelationInput | SiteConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteConfigs.
     */
    cursor?: SiteConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteConfigs.
     */
    distinct?: SiteConfigScalarFieldEnum | SiteConfigScalarFieldEnum[]
  }

  /**
   * SiteConfig findMany
   */
  export type SiteConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteConfig
     */
    select?: SiteConfigSelect<ExtArgs> | null
    /**
     * Filter, which SiteConfigs to fetch.
     */
    where?: SiteConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteConfigs to fetch.
     */
    orderBy?: SiteConfigOrderByWithRelationInput | SiteConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SiteConfigs.
     */
    cursor?: SiteConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteConfigs.
     */
    skip?: number
    distinct?: SiteConfigScalarFieldEnum | SiteConfigScalarFieldEnum[]
  }

  /**
   * SiteConfig create
   */
  export type SiteConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteConfig
     */
    select?: SiteConfigSelect<ExtArgs> | null
    /**
     * The data needed to create a SiteConfig.
     */
    data: XOR<SiteConfigCreateInput, SiteConfigUncheckedCreateInput>
  }

  /**
   * SiteConfig createMany
   */
  export type SiteConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SiteConfigs.
     */
    data: SiteConfigCreateManyInput | SiteConfigCreateManyInput[]
  }

  /**
   * SiteConfig createManyAndReturn
   */
  export type SiteConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteConfig
     */
    select?: SiteConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SiteConfigs.
     */
    data: SiteConfigCreateManyInput | SiteConfigCreateManyInput[]
  }

  /**
   * SiteConfig update
   */
  export type SiteConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteConfig
     */
    select?: SiteConfigSelect<ExtArgs> | null
    /**
     * The data needed to update a SiteConfig.
     */
    data: XOR<SiteConfigUpdateInput, SiteConfigUncheckedUpdateInput>
    /**
     * Choose, which SiteConfig to update.
     */
    where: SiteConfigWhereUniqueInput
  }

  /**
   * SiteConfig updateMany
   */
  export type SiteConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SiteConfigs.
     */
    data: XOR<SiteConfigUpdateManyMutationInput, SiteConfigUncheckedUpdateManyInput>
    /**
     * Filter which SiteConfigs to update
     */
    where?: SiteConfigWhereInput
  }

  /**
   * SiteConfig upsert
   */
  export type SiteConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteConfig
     */
    select?: SiteConfigSelect<ExtArgs> | null
    /**
     * The filter to search for the SiteConfig to update in case it exists.
     */
    where: SiteConfigWhereUniqueInput
    /**
     * In case the SiteConfig found by the `where` argument doesn't exist, create a new SiteConfig with this data.
     */
    create: XOR<SiteConfigCreateInput, SiteConfigUncheckedCreateInput>
    /**
     * In case the SiteConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteConfigUpdateInput, SiteConfigUncheckedUpdateInput>
  }

  /**
   * SiteConfig delete
   */
  export type SiteConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteConfig
     */
    select?: SiteConfigSelect<ExtArgs> | null
    /**
     * Filter which SiteConfig to delete.
     */
    where: SiteConfigWhereUniqueInput
  }

  /**
   * SiteConfig deleteMany
   */
  export type SiteConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteConfigs to delete
     */
    where?: SiteConfigWhereInput
  }

  /**
   * SiteConfig without action
   */
  export type SiteConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteConfig
     */
    select?: SiteConfigSelect<ExtArgs> | null
  }


  /**
   * Model NavItem
   */

  export type AggregateNavItem = {
    _count: NavItemCountAggregateOutputType | null
    _avg: NavItemAvgAggregateOutputType | null
    _sum: NavItemSumAggregateOutputType | null
    _min: NavItemMinAggregateOutputType | null
    _max: NavItemMaxAggregateOutputType | null
  }

  export type NavItemAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type NavItemSumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type NavItemMinAggregateOutputType = {
    id: number | null
    label: string | null
    href: string | null
    order: number | null
  }

  export type NavItemMaxAggregateOutputType = {
    id: number | null
    label: string | null
    href: string | null
    order: number | null
  }

  export type NavItemCountAggregateOutputType = {
    id: number
    label: number
    href: number
    order: number
    _all: number
  }


  export type NavItemAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type NavItemSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type NavItemMinAggregateInputType = {
    id?: true
    label?: true
    href?: true
    order?: true
  }

  export type NavItemMaxAggregateInputType = {
    id?: true
    label?: true
    href?: true
    order?: true
  }

  export type NavItemCountAggregateInputType = {
    id?: true
    label?: true
    href?: true
    order?: true
    _all?: true
  }

  export type NavItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NavItem to aggregate.
     */
    where?: NavItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NavItems to fetch.
     */
    orderBy?: NavItemOrderByWithRelationInput | NavItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NavItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NavItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NavItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NavItems
    **/
    _count?: true | NavItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NavItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NavItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NavItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NavItemMaxAggregateInputType
  }

  export type GetNavItemAggregateType<T extends NavItemAggregateArgs> = {
        [P in keyof T & keyof AggregateNavItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNavItem[P]>
      : GetScalarType<T[P], AggregateNavItem[P]>
  }




  export type NavItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NavItemWhereInput
    orderBy?: NavItemOrderByWithAggregationInput | NavItemOrderByWithAggregationInput[]
    by: NavItemScalarFieldEnum[] | NavItemScalarFieldEnum
    having?: NavItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NavItemCountAggregateInputType | true
    _avg?: NavItemAvgAggregateInputType
    _sum?: NavItemSumAggregateInputType
    _min?: NavItemMinAggregateInputType
    _max?: NavItemMaxAggregateInputType
  }

  export type NavItemGroupByOutputType = {
    id: number
    label: string
    href: string
    order: number
    _count: NavItemCountAggregateOutputType | null
    _avg: NavItemAvgAggregateOutputType | null
    _sum: NavItemSumAggregateOutputType | null
    _min: NavItemMinAggregateOutputType | null
    _max: NavItemMaxAggregateOutputType | null
  }

  type GetNavItemGroupByPayload<T extends NavItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NavItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NavItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NavItemGroupByOutputType[P]>
            : GetScalarType<T[P], NavItemGroupByOutputType[P]>
        }
      >
    >


  export type NavItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    href?: boolean
    order?: boolean
  }, ExtArgs["result"]["navItem"]>

  export type NavItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    href?: boolean
    order?: boolean
  }, ExtArgs["result"]["navItem"]>

  export type NavItemSelectScalar = {
    id?: boolean
    label?: boolean
    href?: boolean
    order?: boolean
  }


  export type $NavItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NavItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      label: string
      href: string
      order: number
    }, ExtArgs["result"]["navItem"]>
    composites: {}
  }

  type NavItemGetPayload<S extends boolean | null | undefined | NavItemDefaultArgs> = $Result.GetResult<Prisma.$NavItemPayload, S>

  type NavItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NavItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NavItemCountAggregateInputType | true
    }

  export interface NavItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NavItem'], meta: { name: 'NavItem' } }
    /**
     * Find zero or one NavItem that matches the filter.
     * @param {NavItemFindUniqueArgs} args - Arguments to find a NavItem
     * @example
     * // Get one NavItem
     * const navItem = await prisma.navItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NavItemFindUniqueArgs>(args: SelectSubset<T, NavItemFindUniqueArgs<ExtArgs>>): Prisma__NavItemClient<$Result.GetResult<Prisma.$NavItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one NavItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NavItemFindUniqueOrThrowArgs} args - Arguments to find a NavItem
     * @example
     * // Get one NavItem
     * const navItem = await prisma.navItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NavItemFindUniqueOrThrowArgs>(args: SelectSubset<T, NavItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NavItemClient<$Result.GetResult<Prisma.$NavItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first NavItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavItemFindFirstArgs} args - Arguments to find a NavItem
     * @example
     * // Get one NavItem
     * const navItem = await prisma.navItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NavItemFindFirstArgs>(args?: SelectSubset<T, NavItemFindFirstArgs<ExtArgs>>): Prisma__NavItemClient<$Result.GetResult<Prisma.$NavItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first NavItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavItemFindFirstOrThrowArgs} args - Arguments to find a NavItem
     * @example
     * // Get one NavItem
     * const navItem = await prisma.navItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NavItemFindFirstOrThrowArgs>(args?: SelectSubset<T, NavItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__NavItemClient<$Result.GetResult<Prisma.$NavItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more NavItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NavItems
     * const navItems = await prisma.navItem.findMany()
     * 
     * // Get first 10 NavItems
     * const navItems = await prisma.navItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const navItemWithIdOnly = await prisma.navItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NavItemFindManyArgs>(args?: SelectSubset<T, NavItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NavItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a NavItem.
     * @param {NavItemCreateArgs} args - Arguments to create a NavItem.
     * @example
     * // Create one NavItem
     * const NavItem = await prisma.navItem.create({
     *   data: {
     *     // ... data to create a NavItem
     *   }
     * })
     * 
     */
    create<T extends NavItemCreateArgs>(args: SelectSubset<T, NavItemCreateArgs<ExtArgs>>): Prisma__NavItemClient<$Result.GetResult<Prisma.$NavItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many NavItems.
     * @param {NavItemCreateManyArgs} args - Arguments to create many NavItems.
     * @example
     * // Create many NavItems
     * const navItem = await prisma.navItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NavItemCreateManyArgs>(args?: SelectSubset<T, NavItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NavItems and returns the data saved in the database.
     * @param {NavItemCreateManyAndReturnArgs} args - Arguments to create many NavItems.
     * @example
     * // Create many NavItems
     * const navItem = await prisma.navItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NavItems and only return the `id`
     * const navItemWithIdOnly = await prisma.navItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NavItemCreateManyAndReturnArgs>(args?: SelectSubset<T, NavItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NavItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a NavItem.
     * @param {NavItemDeleteArgs} args - Arguments to delete one NavItem.
     * @example
     * // Delete one NavItem
     * const NavItem = await prisma.navItem.delete({
     *   where: {
     *     // ... filter to delete one NavItem
     *   }
     * })
     * 
     */
    delete<T extends NavItemDeleteArgs>(args: SelectSubset<T, NavItemDeleteArgs<ExtArgs>>): Prisma__NavItemClient<$Result.GetResult<Prisma.$NavItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one NavItem.
     * @param {NavItemUpdateArgs} args - Arguments to update one NavItem.
     * @example
     * // Update one NavItem
     * const navItem = await prisma.navItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NavItemUpdateArgs>(args: SelectSubset<T, NavItemUpdateArgs<ExtArgs>>): Prisma__NavItemClient<$Result.GetResult<Prisma.$NavItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more NavItems.
     * @param {NavItemDeleteManyArgs} args - Arguments to filter NavItems to delete.
     * @example
     * // Delete a few NavItems
     * const { count } = await prisma.navItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NavItemDeleteManyArgs>(args?: SelectSubset<T, NavItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NavItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NavItems
     * const navItem = await prisma.navItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NavItemUpdateManyArgs>(args: SelectSubset<T, NavItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NavItem.
     * @param {NavItemUpsertArgs} args - Arguments to update or create a NavItem.
     * @example
     * // Update or create a NavItem
     * const navItem = await prisma.navItem.upsert({
     *   create: {
     *     // ... data to create a NavItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NavItem we want to update
     *   }
     * })
     */
    upsert<T extends NavItemUpsertArgs>(args: SelectSubset<T, NavItemUpsertArgs<ExtArgs>>): Prisma__NavItemClient<$Result.GetResult<Prisma.$NavItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of NavItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavItemCountArgs} args - Arguments to filter NavItems to count.
     * @example
     * // Count the number of NavItems
     * const count = await prisma.navItem.count({
     *   where: {
     *     // ... the filter for the NavItems we want to count
     *   }
     * })
    **/
    count<T extends NavItemCountArgs>(
      args?: Subset<T, NavItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NavItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NavItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NavItemAggregateArgs>(args: Subset<T, NavItemAggregateArgs>): Prisma.PrismaPromise<GetNavItemAggregateType<T>>

    /**
     * Group by NavItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NavItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NavItemGroupByArgs['orderBy'] }
        : { orderBy?: NavItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NavItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNavItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NavItem model
   */
  readonly fields: NavItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NavItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NavItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NavItem model
   */ 
  interface NavItemFieldRefs {
    readonly id: FieldRef<"NavItem", 'Int'>
    readonly label: FieldRef<"NavItem", 'String'>
    readonly href: FieldRef<"NavItem", 'String'>
    readonly order: FieldRef<"NavItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * NavItem findUnique
   */
  export type NavItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavItem
     */
    select?: NavItemSelect<ExtArgs> | null
    /**
     * Filter, which NavItem to fetch.
     */
    where: NavItemWhereUniqueInput
  }

  /**
   * NavItem findUniqueOrThrow
   */
  export type NavItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavItem
     */
    select?: NavItemSelect<ExtArgs> | null
    /**
     * Filter, which NavItem to fetch.
     */
    where: NavItemWhereUniqueInput
  }

  /**
   * NavItem findFirst
   */
  export type NavItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavItem
     */
    select?: NavItemSelect<ExtArgs> | null
    /**
     * Filter, which NavItem to fetch.
     */
    where?: NavItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NavItems to fetch.
     */
    orderBy?: NavItemOrderByWithRelationInput | NavItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NavItems.
     */
    cursor?: NavItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NavItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NavItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NavItems.
     */
    distinct?: NavItemScalarFieldEnum | NavItemScalarFieldEnum[]
  }

  /**
   * NavItem findFirstOrThrow
   */
  export type NavItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavItem
     */
    select?: NavItemSelect<ExtArgs> | null
    /**
     * Filter, which NavItem to fetch.
     */
    where?: NavItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NavItems to fetch.
     */
    orderBy?: NavItemOrderByWithRelationInput | NavItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NavItems.
     */
    cursor?: NavItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NavItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NavItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NavItems.
     */
    distinct?: NavItemScalarFieldEnum | NavItemScalarFieldEnum[]
  }

  /**
   * NavItem findMany
   */
  export type NavItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavItem
     */
    select?: NavItemSelect<ExtArgs> | null
    /**
     * Filter, which NavItems to fetch.
     */
    where?: NavItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NavItems to fetch.
     */
    orderBy?: NavItemOrderByWithRelationInput | NavItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NavItems.
     */
    cursor?: NavItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NavItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NavItems.
     */
    skip?: number
    distinct?: NavItemScalarFieldEnum | NavItemScalarFieldEnum[]
  }

  /**
   * NavItem create
   */
  export type NavItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavItem
     */
    select?: NavItemSelect<ExtArgs> | null
    /**
     * The data needed to create a NavItem.
     */
    data: XOR<NavItemCreateInput, NavItemUncheckedCreateInput>
  }

  /**
   * NavItem createMany
   */
  export type NavItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NavItems.
     */
    data: NavItemCreateManyInput | NavItemCreateManyInput[]
  }

  /**
   * NavItem createManyAndReturn
   */
  export type NavItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavItem
     */
    select?: NavItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many NavItems.
     */
    data: NavItemCreateManyInput | NavItemCreateManyInput[]
  }

  /**
   * NavItem update
   */
  export type NavItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavItem
     */
    select?: NavItemSelect<ExtArgs> | null
    /**
     * The data needed to update a NavItem.
     */
    data: XOR<NavItemUpdateInput, NavItemUncheckedUpdateInput>
    /**
     * Choose, which NavItem to update.
     */
    where: NavItemWhereUniqueInput
  }

  /**
   * NavItem updateMany
   */
  export type NavItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NavItems.
     */
    data: XOR<NavItemUpdateManyMutationInput, NavItemUncheckedUpdateManyInput>
    /**
     * Filter which NavItems to update
     */
    where?: NavItemWhereInput
  }

  /**
   * NavItem upsert
   */
  export type NavItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavItem
     */
    select?: NavItemSelect<ExtArgs> | null
    /**
     * The filter to search for the NavItem to update in case it exists.
     */
    where: NavItemWhereUniqueInput
    /**
     * In case the NavItem found by the `where` argument doesn't exist, create a new NavItem with this data.
     */
    create: XOR<NavItemCreateInput, NavItemUncheckedCreateInput>
    /**
     * In case the NavItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NavItemUpdateInput, NavItemUncheckedUpdateInput>
  }

  /**
   * NavItem delete
   */
  export type NavItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavItem
     */
    select?: NavItemSelect<ExtArgs> | null
    /**
     * Filter which NavItem to delete.
     */
    where: NavItemWhereUniqueInput
  }

  /**
   * NavItem deleteMany
   */
  export type NavItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NavItems to delete
     */
    where?: NavItemWhereInput
  }

  /**
   * NavItem without action
   */
  export type NavItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavItem
     */
    select?: NavItemSelect<ExtArgs> | null
  }


  /**
   * Model FooterConfig
   */

  export type AggregateFooterConfig = {
    _count: FooterConfigCountAggregateOutputType | null
    _avg: FooterConfigAvgAggregateOutputType | null
    _sum: FooterConfigSumAggregateOutputType | null
    _min: FooterConfigMinAggregateOutputType | null
    _max: FooterConfigMaxAggregateOutputType | null
  }

  export type FooterConfigAvgAggregateOutputType = {
    id: number | null
  }

  export type FooterConfigSumAggregateOutputType = {
    id: number | null
  }

  export type FooterConfigMinAggregateOutputType = {
    id: number | null
    brandText: string | null
    copyrightName: string | null
    exploreLinks: string | null
    programLinks: string | null
    updatedAt: Date | null
  }

  export type FooterConfigMaxAggregateOutputType = {
    id: number | null
    brandText: string | null
    copyrightName: string | null
    exploreLinks: string | null
    programLinks: string | null
    updatedAt: Date | null
  }

  export type FooterConfigCountAggregateOutputType = {
    id: number
    brandText: number
    copyrightName: number
    exploreLinks: number
    programLinks: number
    updatedAt: number
    _all: number
  }


  export type FooterConfigAvgAggregateInputType = {
    id?: true
  }

  export type FooterConfigSumAggregateInputType = {
    id?: true
  }

  export type FooterConfigMinAggregateInputType = {
    id?: true
    brandText?: true
    copyrightName?: true
    exploreLinks?: true
    programLinks?: true
    updatedAt?: true
  }

  export type FooterConfigMaxAggregateInputType = {
    id?: true
    brandText?: true
    copyrightName?: true
    exploreLinks?: true
    programLinks?: true
    updatedAt?: true
  }

  export type FooterConfigCountAggregateInputType = {
    id?: true
    brandText?: true
    copyrightName?: true
    exploreLinks?: true
    programLinks?: true
    updatedAt?: true
    _all?: true
  }

  export type FooterConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FooterConfig to aggregate.
     */
    where?: FooterConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FooterConfigs to fetch.
     */
    orderBy?: FooterConfigOrderByWithRelationInput | FooterConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FooterConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FooterConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FooterConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FooterConfigs
    **/
    _count?: true | FooterConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FooterConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FooterConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FooterConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FooterConfigMaxAggregateInputType
  }

  export type GetFooterConfigAggregateType<T extends FooterConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateFooterConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFooterConfig[P]>
      : GetScalarType<T[P], AggregateFooterConfig[P]>
  }




  export type FooterConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FooterConfigWhereInput
    orderBy?: FooterConfigOrderByWithAggregationInput | FooterConfigOrderByWithAggregationInput[]
    by: FooterConfigScalarFieldEnum[] | FooterConfigScalarFieldEnum
    having?: FooterConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FooterConfigCountAggregateInputType | true
    _avg?: FooterConfigAvgAggregateInputType
    _sum?: FooterConfigSumAggregateInputType
    _min?: FooterConfigMinAggregateInputType
    _max?: FooterConfigMaxAggregateInputType
  }

  export type FooterConfigGroupByOutputType = {
    id: number
    brandText: string
    copyrightName: string
    exploreLinks: string
    programLinks: string
    updatedAt: Date
    _count: FooterConfigCountAggregateOutputType | null
    _avg: FooterConfigAvgAggregateOutputType | null
    _sum: FooterConfigSumAggregateOutputType | null
    _min: FooterConfigMinAggregateOutputType | null
    _max: FooterConfigMaxAggregateOutputType | null
  }

  type GetFooterConfigGroupByPayload<T extends FooterConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FooterConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FooterConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FooterConfigGroupByOutputType[P]>
            : GetScalarType<T[P], FooterConfigGroupByOutputType[P]>
        }
      >
    >


  export type FooterConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brandText?: boolean
    copyrightName?: boolean
    exploreLinks?: boolean
    programLinks?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["footerConfig"]>

  export type FooterConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brandText?: boolean
    copyrightName?: boolean
    exploreLinks?: boolean
    programLinks?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["footerConfig"]>

  export type FooterConfigSelectScalar = {
    id?: boolean
    brandText?: boolean
    copyrightName?: boolean
    exploreLinks?: boolean
    programLinks?: boolean
    updatedAt?: boolean
  }


  export type $FooterConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FooterConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      brandText: string
      copyrightName: string
      exploreLinks: string
      programLinks: string
      updatedAt: Date
    }, ExtArgs["result"]["footerConfig"]>
    composites: {}
  }

  type FooterConfigGetPayload<S extends boolean | null | undefined | FooterConfigDefaultArgs> = $Result.GetResult<Prisma.$FooterConfigPayload, S>

  type FooterConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FooterConfigFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FooterConfigCountAggregateInputType | true
    }

  export interface FooterConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FooterConfig'], meta: { name: 'FooterConfig' } }
    /**
     * Find zero or one FooterConfig that matches the filter.
     * @param {FooterConfigFindUniqueArgs} args - Arguments to find a FooterConfig
     * @example
     * // Get one FooterConfig
     * const footerConfig = await prisma.footerConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FooterConfigFindUniqueArgs>(args: SelectSubset<T, FooterConfigFindUniqueArgs<ExtArgs>>): Prisma__FooterConfigClient<$Result.GetResult<Prisma.$FooterConfigPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FooterConfig that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FooterConfigFindUniqueOrThrowArgs} args - Arguments to find a FooterConfig
     * @example
     * // Get one FooterConfig
     * const footerConfig = await prisma.footerConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FooterConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, FooterConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FooterConfigClient<$Result.GetResult<Prisma.$FooterConfigPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FooterConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterConfigFindFirstArgs} args - Arguments to find a FooterConfig
     * @example
     * // Get one FooterConfig
     * const footerConfig = await prisma.footerConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FooterConfigFindFirstArgs>(args?: SelectSubset<T, FooterConfigFindFirstArgs<ExtArgs>>): Prisma__FooterConfigClient<$Result.GetResult<Prisma.$FooterConfigPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FooterConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterConfigFindFirstOrThrowArgs} args - Arguments to find a FooterConfig
     * @example
     * // Get one FooterConfig
     * const footerConfig = await prisma.footerConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FooterConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, FooterConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__FooterConfigClient<$Result.GetResult<Prisma.$FooterConfigPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FooterConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FooterConfigs
     * const footerConfigs = await prisma.footerConfig.findMany()
     * 
     * // Get first 10 FooterConfigs
     * const footerConfigs = await prisma.footerConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const footerConfigWithIdOnly = await prisma.footerConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FooterConfigFindManyArgs>(args?: SelectSubset<T, FooterConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FooterConfigPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FooterConfig.
     * @param {FooterConfigCreateArgs} args - Arguments to create a FooterConfig.
     * @example
     * // Create one FooterConfig
     * const FooterConfig = await prisma.footerConfig.create({
     *   data: {
     *     // ... data to create a FooterConfig
     *   }
     * })
     * 
     */
    create<T extends FooterConfigCreateArgs>(args: SelectSubset<T, FooterConfigCreateArgs<ExtArgs>>): Prisma__FooterConfigClient<$Result.GetResult<Prisma.$FooterConfigPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FooterConfigs.
     * @param {FooterConfigCreateManyArgs} args - Arguments to create many FooterConfigs.
     * @example
     * // Create many FooterConfigs
     * const footerConfig = await prisma.footerConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FooterConfigCreateManyArgs>(args?: SelectSubset<T, FooterConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FooterConfigs and returns the data saved in the database.
     * @param {FooterConfigCreateManyAndReturnArgs} args - Arguments to create many FooterConfigs.
     * @example
     * // Create many FooterConfigs
     * const footerConfig = await prisma.footerConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FooterConfigs and only return the `id`
     * const footerConfigWithIdOnly = await prisma.footerConfig.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FooterConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, FooterConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FooterConfigPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FooterConfig.
     * @param {FooterConfigDeleteArgs} args - Arguments to delete one FooterConfig.
     * @example
     * // Delete one FooterConfig
     * const FooterConfig = await prisma.footerConfig.delete({
     *   where: {
     *     // ... filter to delete one FooterConfig
     *   }
     * })
     * 
     */
    delete<T extends FooterConfigDeleteArgs>(args: SelectSubset<T, FooterConfigDeleteArgs<ExtArgs>>): Prisma__FooterConfigClient<$Result.GetResult<Prisma.$FooterConfigPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FooterConfig.
     * @param {FooterConfigUpdateArgs} args - Arguments to update one FooterConfig.
     * @example
     * // Update one FooterConfig
     * const footerConfig = await prisma.footerConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FooterConfigUpdateArgs>(args: SelectSubset<T, FooterConfigUpdateArgs<ExtArgs>>): Prisma__FooterConfigClient<$Result.GetResult<Prisma.$FooterConfigPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FooterConfigs.
     * @param {FooterConfigDeleteManyArgs} args - Arguments to filter FooterConfigs to delete.
     * @example
     * // Delete a few FooterConfigs
     * const { count } = await prisma.footerConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FooterConfigDeleteManyArgs>(args?: SelectSubset<T, FooterConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FooterConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FooterConfigs
     * const footerConfig = await prisma.footerConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FooterConfigUpdateManyArgs>(args: SelectSubset<T, FooterConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FooterConfig.
     * @param {FooterConfigUpsertArgs} args - Arguments to update or create a FooterConfig.
     * @example
     * // Update or create a FooterConfig
     * const footerConfig = await prisma.footerConfig.upsert({
     *   create: {
     *     // ... data to create a FooterConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FooterConfig we want to update
     *   }
     * })
     */
    upsert<T extends FooterConfigUpsertArgs>(args: SelectSubset<T, FooterConfigUpsertArgs<ExtArgs>>): Prisma__FooterConfigClient<$Result.GetResult<Prisma.$FooterConfigPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FooterConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterConfigCountArgs} args - Arguments to filter FooterConfigs to count.
     * @example
     * // Count the number of FooterConfigs
     * const count = await prisma.footerConfig.count({
     *   where: {
     *     // ... the filter for the FooterConfigs we want to count
     *   }
     * })
    **/
    count<T extends FooterConfigCountArgs>(
      args?: Subset<T, FooterConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FooterConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FooterConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FooterConfigAggregateArgs>(args: Subset<T, FooterConfigAggregateArgs>): Prisma.PrismaPromise<GetFooterConfigAggregateType<T>>

    /**
     * Group by FooterConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FooterConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FooterConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FooterConfigGroupByArgs['orderBy'] }
        : { orderBy?: FooterConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FooterConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFooterConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FooterConfig model
   */
  readonly fields: FooterConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FooterConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FooterConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FooterConfig model
   */ 
  interface FooterConfigFieldRefs {
    readonly id: FieldRef<"FooterConfig", 'Int'>
    readonly brandText: FieldRef<"FooterConfig", 'String'>
    readonly copyrightName: FieldRef<"FooterConfig", 'String'>
    readonly exploreLinks: FieldRef<"FooterConfig", 'String'>
    readonly programLinks: FieldRef<"FooterConfig", 'String'>
    readonly updatedAt: FieldRef<"FooterConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FooterConfig findUnique
   */
  export type FooterConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterConfig
     */
    select?: FooterConfigSelect<ExtArgs> | null
    /**
     * Filter, which FooterConfig to fetch.
     */
    where: FooterConfigWhereUniqueInput
  }

  /**
   * FooterConfig findUniqueOrThrow
   */
  export type FooterConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterConfig
     */
    select?: FooterConfigSelect<ExtArgs> | null
    /**
     * Filter, which FooterConfig to fetch.
     */
    where: FooterConfigWhereUniqueInput
  }

  /**
   * FooterConfig findFirst
   */
  export type FooterConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterConfig
     */
    select?: FooterConfigSelect<ExtArgs> | null
    /**
     * Filter, which FooterConfig to fetch.
     */
    where?: FooterConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FooterConfigs to fetch.
     */
    orderBy?: FooterConfigOrderByWithRelationInput | FooterConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FooterConfigs.
     */
    cursor?: FooterConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FooterConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FooterConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FooterConfigs.
     */
    distinct?: FooterConfigScalarFieldEnum | FooterConfigScalarFieldEnum[]
  }

  /**
   * FooterConfig findFirstOrThrow
   */
  export type FooterConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterConfig
     */
    select?: FooterConfigSelect<ExtArgs> | null
    /**
     * Filter, which FooterConfig to fetch.
     */
    where?: FooterConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FooterConfigs to fetch.
     */
    orderBy?: FooterConfigOrderByWithRelationInput | FooterConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FooterConfigs.
     */
    cursor?: FooterConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FooterConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FooterConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FooterConfigs.
     */
    distinct?: FooterConfigScalarFieldEnum | FooterConfigScalarFieldEnum[]
  }

  /**
   * FooterConfig findMany
   */
  export type FooterConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterConfig
     */
    select?: FooterConfigSelect<ExtArgs> | null
    /**
     * Filter, which FooterConfigs to fetch.
     */
    where?: FooterConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FooterConfigs to fetch.
     */
    orderBy?: FooterConfigOrderByWithRelationInput | FooterConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FooterConfigs.
     */
    cursor?: FooterConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FooterConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FooterConfigs.
     */
    skip?: number
    distinct?: FooterConfigScalarFieldEnum | FooterConfigScalarFieldEnum[]
  }

  /**
   * FooterConfig create
   */
  export type FooterConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterConfig
     */
    select?: FooterConfigSelect<ExtArgs> | null
    /**
     * The data needed to create a FooterConfig.
     */
    data: XOR<FooterConfigCreateInput, FooterConfigUncheckedCreateInput>
  }

  /**
   * FooterConfig createMany
   */
  export type FooterConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FooterConfigs.
     */
    data: FooterConfigCreateManyInput | FooterConfigCreateManyInput[]
  }

  /**
   * FooterConfig createManyAndReturn
   */
  export type FooterConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterConfig
     */
    select?: FooterConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FooterConfigs.
     */
    data: FooterConfigCreateManyInput | FooterConfigCreateManyInput[]
  }

  /**
   * FooterConfig update
   */
  export type FooterConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterConfig
     */
    select?: FooterConfigSelect<ExtArgs> | null
    /**
     * The data needed to update a FooterConfig.
     */
    data: XOR<FooterConfigUpdateInput, FooterConfigUncheckedUpdateInput>
    /**
     * Choose, which FooterConfig to update.
     */
    where: FooterConfigWhereUniqueInput
  }

  /**
   * FooterConfig updateMany
   */
  export type FooterConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FooterConfigs.
     */
    data: XOR<FooterConfigUpdateManyMutationInput, FooterConfigUncheckedUpdateManyInput>
    /**
     * Filter which FooterConfigs to update
     */
    where?: FooterConfigWhereInput
  }

  /**
   * FooterConfig upsert
   */
  export type FooterConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterConfig
     */
    select?: FooterConfigSelect<ExtArgs> | null
    /**
     * The filter to search for the FooterConfig to update in case it exists.
     */
    where: FooterConfigWhereUniqueInput
    /**
     * In case the FooterConfig found by the `where` argument doesn't exist, create a new FooterConfig with this data.
     */
    create: XOR<FooterConfigCreateInput, FooterConfigUncheckedCreateInput>
    /**
     * In case the FooterConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FooterConfigUpdateInput, FooterConfigUncheckedUpdateInput>
  }

  /**
   * FooterConfig delete
   */
  export type FooterConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterConfig
     */
    select?: FooterConfigSelect<ExtArgs> | null
    /**
     * Filter which FooterConfig to delete.
     */
    where: FooterConfigWhereUniqueInput
  }

  /**
   * FooterConfig deleteMany
   */
  export type FooterConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FooterConfigs to delete
     */
    where?: FooterConfigWhereInput
  }

  /**
   * FooterConfig without action
   */
  export type FooterConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FooterConfig
     */
    select?: FooterConfigSelect<ExtArgs> | null
  }


  /**
   * Model HeroSection
   */

  export type AggregateHeroSection = {
    _count: HeroSectionCountAggregateOutputType | null
    _avg: HeroSectionAvgAggregateOutputType | null
    _sum: HeroSectionSumAggregateOutputType | null
    _min: HeroSectionMinAggregateOutputType | null
    _max: HeroSectionMaxAggregateOutputType | null
  }

  export type HeroSectionAvgAggregateOutputType = {
    id: number | null
  }

  export type HeroSectionSumAggregateOutputType = {
    id: number | null
  }

  export type HeroSectionMinAggregateOutputType = {
    id: number | null
    headline: string | null
    subheadline: string | null
    cta1Label: string | null
    cta1Href: string | null
    cta2Label: string | null
    cta2Href: string | null
    imageUrl: string | null
    updatedAt: Date | null
  }

  export type HeroSectionMaxAggregateOutputType = {
    id: number | null
    headline: string | null
    subheadline: string | null
    cta1Label: string | null
    cta1Href: string | null
    cta2Label: string | null
    cta2Href: string | null
    imageUrl: string | null
    updatedAt: Date | null
  }

  export type HeroSectionCountAggregateOutputType = {
    id: number
    headline: number
    subheadline: number
    cta1Label: number
    cta1Href: number
    cta2Label: number
    cta2Href: number
    imageUrl: number
    updatedAt: number
    _all: number
  }


  export type HeroSectionAvgAggregateInputType = {
    id?: true
  }

  export type HeroSectionSumAggregateInputType = {
    id?: true
  }

  export type HeroSectionMinAggregateInputType = {
    id?: true
    headline?: true
    subheadline?: true
    cta1Label?: true
    cta1Href?: true
    cta2Label?: true
    cta2Href?: true
    imageUrl?: true
    updatedAt?: true
  }

  export type HeroSectionMaxAggregateInputType = {
    id?: true
    headline?: true
    subheadline?: true
    cta1Label?: true
    cta1Href?: true
    cta2Label?: true
    cta2Href?: true
    imageUrl?: true
    updatedAt?: true
  }

  export type HeroSectionCountAggregateInputType = {
    id?: true
    headline?: true
    subheadline?: true
    cta1Label?: true
    cta1Href?: true
    cta2Label?: true
    cta2Href?: true
    imageUrl?: true
    updatedAt?: true
    _all?: true
  }

  export type HeroSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HeroSection to aggregate.
     */
    where?: HeroSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeroSections to fetch.
     */
    orderBy?: HeroSectionOrderByWithRelationInput | HeroSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HeroSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeroSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeroSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HeroSections
    **/
    _count?: true | HeroSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HeroSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HeroSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HeroSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HeroSectionMaxAggregateInputType
  }

  export type GetHeroSectionAggregateType<T extends HeroSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateHeroSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHeroSection[P]>
      : GetScalarType<T[P], AggregateHeroSection[P]>
  }




  export type HeroSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeroSectionWhereInput
    orderBy?: HeroSectionOrderByWithAggregationInput | HeroSectionOrderByWithAggregationInput[]
    by: HeroSectionScalarFieldEnum[] | HeroSectionScalarFieldEnum
    having?: HeroSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HeroSectionCountAggregateInputType | true
    _avg?: HeroSectionAvgAggregateInputType
    _sum?: HeroSectionSumAggregateInputType
    _min?: HeroSectionMinAggregateInputType
    _max?: HeroSectionMaxAggregateInputType
  }

  export type HeroSectionGroupByOutputType = {
    id: number
    headline: string
    subheadline: string
    cta1Label: string
    cta1Href: string
    cta2Label: string
    cta2Href: string
    imageUrl: string
    updatedAt: Date
    _count: HeroSectionCountAggregateOutputType | null
    _avg: HeroSectionAvgAggregateOutputType | null
    _sum: HeroSectionSumAggregateOutputType | null
    _min: HeroSectionMinAggregateOutputType | null
    _max: HeroSectionMaxAggregateOutputType | null
  }

  type GetHeroSectionGroupByPayload<T extends HeroSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HeroSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HeroSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HeroSectionGroupByOutputType[P]>
            : GetScalarType<T[P], HeroSectionGroupByOutputType[P]>
        }
      >
    >


  export type HeroSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    headline?: boolean
    subheadline?: boolean
    cta1Label?: boolean
    cta1Href?: boolean
    cta2Label?: boolean
    cta2Href?: boolean
    imageUrl?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["heroSection"]>

  export type HeroSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    headline?: boolean
    subheadline?: boolean
    cta1Label?: boolean
    cta1Href?: boolean
    cta2Label?: boolean
    cta2Href?: boolean
    imageUrl?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["heroSection"]>

  export type HeroSectionSelectScalar = {
    id?: boolean
    headline?: boolean
    subheadline?: boolean
    cta1Label?: boolean
    cta1Href?: boolean
    cta2Label?: boolean
    cta2Href?: boolean
    imageUrl?: boolean
    updatedAt?: boolean
  }


  export type $HeroSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HeroSection"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      headline: string
      subheadline: string
      cta1Label: string
      cta1Href: string
      cta2Label: string
      cta2Href: string
      imageUrl: string
      updatedAt: Date
    }, ExtArgs["result"]["heroSection"]>
    composites: {}
  }

  type HeroSectionGetPayload<S extends boolean | null | undefined | HeroSectionDefaultArgs> = $Result.GetResult<Prisma.$HeroSectionPayload, S>

  type HeroSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HeroSectionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HeroSectionCountAggregateInputType | true
    }

  export interface HeroSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HeroSection'], meta: { name: 'HeroSection' } }
    /**
     * Find zero or one HeroSection that matches the filter.
     * @param {HeroSectionFindUniqueArgs} args - Arguments to find a HeroSection
     * @example
     * // Get one HeroSection
     * const heroSection = await prisma.heroSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HeroSectionFindUniqueArgs>(args: SelectSubset<T, HeroSectionFindUniqueArgs<ExtArgs>>): Prisma__HeroSectionClient<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one HeroSection that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HeroSectionFindUniqueOrThrowArgs} args - Arguments to find a HeroSection
     * @example
     * // Get one HeroSection
     * const heroSection = await prisma.heroSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HeroSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, HeroSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HeroSectionClient<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first HeroSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroSectionFindFirstArgs} args - Arguments to find a HeroSection
     * @example
     * // Get one HeroSection
     * const heroSection = await prisma.heroSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HeroSectionFindFirstArgs>(args?: SelectSubset<T, HeroSectionFindFirstArgs<ExtArgs>>): Prisma__HeroSectionClient<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first HeroSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroSectionFindFirstOrThrowArgs} args - Arguments to find a HeroSection
     * @example
     * // Get one HeroSection
     * const heroSection = await prisma.heroSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HeroSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, HeroSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__HeroSectionClient<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more HeroSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HeroSections
     * const heroSections = await prisma.heroSection.findMany()
     * 
     * // Get first 10 HeroSections
     * const heroSections = await prisma.heroSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const heroSectionWithIdOnly = await prisma.heroSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HeroSectionFindManyArgs>(args?: SelectSubset<T, HeroSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a HeroSection.
     * @param {HeroSectionCreateArgs} args - Arguments to create a HeroSection.
     * @example
     * // Create one HeroSection
     * const HeroSection = await prisma.heroSection.create({
     *   data: {
     *     // ... data to create a HeroSection
     *   }
     * })
     * 
     */
    create<T extends HeroSectionCreateArgs>(args: SelectSubset<T, HeroSectionCreateArgs<ExtArgs>>): Prisma__HeroSectionClient<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many HeroSections.
     * @param {HeroSectionCreateManyArgs} args - Arguments to create many HeroSections.
     * @example
     * // Create many HeroSections
     * const heroSection = await prisma.heroSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HeroSectionCreateManyArgs>(args?: SelectSubset<T, HeroSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HeroSections and returns the data saved in the database.
     * @param {HeroSectionCreateManyAndReturnArgs} args - Arguments to create many HeroSections.
     * @example
     * // Create many HeroSections
     * const heroSection = await prisma.heroSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HeroSections and only return the `id`
     * const heroSectionWithIdOnly = await prisma.heroSection.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HeroSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, HeroSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a HeroSection.
     * @param {HeroSectionDeleteArgs} args - Arguments to delete one HeroSection.
     * @example
     * // Delete one HeroSection
     * const HeroSection = await prisma.heroSection.delete({
     *   where: {
     *     // ... filter to delete one HeroSection
     *   }
     * })
     * 
     */
    delete<T extends HeroSectionDeleteArgs>(args: SelectSubset<T, HeroSectionDeleteArgs<ExtArgs>>): Prisma__HeroSectionClient<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one HeroSection.
     * @param {HeroSectionUpdateArgs} args - Arguments to update one HeroSection.
     * @example
     * // Update one HeroSection
     * const heroSection = await prisma.heroSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HeroSectionUpdateArgs>(args: SelectSubset<T, HeroSectionUpdateArgs<ExtArgs>>): Prisma__HeroSectionClient<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more HeroSections.
     * @param {HeroSectionDeleteManyArgs} args - Arguments to filter HeroSections to delete.
     * @example
     * // Delete a few HeroSections
     * const { count } = await prisma.heroSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HeroSectionDeleteManyArgs>(args?: SelectSubset<T, HeroSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HeroSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HeroSections
     * const heroSection = await prisma.heroSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HeroSectionUpdateManyArgs>(args: SelectSubset<T, HeroSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HeroSection.
     * @param {HeroSectionUpsertArgs} args - Arguments to update or create a HeroSection.
     * @example
     * // Update or create a HeroSection
     * const heroSection = await prisma.heroSection.upsert({
     *   create: {
     *     // ... data to create a HeroSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HeroSection we want to update
     *   }
     * })
     */
    upsert<T extends HeroSectionUpsertArgs>(args: SelectSubset<T, HeroSectionUpsertArgs<ExtArgs>>): Prisma__HeroSectionClient<$Result.GetResult<Prisma.$HeroSectionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of HeroSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroSectionCountArgs} args - Arguments to filter HeroSections to count.
     * @example
     * // Count the number of HeroSections
     * const count = await prisma.heroSection.count({
     *   where: {
     *     // ... the filter for the HeroSections we want to count
     *   }
     * })
    **/
    count<T extends HeroSectionCountArgs>(
      args?: Subset<T, HeroSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HeroSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HeroSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HeroSectionAggregateArgs>(args: Subset<T, HeroSectionAggregateArgs>): Prisma.PrismaPromise<GetHeroSectionAggregateType<T>>

    /**
     * Group by HeroSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroSectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HeroSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HeroSectionGroupByArgs['orderBy'] }
        : { orderBy?: HeroSectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HeroSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeroSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HeroSection model
   */
  readonly fields: HeroSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HeroSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HeroSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HeroSection model
   */ 
  interface HeroSectionFieldRefs {
    readonly id: FieldRef<"HeroSection", 'Int'>
    readonly headline: FieldRef<"HeroSection", 'String'>
    readonly subheadline: FieldRef<"HeroSection", 'String'>
    readonly cta1Label: FieldRef<"HeroSection", 'String'>
    readonly cta1Href: FieldRef<"HeroSection", 'String'>
    readonly cta2Label: FieldRef<"HeroSection", 'String'>
    readonly cta2Href: FieldRef<"HeroSection", 'String'>
    readonly imageUrl: FieldRef<"HeroSection", 'String'>
    readonly updatedAt: FieldRef<"HeroSection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HeroSection findUnique
   */
  export type HeroSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * Filter, which HeroSection to fetch.
     */
    where: HeroSectionWhereUniqueInput
  }

  /**
   * HeroSection findUniqueOrThrow
   */
  export type HeroSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * Filter, which HeroSection to fetch.
     */
    where: HeroSectionWhereUniqueInput
  }

  /**
   * HeroSection findFirst
   */
  export type HeroSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * Filter, which HeroSection to fetch.
     */
    where?: HeroSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeroSections to fetch.
     */
    orderBy?: HeroSectionOrderByWithRelationInput | HeroSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeroSections.
     */
    cursor?: HeroSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeroSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeroSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeroSections.
     */
    distinct?: HeroSectionScalarFieldEnum | HeroSectionScalarFieldEnum[]
  }

  /**
   * HeroSection findFirstOrThrow
   */
  export type HeroSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * Filter, which HeroSection to fetch.
     */
    where?: HeroSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeroSections to fetch.
     */
    orderBy?: HeroSectionOrderByWithRelationInput | HeroSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HeroSections.
     */
    cursor?: HeroSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeroSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeroSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HeroSections.
     */
    distinct?: HeroSectionScalarFieldEnum | HeroSectionScalarFieldEnum[]
  }

  /**
   * HeroSection findMany
   */
  export type HeroSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * Filter, which HeroSections to fetch.
     */
    where?: HeroSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HeroSections to fetch.
     */
    orderBy?: HeroSectionOrderByWithRelationInput | HeroSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HeroSections.
     */
    cursor?: HeroSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HeroSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HeroSections.
     */
    skip?: number
    distinct?: HeroSectionScalarFieldEnum | HeroSectionScalarFieldEnum[]
  }

  /**
   * HeroSection create
   */
  export type HeroSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * The data needed to create a HeroSection.
     */
    data: XOR<HeroSectionCreateInput, HeroSectionUncheckedCreateInput>
  }

  /**
   * HeroSection createMany
   */
  export type HeroSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HeroSections.
     */
    data: HeroSectionCreateManyInput | HeroSectionCreateManyInput[]
  }

  /**
   * HeroSection createManyAndReturn
   */
  export type HeroSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many HeroSections.
     */
    data: HeroSectionCreateManyInput | HeroSectionCreateManyInput[]
  }

  /**
   * HeroSection update
   */
  export type HeroSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * The data needed to update a HeroSection.
     */
    data: XOR<HeroSectionUpdateInput, HeroSectionUncheckedUpdateInput>
    /**
     * Choose, which HeroSection to update.
     */
    where: HeroSectionWhereUniqueInput
  }

  /**
   * HeroSection updateMany
   */
  export type HeroSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HeroSections.
     */
    data: XOR<HeroSectionUpdateManyMutationInput, HeroSectionUncheckedUpdateManyInput>
    /**
     * Filter which HeroSections to update
     */
    where?: HeroSectionWhereInput
  }

  /**
   * HeroSection upsert
   */
  export type HeroSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * The filter to search for the HeroSection to update in case it exists.
     */
    where: HeroSectionWhereUniqueInput
    /**
     * In case the HeroSection found by the `where` argument doesn't exist, create a new HeroSection with this data.
     */
    create: XOR<HeroSectionCreateInput, HeroSectionUncheckedCreateInput>
    /**
     * In case the HeroSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HeroSectionUpdateInput, HeroSectionUncheckedUpdateInput>
  }

  /**
   * HeroSection delete
   */
  export type HeroSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
    /**
     * Filter which HeroSection to delete.
     */
    where: HeroSectionWhereUniqueInput
  }

  /**
   * HeroSection deleteMany
   */
  export type HeroSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HeroSections to delete
     */
    where?: HeroSectionWhereInput
  }

  /**
   * HeroSection without action
   */
  export type HeroSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeroSection
     */
    select?: HeroSectionSelect<ExtArgs> | null
  }


  /**
   * Model TeamMember
   */

  export type AggregateTeamMember = {
    _count: TeamMemberCountAggregateOutputType | null
    _avg: TeamMemberAvgAggregateOutputType | null
    _sum: TeamMemberSumAggregateOutputType | null
    _min: TeamMemberMinAggregateOutputType | null
    _max: TeamMemberMaxAggregateOutputType | null
  }

  export type TeamMemberAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type TeamMemberSumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type TeamMemberMinAggregateOutputType = {
    id: number | null
    name: string | null
    role: string | null
    categories: string | null
    image: string | null
    bio: string | null
    linkedin: string | null
    twitter: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamMemberMaxAggregateOutputType = {
    id: number | null
    name: string | null
    role: string | null
    categories: string | null
    image: string | null
    bio: string | null
    linkedin: string | null
    twitter: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamMemberCountAggregateOutputType = {
    id: number
    name: number
    role: number
    categories: number
    image: number
    bio: number
    linkedin: number
    twitter: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeamMemberAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type TeamMemberSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type TeamMemberMinAggregateInputType = {
    id?: true
    name?: true
    role?: true
    categories?: true
    image?: true
    bio?: true
    linkedin?: true
    twitter?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamMemberMaxAggregateInputType = {
    id?: true
    name?: true
    role?: true
    categories?: true
    image?: true
    bio?: true
    linkedin?: true
    twitter?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamMemberCountAggregateInputType = {
    id?: true
    name?: true
    role?: true
    categories?: true
    image?: true
    bio?: true
    linkedin?: true
    twitter?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeamMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMember to aggregate.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamMembers
    **/
    _count?: true | TeamMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMemberMaxAggregateInputType
  }

  export type GetTeamMemberAggregateType<T extends TeamMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamMember[P]>
      : GetScalarType<T[P], AggregateTeamMember[P]>
  }




  export type TeamMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithAggregationInput | TeamMemberOrderByWithAggregationInput[]
    by: TeamMemberScalarFieldEnum[] | TeamMemberScalarFieldEnum
    having?: TeamMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamMemberCountAggregateInputType | true
    _avg?: TeamMemberAvgAggregateInputType
    _sum?: TeamMemberSumAggregateInputType
    _min?: TeamMemberMinAggregateInputType
    _max?: TeamMemberMaxAggregateInputType
  }

  export type TeamMemberGroupByOutputType = {
    id: number
    name: string
    role: string
    categories: string
    image: string
    bio: string
    linkedin: string
    twitter: string
    order: number
    createdAt: Date
    updatedAt: Date
    _count: TeamMemberCountAggregateOutputType | null
    _avg: TeamMemberAvgAggregateOutputType | null
    _sum: TeamMemberSumAggregateOutputType | null
    _min: TeamMemberMinAggregateOutputType | null
    _max: TeamMemberMaxAggregateOutputType | null
  }

  type GetTeamMemberGroupByPayload<T extends TeamMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
            : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
        }
      >
    >


  export type TeamMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    categories?: boolean
    image?: boolean
    bio?: boolean
    linkedin?: boolean
    twitter?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    categories?: boolean
    image?: boolean
    bio?: boolean
    linkedin?: boolean
    twitter?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectScalar = {
    id?: boolean
    name?: boolean
    role?: boolean
    categories?: boolean
    image?: boolean
    bio?: boolean
    linkedin?: boolean
    twitter?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $TeamMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamMember"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      role: string
      categories: string
      image: string
      bio: string
      linkedin: string
      twitter: string
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["teamMember"]>
    composites: {}
  }

  type TeamMemberGetPayload<S extends boolean | null | undefined | TeamMemberDefaultArgs> = $Result.GetResult<Prisma.$TeamMemberPayload, S>

  type TeamMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TeamMemberFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TeamMemberCountAggregateInputType | true
    }

  export interface TeamMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamMember'], meta: { name: 'TeamMember' } }
    /**
     * Find zero or one TeamMember that matches the filter.
     * @param {TeamMemberFindUniqueArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamMemberFindUniqueArgs>(args: SelectSubset<T, TeamMemberFindUniqueArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TeamMember that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TeamMemberFindUniqueOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TeamMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamMemberFindFirstArgs>(args?: SelectSubset<T, TeamMemberFindFirstArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TeamMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TeamMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamMembers
     * const teamMembers = await prisma.teamMember.findMany()
     * 
     * // Get first 10 TeamMembers
     * const teamMembers = await prisma.teamMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamMemberFindManyArgs>(args?: SelectSubset<T, TeamMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TeamMember.
     * @param {TeamMemberCreateArgs} args - Arguments to create a TeamMember.
     * @example
     * // Create one TeamMember
     * const TeamMember = await prisma.teamMember.create({
     *   data: {
     *     // ... data to create a TeamMember
     *   }
     * })
     * 
     */
    create<T extends TeamMemberCreateArgs>(args: SelectSubset<T, TeamMemberCreateArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TeamMembers.
     * @param {TeamMemberCreateManyArgs} args - Arguments to create many TeamMembers.
     * @example
     * // Create many TeamMembers
     * const teamMember = await prisma.teamMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamMemberCreateManyArgs>(args?: SelectSubset<T, TeamMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamMembers and returns the data saved in the database.
     * @param {TeamMemberCreateManyAndReturnArgs} args - Arguments to create many TeamMembers.
     * @example
     * // Create many TeamMembers
     * const teamMember = await prisma.teamMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamMembers and only return the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TeamMember.
     * @param {TeamMemberDeleteArgs} args - Arguments to delete one TeamMember.
     * @example
     * // Delete one TeamMember
     * const TeamMember = await prisma.teamMember.delete({
     *   where: {
     *     // ... filter to delete one TeamMember
     *   }
     * })
     * 
     */
    delete<T extends TeamMemberDeleteArgs>(args: SelectSubset<T, TeamMemberDeleteArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TeamMember.
     * @param {TeamMemberUpdateArgs} args - Arguments to update one TeamMember.
     * @example
     * // Update one TeamMember
     * const teamMember = await prisma.teamMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamMemberUpdateArgs>(args: SelectSubset<T, TeamMemberUpdateArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TeamMembers.
     * @param {TeamMemberDeleteManyArgs} args - Arguments to filter TeamMembers to delete.
     * @example
     * // Delete a few TeamMembers
     * const { count } = await prisma.teamMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamMemberDeleteManyArgs>(args?: SelectSubset<T, TeamMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamMembers
     * const teamMember = await prisma.teamMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamMemberUpdateManyArgs>(args: SelectSubset<T, TeamMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TeamMember.
     * @param {TeamMemberUpsertArgs} args - Arguments to update or create a TeamMember.
     * @example
     * // Update or create a TeamMember
     * const teamMember = await prisma.teamMember.upsert({
     *   create: {
     *     // ... data to create a TeamMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamMember we want to update
     *   }
     * })
     */
    upsert<T extends TeamMemberUpsertArgs>(args: SelectSubset<T, TeamMemberUpsertArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberCountArgs} args - Arguments to filter TeamMembers to count.
     * @example
     * // Count the number of TeamMembers
     * const count = await prisma.teamMember.count({
     *   where: {
     *     // ... the filter for the TeamMembers we want to count
     *   }
     * })
    **/
    count<T extends TeamMemberCountArgs>(
      args?: Subset<T, TeamMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamMemberAggregateArgs>(args: Subset<T, TeamMemberAggregateArgs>): Prisma.PrismaPromise<GetTeamMemberAggregateType<T>>

    /**
     * Group by TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamMemberGroupByArgs['orderBy'] }
        : { orderBy?: TeamMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamMember model
   */
  readonly fields: TeamMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeamMember model
   */ 
  interface TeamMemberFieldRefs {
    readonly id: FieldRef<"TeamMember", 'Int'>
    readonly name: FieldRef<"TeamMember", 'String'>
    readonly role: FieldRef<"TeamMember", 'String'>
    readonly categories: FieldRef<"TeamMember", 'String'>
    readonly image: FieldRef<"TeamMember", 'String'>
    readonly bio: FieldRef<"TeamMember", 'String'>
    readonly linkedin: FieldRef<"TeamMember", 'String'>
    readonly twitter: FieldRef<"TeamMember", 'String'>
    readonly order: FieldRef<"TeamMember", 'Int'>
    readonly createdAt: FieldRef<"TeamMember", 'DateTime'>
    readonly updatedAt: FieldRef<"TeamMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeamMember findUnique
   */
  export type TeamMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember findUniqueOrThrow
   */
  export type TeamMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember findFirst
   */
  export type TeamMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember findFirstOrThrow
   */
  export type TeamMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember findMany
   */
  export type TeamMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Filter, which TeamMembers to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember create
   */
  export type TeamMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * The data needed to create a TeamMember.
     */
    data: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>
  }

  /**
   * TeamMember createMany
   */
  export type TeamMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMemberCreateManyInput | TeamMemberCreateManyInput[]
  }

  /**
   * TeamMember createManyAndReturn
   */
  export type TeamMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMemberCreateManyInput | TeamMemberCreateManyInput[]
  }

  /**
   * TeamMember update
   */
  export type TeamMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * The data needed to update a TeamMember.
     */
    data: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>
    /**
     * Choose, which TeamMember to update.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember updateMany
   */
  export type TeamMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamMembers.
     */
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyInput>
    /**
     * Filter which TeamMembers to update
     */
    where?: TeamMemberWhereInput
  }

  /**
   * TeamMember upsert
   */
  export type TeamMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * The filter to search for the TeamMember to update in case it exists.
     */
    where: TeamMemberWhereUniqueInput
    /**
     * In case the TeamMember found by the `where` argument doesn't exist, create a new TeamMember with this data.
     */
    create: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>
    /**
     * In case the TeamMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>
  }

  /**
   * TeamMember delete
   */
  export type TeamMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Filter which TeamMember to delete.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember deleteMany
   */
  export type TeamMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMembers to delete
     */
    where?: TeamMemberWhereInput
  }

  /**
   * TeamMember without action
   */
  export type TeamMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
  }


  /**
   * Model Program
   */

  export type AggregateProgram = {
    _count: ProgramCountAggregateOutputType | null
    _avg: ProgramAvgAggregateOutputType | null
    _sum: ProgramSumAggregateOutputType | null
    _min: ProgramMinAggregateOutputType | null
    _max: ProgramMaxAggregateOutputType | null
  }

  export type ProgramAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type ProgramSumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type ProgramMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    icon: string | null
    features: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProgramMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    icon: string | null
    features: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProgramCountAggregateOutputType = {
    id: number
    title: number
    description: number
    icon: number
    features: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProgramAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type ProgramSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type ProgramMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    icon?: true
    features?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProgramMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    icon?: true
    features?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProgramCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    icon?: true
    features?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProgramAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Program to aggregate.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Programs
    **/
    _count?: true | ProgramCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgramAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgramSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgramMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgramMaxAggregateInputType
  }

  export type GetProgramAggregateType<T extends ProgramAggregateArgs> = {
        [P in keyof T & keyof AggregateProgram]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgram[P]>
      : GetScalarType<T[P], AggregateProgram[P]>
  }




  export type ProgramGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramWhereInput
    orderBy?: ProgramOrderByWithAggregationInput | ProgramOrderByWithAggregationInput[]
    by: ProgramScalarFieldEnum[] | ProgramScalarFieldEnum
    having?: ProgramScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgramCountAggregateInputType | true
    _avg?: ProgramAvgAggregateInputType
    _sum?: ProgramSumAggregateInputType
    _min?: ProgramMinAggregateInputType
    _max?: ProgramMaxAggregateInputType
  }

  export type ProgramGroupByOutputType = {
    id: number
    title: string
    description: string
    icon: string
    features: string
    order: number
    createdAt: Date
    updatedAt: Date
    _count: ProgramCountAggregateOutputType | null
    _avg: ProgramAvgAggregateOutputType | null
    _sum: ProgramSumAggregateOutputType | null
    _min: ProgramMinAggregateOutputType | null
    _max: ProgramMaxAggregateOutputType | null
  }

  type GetProgramGroupByPayload<T extends ProgramGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgramGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgramGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgramGroupByOutputType[P]>
            : GetScalarType<T[P], ProgramGroupByOutputType[P]>
        }
      >
    >


  export type ProgramSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    features?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["program"]>

  export type ProgramSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    features?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["program"]>

  export type ProgramSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    features?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $ProgramPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Program"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      icon: string
      features: string
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["program"]>
    composites: {}
  }

  type ProgramGetPayload<S extends boolean | null | undefined | ProgramDefaultArgs> = $Result.GetResult<Prisma.$ProgramPayload, S>

  type ProgramCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProgramFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProgramCountAggregateInputType | true
    }

  export interface ProgramDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Program'], meta: { name: 'Program' } }
    /**
     * Find zero or one Program that matches the filter.
     * @param {ProgramFindUniqueArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgramFindUniqueArgs>(args: SelectSubset<T, ProgramFindUniqueArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Program that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProgramFindUniqueOrThrowArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgramFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgramFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Program that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindFirstArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgramFindFirstArgs>(args?: SelectSubset<T, ProgramFindFirstArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Program that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindFirstOrThrowArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgramFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgramFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Programs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Programs
     * const programs = await prisma.program.findMany()
     * 
     * // Get first 10 Programs
     * const programs = await prisma.program.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const programWithIdOnly = await prisma.program.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgramFindManyArgs>(args?: SelectSubset<T, ProgramFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Program.
     * @param {ProgramCreateArgs} args - Arguments to create a Program.
     * @example
     * // Create one Program
     * const Program = await prisma.program.create({
     *   data: {
     *     // ... data to create a Program
     *   }
     * })
     * 
     */
    create<T extends ProgramCreateArgs>(args: SelectSubset<T, ProgramCreateArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Programs.
     * @param {ProgramCreateManyArgs} args - Arguments to create many Programs.
     * @example
     * // Create many Programs
     * const program = await prisma.program.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgramCreateManyArgs>(args?: SelectSubset<T, ProgramCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Programs and returns the data saved in the database.
     * @param {ProgramCreateManyAndReturnArgs} args - Arguments to create many Programs.
     * @example
     * // Create many Programs
     * const program = await prisma.program.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Programs and only return the `id`
     * const programWithIdOnly = await prisma.program.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgramCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgramCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Program.
     * @param {ProgramDeleteArgs} args - Arguments to delete one Program.
     * @example
     * // Delete one Program
     * const Program = await prisma.program.delete({
     *   where: {
     *     // ... filter to delete one Program
     *   }
     * })
     * 
     */
    delete<T extends ProgramDeleteArgs>(args: SelectSubset<T, ProgramDeleteArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Program.
     * @param {ProgramUpdateArgs} args - Arguments to update one Program.
     * @example
     * // Update one Program
     * const program = await prisma.program.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgramUpdateArgs>(args: SelectSubset<T, ProgramUpdateArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Programs.
     * @param {ProgramDeleteManyArgs} args - Arguments to filter Programs to delete.
     * @example
     * // Delete a few Programs
     * const { count } = await prisma.program.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgramDeleteManyArgs>(args?: SelectSubset<T, ProgramDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Programs
     * const program = await prisma.program.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgramUpdateManyArgs>(args: SelectSubset<T, ProgramUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Program.
     * @param {ProgramUpsertArgs} args - Arguments to update or create a Program.
     * @example
     * // Update or create a Program
     * const program = await prisma.program.upsert({
     *   create: {
     *     // ... data to create a Program
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Program we want to update
     *   }
     * })
     */
    upsert<T extends ProgramUpsertArgs>(args: SelectSubset<T, ProgramUpsertArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramCountArgs} args - Arguments to filter Programs to count.
     * @example
     * // Count the number of Programs
     * const count = await prisma.program.count({
     *   where: {
     *     // ... the filter for the Programs we want to count
     *   }
     * })
    **/
    count<T extends ProgramCountArgs>(
      args?: Subset<T, ProgramCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgramCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Program.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProgramAggregateArgs>(args: Subset<T, ProgramAggregateArgs>): Prisma.PrismaPromise<GetProgramAggregateType<T>>

    /**
     * Group by Program.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProgramGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgramGroupByArgs['orderBy'] }
        : { orderBy?: ProgramGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProgramGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Program model
   */
  readonly fields: ProgramFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Program.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgramClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Program model
   */ 
  interface ProgramFieldRefs {
    readonly id: FieldRef<"Program", 'Int'>
    readonly title: FieldRef<"Program", 'String'>
    readonly description: FieldRef<"Program", 'String'>
    readonly icon: FieldRef<"Program", 'String'>
    readonly features: FieldRef<"Program", 'String'>
    readonly order: FieldRef<"Program", 'Int'>
    readonly createdAt: FieldRef<"Program", 'DateTime'>
    readonly updatedAt: FieldRef<"Program", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Program findUnique
   */
  export type ProgramFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program findUniqueOrThrow
   */
  export type ProgramFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program findFirst
   */
  export type ProgramFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Programs.
     */
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program findFirstOrThrow
   */
  export type ProgramFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Programs.
     */
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program findMany
   */
  export type ProgramFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Filter, which Programs to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program create
   */
  export type ProgramCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * The data needed to create a Program.
     */
    data: XOR<ProgramCreateInput, ProgramUncheckedCreateInput>
  }

  /**
   * Program createMany
   */
  export type ProgramCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Programs.
     */
    data: ProgramCreateManyInput | ProgramCreateManyInput[]
  }

  /**
   * Program createManyAndReturn
   */
  export type ProgramCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Programs.
     */
    data: ProgramCreateManyInput | ProgramCreateManyInput[]
  }

  /**
   * Program update
   */
  export type ProgramUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * The data needed to update a Program.
     */
    data: XOR<ProgramUpdateInput, ProgramUncheckedUpdateInput>
    /**
     * Choose, which Program to update.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program updateMany
   */
  export type ProgramUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Programs.
     */
    data: XOR<ProgramUpdateManyMutationInput, ProgramUncheckedUpdateManyInput>
    /**
     * Filter which Programs to update
     */
    where?: ProgramWhereInput
  }

  /**
   * Program upsert
   */
  export type ProgramUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * The filter to search for the Program to update in case it exists.
     */
    where: ProgramWhereUniqueInput
    /**
     * In case the Program found by the `where` argument doesn't exist, create a new Program with this data.
     */
    create: XOR<ProgramCreateInput, ProgramUncheckedCreateInput>
    /**
     * In case the Program was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgramUpdateInput, ProgramUncheckedUpdateInput>
  }

  /**
   * Program delete
   */
  export type ProgramDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Filter which Program to delete.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program deleteMany
   */
  export type ProgramDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Programs to delete
     */
    where?: ProgramWhereInput
  }

  /**
   * Program without action
   */
  export type ProgramDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    slug: string | null
    title: string | null
    description: string | null
    category: string | null
    image: string | null
    tags: string | null
    innovators: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    title: string | null
    description: string | null
    category: string | null
    image: string | null
    tags: string | null
    innovators: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    description: number
    category: number
    image: number
    tags: number
    innovators: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    description?: true
    category?: true
    image?: true
    tags?: true
    innovators?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    description?: true
    category?: true
    image?: true
    tags?: true
    innovators?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    description?: true
    category?: true
    image?: true
    tags?: true
    innovators?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    slug: string
    title: string
    description: string
    category: string
    image: string
    tags: string
    innovators: string
    order: number
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    image?: boolean
    tags?: boolean
    innovators?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    image?: boolean
    tags?: boolean
    innovators?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    image?: boolean
    tags?: boolean
    innovators?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slug: string
      title: string
      description: string
      category: string
      image: string
      tags: string
      innovators: string
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */ 
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'Int'>
    readonly slug: FieldRef<"Project", 'String'>
    readonly title: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly category: FieldRef<"Project", 'String'>
    readonly image: FieldRef<"Project", 'String'>
    readonly tags: FieldRef<"Project", 'String'>
    readonly innovators: FieldRef<"Project", 'String'>
    readonly order: FieldRef<"Project", 'Int'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
  }


  /**
   * Model Innovator
   */

  export type AggregateInnovator = {
    _count: InnovatorCountAggregateOutputType | null
    _avg: InnovatorAvgAggregateOutputType | null
    _sum: InnovatorSumAggregateOutputType | null
    _min: InnovatorMinAggregateOutputType | null
    _max: InnovatorMaxAggregateOutputType | null
  }

  export type InnovatorAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type InnovatorSumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type InnovatorMinAggregateOutputType = {
    id: number | null
    slug: string | null
    name: string | null
    tagline: string | null
    image: string | null
    bio: string | null
    projects: string | null
    skills: string | null
    quote: string | null
    featured: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InnovatorMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    name: string | null
    tagline: string | null
    image: string | null
    bio: string | null
    projects: string | null
    skills: string | null
    quote: string | null
    featured: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InnovatorCountAggregateOutputType = {
    id: number
    slug: number
    name: number
    tagline: number
    image: number
    bio: number
    projects: number
    skills: number
    quote: number
    featured: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InnovatorAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type InnovatorSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type InnovatorMinAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    tagline?: true
    image?: true
    bio?: true
    projects?: true
    skills?: true
    quote?: true
    featured?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InnovatorMaxAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    tagline?: true
    image?: true
    bio?: true
    projects?: true
    skills?: true
    quote?: true
    featured?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InnovatorCountAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    tagline?: true
    image?: true
    bio?: true
    projects?: true
    skills?: true
    quote?: true
    featured?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InnovatorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Innovator to aggregate.
     */
    where?: InnovatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Innovators to fetch.
     */
    orderBy?: InnovatorOrderByWithRelationInput | InnovatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InnovatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Innovators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Innovators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Innovators
    **/
    _count?: true | InnovatorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InnovatorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InnovatorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InnovatorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InnovatorMaxAggregateInputType
  }

  export type GetInnovatorAggregateType<T extends InnovatorAggregateArgs> = {
        [P in keyof T & keyof AggregateInnovator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInnovator[P]>
      : GetScalarType<T[P], AggregateInnovator[P]>
  }




  export type InnovatorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InnovatorWhereInput
    orderBy?: InnovatorOrderByWithAggregationInput | InnovatorOrderByWithAggregationInput[]
    by: InnovatorScalarFieldEnum[] | InnovatorScalarFieldEnum
    having?: InnovatorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InnovatorCountAggregateInputType | true
    _avg?: InnovatorAvgAggregateInputType
    _sum?: InnovatorSumAggregateInputType
    _min?: InnovatorMinAggregateInputType
    _max?: InnovatorMaxAggregateInputType
  }

  export type InnovatorGroupByOutputType = {
    id: number
    slug: string
    name: string
    tagline: string
    image: string
    bio: string
    projects: string
    skills: string
    quote: string
    featured: boolean
    order: number
    createdAt: Date
    updatedAt: Date
    _count: InnovatorCountAggregateOutputType | null
    _avg: InnovatorAvgAggregateOutputType | null
    _sum: InnovatorSumAggregateOutputType | null
    _min: InnovatorMinAggregateOutputType | null
    _max: InnovatorMaxAggregateOutputType | null
  }

  type GetInnovatorGroupByPayload<T extends InnovatorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InnovatorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InnovatorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InnovatorGroupByOutputType[P]>
            : GetScalarType<T[P], InnovatorGroupByOutputType[P]>
        }
      >
    >


  export type InnovatorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    tagline?: boolean
    image?: boolean
    bio?: boolean
    projects?: boolean
    skills?: boolean
    quote?: boolean
    featured?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["innovator"]>

  export type InnovatorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    tagline?: boolean
    image?: boolean
    bio?: boolean
    projects?: boolean
    skills?: boolean
    quote?: boolean
    featured?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["innovator"]>

  export type InnovatorSelectScalar = {
    id?: boolean
    slug?: boolean
    name?: boolean
    tagline?: boolean
    image?: boolean
    bio?: boolean
    projects?: boolean
    skills?: boolean
    quote?: boolean
    featured?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $InnovatorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Innovator"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slug: string
      name: string
      tagline: string
      image: string
      bio: string
      projects: string
      skills: string
      quote: string
      featured: boolean
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["innovator"]>
    composites: {}
  }

  type InnovatorGetPayload<S extends boolean | null | undefined | InnovatorDefaultArgs> = $Result.GetResult<Prisma.$InnovatorPayload, S>

  type InnovatorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InnovatorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InnovatorCountAggregateInputType | true
    }

  export interface InnovatorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Innovator'], meta: { name: 'Innovator' } }
    /**
     * Find zero or one Innovator that matches the filter.
     * @param {InnovatorFindUniqueArgs} args - Arguments to find a Innovator
     * @example
     * // Get one Innovator
     * const innovator = await prisma.innovator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InnovatorFindUniqueArgs>(args: SelectSubset<T, InnovatorFindUniqueArgs<ExtArgs>>): Prisma__InnovatorClient<$Result.GetResult<Prisma.$InnovatorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Innovator that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InnovatorFindUniqueOrThrowArgs} args - Arguments to find a Innovator
     * @example
     * // Get one Innovator
     * const innovator = await prisma.innovator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InnovatorFindUniqueOrThrowArgs>(args: SelectSubset<T, InnovatorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InnovatorClient<$Result.GetResult<Prisma.$InnovatorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Innovator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InnovatorFindFirstArgs} args - Arguments to find a Innovator
     * @example
     * // Get one Innovator
     * const innovator = await prisma.innovator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InnovatorFindFirstArgs>(args?: SelectSubset<T, InnovatorFindFirstArgs<ExtArgs>>): Prisma__InnovatorClient<$Result.GetResult<Prisma.$InnovatorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Innovator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InnovatorFindFirstOrThrowArgs} args - Arguments to find a Innovator
     * @example
     * // Get one Innovator
     * const innovator = await prisma.innovator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InnovatorFindFirstOrThrowArgs>(args?: SelectSubset<T, InnovatorFindFirstOrThrowArgs<ExtArgs>>): Prisma__InnovatorClient<$Result.GetResult<Prisma.$InnovatorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Innovators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InnovatorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Innovators
     * const innovators = await prisma.innovator.findMany()
     * 
     * // Get first 10 Innovators
     * const innovators = await prisma.innovator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const innovatorWithIdOnly = await prisma.innovator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InnovatorFindManyArgs>(args?: SelectSubset<T, InnovatorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InnovatorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Innovator.
     * @param {InnovatorCreateArgs} args - Arguments to create a Innovator.
     * @example
     * // Create one Innovator
     * const Innovator = await prisma.innovator.create({
     *   data: {
     *     // ... data to create a Innovator
     *   }
     * })
     * 
     */
    create<T extends InnovatorCreateArgs>(args: SelectSubset<T, InnovatorCreateArgs<ExtArgs>>): Prisma__InnovatorClient<$Result.GetResult<Prisma.$InnovatorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Innovators.
     * @param {InnovatorCreateManyArgs} args - Arguments to create many Innovators.
     * @example
     * // Create many Innovators
     * const innovator = await prisma.innovator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InnovatorCreateManyArgs>(args?: SelectSubset<T, InnovatorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Innovators and returns the data saved in the database.
     * @param {InnovatorCreateManyAndReturnArgs} args - Arguments to create many Innovators.
     * @example
     * // Create many Innovators
     * const innovator = await prisma.innovator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Innovators and only return the `id`
     * const innovatorWithIdOnly = await prisma.innovator.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InnovatorCreateManyAndReturnArgs>(args?: SelectSubset<T, InnovatorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InnovatorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Innovator.
     * @param {InnovatorDeleteArgs} args - Arguments to delete one Innovator.
     * @example
     * // Delete one Innovator
     * const Innovator = await prisma.innovator.delete({
     *   where: {
     *     // ... filter to delete one Innovator
     *   }
     * })
     * 
     */
    delete<T extends InnovatorDeleteArgs>(args: SelectSubset<T, InnovatorDeleteArgs<ExtArgs>>): Prisma__InnovatorClient<$Result.GetResult<Prisma.$InnovatorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Innovator.
     * @param {InnovatorUpdateArgs} args - Arguments to update one Innovator.
     * @example
     * // Update one Innovator
     * const innovator = await prisma.innovator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InnovatorUpdateArgs>(args: SelectSubset<T, InnovatorUpdateArgs<ExtArgs>>): Prisma__InnovatorClient<$Result.GetResult<Prisma.$InnovatorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Innovators.
     * @param {InnovatorDeleteManyArgs} args - Arguments to filter Innovators to delete.
     * @example
     * // Delete a few Innovators
     * const { count } = await prisma.innovator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InnovatorDeleteManyArgs>(args?: SelectSubset<T, InnovatorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Innovators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InnovatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Innovators
     * const innovator = await prisma.innovator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InnovatorUpdateManyArgs>(args: SelectSubset<T, InnovatorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Innovator.
     * @param {InnovatorUpsertArgs} args - Arguments to update or create a Innovator.
     * @example
     * // Update or create a Innovator
     * const innovator = await prisma.innovator.upsert({
     *   create: {
     *     // ... data to create a Innovator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Innovator we want to update
     *   }
     * })
     */
    upsert<T extends InnovatorUpsertArgs>(args: SelectSubset<T, InnovatorUpsertArgs<ExtArgs>>): Prisma__InnovatorClient<$Result.GetResult<Prisma.$InnovatorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Innovators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InnovatorCountArgs} args - Arguments to filter Innovators to count.
     * @example
     * // Count the number of Innovators
     * const count = await prisma.innovator.count({
     *   where: {
     *     // ... the filter for the Innovators we want to count
     *   }
     * })
    **/
    count<T extends InnovatorCountArgs>(
      args?: Subset<T, InnovatorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InnovatorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Innovator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InnovatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InnovatorAggregateArgs>(args: Subset<T, InnovatorAggregateArgs>): Prisma.PrismaPromise<GetInnovatorAggregateType<T>>

    /**
     * Group by Innovator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InnovatorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InnovatorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InnovatorGroupByArgs['orderBy'] }
        : { orderBy?: InnovatorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InnovatorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInnovatorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Innovator model
   */
  readonly fields: InnovatorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Innovator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InnovatorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Innovator model
   */ 
  interface InnovatorFieldRefs {
    readonly id: FieldRef<"Innovator", 'Int'>
    readonly slug: FieldRef<"Innovator", 'String'>
    readonly name: FieldRef<"Innovator", 'String'>
    readonly tagline: FieldRef<"Innovator", 'String'>
    readonly image: FieldRef<"Innovator", 'String'>
    readonly bio: FieldRef<"Innovator", 'String'>
    readonly projects: FieldRef<"Innovator", 'String'>
    readonly skills: FieldRef<"Innovator", 'String'>
    readonly quote: FieldRef<"Innovator", 'String'>
    readonly featured: FieldRef<"Innovator", 'Boolean'>
    readonly order: FieldRef<"Innovator", 'Int'>
    readonly createdAt: FieldRef<"Innovator", 'DateTime'>
    readonly updatedAt: FieldRef<"Innovator", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Innovator findUnique
   */
  export type InnovatorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Innovator
     */
    select?: InnovatorSelect<ExtArgs> | null
    /**
     * Filter, which Innovator to fetch.
     */
    where: InnovatorWhereUniqueInput
  }

  /**
   * Innovator findUniqueOrThrow
   */
  export type InnovatorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Innovator
     */
    select?: InnovatorSelect<ExtArgs> | null
    /**
     * Filter, which Innovator to fetch.
     */
    where: InnovatorWhereUniqueInput
  }

  /**
   * Innovator findFirst
   */
  export type InnovatorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Innovator
     */
    select?: InnovatorSelect<ExtArgs> | null
    /**
     * Filter, which Innovator to fetch.
     */
    where?: InnovatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Innovators to fetch.
     */
    orderBy?: InnovatorOrderByWithRelationInput | InnovatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Innovators.
     */
    cursor?: InnovatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Innovators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Innovators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Innovators.
     */
    distinct?: InnovatorScalarFieldEnum | InnovatorScalarFieldEnum[]
  }

  /**
   * Innovator findFirstOrThrow
   */
  export type InnovatorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Innovator
     */
    select?: InnovatorSelect<ExtArgs> | null
    /**
     * Filter, which Innovator to fetch.
     */
    where?: InnovatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Innovators to fetch.
     */
    orderBy?: InnovatorOrderByWithRelationInput | InnovatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Innovators.
     */
    cursor?: InnovatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Innovators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Innovators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Innovators.
     */
    distinct?: InnovatorScalarFieldEnum | InnovatorScalarFieldEnum[]
  }

  /**
   * Innovator findMany
   */
  export type InnovatorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Innovator
     */
    select?: InnovatorSelect<ExtArgs> | null
    /**
     * Filter, which Innovators to fetch.
     */
    where?: InnovatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Innovators to fetch.
     */
    orderBy?: InnovatorOrderByWithRelationInput | InnovatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Innovators.
     */
    cursor?: InnovatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Innovators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Innovators.
     */
    skip?: number
    distinct?: InnovatorScalarFieldEnum | InnovatorScalarFieldEnum[]
  }

  /**
   * Innovator create
   */
  export type InnovatorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Innovator
     */
    select?: InnovatorSelect<ExtArgs> | null
    /**
     * The data needed to create a Innovator.
     */
    data: XOR<InnovatorCreateInput, InnovatorUncheckedCreateInput>
  }

  /**
   * Innovator createMany
   */
  export type InnovatorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Innovators.
     */
    data: InnovatorCreateManyInput | InnovatorCreateManyInput[]
  }

  /**
   * Innovator createManyAndReturn
   */
  export type InnovatorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Innovator
     */
    select?: InnovatorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Innovators.
     */
    data: InnovatorCreateManyInput | InnovatorCreateManyInput[]
  }

  /**
   * Innovator update
   */
  export type InnovatorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Innovator
     */
    select?: InnovatorSelect<ExtArgs> | null
    /**
     * The data needed to update a Innovator.
     */
    data: XOR<InnovatorUpdateInput, InnovatorUncheckedUpdateInput>
    /**
     * Choose, which Innovator to update.
     */
    where: InnovatorWhereUniqueInput
  }

  /**
   * Innovator updateMany
   */
  export type InnovatorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Innovators.
     */
    data: XOR<InnovatorUpdateManyMutationInput, InnovatorUncheckedUpdateManyInput>
    /**
     * Filter which Innovators to update
     */
    where?: InnovatorWhereInput
  }

  /**
   * Innovator upsert
   */
  export type InnovatorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Innovator
     */
    select?: InnovatorSelect<ExtArgs> | null
    /**
     * The filter to search for the Innovator to update in case it exists.
     */
    where: InnovatorWhereUniqueInput
    /**
     * In case the Innovator found by the `where` argument doesn't exist, create a new Innovator with this data.
     */
    create: XOR<InnovatorCreateInput, InnovatorUncheckedCreateInput>
    /**
     * In case the Innovator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InnovatorUpdateInput, InnovatorUncheckedUpdateInput>
  }

  /**
   * Innovator delete
   */
  export type InnovatorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Innovator
     */
    select?: InnovatorSelect<ExtArgs> | null
    /**
     * Filter which Innovator to delete.
     */
    where: InnovatorWhereUniqueInput
  }

  /**
   * Innovator deleteMany
   */
  export type InnovatorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Innovators to delete
     */
    where?: InnovatorWhereInput
  }

  /**
   * Innovator without action
   */
  export type InnovatorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Innovator
     */
    select?: InnovatorSelect<ExtArgs> | null
  }


  /**
   * Model Metric
   */

  export type AggregateMetric = {
    _count: MetricCountAggregateOutputType | null
    _avg: MetricAvgAggregateOutputType | null
    _sum: MetricSumAggregateOutputType | null
    _min: MetricMinAggregateOutputType | null
    _max: MetricMaxAggregateOutputType | null
  }

  export type MetricAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type MetricSumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type MetricMinAggregateOutputType = {
    id: number | null
    label: string | null
    value: string | null
    suffix: string | null
    prefix: string | null
    order: number | null
  }

  export type MetricMaxAggregateOutputType = {
    id: number | null
    label: string | null
    value: string | null
    suffix: string | null
    prefix: string | null
    order: number | null
  }

  export type MetricCountAggregateOutputType = {
    id: number
    label: number
    value: number
    suffix: number
    prefix: number
    order: number
    _all: number
  }


  export type MetricAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type MetricSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type MetricMinAggregateInputType = {
    id?: true
    label?: true
    value?: true
    suffix?: true
    prefix?: true
    order?: true
  }

  export type MetricMaxAggregateInputType = {
    id?: true
    label?: true
    value?: true
    suffix?: true
    prefix?: true
    order?: true
  }

  export type MetricCountAggregateInputType = {
    id?: true
    label?: true
    value?: true
    suffix?: true
    prefix?: true
    order?: true
    _all?: true
  }

  export type MetricAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metric to aggregate.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Metrics
    **/
    _count?: true | MetricCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetricAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetricSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetricMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetricMaxAggregateInputType
  }

  export type GetMetricAggregateType<T extends MetricAggregateArgs> = {
        [P in keyof T & keyof AggregateMetric]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetric[P]>
      : GetScalarType<T[P], AggregateMetric[P]>
  }




  export type MetricGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricWhereInput
    orderBy?: MetricOrderByWithAggregationInput | MetricOrderByWithAggregationInput[]
    by: MetricScalarFieldEnum[] | MetricScalarFieldEnum
    having?: MetricScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetricCountAggregateInputType | true
    _avg?: MetricAvgAggregateInputType
    _sum?: MetricSumAggregateInputType
    _min?: MetricMinAggregateInputType
    _max?: MetricMaxAggregateInputType
  }

  export type MetricGroupByOutputType = {
    id: number
    label: string
    value: string
    suffix: string
    prefix: string
    order: number
    _count: MetricCountAggregateOutputType | null
    _avg: MetricAvgAggregateOutputType | null
    _sum: MetricSumAggregateOutputType | null
    _min: MetricMinAggregateOutputType | null
    _max: MetricMaxAggregateOutputType | null
  }

  type GetMetricGroupByPayload<T extends MetricGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetricGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetricGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetricGroupByOutputType[P]>
            : GetScalarType<T[P], MetricGroupByOutputType[P]>
        }
      >
    >


  export type MetricSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    value?: boolean
    suffix?: boolean
    prefix?: boolean
    order?: boolean
  }, ExtArgs["result"]["metric"]>

  export type MetricSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    value?: boolean
    suffix?: boolean
    prefix?: boolean
    order?: boolean
  }, ExtArgs["result"]["metric"]>

  export type MetricSelectScalar = {
    id?: boolean
    label?: boolean
    value?: boolean
    suffix?: boolean
    prefix?: boolean
    order?: boolean
  }


  export type $MetricPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Metric"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      label: string
      value: string
      suffix: string
      prefix: string
      order: number
    }, ExtArgs["result"]["metric"]>
    composites: {}
  }

  type MetricGetPayload<S extends boolean | null | undefined | MetricDefaultArgs> = $Result.GetResult<Prisma.$MetricPayload, S>

  type MetricCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MetricFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MetricCountAggregateInputType | true
    }

  export interface MetricDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Metric'], meta: { name: 'Metric' } }
    /**
     * Find zero or one Metric that matches the filter.
     * @param {MetricFindUniqueArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetricFindUniqueArgs>(args: SelectSubset<T, MetricFindUniqueArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Metric that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MetricFindUniqueOrThrowArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetricFindUniqueOrThrowArgs>(args: SelectSubset<T, MetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Metric that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricFindFirstArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetricFindFirstArgs>(args?: SelectSubset<T, MetricFindFirstArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Metric that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricFindFirstOrThrowArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetricFindFirstOrThrowArgs>(args?: SelectSubset<T, MetricFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Metrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Metrics
     * const metrics = await prisma.metric.findMany()
     * 
     * // Get first 10 Metrics
     * const metrics = await prisma.metric.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metricWithIdOnly = await prisma.metric.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetricFindManyArgs>(args?: SelectSubset<T, MetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Metric.
     * @param {MetricCreateArgs} args - Arguments to create a Metric.
     * @example
     * // Create one Metric
     * const Metric = await prisma.metric.create({
     *   data: {
     *     // ... data to create a Metric
     *   }
     * })
     * 
     */
    create<T extends MetricCreateArgs>(args: SelectSubset<T, MetricCreateArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Metrics.
     * @param {MetricCreateManyArgs} args - Arguments to create many Metrics.
     * @example
     * // Create many Metrics
     * const metric = await prisma.metric.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetricCreateManyArgs>(args?: SelectSubset<T, MetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Metrics and returns the data saved in the database.
     * @param {MetricCreateManyAndReturnArgs} args - Arguments to create many Metrics.
     * @example
     * // Create many Metrics
     * const metric = await prisma.metric.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Metrics and only return the `id`
     * const metricWithIdOnly = await prisma.metric.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetricCreateManyAndReturnArgs>(args?: SelectSubset<T, MetricCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Metric.
     * @param {MetricDeleteArgs} args - Arguments to delete one Metric.
     * @example
     * // Delete one Metric
     * const Metric = await prisma.metric.delete({
     *   where: {
     *     // ... filter to delete one Metric
     *   }
     * })
     * 
     */
    delete<T extends MetricDeleteArgs>(args: SelectSubset<T, MetricDeleteArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Metric.
     * @param {MetricUpdateArgs} args - Arguments to update one Metric.
     * @example
     * // Update one Metric
     * const metric = await prisma.metric.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetricUpdateArgs>(args: SelectSubset<T, MetricUpdateArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Metrics.
     * @param {MetricDeleteManyArgs} args - Arguments to filter Metrics to delete.
     * @example
     * // Delete a few Metrics
     * const { count } = await prisma.metric.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetricDeleteManyArgs>(args?: SelectSubset<T, MetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Metrics
     * const metric = await prisma.metric.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetricUpdateManyArgs>(args: SelectSubset<T, MetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Metric.
     * @param {MetricUpsertArgs} args - Arguments to update or create a Metric.
     * @example
     * // Update or create a Metric
     * const metric = await prisma.metric.upsert({
     *   create: {
     *     // ... data to create a Metric
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Metric we want to update
     *   }
     * })
     */
    upsert<T extends MetricUpsertArgs>(args: SelectSubset<T, MetricUpsertArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricCountArgs} args - Arguments to filter Metrics to count.
     * @example
     * // Count the number of Metrics
     * const count = await prisma.metric.count({
     *   where: {
     *     // ... the filter for the Metrics we want to count
     *   }
     * })
    **/
    count<T extends MetricCountArgs>(
      args?: Subset<T, MetricCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetricCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Metric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MetricAggregateArgs>(args: Subset<T, MetricAggregateArgs>): Prisma.PrismaPromise<GetMetricAggregateType<T>>

    /**
     * Group by Metric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MetricGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetricGroupByArgs['orderBy'] }
        : { orderBy?: MetricGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Metric model
   */
  readonly fields: MetricFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Metric.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetricClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Metric model
   */ 
  interface MetricFieldRefs {
    readonly id: FieldRef<"Metric", 'Int'>
    readonly label: FieldRef<"Metric", 'String'>
    readonly value: FieldRef<"Metric", 'String'>
    readonly suffix: FieldRef<"Metric", 'String'>
    readonly prefix: FieldRef<"Metric", 'String'>
    readonly order: FieldRef<"Metric", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Metric findUnique
   */
  export type MetricFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric findUniqueOrThrow
   */
  export type MetricFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric findFirst
   */
  export type MetricFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metrics.
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metrics.
     */
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * Metric findFirstOrThrow
   */
  export type MetricFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metrics.
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metrics.
     */
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * Metric findMany
   */
  export type MetricFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Filter, which Metrics to fetch.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Metrics.
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * Metric create
   */
  export type MetricCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * The data needed to create a Metric.
     */
    data: XOR<MetricCreateInput, MetricUncheckedCreateInput>
  }

  /**
   * Metric createMany
   */
  export type MetricCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Metrics.
     */
    data: MetricCreateManyInput | MetricCreateManyInput[]
  }

  /**
   * Metric createManyAndReturn
   */
  export type MetricCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Metrics.
     */
    data: MetricCreateManyInput | MetricCreateManyInput[]
  }

  /**
   * Metric update
   */
  export type MetricUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * The data needed to update a Metric.
     */
    data: XOR<MetricUpdateInput, MetricUncheckedUpdateInput>
    /**
     * Choose, which Metric to update.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric updateMany
   */
  export type MetricUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Metrics.
     */
    data: XOR<MetricUpdateManyMutationInput, MetricUncheckedUpdateManyInput>
    /**
     * Filter which Metrics to update
     */
    where?: MetricWhereInput
  }

  /**
   * Metric upsert
   */
  export type MetricUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * The filter to search for the Metric to update in case it exists.
     */
    where: MetricWhereUniqueInput
    /**
     * In case the Metric found by the `where` argument doesn't exist, create a new Metric with this data.
     */
    create: XOR<MetricCreateInput, MetricUncheckedCreateInput>
    /**
     * In case the Metric was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetricUpdateInput, MetricUncheckedUpdateInput>
  }

  /**
   * Metric delete
   */
  export type MetricDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Filter which Metric to delete.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric deleteMany
   */
  export type MetricDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metrics to delete
     */
    where?: MetricWhereInput
  }

  /**
   * Metric without action
   */
  export type MetricDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
  }


  /**
   * Model Value
   */

  export type AggregateValue = {
    _count: ValueCountAggregateOutputType | null
    _avg: ValueAvgAggregateOutputType | null
    _sum: ValueSumAggregateOutputType | null
    _min: ValueMinAggregateOutputType | null
    _max: ValueMaxAggregateOutputType | null
  }

  export type ValueAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type ValueSumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type ValueMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    icon: string | null
    order: number | null
  }

  export type ValueMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    icon: string | null
    order: number | null
  }

  export type ValueCountAggregateOutputType = {
    id: number
    title: number
    description: number
    icon: number
    order: number
    _all: number
  }


  export type ValueAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type ValueSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type ValueMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    icon?: true
    order?: true
  }

  export type ValueMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    icon?: true
    order?: true
  }

  export type ValueCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    icon?: true
    order?: true
    _all?: true
  }

  export type ValueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Value to aggregate.
     */
    where?: ValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Values to fetch.
     */
    orderBy?: ValueOrderByWithRelationInput | ValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Values.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Values
    **/
    _count?: true | ValueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ValueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ValueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ValueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ValueMaxAggregateInputType
  }

  export type GetValueAggregateType<T extends ValueAggregateArgs> = {
        [P in keyof T & keyof AggregateValue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateValue[P]>
      : GetScalarType<T[P], AggregateValue[P]>
  }




  export type ValueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ValueWhereInput
    orderBy?: ValueOrderByWithAggregationInput | ValueOrderByWithAggregationInput[]
    by: ValueScalarFieldEnum[] | ValueScalarFieldEnum
    having?: ValueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ValueCountAggregateInputType | true
    _avg?: ValueAvgAggregateInputType
    _sum?: ValueSumAggregateInputType
    _min?: ValueMinAggregateInputType
    _max?: ValueMaxAggregateInputType
  }

  export type ValueGroupByOutputType = {
    id: number
    title: string
    description: string
    icon: string
    order: number
    _count: ValueCountAggregateOutputType | null
    _avg: ValueAvgAggregateOutputType | null
    _sum: ValueSumAggregateOutputType | null
    _min: ValueMinAggregateOutputType | null
    _max: ValueMaxAggregateOutputType | null
  }

  type GetValueGroupByPayload<T extends ValueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ValueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ValueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ValueGroupByOutputType[P]>
            : GetScalarType<T[P], ValueGroupByOutputType[P]>
        }
      >
    >


  export type ValueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    order?: boolean
  }, ExtArgs["result"]["value"]>

  export type ValueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    order?: boolean
  }, ExtArgs["result"]["value"]>

  export type ValueSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    order?: boolean
  }


  export type $ValuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Value"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      icon: string
      order: number
    }, ExtArgs["result"]["value"]>
    composites: {}
  }

  type ValueGetPayload<S extends boolean | null | undefined | ValueDefaultArgs> = $Result.GetResult<Prisma.$ValuePayload, S>

  type ValueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ValueFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ValueCountAggregateInputType | true
    }

  export interface ValueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Value'], meta: { name: 'Value' } }
    /**
     * Find zero or one Value that matches the filter.
     * @param {ValueFindUniqueArgs} args - Arguments to find a Value
     * @example
     * // Get one Value
     * const value = await prisma.value.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ValueFindUniqueArgs>(args: SelectSubset<T, ValueFindUniqueArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Value that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ValueFindUniqueOrThrowArgs} args - Arguments to find a Value
     * @example
     * // Get one Value
     * const value = await prisma.value.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ValueFindUniqueOrThrowArgs>(args: SelectSubset<T, ValueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Value that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueFindFirstArgs} args - Arguments to find a Value
     * @example
     * // Get one Value
     * const value = await prisma.value.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ValueFindFirstArgs>(args?: SelectSubset<T, ValueFindFirstArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Value that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueFindFirstOrThrowArgs} args - Arguments to find a Value
     * @example
     * // Get one Value
     * const value = await prisma.value.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ValueFindFirstOrThrowArgs>(args?: SelectSubset<T, ValueFindFirstOrThrowArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Values that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Values
     * const values = await prisma.value.findMany()
     * 
     * // Get first 10 Values
     * const values = await prisma.value.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const valueWithIdOnly = await prisma.value.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ValueFindManyArgs>(args?: SelectSubset<T, ValueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Value.
     * @param {ValueCreateArgs} args - Arguments to create a Value.
     * @example
     * // Create one Value
     * const Value = await prisma.value.create({
     *   data: {
     *     // ... data to create a Value
     *   }
     * })
     * 
     */
    create<T extends ValueCreateArgs>(args: SelectSubset<T, ValueCreateArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Values.
     * @param {ValueCreateManyArgs} args - Arguments to create many Values.
     * @example
     * // Create many Values
     * const value = await prisma.value.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ValueCreateManyArgs>(args?: SelectSubset<T, ValueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Values and returns the data saved in the database.
     * @param {ValueCreateManyAndReturnArgs} args - Arguments to create many Values.
     * @example
     * // Create many Values
     * const value = await prisma.value.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Values and only return the `id`
     * const valueWithIdOnly = await prisma.value.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ValueCreateManyAndReturnArgs>(args?: SelectSubset<T, ValueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Value.
     * @param {ValueDeleteArgs} args - Arguments to delete one Value.
     * @example
     * // Delete one Value
     * const Value = await prisma.value.delete({
     *   where: {
     *     // ... filter to delete one Value
     *   }
     * })
     * 
     */
    delete<T extends ValueDeleteArgs>(args: SelectSubset<T, ValueDeleteArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Value.
     * @param {ValueUpdateArgs} args - Arguments to update one Value.
     * @example
     * // Update one Value
     * const value = await prisma.value.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ValueUpdateArgs>(args: SelectSubset<T, ValueUpdateArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Values.
     * @param {ValueDeleteManyArgs} args - Arguments to filter Values to delete.
     * @example
     * // Delete a few Values
     * const { count } = await prisma.value.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ValueDeleteManyArgs>(args?: SelectSubset<T, ValueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Values.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Values
     * const value = await prisma.value.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ValueUpdateManyArgs>(args: SelectSubset<T, ValueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Value.
     * @param {ValueUpsertArgs} args - Arguments to update or create a Value.
     * @example
     * // Update or create a Value
     * const value = await prisma.value.upsert({
     *   create: {
     *     // ... data to create a Value
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Value we want to update
     *   }
     * })
     */
    upsert<T extends ValueUpsertArgs>(args: SelectSubset<T, ValueUpsertArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Values.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueCountArgs} args - Arguments to filter Values to count.
     * @example
     * // Count the number of Values
     * const count = await prisma.value.count({
     *   where: {
     *     // ... the filter for the Values we want to count
     *   }
     * })
    **/
    count<T extends ValueCountArgs>(
      args?: Subset<T, ValueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ValueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Value.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ValueAggregateArgs>(args: Subset<T, ValueAggregateArgs>): Prisma.PrismaPromise<GetValueAggregateType<T>>

    /**
     * Group by Value.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ValueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ValueGroupByArgs['orderBy'] }
        : { orderBy?: ValueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ValueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetValueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Value model
   */
  readonly fields: ValueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Value.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ValueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Value model
   */ 
  interface ValueFieldRefs {
    readonly id: FieldRef<"Value", 'Int'>
    readonly title: FieldRef<"Value", 'String'>
    readonly description: FieldRef<"Value", 'String'>
    readonly icon: FieldRef<"Value", 'String'>
    readonly order: FieldRef<"Value", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Value findUnique
   */
  export type ValueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Filter, which Value to fetch.
     */
    where: ValueWhereUniqueInput
  }

  /**
   * Value findUniqueOrThrow
   */
  export type ValueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Filter, which Value to fetch.
     */
    where: ValueWhereUniqueInput
  }

  /**
   * Value findFirst
   */
  export type ValueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Filter, which Value to fetch.
     */
    where?: ValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Values to fetch.
     */
    orderBy?: ValueOrderByWithRelationInput | ValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Values.
     */
    cursor?: ValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Values.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Values.
     */
    distinct?: ValueScalarFieldEnum | ValueScalarFieldEnum[]
  }

  /**
   * Value findFirstOrThrow
   */
  export type ValueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Filter, which Value to fetch.
     */
    where?: ValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Values to fetch.
     */
    orderBy?: ValueOrderByWithRelationInput | ValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Values.
     */
    cursor?: ValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Values.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Values.
     */
    distinct?: ValueScalarFieldEnum | ValueScalarFieldEnum[]
  }

  /**
   * Value findMany
   */
  export type ValueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Filter, which Values to fetch.
     */
    where?: ValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Values to fetch.
     */
    orderBy?: ValueOrderByWithRelationInput | ValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Values.
     */
    cursor?: ValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Values.
     */
    skip?: number
    distinct?: ValueScalarFieldEnum | ValueScalarFieldEnum[]
  }

  /**
   * Value create
   */
  export type ValueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * The data needed to create a Value.
     */
    data: XOR<ValueCreateInput, ValueUncheckedCreateInput>
  }

  /**
   * Value createMany
   */
  export type ValueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Values.
     */
    data: ValueCreateManyInput | ValueCreateManyInput[]
  }

  /**
   * Value createManyAndReturn
   */
  export type ValueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Values.
     */
    data: ValueCreateManyInput | ValueCreateManyInput[]
  }

  /**
   * Value update
   */
  export type ValueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * The data needed to update a Value.
     */
    data: XOR<ValueUpdateInput, ValueUncheckedUpdateInput>
    /**
     * Choose, which Value to update.
     */
    where: ValueWhereUniqueInput
  }

  /**
   * Value updateMany
   */
  export type ValueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Values.
     */
    data: XOR<ValueUpdateManyMutationInput, ValueUncheckedUpdateManyInput>
    /**
     * Filter which Values to update
     */
    where?: ValueWhereInput
  }

  /**
   * Value upsert
   */
  export type ValueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * The filter to search for the Value to update in case it exists.
     */
    where: ValueWhereUniqueInput
    /**
     * In case the Value found by the `where` argument doesn't exist, create a new Value with this data.
     */
    create: XOR<ValueCreateInput, ValueUncheckedCreateInput>
    /**
     * In case the Value was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ValueUpdateInput, ValueUncheckedUpdateInput>
  }

  /**
   * Value delete
   */
  export type ValueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Filter which Value to delete.
     */
    where: ValueWhereUniqueInput
  }

  /**
   * Value deleteMany
   */
  export type ValueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Values to delete
     */
    where?: ValueWhereInput
  }

  /**
   * Value without action
   */
  export type ValueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
  }


  /**
   * Model AboutContent
   */

  export type AggregateAboutContent = {
    _count: AboutContentCountAggregateOutputType | null
    _avg: AboutContentAvgAggregateOutputType | null
    _sum: AboutContentSumAggregateOutputType | null
    _min: AboutContentMinAggregateOutputType | null
    _max: AboutContentMaxAggregateOutputType | null
  }

  export type AboutContentAvgAggregateOutputType = {
    id: number | null
  }

  export type AboutContentSumAggregateOutputType = {
    id: number | null
  }

  export type AboutContentMinAggregateOutputType = {
    id: number | null
    story: string | null
    mission: string | null
    vision: string | null
    milestones: string | null
    updatedAt: Date | null
  }

  export type AboutContentMaxAggregateOutputType = {
    id: number | null
    story: string | null
    mission: string | null
    vision: string | null
    milestones: string | null
    updatedAt: Date | null
  }

  export type AboutContentCountAggregateOutputType = {
    id: number
    story: number
    mission: number
    vision: number
    milestones: number
    updatedAt: number
    _all: number
  }


  export type AboutContentAvgAggregateInputType = {
    id?: true
  }

  export type AboutContentSumAggregateInputType = {
    id?: true
  }

  export type AboutContentMinAggregateInputType = {
    id?: true
    story?: true
    mission?: true
    vision?: true
    milestones?: true
    updatedAt?: true
  }

  export type AboutContentMaxAggregateInputType = {
    id?: true
    story?: true
    mission?: true
    vision?: true
    milestones?: true
    updatedAt?: true
  }

  export type AboutContentCountAggregateInputType = {
    id?: true
    story?: true
    mission?: true
    vision?: true
    milestones?: true
    updatedAt?: true
    _all?: true
  }

  export type AboutContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutContent to aggregate.
     */
    where?: AboutContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutContents to fetch.
     */
    orderBy?: AboutContentOrderByWithRelationInput | AboutContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AboutContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AboutContents
    **/
    _count?: true | AboutContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AboutContentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AboutContentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AboutContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AboutContentMaxAggregateInputType
  }

  export type GetAboutContentAggregateType<T extends AboutContentAggregateArgs> = {
        [P in keyof T & keyof AggregateAboutContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAboutContent[P]>
      : GetScalarType<T[P], AggregateAboutContent[P]>
  }




  export type AboutContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AboutContentWhereInput
    orderBy?: AboutContentOrderByWithAggregationInput | AboutContentOrderByWithAggregationInput[]
    by: AboutContentScalarFieldEnum[] | AboutContentScalarFieldEnum
    having?: AboutContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AboutContentCountAggregateInputType | true
    _avg?: AboutContentAvgAggregateInputType
    _sum?: AboutContentSumAggregateInputType
    _min?: AboutContentMinAggregateInputType
    _max?: AboutContentMaxAggregateInputType
  }

  export type AboutContentGroupByOutputType = {
    id: number
    story: string
    mission: string
    vision: string
    milestones: string
    updatedAt: Date
    _count: AboutContentCountAggregateOutputType | null
    _avg: AboutContentAvgAggregateOutputType | null
    _sum: AboutContentSumAggregateOutputType | null
    _min: AboutContentMinAggregateOutputType | null
    _max: AboutContentMaxAggregateOutputType | null
  }

  type GetAboutContentGroupByPayload<T extends AboutContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AboutContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AboutContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AboutContentGroupByOutputType[P]>
            : GetScalarType<T[P], AboutContentGroupByOutputType[P]>
        }
      >
    >


  export type AboutContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    story?: boolean
    mission?: boolean
    vision?: boolean
    milestones?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aboutContent"]>

  export type AboutContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    story?: boolean
    mission?: boolean
    vision?: boolean
    milestones?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aboutContent"]>

  export type AboutContentSelectScalar = {
    id?: boolean
    story?: boolean
    mission?: boolean
    vision?: boolean
    milestones?: boolean
    updatedAt?: boolean
  }


  export type $AboutContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AboutContent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      story: string
      mission: string
      vision: string
      milestones: string
      updatedAt: Date
    }, ExtArgs["result"]["aboutContent"]>
    composites: {}
  }

  type AboutContentGetPayload<S extends boolean | null | undefined | AboutContentDefaultArgs> = $Result.GetResult<Prisma.$AboutContentPayload, S>

  type AboutContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AboutContentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AboutContentCountAggregateInputType | true
    }

  export interface AboutContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AboutContent'], meta: { name: 'AboutContent' } }
    /**
     * Find zero or one AboutContent that matches the filter.
     * @param {AboutContentFindUniqueArgs} args - Arguments to find a AboutContent
     * @example
     * // Get one AboutContent
     * const aboutContent = await prisma.aboutContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AboutContentFindUniqueArgs>(args: SelectSubset<T, AboutContentFindUniqueArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AboutContent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AboutContentFindUniqueOrThrowArgs} args - Arguments to find a AboutContent
     * @example
     * // Get one AboutContent
     * const aboutContent = await prisma.aboutContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AboutContentFindUniqueOrThrowArgs>(args: SelectSubset<T, AboutContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AboutContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentFindFirstArgs} args - Arguments to find a AboutContent
     * @example
     * // Get one AboutContent
     * const aboutContent = await prisma.aboutContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AboutContentFindFirstArgs>(args?: SelectSubset<T, AboutContentFindFirstArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AboutContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentFindFirstOrThrowArgs} args - Arguments to find a AboutContent
     * @example
     * // Get one AboutContent
     * const aboutContent = await prisma.aboutContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AboutContentFindFirstOrThrowArgs>(args?: SelectSubset<T, AboutContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AboutContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AboutContents
     * const aboutContents = await prisma.aboutContent.findMany()
     * 
     * // Get first 10 AboutContents
     * const aboutContents = await prisma.aboutContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aboutContentWithIdOnly = await prisma.aboutContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AboutContentFindManyArgs>(args?: SelectSubset<T, AboutContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AboutContent.
     * @param {AboutContentCreateArgs} args - Arguments to create a AboutContent.
     * @example
     * // Create one AboutContent
     * const AboutContent = await prisma.aboutContent.create({
     *   data: {
     *     // ... data to create a AboutContent
     *   }
     * })
     * 
     */
    create<T extends AboutContentCreateArgs>(args: SelectSubset<T, AboutContentCreateArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AboutContents.
     * @param {AboutContentCreateManyArgs} args - Arguments to create many AboutContents.
     * @example
     * // Create many AboutContents
     * const aboutContent = await prisma.aboutContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AboutContentCreateManyArgs>(args?: SelectSubset<T, AboutContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AboutContents and returns the data saved in the database.
     * @param {AboutContentCreateManyAndReturnArgs} args - Arguments to create many AboutContents.
     * @example
     * // Create many AboutContents
     * const aboutContent = await prisma.aboutContent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AboutContents and only return the `id`
     * const aboutContentWithIdOnly = await prisma.aboutContent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AboutContentCreateManyAndReturnArgs>(args?: SelectSubset<T, AboutContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AboutContent.
     * @param {AboutContentDeleteArgs} args - Arguments to delete one AboutContent.
     * @example
     * // Delete one AboutContent
     * const AboutContent = await prisma.aboutContent.delete({
     *   where: {
     *     // ... filter to delete one AboutContent
     *   }
     * })
     * 
     */
    delete<T extends AboutContentDeleteArgs>(args: SelectSubset<T, AboutContentDeleteArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AboutContent.
     * @param {AboutContentUpdateArgs} args - Arguments to update one AboutContent.
     * @example
     * // Update one AboutContent
     * const aboutContent = await prisma.aboutContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AboutContentUpdateArgs>(args: SelectSubset<T, AboutContentUpdateArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AboutContents.
     * @param {AboutContentDeleteManyArgs} args - Arguments to filter AboutContents to delete.
     * @example
     * // Delete a few AboutContents
     * const { count } = await prisma.aboutContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AboutContentDeleteManyArgs>(args?: SelectSubset<T, AboutContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AboutContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AboutContents
     * const aboutContent = await prisma.aboutContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AboutContentUpdateManyArgs>(args: SelectSubset<T, AboutContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AboutContent.
     * @param {AboutContentUpsertArgs} args - Arguments to update or create a AboutContent.
     * @example
     * // Update or create a AboutContent
     * const aboutContent = await prisma.aboutContent.upsert({
     *   create: {
     *     // ... data to create a AboutContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AboutContent we want to update
     *   }
     * })
     */
    upsert<T extends AboutContentUpsertArgs>(args: SelectSubset<T, AboutContentUpsertArgs<ExtArgs>>): Prisma__AboutContentClient<$Result.GetResult<Prisma.$AboutContentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AboutContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentCountArgs} args - Arguments to filter AboutContents to count.
     * @example
     * // Count the number of AboutContents
     * const count = await prisma.aboutContent.count({
     *   where: {
     *     // ... the filter for the AboutContents we want to count
     *   }
     * })
    **/
    count<T extends AboutContentCountArgs>(
      args?: Subset<T, AboutContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AboutContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AboutContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AboutContentAggregateArgs>(args: Subset<T, AboutContentAggregateArgs>): Prisma.PrismaPromise<GetAboutContentAggregateType<T>>

    /**
     * Group by AboutContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AboutContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AboutContentGroupByArgs['orderBy'] }
        : { orderBy?: AboutContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AboutContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAboutContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AboutContent model
   */
  readonly fields: AboutContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AboutContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AboutContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AboutContent model
   */ 
  interface AboutContentFieldRefs {
    readonly id: FieldRef<"AboutContent", 'Int'>
    readonly story: FieldRef<"AboutContent", 'String'>
    readonly mission: FieldRef<"AboutContent", 'String'>
    readonly vision: FieldRef<"AboutContent", 'String'>
    readonly milestones: FieldRef<"AboutContent", 'String'>
    readonly updatedAt: FieldRef<"AboutContent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AboutContent findUnique
   */
  export type AboutContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Filter, which AboutContent to fetch.
     */
    where: AboutContentWhereUniqueInput
  }

  /**
   * AboutContent findUniqueOrThrow
   */
  export type AboutContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Filter, which AboutContent to fetch.
     */
    where: AboutContentWhereUniqueInput
  }

  /**
   * AboutContent findFirst
   */
  export type AboutContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Filter, which AboutContent to fetch.
     */
    where?: AboutContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutContents to fetch.
     */
    orderBy?: AboutContentOrderByWithRelationInput | AboutContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutContents.
     */
    cursor?: AboutContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutContents.
     */
    distinct?: AboutContentScalarFieldEnum | AboutContentScalarFieldEnum[]
  }

  /**
   * AboutContent findFirstOrThrow
   */
  export type AboutContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Filter, which AboutContent to fetch.
     */
    where?: AboutContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutContents to fetch.
     */
    orderBy?: AboutContentOrderByWithRelationInput | AboutContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AboutContents.
     */
    cursor?: AboutContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AboutContents.
     */
    distinct?: AboutContentScalarFieldEnum | AboutContentScalarFieldEnum[]
  }

  /**
   * AboutContent findMany
   */
  export type AboutContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Filter, which AboutContents to fetch.
     */
    where?: AboutContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AboutContents to fetch.
     */
    orderBy?: AboutContentOrderByWithRelationInput | AboutContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AboutContents.
     */
    cursor?: AboutContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AboutContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AboutContents.
     */
    skip?: number
    distinct?: AboutContentScalarFieldEnum | AboutContentScalarFieldEnum[]
  }

  /**
   * AboutContent create
   */
  export type AboutContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * The data needed to create a AboutContent.
     */
    data: XOR<AboutContentCreateInput, AboutContentUncheckedCreateInput>
  }

  /**
   * AboutContent createMany
   */
  export type AboutContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AboutContents.
     */
    data: AboutContentCreateManyInput | AboutContentCreateManyInput[]
  }

  /**
   * AboutContent createManyAndReturn
   */
  export type AboutContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AboutContents.
     */
    data: AboutContentCreateManyInput | AboutContentCreateManyInput[]
  }

  /**
   * AboutContent update
   */
  export type AboutContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * The data needed to update a AboutContent.
     */
    data: XOR<AboutContentUpdateInput, AboutContentUncheckedUpdateInput>
    /**
     * Choose, which AboutContent to update.
     */
    where: AboutContentWhereUniqueInput
  }

  /**
   * AboutContent updateMany
   */
  export type AboutContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AboutContents.
     */
    data: XOR<AboutContentUpdateManyMutationInput, AboutContentUncheckedUpdateManyInput>
    /**
     * Filter which AboutContents to update
     */
    where?: AboutContentWhereInput
  }

  /**
   * AboutContent upsert
   */
  export type AboutContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * The filter to search for the AboutContent to update in case it exists.
     */
    where: AboutContentWhereUniqueInput
    /**
     * In case the AboutContent found by the `where` argument doesn't exist, create a new AboutContent with this data.
     */
    create: XOR<AboutContentCreateInput, AboutContentUncheckedCreateInput>
    /**
     * In case the AboutContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AboutContentUpdateInput, AboutContentUncheckedUpdateInput>
  }

  /**
   * AboutContent delete
   */
  export type AboutContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
    /**
     * Filter which AboutContent to delete.
     */
    where: AboutContentWhereUniqueInput
  }

  /**
   * AboutContent deleteMany
   */
  export type AboutContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AboutContents to delete
     */
    where?: AboutContentWhereInput
  }

  /**
   * AboutContent without action
   */
  export type AboutContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutContent
     */
    select?: AboutContentSelect<ExtArgs> | null
  }


  /**
   * Model PageSEO
   */

  export type AggregatePageSEO = {
    _count: PageSEOCountAggregateOutputType | null
    _avg: PageSEOAvgAggregateOutputType | null
    _sum: PageSEOSumAggregateOutputType | null
    _min: PageSEOMinAggregateOutputType | null
    _max: PageSEOMaxAggregateOutputType | null
  }

  export type PageSEOAvgAggregateOutputType = {
    id: number | null
  }

  export type PageSEOSumAggregateOutputType = {
    id: number | null
  }

  export type PageSEOMinAggregateOutputType = {
    id: number | null
    page: string | null
    title: string | null
    description: string | null
    ogImage: string | null
    updatedAt: Date | null
  }

  export type PageSEOMaxAggregateOutputType = {
    id: number | null
    page: string | null
    title: string | null
    description: string | null
    ogImage: string | null
    updatedAt: Date | null
  }

  export type PageSEOCountAggregateOutputType = {
    id: number
    page: number
    title: number
    description: number
    ogImage: number
    updatedAt: number
    _all: number
  }


  export type PageSEOAvgAggregateInputType = {
    id?: true
  }

  export type PageSEOSumAggregateInputType = {
    id?: true
  }

  export type PageSEOMinAggregateInputType = {
    id?: true
    page?: true
    title?: true
    description?: true
    ogImage?: true
    updatedAt?: true
  }

  export type PageSEOMaxAggregateInputType = {
    id?: true
    page?: true
    title?: true
    description?: true
    ogImage?: true
    updatedAt?: true
  }

  export type PageSEOCountAggregateInputType = {
    id?: true
    page?: true
    title?: true
    description?: true
    ogImage?: true
    updatedAt?: true
    _all?: true
  }

  export type PageSEOAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageSEO to aggregate.
     */
    where?: PageSEOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageSEOS to fetch.
     */
    orderBy?: PageSEOOrderByWithRelationInput | PageSEOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageSEOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageSEOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageSEOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PageSEOS
    **/
    _count?: true | PageSEOCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PageSEOAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PageSEOSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageSEOMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageSEOMaxAggregateInputType
  }

  export type GetPageSEOAggregateType<T extends PageSEOAggregateArgs> = {
        [P in keyof T & keyof AggregatePageSEO]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePageSEO[P]>
      : GetScalarType<T[P], AggregatePageSEO[P]>
  }




  export type PageSEOGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageSEOWhereInput
    orderBy?: PageSEOOrderByWithAggregationInput | PageSEOOrderByWithAggregationInput[]
    by: PageSEOScalarFieldEnum[] | PageSEOScalarFieldEnum
    having?: PageSEOScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageSEOCountAggregateInputType | true
    _avg?: PageSEOAvgAggregateInputType
    _sum?: PageSEOSumAggregateInputType
    _min?: PageSEOMinAggregateInputType
    _max?: PageSEOMaxAggregateInputType
  }

  export type PageSEOGroupByOutputType = {
    id: number
    page: string
    title: string
    description: string
    ogImage: string
    updatedAt: Date
    _count: PageSEOCountAggregateOutputType | null
    _avg: PageSEOAvgAggregateOutputType | null
    _sum: PageSEOSumAggregateOutputType | null
    _min: PageSEOMinAggregateOutputType | null
    _max: PageSEOMaxAggregateOutputType | null
  }

  type GetPageSEOGroupByPayload<T extends PageSEOGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageSEOGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageSEOGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageSEOGroupByOutputType[P]>
            : GetScalarType<T[P], PageSEOGroupByOutputType[P]>
        }
      >
    >


  export type PageSEOSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    page?: boolean
    title?: boolean
    description?: boolean
    ogImage?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pageSEO"]>

  export type PageSEOSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    page?: boolean
    title?: boolean
    description?: boolean
    ogImage?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pageSEO"]>

  export type PageSEOSelectScalar = {
    id?: boolean
    page?: boolean
    title?: boolean
    description?: boolean
    ogImage?: boolean
    updatedAt?: boolean
  }


  export type $PageSEOPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PageSEO"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      page: string
      title: string
      description: string
      ogImage: string
      updatedAt: Date
    }, ExtArgs["result"]["pageSEO"]>
    composites: {}
  }

  type PageSEOGetPayload<S extends boolean | null | undefined | PageSEODefaultArgs> = $Result.GetResult<Prisma.$PageSEOPayload, S>

  type PageSEOCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PageSEOFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PageSEOCountAggregateInputType | true
    }

  export interface PageSEODelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PageSEO'], meta: { name: 'PageSEO' } }
    /**
     * Find zero or one PageSEO that matches the filter.
     * @param {PageSEOFindUniqueArgs} args - Arguments to find a PageSEO
     * @example
     * // Get one PageSEO
     * const pageSEO = await prisma.pageSEO.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PageSEOFindUniqueArgs>(args: SelectSubset<T, PageSEOFindUniqueArgs<ExtArgs>>): Prisma__PageSEOClient<$Result.GetResult<Prisma.$PageSEOPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PageSEO that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PageSEOFindUniqueOrThrowArgs} args - Arguments to find a PageSEO
     * @example
     * // Get one PageSEO
     * const pageSEO = await prisma.pageSEO.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PageSEOFindUniqueOrThrowArgs>(args: SelectSubset<T, PageSEOFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PageSEOClient<$Result.GetResult<Prisma.$PageSEOPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PageSEO that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageSEOFindFirstArgs} args - Arguments to find a PageSEO
     * @example
     * // Get one PageSEO
     * const pageSEO = await prisma.pageSEO.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PageSEOFindFirstArgs>(args?: SelectSubset<T, PageSEOFindFirstArgs<ExtArgs>>): Prisma__PageSEOClient<$Result.GetResult<Prisma.$PageSEOPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PageSEO that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageSEOFindFirstOrThrowArgs} args - Arguments to find a PageSEO
     * @example
     * // Get one PageSEO
     * const pageSEO = await prisma.pageSEO.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PageSEOFindFirstOrThrowArgs>(args?: SelectSubset<T, PageSEOFindFirstOrThrowArgs<ExtArgs>>): Prisma__PageSEOClient<$Result.GetResult<Prisma.$PageSEOPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PageSEOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageSEOFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PageSEOS
     * const pageSEOS = await prisma.pageSEO.findMany()
     * 
     * // Get first 10 PageSEOS
     * const pageSEOS = await prisma.pageSEO.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageSEOWithIdOnly = await prisma.pageSEO.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PageSEOFindManyArgs>(args?: SelectSubset<T, PageSEOFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageSEOPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PageSEO.
     * @param {PageSEOCreateArgs} args - Arguments to create a PageSEO.
     * @example
     * // Create one PageSEO
     * const PageSEO = await prisma.pageSEO.create({
     *   data: {
     *     // ... data to create a PageSEO
     *   }
     * })
     * 
     */
    create<T extends PageSEOCreateArgs>(args: SelectSubset<T, PageSEOCreateArgs<ExtArgs>>): Prisma__PageSEOClient<$Result.GetResult<Prisma.$PageSEOPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PageSEOS.
     * @param {PageSEOCreateManyArgs} args - Arguments to create many PageSEOS.
     * @example
     * // Create many PageSEOS
     * const pageSEO = await prisma.pageSEO.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PageSEOCreateManyArgs>(args?: SelectSubset<T, PageSEOCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PageSEOS and returns the data saved in the database.
     * @param {PageSEOCreateManyAndReturnArgs} args - Arguments to create many PageSEOS.
     * @example
     * // Create many PageSEOS
     * const pageSEO = await prisma.pageSEO.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PageSEOS and only return the `id`
     * const pageSEOWithIdOnly = await prisma.pageSEO.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PageSEOCreateManyAndReturnArgs>(args?: SelectSubset<T, PageSEOCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageSEOPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PageSEO.
     * @param {PageSEODeleteArgs} args - Arguments to delete one PageSEO.
     * @example
     * // Delete one PageSEO
     * const PageSEO = await prisma.pageSEO.delete({
     *   where: {
     *     // ... filter to delete one PageSEO
     *   }
     * })
     * 
     */
    delete<T extends PageSEODeleteArgs>(args: SelectSubset<T, PageSEODeleteArgs<ExtArgs>>): Prisma__PageSEOClient<$Result.GetResult<Prisma.$PageSEOPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PageSEO.
     * @param {PageSEOUpdateArgs} args - Arguments to update one PageSEO.
     * @example
     * // Update one PageSEO
     * const pageSEO = await prisma.pageSEO.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PageSEOUpdateArgs>(args: SelectSubset<T, PageSEOUpdateArgs<ExtArgs>>): Prisma__PageSEOClient<$Result.GetResult<Prisma.$PageSEOPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PageSEOS.
     * @param {PageSEODeleteManyArgs} args - Arguments to filter PageSEOS to delete.
     * @example
     * // Delete a few PageSEOS
     * const { count } = await prisma.pageSEO.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PageSEODeleteManyArgs>(args?: SelectSubset<T, PageSEODeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageSEOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageSEOUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PageSEOS
     * const pageSEO = await prisma.pageSEO.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PageSEOUpdateManyArgs>(args: SelectSubset<T, PageSEOUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PageSEO.
     * @param {PageSEOUpsertArgs} args - Arguments to update or create a PageSEO.
     * @example
     * // Update or create a PageSEO
     * const pageSEO = await prisma.pageSEO.upsert({
     *   create: {
     *     // ... data to create a PageSEO
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PageSEO we want to update
     *   }
     * })
     */
    upsert<T extends PageSEOUpsertArgs>(args: SelectSubset<T, PageSEOUpsertArgs<ExtArgs>>): Prisma__PageSEOClient<$Result.GetResult<Prisma.$PageSEOPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PageSEOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageSEOCountArgs} args - Arguments to filter PageSEOS to count.
     * @example
     * // Count the number of PageSEOS
     * const count = await prisma.pageSEO.count({
     *   where: {
     *     // ... the filter for the PageSEOS we want to count
     *   }
     * })
    **/
    count<T extends PageSEOCountArgs>(
      args?: Subset<T, PageSEOCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageSEOCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PageSEO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageSEOAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PageSEOAggregateArgs>(args: Subset<T, PageSEOAggregateArgs>): Prisma.PrismaPromise<GetPageSEOAggregateType<T>>

    /**
     * Group by PageSEO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageSEOGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PageSEOGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageSEOGroupByArgs['orderBy'] }
        : { orderBy?: PageSEOGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PageSEOGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageSEOGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PageSEO model
   */
  readonly fields: PageSEOFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PageSEO.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageSEOClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PageSEO model
   */ 
  interface PageSEOFieldRefs {
    readonly id: FieldRef<"PageSEO", 'Int'>
    readonly page: FieldRef<"PageSEO", 'String'>
    readonly title: FieldRef<"PageSEO", 'String'>
    readonly description: FieldRef<"PageSEO", 'String'>
    readonly ogImage: FieldRef<"PageSEO", 'String'>
    readonly updatedAt: FieldRef<"PageSEO", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PageSEO findUnique
   */
  export type PageSEOFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageSEO
     */
    select?: PageSEOSelect<ExtArgs> | null
    /**
     * Filter, which PageSEO to fetch.
     */
    where: PageSEOWhereUniqueInput
  }

  /**
   * PageSEO findUniqueOrThrow
   */
  export type PageSEOFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageSEO
     */
    select?: PageSEOSelect<ExtArgs> | null
    /**
     * Filter, which PageSEO to fetch.
     */
    where: PageSEOWhereUniqueInput
  }

  /**
   * PageSEO findFirst
   */
  export type PageSEOFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageSEO
     */
    select?: PageSEOSelect<ExtArgs> | null
    /**
     * Filter, which PageSEO to fetch.
     */
    where?: PageSEOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageSEOS to fetch.
     */
    orderBy?: PageSEOOrderByWithRelationInput | PageSEOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageSEOS.
     */
    cursor?: PageSEOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageSEOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageSEOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageSEOS.
     */
    distinct?: PageSEOScalarFieldEnum | PageSEOScalarFieldEnum[]
  }

  /**
   * PageSEO findFirstOrThrow
   */
  export type PageSEOFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageSEO
     */
    select?: PageSEOSelect<ExtArgs> | null
    /**
     * Filter, which PageSEO to fetch.
     */
    where?: PageSEOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageSEOS to fetch.
     */
    orderBy?: PageSEOOrderByWithRelationInput | PageSEOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageSEOS.
     */
    cursor?: PageSEOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageSEOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageSEOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageSEOS.
     */
    distinct?: PageSEOScalarFieldEnum | PageSEOScalarFieldEnum[]
  }

  /**
   * PageSEO findMany
   */
  export type PageSEOFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageSEO
     */
    select?: PageSEOSelect<ExtArgs> | null
    /**
     * Filter, which PageSEOS to fetch.
     */
    where?: PageSEOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageSEOS to fetch.
     */
    orderBy?: PageSEOOrderByWithRelationInput | PageSEOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PageSEOS.
     */
    cursor?: PageSEOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageSEOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageSEOS.
     */
    skip?: number
    distinct?: PageSEOScalarFieldEnum | PageSEOScalarFieldEnum[]
  }

  /**
   * PageSEO create
   */
  export type PageSEOCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageSEO
     */
    select?: PageSEOSelect<ExtArgs> | null
    /**
     * The data needed to create a PageSEO.
     */
    data: XOR<PageSEOCreateInput, PageSEOUncheckedCreateInput>
  }

  /**
   * PageSEO createMany
   */
  export type PageSEOCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PageSEOS.
     */
    data: PageSEOCreateManyInput | PageSEOCreateManyInput[]
  }

  /**
   * PageSEO createManyAndReturn
   */
  export type PageSEOCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageSEO
     */
    select?: PageSEOSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PageSEOS.
     */
    data: PageSEOCreateManyInput | PageSEOCreateManyInput[]
  }

  /**
   * PageSEO update
   */
  export type PageSEOUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageSEO
     */
    select?: PageSEOSelect<ExtArgs> | null
    /**
     * The data needed to update a PageSEO.
     */
    data: XOR<PageSEOUpdateInput, PageSEOUncheckedUpdateInput>
    /**
     * Choose, which PageSEO to update.
     */
    where: PageSEOWhereUniqueInput
  }

  /**
   * PageSEO updateMany
   */
  export type PageSEOUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PageSEOS.
     */
    data: XOR<PageSEOUpdateManyMutationInput, PageSEOUncheckedUpdateManyInput>
    /**
     * Filter which PageSEOS to update
     */
    where?: PageSEOWhereInput
  }

  /**
   * PageSEO upsert
   */
  export type PageSEOUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageSEO
     */
    select?: PageSEOSelect<ExtArgs> | null
    /**
     * The filter to search for the PageSEO to update in case it exists.
     */
    where: PageSEOWhereUniqueInput
    /**
     * In case the PageSEO found by the `where` argument doesn't exist, create a new PageSEO with this data.
     */
    create: XOR<PageSEOCreateInput, PageSEOUncheckedCreateInput>
    /**
     * In case the PageSEO was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageSEOUpdateInput, PageSEOUncheckedUpdateInput>
  }

  /**
   * PageSEO delete
   */
  export type PageSEODeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageSEO
     */
    select?: PageSEOSelect<ExtArgs> | null
    /**
     * Filter which PageSEO to delete.
     */
    where: PageSEOWhereUniqueInput
  }

  /**
   * PageSEO deleteMany
   */
  export type PageSEODeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageSEOS to delete
     */
    where?: PageSEOWhereInput
  }

  /**
   * PageSEO without action
   */
  export type PageSEODefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageSEO
     */
    select?: PageSEOSelect<ExtArgs> | null
  }


  /**
   * Model AdminUser
   */

  export type AggregateAdminUser = {
    _count: AdminUserCountAggregateOutputType | null
    _avg: AdminUserAvgAggregateOutputType | null
    _sum: AdminUserSumAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  export type AdminUserAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminUserSumAggregateOutputType = {
    id: number | null
  }

  export type AdminUserMinAggregateOutputType = {
    id: number | null
    email: string | null
    passwordHash: string | null
    updatedAt: Date | null
  }

  export type AdminUserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    passwordHash: string | null
    updatedAt: Date | null
  }

  export type AdminUserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    updatedAt: number
    _all: number
  }


  export type AdminUserAvgAggregateInputType = {
    id?: true
  }

  export type AdminUserSumAggregateInputType = {
    id?: true
  }

  export type AdminUserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    updatedAt?: true
  }

  export type AdminUserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    updatedAt?: true
  }

  export type AdminUserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUser to aggregate.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminUsers
    **/
    _count?: true | AdminUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminUserMaxAggregateInputType
  }

  export type GetAdminUserAggregateType<T extends AdminUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminUser[P]>
      : GetScalarType<T[P], AggregateAdminUser[P]>
  }




  export type AdminUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminUserWhereInput
    orderBy?: AdminUserOrderByWithAggregationInput | AdminUserOrderByWithAggregationInput[]
    by: AdminUserScalarFieldEnum[] | AdminUserScalarFieldEnum
    having?: AdminUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminUserCountAggregateInputType | true
    _avg?: AdminUserAvgAggregateInputType
    _sum?: AdminUserSumAggregateInputType
    _min?: AdminUserMinAggregateInputType
    _max?: AdminUserMaxAggregateInputType
  }

  export type AdminUserGroupByOutputType = {
    id: number
    email: string
    passwordHash: string
    updatedAt: Date
    _count: AdminUserCountAggregateOutputType | null
    _avg: AdminUserAvgAggregateOutputType | null
    _sum: AdminUserSumAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  type GetAdminUserGroupByPayload<T extends AdminUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
            : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
        }
      >
    >


  export type AdminUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    updatedAt?: boolean
  }


  export type $AdminUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      passwordHash: string
      updatedAt: Date
    }, ExtArgs["result"]["adminUser"]>
    composites: {}
  }

  type AdminUserGetPayload<S extends boolean | null | undefined | AdminUserDefaultArgs> = $Result.GetResult<Prisma.$AdminUserPayload, S>

  type AdminUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminUserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminUserCountAggregateInputType | true
    }

  export interface AdminUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminUser'], meta: { name: 'AdminUser' } }
    /**
     * Find zero or one AdminUser that matches the filter.
     * @param {AdminUserFindUniqueArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminUserFindUniqueArgs>(args: SelectSubset<T, AdminUserFindUniqueArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AdminUser that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminUserFindUniqueOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AdminUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminUserFindFirstArgs>(args?: SelectSubset<T, AdminUserFindFirstArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AdminUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AdminUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminUsers
     * const adminUsers = await prisma.adminUser.findMany()
     * 
     * // Get first 10 AdminUsers
     * const adminUsers = await prisma.adminUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminUserFindManyArgs>(args?: SelectSubset<T, AdminUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AdminUser.
     * @param {AdminUserCreateArgs} args - Arguments to create a AdminUser.
     * @example
     * // Create one AdminUser
     * const AdminUser = await prisma.adminUser.create({
     *   data: {
     *     // ... data to create a AdminUser
     *   }
     * })
     * 
     */
    create<T extends AdminUserCreateArgs>(args: SelectSubset<T, AdminUserCreateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AdminUsers.
     * @param {AdminUserCreateManyArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminUserCreateManyArgs>(args?: SelectSubset<T, AdminUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminUsers and returns the data saved in the database.
     * @param {AdminUserCreateManyAndReturnArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AdminUser.
     * @param {AdminUserDeleteArgs} args - Arguments to delete one AdminUser.
     * @example
     * // Delete one AdminUser
     * const AdminUser = await prisma.adminUser.delete({
     *   where: {
     *     // ... filter to delete one AdminUser
     *   }
     * })
     * 
     */
    delete<T extends AdminUserDeleteArgs>(args: SelectSubset<T, AdminUserDeleteArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AdminUser.
     * @param {AdminUserUpdateArgs} args - Arguments to update one AdminUser.
     * @example
     * // Update one AdminUser
     * const adminUser = await prisma.adminUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUserUpdateArgs>(args: SelectSubset<T, AdminUserUpdateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AdminUsers.
     * @param {AdminUserDeleteManyArgs} args - Arguments to filter AdminUsers to delete.
     * @example
     * // Delete a few AdminUsers
     * const { count } = await prisma.adminUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminUserDeleteManyArgs>(args?: SelectSubset<T, AdminUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUserUpdateManyArgs>(args: SelectSubset<T, AdminUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdminUser.
     * @param {AdminUserUpsertArgs} args - Arguments to update or create a AdminUser.
     * @example
     * // Update or create a AdminUser
     * const adminUser = await prisma.adminUser.upsert({
     *   create: {
     *     // ... data to create a AdminUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminUser we want to update
     *   }
     * })
     */
    upsert<T extends AdminUserUpsertArgs>(args: SelectSubset<T, AdminUserUpsertArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserCountArgs} args - Arguments to filter AdminUsers to count.
     * @example
     * // Count the number of AdminUsers
     * const count = await prisma.adminUser.count({
     *   where: {
     *     // ... the filter for the AdminUsers we want to count
     *   }
     * })
    **/
    count<T extends AdminUserCountArgs>(
      args?: Subset<T, AdminUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminUserAggregateArgs>(args: Subset<T, AdminUserAggregateArgs>): Prisma.PrismaPromise<GetAdminUserAggregateType<T>>

    /**
     * Group by AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminUserGroupByArgs['orderBy'] }
        : { orderBy?: AdminUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminUser model
   */
  readonly fields: AdminUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminUser model
   */ 
  interface AdminUserFieldRefs {
    readonly id: FieldRef<"AdminUser", 'Int'>
    readonly email: FieldRef<"AdminUser", 'String'>
    readonly passwordHash: FieldRef<"AdminUser", 'String'>
    readonly updatedAt: FieldRef<"AdminUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminUser findUnique
   */
  export type AdminUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findUniqueOrThrow
   */
  export type AdminUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findFirst
   */
  export type AdminUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findFirstOrThrow
   */
  export type AdminUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findMany
   */
  export type AdminUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Filter, which AdminUsers to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser create
   */
  export type AdminUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * The data needed to create a AdminUser.
     */
    data: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
  }

  /**
   * AdminUser createMany
   */
  export type AdminUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
  }

  /**
   * AdminUser createManyAndReturn
   */
  export type AdminUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
  }

  /**
   * AdminUser update
   */
  export type AdminUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * The data needed to update a AdminUser.
     */
    data: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
    /**
     * Choose, which AdminUser to update.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser updateMany
   */
  export type AdminUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
  }

  /**
   * AdminUser upsert
   */
  export type AdminUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * The filter to search for the AdminUser to update in case it exists.
     */
    where: AdminUserWhereUniqueInput
    /**
     * In case the AdminUser found by the `where` argument doesn't exist, create a new AdminUser with this data.
     */
    create: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
    /**
     * In case the AdminUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
  }

  /**
   * AdminUser delete
   */
  export type AdminUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Filter which AdminUser to delete.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser deleteMany
   */
  export type AdminUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUsers to delete
     */
    where?: AdminUserWhereInput
  }

  /**
   * AdminUser without action
   */
  export type AdminUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
  }


  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _avg: ActivityLogAvgAggregateOutputType | null
    _sum: ActivityLogSumAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogAvgAggregateOutputType = {
    id: number | null
  }

  export type ActivityLogSumAggregateOutputType = {
    id: number | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: number | null
    action: string | null
    section: string | null
    details: string | null
    createdAt: Date | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: number | null
    action: string | null
    section: string | null
    details: string | null
    createdAt: Date | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    action: number
    section: number
    details: number
    createdAt: number
    _all: number
  }


  export type ActivityLogAvgAggregateInputType = {
    id?: true
  }

  export type ActivityLogSumAggregateInputType = {
    id?: true
  }

  export type ActivityLogMinAggregateInputType = {
    id?: true
    action?: true
    section?: true
    details?: true
    createdAt?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    action?: true
    section?: true
    details?: true
    createdAt?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    action?: true
    section?: true
    details?: true
    createdAt?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivityLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type ActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithAggregationInput | ActivityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: ActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _avg?: ActivityLogAvgAggregateInputType
    _sum?: ActivityLogSumAggregateInputType
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    id: number
    action: string
    section: string
    details: string
    createdAt: Date
    _count: ActivityLogCountAggregateOutputType | null
    _avg: ActivityLogAvgAggregateOutputType | null
    _sum: ActivityLogSumAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    section?: boolean
    details?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    section?: boolean
    details?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectScalar = {
    id?: boolean
    action?: boolean
    section?: boolean
    details?: boolean
    createdAt?: boolean
  }


  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      action: string
      section: string
      details: string
      createdAt: Date
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'], meta: { name: 'ActivityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityLogCreateManyArgs>(args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityLogs and returns the data saved in the database.
     * @param {ActivityLogCreateManyAndReturnArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityLog model
   */
  readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActivityLog model
   */ 
  interface ActivityLogFieldRefs {
    readonly id: FieldRef<"ActivityLog", 'Int'>
    readonly action: FieldRef<"ActivityLog", 'String'>
    readonly section: FieldRef<"ActivityLog", 'String'>
    readonly details: FieldRef<"ActivityLog", 'String'>
    readonly createdAt: FieldRef<"ActivityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
  }

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
  }

  /**
   * ActivityLog createManyAndReturn
   */
  export type ActivityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
  }

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
  }

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
  }

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SiteConfigScalarFieldEnum: {
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

  export type SiteConfigScalarFieldEnum = (typeof SiteConfigScalarFieldEnum)[keyof typeof SiteConfigScalarFieldEnum]


  export const NavItemScalarFieldEnum: {
    id: 'id',
    label: 'label',
    href: 'href',
    order: 'order'
  };

  export type NavItemScalarFieldEnum = (typeof NavItemScalarFieldEnum)[keyof typeof NavItemScalarFieldEnum]


  export const FooterConfigScalarFieldEnum: {
    id: 'id',
    brandText: 'brandText',
    copyrightName: 'copyrightName',
    exploreLinks: 'exploreLinks',
    programLinks: 'programLinks',
    updatedAt: 'updatedAt'
  };

  export type FooterConfigScalarFieldEnum = (typeof FooterConfigScalarFieldEnum)[keyof typeof FooterConfigScalarFieldEnum]


  export const HeroSectionScalarFieldEnum: {
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

  export type HeroSectionScalarFieldEnum = (typeof HeroSectionScalarFieldEnum)[keyof typeof HeroSectionScalarFieldEnum]


  export const TeamMemberScalarFieldEnum: {
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

  export type TeamMemberScalarFieldEnum = (typeof TeamMemberScalarFieldEnum)[keyof typeof TeamMemberScalarFieldEnum]


  export const ProgramScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    icon: 'icon',
    features: 'features',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProgramScalarFieldEnum = (typeof ProgramScalarFieldEnum)[keyof typeof ProgramScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
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

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const InnovatorScalarFieldEnum: {
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

  export type InnovatorScalarFieldEnum = (typeof InnovatorScalarFieldEnum)[keyof typeof InnovatorScalarFieldEnum]


  export const MetricScalarFieldEnum: {
    id: 'id',
    label: 'label',
    value: 'value',
    suffix: 'suffix',
    prefix: 'prefix',
    order: 'order'
  };

  export type MetricScalarFieldEnum = (typeof MetricScalarFieldEnum)[keyof typeof MetricScalarFieldEnum]


  export const ValueScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    icon: 'icon',
    order: 'order'
  };

  export type ValueScalarFieldEnum = (typeof ValueScalarFieldEnum)[keyof typeof ValueScalarFieldEnum]


  export const AboutContentScalarFieldEnum: {
    id: 'id',
    story: 'story',
    mission: 'mission',
    vision: 'vision',
    milestones: 'milestones',
    updatedAt: 'updatedAt'
  };

  export type AboutContentScalarFieldEnum = (typeof AboutContentScalarFieldEnum)[keyof typeof AboutContentScalarFieldEnum]


  export const PageSEOScalarFieldEnum: {
    id: 'id',
    page: 'page',
    title: 'title',
    description: 'description',
    ogImage: 'ogImage',
    updatedAt: 'updatedAt'
  };

  export type PageSEOScalarFieldEnum = (typeof PageSEOScalarFieldEnum)[keyof typeof PageSEOScalarFieldEnum]


  export const AdminUserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    updatedAt: 'updatedAt'
  };

  export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    section: 'section',
    details: 'details',
    createdAt: 'createdAt'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type SiteConfigWhereInput = {
    AND?: SiteConfigWhereInput | SiteConfigWhereInput[]
    OR?: SiteConfigWhereInput[]
    NOT?: SiteConfigWhereInput | SiteConfigWhereInput[]
    id?: IntFilter<"SiteConfig"> | number
    name?: StringFilter<"SiteConfig"> | string
    tagline?: StringFilter<"SiteConfig"> | string
    description?: StringFilter<"SiteConfig"> | string
    email?: StringFilter<"SiteConfig"> | string
    phone?: StringFilter<"SiteConfig"> | string
    address?: StringFilter<"SiteConfig"> | string
    twitter?: StringFilter<"SiteConfig"> | string
    linkedin?: StringFilter<"SiteConfig"> | string
    github?: StringFilter<"SiteConfig"> | string
    faviconUrl?: StringFilter<"SiteConfig"> | string
    logoUrl?: StringFilter<"SiteConfig"> | string
    primaryColor?: StringFilter<"SiteConfig"> | string
    formspreeId?: StringFilter<"SiteConfig"> | string
    updatedAt?: DateTimeFilter<"SiteConfig"> | Date | string
  }

  export type SiteConfigOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tagline?: SortOrder
    description?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    twitter?: SortOrder
    linkedin?: SortOrder
    github?: SortOrder
    faviconUrl?: SortOrder
    logoUrl?: SortOrder
    primaryColor?: SortOrder
    formspreeId?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SiteConfigWhereInput | SiteConfigWhereInput[]
    OR?: SiteConfigWhereInput[]
    NOT?: SiteConfigWhereInput | SiteConfigWhereInput[]
    name?: StringFilter<"SiteConfig"> | string
    tagline?: StringFilter<"SiteConfig"> | string
    description?: StringFilter<"SiteConfig"> | string
    email?: StringFilter<"SiteConfig"> | string
    phone?: StringFilter<"SiteConfig"> | string
    address?: StringFilter<"SiteConfig"> | string
    twitter?: StringFilter<"SiteConfig"> | string
    linkedin?: StringFilter<"SiteConfig"> | string
    github?: StringFilter<"SiteConfig"> | string
    faviconUrl?: StringFilter<"SiteConfig"> | string
    logoUrl?: StringFilter<"SiteConfig"> | string
    primaryColor?: StringFilter<"SiteConfig"> | string
    formspreeId?: StringFilter<"SiteConfig"> | string
    updatedAt?: DateTimeFilter<"SiteConfig"> | Date | string
  }, "id">

  export type SiteConfigOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    tagline?: SortOrder
    description?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    twitter?: SortOrder
    linkedin?: SortOrder
    github?: SortOrder
    faviconUrl?: SortOrder
    logoUrl?: SortOrder
    primaryColor?: SortOrder
    formspreeId?: SortOrder
    updatedAt?: SortOrder
    _count?: SiteConfigCountOrderByAggregateInput
    _avg?: SiteConfigAvgOrderByAggregateInput
    _max?: SiteConfigMaxOrderByAggregateInput
    _min?: SiteConfigMinOrderByAggregateInput
    _sum?: SiteConfigSumOrderByAggregateInput
  }

  export type SiteConfigScalarWhereWithAggregatesInput = {
    AND?: SiteConfigScalarWhereWithAggregatesInput | SiteConfigScalarWhereWithAggregatesInput[]
    OR?: SiteConfigScalarWhereWithAggregatesInput[]
    NOT?: SiteConfigScalarWhereWithAggregatesInput | SiteConfigScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SiteConfig"> | number
    name?: StringWithAggregatesFilter<"SiteConfig"> | string
    tagline?: StringWithAggregatesFilter<"SiteConfig"> | string
    description?: StringWithAggregatesFilter<"SiteConfig"> | string
    email?: StringWithAggregatesFilter<"SiteConfig"> | string
    phone?: StringWithAggregatesFilter<"SiteConfig"> | string
    address?: StringWithAggregatesFilter<"SiteConfig"> | string
    twitter?: StringWithAggregatesFilter<"SiteConfig"> | string
    linkedin?: StringWithAggregatesFilter<"SiteConfig"> | string
    github?: StringWithAggregatesFilter<"SiteConfig"> | string
    faviconUrl?: StringWithAggregatesFilter<"SiteConfig"> | string
    logoUrl?: StringWithAggregatesFilter<"SiteConfig"> | string
    primaryColor?: StringWithAggregatesFilter<"SiteConfig"> | string
    formspreeId?: StringWithAggregatesFilter<"SiteConfig"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"SiteConfig"> | Date | string
  }

  export type NavItemWhereInput = {
    AND?: NavItemWhereInput | NavItemWhereInput[]
    OR?: NavItemWhereInput[]
    NOT?: NavItemWhereInput | NavItemWhereInput[]
    id?: IntFilter<"NavItem"> | number
    label?: StringFilter<"NavItem"> | string
    href?: StringFilter<"NavItem"> | string
    order?: IntFilter<"NavItem"> | number
  }

  export type NavItemOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    href?: SortOrder
    order?: SortOrder
  }

  export type NavItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NavItemWhereInput | NavItemWhereInput[]
    OR?: NavItemWhereInput[]
    NOT?: NavItemWhereInput | NavItemWhereInput[]
    label?: StringFilter<"NavItem"> | string
    href?: StringFilter<"NavItem"> | string
    order?: IntFilter<"NavItem"> | number
  }, "id">

  export type NavItemOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    href?: SortOrder
    order?: SortOrder
    _count?: NavItemCountOrderByAggregateInput
    _avg?: NavItemAvgOrderByAggregateInput
    _max?: NavItemMaxOrderByAggregateInput
    _min?: NavItemMinOrderByAggregateInput
    _sum?: NavItemSumOrderByAggregateInput
  }

  export type NavItemScalarWhereWithAggregatesInput = {
    AND?: NavItemScalarWhereWithAggregatesInput | NavItemScalarWhereWithAggregatesInput[]
    OR?: NavItemScalarWhereWithAggregatesInput[]
    NOT?: NavItemScalarWhereWithAggregatesInput | NavItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NavItem"> | number
    label?: StringWithAggregatesFilter<"NavItem"> | string
    href?: StringWithAggregatesFilter<"NavItem"> | string
    order?: IntWithAggregatesFilter<"NavItem"> | number
  }

  export type FooterConfigWhereInput = {
    AND?: FooterConfigWhereInput | FooterConfigWhereInput[]
    OR?: FooterConfigWhereInput[]
    NOT?: FooterConfigWhereInput | FooterConfigWhereInput[]
    id?: IntFilter<"FooterConfig"> | number
    brandText?: StringFilter<"FooterConfig"> | string
    copyrightName?: StringFilter<"FooterConfig"> | string
    exploreLinks?: StringFilter<"FooterConfig"> | string
    programLinks?: StringFilter<"FooterConfig"> | string
    updatedAt?: DateTimeFilter<"FooterConfig"> | Date | string
  }

  export type FooterConfigOrderByWithRelationInput = {
    id?: SortOrder
    brandText?: SortOrder
    copyrightName?: SortOrder
    exploreLinks?: SortOrder
    programLinks?: SortOrder
    updatedAt?: SortOrder
  }

  export type FooterConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FooterConfigWhereInput | FooterConfigWhereInput[]
    OR?: FooterConfigWhereInput[]
    NOT?: FooterConfigWhereInput | FooterConfigWhereInput[]
    brandText?: StringFilter<"FooterConfig"> | string
    copyrightName?: StringFilter<"FooterConfig"> | string
    exploreLinks?: StringFilter<"FooterConfig"> | string
    programLinks?: StringFilter<"FooterConfig"> | string
    updatedAt?: DateTimeFilter<"FooterConfig"> | Date | string
  }, "id">

  export type FooterConfigOrderByWithAggregationInput = {
    id?: SortOrder
    brandText?: SortOrder
    copyrightName?: SortOrder
    exploreLinks?: SortOrder
    programLinks?: SortOrder
    updatedAt?: SortOrder
    _count?: FooterConfigCountOrderByAggregateInput
    _avg?: FooterConfigAvgOrderByAggregateInput
    _max?: FooterConfigMaxOrderByAggregateInput
    _min?: FooterConfigMinOrderByAggregateInput
    _sum?: FooterConfigSumOrderByAggregateInput
  }

  export type FooterConfigScalarWhereWithAggregatesInput = {
    AND?: FooterConfigScalarWhereWithAggregatesInput | FooterConfigScalarWhereWithAggregatesInput[]
    OR?: FooterConfigScalarWhereWithAggregatesInput[]
    NOT?: FooterConfigScalarWhereWithAggregatesInput | FooterConfigScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FooterConfig"> | number
    brandText?: StringWithAggregatesFilter<"FooterConfig"> | string
    copyrightName?: StringWithAggregatesFilter<"FooterConfig"> | string
    exploreLinks?: StringWithAggregatesFilter<"FooterConfig"> | string
    programLinks?: StringWithAggregatesFilter<"FooterConfig"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"FooterConfig"> | Date | string
  }

  export type HeroSectionWhereInput = {
    AND?: HeroSectionWhereInput | HeroSectionWhereInput[]
    OR?: HeroSectionWhereInput[]
    NOT?: HeroSectionWhereInput | HeroSectionWhereInput[]
    id?: IntFilter<"HeroSection"> | number
    headline?: StringFilter<"HeroSection"> | string
    subheadline?: StringFilter<"HeroSection"> | string
    cta1Label?: StringFilter<"HeroSection"> | string
    cta1Href?: StringFilter<"HeroSection"> | string
    cta2Label?: StringFilter<"HeroSection"> | string
    cta2Href?: StringFilter<"HeroSection"> | string
    imageUrl?: StringFilter<"HeroSection"> | string
    updatedAt?: DateTimeFilter<"HeroSection"> | Date | string
  }

  export type HeroSectionOrderByWithRelationInput = {
    id?: SortOrder
    headline?: SortOrder
    subheadline?: SortOrder
    cta1Label?: SortOrder
    cta1Href?: SortOrder
    cta2Label?: SortOrder
    cta2Href?: SortOrder
    imageUrl?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeroSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HeroSectionWhereInput | HeroSectionWhereInput[]
    OR?: HeroSectionWhereInput[]
    NOT?: HeroSectionWhereInput | HeroSectionWhereInput[]
    headline?: StringFilter<"HeroSection"> | string
    subheadline?: StringFilter<"HeroSection"> | string
    cta1Label?: StringFilter<"HeroSection"> | string
    cta1Href?: StringFilter<"HeroSection"> | string
    cta2Label?: StringFilter<"HeroSection"> | string
    cta2Href?: StringFilter<"HeroSection"> | string
    imageUrl?: StringFilter<"HeroSection"> | string
    updatedAt?: DateTimeFilter<"HeroSection"> | Date | string
  }, "id">

  export type HeroSectionOrderByWithAggregationInput = {
    id?: SortOrder
    headline?: SortOrder
    subheadline?: SortOrder
    cta1Label?: SortOrder
    cta1Href?: SortOrder
    cta2Label?: SortOrder
    cta2Href?: SortOrder
    imageUrl?: SortOrder
    updatedAt?: SortOrder
    _count?: HeroSectionCountOrderByAggregateInput
    _avg?: HeroSectionAvgOrderByAggregateInput
    _max?: HeroSectionMaxOrderByAggregateInput
    _min?: HeroSectionMinOrderByAggregateInput
    _sum?: HeroSectionSumOrderByAggregateInput
  }

  export type HeroSectionScalarWhereWithAggregatesInput = {
    AND?: HeroSectionScalarWhereWithAggregatesInput | HeroSectionScalarWhereWithAggregatesInput[]
    OR?: HeroSectionScalarWhereWithAggregatesInput[]
    NOT?: HeroSectionScalarWhereWithAggregatesInput | HeroSectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HeroSection"> | number
    headline?: StringWithAggregatesFilter<"HeroSection"> | string
    subheadline?: StringWithAggregatesFilter<"HeroSection"> | string
    cta1Label?: StringWithAggregatesFilter<"HeroSection"> | string
    cta1Href?: StringWithAggregatesFilter<"HeroSection"> | string
    cta2Label?: StringWithAggregatesFilter<"HeroSection"> | string
    cta2Href?: StringWithAggregatesFilter<"HeroSection"> | string
    imageUrl?: StringWithAggregatesFilter<"HeroSection"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"HeroSection"> | Date | string
  }

  export type TeamMemberWhereInput = {
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[]
    OR?: TeamMemberWhereInput[]
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[]
    id?: IntFilter<"TeamMember"> | number
    name?: StringFilter<"TeamMember"> | string
    role?: StringFilter<"TeamMember"> | string
    categories?: StringFilter<"TeamMember"> | string
    image?: StringFilter<"TeamMember"> | string
    bio?: StringFilter<"TeamMember"> | string
    linkedin?: StringFilter<"TeamMember"> | string
    twitter?: StringFilter<"TeamMember"> | string
    order?: IntFilter<"TeamMember"> | number
    createdAt?: DateTimeFilter<"TeamMember"> | Date | string
    updatedAt?: DateTimeFilter<"TeamMember"> | Date | string
  }

  export type TeamMemberOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    categories?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    linkedin?: SortOrder
    twitter?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[]
    OR?: TeamMemberWhereInput[]
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[]
    name?: StringFilter<"TeamMember"> | string
    role?: StringFilter<"TeamMember"> | string
    categories?: StringFilter<"TeamMember"> | string
    image?: StringFilter<"TeamMember"> | string
    bio?: StringFilter<"TeamMember"> | string
    linkedin?: StringFilter<"TeamMember"> | string
    twitter?: StringFilter<"TeamMember"> | string
    order?: IntFilter<"TeamMember"> | number
    createdAt?: DateTimeFilter<"TeamMember"> | Date | string
    updatedAt?: DateTimeFilter<"TeamMember"> | Date | string
  }, "id">

  export type TeamMemberOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    categories?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    linkedin?: SortOrder
    twitter?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeamMemberCountOrderByAggregateInput
    _avg?: TeamMemberAvgOrderByAggregateInput
    _max?: TeamMemberMaxOrderByAggregateInput
    _min?: TeamMemberMinOrderByAggregateInput
    _sum?: TeamMemberSumOrderByAggregateInput
  }

  export type TeamMemberScalarWhereWithAggregatesInput = {
    AND?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[]
    OR?: TeamMemberScalarWhereWithAggregatesInput[]
    NOT?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TeamMember"> | number
    name?: StringWithAggregatesFilter<"TeamMember"> | string
    role?: StringWithAggregatesFilter<"TeamMember"> | string
    categories?: StringWithAggregatesFilter<"TeamMember"> | string
    image?: StringWithAggregatesFilter<"TeamMember"> | string
    bio?: StringWithAggregatesFilter<"TeamMember"> | string
    linkedin?: StringWithAggregatesFilter<"TeamMember"> | string
    twitter?: StringWithAggregatesFilter<"TeamMember"> | string
    order?: IntWithAggregatesFilter<"TeamMember"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TeamMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TeamMember"> | Date | string
  }

  export type ProgramWhereInput = {
    AND?: ProgramWhereInput | ProgramWhereInput[]
    OR?: ProgramWhereInput[]
    NOT?: ProgramWhereInput | ProgramWhereInput[]
    id?: IntFilter<"Program"> | number
    title?: StringFilter<"Program"> | string
    description?: StringFilter<"Program"> | string
    icon?: StringFilter<"Program"> | string
    features?: StringFilter<"Program"> | string
    order?: IntFilter<"Program"> | number
    createdAt?: DateTimeFilter<"Program"> | Date | string
    updatedAt?: DateTimeFilter<"Program"> | Date | string
  }

  export type ProgramOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    features?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgramWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProgramWhereInput | ProgramWhereInput[]
    OR?: ProgramWhereInput[]
    NOT?: ProgramWhereInput | ProgramWhereInput[]
    title?: StringFilter<"Program"> | string
    description?: StringFilter<"Program"> | string
    icon?: StringFilter<"Program"> | string
    features?: StringFilter<"Program"> | string
    order?: IntFilter<"Program"> | number
    createdAt?: DateTimeFilter<"Program"> | Date | string
    updatedAt?: DateTimeFilter<"Program"> | Date | string
  }, "id">

  export type ProgramOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    features?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProgramCountOrderByAggregateInput
    _avg?: ProgramAvgOrderByAggregateInput
    _max?: ProgramMaxOrderByAggregateInput
    _min?: ProgramMinOrderByAggregateInput
    _sum?: ProgramSumOrderByAggregateInput
  }

  export type ProgramScalarWhereWithAggregatesInput = {
    AND?: ProgramScalarWhereWithAggregatesInput | ProgramScalarWhereWithAggregatesInput[]
    OR?: ProgramScalarWhereWithAggregatesInput[]
    NOT?: ProgramScalarWhereWithAggregatesInput | ProgramScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Program"> | number
    title?: StringWithAggregatesFilter<"Program"> | string
    description?: StringWithAggregatesFilter<"Program"> | string
    icon?: StringWithAggregatesFilter<"Program"> | string
    features?: StringWithAggregatesFilter<"Program"> | string
    order?: IntWithAggregatesFilter<"Program"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Program"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Program"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: IntFilter<"Project"> | number
    slug?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    category?: StringFilter<"Project"> | string
    image?: StringFilter<"Project"> | string
    tags?: StringFilter<"Project"> | string
    innovators?: StringFilter<"Project"> | string
    order?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    image?: SortOrder
    tags?: SortOrder
    innovators?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    category?: StringFilter<"Project"> | string
    image?: StringFilter<"Project"> | string
    tags?: StringFilter<"Project"> | string
    innovators?: StringFilter<"Project"> | string
    order?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }, "id" | "slug">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    image?: SortOrder
    tags?: SortOrder
    innovators?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project"> | number
    slug?: StringWithAggregatesFilter<"Project"> | string
    title?: StringWithAggregatesFilter<"Project"> | string
    description?: StringWithAggregatesFilter<"Project"> | string
    category?: StringWithAggregatesFilter<"Project"> | string
    image?: StringWithAggregatesFilter<"Project"> | string
    tags?: StringWithAggregatesFilter<"Project"> | string
    innovators?: StringWithAggregatesFilter<"Project"> | string
    order?: IntWithAggregatesFilter<"Project"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type InnovatorWhereInput = {
    AND?: InnovatorWhereInput | InnovatorWhereInput[]
    OR?: InnovatorWhereInput[]
    NOT?: InnovatorWhereInput | InnovatorWhereInput[]
    id?: IntFilter<"Innovator"> | number
    slug?: StringFilter<"Innovator"> | string
    name?: StringFilter<"Innovator"> | string
    tagline?: StringFilter<"Innovator"> | string
    image?: StringFilter<"Innovator"> | string
    bio?: StringFilter<"Innovator"> | string
    projects?: StringFilter<"Innovator"> | string
    skills?: StringFilter<"Innovator"> | string
    quote?: StringFilter<"Innovator"> | string
    featured?: BoolFilter<"Innovator"> | boolean
    order?: IntFilter<"Innovator"> | number
    createdAt?: DateTimeFilter<"Innovator"> | Date | string
    updatedAt?: DateTimeFilter<"Innovator"> | Date | string
  }

  export type InnovatorOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    tagline?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    projects?: SortOrder
    skills?: SortOrder
    quote?: SortOrder
    featured?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InnovatorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: InnovatorWhereInput | InnovatorWhereInput[]
    OR?: InnovatorWhereInput[]
    NOT?: InnovatorWhereInput | InnovatorWhereInput[]
    name?: StringFilter<"Innovator"> | string
    tagline?: StringFilter<"Innovator"> | string
    image?: StringFilter<"Innovator"> | string
    bio?: StringFilter<"Innovator"> | string
    projects?: StringFilter<"Innovator"> | string
    skills?: StringFilter<"Innovator"> | string
    quote?: StringFilter<"Innovator"> | string
    featured?: BoolFilter<"Innovator"> | boolean
    order?: IntFilter<"Innovator"> | number
    createdAt?: DateTimeFilter<"Innovator"> | Date | string
    updatedAt?: DateTimeFilter<"Innovator"> | Date | string
  }, "id" | "slug">

  export type InnovatorOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    tagline?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    projects?: SortOrder
    skills?: SortOrder
    quote?: SortOrder
    featured?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InnovatorCountOrderByAggregateInput
    _avg?: InnovatorAvgOrderByAggregateInput
    _max?: InnovatorMaxOrderByAggregateInput
    _min?: InnovatorMinOrderByAggregateInput
    _sum?: InnovatorSumOrderByAggregateInput
  }

  export type InnovatorScalarWhereWithAggregatesInput = {
    AND?: InnovatorScalarWhereWithAggregatesInput | InnovatorScalarWhereWithAggregatesInput[]
    OR?: InnovatorScalarWhereWithAggregatesInput[]
    NOT?: InnovatorScalarWhereWithAggregatesInput | InnovatorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Innovator"> | number
    slug?: StringWithAggregatesFilter<"Innovator"> | string
    name?: StringWithAggregatesFilter<"Innovator"> | string
    tagline?: StringWithAggregatesFilter<"Innovator"> | string
    image?: StringWithAggregatesFilter<"Innovator"> | string
    bio?: StringWithAggregatesFilter<"Innovator"> | string
    projects?: StringWithAggregatesFilter<"Innovator"> | string
    skills?: StringWithAggregatesFilter<"Innovator"> | string
    quote?: StringWithAggregatesFilter<"Innovator"> | string
    featured?: BoolWithAggregatesFilter<"Innovator"> | boolean
    order?: IntWithAggregatesFilter<"Innovator"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Innovator"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Innovator"> | Date | string
  }

  export type MetricWhereInput = {
    AND?: MetricWhereInput | MetricWhereInput[]
    OR?: MetricWhereInput[]
    NOT?: MetricWhereInput | MetricWhereInput[]
    id?: IntFilter<"Metric"> | number
    label?: StringFilter<"Metric"> | string
    value?: StringFilter<"Metric"> | string
    suffix?: StringFilter<"Metric"> | string
    prefix?: StringFilter<"Metric"> | string
    order?: IntFilter<"Metric"> | number
  }

  export type MetricOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    value?: SortOrder
    suffix?: SortOrder
    prefix?: SortOrder
    order?: SortOrder
  }

  export type MetricWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MetricWhereInput | MetricWhereInput[]
    OR?: MetricWhereInput[]
    NOT?: MetricWhereInput | MetricWhereInput[]
    label?: StringFilter<"Metric"> | string
    value?: StringFilter<"Metric"> | string
    suffix?: StringFilter<"Metric"> | string
    prefix?: StringFilter<"Metric"> | string
    order?: IntFilter<"Metric"> | number
  }, "id">

  export type MetricOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    value?: SortOrder
    suffix?: SortOrder
    prefix?: SortOrder
    order?: SortOrder
    _count?: MetricCountOrderByAggregateInput
    _avg?: MetricAvgOrderByAggregateInput
    _max?: MetricMaxOrderByAggregateInput
    _min?: MetricMinOrderByAggregateInput
    _sum?: MetricSumOrderByAggregateInput
  }

  export type MetricScalarWhereWithAggregatesInput = {
    AND?: MetricScalarWhereWithAggregatesInput | MetricScalarWhereWithAggregatesInput[]
    OR?: MetricScalarWhereWithAggregatesInput[]
    NOT?: MetricScalarWhereWithAggregatesInput | MetricScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Metric"> | number
    label?: StringWithAggregatesFilter<"Metric"> | string
    value?: StringWithAggregatesFilter<"Metric"> | string
    suffix?: StringWithAggregatesFilter<"Metric"> | string
    prefix?: StringWithAggregatesFilter<"Metric"> | string
    order?: IntWithAggregatesFilter<"Metric"> | number
  }

  export type ValueWhereInput = {
    AND?: ValueWhereInput | ValueWhereInput[]
    OR?: ValueWhereInput[]
    NOT?: ValueWhereInput | ValueWhereInput[]
    id?: IntFilter<"Value"> | number
    title?: StringFilter<"Value"> | string
    description?: StringFilter<"Value"> | string
    icon?: StringFilter<"Value"> | string
    order?: IntFilter<"Value"> | number
  }

  export type ValueOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    order?: SortOrder
  }

  export type ValueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ValueWhereInput | ValueWhereInput[]
    OR?: ValueWhereInput[]
    NOT?: ValueWhereInput | ValueWhereInput[]
    title?: StringFilter<"Value"> | string
    description?: StringFilter<"Value"> | string
    icon?: StringFilter<"Value"> | string
    order?: IntFilter<"Value"> | number
  }, "id">

  export type ValueOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    order?: SortOrder
    _count?: ValueCountOrderByAggregateInput
    _avg?: ValueAvgOrderByAggregateInput
    _max?: ValueMaxOrderByAggregateInput
    _min?: ValueMinOrderByAggregateInput
    _sum?: ValueSumOrderByAggregateInput
  }

  export type ValueScalarWhereWithAggregatesInput = {
    AND?: ValueScalarWhereWithAggregatesInput | ValueScalarWhereWithAggregatesInput[]
    OR?: ValueScalarWhereWithAggregatesInput[]
    NOT?: ValueScalarWhereWithAggregatesInput | ValueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Value"> | number
    title?: StringWithAggregatesFilter<"Value"> | string
    description?: StringWithAggregatesFilter<"Value"> | string
    icon?: StringWithAggregatesFilter<"Value"> | string
    order?: IntWithAggregatesFilter<"Value"> | number
  }

  export type AboutContentWhereInput = {
    AND?: AboutContentWhereInput | AboutContentWhereInput[]
    OR?: AboutContentWhereInput[]
    NOT?: AboutContentWhereInput | AboutContentWhereInput[]
    id?: IntFilter<"AboutContent"> | number
    story?: StringFilter<"AboutContent"> | string
    mission?: StringFilter<"AboutContent"> | string
    vision?: StringFilter<"AboutContent"> | string
    milestones?: StringFilter<"AboutContent"> | string
    updatedAt?: DateTimeFilter<"AboutContent"> | Date | string
  }

  export type AboutContentOrderByWithRelationInput = {
    id?: SortOrder
    story?: SortOrder
    mission?: SortOrder
    vision?: SortOrder
    milestones?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutContentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AboutContentWhereInput | AboutContentWhereInput[]
    OR?: AboutContentWhereInput[]
    NOT?: AboutContentWhereInput | AboutContentWhereInput[]
    story?: StringFilter<"AboutContent"> | string
    mission?: StringFilter<"AboutContent"> | string
    vision?: StringFilter<"AboutContent"> | string
    milestones?: StringFilter<"AboutContent"> | string
    updatedAt?: DateTimeFilter<"AboutContent"> | Date | string
  }, "id">

  export type AboutContentOrderByWithAggregationInput = {
    id?: SortOrder
    story?: SortOrder
    mission?: SortOrder
    vision?: SortOrder
    milestones?: SortOrder
    updatedAt?: SortOrder
    _count?: AboutContentCountOrderByAggregateInput
    _avg?: AboutContentAvgOrderByAggregateInput
    _max?: AboutContentMaxOrderByAggregateInput
    _min?: AboutContentMinOrderByAggregateInput
    _sum?: AboutContentSumOrderByAggregateInput
  }

  export type AboutContentScalarWhereWithAggregatesInput = {
    AND?: AboutContentScalarWhereWithAggregatesInput | AboutContentScalarWhereWithAggregatesInput[]
    OR?: AboutContentScalarWhereWithAggregatesInput[]
    NOT?: AboutContentScalarWhereWithAggregatesInput | AboutContentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AboutContent"> | number
    story?: StringWithAggregatesFilter<"AboutContent"> | string
    mission?: StringWithAggregatesFilter<"AboutContent"> | string
    vision?: StringWithAggregatesFilter<"AboutContent"> | string
    milestones?: StringWithAggregatesFilter<"AboutContent"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"AboutContent"> | Date | string
  }

  export type PageSEOWhereInput = {
    AND?: PageSEOWhereInput | PageSEOWhereInput[]
    OR?: PageSEOWhereInput[]
    NOT?: PageSEOWhereInput | PageSEOWhereInput[]
    id?: IntFilter<"PageSEO"> | number
    page?: StringFilter<"PageSEO"> | string
    title?: StringFilter<"PageSEO"> | string
    description?: StringFilter<"PageSEO"> | string
    ogImage?: StringFilter<"PageSEO"> | string
    updatedAt?: DateTimeFilter<"PageSEO"> | Date | string
  }

  export type PageSEOOrderByWithRelationInput = {
    id?: SortOrder
    page?: SortOrder
    title?: SortOrder
    description?: SortOrder
    ogImage?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageSEOWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    page?: string
    AND?: PageSEOWhereInput | PageSEOWhereInput[]
    OR?: PageSEOWhereInput[]
    NOT?: PageSEOWhereInput | PageSEOWhereInput[]
    title?: StringFilter<"PageSEO"> | string
    description?: StringFilter<"PageSEO"> | string
    ogImage?: StringFilter<"PageSEO"> | string
    updatedAt?: DateTimeFilter<"PageSEO"> | Date | string
  }, "id" | "page">

  export type PageSEOOrderByWithAggregationInput = {
    id?: SortOrder
    page?: SortOrder
    title?: SortOrder
    description?: SortOrder
    ogImage?: SortOrder
    updatedAt?: SortOrder
    _count?: PageSEOCountOrderByAggregateInput
    _avg?: PageSEOAvgOrderByAggregateInput
    _max?: PageSEOMaxOrderByAggregateInput
    _min?: PageSEOMinOrderByAggregateInput
    _sum?: PageSEOSumOrderByAggregateInput
  }

  export type PageSEOScalarWhereWithAggregatesInput = {
    AND?: PageSEOScalarWhereWithAggregatesInput | PageSEOScalarWhereWithAggregatesInput[]
    OR?: PageSEOScalarWhereWithAggregatesInput[]
    NOT?: PageSEOScalarWhereWithAggregatesInput | PageSEOScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PageSEO"> | number
    page?: StringWithAggregatesFilter<"PageSEO"> | string
    title?: StringWithAggregatesFilter<"PageSEO"> | string
    description?: StringWithAggregatesFilter<"PageSEO"> | string
    ogImage?: StringWithAggregatesFilter<"PageSEO"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"PageSEO"> | Date | string
  }

  export type AdminUserWhereInput = {
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    id?: IntFilter<"AdminUser"> | number
    email?: StringFilter<"AdminUser"> | string
    passwordHash?: StringFilter<"AdminUser"> | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }

  export type AdminUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    passwordHash?: StringFilter<"AdminUser"> | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }, "id" | "email">

  export type AdminUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminUserCountOrderByAggregateInput
    _avg?: AdminUserAvgOrderByAggregateInput
    _max?: AdminUserMaxOrderByAggregateInput
    _min?: AdminUserMinOrderByAggregateInput
    _sum?: AdminUserSumOrderByAggregateInput
  }

  export type AdminUserScalarWhereWithAggregatesInput = {
    AND?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    OR?: AdminUserScalarWhereWithAggregatesInput[]
    NOT?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AdminUser"> | number
    email?: StringWithAggregatesFilter<"AdminUser"> | string
    passwordHash?: StringWithAggregatesFilter<"AdminUser"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    id?: IntFilter<"ActivityLog"> | number
    action?: StringFilter<"ActivityLog"> | string
    section?: StringFilter<"ActivityLog"> | string
    details?: StringFilter<"ActivityLog"> | string
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
  }

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    section?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    action?: StringFilter<"ActivityLog"> | string
    section?: StringFilter<"ActivityLog"> | string
    details?: StringFilter<"ActivityLog"> | string
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
  }, "id">

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    section?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
    _count?: ActivityLogCountOrderByAggregateInput
    _avg?: ActivityLogAvgOrderByAggregateInput
    _max?: ActivityLogMaxOrderByAggregateInput
    _min?: ActivityLogMinOrderByAggregateInput
    _sum?: ActivityLogSumOrderByAggregateInput
  }

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    OR?: ActivityLogScalarWhereWithAggregatesInput[]
    NOT?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ActivityLog"> | number
    action?: StringWithAggregatesFilter<"ActivityLog"> | string
    section?: StringWithAggregatesFilter<"ActivityLog"> | string
    details?: StringWithAggregatesFilter<"ActivityLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
  }

  export type SiteConfigCreateInput = {
    id?: number
    name?: string
    tagline?: string
    description?: string
    email?: string
    phone?: string
    address?: string
    twitter?: string
    linkedin?: string
    github?: string
    faviconUrl?: string
    logoUrl?: string
    primaryColor?: string
    formspreeId?: string
    updatedAt?: Date | string
  }

  export type SiteConfigUncheckedCreateInput = {
    id?: number
    name?: string
    tagline?: string
    description?: string
    email?: string
    phone?: string
    address?: string
    twitter?: string
    linkedin?: string
    github?: string
    faviconUrl?: string
    logoUrl?: string
    primaryColor?: string
    formspreeId?: string
    updatedAt?: Date | string
  }

  export type SiteConfigUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    faviconUrl?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    formspreeId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteConfigUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    faviconUrl?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    formspreeId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteConfigCreateManyInput = {
    id?: number
    name?: string
    tagline?: string
    description?: string
    email?: string
    phone?: string
    address?: string
    twitter?: string
    linkedin?: string
    github?: string
    faviconUrl?: string
    logoUrl?: string
    primaryColor?: string
    formspreeId?: string
    updatedAt?: Date | string
  }

  export type SiteConfigUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    faviconUrl?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    formspreeId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteConfigUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    faviconUrl?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    formspreeId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NavItemCreateInput = {
    label: string
    href: string
    order?: number
  }

  export type NavItemUncheckedCreateInput = {
    id?: number
    label: string
    href: string
    order?: number
  }

  export type NavItemUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type NavItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type NavItemCreateManyInput = {
    id?: number
    label: string
    href: string
    order?: number
  }

  export type NavItemUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type NavItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type FooterConfigCreateInput = {
    id?: number
    brandText?: string
    copyrightName?: string
    exploreLinks?: string
    programLinks?: string
    updatedAt?: Date | string
  }

  export type FooterConfigUncheckedCreateInput = {
    id?: number
    brandText?: string
    copyrightName?: string
    exploreLinks?: string
    programLinks?: string
    updatedAt?: Date | string
  }

  export type FooterConfigUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandText?: StringFieldUpdateOperationsInput | string
    copyrightName?: StringFieldUpdateOperationsInput | string
    exploreLinks?: StringFieldUpdateOperationsInput | string
    programLinks?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FooterConfigUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandText?: StringFieldUpdateOperationsInput | string
    copyrightName?: StringFieldUpdateOperationsInput | string
    exploreLinks?: StringFieldUpdateOperationsInput | string
    programLinks?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FooterConfigCreateManyInput = {
    id?: number
    brandText?: string
    copyrightName?: string
    exploreLinks?: string
    programLinks?: string
    updatedAt?: Date | string
  }

  export type FooterConfigUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandText?: StringFieldUpdateOperationsInput | string
    copyrightName?: StringFieldUpdateOperationsInput | string
    exploreLinks?: StringFieldUpdateOperationsInput | string
    programLinks?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FooterConfigUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    brandText?: StringFieldUpdateOperationsInput | string
    copyrightName?: StringFieldUpdateOperationsInput | string
    exploreLinks?: StringFieldUpdateOperationsInput | string
    programLinks?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroSectionCreateInput = {
    id?: number
    headline?: string
    subheadline?: string
    cta1Label?: string
    cta1Href?: string
    cta2Label?: string
    cta2Href?: string
    imageUrl?: string
    updatedAt?: Date | string
  }

  export type HeroSectionUncheckedCreateInput = {
    id?: number
    headline?: string
    subheadline?: string
    cta1Label?: string
    cta1Href?: string
    cta2Label?: string
    cta2Href?: string
    imageUrl?: string
    updatedAt?: Date | string
  }

  export type HeroSectionUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    headline?: StringFieldUpdateOperationsInput | string
    subheadline?: StringFieldUpdateOperationsInput | string
    cta1Label?: StringFieldUpdateOperationsInput | string
    cta1Href?: StringFieldUpdateOperationsInput | string
    cta2Label?: StringFieldUpdateOperationsInput | string
    cta2Href?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroSectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    headline?: StringFieldUpdateOperationsInput | string
    subheadline?: StringFieldUpdateOperationsInput | string
    cta1Label?: StringFieldUpdateOperationsInput | string
    cta1Href?: StringFieldUpdateOperationsInput | string
    cta2Label?: StringFieldUpdateOperationsInput | string
    cta2Href?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroSectionCreateManyInput = {
    id?: number
    headline?: string
    subheadline?: string
    cta1Label?: string
    cta1Href?: string
    cta2Label?: string
    cta2Href?: string
    imageUrl?: string
    updatedAt?: Date | string
  }

  export type HeroSectionUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    headline?: StringFieldUpdateOperationsInput | string
    subheadline?: StringFieldUpdateOperationsInput | string
    cta1Label?: StringFieldUpdateOperationsInput | string
    cta1Href?: StringFieldUpdateOperationsInput | string
    cta2Label?: StringFieldUpdateOperationsInput | string
    cta2Href?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroSectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    headline?: StringFieldUpdateOperationsInput | string
    subheadline?: StringFieldUpdateOperationsInput | string
    cta1Label?: StringFieldUpdateOperationsInput | string
    cta1Href?: StringFieldUpdateOperationsInput | string
    cta2Label?: StringFieldUpdateOperationsInput | string
    cta2Href?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberCreateInput = {
    name: string
    role: string
    categories?: string
    image?: string
    bio?: string
    linkedin?: string
    twitter?: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamMemberUncheckedCreateInput = {
    id?: number
    name: string
    role: string
    categories?: string
    image?: string
    bio?: string
    linkedin?: string
    twitter?: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamMemberUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberCreateManyInput = {
    id?: number
    name: string
    role: string
    categories?: string
    image?: string
    bio?: string
    linkedin?: string
    twitter?: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamMemberUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    categories?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
    twitter?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramCreateInput = {
    title: string
    description?: string
    icon?: string
    features?: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgramUncheckedCreateInput = {
    id?: number
    title: string
    description?: string
    icon?: string
    features?: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgramUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    features?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    features?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramCreateManyInput = {
    id?: number
    title: string
    description?: string
    icon?: string
    features?: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgramUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    features?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    features?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    slug: string
    title: string
    description?: string
    category?: string
    image?: string
    tags?: string
    innovators?: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    slug: string
    title: string
    description?: string
    category?: string
    image?: string
    tags?: string
    innovators?: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    innovators?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    innovators?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyInput = {
    id?: number
    slug: string
    title: string
    description?: string
    category?: string
    image?: string
    tags?: string
    innovators?: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    innovators?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    tags?: StringFieldUpdateOperationsInput | string
    innovators?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InnovatorCreateInput = {
    slug: string
    name: string
    tagline?: string
    image?: string
    bio?: string
    projects?: string
    skills?: string
    quote?: string
    featured?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InnovatorUncheckedCreateInput = {
    id?: number
    slug: string
    name: string
    tagline?: string
    image?: string
    bio?: string
    projects?: string
    skills?: string
    quote?: string
    featured?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InnovatorUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    projects?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    quote?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InnovatorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    projects?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    quote?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InnovatorCreateManyInput = {
    id?: number
    slug: string
    name: string
    tagline?: string
    image?: string
    bio?: string
    projects?: string
    skills?: string
    quote?: string
    featured?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InnovatorUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    projects?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    quote?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InnovatorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    projects?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    quote?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricCreateInput = {
    label: string
    value: string
    suffix?: string
    prefix?: string
    order?: number
  }

  export type MetricUncheckedCreateInput = {
    id?: number
    label: string
    value: string
    suffix?: string
    prefix?: string
    order?: number
  }

  export type MetricUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    suffix?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type MetricUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    suffix?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type MetricCreateManyInput = {
    id?: number
    label: string
    value: string
    suffix?: string
    prefix?: string
    order?: number
  }

  export type MetricUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    suffix?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type MetricUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    suffix?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ValueCreateInput = {
    title: string
    description?: string
    icon?: string
    order?: number
  }

  export type ValueUncheckedCreateInput = {
    id?: number
    title: string
    description?: string
    icon?: string
    order?: number
  }

  export type ValueUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ValueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ValueCreateManyInput = {
    id?: number
    title: string
    description?: string
    icon?: string
    order?: number
  }

  export type ValueUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ValueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type AboutContentCreateInput = {
    id?: number
    story?: string
    mission?: string
    vision?: string
    milestones?: string
    updatedAt?: Date | string
  }

  export type AboutContentUncheckedCreateInput = {
    id?: number
    story?: string
    mission?: string
    vision?: string
    milestones?: string
    updatedAt?: Date | string
  }

  export type AboutContentUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    story?: StringFieldUpdateOperationsInput | string
    mission?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    milestones?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutContentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    story?: StringFieldUpdateOperationsInput | string
    mission?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    milestones?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutContentCreateManyInput = {
    id?: number
    story?: string
    mission?: string
    vision?: string
    milestones?: string
    updatedAt?: Date | string
  }

  export type AboutContentUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    story?: StringFieldUpdateOperationsInput | string
    mission?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    milestones?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutContentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    story?: StringFieldUpdateOperationsInput | string
    mission?: StringFieldUpdateOperationsInput | string
    vision?: StringFieldUpdateOperationsInput | string
    milestones?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageSEOCreateInput = {
    page: string
    title?: string
    description?: string
    ogImage?: string
    updatedAt?: Date | string
  }

  export type PageSEOUncheckedCreateInput = {
    id?: number
    page: string
    title?: string
    description?: string
    ogImage?: string
    updatedAt?: Date | string
  }

  export type PageSEOUpdateInput = {
    page?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ogImage?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageSEOUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    page?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ogImage?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageSEOCreateManyInput = {
    id?: number
    page: string
    title?: string
    description?: string
    ogImage?: string
    updatedAt?: Date | string
  }

  export type PageSEOUpdateManyMutationInput = {
    page?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ogImage?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageSEOUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    page?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ogImage?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserCreateInput = {
    id?: number
    email: string
    passwordHash: string
    updatedAt?: Date | string
  }

  export type AdminUserUncheckedCreateInput = {
    id?: number
    email: string
    passwordHash: string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserCreateManyInput = {
    id?: number
    email: string
    passwordHash: string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateInput = {
    action: string
    section: string
    details?: string
    createdAt?: Date | string
  }

  export type ActivityLogUncheckedCreateInput = {
    id?: number
    action: string
    section: string
    details?: string
    createdAt?: Date | string
  }

  export type ActivityLogUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateManyInput = {
    id?: number
    action: string
    section: string
    details?: string
    createdAt?: Date | string
  }

  export type ActivityLogUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    section?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SiteConfigCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tagline?: SortOrder
    description?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    twitter?: SortOrder
    linkedin?: SortOrder
    github?: SortOrder
    faviconUrl?: SortOrder
    logoUrl?: SortOrder
    primaryColor?: SortOrder
    formspreeId?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteConfigAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SiteConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tagline?: SortOrder
    description?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    twitter?: SortOrder
    linkedin?: SortOrder
    github?: SortOrder
    faviconUrl?: SortOrder
    logoUrl?: SortOrder
    primaryColor?: SortOrder
    formspreeId?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteConfigMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tagline?: SortOrder
    description?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    twitter?: SortOrder
    linkedin?: SortOrder
    github?: SortOrder
    faviconUrl?: SortOrder
    logoUrl?: SortOrder
    primaryColor?: SortOrder
    formspreeId?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteConfigSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NavItemCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    href?: SortOrder
    order?: SortOrder
  }

  export type NavItemAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type NavItemMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    href?: SortOrder
    order?: SortOrder
  }

  export type NavItemMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    href?: SortOrder
    order?: SortOrder
  }

  export type NavItemSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type FooterConfigCountOrderByAggregateInput = {
    id?: SortOrder
    brandText?: SortOrder
    copyrightName?: SortOrder
    exploreLinks?: SortOrder
    programLinks?: SortOrder
    updatedAt?: SortOrder
  }

  export type FooterConfigAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FooterConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    brandText?: SortOrder
    copyrightName?: SortOrder
    exploreLinks?: SortOrder
    programLinks?: SortOrder
    updatedAt?: SortOrder
  }

  export type FooterConfigMinOrderByAggregateInput = {
    id?: SortOrder
    brandText?: SortOrder
    copyrightName?: SortOrder
    exploreLinks?: SortOrder
    programLinks?: SortOrder
    updatedAt?: SortOrder
  }

  export type FooterConfigSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HeroSectionCountOrderByAggregateInput = {
    id?: SortOrder
    headline?: SortOrder
    subheadline?: SortOrder
    cta1Label?: SortOrder
    cta1Href?: SortOrder
    cta2Label?: SortOrder
    cta2Href?: SortOrder
    imageUrl?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeroSectionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HeroSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    headline?: SortOrder
    subheadline?: SortOrder
    cta1Label?: SortOrder
    cta1Href?: SortOrder
    cta2Label?: SortOrder
    cta2Href?: SortOrder
    imageUrl?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeroSectionMinOrderByAggregateInput = {
    id?: SortOrder
    headline?: SortOrder
    subheadline?: SortOrder
    cta1Label?: SortOrder
    cta1Href?: SortOrder
    cta2Label?: SortOrder
    cta2Href?: SortOrder
    imageUrl?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeroSectionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeamMemberCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    categories?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    linkedin?: SortOrder
    twitter?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMemberAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type TeamMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    categories?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    linkedin?: SortOrder
    twitter?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMemberMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    categories?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    linkedin?: SortOrder
    twitter?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMemberSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type ProgramCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    features?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgramAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type ProgramMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    features?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgramMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    features?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgramSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    image?: SortOrder
    tags?: SortOrder
    innovators?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    image?: SortOrder
    tags?: SortOrder
    innovators?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    image?: SortOrder
    tags?: SortOrder
    innovators?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type InnovatorCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    tagline?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    projects?: SortOrder
    skills?: SortOrder
    quote?: SortOrder
    featured?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InnovatorAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type InnovatorMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    tagline?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    projects?: SortOrder
    skills?: SortOrder
    quote?: SortOrder
    featured?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InnovatorMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    tagline?: SortOrder
    image?: SortOrder
    bio?: SortOrder
    projects?: SortOrder
    skills?: SortOrder
    quote?: SortOrder
    featured?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InnovatorSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MetricCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    value?: SortOrder
    suffix?: SortOrder
    prefix?: SortOrder
    order?: SortOrder
  }

  export type MetricAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type MetricMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    value?: SortOrder
    suffix?: SortOrder
    prefix?: SortOrder
    order?: SortOrder
  }

  export type MetricMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    value?: SortOrder
    suffix?: SortOrder
    prefix?: SortOrder
    order?: SortOrder
  }

  export type MetricSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type ValueCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    order?: SortOrder
  }

  export type ValueAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type ValueMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    order?: SortOrder
  }

  export type ValueMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    order?: SortOrder
  }

  export type ValueSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type AboutContentCountOrderByAggregateInput = {
    id?: SortOrder
    story?: SortOrder
    mission?: SortOrder
    vision?: SortOrder
    milestones?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutContentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AboutContentMaxOrderByAggregateInput = {
    id?: SortOrder
    story?: SortOrder
    mission?: SortOrder
    vision?: SortOrder
    milestones?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutContentMinOrderByAggregateInput = {
    id?: SortOrder
    story?: SortOrder
    mission?: SortOrder
    vision?: SortOrder
    milestones?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutContentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PageSEOCountOrderByAggregateInput = {
    id?: SortOrder
    page?: SortOrder
    title?: SortOrder
    description?: SortOrder
    ogImage?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageSEOAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PageSEOMaxOrderByAggregateInput = {
    id?: SortOrder
    page?: SortOrder
    title?: SortOrder
    description?: SortOrder
    ogImage?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageSEOMinOrderByAggregateInput = {
    id?: SortOrder
    page?: SortOrder
    title?: SortOrder
    description?: SortOrder
    ogImage?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageSEOSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    section?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    section?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    section?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use SiteConfigDefaultArgs instead
     */
    export type SiteConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SiteConfigDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NavItemDefaultArgs instead
     */
    export type NavItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NavItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FooterConfigDefaultArgs instead
     */
    export type FooterConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FooterConfigDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HeroSectionDefaultArgs instead
     */
    export type HeroSectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HeroSectionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamMemberDefaultArgs instead
     */
    export type TeamMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamMemberDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProgramDefaultArgs instead
     */
    export type ProgramArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProgramDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectDefaultArgs instead
     */
    export type ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InnovatorDefaultArgs instead
     */
    export type InnovatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InnovatorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MetricDefaultArgs instead
     */
    export type MetricArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MetricDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ValueDefaultArgs instead
     */
    export type ValueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ValueDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AboutContentDefaultArgs instead
     */
    export type AboutContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AboutContentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PageSEODefaultArgs instead
     */
    export type PageSEOArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PageSEODefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminUserDefaultArgs instead
     */
    export type AdminUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminUserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActivityLogDefaultArgs instead
     */
    export type ActivityLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActivityLogDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}