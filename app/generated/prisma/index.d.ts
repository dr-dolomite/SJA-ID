
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Subject
 * 
 */
export type Subject = $Result.DefaultSelection<Prisma.$SubjectPayload>
/**
 * Model StudentSubject
 * 
 */
export type StudentSubject = $Result.DefaultSelection<Prisma.$StudentSubjectPayload>
/**
 * Model TeacherSubject
 * 
 */
export type TeacherSubject = $Result.DefaultSelection<Prisma.$TeacherSubjectPayload>
/**
 * Model Grade
 * 
 */
export type Grade = $Result.DefaultSelection<Prisma.$GradePayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  PRINCIPAL: 'PRINCIPAL',
  TEACHER: 'TEACHER',
  REGISTRAR: 'REGISTRAR',
  SCHOOL_ADMIN: 'SCHOOL_ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const AcademicTrack: {
  STEM: 'STEM',
  ABM: 'ABM',
  HUMSS: 'HUMSS',
  GAS: 'GAS',
  TVL: 'TVL',
  ARTS_DESIGN: 'ARTS_DESIGN',
  SPORTS: 'SPORTS'
};

export type AcademicTrack = (typeof AcademicTrack)[keyof typeof AcademicTrack]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type AcademicTrack = $Enums.AcademicTrack

export const AcademicTrack: typeof $Enums.AcademicTrack

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subject`: Exposes CRUD operations for the **Subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subject.findMany()
    * ```
    */
  get subject(): Prisma.SubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentSubject`: Exposes CRUD operations for the **StudentSubject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentSubjects
    * const studentSubjects = await prisma.studentSubject.findMany()
    * ```
    */
  get studentSubject(): Prisma.StudentSubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacherSubject`: Exposes CRUD operations for the **TeacherSubject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeacherSubjects
    * const teacherSubjects = await prisma.teacherSubject.findMany()
    * ```
    */
  get teacherSubject(): Prisma.TeacherSubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.grade`: Exposes CRUD operations for the **Grade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Grades
    * const grades = await prisma.grade.findMany()
    * ```
    */
  get grade(): Prisma.GradeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Student: 'Student',
    Subject: 'Subject',
    StudentSubject: 'StudentSubject',
    TeacherSubject: 'TeacherSubject',
    Grade: 'Grade',
    ActivityLog: 'ActivityLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "student" | "subject" | "studentSubject" | "teacherSubject" | "grade" | "activityLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Subject: {
        payload: Prisma.$SubjectPayload<ExtArgs>
        fields: Prisma.SubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findFirst: {
            args: Prisma.SubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findMany: {
            args: Prisma.SubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          create: {
            args: Prisma.SubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          createMany: {
            args: Prisma.SubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          delete: {
            args: Prisma.SubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          update: {
            args: Prisma.SubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          deleteMany: {
            args: Prisma.SubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          upsert: {
            args: Prisma.SubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject>
          }
          groupBy: {
            args: Prisma.SubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number
          }
        }
      }
      StudentSubject: {
        payload: Prisma.$StudentSubjectPayload<ExtArgs>
        fields: Prisma.StudentSubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentSubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentSubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>
          }
          findFirst: {
            args: Prisma.StudentSubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentSubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>
          }
          findMany: {
            args: Prisma.StudentSubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>[]
          }
          create: {
            args: Prisma.StudentSubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>
          }
          createMany: {
            args: Prisma.StudentSubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentSubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>[]
          }
          delete: {
            args: Prisma.StudentSubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>
          }
          update: {
            args: Prisma.StudentSubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>
          }
          deleteMany: {
            args: Prisma.StudentSubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentSubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentSubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>[]
          }
          upsert: {
            args: Prisma.StudentSubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>
          }
          aggregate: {
            args: Prisma.StudentSubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentSubject>
          }
          groupBy: {
            args: Prisma.StudentSubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentSubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentSubjectCountArgs<ExtArgs>
            result: $Utils.Optional<StudentSubjectCountAggregateOutputType> | number
          }
        }
      }
      TeacherSubject: {
        payload: Prisma.$TeacherSubjectPayload<ExtArgs>
        fields: Prisma.TeacherSubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherSubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherSubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>
          }
          findFirst: {
            args: Prisma.TeacherSubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherSubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>
          }
          findMany: {
            args: Prisma.TeacherSubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>[]
          }
          create: {
            args: Prisma.TeacherSubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>
          }
          createMany: {
            args: Prisma.TeacherSubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherSubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>[]
          }
          delete: {
            args: Prisma.TeacherSubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>
          }
          update: {
            args: Prisma.TeacherSubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>
          }
          deleteMany: {
            args: Prisma.TeacherSubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherSubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherSubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>[]
          }
          upsert: {
            args: Prisma.TeacherSubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>
          }
          aggregate: {
            args: Prisma.TeacherSubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacherSubject>
          }
          groupBy: {
            args: Prisma.TeacherSubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherSubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherSubjectCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherSubjectCountAggregateOutputType> | number
          }
        }
      }
      Grade: {
        payload: Prisma.$GradePayload<ExtArgs>
        fields: Prisma.GradeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GradeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GradeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          findFirst: {
            args: Prisma.GradeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GradeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          findMany: {
            args: Prisma.GradeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>[]
          }
          create: {
            args: Prisma.GradeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          createMany: {
            args: Prisma.GradeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GradeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>[]
          }
          delete: {
            args: Prisma.GradeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          update: {
            args: Prisma.GradeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          deleteMany: {
            args: Prisma.GradeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GradeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GradeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>[]
          }
          upsert: {
            args: Prisma.GradeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradePayload>
          }
          aggregate: {
            args: Prisma.GradeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrade>
          }
          groupBy: {
            args: Prisma.GradeGroupByArgs<ExtArgs>
            result: $Utils.Optional<GradeGroupByOutputType>[]
          }
          count: {
            args: Prisma.GradeCountArgs<ExtArgs>
            result: $Utils.Optional<GradeCountAggregateOutputType> | number
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
          updateManyAndReturn: {
            args: Prisma.ActivityLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    student?: StudentOmit
    subject?: SubjectOmit
    studentSubject?: StudentSubjectOmit
    teacherSubject?: TeacherSubjectOmit
    grade?: GradeOmit
    activityLog?: ActivityLogOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    teacherSubjects: number
    gradesEntered: number
    logsCreated: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacherSubjects?: boolean | UserCountOutputTypeCountTeacherSubjectsArgs
    gradesEntered?: boolean | UserCountOutputTypeCountGradesEnteredArgs
    logsCreated?: boolean | UserCountOutputTypeCountLogsCreatedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeacherSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherSubjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGradesEnteredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GradeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLogsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    studentSubjects: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentSubjects?: boolean | StudentCountOutputTypeCountStudentSubjectsArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountStudentSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentSubjectWhereInput
  }


  /**
   * Count Type SubjectCountOutputType
   */

  export type SubjectCountOutputType = {
    teachers: number
    studentSubjects: number
  }

  export type SubjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teachers?: boolean | SubjectCountOutputTypeCountTeachersArgs
    studentSubjects?: boolean | SubjectCountOutputTypeCountStudentSubjectsArgs
  }

  // Custom InputTypes
  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCountOutputType
     */
    select?: SubjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountTeachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherSubjectWhereInput
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountStudentSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentSubjectWhereInput
  }


  /**
   * Count Type StudentSubjectCountOutputType
   */

  export type StudentSubjectCountOutputType = {
    grades: number
  }

  export type StudentSubjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    grades?: boolean | StudentSubjectCountOutputTypeCountGradesArgs
  }

  // Custom InputTypes
  /**
   * StudentSubjectCountOutputType without action
   */
  export type StudentSubjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubjectCountOutputType
     */
    select?: StudentSubjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentSubjectCountOutputType without action
   */
  export type StudentSubjectCountOutputTypeCountGradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GradeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    employeeId: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.UserRole | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    employeeId: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.UserRole | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    employeeId: number
    password: number
    firstName: number
    lastName: number
    role: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    employeeId?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    employeeId?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    employeeId?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    employeeId: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teacherSubjects?: boolean | User$teacherSubjectsArgs<ExtArgs>
    gradesEntered?: boolean | User$gradesEnteredArgs<ExtArgs>
    logsCreated?: boolean | User$logsCreatedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeId?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    employeeId?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeId" | "password" | "firstName" | "lastName" | "role" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacherSubjects?: boolean | User$teacherSubjectsArgs<ExtArgs>
    gradesEntered?: boolean | User$gradesEnteredArgs<ExtArgs>
    logsCreated?: boolean | User$logsCreatedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      teacherSubjects: Prisma.$TeacherSubjectPayload<ExtArgs>[]
      gradesEntered: Prisma.$GradePayload<ExtArgs>[]
      logsCreated: Prisma.$ActivityLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      employeeId: string
      password: string
      firstName: string
      lastName: string
      role: $Enums.UserRole
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacherSubjects<T extends User$teacherSubjectsArgs<ExtArgs> = {}>(args?: Subset<T, User$teacherSubjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gradesEntered<T extends User$gradesEnteredArgs<ExtArgs> = {}>(args?: Subset<T, User$gradesEnteredArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logsCreated<T extends User$logsCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$logsCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly employeeId: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly active: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.teacherSubjects
   */
  export type User$teacherSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    where?: TeacherSubjectWhereInput
    orderBy?: TeacherSubjectOrderByWithRelationInput | TeacherSubjectOrderByWithRelationInput[]
    cursor?: TeacherSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherSubjectScalarFieldEnum | TeacherSubjectScalarFieldEnum[]
  }

  /**
   * User.gradesEntered
   */
  export type User$gradesEnteredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    where?: GradeWhereInput
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    cursor?: GradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * User.logsCreated
   */
  export type User$logsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
    yearLevel: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
    yearLevel: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    studentId: string | null
    studentLrn: string | null
    firstName: string | null
    lastName: string | null
    middleName: string | null
    dateOfBirth: Date | null
    gender: string | null
    address: string | null
    contactNumber: string | null
    guardianName: string | null
    guardianContact: string | null
    yearLevel: number | null
    section: string | null
    academicTrack: $Enums.AcademicTrack | null
    enrollmentStatus: string | null
    enrollmentDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    studentId: string | null
    studentLrn: string | null
    firstName: string | null
    lastName: string | null
    middleName: string | null
    dateOfBirth: Date | null
    gender: string | null
    address: string | null
    contactNumber: string | null
    guardianName: string | null
    guardianContact: string | null
    yearLevel: number | null
    section: string | null
    academicTrack: $Enums.AcademicTrack | null
    enrollmentStatus: string | null
    enrollmentDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    studentId: number
    studentLrn: number
    firstName: number
    lastName: number
    middleName: number
    dateOfBirth: number
    gender: number
    address: number
    contactNumber: number
    guardianName: number
    guardianContact: number
    yearLevel: number
    section: number
    academicTrack: number
    enrollmentStatus: number
    enrollmentDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
    yearLevel?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
    yearLevel?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    studentId?: true
    studentLrn?: true
    firstName?: true
    lastName?: true
    middleName?: true
    dateOfBirth?: true
    gender?: true
    address?: true
    contactNumber?: true
    guardianName?: true
    guardianContact?: true
    yearLevel?: true
    section?: true
    academicTrack?: true
    enrollmentStatus?: true
    enrollmentDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    studentId?: true
    studentLrn?: true
    firstName?: true
    lastName?: true
    middleName?: true
    dateOfBirth?: true
    gender?: true
    address?: true
    contactNumber?: true
    guardianName?: true
    guardianContact?: true
    yearLevel?: true
    section?: true
    academicTrack?: true
    enrollmentStatus?: true
    enrollmentDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    studentId?: true
    studentLrn?: true
    firstName?: true
    lastName?: true
    middleName?: true
    dateOfBirth?: true
    gender?: true
    address?: true
    contactNumber?: true
    guardianName?: true
    guardianContact?: true
    yearLevel?: true
    section?: true
    academicTrack?: true
    enrollmentStatus?: true
    enrollmentDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: number
    studentId: string
    studentLrn: string
    firstName: string
    lastName: string
    middleName: string | null
    dateOfBirth: Date
    gender: string
    address: string
    contactNumber: string | null
    guardianName: string
    guardianContact: string
    yearLevel: number
    section: string
    academicTrack: $Enums.AcademicTrack | null
    enrollmentStatus: string
    enrollmentDate: Date
    createdAt: Date
    updatedAt: Date
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    studentLrn?: boolean
    firstName?: boolean
    lastName?: boolean
    middleName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    address?: boolean
    contactNumber?: boolean
    guardianName?: boolean
    guardianContact?: boolean
    yearLevel?: boolean
    section?: boolean
    academicTrack?: boolean
    enrollmentStatus?: boolean
    enrollmentDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    studentSubjects?: boolean | Student$studentSubjectsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    studentLrn?: boolean
    firstName?: boolean
    lastName?: boolean
    middleName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    address?: boolean
    contactNumber?: boolean
    guardianName?: boolean
    guardianContact?: boolean
    yearLevel?: boolean
    section?: boolean
    academicTrack?: boolean
    enrollmentStatus?: boolean
    enrollmentDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    studentLrn?: boolean
    firstName?: boolean
    lastName?: boolean
    middleName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    address?: boolean
    contactNumber?: boolean
    guardianName?: boolean
    guardianContact?: boolean
    yearLevel?: boolean
    section?: boolean
    academicTrack?: boolean
    enrollmentStatus?: boolean
    enrollmentDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    studentId?: boolean
    studentLrn?: boolean
    firstName?: boolean
    lastName?: boolean
    middleName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    address?: boolean
    contactNumber?: boolean
    guardianName?: boolean
    guardianContact?: boolean
    yearLevel?: boolean
    section?: boolean
    academicTrack?: boolean
    enrollmentStatus?: boolean
    enrollmentDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "studentLrn" | "firstName" | "lastName" | "middleName" | "dateOfBirth" | "gender" | "address" | "contactNumber" | "guardianName" | "guardianContact" | "yearLevel" | "section" | "academicTrack" | "enrollmentStatus" | "enrollmentDate" | "createdAt" | "updatedAt", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentSubjects?: boolean | Student$studentSubjectsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      studentSubjects: Prisma.$StudentSubjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: string
      studentLrn: string
      firstName: string
      lastName: string
      middleName: string | null
      dateOfBirth: Date
      gender: string
      address: string
      contactNumber: string | null
      guardianName: string
      guardianContact: string
      yearLevel: number
      section: string
      academicTrack: $Enums.AcademicTrack | null
      enrollmentStatus: string
      enrollmentDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studentSubjects<T extends Student$studentSubjectsArgs<ExtArgs> = {}>(args?: Subset<T, Student$studentSubjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'Int'>
    readonly studentId: FieldRef<"Student", 'String'>
    readonly studentLrn: FieldRef<"Student", 'String'>
    readonly firstName: FieldRef<"Student", 'String'>
    readonly lastName: FieldRef<"Student", 'String'>
    readonly middleName: FieldRef<"Student", 'String'>
    readonly dateOfBirth: FieldRef<"Student", 'DateTime'>
    readonly gender: FieldRef<"Student", 'String'>
    readonly address: FieldRef<"Student", 'String'>
    readonly contactNumber: FieldRef<"Student", 'String'>
    readonly guardianName: FieldRef<"Student", 'String'>
    readonly guardianContact: FieldRef<"Student", 'String'>
    readonly yearLevel: FieldRef<"Student", 'Int'>
    readonly section: FieldRef<"Student", 'String'>
    readonly academicTrack: FieldRef<"Student", 'AcademicTrack'>
    readonly enrollmentStatus: FieldRef<"Student", 'String'>
    readonly enrollmentDate: FieldRef<"Student", 'DateTime'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
    readonly updatedAt: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.studentSubjects
   */
  export type Student$studentSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    where?: StudentSubjectWhereInput
    orderBy?: StudentSubjectOrderByWithRelationInput | StudentSubjectOrderByWithRelationInput[]
    cursor?: StudentSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentSubjectScalarFieldEnum | StudentSubjectScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  export type SubjectAvgAggregateOutputType = {
    id: number | null
    yearLevel: number | null
  }

  export type SubjectSumAggregateOutputType = {
    id: number | null
    yearLevel: number | null
  }

  export type SubjectMinAggregateOutputType = {
    id: number | null
    subjectCode: string | null
    subjectName: string | null
    description: string | null
    yearLevel: number | null
    academicTrack: $Enums.AcademicTrack | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubjectMaxAggregateOutputType = {
    id: number | null
    subjectCode: string | null
    subjectName: string | null
    description: string | null
    yearLevel: number | null
    academicTrack: $Enums.AcademicTrack | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubjectCountAggregateOutputType = {
    id: number
    subjectCode: number
    subjectName: number
    description: number
    yearLevel: number
    academicTrack: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubjectAvgAggregateInputType = {
    id?: true
    yearLevel?: true
  }

  export type SubjectSumAggregateInputType = {
    id?: true
    yearLevel?: true
  }

  export type SubjectMinAggregateInputType = {
    id?: true
    subjectCode?: true
    subjectName?: true
    description?: true
    yearLevel?: true
    academicTrack?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubjectMaxAggregateInputType = {
    id?: true
    subjectCode?: true
    subjectName?: true
    description?: true
    yearLevel?: true
    academicTrack?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubjectCountAggregateInputType = {
    id?: true
    subjectCode?: true
    subjectName?: true
    description?: true
    yearLevel?: true
    academicTrack?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subject to aggregate.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subjects
    **/
    _count?: true | SubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectMaxAggregateInputType
  }

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>
  }




  export type SubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithAggregationInput | SubjectOrderByWithAggregationInput[]
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum
    having?: SubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCountAggregateInputType | true
    _avg?: SubjectAvgAggregateInputType
    _sum?: SubjectSumAggregateInputType
    _min?: SubjectMinAggregateInputType
    _max?: SubjectMaxAggregateInputType
  }

  export type SubjectGroupByOutputType = {
    id: number
    subjectCode: string
    subjectName: string
    description: string | null
    yearLevel: number
    academicTrack: $Enums.AcademicTrack | null
    createdAt: Date
    updatedAt: Date
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>
        }
      >
    >


  export type SubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjectCode?: boolean
    subjectName?: boolean
    description?: boolean
    yearLevel?: boolean
    academicTrack?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teachers?: boolean | Subject$teachersArgs<ExtArgs>
    studentSubjects?: boolean | Subject$studentSubjectsArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjectCode?: boolean
    subjectName?: boolean
    description?: boolean
    yearLevel?: boolean
    academicTrack?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjectCode?: boolean
    subjectName?: boolean
    description?: boolean
    yearLevel?: boolean
    academicTrack?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectScalar = {
    id?: boolean
    subjectCode?: boolean
    subjectName?: boolean
    description?: boolean
    yearLevel?: boolean
    academicTrack?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subjectCode" | "subjectName" | "description" | "yearLevel" | "academicTrack" | "createdAt" | "updatedAt", ExtArgs["result"]["subject"]>
  export type SubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teachers?: boolean | Subject$teachersArgs<ExtArgs>
    studentSubjects?: boolean | Subject$studentSubjectsArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subject"
    objects: {
      teachers: Prisma.$TeacherSubjectPayload<ExtArgs>[]
      studentSubjects: Prisma.$StudentSubjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      subjectCode: string
      subjectName: string
      description: string | null
      yearLevel: number
      academicTrack: $Enums.AcademicTrack | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subject"]>
    composites: {}
  }

  type SubjectGetPayload<S extends boolean | null | undefined | SubjectDefaultArgs> = $Result.GetResult<Prisma.$SubjectPayload, S>

  type SubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectCountAggregateInputType | true
    }

  export interface SubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subject'], meta: { name: 'Subject' } }
    /**
     * Find zero or one Subject that matches the filter.
     * @param {SubjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectFindUniqueArgs>(args: SelectSubset<T, SubjectFindUniqueArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectFindFirstArgs>(args?: SelectSubset<T, SubjectFindFirstArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectWithIdOnly = await prisma.subject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectFindManyArgs>(args?: SelectSubset<T, SubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subject.
     * @param {SubjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     * 
     */
    create<T extends SubjectCreateArgs>(args: SelectSubset<T, SubjectCreateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subjects.
     * @param {SubjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectCreateManyArgs>(args?: SelectSubset<T, SubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {SubjectCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subject.
     * @param {SubjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     * 
     */
    delete<T extends SubjectDeleteArgs>(args: SelectSubset<T, SubjectDeleteArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subject.
     * @param {SubjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectUpdateArgs>(args: SelectSubset<T, SubjectUpdateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subjects.
     * @param {SubjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectDeleteManyArgs>(args?: SelectSubset<T, SubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectUpdateManyArgs>(args: SelectSubset<T, SubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects and returns the data updated in the database.
     * @param {SubjectUpdateManyAndReturnArgs} args - Arguments to update many Subjects.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, SubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subject.
     * @param {SubjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends SubjectUpsertArgs>(args: SelectSubset<T, SubjectUpsertArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends SubjectCountArgs>(
      args?: Subset<T, SubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubjectAggregateArgs>(args: Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectGroupByArgs} args - Group by arguments.
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
      T extends SubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectGroupByArgs['orderBy'] }
        : { orderBy?: SubjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subject model
   */
  readonly fields: SubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teachers<T extends Subject$teachersArgs<ExtArgs> = {}>(args?: Subset<T, Subject$teachersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studentSubjects<T extends Subject$studentSubjectsArgs<ExtArgs> = {}>(args?: Subset<T, Subject$studentSubjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Subject model
   */
  interface SubjectFieldRefs {
    readonly id: FieldRef<"Subject", 'Int'>
    readonly subjectCode: FieldRef<"Subject", 'String'>
    readonly subjectName: FieldRef<"Subject", 'String'>
    readonly description: FieldRef<"Subject", 'String'>
    readonly yearLevel: FieldRef<"Subject", 'Int'>
    readonly academicTrack: FieldRef<"Subject", 'AcademicTrack'>
    readonly createdAt: FieldRef<"Subject", 'DateTime'>
    readonly updatedAt: FieldRef<"Subject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subject findUnique
   */
  export type SubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findUniqueOrThrow
   */
  export type SubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findFirst
   */
  export type SubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findFirstOrThrow
   */
  export type SubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findMany
   */
  export type SubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject create
   */
  export type SubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Subject.
     */
    data: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
  }

  /**
   * Subject createMany
   */
  export type SubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject createManyAndReturn
   */
  export type SubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject update
   */
  export type SubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Subject.
     */
    data: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
    /**
     * Choose, which Subject to update.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject updateMany
   */
  export type SubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject updateManyAndReturn
   */
  export type SubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject upsert
   */
  export type SubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Subject to update in case it exists.
     */
    where: SubjectWhereUniqueInput
    /**
     * In case the Subject found by the `where` argument doesn't exist, create a new Subject with this data.
     */
    create: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
    /**
     * In case the Subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
  }

  /**
   * Subject delete
   */
  export type SubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter which Subject to delete.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject deleteMany
   */
  export type SubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subjects to delete
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to delete.
     */
    limit?: number
  }

  /**
   * Subject.teachers
   */
  export type Subject$teachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    where?: TeacherSubjectWhereInput
    orderBy?: TeacherSubjectOrderByWithRelationInput | TeacherSubjectOrderByWithRelationInput[]
    cursor?: TeacherSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherSubjectScalarFieldEnum | TeacherSubjectScalarFieldEnum[]
  }

  /**
   * Subject.studentSubjects
   */
  export type Subject$studentSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    where?: StudentSubjectWhereInput
    orderBy?: StudentSubjectOrderByWithRelationInput | StudentSubjectOrderByWithRelationInput[]
    cursor?: StudentSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentSubjectScalarFieldEnum | StudentSubjectScalarFieldEnum[]
  }

  /**
   * Subject without action
   */
  export type SubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
  }


  /**
   * Model StudentSubject
   */

  export type AggregateStudentSubject = {
    _count: StudentSubjectCountAggregateOutputType | null
    _avg: StudentSubjectAvgAggregateOutputType | null
    _sum: StudentSubjectSumAggregateOutputType | null
    _min: StudentSubjectMinAggregateOutputType | null
    _max: StudentSubjectMaxAggregateOutputType | null
  }

  export type StudentSubjectAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    subjectId: number | null
  }

  export type StudentSubjectSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    subjectId: number | null
  }

  export type StudentSubjectMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    subjectId: number | null
    academicYear: string | null
    semester: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentSubjectMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    subjectId: number | null
    academicYear: string | null
    semester: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentSubjectCountAggregateOutputType = {
    id: number
    studentId: number
    subjectId: number
    academicYear: number
    semester: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentSubjectAvgAggregateInputType = {
    id?: true
    studentId?: true
    subjectId?: true
  }

  export type StudentSubjectSumAggregateInputType = {
    id?: true
    studentId?: true
    subjectId?: true
  }

  export type StudentSubjectMinAggregateInputType = {
    id?: true
    studentId?: true
    subjectId?: true
    academicYear?: true
    semester?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentSubjectMaxAggregateInputType = {
    id?: true
    studentId?: true
    subjectId?: true
    academicYear?: true
    semester?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentSubjectCountAggregateInputType = {
    id?: true
    studentId?: true
    subjectId?: true
    academicYear?: true
    semester?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentSubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentSubject to aggregate.
     */
    where?: StudentSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSubjects to fetch.
     */
    orderBy?: StudentSubjectOrderByWithRelationInput | StudentSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentSubjects
    **/
    _count?: true | StudentSubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentSubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentSubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentSubjectMaxAggregateInputType
  }

  export type GetStudentSubjectAggregateType<T extends StudentSubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentSubject[P]>
      : GetScalarType<T[P], AggregateStudentSubject[P]>
  }




  export type StudentSubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentSubjectWhereInput
    orderBy?: StudentSubjectOrderByWithAggregationInput | StudentSubjectOrderByWithAggregationInput[]
    by: StudentSubjectScalarFieldEnum[] | StudentSubjectScalarFieldEnum
    having?: StudentSubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentSubjectCountAggregateInputType | true
    _avg?: StudentSubjectAvgAggregateInputType
    _sum?: StudentSubjectSumAggregateInputType
    _min?: StudentSubjectMinAggregateInputType
    _max?: StudentSubjectMaxAggregateInputType
  }

  export type StudentSubjectGroupByOutputType = {
    id: number
    studentId: number
    subjectId: number
    academicYear: string
    semester: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: StudentSubjectCountAggregateOutputType | null
    _avg: StudentSubjectAvgAggregateOutputType | null
    _sum: StudentSubjectSumAggregateOutputType | null
    _min: StudentSubjectMinAggregateOutputType | null
    _max: StudentSubjectMaxAggregateOutputType | null
  }

  type GetStudentSubjectGroupByPayload<T extends StudentSubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentSubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentSubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentSubjectGroupByOutputType[P]>
            : GetScalarType<T[P], StudentSubjectGroupByOutputType[P]>
        }
      >
    >


  export type StudentSubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    subjectId?: boolean
    academicYear?: boolean
    semester?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    grades?: boolean | StudentSubject$gradesArgs<ExtArgs>
    _count?: boolean | StudentSubjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentSubject"]>

  export type StudentSubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    subjectId?: boolean
    academicYear?: boolean
    semester?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentSubject"]>

  export type StudentSubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    subjectId?: boolean
    academicYear?: boolean
    semester?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentSubject"]>

  export type StudentSubjectSelectScalar = {
    id?: boolean
    studentId?: boolean
    subjectId?: boolean
    academicYear?: boolean
    semester?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentSubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "subjectId" | "academicYear" | "semester" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["studentSubject"]>
  export type StudentSubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    grades?: boolean | StudentSubject$gradesArgs<ExtArgs>
    _count?: boolean | StudentSubjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentSubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type StudentSubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }

  export type $StudentSubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentSubject"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      subject: Prisma.$SubjectPayload<ExtArgs>
      grades: Prisma.$GradePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      subjectId: number
      academicYear: string
      semester: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["studentSubject"]>
    composites: {}
  }

  type StudentSubjectGetPayload<S extends boolean | null | undefined | StudentSubjectDefaultArgs> = $Result.GetResult<Prisma.$StudentSubjectPayload, S>

  type StudentSubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentSubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentSubjectCountAggregateInputType | true
    }

  export interface StudentSubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentSubject'], meta: { name: 'StudentSubject' } }
    /**
     * Find zero or one StudentSubject that matches the filter.
     * @param {StudentSubjectFindUniqueArgs} args - Arguments to find a StudentSubject
     * @example
     * // Get one StudentSubject
     * const studentSubject = await prisma.studentSubject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentSubjectFindUniqueArgs>(args: SelectSubset<T, StudentSubjectFindUniqueArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentSubject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentSubjectFindUniqueOrThrowArgs} args - Arguments to find a StudentSubject
     * @example
     * // Get one StudentSubject
     * const studentSubject = await prisma.studentSubject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentSubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentSubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentSubject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectFindFirstArgs} args - Arguments to find a StudentSubject
     * @example
     * // Get one StudentSubject
     * const studentSubject = await prisma.studentSubject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentSubjectFindFirstArgs>(args?: SelectSubset<T, StudentSubjectFindFirstArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentSubject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectFindFirstOrThrowArgs} args - Arguments to find a StudentSubject
     * @example
     * // Get one StudentSubject
     * const studentSubject = await prisma.studentSubject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentSubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentSubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentSubjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentSubjects
     * const studentSubjects = await prisma.studentSubject.findMany()
     * 
     * // Get first 10 StudentSubjects
     * const studentSubjects = await prisma.studentSubject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentSubjectWithIdOnly = await prisma.studentSubject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentSubjectFindManyArgs>(args?: SelectSubset<T, StudentSubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentSubject.
     * @param {StudentSubjectCreateArgs} args - Arguments to create a StudentSubject.
     * @example
     * // Create one StudentSubject
     * const StudentSubject = await prisma.studentSubject.create({
     *   data: {
     *     // ... data to create a StudentSubject
     *   }
     * })
     * 
     */
    create<T extends StudentSubjectCreateArgs>(args: SelectSubset<T, StudentSubjectCreateArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentSubjects.
     * @param {StudentSubjectCreateManyArgs} args - Arguments to create many StudentSubjects.
     * @example
     * // Create many StudentSubjects
     * const studentSubject = await prisma.studentSubject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentSubjectCreateManyArgs>(args?: SelectSubset<T, StudentSubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentSubjects and returns the data saved in the database.
     * @param {StudentSubjectCreateManyAndReturnArgs} args - Arguments to create many StudentSubjects.
     * @example
     * // Create many StudentSubjects
     * const studentSubject = await prisma.studentSubject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentSubjects and only return the `id`
     * const studentSubjectWithIdOnly = await prisma.studentSubject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentSubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentSubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentSubject.
     * @param {StudentSubjectDeleteArgs} args - Arguments to delete one StudentSubject.
     * @example
     * // Delete one StudentSubject
     * const StudentSubject = await prisma.studentSubject.delete({
     *   where: {
     *     // ... filter to delete one StudentSubject
     *   }
     * })
     * 
     */
    delete<T extends StudentSubjectDeleteArgs>(args: SelectSubset<T, StudentSubjectDeleteArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentSubject.
     * @param {StudentSubjectUpdateArgs} args - Arguments to update one StudentSubject.
     * @example
     * // Update one StudentSubject
     * const studentSubject = await prisma.studentSubject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentSubjectUpdateArgs>(args: SelectSubset<T, StudentSubjectUpdateArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentSubjects.
     * @param {StudentSubjectDeleteManyArgs} args - Arguments to filter StudentSubjects to delete.
     * @example
     * // Delete a few StudentSubjects
     * const { count } = await prisma.studentSubject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentSubjectDeleteManyArgs>(args?: SelectSubset<T, StudentSubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentSubjects
     * const studentSubject = await prisma.studentSubject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentSubjectUpdateManyArgs>(args: SelectSubset<T, StudentSubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentSubjects and returns the data updated in the database.
     * @param {StudentSubjectUpdateManyAndReturnArgs} args - Arguments to update many StudentSubjects.
     * @example
     * // Update many StudentSubjects
     * const studentSubject = await prisma.studentSubject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentSubjects and only return the `id`
     * const studentSubjectWithIdOnly = await prisma.studentSubject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentSubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentSubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentSubject.
     * @param {StudentSubjectUpsertArgs} args - Arguments to update or create a StudentSubject.
     * @example
     * // Update or create a StudentSubject
     * const studentSubject = await prisma.studentSubject.upsert({
     *   create: {
     *     // ... data to create a StudentSubject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentSubject we want to update
     *   }
     * })
     */
    upsert<T extends StudentSubjectUpsertArgs>(args: SelectSubset<T, StudentSubjectUpsertArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectCountArgs} args - Arguments to filter StudentSubjects to count.
     * @example
     * // Count the number of StudentSubjects
     * const count = await prisma.studentSubject.count({
     *   where: {
     *     // ... the filter for the StudentSubjects we want to count
     *   }
     * })
    **/
    count<T extends StudentSubjectCountArgs>(
      args?: Subset<T, StudentSubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentSubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentSubjectAggregateArgs>(args: Subset<T, StudentSubjectAggregateArgs>): Prisma.PrismaPromise<GetStudentSubjectAggregateType<T>>

    /**
     * Group by StudentSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectGroupByArgs} args - Group by arguments.
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
      T extends StudentSubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentSubjectGroupByArgs['orderBy'] }
        : { orderBy?: StudentSubjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentSubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentSubject model
   */
  readonly fields: StudentSubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentSubject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentSubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    grades<T extends StudentSubject$gradesArgs<ExtArgs> = {}>(args?: Subset<T, StudentSubject$gradesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the StudentSubject model
   */
  interface StudentSubjectFieldRefs {
    readonly id: FieldRef<"StudentSubject", 'Int'>
    readonly studentId: FieldRef<"StudentSubject", 'Int'>
    readonly subjectId: FieldRef<"StudentSubject", 'Int'>
    readonly academicYear: FieldRef<"StudentSubject", 'String'>
    readonly semester: FieldRef<"StudentSubject", 'String'>
    readonly isActive: FieldRef<"StudentSubject", 'Boolean'>
    readonly createdAt: FieldRef<"StudentSubject", 'DateTime'>
    readonly updatedAt: FieldRef<"StudentSubject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentSubject findUnique
   */
  export type StudentSubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * Filter, which StudentSubject to fetch.
     */
    where: StudentSubjectWhereUniqueInput
  }

  /**
   * StudentSubject findUniqueOrThrow
   */
  export type StudentSubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * Filter, which StudentSubject to fetch.
     */
    where: StudentSubjectWhereUniqueInput
  }

  /**
   * StudentSubject findFirst
   */
  export type StudentSubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * Filter, which StudentSubject to fetch.
     */
    where?: StudentSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSubjects to fetch.
     */
    orderBy?: StudentSubjectOrderByWithRelationInput | StudentSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentSubjects.
     */
    cursor?: StudentSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentSubjects.
     */
    distinct?: StudentSubjectScalarFieldEnum | StudentSubjectScalarFieldEnum[]
  }

  /**
   * StudentSubject findFirstOrThrow
   */
  export type StudentSubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * Filter, which StudentSubject to fetch.
     */
    where?: StudentSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSubjects to fetch.
     */
    orderBy?: StudentSubjectOrderByWithRelationInput | StudentSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentSubjects.
     */
    cursor?: StudentSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentSubjects.
     */
    distinct?: StudentSubjectScalarFieldEnum | StudentSubjectScalarFieldEnum[]
  }

  /**
   * StudentSubject findMany
   */
  export type StudentSubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * Filter, which StudentSubjects to fetch.
     */
    where?: StudentSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSubjects to fetch.
     */
    orderBy?: StudentSubjectOrderByWithRelationInput | StudentSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentSubjects.
     */
    cursor?: StudentSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSubjects.
     */
    skip?: number
    distinct?: StudentSubjectScalarFieldEnum | StudentSubjectScalarFieldEnum[]
  }

  /**
   * StudentSubject create
   */
  export type StudentSubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentSubject.
     */
    data: XOR<StudentSubjectCreateInput, StudentSubjectUncheckedCreateInput>
  }

  /**
   * StudentSubject createMany
   */
  export type StudentSubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentSubjects.
     */
    data: StudentSubjectCreateManyInput | StudentSubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentSubject createManyAndReturn
   */
  export type StudentSubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * The data used to create many StudentSubjects.
     */
    data: StudentSubjectCreateManyInput | StudentSubjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentSubject update
   */
  export type StudentSubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentSubject.
     */
    data: XOR<StudentSubjectUpdateInput, StudentSubjectUncheckedUpdateInput>
    /**
     * Choose, which StudentSubject to update.
     */
    where: StudentSubjectWhereUniqueInput
  }

  /**
   * StudentSubject updateMany
   */
  export type StudentSubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentSubjects.
     */
    data: XOR<StudentSubjectUpdateManyMutationInput, StudentSubjectUncheckedUpdateManyInput>
    /**
     * Filter which StudentSubjects to update
     */
    where?: StudentSubjectWhereInput
    /**
     * Limit how many StudentSubjects to update.
     */
    limit?: number
  }

  /**
   * StudentSubject updateManyAndReturn
   */
  export type StudentSubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * The data used to update StudentSubjects.
     */
    data: XOR<StudentSubjectUpdateManyMutationInput, StudentSubjectUncheckedUpdateManyInput>
    /**
     * Filter which StudentSubjects to update
     */
    where?: StudentSubjectWhereInput
    /**
     * Limit how many StudentSubjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentSubject upsert
   */
  export type StudentSubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentSubject to update in case it exists.
     */
    where: StudentSubjectWhereUniqueInput
    /**
     * In case the StudentSubject found by the `where` argument doesn't exist, create a new StudentSubject with this data.
     */
    create: XOR<StudentSubjectCreateInput, StudentSubjectUncheckedCreateInput>
    /**
     * In case the StudentSubject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentSubjectUpdateInput, StudentSubjectUncheckedUpdateInput>
  }

  /**
   * StudentSubject delete
   */
  export type StudentSubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * Filter which StudentSubject to delete.
     */
    where: StudentSubjectWhereUniqueInput
  }

  /**
   * StudentSubject deleteMany
   */
  export type StudentSubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentSubjects to delete
     */
    where?: StudentSubjectWhereInput
    /**
     * Limit how many StudentSubjects to delete.
     */
    limit?: number
  }

  /**
   * StudentSubject.grades
   */
  export type StudentSubject$gradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    where?: GradeWhereInput
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    cursor?: GradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * StudentSubject without action
   */
  export type StudentSubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
  }


  /**
   * Model TeacherSubject
   */

  export type AggregateTeacherSubject = {
    _count: TeacherSubjectCountAggregateOutputType | null
    _avg: TeacherSubjectAvgAggregateOutputType | null
    _sum: TeacherSubjectSumAggregateOutputType | null
    _min: TeacherSubjectMinAggregateOutputType | null
    _max: TeacherSubjectMaxAggregateOutputType | null
  }

  export type TeacherSubjectAvgAggregateOutputType = {
    id: number | null
    teacherId: number | null
    subjectId: number | null
  }

  export type TeacherSubjectSumAggregateOutputType = {
    id: number | null
    teacherId: number | null
    subjectId: number | null
  }

  export type TeacherSubjectMinAggregateOutputType = {
    id: number | null
    teacherId: number | null
    subjectId: number | null
    academicYear: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeacherSubjectMaxAggregateOutputType = {
    id: number | null
    teacherId: number | null
    subjectId: number | null
    academicYear: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeacherSubjectCountAggregateOutputType = {
    id: number
    teacherId: number
    subjectId: number
    academicYear: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeacherSubjectAvgAggregateInputType = {
    id?: true
    teacherId?: true
    subjectId?: true
  }

  export type TeacherSubjectSumAggregateInputType = {
    id?: true
    teacherId?: true
    subjectId?: true
  }

  export type TeacherSubjectMinAggregateInputType = {
    id?: true
    teacherId?: true
    subjectId?: true
    academicYear?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeacherSubjectMaxAggregateInputType = {
    id?: true
    teacherId?: true
    subjectId?: true
    academicYear?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeacherSubjectCountAggregateInputType = {
    id?: true
    teacherId?: true
    subjectId?: true
    academicYear?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeacherSubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherSubject to aggregate.
     */
    where?: TeacherSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherSubjects to fetch.
     */
    orderBy?: TeacherSubjectOrderByWithRelationInput | TeacherSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeacherSubjects
    **/
    _count?: true | TeacherSubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherSubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherSubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherSubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherSubjectMaxAggregateInputType
  }

  export type GetTeacherSubjectAggregateType<T extends TeacherSubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacherSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacherSubject[P]>
      : GetScalarType<T[P], AggregateTeacherSubject[P]>
  }




  export type TeacherSubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherSubjectWhereInput
    orderBy?: TeacherSubjectOrderByWithAggregationInput | TeacherSubjectOrderByWithAggregationInput[]
    by: TeacherSubjectScalarFieldEnum[] | TeacherSubjectScalarFieldEnum
    having?: TeacherSubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherSubjectCountAggregateInputType | true
    _avg?: TeacherSubjectAvgAggregateInputType
    _sum?: TeacherSubjectSumAggregateInputType
    _min?: TeacherSubjectMinAggregateInputType
    _max?: TeacherSubjectMaxAggregateInputType
  }

  export type TeacherSubjectGroupByOutputType = {
    id: number
    teacherId: number
    subjectId: number
    academicYear: string
    createdAt: Date
    updatedAt: Date
    _count: TeacherSubjectCountAggregateOutputType | null
    _avg: TeacherSubjectAvgAggregateOutputType | null
    _sum: TeacherSubjectSumAggregateOutputType | null
    _min: TeacherSubjectMinAggregateOutputType | null
    _max: TeacherSubjectMaxAggregateOutputType | null
  }

  type GetTeacherSubjectGroupByPayload<T extends TeacherSubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherSubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherSubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherSubjectGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherSubjectGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    subjectId?: boolean
    academicYear?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherSubject"]>

  export type TeacherSubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    subjectId?: boolean
    academicYear?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherSubject"]>

  export type TeacherSubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    subjectId?: boolean
    academicYear?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherSubject"]>

  export type TeacherSubjectSelectScalar = {
    id?: boolean
    teacherId?: boolean
    subjectId?: boolean
    academicYear?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeacherSubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teacherId" | "subjectId" | "academicYear" | "createdAt" | "updatedAt", ExtArgs["result"]["teacherSubject"]>
  export type TeacherSubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type TeacherSubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type TeacherSubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }

  export type $TeacherSubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeacherSubject"
    objects: {
      teacher: Prisma.$UserPayload<ExtArgs>
      subject: Prisma.$SubjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      teacherId: number
      subjectId: number
      academicYear: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["teacherSubject"]>
    composites: {}
  }

  type TeacherSubjectGetPayload<S extends boolean | null | undefined | TeacherSubjectDefaultArgs> = $Result.GetResult<Prisma.$TeacherSubjectPayload, S>

  type TeacherSubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherSubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherSubjectCountAggregateInputType | true
    }

  export interface TeacherSubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeacherSubject'], meta: { name: 'TeacherSubject' } }
    /**
     * Find zero or one TeacherSubject that matches the filter.
     * @param {TeacherSubjectFindUniqueArgs} args - Arguments to find a TeacherSubject
     * @example
     * // Get one TeacherSubject
     * const teacherSubject = await prisma.teacherSubject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherSubjectFindUniqueArgs>(args: SelectSubset<T, TeacherSubjectFindUniqueArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeacherSubject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherSubjectFindUniqueOrThrowArgs} args - Arguments to find a TeacherSubject
     * @example
     * // Get one TeacherSubject
     * const teacherSubject = await prisma.teacherSubject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherSubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherSubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherSubject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectFindFirstArgs} args - Arguments to find a TeacherSubject
     * @example
     * // Get one TeacherSubject
     * const teacherSubject = await prisma.teacherSubject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherSubjectFindFirstArgs>(args?: SelectSubset<T, TeacherSubjectFindFirstArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherSubject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectFindFirstOrThrowArgs} args - Arguments to find a TeacherSubject
     * @example
     * // Get one TeacherSubject
     * const teacherSubject = await prisma.teacherSubject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherSubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherSubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeacherSubjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeacherSubjects
     * const teacherSubjects = await prisma.teacherSubject.findMany()
     * 
     * // Get first 10 TeacherSubjects
     * const teacherSubjects = await prisma.teacherSubject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherSubjectWithIdOnly = await prisma.teacherSubject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherSubjectFindManyArgs>(args?: SelectSubset<T, TeacherSubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeacherSubject.
     * @param {TeacherSubjectCreateArgs} args - Arguments to create a TeacherSubject.
     * @example
     * // Create one TeacherSubject
     * const TeacherSubject = await prisma.teacherSubject.create({
     *   data: {
     *     // ... data to create a TeacherSubject
     *   }
     * })
     * 
     */
    create<T extends TeacherSubjectCreateArgs>(args: SelectSubset<T, TeacherSubjectCreateArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeacherSubjects.
     * @param {TeacherSubjectCreateManyArgs} args - Arguments to create many TeacherSubjects.
     * @example
     * // Create many TeacherSubjects
     * const teacherSubject = await prisma.teacherSubject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherSubjectCreateManyArgs>(args?: SelectSubset<T, TeacherSubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeacherSubjects and returns the data saved in the database.
     * @param {TeacherSubjectCreateManyAndReturnArgs} args - Arguments to create many TeacherSubjects.
     * @example
     * // Create many TeacherSubjects
     * const teacherSubject = await prisma.teacherSubject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeacherSubjects and only return the `id`
     * const teacherSubjectWithIdOnly = await prisma.teacherSubject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherSubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherSubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeacherSubject.
     * @param {TeacherSubjectDeleteArgs} args - Arguments to delete one TeacherSubject.
     * @example
     * // Delete one TeacherSubject
     * const TeacherSubject = await prisma.teacherSubject.delete({
     *   where: {
     *     // ... filter to delete one TeacherSubject
     *   }
     * })
     * 
     */
    delete<T extends TeacherSubjectDeleteArgs>(args: SelectSubset<T, TeacherSubjectDeleteArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeacherSubject.
     * @param {TeacherSubjectUpdateArgs} args - Arguments to update one TeacherSubject.
     * @example
     * // Update one TeacherSubject
     * const teacherSubject = await prisma.teacherSubject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherSubjectUpdateArgs>(args: SelectSubset<T, TeacherSubjectUpdateArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeacherSubjects.
     * @param {TeacherSubjectDeleteManyArgs} args - Arguments to filter TeacherSubjects to delete.
     * @example
     * // Delete a few TeacherSubjects
     * const { count } = await prisma.teacherSubject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherSubjectDeleteManyArgs>(args?: SelectSubset<T, TeacherSubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeacherSubjects
     * const teacherSubject = await prisma.teacherSubject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherSubjectUpdateManyArgs>(args: SelectSubset<T, TeacherSubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherSubjects and returns the data updated in the database.
     * @param {TeacherSubjectUpdateManyAndReturnArgs} args - Arguments to update many TeacherSubjects.
     * @example
     * // Update many TeacherSubjects
     * const teacherSubject = await prisma.teacherSubject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeacherSubjects and only return the `id`
     * const teacherSubjectWithIdOnly = await prisma.teacherSubject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeacherSubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherSubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeacherSubject.
     * @param {TeacherSubjectUpsertArgs} args - Arguments to update or create a TeacherSubject.
     * @example
     * // Update or create a TeacherSubject
     * const teacherSubject = await prisma.teacherSubject.upsert({
     *   create: {
     *     // ... data to create a TeacherSubject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeacherSubject we want to update
     *   }
     * })
     */
    upsert<T extends TeacherSubjectUpsertArgs>(args: SelectSubset<T, TeacherSubjectUpsertArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeacherSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectCountArgs} args - Arguments to filter TeacherSubjects to count.
     * @example
     * // Count the number of TeacherSubjects
     * const count = await prisma.teacherSubject.count({
     *   where: {
     *     // ... the filter for the TeacherSubjects we want to count
     *   }
     * })
    **/
    count<T extends TeacherSubjectCountArgs>(
      args?: Subset<T, TeacherSubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherSubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeacherSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherSubjectAggregateArgs>(args: Subset<T, TeacherSubjectAggregateArgs>): Prisma.PrismaPromise<GetTeacherSubjectAggregateType<T>>

    /**
     * Group by TeacherSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectGroupByArgs} args - Group by arguments.
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
      T extends TeacherSubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherSubjectGroupByArgs['orderBy'] }
        : { orderBy?: TeacherSubjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeacherSubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeacherSubject model
   */
  readonly fields: TeacherSubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeacherSubject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherSubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TeacherSubject model
   */
  interface TeacherSubjectFieldRefs {
    readonly id: FieldRef<"TeacherSubject", 'Int'>
    readonly teacherId: FieldRef<"TeacherSubject", 'Int'>
    readonly subjectId: FieldRef<"TeacherSubject", 'Int'>
    readonly academicYear: FieldRef<"TeacherSubject", 'String'>
    readonly createdAt: FieldRef<"TeacherSubject", 'DateTime'>
    readonly updatedAt: FieldRef<"TeacherSubject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeacherSubject findUnique
   */
  export type TeacherSubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSubject to fetch.
     */
    where: TeacherSubjectWhereUniqueInput
  }

  /**
   * TeacherSubject findUniqueOrThrow
   */
  export type TeacherSubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSubject to fetch.
     */
    where: TeacherSubjectWhereUniqueInput
  }

  /**
   * TeacherSubject findFirst
   */
  export type TeacherSubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSubject to fetch.
     */
    where?: TeacherSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherSubjects to fetch.
     */
    orderBy?: TeacherSubjectOrderByWithRelationInput | TeacherSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherSubjects.
     */
    cursor?: TeacherSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherSubjects.
     */
    distinct?: TeacherSubjectScalarFieldEnum | TeacherSubjectScalarFieldEnum[]
  }

  /**
   * TeacherSubject findFirstOrThrow
   */
  export type TeacherSubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSubject to fetch.
     */
    where?: TeacherSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherSubjects to fetch.
     */
    orderBy?: TeacherSubjectOrderByWithRelationInput | TeacherSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherSubjects.
     */
    cursor?: TeacherSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherSubjects.
     */
    distinct?: TeacherSubjectScalarFieldEnum | TeacherSubjectScalarFieldEnum[]
  }

  /**
   * TeacherSubject findMany
   */
  export type TeacherSubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSubjects to fetch.
     */
    where?: TeacherSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherSubjects to fetch.
     */
    orderBy?: TeacherSubjectOrderByWithRelationInput | TeacherSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeacherSubjects.
     */
    cursor?: TeacherSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherSubjects.
     */
    skip?: number
    distinct?: TeacherSubjectScalarFieldEnum | TeacherSubjectScalarFieldEnum[]
  }

  /**
   * TeacherSubject create
   */
  export type TeacherSubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a TeacherSubject.
     */
    data: XOR<TeacherSubjectCreateInput, TeacherSubjectUncheckedCreateInput>
  }

  /**
   * TeacherSubject createMany
   */
  export type TeacherSubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeacherSubjects.
     */
    data: TeacherSubjectCreateManyInput | TeacherSubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeacherSubject createManyAndReturn
   */
  export type TeacherSubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * The data used to create many TeacherSubjects.
     */
    data: TeacherSubjectCreateManyInput | TeacherSubjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherSubject update
   */
  export type TeacherSubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a TeacherSubject.
     */
    data: XOR<TeacherSubjectUpdateInput, TeacherSubjectUncheckedUpdateInput>
    /**
     * Choose, which TeacherSubject to update.
     */
    where: TeacherSubjectWhereUniqueInput
  }

  /**
   * TeacherSubject updateMany
   */
  export type TeacherSubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeacherSubjects.
     */
    data: XOR<TeacherSubjectUpdateManyMutationInput, TeacherSubjectUncheckedUpdateManyInput>
    /**
     * Filter which TeacherSubjects to update
     */
    where?: TeacherSubjectWhereInput
    /**
     * Limit how many TeacherSubjects to update.
     */
    limit?: number
  }

  /**
   * TeacherSubject updateManyAndReturn
   */
  export type TeacherSubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * The data used to update TeacherSubjects.
     */
    data: XOR<TeacherSubjectUpdateManyMutationInput, TeacherSubjectUncheckedUpdateManyInput>
    /**
     * Filter which TeacherSubjects to update
     */
    where?: TeacherSubjectWhereInput
    /**
     * Limit how many TeacherSubjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherSubject upsert
   */
  export type TeacherSubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the TeacherSubject to update in case it exists.
     */
    where: TeacherSubjectWhereUniqueInput
    /**
     * In case the TeacherSubject found by the `where` argument doesn't exist, create a new TeacherSubject with this data.
     */
    create: XOR<TeacherSubjectCreateInput, TeacherSubjectUncheckedCreateInput>
    /**
     * In case the TeacherSubject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherSubjectUpdateInput, TeacherSubjectUncheckedUpdateInput>
  }

  /**
   * TeacherSubject delete
   */
  export type TeacherSubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * Filter which TeacherSubject to delete.
     */
    where: TeacherSubjectWhereUniqueInput
  }

  /**
   * TeacherSubject deleteMany
   */
  export type TeacherSubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherSubjects to delete
     */
    where?: TeacherSubjectWhereInput
    /**
     * Limit how many TeacherSubjects to delete.
     */
    limit?: number
  }

  /**
   * TeacherSubject without action
   */
  export type TeacherSubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
  }


  /**
   * Model Grade
   */

  export type AggregateGrade = {
    _count: GradeCountAggregateOutputType | null
    _avg: GradeAvgAggregateOutputType | null
    _sum: GradeSumAggregateOutputType | null
    _min: GradeMinAggregateOutputType | null
    _max: GradeMaxAggregateOutputType | null
  }

  export type GradeAvgAggregateOutputType = {
    id: number | null
    studentSubjectId: number | null
    teacherId: number | null
    score: number | null
  }

  export type GradeSumAggregateOutputType = {
    id: number | null
    studentSubjectId: number | null
    teacherId: number | null
    score: number | null
  }

  export type GradeMinAggregateOutputType = {
    id: number | null
    studentSubjectId: number | null
    teacherId: number | null
    term: string | null
    score: number | null
    letterGrade: string | null
    remarks: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GradeMaxAggregateOutputType = {
    id: number | null
    studentSubjectId: number | null
    teacherId: number | null
    term: string | null
    score: number | null
    letterGrade: string | null
    remarks: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GradeCountAggregateOutputType = {
    id: number
    studentSubjectId: number
    teacherId: number
    term: number
    score: number
    letterGrade: number
    remarks: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GradeAvgAggregateInputType = {
    id?: true
    studentSubjectId?: true
    teacherId?: true
    score?: true
  }

  export type GradeSumAggregateInputType = {
    id?: true
    studentSubjectId?: true
    teacherId?: true
    score?: true
  }

  export type GradeMinAggregateInputType = {
    id?: true
    studentSubjectId?: true
    teacherId?: true
    term?: true
    score?: true
    letterGrade?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GradeMaxAggregateInputType = {
    id?: true
    studentSubjectId?: true
    teacherId?: true
    term?: true
    score?: true
    letterGrade?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GradeCountAggregateInputType = {
    id?: true
    studentSubjectId?: true
    teacherId?: true
    term?: true
    score?: true
    letterGrade?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grade to aggregate.
     */
    where?: GradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grades to fetch.
     */
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Grades
    **/
    _count?: true | GradeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GradeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GradeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GradeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GradeMaxAggregateInputType
  }

  export type GetGradeAggregateType<T extends GradeAggregateArgs> = {
        [P in keyof T & keyof AggregateGrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrade[P]>
      : GetScalarType<T[P], AggregateGrade[P]>
  }




  export type GradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GradeWhereInput
    orderBy?: GradeOrderByWithAggregationInput | GradeOrderByWithAggregationInput[]
    by: GradeScalarFieldEnum[] | GradeScalarFieldEnum
    having?: GradeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GradeCountAggregateInputType | true
    _avg?: GradeAvgAggregateInputType
    _sum?: GradeSumAggregateInputType
    _min?: GradeMinAggregateInputType
    _max?: GradeMaxAggregateInputType
  }

  export type GradeGroupByOutputType = {
    id: number
    studentSubjectId: number
    teacherId: number
    term: string
    score: number
    letterGrade: string | null
    remarks: string | null
    createdAt: Date
    updatedAt: Date
    _count: GradeCountAggregateOutputType | null
    _avg: GradeAvgAggregateOutputType | null
    _sum: GradeSumAggregateOutputType | null
    _min: GradeMinAggregateOutputType | null
    _max: GradeMaxAggregateOutputType | null
  }

  type GetGradeGroupByPayload<T extends GradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GradeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GradeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GradeGroupByOutputType[P]>
            : GetScalarType<T[P], GradeGroupByOutputType[P]>
        }
      >
    >


  export type GradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentSubjectId?: boolean
    teacherId?: boolean
    term?: boolean
    score?: boolean
    letterGrade?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    studentSubject?: boolean | StudentSubjectDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grade"]>

  export type GradeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentSubjectId?: boolean
    teacherId?: boolean
    term?: boolean
    score?: boolean
    letterGrade?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    studentSubject?: boolean | StudentSubjectDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grade"]>

  export type GradeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentSubjectId?: boolean
    teacherId?: boolean
    term?: boolean
    score?: boolean
    letterGrade?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    studentSubject?: boolean | StudentSubjectDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grade"]>

  export type GradeSelectScalar = {
    id?: boolean
    studentSubjectId?: boolean
    teacherId?: boolean
    term?: boolean
    score?: boolean
    letterGrade?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GradeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentSubjectId" | "teacherId" | "term" | "score" | "letterGrade" | "remarks" | "createdAt" | "updatedAt", ExtArgs["result"]["grade"]>
  export type GradeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentSubject?: boolean | StudentSubjectDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GradeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentSubject?: boolean | StudentSubjectDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GradeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentSubject?: boolean | StudentSubjectDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Grade"
    objects: {
      studentSubject: Prisma.$StudentSubjectPayload<ExtArgs>
      teacher: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentSubjectId: number
      teacherId: number
      term: string
      score: number
      letterGrade: string | null
      remarks: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["grade"]>
    composites: {}
  }

  type GradeGetPayload<S extends boolean | null | undefined | GradeDefaultArgs> = $Result.GetResult<Prisma.$GradePayload, S>

  type GradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GradeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GradeCountAggregateInputType | true
    }

  export interface GradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Grade'], meta: { name: 'Grade' } }
    /**
     * Find zero or one Grade that matches the filter.
     * @param {GradeFindUniqueArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GradeFindUniqueArgs>(args: SelectSubset<T, GradeFindUniqueArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Grade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GradeFindUniqueOrThrowArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GradeFindUniqueOrThrowArgs>(args: SelectSubset<T, GradeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeFindFirstArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GradeFindFirstArgs>(args?: SelectSubset<T, GradeFindFirstArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeFindFirstOrThrowArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GradeFindFirstOrThrowArgs>(args?: SelectSubset<T, GradeFindFirstOrThrowArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Grades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Grades
     * const grades = await prisma.grade.findMany()
     * 
     * // Get first 10 Grades
     * const grades = await prisma.grade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gradeWithIdOnly = await prisma.grade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GradeFindManyArgs>(args?: SelectSubset<T, GradeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Grade.
     * @param {GradeCreateArgs} args - Arguments to create a Grade.
     * @example
     * // Create one Grade
     * const Grade = await prisma.grade.create({
     *   data: {
     *     // ... data to create a Grade
     *   }
     * })
     * 
     */
    create<T extends GradeCreateArgs>(args: SelectSubset<T, GradeCreateArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Grades.
     * @param {GradeCreateManyArgs} args - Arguments to create many Grades.
     * @example
     * // Create many Grades
     * const grade = await prisma.grade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GradeCreateManyArgs>(args?: SelectSubset<T, GradeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Grades and returns the data saved in the database.
     * @param {GradeCreateManyAndReturnArgs} args - Arguments to create many Grades.
     * @example
     * // Create many Grades
     * const grade = await prisma.grade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Grades and only return the `id`
     * const gradeWithIdOnly = await prisma.grade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GradeCreateManyAndReturnArgs>(args?: SelectSubset<T, GradeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Grade.
     * @param {GradeDeleteArgs} args - Arguments to delete one Grade.
     * @example
     * // Delete one Grade
     * const Grade = await prisma.grade.delete({
     *   where: {
     *     // ... filter to delete one Grade
     *   }
     * })
     * 
     */
    delete<T extends GradeDeleteArgs>(args: SelectSubset<T, GradeDeleteArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Grade.
     * @param {GradeUpdateArgs} args - Arguments to update one Grade.
     * @example
     * // Update one Grade
     * const grade = await prisma.grade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GradeUpdateArgs>(args: SelectSubset<T, GradeUpdateArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Grades.
     * @param {GradeDeleteManyArgs} args - Arguments to filter Grades to delete.
     * @example
     * // Delete a few Grades
     * const { count } = await prisma.grade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GradeDeleteManyArgs>(args?: SelectSubset<T, GradeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Grades
     * const grade = await prisma.grade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GradeUpdateManyArgs>(args: SelectSubset<T, GradeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grades and returns the data updated in the database.
     * @param {GradeUpdateManyAndReturnArgs} args - Arguments to update many Grades.
     * @example
     * // Update many Grades
     * const grade = await prisma.grade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Grades and only return the `id`
     * const gradeWithIdOnly = await prisma.grade.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GradeUpdateManyAndReturnArgs>(args: SelectSubset<T, GradeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Grade.
     * @param {GradeUpsertArgs} args - Arguments to update or create a Grade.
     * @example
     * // Update or create a Grade
     * const grade = await prisma.grade.upsert({
     *   create: {
     *     // ... data to create a Grade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Grade we want to update
     *   }
     * })
     */
    upsert<T extends GradeUpsertArgs>(args: SelectSubset<T, GradeUpsertArgs<ExtArgs>>): Prisma__GradeClient<$Result.GetResult<Prisma.$GradePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Grades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeCountArgs} args - Arguments to filter Grades to count.
     * @example
     * // Count the number of Grades
     * const count = await prisma.grade.count({
     *   where: {
     *     // ... the filter for the Grades we want to count
     *   }
     * })
    **/
    count<T extends GradeCountArgs>(
      args?: Subset<T, GradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GradeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Grade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GradeAggregateArgs>(args: Subset<T, GradeAggregateArgs>): Prisma.PrismaPromise<GetGradeAggregateType<T>>

    /**
     * Group by Grade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeGroupByArgs} args - Group by arguments.
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
      T extends GradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GradeGroupByArgs['orderBy'] }
        : { orderBy?: GradeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Grade model
   */
  readonly fields: GradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Grade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GradeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studentSubject<T extends StudentSubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentSubjectDefaultArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teacher<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Grade model
   */
  interface GradeFieldRefs {
    readonly id: FieldRef<"Grade", 'Int'>
    readonly studentSubjectId: FieldRef<"Grade", 'Int'>
    readonly teacherId: FieldRef<"Grade", 'Int'>
    readonly term: FieldRef<"Grade", 'String'>
    readonly score: FieldRef<"Grade", 'Float'>
    readonly letterGrade: FieldRef<"Grade", 'String'>
    readonly remarks: FieldRef<"Grade", 'String'>
    readonly createdAt: FieldRef<"Grade", 'DateTime'>
    readonly updatedAt: FieldRef<"Grade", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Grade findUnique
   */
  export type GradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter, which Grade to fetch.
     */
    where: GradeWhereUniqueInput
  }

  /**
   * Grade findUniqueOrThrow
   */
  export type GradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter, which Grade to fetch.
     */
    where: GradeWhereUniqueInput
  }

  /**
   * Grade findFirst
   */
  export type GradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter, which Grade to fetch.
     */
    where?: GradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grades to fetch.
     */
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grades.
     */
    cursor?: GradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grades.
     */
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * Grade findFirstOrThrow
   */
  export type GradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter, which Grade to fetch.
     */
    where?: GradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grades to fetch.
     */
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grades.
     */
    cursor?: GradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grades.
     */
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * Grade findMany
   */
  export type GradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter, which Grades to fetch.
     */
    where?: GradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grades to fetch.
     */
    orderBy?: GradeOrderByWithRelationInput | GradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Grades.
     */
    cursor?: GradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grades.
     */
    skip?: number
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * Grade create
   */
  export type GradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * The data needed to create a Grade.
     */
    data: XOR<GradeCreateInput, GradeUncheckedCreateInput>
  }

  /**
   * Grade createMany
   */
  export type GradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Grades.
     */
    data: GradeCreateManyInput | GradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Grade createManyAndReturn
   */
  export type GradeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * The data used to create many Grades.
     */
    data: GradeCreateManyInput | GradeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Grade update
   */
  export type GradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * The data needed to update a Grade.
     */
    data: XOR<GradeUpdateInput, GradeUncheckedUpdateInput>
    /**
     * Choose, which Grade to update.
     */
    where: GradeWhereUniqueInput
  }

  /**
   * Grade updateMany
   */
  export type GradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Grades.
     */
    data: XOR<GradeUpdateManyMutationInput, GradeUncheckedUpdateManyInput>
    /**
     * Filter which Grades to update
     */
    where?: GradeWhereInput
    /**
     * Limit how many Grades to update.
     */
    limit?: number
  }

  /**
   * Grade updateManyAndReturn
   */
  export type GradeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * The data used to update Grades.
     */
    data: XOR<GradeUpdateManyMutationInput, GradeUncheckedUpdateManyInput>
    /**
     * Filter which Grades to update
     */
    where?: GradeWhereInput
    /**
     * Limit how many Grades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Grade upsert
   */
  export type GradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * The filter to search for the Grade to update in case it exists.
     */
    where: GradeWhereUniqueInput
    /**
     * In case the Grade found by the `where` argument doesn't exist, create a new Grade with this data.
     */
    create: XOR<GradeCreateInput, GradeUncheckedCreateInput>
    /**
     * In case the Grade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GradeUpdateInput, GradeUncheckedUpdateInput>
  }

  /**
   * Grade delete
   */
  export type GradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
    /**
     * Filter which Grade to delete.
     */
    where: GradeWhereUniqueInput
  }

  /**
   * Grade deleteMany
   */
  export type GradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grades to delete
     */
    where?: GradeWhereInput
    /**
     * Limit how many Grades to delete.
     */
    limit?: number
  }

  /**
   * Grade without action
   */
  export type GradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grade
     */
    select?: GradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grade
     */
    omit?: GradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradeInclude<ExtArgs> | null
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
    userId: number | null
    entityId: number | null
  }

  export type ActivityLogSumAggregateOutputType = {
    id: number | null
    userId: number | null
    entityId: number | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: number | null
    userId: number | null
    action: string | null
    details: string | null
    entityType: string | null
    entityId: number | null
    ipAddress: string | null
    createdAt: Date | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    action: string | null
    details: string | null
    entityType: string | null
    entityId: number | null
    ipAddress: string | null
    createdAt: Date | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    details: number
    entityType: number
    entityId: number
    ipAddress: number
    createdAt: number
    _all: number
  }


  export type ActivityLogAvgAggregateInputType = {
    id?: true
    userId?: true
    entityId?: true
  }

  export type ActivityLogSumAggregateInputType = {
    id?: true
    userId?: true
    entityId?: true
  }

  export type ActivityLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    details?: true
    entityType?: true
    entityId?: true
    ipAddress?: true
    createdAt?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    details?: true
    entityType?: true
    entityId?: true
    ipAddress?: true
    createdAt?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    details?: true
    entityType?: true
    entityId?: true
    ipAddress?: true
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
    userId: number
    action: string
    details: string
    entityType: string
    entityId: number
    ipAddress: string | null
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
    userId?: boolean
    action?: boolean
    details?: boolean
    entityType?: boolean
    entityId?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    details?: boolean
    entityType?: boolean
    entityId?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    details?: boolean
    entityType?: boolean
    entityId?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    details?: boolean
    entityType?: boolean
    entityId?: boolean
    ipAddress?: boolean
    createdAt?: boolean
  }

  export type ActivityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "details" | "entityType" | "entityId" | "ipAddress" | "createdAt", ExtArgs["result"]["activityLog"]>
  export type ActivityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActivityLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActivityLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      action: string
      details: string
      entityType: string
      entityId: number
      ipAddress: string | null
      createdAt: Date
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends ActivityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more ActivityLogs and returns the data updated in the database.
     * @param {ActivityLogUpdateManyAndReturnArgs} args - Arguments to update many ActivityLogs.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActivityLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly userId: FieldRef<"ActivityLog", 'Int'>
    readonly action: FieldRef<"ActivityLog", 'String'>
    readonly details: FieldRef<"ActivityLog", 'String'>
    readonly entityType: FieldRef<"ActivityLog", 'String'>
    readonly entityId: FieldRef<"ActivityLog", 'Int'>
    readonly ipAddress: FieldRef<"ActivityLog", 'String'>
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
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
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
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
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
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
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
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
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
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
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
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
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
    skipDuplicates?: boolean
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
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
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
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
  }

  /**
   * ActivityLog updateManyAndReturn
   */
  export type ActivityLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
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
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
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
    /**
     * Limit how many ActivityLogs to delete.
     */
    limit?: number
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    employeeId: 'employeeId',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    studentLrn: 'studentLrn',
    firstName: 'firstName',
    lastName: 'lastName',
    middleName: 'middleName',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    address: 'address',
    contactNumber: 'contactNumber',
    guardianName: 'guardianName',
    guardianContact: 'guardianContact',
    yearLevel: 'yearLevel',
    section: 'section',
    academicTrack: 'academicTrack',
    enrollmentStatus: 'enrollmentStatus',
    enrollmentDate: 'enrollmentDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const SubjectScalarFieldEnum: {
    id: 'id',
    subjectCode: 'subjectCode',
    subjectName: 'subjectName',
    description: 'description',
    yearLevel: 'yearLevel',
    academicTrack: 'academicTrack',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum]


  export const StudentSubjectScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    subjectId: 'subjectId',
    academicYear: 'academicYear',
    semester: 'semester',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentSubjectScalarFieldEnum = (typeof StudentSubjectScalarFieldEnum)[keyof typeof StudentSubjectScalarFieldEnum]


  export const TeacherSubjectScalarFieldEnum: {
    id: 'id',
    teacherId: 'teacherId',
    subjectId: 'subjectId',
    academicYear: 'academicYear',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeacherSubjectScalarFieldEnum = (typeof TeacherSubjectScalarFieldEnum)[keyof typeof TeacherSubjectScalarFieldEnum]


  export const GradeScalarFieldEnum: {
    id: 'id',
    studentSubjectId: 'studentSubjectId',
    teacherId: 'teacherId',
    term: 'term',
    score: 'score',
    letterGrade: 'letterGrade',
    remarks: 'remarks',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GradeScalarFieldEnum = (typeof GradeScalarFieldEnum)[keyof typeof GradeScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    details: 'details',
    entityType: 'entityType',
    entityId: 'entityId',
    ipAddress: 'ipAddress',
    createdAt: 'createdAt'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AcademicTrack'
   */
  export type EnumAcademicTrackFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AcademicTrack'>
    


  /**
   * Reference to a field of type 'AcademicTrack[]'
   */
  export type ListEnumAcademicTrackFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AcademicTrack[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    employeeId?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    active?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    teacherSubjects?: TeacherSubjectListRelationFilter
    gradesEntered?: GradeListRelationFilter
    logsCreated?: ActivityLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teacherSubjects?: TeacherSubjectOrderByRelationAggregateInput
    gradesEntered?: GradeOrderByRelationAggregateInput
    logsCreated?: ActivityLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    employeeId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    active?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    teacherSubjects?: TeacherSubjectListRelationFilter
    gradesEntered?: GradeListRelationFilter
    logsCreated?: ActivityLogListRelationFilter
  }, "id" | "employeeId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    employeeId?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    employeeId?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    active?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: IntFilter<"Student"> | number
    studentId?: StringFilter<"Student"> | string
    studentLrn?: StringFilter<"Student"> | string
    firstName?: StringFilter<"Student"> | string
    lastName?: StringFilter<"Student"> | string
    middleName?: StringNullableFilter<"Student"> | string | null
    dateOfBirth?: DateTimeFilter<"Student"> | Date | string
    gender?: StringFilter<"Student"> | string
    address?: StringFilter<"Student"> | string
    contactNumber?: StringNullableFilter<"Student"> | string | null
    guardianName?: StringFilter<"Student"> | string
    guardianContact?: StringFilter<"Student"> | string
    yearLevel?: IntFilter<"Student"> | number
    section?: StringFilter<"Student"> | string
    academicTrack?: EnumAcademicTrackNullableFilter<"Student"> | $Enums.AcademicTrack | null
    enrollmentStatus?: StringFilter<"Student"> | string
    enrollmentDate?: DateTimeFilter<"Student"> | Date | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    studentSubjects?: StudentSubjectListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentLrn?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    middleName?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    contactNumber?: SortOrderInput | SortOrder
    guardianName?: SortOrder
    guardianContact?: SortOrder
    yearLevel?: SortOrder
    section?: SortOrder
    academicTrack?: SortOrderInput | SortOrder
    enrollmentStatus?: SortOrder
    enrollmentDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    studentSubjects?: StudentSubjectOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    studentId?: string
    studentLrn?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    firstName?: StringFilter<"Student"> | string
    lastName?: StringFilter<"Student"> | string
    middleName?: StringNullableFilter<"Student"> | string | null
    dateOfBirth?: DateTimeFilter<"Student"> | Date | string
    gender?: StringFilter<"Student"> | string
    address?: StringFilter<"Student"> | string
    contactNumber?: StringNullableFilter<"Student"> | string | null
    guardianName?: StringFilter<"Student"> | string
    guardianContact?: StringFilter<"Student"> | string
    yearLevel?: IntFilter<"Student"> | number
    section?: StringFilter<"Student"> | string
    academicTrack?: EnumAcademicTrackNullableFilter<"Student"> | $Enums.AcademicTrack | null
    enrollmentStatus?: StringFilter<"Student"> | string
    enrollmentDate?: DateTimeFilter<"Student"> | Date | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    studentSubjects?: StudentSubjectListRelationFilter
  }, "id" | "studentId" | "studentLrn">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentLrn?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    middleName?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    contactNumber?: SortOrderInput | SortOrder
    guardianName?: SortOrder
    guardianContact?: SortOrder
    yearLevel?: SortOrder
    section?: SortOrder
    academicTrack?: SortOrderInput | SortOrder
    enrollmentStatus?: SortOrder
    enrollmentDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Student"> | number
    studentId?: StringWithAggregatesFilter<"Student"> | string
    studentLrn?: StringWithAggregatesFilter<"Student"> | string
    firstName?: StringWithAggregatesFilter<"Student"> | string
    lastName?: StringWithAggregatesFilter<"Student"> | string
    middleName?: StringNullableWithAggregatesFilter<"Student"> | string | null
    dateOfBirth?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    gender?: StringWithAggregatesFilter<"Student"> | string
    address?: StringWithAggregatesFilter<"Student"> | string
    contactNumber?: StringNullableWithAggregatesFilter<"Student"> | string | null
    guardianName?: StringWithAggregatesFilter<"Student"> | string
    guardianContact?: StringWithAggregatesFilter<"Student"> | string
    yearLevel?: IntWithAggregatesFilter<"Student"> | number
    section?: StringWithAggregatesFilter<"Student"> | string
    academicTrack?: EnumAcademicTrackNullableWithAggregatesFilter<"Student"> | $Enums.AcademicTrack | null
    enrollmentStatus?: StringWithAggregatesFilter<"Student"> | string
    enrollmentDate?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type SubjectWhereInput = {
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    id?: IntFilter<"Subject"> | number
    subjectCode?: StringFilter<"Subject"> | string
    subjectName?: StringFilter<"Subject"> | string
    description?: StringNullableFilter<"Subject"> | string | null
    yearLevel?: IntFilter<"Subject"> | number
    academicTrack?: EnumAcademicTrackNullableFilter<"Subject"> | $Enums.AcademicTrack | null
    createdAt?: DateTimeFilter<"Subject"> | Date | string
    updatedAt?: DateTimeFilter<"Subject"> | Date | string
    teachers?: TeacherSubjectListRelationFilter
    studentSubjects?: StudentSubjectListRelationFilter
  }

  export type SubjectOrderByWithRelationInput = {
    id?: SortOrder
    subjectCode?: SortOrder
    subjectName?: SortOrder
    description?: SortOrderInput | SortOrder
    yearLevel?: SortOrder
    academicTrack?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teachers?: TeacherSubjectOrderByRelationAggregateInput
    studentSubjects?: StudentSubjectOrderByRelationAggregateInput
  }

  export type SubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    subjectCode?: string
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    subjectName?: StringFilter<"Subject"> | string
    description?: StringNullableFilter<"Subject"> | string | null
    yearLevel?: IntFilter<"Subject"> | number
    academicTrack?: EnumAcademicTrackNullableFilter<"Subject"> | $Enums.AcademicTrack | null
    createdAt?: DateTimeFilter<"Subject"> | Date | string
    updatedAt?: DateTimeFilter<"Subject"> | Date | string
    teachers?: TeacherSubjectListRelationFilter
    studentSubjects?: StudentSubjectListRelationFilter
  }, "id" | "subjectCode">

  export type SubjectOrderByWithAggregationInput = {
    id?: SortOrder
    subjectCode?: SortOrder
    subjectName?: SortOrder
    description?: SortOrderInput | SortOrder
    yearLevel?: SortOrder
    academicTrack?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubjectCountOrderByAggregateInput
    _avg?: SubjectAvgOrderByAggregateInput
    _max?: SubjectMaxOrderByAggregateInput
    _min?: SubjectMinOrderByAggregateInput
    _sum?: SubjectSumOrderByAggregateInput
  }

  export type SubjectScalarWhereWithAggregatesInput = {
    AND?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    OR?: SubjectScalarWhereWithAggregatesInput[]
    NOT?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subject"> | number
    subjectCode?: StringWithAggregatesFilter<"Subject"> | string
    subjectName?: StringWithAggregatesFilter<"Subject"> | string
    description?: StringNullableWithAggregatesFilter<"Subject"> | string | null
    yearLevel?: IntWithAggregatesFilter<"Subject"> | number
    academicTrack?: EnumAcademicTrackNullableWithAggregatesFilter<"Subject"> | $Enums.AcademicTrack | null
    createdAt?: DateTimeWithAggregatesFilter<"Subject"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subject"> | Date | string
  }

  export type StudentSubjectWhereInput = {
    AND?: StudentSubjectWhereInput | StudentSubjectWhereInput[]
    OR?: StudentSubjectWhereInput[]
    NOT?: StudentSubjectWhereInput | StudentSubjectWhereInput[]
    id?: IntFilter<"StudentSubject"> | number
    studentId?: IntFilter<"StudentSubject"> | number
    subjectId?: IntFilter<"StudentSubject"> | number
    academicYear?: StringFilter<"StudentSubject"> | string
    semester?: StringNullableFilter<"StudentSubject"> | string | null
    isActive?: BoolFilter<"StudentSubject"> | boolean
    createdAt?: DateTimeFilter<"StudentSubject"> | Date | string
    updatedAt?: DateTimeFilter<"StudentSubject"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    grades?: GradeListRelationFilter
  }

  export type StudentSubjectOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    academicYear?: SortOrder
    semester?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    subject?: SubjectOrderByWithRelationInput
    grades?: GradeOrderByRelationAggregateInput
  }

  export type StudentSubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    studentId_subjectId_academicYear?: StudentSubjectStudentIdSubjectIdAcademicYearCompoundUniqueInput
    AND?: StudentSubjectWhereInput | StudentSubjectWhereInput[]
    OR?: StudentSubjectWhereInput[]
    NOT?: StudentSubjectWhereInput | StudentSubjectWhereInput[]
    studentId?: IntFilter<"StudentSubject"> | number
    subjectId?: IntFilter<"StudentSubject"> | number
    academicYear?: StringFilter<"StudentSubject"> | string
    semester?: StringNullableFilter<"StudentSubject"> | string | null
    isActive?: BoolFilter<"StudentSubject"> | boolean
    createdAt?: DateTimeFilter<"StudentSubject"> | Date | string
    updatedAt?: DateTimeFilter<"StudentSubject"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    grades?: GradeListRelationFilter
  }, "id" | "studentId_subjectId_academicYear">

  export type StudentSubjectOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    academicYear?: SortOrder
    semester?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentSubjectCountOrderByAggregateInput
    _avg?: StudentSubjectAvgOrderByAggregateInput
    _max?: StudentSubjectMaxOrderByAggregateInput
    _min?: StudentSubjectMinOrderByAggregateInput
    _sum?: StudentSubjectSumOrderByAggregateInput
  }

  export type StudentSubjectScalarWhereWithAggregatesInput = {
    AND?: StudentSubjectScalarWhereWithAggregatesInput | StudentSubjectScalarWhereWithAggregatesInput[]
    OR?: StudentSubjectScalarWhereWithAggregatesInput[]
    NOT?: StudentSubjectScalarWhereWithAggregatesInput | StudentSubjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StudentSubject"> | number
    studentId?: IntWithAggregatesFilter<"StudentSubject"> | number
    subjectId?: IntWithAggregatesFilter<"StudentSubject"> | number
    academicYear?: StringWithAggregatesFilter<"StudentSubject"> | string
    semester?: StringNullableWithAggregatesFilter<"StudentSubject"> | string | null
    isActive?: BoolWithAggregatesFilter<"StudentSubject"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"StudentSubject"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudentSubject"> | Date | string
  }

  export type TeacherSubjectWhereInput = {
    AND?: TeacherSubjectWhereInput | TeacherSubjectWhereInput[]
    OR?: TeacherSubjectWhereInput[]
    NOT?: TeacherSubjectWhereInput | TeacherSubjectWhereInput[]
    id?: IntFilter<"TeacherSubject"> | number
    teacherId?: IntFilter<"TeacherSubject"> | number
    subjectId?: IntFilter<"TeacherSubject"> | number
    academicYear?: StringFilter<"TeacherSubject"> | string
    createdAt?: DateTimeFilter<"TeacherSubject"> | Date | string
    updatedAt?: DateTimeFilter<"TeacherSubject"> | Date | string
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }

  export type TeacherSubjectOrderByWithRelationInput = {
    id?: SortOrder
    teacherId?: SortOrder
    subjectId?: SortOrder
    academicYear?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teacher?: UserOrderByWithRelationInput
    subject?: SubjectOrderByWithRelationInput
  }

  export type TeacherSubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    teacherId_subjectId_academicYear?: TeacherSubjectTeacherIdSubjectIdAcademicYearCompoundUniqueInput
    AND?: TeacherSubjectWhereInput | TeacherSubjectWhereInput[]
    OR?: TeacherSubjectWhereInput[]
    NOT?: TeacherSubjectWhereInput | TeacherSubjectWhereInput[]
    teacherId?: IntFilter<"TeacherSubject"> | number
    subjectId?: IntFilter<"TeacherSubject"> | number
    academicYear?: StringFilter<"TeacherSubject"> | string
    createdAt?: DateTimeFilter<"TeacherSubject"> | Date | string
    updatedAt?: DateTimeFilter<"TeacherSubject"> | Date | string
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }, "id" | "teacherId_subjectId_academicYear">

  export type TeacherSubjectOrderByWithAggregationInput = {
    id?: SortOrder
    teacherId?: SortOrder
    subjectId?: SortOrder
    academicYear?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeacherSubjectCountOrderByAggregateInput
    _avg?: TeacherSubjectAvgOrderByAggregateInput
    _max?: TeacherSubjectMaxOrderByAggregateInput
    _min?: TeacherSubjectMinOrderByAggregateInput
    _sum?: TeacherSubjectSumOrderByAggregateInput
  }

  export type TeacherSubjectScalarWhereWithAggregatesInput = {
    AND?: TeacherSubjectScalarWhereWithAggregatesInput | TeacherSubjectScalarWhereWithAggregatesInput[]
    OR?: TeacherSubjectScalarWhereWithAggregatesInput[]
    NOT?: TeacherSubjectScalarWhereWithAggregatesInput | TeacherSubjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TeacherSubject"> | number
    teacherId?: IntWithAggregatesFilter<"TeacherSubject"> | number
    subjectId?: IntWithAggregatesFilter<"TeacherSubject"> | number
    academicYear?: StringWithAggregatesFilter<"TeacherSubject"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TeacherSubject"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TeacherSubject"> | Date | string
  }

  export type GradeWhereInput = {
    AND?: GradeWhereInput | GradeWhereInput[]
    OR?: GradeWhereInput[]
    NOT?: GradeWhereInput | GradeWhereInput[]
    id?: IntFilter<"Grade"> | number
    studentSubjectId?: IntFilter<"Grade"> | number
    teacherId?: IntFilter<"Grade"> | number
    term?: StringFilter<"Grade"> | string
    score?: FloatFilter<"Grade"> | number
    letterGrade?: StringNullableFilter<"Grade"> | string | null
    remarks?: StringNullableFilter<"Grade"> | string | null
    createdAt?: DateTimeFilter<"Grade"> | Date | string
    updatedAt?: DateTimeFilter<"Grade"> | Date | string
    studentSubject?: XOR<StudentSubjectScalarRelationFilter, StudentSubjectWhereInput>
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GradeOrderByWithRelationInput = {
    id?: SortOrder
    studentSubjectId?: SortOrder
    teacherId?: SortOrder
    term?: SortOrder
    score?: SortOrder
    letterGrade?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    studentSubject?: StudentSubjectOrderByWithRelationInput
    teacher?: UserOrderByWithRelationInput
  }

  export type GradeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    studentSubjectId_term?: GradeStudentSubjectIdTermCompoundUniqueInput
    AND?: GradeWhereInput | GradeWhereInput[]
    OR?: GradeWhereInput[]
    NOT?: GradeWhereInput | GradeWhereInput[]
    studentSubjectId?: IntFilter<"Grade"> | number
    teacherId?: IntFilter<"Grade"> | number
    term?: StringFilter<"Grade"> | string
    score?: FloatFilter<"Grade"> | number
    letterGrade?: StringNullableFilter<"Grade"> | string | null
    remarks?: StringNullableFilter<"Grade"> | string | null
    createdAt?: DateTimeFilter<"Grade"> | Date | string
    updatedAt?: DateTimeFilter<"Grade"> | Date | string
    studentSubject?: XOR<StudentSubjectScalarRelationFilter, StudentSubjectWhereInput>
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "studentSubjectId_term">

  export type GradeOrderByWithAggregationInput = {
    id?: SortOrder
    studentSubjectId?: SortOrder
    teacherId?: SortOrder
    term?: SortOrder
    score?: SortOrder
    letterGrade?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GradeCountOrderByAggregateInput
    _avg?: GradeAvgOrderByAggregateInput
    _max?: GradeMaxOrderByAggregateInput
    _min?: GradeMinOrderByAggregateInput
    _sum?: GradeSumOrderByAggregateInput
  }

  export type GradeScalarWhereWithAggregatesInput = {
    AND?: GradeScalarWhereWithAggregatesInput | GradeScalarWhereWithAggregatesInput[]
    OR?: GradeScalarWhereWithAggregatesInput[]
    NOT?: GradeScalarWhereWithAggregatesInput | GradeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Grade"> | number
    studentSubjectId?: IntWithAggregatesFilter<"Grade"> | number
    teacherId?: IntWithAggregatesFilter<"Grade"> | number
    term?: StringWithAggregatesFilter<"Grade"> | string
    score?: FloatWithAggregatesFilter<"Grade"> | number
    letterGrade?: StringNullableWithAggregatesFilter<"Grade"> | string | null
    remarks?: StringNullableWithAggregatesFilter<"Grade"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Grade"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Grade"> | Date | string
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    id?: IntFilter<"ActivityLog"> | number
    userId?: IntFilter<"ActivityLog"> | number
    action?: StringFilter<"ActivityLog"> | string
    details?: StringFilter<"ActivityLog"> | string
    entityType?: StringFilter<"ActivityLog"> | string
    entityId?: IntFilter<"ActivityLog"> | number
    ipAddress?: StringNullableFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    details?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    userId?: IntFilter<"ActivityLog"> | number
    action?: StringFilter<"ActivityLog"> | string
    details?: StringFilter<"ActivityLog"> | string
    entityType?: StringFilter<"ActivityLog"> | string
    entityId?: IntFilter<"ActivityLog"> | number
    ipAddress?: StringNullableFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    details?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
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
    userId?: IntWithAggregatesFilter<"ActivityLog"> | number
    action?: StringWithAggregatesFilter<"ActivityLog"> | string
    details?: StringWithAggregatesFilter<"ActivityLog"> | string
    entityType?: StringWithAggregatesFilter<"ActivityLog"> | string
    entityId?: IntWithAggregatesFilter<"ActivityLog"> | number
    ipAddress?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
  }

  export type UserCreateInput = {
    employeeId: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherSubjects?: TeacherSubjectCreateNestedManyWithoutTeacherInput
    gradesEntered?: GradeCreateNestedManyWithoutTeacherInput
    logsCreated?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    employeeId: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherSubjects?: TeacherSubjectUncheckedCreateNestedManyWithoutTeacherInput
    gradesEntered?: GradeUncheckedCreateNestedManyWithoutTeacherInput
    logsCreated?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherSubjects?: TeacherSubjectUpdateManyWithoutTeacherNestedInput
    gradesEntered?: GradeUpdateManyWithoutTeacherNestedInput
    logsCreated?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherSubjects?: TeacherSubjectUncheckedUpdateManyWithoutTeacherNestedInput
    gradesEntered?: GradeUncheckedUpdateManyWithoutTeacherNestedInput
    logsCreated?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    employeeId: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    studentId: string
    studentLrn: string
    firstName: string
    lastName: string
    middleName?: string | null
    dateOfBirth: Date | string
    gender: string
    address: string
    contactNumber?: string | null
    guardianName: string
    guardianContact: string
    yearLevel: number
    section: string
    academicTrack?: $Enums.AcademicTrack | null
    enrollmentStatus: string
    enrollmentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    studentSubjects?: StudentSubjectCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: number
    studentId: string
    studentLrn: string
    firstName: string
    lastName: string
    middleName?: string | null
    dateOfBirth: Date | string
    gender: string
    address: string
    contactNumber?: string | null
    guardianName: string
    guardianContact: string
    yearLevel: number
    section: string
    academicTrack?: $Enums.AcademicTrack | null
    enrollmentStatus: string
    enrollmentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    studentSubjects?: StudentSubjectUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    studentLrn?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianContact?: StringFieldUpdateOperationsInput | string
    yearLevel?: IntFieldUpdateOperationsInput | number
    section?: StringFieldUpdateOperationsInput | string
    academicTrack?: NullableEnumAcademicTrackFieldUpdateOperationsInput | $Enums.AcademicTrack | null
    enrollmentStatus?: StringFieldUpdateOperationsInput | string
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentSubjects?: StudentSubjectUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    studentLrn?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianContact?: StringFieldUpdateOperationsInput | string
    yearLevel?: IntFieldUpdateOperationsInput | number
    section?: StringFieldUpdateOperationsInput | string
    academicTrack?: NullableEnumAcademicTrackFieldUpdateOperationsInput | $Enums.AcademicTrack | null
    enrollmentStatus?: StringFieldUpdateOperationsInput | string
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentSubjects?: StudentSubjectUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: number
    studentId: string
    studentLrn: string
    firstName: string
    lastName: string
    middleName?: string | null
    dateOfBirth: Date | string
    gender: string
    address: string
    contactNumber?: string | null
    guardianName: string
    guardianContact: string
    yearLevel: number
    section: string
    academicTrack?: $Enums.AcademicTrack | null
    enrollmentStatus: string
    enrollmentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    studentLrn?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianContact?: StringFieldUpdateOperationsInput | string
    yearLevel?: IntFieldUpdateOperationsInput | number
    section?: StringFieldUpdateOperationsInput | string
    academicTrack?: NullableEnumAcademicTrackFieldUpdateOperationsInput | $Enums.AcademicTrack | null
    enrollmentStatus?: StringFieldUpdateOperationsInput | string
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    studentLrn?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianContact?: StringFieldUpdateOperationsInput | string
    yearLevel?: IntFieldUpdateOperationsInput | number
    section?: StringFieldUpdateOperationsInput | string
    academicTrack?: NullableEnumAcademicTrackFieldUpdateOperationsInput | $Enums.AcademicTrack | null
    enrollmentStatus?: StringFieldUpdateOperationsInput | string
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectCreateInput = {
    subjectCode: string
    subjectName: string
    description?: string | null
    yearLevel: number
    academicTrack?: $Enums.AcademicTrack | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teachers?: TeacherSubjectCreateNestedManyWithoutSubjectInput
    studentSubjects?: StudentSubjectCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateInput = {
    id?: number
    subjectCode: string
    subjectName: string
    description?: string | null
    yearLevel: number
    academicTrack?: $Enums.AcademicTrack | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teachers?: TeacherSubjectUncheckedCreateNestedManyWithoutSubjectInput
    studentSubjects?: StudentSubjectUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUpdateInput = {
    subjectCode?: StringFieldUpdateOperationsInput | string
    subjectName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    yearLevel?: IntFieldUpdateOperationsInput | number
    academicTrack?: NullableEnumAcademicTrackFieldUpdateOperationsInput | $Enums.AcademicTrack | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teachers?: TeacherSubjectUpdateManyWithoutSubjectNestedInput
    studentSubjects?: StudentSubjectUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectCode?: StringFieldUpdateOperationsInput | string
    subjectName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    yearLevel?: IntFieldUpdateOperationsInput | number
    academicTrack?: NullableEnumAcademicTrackFieldUpdateOperationsInput | $Enums.AcademicTrack | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teachers?: TeacherSubjectUncheckedUpdateManyWithoutSubjectNestedInput
    studentSubjects?: StudentSubjectUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectCreateManyInput = {
    id?: number
    subjectCode: string
    subjectName: string
    description?: string | null
    yearLevel: number
    academicTrack?: $Enums.AcademicTrack | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubjectUpdateManyMutationInput = {
    subjectCode?: StringFieldUpdateOperationsInput | string
    subjectName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    yearLevel?: IntFieldUpdateOperationsInput | number
    academicTrack?: NullableEnumAcademicTrackFieldUpdateOperationsInput | $Enums.AcademicTrack | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectCode?: StringFieldUpdateOperationsInput | string
    subjectName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    yearLevel?: IntFieldUpdateOperationsInput | number
    academicTrack?: NullableEnumAcademicTrackFieldUpdateOperationsInput | $Enums.AcademicTrack | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSubjectCreateInput = {
    academicYear: string
    semester?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutStudentSubjectsInput
    subject: SubjectCreateNestedOneWithoutStudentSubjectsInput
    grades?: GradeCreateNestedManyWithoutStudentSubjectInput
  }

  export type StudentSubjectUncheckedCreateInput = {
    id?: number
    studentId: number
    subjectId: number
    academicYear: string
    semester?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    grades?: GradeUncheckedCreateNestedManyWithoutStudentSubjectInput
  }

  export type StudentSubjectUpdateInput = {
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutStudentSubjectsNestedInput
    subject?: SubjectUpdateOneRequiredWithoutStudentSubjectsNestedInput
    grades?: GradeUpdateManyWithoutStudentSubjectNestedInput
  }

  export type StudentSubjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grades?: GradeUncheckedUpdateManyWithoutStudentSubjectNestedInput
  }

  export type StudentSubjectCreateManyInput = {
    id?: number
    studentId: number
    subjectId: number
    academicYear: string
    semester?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentSubjectUpdateManyMutationInput = {
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSubjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherSubjectCreateInput = {
    academicYear: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: UserCreateNestedOneWithoutTeacherSubjectsInput
    subject: SubjectCreateNestedOneWithoutTeachersInput
  }

  export type TeacherSubjectUncheckedCreateInput = {
    id?: number
    teacherId: number
    subjectId: number
    academicYear: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherSubjectUpdateInput = {
    academicYear?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutTeacherSubjectsNestedInput
    subject?: SubjectUpdateOneRequiredWithoutTeachersNestedInput
  }

  export type TeacherSubjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    academicYear?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherSubjectCreateManyInput = {
    id?: number
    teacherId: number
    subjectId: number
    academicYear: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherSubjectUpdateManyMutationInput = {
    academicYear?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherSubjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    academicYear?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GradeCreateInput = {
    term: string
    score: number
    letterGrade?: string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    studentSubject: StudentSubjectCreateNestedOneWithoutGradesInput
    teacher: UserCreateNestedOneWithoutGradesEnteredInput
  }

  export type GradeUncheckedCreateInput = {
    id?: number
    studentSubjectId: number
    teacherId: number
    term: string
    score: number
    letterGrade?: string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GradeUpdateInput = {
    term?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    letterGrade?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentSubject?: StudentSubjectUpdateOneRequiredWithoutGradesNestedInput
    teacher?: UserUpdateOneRequiredWithoutGradesEnteredNestedInput
  }

  export type GradeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentSubjectId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    term?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    letterGrade?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GradeCreateManyInput = {
    id?: number
    studentSubjectId: number
    teacherId: number
    term: string
    score: number
    letterGrade?: string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GradeUpdateManyMutationInput = {
    term?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    letterGrade?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GradeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentSubjectId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    term?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    letterGrade?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateInput = {
    action: string
    details: string
    entityType: string
    entityId: number
    ipAddress?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLogsCreatedInput
  }

  export type ActivityLogUncheckedCreateInput = {
    id?: number
    userId: number
    action: string
    details: string
    entityType: string
    entityId: number
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLogsCreatedNestedInput
  }

  export type ActivityLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateManyInput = {
    id?: number
    userId: number
    action: string
    details: string
    entityType: string
    entityId: number
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TeacherSubjectListRelationFilter = {
    every?: TeacherSubjectWhereInput
    some?: TeacherSubjectWhereInput
    none?: TeacherSubjectWhereInput
  }

  export type GradeListRelationFilter = {
    every?: GradeWhereInput
    some?: GradeWhereInput
    none?: GradeWhereInput
  }

  export type ActivityLogListRelationFilter = {
    every?: ActivityLogWhereInput
    some?: ActivityLogWhereInput
    none?: ActivityLogWhereInput
  }

  export type TeacherSubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GradeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    employeeId?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumAcademicTrackNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AcademicTrack | EnumAcademicTrackFieldRefInput<$PrismaModel> | null
    in?: $Enums.AcademicTrack[] | ListEnumAcademicTrackFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AcademicTrack[] | ListEnumAcademicTrackFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAcademicTrackNullableFilter<$PrismaModel> | $Enums.AcademicTrack | null
  }

  export type StudentSubjectListRelationFilter = {
    every?: StudentSubjectWhereInput
    some?: StudentSubjectWhereInput
    none?: StudentSubjectWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StudentSubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentLrn?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    middleName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    contactNumber?: SortOrder
    guardianName?: SortOrder
    guardianContact?: SortOrder
    yearLevel?: SortOrder
    section?: SortOrder
    academicTrack?: SortOrder
    enrollmentStatus?: SortOrder
    enrollmentDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder
    yearLevel?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentLrn?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    middleName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    contactNumber?: SortOrder
    guardianName?: SortOrder
    guardianContact?: SortOrder
    yearLevel?: SortOrder
    section?: SortOrder
    academicTrack?: SortOrder
    enrollmentStatus?: SortOrder
    enrollmentDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentLrn?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    middleName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    contactNumber?: SortOrder
    guardianName?: SortOrder
    guardianContact?: SortOrder
    yearLevel?: SortOrder
    section?: SortOrder
    academicTrack?: SortOrder
    enrollmentStatus?: SortOrder
    enrollmentDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    id?: SortOrder
    yearLevel?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumAcademicTrackNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AcademicTrack | EnumAcademicTrackFieldRefInput<$PrismaModel> | null
    in?: $Enums.AcademicTrack[] | ListEnumAcademicTrackFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AcademicTrack[] | ListEnumAcademicTrackFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAcademicTrackNullableWithAggregatesFilter<$PrismaModel> | $Enums.AcademicTrack | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAcademicTrackNullableFilter<$PrismaModel>
    _max?: NestedEnumAcademicTrackNullableFilter<$PrismaModel>
  }

  export type SubjectCountOrderByAggregateInput = {
    id?: SortOrder
    subjectCode?: SortOrder
    subjectName?: SortOrder
    description?: SortOrder
    yearLevel?: SortOrder
    academicTrack?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubjectAvgOrderByAggregateInput = {
    id?: SortOrder
    yearLevel?: SortOrder
  }

  export type SubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    subjectCode?: SortOrder
    subjectName?: SortOrder
    description?: SortOrder
    yearLevel?: SortOrder
    academicTrack?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubjectMinOrderByAggregateInput = {
    id?: SortOrder
    subjectCode?: SortOrder
    subjectName?: SortOrder
    description?: SortOrder
    yearLevel?: SortOrder
    academicTrack?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubjectSumOrderByAggregateInput = {
    id?: SortOrder
    yearLevel?: SortOrder
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type SubjectScalarRelationFilter = {
    is?: SubjectWhereInput
    isNot?: SubjectWhereInput
  }

  export type StudentSubjectStudentIdSubjectIdAcademicYearCompoundUniqueInput = {
    studentId: number
    subjectId: number
    academicYear: string
  }

  export type StudentSubjectCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    academicYear?: SortOrder
    semester?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentSubjectAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
  }

  export type StudentSubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    academicYear?: SortOrder
    semester?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentSubjectMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    academicYear?: SortOrder
    semester?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentSubjectSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TeacherSubjectTeacherIdSubjectIdAcademicYearCompoundUniqueInput = {
    teacherId: number
    subjectId: number
    academicYear: string
  }

  export type TeacherSubjectCountOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    subjectId?: SortOrder
    academicYear?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherSubjectAvgOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    subjectId?: SortOrder
  }

  export type TeacherSubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    subjectId?: SortOrder
    academicYear?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherSubjectMinOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    subjectId?: SortOrder
    academicYear?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherSubjectSumOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    subjectId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StudentSubjectScalarRelationFilter = {
    is?: StudentSubjectWhereInput
    isNot?: StudentSubjectWhereInput
  }

  export type GradeStudentSubjectIdTermCompoundUniqueInput = {
    studentSubjectId: number
    term: string
  }

  export type GradeCountOrderByAggregateInput = {
    id?: SortOrder
    studentSubjectId?: SortOrder
    teacherId?: SortOrder
    term?: SortOrder
    score?: SortOrder
    letterGrade?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GradeAvgOrderByAggregateInput = {
    id?: SortOrder
    studentSubjectId?: SortOrder
    teacherId?: SortOrder
    score?: SortOrder
  }

  export type GradeMaxOrderByAggregateInput = {
    id?: SortOrder
    studentSubjectId?: SortOrder
    teacherId?: SortOrder
    term?: SortOrder
    score?: SortOrder
    letterGrade?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GradeMinOrderByAggregateInput = {
    id?: SortOrder
    studentSubjectId?: SortOrder
    teacherId?: SortOrder
    term?: SortOrder
    score?: SortOrder
    letterGrade?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GradeSumOrderByAggregateInput = {
    id?: SortOrder
    studentSubjectId?: SortOrder
    teacherId?: SortOrder
    score?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    details?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    entityId?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    details?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    details?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    entityId?: SortOrder
  }

  export type TeacherSubjectCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TeacherSubjectCreateWithoutTeacherInput, TeacherSubjectUncheckedCreateWithoutTeacherInput> | TeacherSubjectCreateWithoutTeacherInput[] | TeacherSubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutTeacherInput | TeacherSubjectCreateOrConnectWithoutTeacherInput[]
    createMany?: TeacherSubjectCreateManyTeacherInputEnvelope
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
  }

  export type GradeCreateNestedManyWithoutTeacherInput = {
    create?: XOR<GradeCreateWithoutTeacherInput, GradeUncheckedCreateWithoutTeacherInput> | GradeCreateWithoutTeacherInput[] | GradeUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutTeacherInput | GradeCreateOrConnectWithoutTeacherInput[]
    createMany?: GradeCreateManyTeacherInputEnvelope
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
  }

  export type ActivityLogCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type TeacherSubjectUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TeacherSubjectCreateWithoutTeacherInput, TeacherSubjectUncheckedCreateWithoutTeacherInput> | TeacherSubjectCreateWithoutTeacherInput[] | TeacherSubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutTeacherInput | TeacherSubjectCreateOrConnectWithoutTeacherInput[]
    createMany?: TeacherSubjectCreateManyTeacherInputEnvelope
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
  }

  export type GradeUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<GradeCreateWithoutTeacherInput, GradeUncheckedCreateWithoutTeacherInput> | GradeCreateWithoutTeacherInput[] | GradeUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutTeacherInput | GradeCreateOrConnectWithoutTeacherInput[]
    createMany?: GradeCreateManyTeacherInputEnvelope
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TeacherSubjectUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TeacherSubjectCreateWithoutTeacherInput, TeacherSubjectUncheckedCreateWithoutTeacherInput> | TeacherSubjectCreateWithoutTeacherInput[] | TeacherSubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutTeacherInput | TeacherSubjectCreateOrConnectWithoutTeacherInput[]
    upsert?: TeacherSubjectUpsertWithWhereUniqueWithoutTeacherInput | TeacherSubjectUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TeacherSubjectCreateManyTeacherInputEnvelope
    set?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    disconnect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    delete?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    update?: TeacherSubjectUpdateWithWhereUniqueWithoutTeacherInput | TeacherSubjectUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TeacherSubjectUpdateManyWithWhereWithoutTeacherInput | TeacherSubjectUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TeacherSubjectScalarWhereInput | TeacherSubjectScalarWhereInput[]
  }

  export type GradeUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<GradeCreateWithoutTeacherInput, GradeUncheckedCreateWithoutTeacherInput> | GradeCreateWithoutTeacherInput[] | GradeUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutTeacherInput | GradeCreateOrConnectWithoutTeacherInput[]
    upsert?: GradeUpsertWithWhereUniqueWithoutTeacherInput | GradeUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: GradeCreateManyTeacherInputEnvelope
    set?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    disconnect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    delete?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    update?: GradeUpdateWithWhereUniqueWithoutTeacherInput | GradeUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: GradeUpdateManyWithWhereWithoutTeacherInput | GradeUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: GradeScalarWhereInput | GradeScalarWhereInput[]
  }

  export type ActivityLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TeacherSubjectUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TeacherSubjectCreateWithoutTeacherInput, TeacherSubjectUncheckedCreateWithoutTeacherInput> | TeacherSubjectCreateWithoutTeacherInput[] | TeacherSubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutTeacherInput | TeacherSubjectCreateOrConnectWithoutTeacherInput[]
    upsert?: TeacherSubjectUpsertWithWhereUniqueWithoutTeacherInput | TeacherSubjectUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TeacherSubjectCreateManyTeacherInputEnvelope
    set?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    disconnect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    delete?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    update?: TeacherSubjectUpdateWithWhereUniqueWithoutTeacherInput | TeacherSubjectUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TeacherSubjectUpdateManyWithWhereWithoutTeacherInput | TeacherSubjectUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TeacherSubjectScalarWhereInput | TeacherSubjectScalarWhereInput[]
  }

  export type GradeUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<GradeCreateWithoutTeacherInput, GradeUncheckedCreateWithoutTeacherInput> | GradeCreateWithoutTeacherInput[] | GradeUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutTeacherInput | GradeCreateOrConnectWithoutTeacherInput[]
    upsert?: GradeUpsertWithWhereUniqueWithoutTeacherInput | GradeUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: GradeCreateManyTeacherInputEnvelope
    set?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    disconnect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    delete?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    update?: GradeUpdateWithWhereUniqueWithoutTeacherInput | GradeUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: GradeUpdateManyWithWhereWithoutTeacherInput | GradeUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: GradeScalarWhereInput | GradeScalarWhereInput[]
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type StudentSubjectCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentSubjectCreateWithoutStudentInput, StudentSubjectUncheckedCreateWithoutStudentInput> | StudentSubjectCreateWithoutStudentInput[] | StudentSubjectUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutStudentInput | StudentSubjectCreateOrConnectWithoutStudentInput[]
    createMany?: StudentSubjectCreateManyStudentInputEnvelope
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
  }

  export type StudentSubjectUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentSubjectCreateWithoutStudentInput, StudentSubjectUncheckedCreateWithoutStudentInput> | StudentSubjectCreateWithoutStudentInput[] | StudentSubjectUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutStudentInput | StudentSubjectCreateOrConnectWithoutStudentInput[]
    createMany?: StudentSubjectCreateManyStudentInputEnvelope
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumAcademicTrackFieldUpdateOperationsInput = {
    set?: $Enums.AcademicTrack | null
  }

  export type StudentSubjectUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentSubjectCreateWithoutStudentInput, StudentSubjectUncheckedCreateWithoutStudentInput> | StudentSubjectCreateWithoutStudentInput[] | StudentSubjectUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutStudentInput | StudentSubjectCreateOrConnectWithoutStudentInput[]
    upsert?: StudentSubjectUpsertWithWhereUniqueWithoutStudentInput | StudentSubjectUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentSubjectCreateManyStudentInputEnvelope
    set?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    disconnect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    delete?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    update?: StudentSubjectUpdateWithWhereUniqueWithoutStudentInput | StudentSubjectUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentSubjectUpdateManyWithWhereWithoutStudentInput | StudentSubjectUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentSubjectScalarWhereInput | StudentSubjectScalarWhereInput[]
  }

  export type StudentSubjectUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentSubjectCreateWithoutStudentInput, StudentSubjectUncheckedCreateWithoutStudentInput> | StudentSubjectCreateWithoutStudentInput[] | StudentSubjectUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutStudentInput | StudentSubjectCreateOrConnectWithoutStudentInput[]
    upsert?: StudentSubjectUpsertWithWhereUniqueWithoutStudentInput | StudentSubjectUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentSubjectCreateManyStudentInputEnvelope
    set?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    disconnect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    delete?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    update?: StudentSubjectUpdateWithWhereUniqueWithoutStudentInput | StudentSubjectUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentSubjectUpdateManyWithWhereWithoutStudentInput | StudentSubjectUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentSubjectScalarWhereInput | StudentSubjectScalarWhereInput[]
  }

  export type TeacherSubjectCreateNestedManyWithoutSubjectInput = {
    create?: XOR<TeacherSubjectCreateWithoutSubjectInput, TeacherSubjectUncheckedCreateWithoutSubjectInput> | TeacherSubjectCreateWithoutSubjectInput[] | TeacherSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutSubjectInput | TeacherSubjectCreateOrConnectWithoutSubjectInput[]
    createMany?: TeacherSubjectCreateManySubjectInputEnvelope
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
  }

  export type StudentSubjectCreateNestedManyWithoutSubjectInput = {
    create?: XOR<StudentSubjectCreateWithoutSubjectInput, StudentSubjectUncheckedCreateWithoutSubjectInput> | StudentSubjectCreateWithoutSubjectInput[] | StudentSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutSubjectInput | StudentSubjectCreateOrConnectWithoutSubjectInput[]
    createMany?: StudentSubjectCreateManySubjectInputEnvelope
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
  }

  export type TeacherSubjectUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<TeacherSubjectCreateWithoutSubjectInput, TeacherSubjectUncheckedCreateWithoutSubjectInput> | TeacherSubjectCreateWithoutSubjectInput[] | TeacherSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutSubjectInput | TeacherSubjectCreateOrConnectWithoutSubjectInput[]
    createMany?: TeacherSubjectCreateManySubjectInputEnvelope
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
  }

  export type StudentSubjectUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<StudentSubjectCreateWithoutSubjectInput, StudentSubjectUncheckedCreateWithoutSubjectInput> | StudentSubjectCreateWithoutSubjectInput[] | StudentSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutSubjectInput | StudentSubjectCreateOrConnectWithoutSubjectInput[]
    createMany?: StudentSubjectCreateManySubjectInputEnvelope
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
  }

  export type TeacherSubjectUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<TeacherSubjectCreateWithoutSubjectInput, TeacherSubjectUncheckedCreateWithoutSubjectInput> | TeacherSubjectCreateWithoutSubjectInput[] | TeacherSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutSubjectInput | TeacherSubjectCreateOrConnectWithoutSubjectInput[]
    upsert?: TeacherSubjectUpsertWithWhereUniqueWithoutSubjectInput | TeacherSubjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: TeacherSubjectCreateManySubjectInputEnvelope
    set?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    disconnect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    delete?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    update?: TeacherSubjectUpdateWithWhereUniqueWithoutSubjectInput | TeacherSubjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: TeacherSubjectUpdateManyWithWhereWithoutSubjectInput | TeacherSubjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: TeacherSubjectScalarWhereInput | TeacherSubjectScalarWhereInput[]
  }

  export type StudentSubjectUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<StudentSubjectCreateWithoutSubjectInput, StudentSubjectUncheckedCreateWithoutSubjectInput> | StudentSubjectCreateWithoutSubjectInput[] | StudentSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutSubjectInput | StudentSubjectCreateOrConnectWithoutSubjectInput[]
    upsert?: StudentSubjectUpsertWithWhereUniqueWithoutSubjectInput | StudentSubjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: StudentSubjectCreateManySubjectInputEnvelope
    set?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    disconnect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    delete?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    update?: StudentSubjectUpdateWithWhereUniqueWithoutSubjectInput | StudentSubjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: StudentSubjectUpdateManyWithWhereWithoutSubjectInput | StudentSubjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: StudentSubjectScalarWhereInput | StudentSubjectScalarWhereInput[]
  }

  export type TeacherSubjectUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<TeacherSubjectCreateWithoutSubjectInput, TeacherSubjectUncheckedCreateWithoutSubjectInput> | TeacherSubjectCreateWithoutSubjectInput[] | TeacherSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutSubjectInput | TeacherSubjectCreateOrConnectWithoutSubjectInput[]
    upsert?: TeacherSubjectUpsertWithWhereUniqueWithoutSubjectInput | TeacherSubjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: TeacherSubjectCreateManySubjectInputEnvelope
    set?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    disconnect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    delete?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    update?: TeacherSubjectUpdateWithWhereUniqueWithoutSubjectInput | TeacherSubjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: TeacherSubjectUpdateManyWithWhereWithoutSubjectInput | TeacherSubjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: TeacherSubjectScalarWhereInput | TeacherSubjectScalarWhereInput[]
  }

  export type StudentSubjectUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<StudentSubjectCreateWithoutSubjectInput, StudentSubjectUncheckedCreateWithoutSubjectInput> | StudentSubjectCreateWithoutSubjectInput[] | StudentSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutSubjectInput | StudentSubjectCreateOrConnectWithoutSubjectInput[]
    upsert?: StudentSubjectUpsertWithWhereUniqueWithoutSubjectInput | StudentSubjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: StudentSubjectCreateManySubjectInputEnvelope
    set?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    disconnect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    delete?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    update?: StudentSubjectUpdateWithWhereUniqueWithoutSubjectInput | StudentSubjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: StudentSubjectUpdateManyWithWhereWithoutSubjectInput | StudentSubjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: StudentSubjectScalarWhereInput | StudentSubjectScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutStudentSubjectsInput = {
    create?: XOR<StudentCreateWithoutStudentSubjectsInput, StudentUncheckedCreateWithoutStudentSubjectsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutStudentSubjectsInput
    connect?: StudentWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutStudentSubjectsInput = {
    create?: XOR<SubjectCreateWithoutStudentSubjectsInput, SubjectUncheckedCreateWithoutStudentSubjectsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutStudentSubjectsInput
    connect?: SubjectWhereUniqueInput
  }

  export type GradeCreateNestedManyWithoutStudentSubjectInput = {
    create?: XOR<GradeCreateWithoutStudentSubjectInput, GradeUncheckedCreateWithoutStudentSubjectInput> | GradeCreateWithoutStudentSubjectInput[] | GradeUncheckedCreateWithoutStudentSubjectInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutStudentSubjectInput | GradeCreateOrConnectWithoutStudentSubjectInput[]
    createMany?: GradeCreateManyStudentSubjectInputEnvelope
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
  }

  export type GradeUncheckedCreateNestedManyWithoutStudentSubjectInput = {
    create?: XOR<GradeCreateWithoutStudentSubjectInput, GradeUncheckedCreateWithoutStudentSubjectInput> | GradeCreateWithoutStudentSubjectInput[] | GradeUncheckedCreateWithoutStudentSubjectInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutStudentSubjectInput | GradeCreateOrConnectWithoutStudentSubjectInput[]
    createMany?: GradeCreateManyStudentSubjectInputEnvelope
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
  }

  export type StudentUpdateOneRequiredWithoutStudentSubjectsNestedInput = {
    create?: XOR<StudentCreateWithoutStudentSubjectsInput, StudentUncheckedCreateWithoutStudentSubjectsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutStudentSubjectsInput
    upsert?: StudentUpsertWithoutStudentSubjectsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutStudentSubjectsInput, StudentUpdateWithoutStudentSubjectsInput>, StudentUncheckedUpdateWithoutStudentSubjectsInput>
  }

  export type SubjectUpdateOneRequiredWithoutStudentSubjectsNestedInput = {
    create?: XOR<SubjectCreateWithoutStudentSubjectsInput, SubjectUncheckedCreateWithoutStudentSubjectsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutStudentSubjectsInput
    upsert?: SubjectUpsertWithoutStudentSubjectsInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutStudentSubjectsInput, SubjectUpdateWithoutStudentSubjectsInput>, SubjectUncheckedUpdateWithoutStudentSubjectsInput>
  }

  export type GradeUpdateManyWithoutStudentSubjectNestedInput = {
    create?: XOR<GradeCreateWithoutStudentSubjectInput, GradeUncheckedCreateWithoutStudentSubjectInput> | GradeCreateWithoutStudentSubjectInput[] | GradeUncheckedCreateWithoutStudentSubjectInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutStudentSubjectInput | GradeCreateOrConnectWithoutStudentSubjectInput[]
    upsert?: GradeUpsertWithWhereUniqueWithoutStudentSubjectInput | GradeUpsertWithWhereUniqueWithoutStudentSubjectInput[]
    createMany?: GradeCreateManyStudentSubjectInputEnvelope
    set?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    disconnect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    delete?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    update?: GradeUpdateWithWhereUniqueWithoutStudentSubjectInput | GradeUpdateWithWhereUniqueWithoutStudentSubjectInput[]
    updateMany?: GradeUpdateManyWithWhereWithoutStudentSubjectInput | GradeUpdateManyWithWhereWithoutStudentSubjectInput[]
    deleteMany?: GradeScalarWhereInput | GradeScalarWhereInput[]
  }

  export type GradeUncheckedUpdateManyWithoutStudentSubjectNestedInput = {
    create?: XOR<GradeCreateWithoutStudentSubjectInput, GradeUncheckedCreateWithoutStudentSubjectInput> | GradeCreateWithoutStudentSubjectInput[] | GradeUncheckedCreateWithoutStudentSubjectInput[]
    connectOrCreate?: GradeCreateOrConnectWithoutStudentSubjectInput | GradeCreateOrConnectWithoutStudentSubjectInput[]
    upsert?: GradeUpsertWithWhereUniqueWithoutStudentSubjectInput | GradeUpsertWithWhereUniqueWithoutStudentSubjectInput[]
    createMany?: GradeCreateManyStudentSubjectInputEnvelope
    set?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    disconnect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    delete?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    connect?: GradeWhereUniqueInput | GradeWhereUniqueInput[]
    update?: GradeUpdateWithWhereUniqueWithoutStudentSubjectInput | GradeUpdateWithWhereUniqueWithoutStudentSubjectInput[]
    updateMany?: GradeUpdateManyWithWhereWithoutStudentSubjectInput | GradeUpdateManyWithWhereWithoutStudentSubjectInput[]
    deleteMany?: GradeScalarWhereInput | GradeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTeacherSubjectsInput = {
    create?: XOR<UserCreateWithoutTeacherSubjectsInput, UserUncheckedCreateWithoutTeacherSubjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherSubjectsInput
    connect?: UserWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutTeachersInput = {
    create?: XOR<SubjectCreateWithoutTeachersInput, SubjectUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutTeachersInput
    connect?: SubjectWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTeacherSubjectsNestedInput = {
    create?: XOR<UserCreateWithoutTeacherSubjectsInput, UserUncheckedCreateWithoutTeacherSubjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherSubjectsInput
    upsert?: UserUpsertWithoutTeacherSubjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeacherSubjectsInput, UserUpdateWithoutTeacherSubjectsInput>, UserUncheckedUpdateWithoutTeacherSubjectsInput>
  }

  export type SubjectUpdateOneRequiredWithoutTeachersNestedInput = {
    create?: XOR<SubjectCreateWithoutTeachersInput, SubjectUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutTeachersInput
    upsert?: SubjectUpsertWithoutTeachersInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutTeachersInput, SubjectUpdateWithoutTeachersInput>, SubjectUncheckedUpdateWithoutTeachersInput>
  }

  export type StudentSubjectCreateNestedOneWithoutGradesInput = {
    create?: XOR<StudentSubjectCreateWithoutGradesInput, StudentSubjectUncheckedCreateWithoutGradesInput>
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutGradesInput
    connect?: StudentSubjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGradesEnteredInput = {
    create?: XOR<UserCreateWithoutGradesEnteredInput, UserUncheckedCreateWithoutGradesEnteredInput>
    connectOrCreate?: UserCreateOrConnectWithoutGradesEnteredInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentSubjectUpdateOneRequiredWithoutGradesNestedInput = {
    create?: XOR<StudentSubjectCreateWithoutGradesInput, StudentSubjectUncheckedCreateWithoutGradesInput>
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutGradesInput
    upsert?: StudentSubjectUpsertWithoutGradesInput
    connect?: StudentSubjectWhereUniqueInput
    update?: XOR<XOR<StudentSubjectUpdateToOneWithWhereWithoutGradesInput, StudentSubjectUpdateWithoutGradesInput>, StudentSubjectUncheckedUpdateWithoutGradesInput>
  }

  export type UserUpdateOneRequiredWithoutGradesEnteredNestedInput = {
    create?: XOR<UserCreateWithoutGradesEnteredInput, UserUncheckedCreateWithoutGradesEnteredInput>
    connectOrCreate?: UserCreateOrConnectWithoutGradesEnteredInput
    upsert?: UserUpsertWithoutGradesEnteredInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGradesEnteredInput, UserUpdateWithoutGradesEnteredInput>, UserUncheckedUpdateWithoutGradesEnteredInput>
  }

  export type UserCreateNestedOneWithoutLogsCreatedInput = {
    create?: XOR<UserCreateWithoutLogsCreatedInput, UserUncheckedCreateWithoutLogsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogsCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLogsCreatedNestedInput = {
    create?: XOR<UserCreateWithoutLogsCreatedInput, UserUncheckedCreateWithoutLogsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogsCreatedInput
    upsert?: UserUpsertWithoutLogsCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLogsCreatedInput, UserUpdateWithoutLogsCreatedInput>, UserUncheckedUpdateWithoutLogsCreatedInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumAcademicTrackNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AcademicTrack | EnumAcademicTrackFieldRefInput<$PrismaModel> | null
    in?: $Enums.AcademicTrack[] | ListEnumAcademicTrackFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AcademicTrack[] | ListEnumAcademicTrackFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAcademicTrackNullableFilter<$PrismaModel> | $Enums.AcademicTrack | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAcademicTrackNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AcademicTrack | EnumAcademicTrackFieldRefInput<$PrismaModel> | null
    in?: $Enums.AcademicTrack[] | ListEnumAcademicTrackFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AcademicTrack[] | ListEnumAcademicTrackFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAcademicTrackNullableWithAggregatesFilter<$PrismaModel> | $Enums.AcademicTrack | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAcademicTrackNullableFilter<$PrismaModel>
    _max?: NestedEnumAcademicTrackNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type TeacherSubjectCreateWithoutTeacherInput = {
    academicYear: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subject: SubjectCreateNestedOneWithoutTeachersInput
  }

  export type TeacherSubjectUncheckedCreateWithoutTeacherInput = {
    id?: number
    subjectId: number
    academicYear: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherSubjectCreateOrConnectWithoutTeacherInput = {
    where: TeacherSubjectWhereUniqueInput
    create: XOR<TeacherSubjectCreateWithoutTeacherInput, TeacherSubjectUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherSubjectCreateManyTeacherInputEnvelope = {
    data: TeacherSubjectCreateManyTeacherInput | TeacherSubjectCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type GradeCreateWithoutTeacherInput = {
    term: string
    score: number
    letterGrade?: string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    studentSubject: StudentSubjectCreateNestedOneWithoutGradesInput
  }

  export type GradeUncheckedCreateWithoutTeacherInput = {
    id?: number
    studentSubjectId: number
    term: string
    score: number
    letterGrade?: string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GradeCreateOrConnectWithoutTeacherInput = {
    where: GradeWhereUniqueInput
    create: XOR<GradeCreateWithoutTeacherInput, GradeUncheckedCreateWithoutTeacherInput>
  }

  export type GradeCreateManyTeacherInputEnvelope = {
    data: GradeCreateManyTeacherInput | GradeCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type ActivityLogCreateWithoutUserInput = {
    action: string
    details: string
    entityType: string
    entityId: number
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogUncheckedCreateWithoutUserInput = {
    id?: number
    action: string
    details: string
    entityType: string
    entityId: number
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogCreateOrConnectWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogCreateManyUserInputEnvelope = {
    data: ActivityLogCreateManyUserInput | ActivityLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TeacherSubjectUpsertWithWhereUniqueWithoutTeacherInput = {
    where: TeacherSubjectWhereUniqueInput
    update: XOR<TeacherSubjectUpdateWithoutTeacherInput, TeacherSubjectUncheckedUpdateWithoutTeacherInput>
    create: XOR<TeacherSubjectCreateWithoutTeacherInput, TeacherSubjectUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherSubjectUpdateWithWhereUniqueWithoutTeacherInput = {
    where: TeacherSubjectWhereUniqueInput
    data: XOR<TeacherSubjectUpdateWithoutTeacherInput, TeacherSubjectUncheckedUpdateWithoutTeacherInput>
  }

  export type TeacherSubjectUpdateManyWithWhereWithoutTeacherInput = {
    where: TeacherSubjectScalarWhereInput
    data: XOR<TeacherSubjectUpdateManyMutationInput, TeacherSubjectUncheckedUpdateManyWithoutTeacherInput>
  }

  export type TeacherSubjectScalarWhereInput = {
    AND?: TeacherSubjectScalarWhereInput | TeacherSubjectScalarWhereInput[]
    OR?: TeacherSubjectScalarWhereInput[]
    NOT?: TeacherSubjectScalarWhereInput | TeacherSubjectScalarWhereInput[]
    id?: IntFilter<"TeacherSubject"> | number
    teacherId?: IntFilter<"TeacherSubject"> | number
    subjectId?: IntFilter<"TeacherSubject"> | number
    academicYear?: StringFilter<"TeacherSubject"> | string
    createdAt?: DateTimeFilter<"TeacherSubject"> | Date | string
    updatedAt?: DateTimeFilter<"TeacherSubject"> | Date | string
  }

  export type GradeUpsertWithWhereUniqueWithoutTeacherInput = {
    where: GradeWhereUniqueInput
    update: XOR<GradeUpdateWithoutTeacherInput, GradeUncheckedUpdateWithoutTeacherInput>
    create: XOR<GradeCreateWithoutTeacherInput, GradeUncheckedCreateWithoutTeacherInput>
  }

  export type GradeUpdateWithWhereUniqueWithoutTeacherInput = {
    where: GradeWhereUniqueInput
    data: XOR<GradeUpdateWithoutTeacherInput, GradeUncheckedUpdateWithoutTeacherInput>
  }

  export type GradeUpdateManyWithWhereWithoutTeacherInput = {
    where: GradeScalarWhereInput
    data: XOR<GradeUpdateManyMutationInput, GradeUncheckedUpdateManyWithoutTeacherInput>
  }

  export type GradeScalarWhereInput = {
    AND?: GradeScalarWhereInput | GradeScalarWhereInput[]
    OR?: GradeScalarWhereInput[]
    NOT?: GradeScalarWhereInput | GradeScalarWhereInput[]
    id?: IntFilter<"Grade"> | number
    studentSubjectId?: IntFilter<"Grade"> | number
    teacherId?: IntFilter<"Grade"> | number
    term?: StringFilter<"Grade"> | string
    score?: FloatFilter<"Grade"> | number
    letterGrade?: StringNullableFilter<"Grade"> | string | null
    remarks?: StringNullableFilter<"Grade"> | string | null
    createdAt?: DateTimeFilter<"Grade"> | Date | string
    updatedAt?: DateTimeFilter<"Grade"> | Date | string
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutUserInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutUserInput>
  }

  export type ActivityLogScalarWhereInput = {
    AND?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    OR?: ActivityLogScalarWhereInput[]
    NOT?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    id?: IntFilter<"ActivityLog"> | number
    userId?: IntFilter<"ActivityLog"> | number
    action?: StringFilter<"ActivityLog"> | string
    details?: StringFilter<"ActivityLog"> | string
    entityType?: StringFilter<"ActivityLog"> | string
    entityId?: IntFilter<"ActivityLog"> | number
    ipAddress?: StringNullableFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
  }

  export type StudentSubjectCreateWithoutStudentInput = {
    academicYear: string
    semester?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subject: SubjectCreateNestedOneWithoutStudentSubjectsInput
    grades?: GradeCreateNestedManyWithoutStudentSubjectInput
  }

  export type StudentSubjectUncheckedCreateWithoutStudentInput = {
    id?: number
    subjectId: number
    academicYear: string
    semester?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    grades?: GradeUncheckedCreateNestedManyWithoutStudentSubjectInput
  }

  export type StudentSubjectCreateOrConnectWithoutStudentInput = {
    where: StudentSubjectWhereUniqueInput
    create: XOR<StudentSubjectCreateWithoutStudentInput, StudentSubjectUncheckedCreateWithoutStudentInput>
  }

  export type StudentSubjectCreateManyStudentInputEnvelope = {
    data: StudentSubjectCreateManyStudentInput | StudentSubjectCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type StudentSubjectUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentSubjectWhereUniqueInput
    update: XOR<StudentSubjectUpdateWithoutStudentInput, StudentSubjectUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentSubjectCreateWithoutStudentInput, StudentSubjectUncheckedCreateWithoutStudentInput>
  }

  export type StudentSubjectUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentSubjectWhereUniqueInput
    data: XOR<StudentSubjectUpdateWithoutStudentInput, StudentSubjectUncheckedUpdateWithoutStudentInput>
  }

  export type StudentSubjectUpdateManyWithWhereWithoutStudentInput = {
    where: StudentSubjectScalarWhereInput
    data: XOR<StudentSubjectUpdateManyMutationInput, StudentSubjectUncheckedUpdateManyWithoutStudentInput>
  }

  export type StudentSubjectScalarWhereInput = {
    AND?: StudentSubjectScalarWhereInput | StudentSubjectScalarWhereInput[]
    OR?: StudentSubjectScalarWhereInput[]
    NOT?: StudentSubjectScalarWhereInput | StudentSubjectScalarWhereInput[]
    id?: IntFilter<"StudentSubject"> | number
    studentId?: IntFilter<"StudentSubject"> | number
    subjectId?: IntFilter<"StudentSubject"> | number
    academicYear?: StringFilter<"StudentSubject"> | string
    semester?: StringNullableFilter<"StudentSubject"> | string | null
    isActive?: BoolFilter<"StudentSubject"> | boolean
    createdAt?: DateTimeFilter<"StudentSubject"> | Date | string
    updatedAt?: DateTimeFilter<"StudentSubject"> | Date | string
  }

  export type TeacherSubjectCreateWithoutSubjectInput = {
    academicYear: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: UserCreateNestedOneWithoutTeacherSubjectsInput
  }

  export type TeacherSubjectUncheckedCreateWithoutSubjectInput = {
    id?: number
    teacherId: number
    academicYear: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherSubjectCreateOrConnectWithoutSubjectInput = {
    where: TeacherSubjectWhereUniqueInput
    create: XOR<TeacherSubjectCreateWithoutSubjectInput, TeacherSubjectUncheckedCreateWithoutSubjectInput>
  }

  export type TeacherSubjectCreateManySubjectInputEnvelope = {
    data: TeacherSubjectCreateManySubjectInput | TeacherSubjectCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type StudentSubjectCreateWithoutSubjectInput = {
    academicYear: string
    semester?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutStudentSubjectsInput
    grades?: GradeCreateNestedManyWithoutStudentSubjectInput
  }

  export type StudentSubjectUncheckedCreateWithoutSubjectInput = {
    id?: number
    studentId: number
    academicYear: string
    semester?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    grades?: GradeUncheckedCreateNestedManyWithoutStudentSubjectInput
  }

  export type StudentSubjectCreateOrConnectWithoutSubjectInput = {
    where: StudentSubjectWhereUniqueInput
    create: XOR<StudentSubjectCreateWithoutSubjectInput, StudentSubjectUncheckedCreateWithoutSubjectInput>
  }

  export type StudentSubjectCreateManySubjectInputEnvelope = {
    data: StudentSubjectCreateManySubjectInput | StudentSubjectCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type TeacherSubjectUpsertWithWhereUniqueWithoutSubjectInput = {
    where: TeacherSubjectWhereUniqueInput
    update: XOR<TeacherSubjectUpdateWithoutSubjectInput, TeacherSubjectUncheckedUpdateWithoutSubjectInput>
    create: XOR<TeacherSubjectCreateWithoutSubjectInput, TeacherSubjectUncheckedCreateWithoutSubjectInput>
  }

  export type TeacherSubjectUpdateWithWhereUniqueWithoutSubjectInput = {
    where: TeacherSubjectWhereUniqueInput
    data: XOR<TeacherSubjectUpdateWithoutSubjectInput, TeacherSubjectUncheckedUpdateWithoutSubjectInput>
  }

  export type TeacherSubjectUpdateManyWithWhereWithoutSubjectInput = {
    where: TeacherSubjectScalarWhereInput
    data: XOR<TeacherSubjectUpdateManyMutationInput, TeacherSubjectUncheckedUpdateManyWithoutSubjectInput>
  }

  export type StudentSubjectUpsertWithWhereUniqueWithoutSubjectInput = {
    where: StudentSubjectWhereUniqueInput
    update: XOR<StudentSubjectUpdateWithoutSubjectInput, StudentSubjectUncheckedUpdateWithoutSubjectInput>
    create: XOR<StudentSubjectCreateWithoutSubjectInput, StudentSubjectUncheckedCreateWithoutSubjectInput>
  }

  export type StudentSubjectUpdateWithWhereUniqueWithoutSubjectInput = {
    where: StudentSubjectWhereUniqueInput
    data: XOR<StudentSubjectUpdateWithoutSubjectInput, StudentSubjectUncheckedUpdateWithoutSubjectInput>
  }

  export type StudentSubjectUpdateManyWithWhereWithoutSubjectInput = {
    where: StudentSubjectScalarWhereInput
    data: XOR<StudentSubjectUpdateManyMutationInput, StudentSubjectUncheckedUpdateManyWithoutSubjectInput>
  }

  export type StudentCreateWithoutStudentSubjectsInput = {
    studentId: string
    studentLrn: string
    firstName: string
    lastName: string
    middleName?: string | null
    dateOfBirth: Date | string
    gender: string
    address: string
    contactNumber?: string | null
    guardianName: string
    guardianContact: string
    yearLevel: number
    section: string
    academicTrack?: $Enums.AcademicTrack | null
    enrollmentStatus: string
    enrollmentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUncheckedCreateWithoutStudentSubjectsInput = {
    id?: number
    studentId: string
    studentLrn: string
    firstName: string
    lastName: string
    middleName?: string | null
    dateOfBirth: Date | string
    gender: string
    address: string
    contactNumber?: string | null
    guardianName: string
    guardianContact: string
    yearLevel: number
    section: string
    academicTrack?: $Enums.AcademicTrack | null
    enrollmentStatus: string
    enrollmentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentCreateOrConnectWithoutStudentSubjectsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutStudentSubjectsInput, StudentUncheckedCreateWithoutStudentSubjectsInput>
  }

  export type SubjectCreateWithoutStudentSubjectsInput = {
    subjectCode: string
    subjectName: string
    description?: string | null
    yearLevel: number
    academicTrack?: $Enums.AcademicTrack | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teachers?: TeacherSubjectCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutStudentSubjectsInput = {
    id?: number
    subjectCode: string
    subjectName: string
    description?: string | null
    yearLevel: number
    academicTrack?: $Enums.AcademicTrack | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teachers?: TeacherSubjectUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutStudentSubjectsInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutStudentSubjectsInput, SubjectUncheckedCreateWithoutStudentSubjectsInput>
  }

  export type GradeCreateWithoutStudentSubjectInput = {
    term: string
    score: number
    letterGrade?: string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: UserCreateNestedOneWithoutGradesEnteredInput
  }

  export type GradeUncheckedCreateWithoutStudentSubjectInput = {
    id?: number
    teacherId: number
    term: string
    score: number
    letterGrade?: string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GradeCreateOrConnectWithoutStudentSubjectInput = {
    where: GradeWhereUniqueInput
    create: XOR<GradeCreateWithoutStudentSubjectInput, GradeUncheckedCreateWithoutStudentSubjectInput>
  }

  export type GradeCreateManyStudentSubjectInputEnvelope = {
    data: GradeCreateManyStudentSubjectInput | GradeCreateManyStudentSubjectInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithoutStudentSubjectsInput = {
    update: XOR<StudentUpdateWithoutStudentSubjectsInput, StudentUncheckedUpdateWithoutStudentSubjectsInput>
    create: XOR<StudentCreateWithoutStudentSubjectsInput, StudentUncheckedCreateWithoutStudentSubjectsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutStudentSubjectsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutStudentSubjectsInput, StudentUncheckedUpdateWithoutStudentSubjectsInput>
  }

  export type StudentUpdateWithoutStudentSubjectsInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    studentLrn?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianContact?: StringFieldUpdateOperationsInput | string
    yearLevel?: IntFieldUpdateOperationsInput | number
    section?: StringFieldUpdateOperationsInput | string
    academicTrack?: NullableEnumAcademicTrackFieldUpdateOperationsInput | $Enums.AcademicTrack | null
    enrollmentStatus?: StringFieldUpdateOperationsInput | string
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateWithoutStudentSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: StringFieldUpdateOperationsInput | string
    studentLrn?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: StringFieldUpdateOperationsInput | string
    guardianContact?: StringFieldUpdateOperationsInput | string
    yearLevel?: IntFieldUpdateOperationsInput | number
    section?: StringFieldUpdateOperationsInput | string
    academicTrack?: NullableEnumAcademicTrackFieldUpdateOperationsInput | $Enums.AcademicTrack | null
    enrollmentStatus?: StringFieldUpdateOperationsInput | string
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubjectUpsertWithoutStudentSubjectsInput = {
    update: XOR<SubjectUpdateWithoutStudentSubjectsInput, SubjectUncheckedUpdateWithoutStudentSubjectsInput>
    create: XOR<SubjectCreateWithoutStudentSubjectsInput, SubjectUncheckedCreateWithoutStudentSubjectsInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutStudentSubjectsInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutStudentSubjectsInput, SubjectUncheckedUpdateWithoutStudentSubjectsInput>
  }

  export type SubjectUpdateWithoutStudentSubjectsInput = {
    subjectCode?: StringFieldUpdateOperationsInput | string
    subjectName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    yearLevel?: IntFieldUpdateOperationsInput | number
    academicTrack?: NullableEnumAcademicTrackFieldUpdateOperationsInput | $Enums.AcademicTrack | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teachers?: TeacherSubjectUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutStudentSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectCode?: StringFieldUpdateOperationsInput | string
    subjectName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    yearLevel?: IntFieldUpdateOperationsInput | number
    academicTrack?: NullableEnumAcademicTrackFieldUpdateOperationsInput | $Enums.AcademicTrack | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teachers?: TeacherSubjectUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type GradeUpsertWithWhereUniqueWithoutStudentSubjectInput = {
    where: GradeWhereUniqueInput
    update: XOR<GradeUpdateWithoutStudentSubjectInput, GradeUncheckedUpdateWithoutStudentSubjectInput>
    create: XOR<GradeCreateWithoutStudentSubjectInput, GradeUncheckedCreateWithoutStudentSubjectInput>
  }

  export type GradeUpdateWithWhereUniqueWithoutStudentSubjectInput = {
    where: GradeWhereUniqueInput
    data: XOR<GradeUpdateWithoutStudentSubjectInput, GradeUncheckedUpdateWithoutStudentSubjectInput>
  }

  export type GradeUpdateManyWithWhereWithoutStudentSubjectInput = {
    where: GradeScalarWhereInput
    data: XOR<GradeUpdateManyMutationInput, GradeUncheckedUpdateManyWithoutStudentSubjectInput>
  }

  export type UserCreateWithoutTeacherSubjectsInput = {
    employeeId: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    gradesEntered?: GradeCreateNestedManyWithoutTeacherInput
    logsCreated?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeacherSubjectsInput = {
    id?: number
    employeeId: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    gradesEntered?: GradeUncheckedCreateNestedManyWithoutTeacherInput
    logsCreated?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeacherSubjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeacherSubjectsInput, UserUncheckedCreateWithoutTeacherSubjectsInput>
  }

  export type SubjectCreateWithoutTeachersInput = {
    subjectCode: string
    subjectName: string
    description?: string | null
    yearLevel: number
    academicTrack?: $Enums.AcademicTrack | null
    createdAt?: Date | string
    updatedAt?: Date | string
    studentSubjects?: StudentSubjectCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutTeachersInput = {
    id?: number
    subjectCode: string
    subjectName: string
    description?: string | null
    yearLevel: number
    academicTrack?: $Enums.AcademicTrack | null
    createdAt?: Date | string
    updatedAt?: Date | string
    studentSubjects?: StudentSubjectUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutTeachersInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutTeachersInput, SubjectUncheckedCreateWithoutTeachersInput>
  }

  export type UserUpsertWithoutTeacherSubjectsInput = {
    update: XOR<UserUpdateWithoutTeacherSubjectsInput, UserUncheckedUpdateWithoutTeacherSubjectsInput>
    create: XOR<UserCreateWithoutTeacherSubjectsInput, UserUncheckedCreateWithoutTeacherSubjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeacherSubjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeacherSubjectsInput, UserUncheckedUpdateWithoutTeacherSubjectsInput>
  }

  export type UserUpdateWithoutTeacherSubjectsInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gradesEntered?: GradeUpdateManyWithoutTeacherNestedInput
    logsCreated?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeacherSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gradesEntered?: GradeUncheckedUpdateManyWithoutTeacherNestedInput
    logsCreated?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubjectUpsertWithoutTeachersInput = {
    update: XOR<SubjectUpdateWithoutTeachersInput, SubjectUncheckedUpdateWithoutTeachersInput>
    create: XOR<SubjectCreateWithoutTeachersInput, SubjectUncheckedCreateWithoutTeachersInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutTeachersInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutTeachersInput, SubjectUncheckedUpdateWithoutTeachersInput>
  }

  export type SubjectUpdateWithoutTeachersInput = {
    subjectCode?: StringFieldUpdateOperationsInput | string
    subjectName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    yearLevel?: IntFieldUpdateOperationsInput | number
    academicTrack?: NullableEnumAcademicTrackFieldUpdateOperationsInput | $Enums.AcademicTrack | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentSubjects?: StudentSubjectUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutTeachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectCode?: StringFieldUpdateOperationsInput | string
    subjectName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    yearLevel?: IntFieldUpdateOperationsInput | number
    academicTrack?: NullableEnumAcademicTrackFieldUpdateOperationsInput | $Enums.AcademicTrack | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentSubjects?: StudentSubjectUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type StudentSubjectCreateWithoutGradesInput = {
    academicYear: string
    semester?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    student: StudentCreateNestedOneWithoutStudentSubjectsInput
    subject: SubjectCreateNestedOneWithoutStudentSubjectsInput
  }

  export type StudentSubjectUncheckedCreateWithoutGradesInput = {
    id?: number
    studentId: number
    subjectId: number
    academicYear: string
    semester?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentSubjectCreateOrConnectWithoutGradesInput = {
    where: StudentSubjectWhereUniqueInput
    create: XOR<StudentSubjectCreateWithoutGradesInput, StudentSubjectUncheckedCreateWithoutGradesInput>
  }

  export type UserCreateWithoutGradesEnteredInput = {
    employeeId: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherSubjects?: TeacherSubjectCreateNestedManyWithoutTeacherInput
    logsCreated?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGradesEnteredInput = {
    id?: number
    employeeId: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherSubjects?: TeacherSubjectUncheckedCreateNestedManyWithoutTeacherInput
    logsCreated?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGradesEnteredInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGradesEnteredInput, UserUncheckedCreateWithoutGradesEnteredInput>
  }

  export type StudentSubjectUpsertWithoutGradesInput = {
    update: XOR<StudentSubjectUpdateWithoutGradesInput, StudentSubjectUncheckedUpdateWithoutGradesInput>
    create: XOR<StudentSubjectCreateWithoutGradesInput, StudentSubjectUncheckedCreateWithoutGradesInput>
    where?: StudentSubjectWhereInput
  }

  export type StudentSubjectUpdateToOneWithWhereWithoutGradesInput = {
    where?: StudentSubjectWhereInput
    data: XOR<StudentSubjectUpdateWithoutGradesInput, StudentSubjectUncheckedUpdateWithoutGradesInput>
  }

  export type StudentSubjectUpdateWithoutGradesInput = {
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutStudentSubjectsNestedInput
    subject?: SubjectUpdateOneRequiredWithoutStudentSubjectsNestedInput
  }

  export type StudentSubjectUncheckedUpdateWithoutGradesInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutGradesEnteredInput = {
    update: XOR<UserUpdateWithoutGradesEnteredInput, UserUncheckedUpdateWithoutGradesEnteredInput>
    create: XOR<UserCreateWithoutGradesEnteredInput, UserUncheckedCreateWithoutGradesEnteredInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGradesEnteredInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGradesEnteredInput, UserUncheckedUpdateWithoutGradesEnteredInput>
  }

  export type UserUpdateWithoutGradesEnteredInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherSubjects?: TeacherSubjectUpdateManyWithoutTeacherNestedInput
    logsCreated?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGradesEnteredInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherSubjects?: TeacherSubjectUncheckedUpdateManyWithoutTeacherNestedInput
    logsCreated?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLogsCreatedInput = {
    employeeId: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherSubjects?: TeacherSubjectCreateNestedManyWithoutTeacherInput
    gradesEntered?: GradeCreateNestedManyWithoutTeacherInput
  }

  export type UserUncheckedCreateWithoutLogsCreatedInput = {
    id?: number
    employeeId: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherSubjects?: TeacherSubjectUncheckedCreateNestedManyWithoutTeacherInput
    gradesEntered?: GradeUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type UserCreateOrConnectWithoutLogsCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLogsCreatedInput, UserUncheckedCreateWithoutLogsCreatedInput>
  }

  export type UserUpsertWithoutLogsCreatedInput = {
    update: XOR<UserUpdateWithoutLogsCreatedInput, UserUncheckedUpdateWithoutLogsCreatedInput>
    create: XOR<UserCreateWithoutLogsCreatedInput, UserUncheckedCreateWithoutLogsCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLogsCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLogsCreatedInput, UserUncheckedUpdateWithoutLogsCreatedInput>
  }

  export type UserUpdateWithoutLogsCreatedInput = {
    employeeId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherSubjects?: TeacherSubjectUpdateManyWithoutTeacherNestedInput
    gradesEntered?: GradeUpdateManyWithoutTeacherNestedInput
  }

  export type UserUncheckedUpdateWithoutLogsCreatedInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherSubjects?: TeacherSubjectUncheckedUpdateManyWithoutTeacherNestedInput
    gradesEntered?: GradeUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherSubjectCreateManyTeacherInput = {
    id?: number
    subjectId: number
    academicYear: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GradeCreateManyTeacherInput = {
    id?: number
    studentSubjectId: number
    term: string
    score: number
    letterGrade?: string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityLogCreateManyUserInput = {
    id?: number
    action: string
    details: string
    entityType: string
    entityId: number
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type TeacherSubjectUpdateWithoutTeacherInput = {
    academicYear?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateOneRequiredWithoutTeachersNestedInput
  }

  export type TeacherSubjectUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    academicYear?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherSubjectUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    academicYear?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GradeUpdateWithoutTeacherInput = {
    term?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    letterGrade?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentSubject?: StudentSubjectUpdateOneRequiredWithoutGradesNestedInput
  }

  export type GradeUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentSubjectId?: IntFieldUpdateOperationsInput | number
    term?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    letterGrade?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GradeUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentSubjectId?: IntFieldUpdateOperationsInput | number
    term?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    letterGrade?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUpdateWithoutUserInput = {
    action?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSubjectCreateManyStudentInput = {
    id?: number
    subjectId: number
    academicYear: string
    semester?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentSubjectUpdateWithoutStudentInput = {
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateOneRequiredWithoutStudentSubjectsNestedInput
    grades?: GradeUpdateManyWithoutStudentSubjectNestedInput
  }

  export type StudentSubjectUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grades?: GradeUncheckedUpdateManyWithoutStudentSubjectNestedInput
  }

  export type StudentSubjectUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherSubjectCreateManySubjectInput = {
    id?: number
    teacherId: number
    academicYear: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentSubjectCreateManySubjectInput = {
    id?: number
    studentId: number
    academicYear: string
    semester?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherSubjectUpdateWithoutSubjectInput = {
    academicYear?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutTeacherSubjectsNestedInput
  }

  export type TeacherSubjectUncheckedUpdateWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    academicYear?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherSubjectUncheckedUpdateManyWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    academicYear?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentSubjectUpdateWithoutSubjectInput = {
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutStudentSubjectsNestedInput
    grades?: GradeUpdateManyWithoutStudentSubjectNestedInput
  }

  export type StudentSubjectUncheckedUpdateWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grades?: GradeUncheckedUpdateManyWithoutStudentSubjectNestedInput
  }

  export type StudentSubjectUncheckedUpdateManyWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GradeCreateManyStudentSubjectInput = {
    id?: number
    teacherId: number
    term: string
    score: number
    letterGrade?: string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GradeUpdateWithoutStudentSubjectInput = {
    term?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    letterGrade?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutGradesEnteredNestedInput
  }

  export type GradeUncheckedUpdateWithoutStudentSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    term?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    letterGrade?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GradeUncheckedUpdateManyWithoutStudentSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    term?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    letterGrade?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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