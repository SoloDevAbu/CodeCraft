
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
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ManagerResponse
 * 
 */
export type ManagerResponse = $Result.DefaultSelection<Prisma.$ManagerResponsePayload>
/**
 * Model FrontendPrompt
 * 
 */
export type FrontendPrompt = $Result.DefaultSelection<Prisma.$FrontendPromptPayload>
/**
 * Model BackendPrompt
 * 
 */
export type BackendPrompt = $Result.DefaultSelection<Prisma.$BackendPromptPayload>
/**
 * Model QAPrompt
 * 
 */
export type QAPrompt = $Result.DefaultSelection<Prisma.$QAPromptPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  ACTIVE: 'ACTIVE',
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const ManagerPromptType: {
  USER: 'USER',
  SYSTEM: 'SYSTEM'
};

export type ManagerPromptType = (typeof ManagerPromptType)[keyof typeof ManagerPromptType]


export const FrontendPromptType: {
  MANAGER: 'MANAGER',
  SYSTEM: 'SYSTEM',
  USER: 'USER'
};

export type FrontendPromptType = (typeof FrontendPromptType)[keyof typeof FrontendPromptType]


export const BackendPromptType: {
  MANAGER: 'MANAGER',
  SYSTEM: 'SYSTEM',
  USER: 'USER'
};

export type BackendPromptType = (typeof BackendPromptType)[keyof typeof BackendPromptType]


export const QAPromptType: {
  MANAGER: 'MANAGER',
  SYSTEM: 'SYSTEM',
  USER: 'USER'
};

export type QAPromptType = (typeof QAPromptType)[keyof typeof QAPromptType]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type ManagerPromptType = $Enums.ManagerPromptType

export const ManagerPromptType: typeof $Enums.ManagerPromptType

export type FrontendPromptType = $Enums.FrontendPromptType

export const FrontendPromptType: typeof $Enums.FrontendPromptType

export type BackendPromptType = $Enums.BackendPromptType

export const BackendPromptType: typeof $Enums.BackendPromptType

export type QAPromptType = $Enums.QAPromptType

export const QAPromptType: typeof $Enums.QAPromptType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Projects
 * const projects = await prisma.project.findMany()
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
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
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
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.managerResponse`: Exposes CRUD operations for the **ManagerResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ManagerResponses
    * const managerResponses = await prisma.managerResponse.findMany()
    * ```
    */
  get managerResponse(): Prisma.ManagerResponseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.frontendPrompt`: Exposes CRUD operations for the **FrontendPrompt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FrontendPrompts
    * const frontendPrompts = await prisma.frontendPrompt.findMany()
    * ```
    */
  get frontendPrompt(): Prisma.FrontendPromptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.backendPrompt`: Exposes CRUD operations for the **BackendPrompt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BackendPrompts
    * const backendPrompts = await prisma.backendPrompt.findMany()
    * ```
    */
  get backendPrompt(): Prisma.BackendPromptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.qAPrompt`: Exposes CRUD operations for the **QAPrompt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QAPrompts
    * const qAPrompts = await prisma.qAPrompt.findMany()
    * ```
    */
  get qAPrompt(): Prisma.QAPromptDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Project: 'Project',
    User: 'User',
    ManagerResponse: 'ManagerResponse',
    FrontendPrompt: 'FrontendPrompt',
    BackendPrompt: 'BackendPrompt',
    QAPrompt: 'QAPrompt'
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
      modelProps: "project" | "user" | "managerResponse" | "frontendPrompt" | "backendPrompt" | "qAPrompt"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
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
      ManagerResponse: {
        payload: Prisma.$ManagerResponsePayload<ExtArgs>
        fields: Prisma.ManagerResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ManagerResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ManagerResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerResponsePayload>
          }
          findFirst: {
            args: Prisma.ManagerResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ManagerResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerResponsePayload>
          }
          findMany: {
            args: Prisma.ManagerResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerResponsePayload>[]
          }
          create: {
            args: Prisma.ManagerResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerResponsePayload>
          }
          createMany: {
            args: Prisma.ManagerResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ManagerResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerResponsePayload>[]
          }
          delete: {
            args: Prisma.ManagerResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerResponsePayload>
          }
          update: {
            args: Prisma.ManagerResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerResponsePayload>
          }
          deleteMany: {
            args: Prisma.ManagerResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ManagerResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ManagerResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerResponsePayload>[]
          }
          upsert: {
            args: Prisma.ManagerResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagerResponsePayload>
          }
          aggregate: {
            args: Prisma.ManagerResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateManagerResponse>
          }
          groupBy: {
            args: Prisma.ManagerResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ManagerResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ManagerResponseCountArgs<ExtArgs>
            result: $Utils.Optional<ManagerResponseCountAggregateOutputType> | number
          }
        }
      }
      FrontendPrompt: {
        payload: Prisma.$FrontendPromptPayload<ExtArgs>
        fields: Prisma.FrontendPromptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FrontendPromptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrontendPromptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FrontendPromptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrontendPromptPayload>
          }
          findFirst: {
            args: Prisma.FrontendPromptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrontendPromptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FrontendPromptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrontendPromptPayload>
          }
          findMany: {
            args: Prisma.FrontendPromptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrontendPromptPayload>[]
          }
          create: {
            args: Prisma.FrontendPromptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrontendPromptPayload>
          }
          createMany: {
            args: Prisma.FrontendPromptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FrontendPromptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrontendPromptPayload>[]
          }
          delete: {
            args: Prisma.FrontendPromptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrontendPromptPayload>
          }
          update: {
            args: Prisma.FrontendPromptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrontendPromptPayload>
          }
          deleteMany: {
            args: Prisma.FrontendPromptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FrontendPromptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FrontendPromptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrontendPromptPayload>[]
          }
          upsert: {
            args: Prisma.FrontendPromptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FrontendPromptPayload>
          }
          aggregate: {
            args: Prisma.FrontendPromptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFrontendPrompt>
          }
          groupBy: {
            args: Prisma.FrontendPromptGroupByArgs<ExtArgs>
            result: $Utils.Optional<FrontendPromptGroupByOutputType>[]
          }
          count: {
            args: Prisma.FrontendPromptCountArgs<ExtArgs>
            result: $Utils.Optional<FrontendPromptCountAggregateOutputType> | number
          }
        }
      }
      BackendPrompt: {
        payload: Prisma.$BackendPromptPayload<ExtArgs>
        fields: Prisma.BackendPromptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BackendPromptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackendPromptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BackendPromptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackendPromptPayload>
          }
          findFirst: {
            args: Prisma.BackendPromptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackendPromptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BackendPromptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackendPromptPayload>
          }
          findMany: {
            args: Prisma.BackendPromptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackendPromptPayload>[]
          }
          create: {
            args: Prisma.BackendPromptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackendPromptPayload>
          }
          createMany: {
            args: Prisma.BackendPromptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BackendPromptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackendPromptPayload>[]
          }
          delete: {
            args: Prisma.BackendPromptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackendPromptPayload>
          }
          update: {
            args: Prisma.BackendPromptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackendPromptPayload>
          }
          deleteMany: {
            args: Prisma.BackendPromptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BackendPromptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BackendPromptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackendPromptPayload>[]
          }
          upsert: {
            args: Prisma.BackendPromptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BackendPromptPayload>
          }
          aggregate: {
            args: Prisma.BackendPromptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBackendPrompt>
          }
          groupBy: {
            args: Prisma.BackendPromptGroupByArgs<ExtArgs>
            result: $Utils.Optional<BackendPromptGroupByOutputType>[]
          }
          count: {
            args: Prisma.BackendPromptCountArgs<ExtArgs>
            result: $Utils.Optional<BackendPromptCountAggregateOutputType> | number
          }
        }
      }
      QAPrompt: {
        payload: Prisma.$QAPromptPayload<ExtArgs>
        fields: Prisma.QAPromptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QAPromptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QAPromptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QAPromptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QAPromptPayload>
          }
          findFirst: {
            args: Prisma.QAPromptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QAPromptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QAPromptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QAPromptPayload>
          }
          findMany: {
            args: Prisma.QAPromptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QAPromptPayload>[]
          }
          create: {
            args: Prisma.QAPromptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QAPromptPayload>
          }
          createMany: {
            args: Prisma.QAPromptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QAPromptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QAPromptPayload>[]
          }
          delete: {
            args: Prisma.QAPromptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QAPromptPayload>
          }
          update: {
            args: Prisma.QAPromptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QAPromptPayload>
          }
          deleteMany: {
            args: Prisma.QAPromptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QAPromptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QAPromptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QAPromptPayload>[]
          }
          upsert: {
            args: Prisma.QAPromptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QAPromptPayload>
          }
          aggregate: {
            args: Prisma.QAPromptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQAPrompt>
          }
          groupBy: {
            args: Prisma.QAPromptGroupByArgs<ExtArgs>
            result: $Utils.Optional<QAPromptGroupByOutputType>[]
          }
          count: {
            args: Prisma.QAPromptCountArgs<ExtArgs>
            result: $Utils.Optional<QAPromptCountAggregateOutputType> | number
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
    project?: ProjectOmit
    user?: UserOmit
    managerResponse?: ManagerResponseOmit
    frontendPrompt?: FrontendPromptOmit
    backendPrompt?: BackendPromptOmit
    qAPrompt?: QAPromptOmit
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
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    managerResponses: number
    frontendPrompts: number
    backendPrompts: number
    qaPrompts: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    managerResponses?: boolean | ProjectCountOutputTypeCountManagerResponsesArgs
    frontendPrompts?: boolean | ProjectCountOutputTypeCountFrontendPromptsArgs
    backendPrompts?: boolean | ProjectCountOutputTypeCountBackendPromptsArgs
    qaPrompts?: boolean | ProjectCountOutputTypeCountQaPromptsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountManagerResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManagerResponseWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountFrontendPromptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FrontendPromptWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountBackendPromptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BackendPromptWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountQaPromptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QAPromptWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Project: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Project?: boolean | UserCountOutputTypeCountProjectArgs
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
  export type UserCountOutputTypeCountProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    status: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
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
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    description: string | null
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: ProjectCountAggregateOutputType | null
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
    name?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    managerResponses?: boolean | Project$managerResponsesArgs<ExtArgs>
    frontendPrompts?: boolean | Project$frontendPromptsArgs<ExtArgs>
    backendPrompts?: boolean | Project$backendPromptsArgs<ExtArgs>
    qaPrompts?: boolean | Project$qaPromptsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "status" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    managerResponses?: boolean | Project$managerResponsesArgs<ExtArgs>
    frontendPrompts?: boolean | Project$frontendPromptsArgs<ExtArgs>
    backendPrompts?: boolean | Project$backendPromptsArgs<ExtArgs>
    qaPrompts?: boolean | Project$qaPromptsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      managerResponses: Prisma.$ManagerResponsePayload<ExtArgs>[]
      frontendPrompts: Prisma.$FrontendPromptPayload<ExtArgs>[]
      backendPrompts: Prisma.$BackendPromptPayload<ExtArgs>[]
      qaPrompts: Prisma.$QAPromptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    managerResponses<T extends Project$managerResponsesArgs<ExtArgs> = {}>(args?: Subset<T, Project$managerResponsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagerResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    frontendPrompts<T extends Project$frontendPromptsArgs<ExtArgs> = {}>(args?: Subset<T, Project$frontendPromptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrontendPromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    backendPrompts<T extends Project$backendPromptsArgs<ExtArgs> = {}>(args?: Subset<T, Project$backendPromptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BackendPromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    qaPrompts<T extends Project$qaPromptsArgs<ExtArgs> = {}>(args?: Subset<T, Project$qaPromptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QAPromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly status: FieldRef<"Project", 'Status'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
    readonly userId: FieldRef<"Project", 'String'>
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
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
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
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
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
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
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
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
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
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
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
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
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
    skipDuplicates?: boolean
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
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
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
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
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
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
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
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.managerResponses
   */
  export type Project$managerResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerResponse
     */
    select?: ManagerResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerResponse
     */
    omit?: ManagerResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerResponseInclude<ExtArgs> | null
    where?: ManagerResponseWhereInput
    orderBy?: ManagerResponseOrderByWithRelationInput | ManagerResponseOrderByWithRelationInput[]
    cursor?: ManagerResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ManagerResponseScalarFieldEnum | ManagerResponseScalarFieldEnum[]
  }

  /**
   * Project.frontendPrompts
   */
  export type Project$frontendPromptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrontendPrompt
     */
    select?: FrontendPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FrontendPrompt
     */
    omit?: FrontendPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrontendPromptInclude<ExtArgs> | null
    where?: FrontendPromptWhereInput
    orderBy?: FrontendPromptOrderByWithRelationInput | FrontendPromptOrderByWithRelationInput[]
    cursor?: FrontendPromptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FrontendPromptScalarFieldEnum | FrontendPromptScalarFieldEnum[]
  }

  /**
   * Project.backendPrompts
   */
  export type Project$backendPromptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackendPrompt
     */
    select?: BackendPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BackendPrompt
     */
    omit?: BackendPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackendPromptInclude<ExtArgs> | null
    where?: BackendPromptWhereInput
    orderBy?: BackendPromptOrderByWithRelationInput | BackendPromptOrderByWithRelationInput[]
    cursor?: BackendPromptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BackendPromptScalarFieldEnum | BackendPromptScalarFieldEnum[]
  }

  /**
   * Project.qaPrompts
   */
  export type Project$qaPromptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QAPrompt
     */
    select?: QAPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QAPrompt
     */
    omit?: QAPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAPromptInclude<ExtArgs> | null
    where?: QAPromptWhereInput
    orderBy?: QAPromptOrderByWithRelationInput | QAPromptOrderByWithRelationInput[]
    cursor?: QAPromptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QAPromptScalarFieldEnum | QAPromptScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Project?: boolean | User$ProjectArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Project?: boolean | User$ProjectArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Project: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      password: string | null
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
    Project<T extends User$ProjectArgs<ExtArgs> = {}>(args?: Subset<T, User$ProjectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
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
   * User.Project
   */
  export type User$ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
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
   * Model ManagerResponse
   */

  export type AggregateManagerResponse = {
    _count: ManagerResponseCountAggregateOutputType | null
    _min: ManagerResponseMinAggregateOutputType | null
    _max: ManagerResponseMaxAggregateOutputType | null
  }

  export type ManagerResponseMinAggregateOutputType = {
    id: string | null
    content: string | null
    prompt: string | null
    type: $Enums.ManagerPromptType | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: string | null
  }

  export type ManagerResponseMaxAggregateOutputType = {
    id: string | null
    content: string | null
    prompt: string | null
    type: $Enums.ManagerPromptType | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: string | null
  }

  export type ManagerResponseCountAggregateOutputType = {
    id: number
    content: number
    prompt: number
    type: number
    frontendRoadMap: number
    backendRoadMap: number
    qaRoadmap: number
    createdAt: number
    updatedAt: number
    projectId: number
    _all: number
  }


  export type ManagerResponseMinAggregateInputType = {
    id?: true
    content?: true
    prompt?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
  }

  export type ManagerResponseMaxAggregateInputType = {
    id?: true
    content?: true
    prompt?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
  }

  export type ManagerResponseCountAggregateInputType = {
    id?: true
    content?: true
    prompt?: true
    type?: true
    frontendRoadMap?: true
    backendRoadMap?: true
    qaRoadmap?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
    _all?: true
  }

  export type ManagerResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ManagerResponse to aggregate.
     */
    where?: ManagerResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagerResponses to fetch.
     */
    orderBy?: ManagerResponseOrderByWithRelationInput | ManagerResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ManagerResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagerResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagerResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ManagerResponses
    **/
    _count?: true | ManagerResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManagerResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManagerResponseMaxAggregateInputType
  }

  export type GetManagerResponseAggregateType<T extends ManagerResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateManagerResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManagerResponse[P]>
      : GetScalarType<T[P], AggregateManagerResponse[P]>
  }




  export type ManagerResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManagerResponseWhereInput
    orderBy?: ManagerResponseOrderByWithAggregationInput | ManagerResponseOrderByWithAggregationInput[]
    by: ManagerResponseScalarFieldEnum[] | ManagerResponseScalarFieldEnum
    having?: ManagerResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManagerResponseCountAggregateInputType | true
    _min?: ManagerResponseMinAggregateInputType
    _max?: ManagerResponseMaxAggregateInputType
  }

  export type ManagerResponseGroupByOutputType = {
    id: string
    content: string | null
    prompt: string | null
    type: $Enums.ManagerPromptType | null
    frontendRoadMap: JsonValue | null
    backendRoadMap: JsonValue | null
    qaRoadmap: JsonValue | null
    createdAt: Date
    updatedAt: Date
    projectId: string
    _count: ManagerResponseCountAggregateOutputType | null
    _min: ManagerResponseMinAggregateOutputType | null
    _max: ManagerResponseMaxAggregateOutputType | null
  }

  type GetManagerResponseGroupByPayload<T extends ManagerResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManagerResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManagerResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManagerResponseGroupByOutputType[P]>
            : GetScalarType<T[P], ManagerResponseGroupByOutputType[P]>
        }
      >
    >


  export type ManagerResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    prompt?: boolean
    type?: boolean
    frontendRoadMap?: boolean
    backendRoadMap?: boolean
    qaRoadmap?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["managerResponse"]>

  export type ManagerResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    prompt?: boolean
    type?: boolean
    frontendRoadMap?: boolean
    backendRoadMap?: boolean
    qaRoadmap?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["managerResponse"]>

  export type ManagerResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    prompt?: boolean
    type?: boolean
    frontendRoadMap?: boolean
    backendRoadMap?: boolean
    qaRoadmap?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["managerResponse"]>

  export type ManagerResponseSelectScalar = {
    id?: boolean
    content?: boolean
    prompt?: boolean
    type?: boolean
    frontendRoadMap?: boolean
    backendRoadMap?: boolean
    qaRoadmap?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
  }

  export type ManagerResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "prompt" | "type" | "frontendRoadMap" | "backendRoadMap" | "qaRoadmap" | "createdAt" | "updatedAt" | "projectId", ExtArgs["result"]["managerResponse"]>
  export type ManagerResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ManagerResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ManagerResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ManagerResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ManagerResponse"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string | null
      prompt: string | null
      type: $Enums.ManagerPromptType | null
      frontendRoadMap: Prisma.JsonValue | null
      backendRoadMap: Prisma.JsonValue | null
      qaRoadmap: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
      projectId: string
    }, ExtArgs["result"]["managerResponse"]>
    composites: {}
  }

  type ManagerResponseGetPayload<S extends boolean | null | undefined | ManagerResponseDefaultArgs> = $Result.GetResult<Prisma.$ManagerResponsePayload, S>

  type ManagerResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ManagerResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ManagerResponseCountAggregateInputType | true
    }

  export interface ManagerResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ManagerResponse'], meta: { name: 'ManagerResponse' } }
    /**
     * Find zero or one ManagerResponse that matches the filter.
     * @param {ManagerResponseFindUniqueArgs} args - Arguments to find a ManagerResponse
     * @example
     * // Get one ManagerResponse
     * const managerResponse = await prisma.managerResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ManagerResponseFindUniqueArgs>(args: SelectSubset<T, ManagerResponseFindUniqueArgs<ExtArgs>>): Prisma__ManagerResponseClient<$Result.GetResult<Prisma.$ManagerResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ManagerResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ManagerResponseFindUniqueOrThrowArgs} args - Arguments to find a ManagerResponse
     * @example
     * // Get one ManagerResponse
     * const managerResponse = await prisma.managerResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ManagerResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, ManagerResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ManagerResponseClient<$Result.GetResult<Prisma.$ManagerResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ManagerResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerResponseFindFirstArgs} args - Arguments to find a ManagerResponse
     * @example
     * // Get one ManagerResponse
     * const managerResponse = await prisma.managerResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ManagerResponseFindFirstArgs>(args?: SelectSubset<T, ManagerResponseFindFirstArgs<ExtArgs>>): Prisma__ManagerResponseClient<$Result.GetResult<Prisma.$ManagerResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ManagerResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerResponseFindFirstOrThrowArgs} args - Arguments to find a ManagerResponse
     * @example
     * // Get one ManagerResponse
     * const managerResponse = await prisma.managerResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ManagerResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, ManagerResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ManagerResponseClient<$Result.GetResult<Prisma.$ManagerResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ManagerResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ManagerResponses
     * const managerResponses = await prisma.managerResponse.findMany()
     * 
     * // Get first 10 ManagerResponses
     * const managerResponses = await prisma.managerResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const managerResponseWithIdOnly = await prisma.managerResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ManagerResponseFindManyArgs>(args?: SelectSubset<T, ManagerResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagerResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ManagerResponse.
     * @param {ManagerResponseCreateArgs} args - Arguments to create a ManagerResponse.
     * @example
     * // Create one ManagerResponse
     * const ManagerResponse = await prisma.managerResponse.create({
     *   data: {
     *     // ... data to create a ManagerResponse
     *   }
     * })
     * 
     */
    create<T extends ManagerResponseCreateArgs>(args: SelectSubset<T, ManagerResponseCreateArgs<ExtArgs>>): Prisma__ManagerResponseClient<$Result.GetResult<Prisma.$ManagerResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ManagerResponses.
     * @param {ManagerResponseCreateManyArgs} args - Arguments to create many ManagerResponses.
     * @example
     * // Create many ManagerResponses
     * const managerResponse = await prisma.managerResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ManagerResponseCreateManyArgs>(args?: SelectSubset<T, ManagerResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ManagerResponses and returns the data saved in the database.
     * @param {ManagerResponseCreateManyAndReturnArgs} args - Arguments to create many ManagerResponses.
     * @example
     * // Create many ManagerResponses
     * const managerResponse = await prisma.managerResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ManagerResponses and only return the `id`
     * const managerResponseWithIdOnly = await prisma.managerResponse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ManagerResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, ManagerResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagerResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ManagerResponse.
     * @param {ManagerResponseDeleteArgs} args - Arguments to delete one ManagerResponse.
     * @example
     * // Delete one ManagerResponse
     * const ManagerResponse = await prisma.managerResponse.delete({
     *   where: {
     *     // ... filter to delete one ManagerResponse
     *   }
     * })
     * 
     */
    delete<T extends ManagerResponseDeleteArgs>(args: SelectSubset<T, ManagerResponseDeleteArgs<ExtArgs>>): Prisma__ManagerResponseClient<$Result.GetResult<Prisma.$ManagerResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ManagerResponse.
     * @param {ManagerResponseUpdateArgs} args - Arguments to update one ManagerResponse.
     * @example
     * // Update one ManagerResponse
     * const managerResponse = await prisma.managerResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ManagerResponseUpdateArgs>(args: SelectSubset<T, ManagerResponseUpdateArgs<ExtArgs>>): Prisma__ManagerResponseClient<$Result.GetResult<Prisma.$ManagerResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ManagerResponses.
     * @param {ManagerResponseDeleteManyArgs} args - Arguments to filter ManagerResponses to delete.
     * @example
     * // Delete a few ManagerResponses
     * const { count } = await prisma.managerResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ManagerResponseDeleteManyArgs>(args?: SelectSubset<T, ManagerResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ManagerResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ManagerResponses
     * const managerResponse = await prisma.managerResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ManagerResponseUpdateManyArgs>(args: SelectSubset<T, ManagerResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ManagerResponses and returns the data updated in the database.
     * @param {ManagerResponseUpdateManyAndReturnArgs} args - Arguments to update many ManagerResponses.
     * @example
     * // Update many ManagerResponses
     * const managerResponse = await prisma.managerResponse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ManagerResponses and only return the `id`
     * const managerResponseWithIdOnly = await prisma.managerResponse.updateManyAndReturn({
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
    updateManyAndReturn<T extends ManagerResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, ManagerResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagerResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ManagerResponse.
     * @param {ManagerResponseUpsertArgs} args - Arguments to update or create a ManagerResponse.
     * @example
     * // Update or create a ManagerResponse
     * const managerResponse = await prisma.managerResponse.upsert({
     *   create: {
     *     // ... data to create a ManagerResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ManagerResponse we want to update
     *   }
     * })
     */
    upsert<T extends ManagerResponseUpsertArgs>(args: SelectSubset<T, ManagerResponseUpsertArgs<ExtArgs>>): Prisma__ManagerResponseClient<$Result.GetResult<Prisma.$ManagerResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ManagerResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerResponseCountArgs} args - Arguments to filter ManagerResponses to count.
     * @example
     * // Count the number of ManagerResponses
     * const count = await prisma.managerResponse.count({
     *   where: {
     *     // ... the filter for the ManagerResponses we want to count
     *   }
     * })
    **/
    count<T extends ManagerResponseCountArgs>(
      args?: Subset<T, ManagerResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManagerResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ManagerResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ManagerResponseAggregateArgs>(args: Subset<T, ManagerResponseAggregateArgs>): Prisma.PrismaPromise<GetManagerResponseAggregateType<T>>

    /**
     * Group by ManagerResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagerResponseGroupByArgs} args - Group by arguments.
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
      T extends ManagerResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManagerResponseGroupByArgs['orderBy'] }
        : { orderBy?: ManagerResponseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ManagerResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManagerResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ManagerResponse model
   */
  readonly fields: ManagerResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ManagerResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ManagerResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ManagerResponse model
   */
  interface ManagerResponseFieldRefs {
    readonly id: FieldRef<"ManagerResponse", 'String'>
    readonly content: FieldRef<"ManagerResponse", 'String'>
    readonly prompt: FieldRef<"ManagerResponse", 'String'>
    readonly type: FieldRef<"ManagerResponse", 'ManagerPromptType'>
    readonly frontendRoadMap: FieldRef<"ManagerResponse", 'Json'>
    readonly backendRoadMap: FieldRef<"ManagerResponse", 'Json'>
    readonly qaRoadmap: FieldRef<"ManagerResponse", 'Json'>
    readonly createdAt: FieldRef<"ManagerResponse", 'DateTime'>
    readonly updatedAt: FieldRef<"ManagerResponse", 'DateTime'>
    readonly projectId: FieldRef<"ManagerResponse", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ManagerResponse findUnique
   */
  export type ManagerResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerResponse
     */
    select?: ManagerResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerResponse
     */
    omit?: ManagerResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerResponseInclude<ExtArgs> | null
    /**
     * Filter, which ManagerResponse to fetch.
     */
    where: ManagerResponseWhereUniqueInput
  }

  /**
   * ManagerResponse findUniqueOrThrow
   */
  export type ManagerResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerResponse
     */
    select?: ManagerResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerResponse
     */
    omit?: ManagerResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerResponseInclude<ExtArgs> | null
    /**
     * Filter, which ManagerResponse to fetch.
     */
    where: ManagerResponseWhereUniqueInput
  }

  /**
   * ManagerResponse findFirst
   */
  export type ManagerResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerResponse
     */
    select?: ManagerResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerResponse
     */
    omit?: ManagerResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerResponseInclude<ExtArgs> | null
    /**
     * Filter, which ManagerResponse to fetch.
     */
    where?: ManagerResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagerResponses to fetch.
     */
    orderBy?: ManagerResponseOrderByWithRelationInput | ManagerResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ManagerResponses.
     */
    cursor?: ManagerResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagerResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagerResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ManagerResponses.
     */
    distinct?: ManagerResponseScalarFieldEnum | ManagerResponseScalarFieldEnum[]
  }

  /**
   * ManagerResponse findFirstOrThrow
   */
  export type ManagerResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerResponse
     */
    select?: ManagerResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerResponse
     */
    omit?: ManagerResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerResponseInclude<ExtArgs> | null
    /**
     * Filter, which ManagerResponse to fetch.
     */
    where?: ManagerResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagerResponses to fetch.
     */
    orderBy?: ManagerResponseOrderByWithRelationInput | ManagerResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ManagerResponses.
     */
    cursor?: ManagerResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagerResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagerResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ManagerResponses.
     */
    distinct?: ManagerResponseScalarFieldEnum | ManagerResponseScalarFieldEnum[]
  }

  /**
   * ManagerResponse findMany
   */
  export type ManagerResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerResponse
     */
    select?: ManagerResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerResponse
     */
    omit?: ManagerResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerResponseInclude<ExtArgs> | null
    /**
     * Filter, which ManagerResponses to fetch.
     */
    where?: ManagerResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagerResponses to fetch.
     */
    orderBy?: ManagerResponseOrderByWithRelationInput | ManagerResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ManagerResponses.
     */
    cursor?: ManagerResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagerResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagerResponses.
     */
    skip?: number
    distinct?: ManagerResponseScalarFieldEnum | ManagerResponseScalarFieldEnum[]
  }

  /**
   * ManagerResponse create
   */
  export type ManagerResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerResponse
     */
    select?: ManagerResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerResponse
     */
    omit?: ManagerResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a ManagerResponse.
     */
    data: XOR<ManagerResponseCreateInput, ManagerResponseUncheckedCreateInput>
  }

  /**
   * ManagerResponse createMany
   */
  export type ManagerResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ManagerResponses.
     */
    data: ManagerResponseCreateManyInput | ManagerResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ManagerResponse createManyAndReturn
   */
  export type ManagerResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerResponse
     */
    select?: ManagerResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerResponse
     */
    omit?: ManagerResponseOmit<ExtArgs> | null
    /**
     * The data used to create many ManagerResponses.
     */
    data: ManagerResponseCreateManyInput | ManagerResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ManagerResponse update
   */
  export type ManagerResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerResponse
     */
    select?: ManagerResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerResponse
     */
    omit?: ManagerResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a ManagerResponse.
     */
    data: XOR<ManagerResponseUpdateInput, ManagerResponseUncheckedUpdateInput>
    /**
     * Choose, which ManagerResponse to update.
     */
    where: ManagerResponseWhereUniqueInput
  }

  /**
   * ManagerResponse updateMany
   */
  export type ManagerResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ManagerResponses.
     */
    data: XOR<ManagerResponseUpdateManyMutationInput, ManagerResponseUncheckedUpdateManyInput>
    /**
     * Filter which ManagerResponses to update
     */
    where?: ManagerResponseWhereInput
    /**
     * Limit how many ManagerResponses to update.
     */
    limit?: number
  }

  /**
   * ManagerResponse updateManyAndReturn
   */
  export type ManagerResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerResponse
     */
    select?: ManagerResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerResponse
     */
    omit?: ManagerResponseOmit<ExtArgs> | null
    /**
     * The data used to update ManagerResponses.
     */
    data: XOR<ManagerResponseUpdateManyMutationInput, ManagerResponseUncheckedUpdateManyInput>
    /**
     * Filter which ManagerResponses to update
     */
    where?: ManagerResponseWhereInput
    /**
     * Limit how many ManagerResponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerResponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ManagerResponse upsert
   */
  export type ManagerResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerResponse
     */
    select?: ManagerResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerResponse
     */
    omit?: ManagerResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the ManagerResponse to update in case it exists.
     */
    where: ManagerResponseWhereUniqueInput
    /**
     * In case the ManagerResponse found by the `where` argument doesn't exist, create a new ManagerResponse with this data.
     */
    create: XOR<ManagerResponseCreateInput, ManagerResponseUncheckedCreateInput>
    /**
     * In case the ManagerResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ManagerResponseUpdateInput, ManagerResponseUncheckedUpdateInput>
  }

  /**
   * ManagerResponse delete
   */
  export type ManagerResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerResponse
     */
    select?: ManagerResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerResponse
     */
    omit?: ManagerResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerResponseInclude<ExtArgs> | null
    /**
     * Filter which ManagerResponse to delete.
     */
    where: ManagerResponseWhereUniqueInput
  }

  /**
   * ManagerResponse deleteMany
   */
  export type ManagerResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ManagerResponses to delete
     */
    where?: ManagerResponseWhereInput
    /**
     * Limit how many ManagerResponses to delete.
     */
    limit?: number
  }

  /**
   * ManagerResponse without action
   */
  export type ManagerResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagerResponse
     */
    select?: ManagerResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagerResponse
     */
    omit?: ManagerResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagerResponseInclude<ExtArgs> | null
  }


  /**
   * Model FrontendPrompt
   */

  export type AggregateFrontendPrompt = {
    _count: FrontendPromptCountAggregateOutputType | null
    _min: FrontendPromptMinAggregateOutputType | null
    _max: FrontendPromptMaxAggregateOutputType | null
  }

  export type FrontendPromptMinAggregateOutputType = {
    id: string | null
    prompt: string | null
    responseContent: string | null
    type: $Enums.FrontendPromptType | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: string | null
  }

  export type FrontendPromptMaxAggregateOutputType = {
    id: string | null
    prompt: string | null
    responseContent: string | null
    type: $Enums.FrontendPromptType | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: string | null
  }

  export type FrontendPromptCountAggregateOutputType = {
    id: number
    prompt: number
    managerPrompt: number
    responseContent: number
    type: number
    createdAt: number
    updatedAt: number
    projectId: number
    _all: number
  }


  export type FrontendPromptMinAggregateInputType = {
    id?: true
    prompt?: true
    responseContent?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
  }

  export type FrontendPromptMaxAggregateInputType = {
    id?: true
    prompt?: true
    responseContent?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
  }

  export type FrontendPromptCountAggregateInputType = {
    id?: true
    prompt?: true
    managerPrompt?: true
    responseContent?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
    _all?: true
  }

  export type FrontendPromptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FrontendPrompt to aggregate.
     */
    where?: FrontendPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FrontendPrompts to fetch.
     */
    orderBy?: FrontendPromptOrderByWithRelationInput | FrontendPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FrontendPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FrontendPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FrontendPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FrontendPrompts
    **/
    _count?: true | FrontendPromptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FrontendPromptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FrontendPromptMaxAggregateInputType
  }

  export type GetFrontendPromptAggregateType<T extends FrontendPromptAggregateArgs> = {
        [P in keyof T & keyof AggregateFrontendPrompt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFrontendPrompt[P]>
      : GetScalarType<T[P], AggregateFrontendPrompt[P]>
  }




  export type FrontendPromptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FrontendPromptWhereInput
    orderBy?: FrontendPromptOrderByWithAggregationInput | FrontendPromptOrderByWithAggregationInput[]
    by: FrontendPromptScalarFieldEnum[] | FrontendPromptScalarFieldEnum
    having?: FrontendPromptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FrontendPromptCountAggregateInputType | true
    _min?: FrontendPromptMinAggregateInputType
    _max?: FrontendPromptMaxAggregateInputType
  }

  export type FrontendPromptGroupByOutputType = {
    id: string
    prompt: string | null
    managerPrompt: JsonValue | null
    responseContent: string | null
    type: $Enums.FrontendPromptType
    createdAt: Date
    updatedAt: Date
    projectId: string
    _count: FrontendPromptCountAggregateOutputType | null
    _min: FrontendPromptMinAggregateOutputType | null
    _max: FrontendPromptMaxAggregateOutputType | null
  }

  type GetFrontendPromptGroupByPayload<T extends FrontendPromptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FrontendPromptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FrontendPromptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FrontendPromptGroupByOutputType[P]>
            : GetScalarType<T[P], FrontendPromptGroupByOutputType[P]>
        }
      >
    >


  export type FrontendPromptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    managerPrompt?: boolean
    responseContent?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["frontendPrompt"]>

  export type FrontendPromptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    managerPrompt?: boolean
    responseContent?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["frontendPrompt"]>

  export type FrontendPromptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    managerPrompt?: boolean
    responseContent?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["frontendPrompt"]>

  export type FrontendPromptSelectScalar = {
    id?: boolean
    prompt?: boolean
    managerPrompt?: boolean
    responseContent?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
  }

  export type FrontendPromptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prompt" | "managerPrompt" | "responseContent" | "type" | "createdAt" | "updatedAt" | "projectId", ExtArgs["result"]["frontendPrompt"]>
  export type FrontendPromptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type FrontendPromptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type FrontendPromptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $FrontendPromptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FrontendPrompt"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      prompt: string | null
      managerPrompt: Prisma.JsonValue | null
      responseContent: string | null
      type: $Enums.FrontendPromptType
      createdAt: Date
      updatedAt: Date
      projectId: string
    }, ExtArgs["result"]["frontendPrompt"]>
    composites: {}
  }

  type FrontendPromptGetPayload<S extends boolean | null | undefined | FrontendPromptDefaultArgs> = $Result.GetResult<Prisma.$FrontendPromptPayload, S>

  type FrontendPromptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FrontendPromptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FrontendPromptCountAggregateInputType | true
    }

  export interface FrontendPromptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FrontendPrompt'], meta: { name: 'FrontendPrompt' } }
    /**
     * Find zero or one FrontendPrompt that matches the filter.
     * @param {FrontendPromptFindUniqueArgs} args - Arguments to find a FrontendPrompt
     * @example
     * // Get one FrontendPrompt
     * const frontendPrompt = await prisma.frontendPrompt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FrontendPromptFindUniqueArgs>(args: SelectSubset<T, FrontendPromptFindUniqueArgs<ExtArgs>>): Prisma__FrontendPromptClient<$Result.GetResult<Prisma.$FrontendPromptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FrontendPrompt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FrontendPromptFindUniqueOrThrowArgs} args - Arguments to find a FrontendPrompt
     * @example
     * // Get one FrontendPrompt
     * const frontendPrompt = await prisma.frontendPrompt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FrontendPromptFindUniqueOrThrowArgs>(args: SelectSubset<T, FrontendPromptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FrontendPromptClient<$Result.GetResult<Prisma.$FrontendPromptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FrontendPrompt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrontendPromptFindFirstArgs} args - Arguments to find a FrontendPrompt
     * @example
     * // Get one FrontendPrompt
     * const frontendPrompt = await prisma.frontendPrompt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FrontendPromptFindFirstArgs>(args?: SelectSubset<T, FrontendPromptFindFirstArgs<ExtArgs>>): Prisma__FrontendPromptClient<$Result.GetResult<Prisma.$FrontendPromptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FrontendPrompt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrontendPromptFindFirstOrThrowArgs} args - Arguments to find a FrontendPrompt
     * @example
     * // Get one FrontendPrompt
     * const frontendPrompt = await prisma.frontendPrompt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FrontendPromptFindFirstOrThrowArgs>(args?: SelectSubset<T, FrontendPromptFindFirstOrThrowArgs<ExtArgs>>): Prisma__FrontendPromptClient<$Result.GetResult<Prisma.$FrontendPromptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FrontendPrompts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrontendPromptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FrontendPrompts
     * const frontendPrompts = await prisma.frontendPrompt.findMany()
     * 
     * // Get first 10 FrontendPrompts
     * const frontendPrompts = await prisma.frontendPrompt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const frontendPromptWithIdOnly = await prisma.frontendPrompt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FrontendPromptFindManyArgs>(args?: SelectSubset<T, FrontendPromptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrontendPromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FrontendPrompt.
     * @param {FrontendPromptCreateArgs} args - Arguments to create a FrontendPrompt.
     * @example
     * // Create one FrontendPrompt
     * const FrontendPrompt = await prisma.frontendPrompt.create({
     *   data: {
     *     // ... data to create a FrontendPrompt
     *   }
     * })
     * 
     */
    create<T extends FrontendPromptCreateArgs>(args: SelectSubset<T, FrontendPromptCreateArgs<ExtArgs>>): Prisma__FrontendPromptClient<$Result.GetResult<Prisma.$FrontendPromptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FrontendPrompts.
     * @param {FrontendPromptCreateManyArgs} args - Arguments to create many FrontendPrompts.
     * @example
     * // Create many FrontendPrompts
     * const frontendPrompt = await prisma.frontendPrompt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FrontendPromptCreateManyArgs>(args?: SelectSubset<T, FrontendPromptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FrontendPrompts and returns the data saved in the database.
     * @param {FrontendPromptCreateManyAndReturnArgs} args - Arguments to create many FrontendPrompts.
     * @example
     * // Create many FrontendPrompts
     * const frontendPrompt = await prisma.frontendPrompt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FrontendPrompts and only return the `id`
     * const frontendPromptWithIdOnly = await prisma.frontendPrompt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FrontendPromptCreateManyAndReturnArgs>(args?: SelectSubset<T, FrontendPromptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrontendPromptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FrontendPrompt.
     * @param {FrontendPromptDeleteArgs} args - Arguments to delete one FrontendPrompt.
     * @example
     * // Delete one FrontendPrompt
     * const FrontendPrompt = await prisma.frontendPrompt.delete({
     *   where: {
     *     // ... filter to delete one FrontendPrompt
     *   }
     * })
     * 
     */
    delete<T extends FrontendPromptDeleteArgs>(args: SelectSubset<T, FrontendPromptDeleteArgs<ExtArgs>>): Prisma__FrontendPromptClient<$Result.GetResult<Prisma.$FrontendPromptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FrontendPrompt.
     * @param {FrontendPromptUpdateArgs} args - Arguments to update one FrontendPrompt.
     * @example
     * // Update one FrontendPrompt
     * const frontendPrompt = await prisma.frontendPrompt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FrontendPromptUpdateArgs>(args: SelectSubset<T, FrontendPromptUpdateArgs<ExtArgs>>): Prisma__FrontendPromptClient<$Result.GetResult<Prisma.$FrontendPromptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FrontendPrompts.
     * @param {FrontendPromptDeleteManyArgs} args - Arguments to filter FrontendPrompts to delete.
     * @example
     * // Delete a few FrontendPrompts
     * const { count } = await prisma.frontendPrompt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FrontendPromptDeleteManyArgs>(args?: SelectSubset<T, FrontendPromptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FrontendPrompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrontendPromptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FrontendPrompts
     * const frontendPrompt = await prisma.frontendPrompt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FrontendPromptUpdateManyArgs>(args: SelectSubset<T, FrontendPromptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FrontendPrompts and returns the data updated in the database.
     * @param {FrontendPromptUpdateManyAndReturnArgs} args - Arguments to update many FrontendPrompts.
     * @example
     * // Update many FrontendPrompts
     * const frontendPrompt = await prisma.frontendPrompt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FrontendPrompts and only return the `id`
     * const frontendPromptWithIdOnly = await prisma.frontendPrompt.updateManyAndReturn({
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
    updateManyAndReturn<T extends FrontendPromptUpdateManyAndReturnArgs>(args: SelectSubset<T, FrontendPromptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FrontendPromptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FrontendPrompt.
     * @param {FrontendPromptUpsertArgs} args - Arguments to update or create a FrontendPrompt.
     * @example
     * // Update or create a FrontendPrompt
     * const frontendPrompt = await prisma.frontendPrompt.upsert({
     *   create: {
     *     // ... data to create a FrontendPrompt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FrontendPrompt we want to update
     *   }
     * })
     */
    upsert<T extends FrontendPromptUpsertArgs>(args: SelectSubset<T, FrontendPromptUpsertArgs<ExtArgs>>): Prisma__FrontendPromptClient<$Result.GetResult<Prisma.$FrontendPromptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FrontendPrompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrontendPromptCountArgs} args - Arguments to filter FrontendPrompts to count.
     * @example
     * // Count the number of FrontendPrompts
     * const count = await prisma.frontendPrompt.count({
     *   where: {
     *     // ... the filter for the FrontendPrompts we want to count
     *   }
     * })
    **/
    count<T extends FrontendPromptCountArgs>(
      args?: Subset<T, FrontendPromptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FrontendPromptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FrontendPrompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrontendPromptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FrontendPromptAggregateArgs>(args: Subset<T, FrontendPromptAggregateArgs>): Prisma.PrismaPromise<GetFrontendPromptAggregateType<T>>

    /**
     * Group by FrontendPrompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FrontendPromptGroupByArgs} args - Group by arguments.
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
      T extends FrontendPromptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FrontendPromptGroupByArgs['orderBy'] }
        : { orderBy?: FrontendPromptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FrontendPromptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFrontendPromptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FrontendPrompt model
   */
  readonly fields: FrontendPromptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FrontendPrompt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FrontendPromptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FrontendPrompt model
   */
  interface FrontendPromptFieldRefs {
    readonly id: FieldRef<"FrontendPrompt", 'String'>
    readonly prompt: FieldRef<"FrontendPrompt", 'String'>
    readonly managerPrompt: FieldRef<"FrontendPrompt", 'Json'>
    readonly responseContent: FieldRef<"FrontendPrompt", 'String'>
    readonly type: FieldRef<"FrontendPrompt", 'FrontendPromptType'>
    readonly createdAt: FieldRef<"FrontendPrompt", 'DateTime'>
    readonly updatedAt: FieldRef<"FrontendPrompt", 'DateTime'>
    readonly projectId: FieldRef<"FrontendPrompt", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FrontendPrompt findUnique
   */
  export type FrontendPromptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrontendPrompt
     */
    select?: FrontendPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FrontendPrompt
     */
    omit?: FrontendPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrontendPromptInclude<ExtArgs> | null
    /**
     * Filter, which FrontendPrompt to fetch.
     */
    where: FrontendPromptWhereUniqueInput
  }

  /**
   * FrontendPrompt findUniqueOrThrow
   */
  export type FrontendPromptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrontendPrompt
     */
    select?: FrontendPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FrontendPrompt
     */
    omit?: FrontendPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrontendPromptInclude<ExtArgs> | null
    /**
     * Filter, which FrontendPrompt to fetch.
     */
    where: FrontendPromptWhereUniqueInput
  }

  /**
   * FrontendPrompt findFirst
   */
  export type FrontendPromptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrontendPrompt
     */
    select?: FrontendPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FrontendPrompt
     */
    omit?: FrontendPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrontendPromptInclude<ExtArgs> | null
    /**
     * Filter, which FrontendPrompt to fetch.
     */
    where?: FrontendPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FrontendPrompts to fetch.
     */
    orderBy?: FrontendPromptOrderByWithRelationInput | FrontendPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FrontendPrompts.
     */
    cursor?: FrontendPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FrontendPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FrontendPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FrontendPrompts.
     */
    distinct?: FrontendPromptScalarFieldEnum | FrontendPromptScalarFieldEnum[]
  }

  /**
   * FrontendPrompt findFirstOrThrow
   */
  export type FrontendPromptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrontendPrompt
     */
    select?: FrontendPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FrontendPrompt
     */
    omit?: FrontendPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrontendPromptInclude<ExtArgs> | null
    /**
     * Filter, which FrontendPrompt to fetch.
     */
    where?: FrontendPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FrontendPrompts to fetch.
     */
    orderBy?: FrontendPromptOrderByWithRelationInput | FrontendPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FrontendPrompts.
     */
    cursor?: FrontendPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FrontendPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FrontendPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FrontendPrompts.
     */
    distinct?: FrontendPromptScalarFieldEnum | FrontendPromptScalarFieldEnum[]
  }

  /**
   * FrontendPrompt findMany
   */
  export type FrontendPromptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrontendPrompt
     */
    select?: FrontendPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FrontendPrompt
     */
    omit?: FrontendPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrontendPromptInclude<ExtArgs> | null
    /**
     * Filter, which FrontendPrompts to fetch.
     */
    where?: FrontendPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FrontendPrompts to fetch.
     */
    orderBy?: FrontendPromptOrderByWithRelationInput | FrontendPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FrontendPrompts.
     */
    cursor?: FrontendPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FrontendPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FrontendPrompts.
     */
    skip?: number
    distinct?: FrontendPromptScalarFieldEnum | FrontendPromptScalarFieldEnum[]
  }

  /**
   * FrontendPrompt create
   */
  export type FrontendPromptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrontendPrompt
     */
    select?: FrontendPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FrontendPrompt
     */
    omit?: FrontendPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrontendPromptInclude<ExtArgs> | null
    /**
     * The data needed to create a FrontendPrompt.
     */
    data: XOR<FrontendPromptCreateInput, FrontendPromptUncheckedCreateInput>
  }

  /**
   * FrontendPrompt createMany
   */
  export type FrontendPromptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FrontendPrompts.
     */
    data: FrontendPromptCreateManyInput | FrontendPromptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FrontendPrompt createManyAndReturn
   */
  export type FrontendPromptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrontendPrompt
     */
    select?: FrontendPromptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FrontendPrompt
     */
    omit?: FrontendPromptOmit<ExtArgs> | null
    /**
     * The data used to create many FrontendPrompts.
     */
    data: FrontendPromptCreateManyInput | FrontendPromptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrontendPromptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FrontendPrompt update
   */
  export type FrontendPromptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrontendPrompt
     */
    select?: FrontendPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FrontendPrompt
     */
    omit?: FrontendPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrontendPromptInclude<ExtArgs> | null
    /**
     * The data needed to update a FrontendPrompt.
     */
    data: XOR<FrontendPromptUpdateInput, FrontendPromptUncheckedUpdateInput>
    /**
     * Choose, which FrontendPrompt to update.
     */
    where: FrontendPromptWhereUniqueInput
  }

  /**
   * FrontendPrompt updateMany
   */
  export type FrontendPromptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FrontendPrompts.
     */
    data: XOR<FrontendPromptUpdateManyMutationInput, FrontendPromptUncheckedUpdateManyInput>
    /**
     * Filter which FrontendPrompts to update
     */
    where?: FrontendPromptWhereInput
    /**
     * Limit how many FrontendPrompts to update.
     */
    limit?: number
  }

  /**
   * FrontendPrompt updateManyAndReturn
   */
  export type FrontendPromptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrontendPrompt
     */
    select?: FrontendPromptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FrontendPrompt
     */
    omit?: FrontendPromptOmit<ExtArgs> | null
    /**
     * The data used to update FrontendPrompts.
     */
    data: XOR<FrontendPromptUpdateManyMutationInput, FrontendPromptUncheckedUpdateManyInput>
    /**
     * Filter which FrontendPrompts to update
     */
    where?: FrontendPromptWhereInput
    /**
     * Limit how many FrontendPrompts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrontendPromptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FrontendPrompt upsert
   */
  export type FrontendPromptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrontendPrompt
     */
    select?: FrontendPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FrontendPrompt
     */
    omit?: FrontendPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrontendPromptInclude<ExtArgs> | null
    /**
     * The filter to search for the FrontendPrompt to update in case it exists.
     */
    where: FrontendPromptWhereUniqueInput
    /**
     * In case the FrontendPrompt found by the `where` argument doesn't exist, create a new FrontendPrompt with this data.
     */
    create: XOR<FrontendPromptCreateInput, FrontendPromptUncheckedCreateInput>
    /**
     * In case the FrontendPrompt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FrontendPromptUpdateInput, FrontendPromptUncheckedUpdateInput>
  }

  /**
   * FrontendPrompt delete
   */
  export type FrontendPromptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrontendPrompt
     */
    select?: FrontendPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FrontendPrompt
     */
    omit?: FrontendPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrontendPromptInclude<ExtArgs> | null
    /**
     * Filter which FrontendPrompt to delete.
     */
    where: FrontendPromptWhereUniqueInput
  }

  /**
   * FrontendPrompt deleteMany
   */
  export type FrontendPromptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FrontendPrompts to delete
     */
    where?: FrontendPromptWhereInput
    /**
     * Limit how many FrontendPrompts to delete.
     */
    limit?: number
  }

  /**
   * FrontendPrompt without action
   */
  export type FrontendPromptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FrontendPrompt
     */
    select?: FrontendPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FrontendPrompt
     */
    omit?: FrontendPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FrontendPromptInclude<ExtArgs> | null
  }


  /**
   * Model BackendPrompt
   */

  export type AggregateBackendPrompt = {
    _count: BackendPromptCountAggregateOutputType | null
    _min: BackendPromptMinAggregateOutputType | null
    _max: BackendPromptMaxAggregateOutputType | null
  }

  export type BackendPromptMinAggregateOutputType = {
    id: string | null
    prompt: string | null
    responseContent: string | null
    type: $Enums.BackendPromptType | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: string | null
  }

  export type BackendPromptMaxAggregateOutputType = {
    id: string | null
    prompt: string | null
    responseContent: string | null
    type: $Enums.BackendPromptType | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: string | null
  }

  export type BackendPromptCountAggregateOutputType = {
    id: number
    prompt: number
    managerPrompt: number
    responseContent: number
    type: number
    createdAt: number
    updatedAt: number
    projectId: number
    _all: number
  }


  export type BackendPromptMinAggregateInputType = {
    id?: true
    prompt?: true
    responseContent?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
  }

  export type BackendPromptMaxAggregateInputType = {
    id?: true
    prompt?: true
    responseContent?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
  }

  export type BackendPromptCountAggregateInputType = {
    id?: true
    prompt?: true
    managerPrompt?: true
    responseContent?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
    _all?: true
  }

  export type BackendPromptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BackendPrompt to aggregate.
     */
    where?: BackendPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BackendPrompts to fetch.
     */
    orderBy?: BackendPromptOrderByWithRelationInput | BackendPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BackendPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BackendPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BackendPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BackendPrompts
    **/
    _count?: true | BackendPromptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BackendPromptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BackendPromptMaxAggregateInputType
  }

  export type GetBackendPromptAggregateType<T extends BackendPromptAggregateArgs> = {
        [P in keyof T & keyof AggregateBackendPrompt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBackendPrompt[P]>
      : GetScalarType<T[P], AggregateBackendPrompt[P]>
  }




  export type BackendPromptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BackendPromptWhereInput
    orderBy?: BackendPromptOrderByWithAggregationInput | BackendPromptOrderByWithAggregationInput[]
    by: BackendPromptScalarFieldEnum[] | BackendPromptScalarFieldEnum
    having?: BackendPromptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BackendPromptCountAggregateInputType | true
    _min?: BackendPromptMinAggregateInputType
    _max?: BackendPromptMaxAggregateInputType
  }

  export type BackendPromptGroupByOutputType = {
    id: string
    prompt: string | null
    managerPrompt: JsonValue | null
    responseContent: string | null
    type: $Enums.BackendPromptType
    createdAt: Date
    updatedAt: Date
    projectId: string
    _count: BackendPromptCountAggregateOutputType | null
    _min: BackendPromptMinAggregateOutputType | null
    _max: BackendPromptMaxAggregateOutputType | null
  }

  type GetBackendPromptGroupByPayload<T extends BackendPromptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BackendPromptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BackendPromptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BackendPromptGroupByOutputType[P]>
            : GetScalarType<T[P], BackendPromptGroupByOutputType[P]>
        }
      >
    >


  export type BackendPromptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    managerPrompt?: boolean
    responseContent?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["backendPrompt"]>

  export type BackendPromptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    managerPrompt?: boolean
    responseContent?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["backendPrompt"]>

  export type BackendPromptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    managerPrompt?: boolean
    responseContent?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["backendPrompt"]>

  export type BackendPromptSelectScalar = {
    id?: boolean
    prompt?: boolean
    managerPrompt?: boolean
    responseContent?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
  }

  export type BackendPromptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prompt" | "managerPrompt" | "responseContent" | "type" | "createdAt" | "updatedAt" | "projectId", ExtArgs["result"]["backendPrompt"]>
  export type BackendPromptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type BackendPromptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type BackendPromptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $BackendPromptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BackendPrompt"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      prompt: string | null
      managerPrompt: Prisma.JsonValue | null
      responseContent: string | null
      type: $Enums.BackendPromptType
      createdAt: Date
      updatedAt: Date
      projectId: string
    }, ExtArgs["result"]["backendPrompt"]>
    composites: {}
  }

  type BackendPromptGetPayload<S extends boolean | null | undefined | BackendPromptDefaultArgs> = $Result.GetResult<Prisma.$BackendPromptPayload, S>

  type BackendPromptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BackendPromptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BackendPromptCountAggregateInputType | true
    }

  export interface BackendPromptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BackendPrompt'], meta: { name: 'BackendPrompt' } }
    /**
     * Find zero or one BackendPrompt that matches the filter.
     * @param {BackendPromptFindUniqueArgs} args - Arguments to find a BackendPrompt
     * @example
     * // Get one BackendPrompt
     * const backendPrompt = await prisma.backendPrompt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BackendPromptFindUniqueArgs>(args: SelectSubset<T, BackendPromptFindUniqueArgs<ExtArgs>>): Prisma__BackendPromptClient<$Result.GetResult<Prisma.$BackendPromptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BackendPrompt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BackendPromptFindUniqueOrThrowArgs} args - Arguments to find a BackendPrompt
     * @example
     * // Get one BackendPrompt
     * const backendPrompt = await prisma.backendPrompt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BackendPromptFindUniqueOrThrowArgs>(args: SelectSubset<T, BackendPromptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BackendPromptClient<$Result.GetResult<Prisma.$BackendPromptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BackendPrompt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackendPromptFindFirstArgs} args - Arguments to find a BackendPrompt
     * @example
     * // Get one BackendPrompt
     * const backendPrompt = await prisma.backendPrompt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BackendPromptFindFirstArgs>(args?: SelectSubset<T, BackendPromptFindFirstArgs<ExtArgs>>): Prisma__BackendPromptClient<$Result.GetResult<Prisma.$BackendPromptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BackendPrompt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackendPromptFindFirstOrThrowArgs} args - Arguments to find a BackendPrompt
     * @example
     * // Get one BackendPrompt
     * const backendPrompt = await prisma.backendPrompt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BackendPromptFindFirstOrThrowArgs>(args?: SelectSubset<T, BackendPromptFindFirstOrThrowArgs<ExtArgs>>): Prisma__BackendPromptClient<$Result.GetResult<Prisma.$BackendPromptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BackendPrompts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackendPromptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BackendPrompts
     * const backendPrompts = await prisma.backendPrompt.findMany()
     * 
     * // Get first 10 BackendPrompts
     * const backendPrompts = await prisma.backendPrompt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const backendPromptWithIdOnly = await prisma.backendPrompt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BackendPromptFindManyArgs>(args?: SelectSubset<T, BackendPromptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BackendPromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BackendPrompt.
     * @param {BackendPromptCreateArgs} args - Arguments to create a BackendPrompt.
     * @example
     * // Create one BackendPrompt
     * const BackendPrompt = await prisma.backendPrompt.create({
     *   data: {
     *     // ... data to create a BackendPrompt
     *   }
     * })
     * 
     */
    create<T extends BackendPromptCreateArgs>(args: SelectSubset<T, BackendPromptCreateArgs<ExtArgs>>): Prisma__BackendPromptClient<$Result.GetResult<Prisma.$BackendPromptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BackendPrompts.
     * @param {BackendPromptCreateManyArgs} args - Arguments to create many BackendPrompts.
     * @example
     * // Create many BackendPrompts
     * const backendPrompt = await prisma.backendPrompt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BackendPromptCreateManyArgs>(args?: SelectSubset<T, BackendPromptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BackendPrompts and returns the data saved in the database.
     * @param {BackendPromptCreateManyAndReturnArgs} args - Arguments to create many BackendPrompts.
     * @example
     * // Create many BackendPrompts
     * const backendPrompt = await prisma.backendPrompt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BackendPrompts and only return the `id`
     * const backendPromptWithIdOnly = await prisma.backendPrompt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BackendPromptCreateManyAndReturnArgs>(args?: SelectSubset<T, BackendPromptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BackendPromptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BackendPrompt.
     * @param {BackendPromptDeleteArgs} args - Arguments to delete one BackendPrompt.
     * @example
     * // Delete one BackendPrompt
     * const BackendPrompt = await prisma.backendPrompt.delete({
     *   where: {
     *     // ... filter to delete one BackendPrompt
     *   }
     * })
     * 
     */
    delete<T extends BackendPromptDeleteArgs>(args: SelectSubset<T, BackendPromptDeleteArgs<ExtArgs>>): Prisma__BackendPromptClient<$Result.GetResult<Prisma.$BackendPromptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BackendPrompt.
     * @param {BackendPromptUpdateArgs} args - Arguments to update one BackendPrompt.
     * @example
     * // Update one BackendPrompt
     * const backendPrompt = await prisma.backendPrompt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BackendPromptUpdateArgs>(args: SelectSubset<T, BackendPromptUpdateArgs<ExtArgs>>): Prisma__BackendPromptClient<$Result.GetResult<Prisma.$BackendPromptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BackendPrompts.
     * @param {BackendPromptDeleteManyArgs} args - Arguments to filter BackendPrompts to delete.
     * @example
     * // Delete a few BackendPrompts
     * const { count } = await prisma.backendPrompt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BackendPromptDeleteManyArgs>(args?: SelectSubset<T, BackendPromptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BackendPrompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackendPromptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BackendPrompts
     * const backendPrompt = await prisma.backendPrompt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BackendPromptUpdateManyArgs>(args: SelectSubset<T, BackendPromptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BackendPrompts and returns the data updated in the database.
     * @param {BackendPromptUpdateManyAndReturnArgs} args - Arguments to update many BackendPrompts.
     * @example
     * // Update many BackendPrompts
     * const backendPrompt = await prisma.backendPrompt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BackendPrompts and only return the `id`
     * const backendPromptWithIdOnly = await prisma.backendPrompt.updateManyAndReturn({
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
    updateManyAndReturn<T extends BackendPromptUpdateManyAndReturnArgs>(args: SelectSubset<T, BackendPromptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BackendPromptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BackendPrompt.
     * @param {BackendPromptUpsertArgs} args - Arguments to update or create a BackendPrompt.
     * @example
     * // Update or create a BackendPrompt
     * const backendPrompt = await prisma.backendPrompt.upsert({
     *   create: {
     *     // ... data to create a BackendPrompt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BackendPrompt we want to update
     *   }
     * })
     */
    upsert<T extends BackendPromptUpsertArgs>(args: SelectSubset<T, BackendPromptUpsertArgs<ExtArgs>>): Prisma__BackendPromptClient<$Result.GetResult<Prisma.$BackendPromptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BackendPrompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackendPromptCountArgs} args - Arguments to filter BackendPrompts to count.
     * @example
     * // Count the number of BackendPrompts
     * const count = await prisma.backendPrompt.count({
     *   where: {
     *     // ... the filter for the BackendPrompts we want to count
     *   }
     * })
    **/
    count<T extends BackendPromptCountArgs>(
      args?: Subset<T, BackendPromptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BackendPromptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BackendPrompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackendPromptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BackendPromptAggregateArgs>(args: Subset<T, BackendPromptAggregateArgs>): Prisma.PrismaPromise<GetBackendPromptAggregateType<T>>

    /**
     * Group by BackendPrompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BackendPromptGroupByArgs} args - Group by arguments.
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
      T extends BackendPromptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BackendPromptGroupByArgs['orderBy'] }
        : { orderBy?: BackendPromptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BackendPromptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBackendPromptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BackendPrompt model
   */
  readonly fields: BackendPromptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BackendPrompt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BackendPromptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BackendPrompt model
   */
  interface BackendPromptFieldRefs {
    readonly id: FieldRef<"BackendPrompt", 'String'>
    readonly prompt: FieldRef<"BackendPrompt", 'String'>
    readonly managerPrompt: FieldRef<"BackendPrompt", 'Json'>
    readonly responseContent: FieldRef<"BackendPrompt", 'String'>
    readonly type: FieldRef<"BackendPrompt", 'BackendPromptType'>
    readonly createdAt: FieldRef<"BackendPrompt", 'DateTime'>
    readonly updatedAt: FieldRef<"BackendPrompt", 'DateTime'>
    readonly projectId: FieldRef<"BackendPrompt", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BackendPrompt findUnique
   */
  export type BackendPromptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackendPrompt
     */
    select?: BackendPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BackendPrompt
     */
    omit?: BackendPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackendPromptInclude<ExtArgs> | null
    /**
     * Filter, which BackendPrompt to fetch.
     */
    where: BackendPromptWhereUniqueInput
  }

  /**
   * BackendPrompt findUniqueOrThrow
   */
  export type BackendPromptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackendPrompt
     */
    select?: BackendPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BackendPrompt
     */
    omit?: BackendPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackendPromptInclude<ExtArgs> | null
    /**
     * Filter, which BackendPrompt to fetch.
     */
    where: BackendPromptWhereUniqueInput
  }

  /**
   * BackendPrompt findFirst
   */
  export type BackendPromptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackendPrompt
     */
    select?: BackendPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BackendPrompt
     */
    omit?: BackendPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackendPromptInclude<ExtArgs> | null
    /**
     * Filter, which BackendPrompt to fetch.
     */
    where?: BackendPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BackendPrompts to fetch.
     */
    orderBy?: BackendPromptOrderByWithRelationInput | BackendPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BackendPrompts.
     */
    cursor?: BackendPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BackendPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BackendPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BackendPrompts.
     */
    distinct?: BackendPromptScalarFieldEnum | BackendPromptScalarFieldEnum[]
  }

  /**
   * BackendPrompt findFirstOrThrow
   */
  export type BackendPromptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackendPrompt
     */
    select?: BackendPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BackendPrompt
     */
    omit?: BackendPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackendPromptInclude<ExtArgs> | null
    /**
     * Filter, which BackendPrompt to fetch.
     */
    where?: BackendPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BackendPrompts to fetch.
     */
    orderBy?: BackendPromptOrderByWithRelationInput | BackendPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BackendPrompts.
     */
    cursor?: BackendPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BackendPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BackendPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BackendPrompts.
     */
    distinct?: BackendPromptScalarFieldEnum | BackendPromptScalarFieldEnum[]
  }

  /**
   * BackendPrompt findMany
   */
  export type BackendPromptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackendPrompt
     */
    select?: BackendPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BackendPrompt
     */
    omit?: BackendPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackendPromptInclude<ExtArgs> | null
    /**
     * Filter, which BackendPrompts to fetch.
     */
    where?: BackendPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BackendPrompts to fetch.
     */
    orderBy?: BackendPromptOrderByWithRelationInput | BackendPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BackendPrompts.
     */
    cursor?: BackendPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BackendPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BackendPrompts.
     */
    skip?: number
    distinct?: BackendPromptScalarFieldEnum | BackendPromptScalarFieldEnum[]
  }

  /**
   * BackendPrompt create
   */
  export type BackendPromptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackendPrompt
     */
    select?: BackendPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BackendPrompt
     */
    omit?: BackendPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackendPromptInclude<ExtArgs> | null
    /**
     * The data needed to create a BackendPrompt.
     */
    data: XOR<BackendPromptCreateInput, BackendPromptUncheckedCreateInput>
  }

  /**
   * BackendPrompt createMany
   */
  export type BackendPromptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BackendPrompts.
     */
    data: BackendPromptCreateManyInput | BackendPromptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BackendPrompt createManyAndReturn
   */
  export type BackendPromptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackendPrompt
     */
    select?: BackendPromptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BackendPrompt
     */
    omit?: BackendPromptOmit<ExtArgs> | null
    /**
     * The data used to create many BackendPrompts.
     */
    data: BackendPromptCreateManyInput | BackendPromptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackendPromptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BackendPrompt update
   */
  export type BackendPromptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackendPrompt
     */
    select?: BackendPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BackendPrompt
     */
    omit?: BackendPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackendPromptInclude<ExtArgs> | null
    /**
     * The data needed to update a BackendPrompt.
     */
    data: XOR<BackendPromptUpdateInput, BackendPromptUncheckedUpdateInput>
    /**
     * Choose, which BackendPrompt to update.
     */
    where: BackendPromptWhereUniqueInput
  }

  /**
   * BackendPrompt updateMany
   */
  export type BackendPromptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BackendPrompts.
     */
    data: XOR<BackendPromptUpdateManyMutationInput, BackendPromptUncheckedUpdateManyInput>
    /**
     * Filter which BackendPrompts to update
     */
    where?: BackendPromptWhereInput
    /**
     * Limit how many BackendPrompts to update.
     */
    limit?: number
  }

  /**
   * BackendPrompt updateManyAndReturn
   */
  export type BackendPromptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackendPrompt
     */
    select?: BackendPromptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BackendPrompt
     */
    omit?: BackendPromptOmit<ExtArgs> | null
    /**
     * The data used to update BackendPrompts.
     */
    data: XOR<BackendPromptUpdateManyMutationInput, BackendPromptUncheckedUpdateManyInput>
    /**
     * Filter which BackendPrompts to update
     */
    where?: BackendPromptWhereInput
    /**
     * Limit how many BackendPrompts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackendPromptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BackendPrompt upsert
   */
  export type BackendPromptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackendPrompt
     */
    select?: BackendPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BackendPrompt
     */
    omit?: BackendPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackendPromptInclude<ExtArgs> | null
    /**
     * The filter to search for the BackendPrompt to update in case it exists.
     */
    where: BackendPromptWhereUniqueInput
    /**
     * In case the BackendPrompt found by the `where` argument doesn't exist, create a new BackendPrompt with this data.
     */
    create: XOR<BackendPromptCreateInput, BackendPromptUncheckedCreateInput>
    /**
     * In case the BackendPrompt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BackendPromptUpdateInput, BackendPromptUncheckedUpdateInput>
  }

  /**
   * BackendPrompt delete
   */
  export type BackendPromptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackendPrompt
     */
    select?: BackendPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BackendPrompt
     */
    omit?: BackendPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackendPromptInclude<ExtArgs> | null
    /**
     * Filter which BackendPrompt to delete.
     */
    where: BackendPromptWhereUniqueInput
  }

  /**
   * BackendPrompt deleteMany
   */
  export type BackendPromptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BackendPrompts to delete
     */
    where?: BackendPromptWhereInput
    /**
     * Limit how many BackendPrompts to delete.
     */
    limit?: number
  }

  /**
   * BackendPrompt without action
   */
  export type BackendPromptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BackendPrompt
     */
    select?: BackendPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BackendPrompt
     */
    omit?: BackendPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BackendPromptInclude<ExtArgs> | null
  }


  /**
   * Model QAPrompt
   */

  export type AggregateQAPrompt = {
    _count: QAPromptCountAggregateOutputType | null
    _min: QAPromptMinAggregateOutputType | null
    _max: QAPromptMaxAggregateOutputType | null
  }

  export type QAPromptMinAggregateOutputType = {
    id: string | null
    prompt: string | null
    responseContent: string | null
    type: $Enums.QAPromptType | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: string | null
  }

  export type QAPromptMaxAggregateOutputType = {
    id: string | null
    prompt: string | null
    responseContent: string | null
    type: $Enums.QAPromptType | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: string | null
  }

  export type QAPromptCountAggregateOutputType = {
    id: number
    prompt: number
    content: number
    responseContent: number
    type: number
    createdAt: number
    updatedAt: number
    projectId: number
    _all: number
  }


  export type QAPromptMinAggregateInputType = {
    id?: true
    prompt?: true
    responseContent?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
  }

  export type QAPromptMaxAggregateInputType = {
    id?: true
    prompt?: true
    responseContent?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
  }

  export type QAPromptCountAggregateInputType = {
    id?: true
    prompt?: true
    content?: true
    responseContent?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
    _all?: true
  }

  export type QAPromptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QAPrompt to aggregate.
     */
    where?: QAPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QAPrompts to fetch.
     */
    orderBy?: QAPromptOrderByWithRelationInput | QAPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QAPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QAPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QAPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QAPrompts
    **/
    _count?: true | QAPromptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QAPromptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QAPromptMaxAggregateInputType
  }

  export type GetQAPromptAggregateType<T extends QAPromptAggregateArgs> = {
        [P in keyof T & keyof AggregateQAPrompt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQAPrompt[P]>
      : GetScalarType<T[P], AggregateQAPrompt[P]>
  }




  export type QAPromptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QAPromptWhereInput
    orderBy?: QAPromptOrderByWithAggregationInput | QAPromptOrderByWithAggregationInput[]
    by: QAPromptScalarFieldEnum[] | QAPromptScalarFieldEnum
    having?: QAPromptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QAPromptCountAggregateInputType | true
    _min?: QAPromptMinAggregateInputType
    _max?: QAPromptMaxAggregateInputType
  }

  export type QAPromptGroupByOutputType = {
    id: string
    prompt: string | null
    content: JsonValue | null
    responseContent: string | null
    type: $Enums.QAPromptType
    createdAt: Date
    updatedAt: Date
    projectId: string
    _count: QAPromptCountAggregateOutputType | null
    _min: QAPromptMinAggregateOutputType | null
    _max: QAPromptMaxAggregateOutputType | null
  }

  type GetQAPromptGroupByPayload<T extends QAPromptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QAPromptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QAPromptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QAPromptGroupByOutputType[P]>
            : GetScalarType<T[P], QAPromptGroupByOutputType[P]>
        }
      >
    >


  export type QAPromptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    content?: boolean
    responseContent?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qAPrompt"]>

  export type QAPromptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    content?: boolean
    responseContent?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qAPrompt"]>

  export type QAPromptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    content?: boolean
    responseContent?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qAPrompt"]>

  export type QAPromptSelectScalar = {
    id?: boolean
    prompt?: boolean
    content?: boolean
    responseContent?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
  }

  export type QAPromptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prompt" | "content" | "responseContent" | "type" | "createdAt" | "updatedAt" | "projectId", ExtArgs["result"]["qAPrompt"]>
  export type QAPromptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type QAPromptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type QAPromptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $QAPromptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QAPrompt"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      prompt: string | null
      content: Prisma.JsonValue | null
      responseContent: string | null
      type: $Enums.QAPromptType
      createdAt: Date
      updatedAt: Date
      projectId: string
    }, ExtArgs["result"]["qAPrompt"]>
    composites: {}
  }

  type QAPromptGetPayload<S extends boolean | null | undefined | QAPromptDefaultArgs> = $Result.GetResult<Prisma.$QAPromptPayload, S>

  type QAPromptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QAPromptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QAPromptCountAggregateInputType | true
    }

  export interface QAPromptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QAPrompt'], meta: { name: 'QAPrompt' } }
    /**
     * Find zero or one QAPrompt that matches the filter.
     * @param {QAPromptFindUniqueArgs} args - Arguments to find a QAPrompt
     * @example
     * // Get one QAPrompt
     * const qAPrompt = await prisma.qAPrompt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QAPromptFindUniqueArgs>(args: SelectSubset<T, QAPromptFindUniqueArgs<ExtArgs>>): Prisma__QAPromptClient<$Result.GetResult<Prisma.$QAPromptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QAPrompt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QAPromptFindUniqueOrThrowArgs} args - Arguments to find a QAPrompt
     * @example
     * // Get one QAPrompt
     * const qAPrompt = await prisma.qAPrompt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QAPromptFindUniqueOrThrowArgs>(args: SelectSubset<T, QAPromptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QAPromptClient<$Result.GetResult<Prisma.$QAPromptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QAPrompt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QAPromptFindFirstArgs} args - Arguments to find a QAPrompt
     * @example
     * // Get one QAPrompt
     * const qAPrompt = await prisma.qAPrompt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QAPromptFindFirstArgs>(args?: SelectSubset<T, QAPromptFindFirstArgs<ExtArgs>>): Prisma__QAPromptClient<$Result.GetResult<Prisma.$QAPromptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QAPrompt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QAPromptFindFirstOrThrowArgs} args - Arguments to find a QAPrompt
     * @example
     * // Get one QAPrompt
     * const qAPrompt = await prisma.qAPrompt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QAPromptFindFirstOrThrowArgs>(args?: SelectSubset<T, QAPromptFindFirstOrThrowArgs<ExtArgs>>): Prisma__QAPromptClient<$Result.GetResult<Prisma.$QAPromptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QAPrompts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QAPromptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QAPrompts
     * const qAPrompts = await prisma.qAPrompt.findMany()
     * 
     * // Get first 10 QAPrompts
     * const qAPrompts = await prisma.qAPrompt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qAPromptWithIdOnly = await prisma.qAPrompt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QAPromptFindManyArgs>(args?: SelectSubset<T, QAPromptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QAPromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QAPrompt.
     * @param {QAPromptCreateArgs} args - Arguments to create a QAPrompt.
     * @example
     * // Create one QAPrompt
     * const QAPrompt = await prisma.qAPrompt.create({
     *   data: {
     *     // ... data to create a QAPrompt
     *   }
     * })
     * 
     */
    create<T extends QAPromptCreateArgs>(args: SelectSubset<T, QAPromptCreateArgs<ExtArgs>>): Prisma__QAPromptClient<$Result.GetResult<Prisma.$QAPromptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QAPrompts.
     * @param {QAPromptCreateManyArgs} args - Arguments to create many QAPrompts.
     * @example
     * // Create many QAPrompts
     * const qAPrompt = await prisma.qAPrompt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QAPromptCreateManyArgs>(args?: SelectSubset<T, QAPromptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QAPrompts and returns the data saved in the database.
     * @param {QAPromptCreateManyAndReturnArgs} args - Arguments to create many QAPrompts.
     * @example
     * // Create many QAPrompts
     * const qAPrompt = await prisma.qAPrompt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QAPrompts and only return the `id`
     * const qAPromptWithIdOnly = await prisma.qAPrompt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QAPromptCreateManyAndReturnArgs>(args?: SelectSubset<T, QAPromptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QAPromptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QAPrompt.
     * @param {QAPromptDeleteArgs} args - Arguments to delete one QAPrompt.
     * @example
     * // Delete one QAPrompt
     * const QAPrompt = await prisma.qAPrompt.delete({
     *   where: {
     *     // ... filter to delete one QAPrompt
     *   }
     * })
     * 
     */
    delete<T extends QAPromptDeleteArgs>(args: SelectSubset<T, QAPromptDeleteArgs<ExtArgs>>): Prisma__QAPromptClient<$Result.GetResult<Prisma.$QAPromptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QAPrompt.
     * @param {QAPromptUpdateArgs} args - Arguments to update one QAPrompt.
     * @example
     * // Update one QAPrompt
     * const qAPrompt = await prisma.qAPrompt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QAPromptUpdateArgs>(args: SelectSubset<T, QAPromptUpdateArgs<ExtArgs>>): Prisma__QAPromptClient<$Result.GetResult<Prisma.$QAPromptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QAPrompts.
     * @param {QAPromptDeleteManyArgs} args - Arguments to filter QAPrompts to delete.
     * @example
     * // Delete a few QAPrompts
     * const { count } = await prisma.qAPrompt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QAPromptDeleteManyArgs>(args?: SelectSubset<T, QAPromptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QAPrompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QAPromptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QAPrompts
     * const qAPrompt = await prisma.qAPrompt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QAPromptUpdateManyArgs>(args: SelectSubset<T, QAPromptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QAPrompts and returns the data updated in the database.
     * @param {QAPromptUpdateManyAndReturnArgs} args - Arguments to update many QAPrompts.
     * @example
     * // Update many QAPrompts
     * const qAPrompt = await prisma.qAPrompt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QAPrompts and only return the `id`
     * const qAPromptWithIdOnly = await prisma.qAPrompt.updateManyAndReturn({
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
    updateManyAndReturn<T extends QAPromptUpdateManyAndReturnArgs>(args: SelectSubset<T, QAPromptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QAPromptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QAPrompt.
     * @param {QAPromptUpsertArgs} args - Arguments to update or create a QAPrompt.
     * @example
     * // Update or create a QAPrompt
     * const qAPrompt = await prisma.qAPrompt.upsert({
     *   create: {
     *     // ... data to create a QAPrompt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QAPrompt we want to update
     *   }
     * })
     */
    upsert<T extends QAPromptUpsertArgs>(args: SelectSubset<T, QAPromptUpsertArgs<ExtArgs>>): Prisma__QAPromptClient<$Result.GetResult<Prisma.$QAPromptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QAPrompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QAPromptCountArgs} args - Arguments to filter QAPrompts to count.
     * @example
     * // Count the number of QAPrompts
     * const count = await prisma.qAPrompt.count({
     *   where: {
     *     // ... the filter for the QAPrompts we want to count
     *   }
     * })
    **/
    count<T extends QAPromptCountArgs>(
      args?: Subset<T, QAPromptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QAPromptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QAPrompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QAPromptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QAPromptAggregateArgs>(args: Subset<T, QAPromptAggregateArgs>): Prisma.PrismaPromise<GetQAPromptAggregateType<T>>

    /**
     * Group by QAPrompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QAPromptGroupByArgs} args - Group by arguments.
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
      T extends QAPromptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QAPromptGroupByArgs['orderBy'] }
        : { orderBy?: QAPromptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QAPromptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQAPromptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QAPrompt model
   */
  readonly fields: QAPromptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QAPrompt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QAPromptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QAPrompt model
   */
  interface QAPromptFieldRefs {
    readonly id: FieldRef<"QAPrompt", 'String'>
    readonly prompt: FieldRef<"QAPrompt", 'String'>
    readonly content: FieldRef<"QAPrompt", 'Json'>
    readonly responseContent: FieldRef<"QAPrompt", 'String'>
    readonly type: FieldRef<"QAPrompt", 'QAPromptType'>
    readonly createdAt: FieldRef<"QAPrompt", 'DateTime'>
    readonly updatedAt: FieldRef<"QAPrompt", 'DateTime'>
    readonly projectId: FieldRef<"QAPrompt", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QAPrompt findUnique
   */
  export type QAPromptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QAPrompt
     */
    select?: QAPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QAPrompt
     */
    omit?: QAPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAPromptInclude<ExtArgs> | null
    /**
     * Filter, which QAPrompt to fetch.
     */
    where: QAPromptWhereUniqueInput
  }

  /**
   * QAPrompt findUniqueOrThrow
   */
  export type QAPromptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QAPrompt
     */
    select?: QAPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QAPrompt
     */
    omit?: QAPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAPromptInclude<ExtArgs> | null
    /**
     * Filter, which QAPrompt to fetch.
     */
    where: QAPromptWhereUniqueInput
  }

  /**
   * QAPrompt findFirst
   */
  export type QAPromptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QAPrompt
     */
    select?: QAPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QAPrompt
     */
    omit?: QAPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAPromptInclude<ExtArgs> | null
    /**
     * Filter, which QAPrompt to fetch.
     */
    where?: QAPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QAPrompts to fetch.
     */
    orderBy?: QAPromptOrderByWithRelationInput | QAPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QAPrompts.
     */
    cursor?: QAPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QAPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QAPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QAPrompts.
     */
    distinct?: QAPromptScalarFieldEnum | QAPromptScalarFieldEnum[]
  }

  /**
   * QAPrompt findFirstOrThrow
   */
  export type QAPromptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QAPrompt
     */
    select?: QAPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QAPrompt
     */
    omit?: QAPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAPromptInclude<ExtArgs> | null
    /**
     * Filter, which QAPrompt to fetch.
     */
    where?: QAPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QAPrompts to fetch.
     */
    orderBy?: QAPromptOrderByWithRelationInput | QAPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QAPrompts.
     */
    cursor?: QAPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QAPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QAPrompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QAPrompts.
     */
    distinct?: QAPromptScalarFieldEnum | QAPromptScalarFieldEnum[]
  }

  /**
   * QAPrompt findMany
   */
  export type QAPromptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QAPrompt
     */
    select?: QAPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QAPrompt
     */
    omit?: QAPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAPromptInclude<ExtArgs> | null
    /**
     * Filter, which QAPrompts to fetch.
     */
    where?: QAPromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QAPrompts to fetch.
     */
    orderBy?: QAPromptOrderByWithRelationInput | QAPromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QAPrompts.
     */
    cursor?: QAPromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QAPrompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QAPrompts.
     */
    skip?: number
    distinct?: QAPromptScalarFieldEnum | QAPromptScalarFieldEnum[]
  }

  /**
   * QAPrompt create
   */
  export type QAPromptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QAPrompt
     */
    select?: QAPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QAPrompt
     */
    omit?: QAPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAPromptInclude<ExtArgs> | null
    /**
     * The data needed to create a QAPrompt.
     */
    data: XOR<QAPromptCreateInput, QAPromptUncheckedCreateInput>
  }

  /**
   * QAPrompt createMany
   */
  export type QAPromptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QAPrompts.
     */
    data: QAPromptCreateManyInput | QAPromptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QAPrompt createManyAndReturn
   */
  export type QAPromptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QAPrompt
     */
    select?: QAPromptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QAPrompt
     */
    omit?: QAPromptOmit<ExtArgs> | null
    /**
     * The data used to create many QAPrompts.
     */
    data: QAPromptCreateManyInput | QAPromptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAPromptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QAPrompt update
   */
  export type QAPromptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QAPrompt
     */
    select?: QAPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QAPrompt
     */
    omit?: QAPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAPromptInclude<ExtArgs> | null
    /**
     * The data needed to update a QAPrompt.
     */
    data: XOR<QAPromptUpdateInput, QAPromptUncheckedUpdateInput>
    /**
     * Choose, which QAPrompt to update.
     */
    where: QAPromptWhereUniqueInput
  }

  /**
   * QAPrompt updateMany
   */
  export type QAPromptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QAPrompts.
     */
    data: XOR<QAPromptUpdateManyMutationInput, QAPromptUncheckedUpdateManyInput>
    /**
     * Filter which QAPrompts to update
     */
    where?: QAPromptWhereInput
    /**
     * Limit how many QAPrompts to update.
     */
    limit?: number
  }

  /**
   * QAPrompt updateManyAndReturn
   */
  export type QAPromptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QAPrompt
     */
    select?: QAPromptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QAPrompt
     */
    omit?: QAPromptOmit<ExtArgs> | null
    /**
     * The data used to update QAPrompts.
     */
    data: XOR<QAPromptUpdateManyMutationInput, QAPromptUncheckedUpdateManyInput>
    /**
     * Filter which QAPrompts to update
     */
    where?: QAPromptWhereInput
    /**
     * Limit how many QAPrompts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAPromptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QAPrompt upsert
   */
  export type QAPromptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QAPrompt
     */
    select?: QAPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QAPrompt
     */
    omit?: QAPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAPromptInclude<ExtArgs> | null
    /**
     * The filter to search for the QAPrompt to update in case it exists.
     */
    where: QAPromptWhereUniqueInput
    /**
     * In case the QAPrompt found by the `where` argument doesn't exist, create a new QAPrompt with this data.
     */
    create: XOR<QAPromptCreateInput, QAPromptUncheckedCreateInput>
    /**
     * In case the QAPrompt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QAPromptUpdateInput, QAPromptUncheckedUpdateInput>
  }

  /**
   * QAPrompt delete
   */
  export type QAPromptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QAPrompt
     */
    select?: QAPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QAPrompt
     */
    omit?: QAPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAPromptInclude<ExtArgs> | null
    /**
     * Filter which QAPrompt to delete.
     */
    where: QAPromptWhereUniqueInput
  }

  /**
   * QAPrompt deleteMany
   */
  export type QAPromptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QAPrompts to delete
     */
    where?: QAPromptWhereInput
    /**
     * Limit how many QAPrompts to delete.
     */
    limit?: number
  }

  /**
   * QAPrompt without action
   */
  export type QAPromptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QAPrompt
     */
    select?: QAPromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QAPrompt
     */
    omit?: QAPromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAPromptInclude<ExtArgs> | null
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


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ManagerResponseScalarFieldEnum: {
    id: 'id',
    content: 'content',
    prompt: 'prompt',
    type: 'type',
    frontendRoadMap: 'frontendRoadMap',
    backendRoadMap: 'backendRoadMap',
    qaRoadmap: 'qaRoadmap',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    projectId: 'projectId'
  };

  export type ManagerResponseScalarFieldEnum = (typeof ManagerResponseScalarFieldEnum)[keyof typeof ManagerResponseScalarFieldEnum]


  export const FrontendPromptScalarFieldEnum: {
    id: 'id',
    prompt: 'prompt',
    managerPrompt: 'managerPrompt',
    responseContent: 'responseContent',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    projectId: 'projectId'
  };

  export type FrontendPromptScalarFieldEnum = (typeof FrontendPromptScalarFieldEnum)[keyof typeof FrontendPromptScalarFieldEnum]


  export const BackendPromptScalarFieldEnum: {
    id: 'id',
    prompt: 'prompt',
    managerPrompt: 'managerPrompt',
    responseContent: 'responseContent',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    projectId: 'projectId'
  };

  export type BackendPromptScalarFieldEnum = (typeof BackendPromptScalarFieldEnum)[keyof typeof BackendPromptScalarFieldEnum]


  export const QAPromptScalarFieldEnum: {
    id: 'id',
    prompt: 'prompt',
    content: 'content',
    responseContent: 'responseContent',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    projectId: 'projectId'
  };

  export type QAPromptScalarFieldEnum = (typeof QAPromptScalarFieldEnum)[keyof typeof QAPromptScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ManagerPromptType'
   */
  export type EnumManagerPromptTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ManagerPromptType'>
    


  /**
   * Reference to a field of type 'ManagerPromptType[]'
   */
  export type ListEnumManagerPromptTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ManagerPromptType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'FrontendPromptType'
   */
  export type EnumFrontendPromptTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FrontendPromptType'>
    


  /**
   * Reference to a field of type 'FrontendPromptType[]'
   */
  export type ListEnumFrontendPromptTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FrontendPromptType[]'>
    


  /**
   * Reference to a field of type 'BackendPromptType'
   */
  export type EnumBackendPromptTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BackendPromptType'>
    


  /**
   * Reference to a field of type 'BackendPromptType[]'
   */
  export type ListEnumBackendPromptTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BackendPromptType[]'>
    


  /**
   * Reference to a field of type 'QAPromptType'
   */
  export type EnumQAPromptTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QAPromptType'>
    


  /**
   * Reference to a field of type 'QAPromptType[]'
   */
  export type ListEnumQAPromptTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QAPromptType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    status?: EnumStatusFilter<"Project"> | $Enums.Status
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    userId?: StringFilter<"Project"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    managerResponses?: ManagerResponseListRelationFilter
    frontendPrompts?: FrontendPromptListRelationFilter
    backendPrompts?: BackendPromptListRelationFilter
    qaPrompts?: QAPromptListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
    managerResponses?: ManagerResponseOrderByRelationAggregateInput
    frontendPrompts?: FrontendPromptOrderByRelationAggregateInput
    backendPrompts?: BackendPromptOrderByRelationAggregateInput
    qaPrompts?: QAPromptOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    status?: EnumStatusFilter<"Project"> | $Enums.Status
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    userId?: StringFilter<"Project"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    managerResponses?: ManagerResponseListRelationFilter
    frontendPrompts?: FrontendPromptListRelationFilter
    backendPrompts?: BackendPromptListRelationFilter
    qaPrompts?: QAPromptListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    status?: EnumStatusWithAggregatesFilter<"Project"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    userId?: StringWithAggregatesFilter<"Project"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Project?: ProjectListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Project?: ProjectOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Project?: ProjectListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ManagerResponseWhereInput = {
    AND?: ManagerResponseWhereInput | ManagerResponseWhereInput[]
    OR?: ManagerResponseWhereInput[]
    NOT?: ManagerResponseWhereInput | ManagerResponseWhereInput[]
    id?: StringFilter<"ManagerResponse"> | string
    content?: StringNullableFilter<"ManagerResponse"> | string | null
    prompt?: StringNullableFilter<"ManagerResponse"> | string | null
    type?: EnumManagerPromptTypeNullableFilter<"ManagerResponse"> | $Enums.ManagerPromptType | null
    frontendRoadMap?: JsonNullableFilter<"ManagerResponse">
    backendRoadMap?: JsonNullableFilter<"ManagerResponse">
    qaRoadmap?: JsonNullableFilter<"ManagerResponse">
    createdAt?: DateTimeFilter<"ManagerResponse"> | Date | string
    updatedAt?: DateTimeFilter<"ManagerResponse"> | Date | string
    projectId?: StringFilter<"ManagerResponse"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ManagerResponseOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrderInput | SortOrder
    prompt?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    frontendRoadMap?: SortOrderInput | SortOrder
    backendRoadMap?: SortOrderInput | SortOrder
    qaRoadmap?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ManagerResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ManagerResponseWhereInput | ManagerResponseWhereInput[]
    OR?: ManagerResponseWhereInput[]
    NOT?: ManagerResponseWhereInput | ManagerResponseWhereInput[]
    content?: StringNullableFilter<"ManagerResponse"> | string | null
    prompt?: StringNullableFilter<"ManagerResponse"> | string | null
    type?: EnumManagerPromptTypeNullableFilter<"ManagerResponse"> | $Enums.ManagerPromptType | null
    frontendRoadMap?: JsonNullableFilter<"ManagerResponse">
    backendRoadMap?: JsonNullableFilter<"ManagerResponse">
    qaRoadmap?: JsonNullableFilter<"ManagerResponse">
    createdAt?: DateTimeFilter<"ManagerResponse"> | Date | string
    updatedAt?: DateTimeFilter<"ManagerResponse"> | Date | string
    projectId?: StringFilter<"ManagerResponse"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type ManagerResponseOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrderInput | SortOrder
    prompt?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    frontendRoadMap?: SortOrderInput | SortOrder
    backendRoadMap?: SortOrderInput | SortOrder
    qaRoadmap?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    _count?: ManagerResponseCountOrderByAggregateInput
    _max?: ManagerResponseMaxOrderByAggregateInput
    _min?: ManagerResponseMinOrderByAggregateInput
  }

  export type ManagerResponseScalarWhereWithAggregatesInput = {
    AND?: ManagerResponseScalarWhereWithAggregatesInput | ManagerResponseScalarWhereWithAggregatesInput[]
    OR?: ManagerResponseScalarWhereWithAggregatesInput[]
    NOT?: ManagerResponseScalarWhereWithAggregatesInput | ManagerResponseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ManagerResponse"> | string
    content?: StringNullableWithAggregatesFilter<"ManagerResponse"> | string | null
    prompt?: StringNullableWithAggregatesFilter<"ManagerResponse"> | string | null
    type?: EnumManagerPromptTypeNullableWithAggregatesFilter<"ManagerResponse"> | $Enums.ManagerPromptType | null
    frontendRoadMap?: JsonNullableWithAggregatesFilter<"ManagerResponse">
    backendRoadMap?: JsonNullableWithAggregatesFilter<"ManagerResponse">
    qaRoadmap?: JsonNullableWithAggregatesFilter<"ManagerResponse">
    createdAt?: DateTimeWithAggregatesFilter<"ManagerResponse"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ManagerResponse"> | Date | string
    projectId?: StringWithAggregatesFilter<"ManagerResponse"> | string
  }

  export type FrontendPromptWhereInput = {
    AND?: FrontendPromptWhereInput | FrontendPromptWhereInput[]
    OR?: FrontendPromptWhereInput[]
    NOT?: FrontendPromptWhereInput | FrontendPromptWhereInput[]
    id?: StringFilter<"FrontendPrompt"> | string
    prompt?: StringNullableFilter<"FrontendPrompt"> | string | null
    managerPrompt?: JsonNullableFilter<"FrontendPrompt">
    responseContent?: StringNullableFilter<"FrontendPrompt"> | string | null
    type?: EnumFrontendPromptTypeFilter<"FrontendPrompt"> | $Enums.FrontendPromptType
    createdAt?: DateTimeFilter<"FrontendPrompt"> | Date | string
    updatedAt?: DateTimeFilter<"FrontendPrompt"> | Date | string
    projectId?: StringFilter<"FrontendPrompt"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type FrontendPromptOrderByWithRelationInput = {
    id?: SortOrder
    prompt?: SortOrderInput | SortOrder
    managerPrompt?: SortOrderInput | SortOrder
    responseContent?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type FrontendPromptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FrontendPromptWhereInput | FrontendPromptWhereInput[]
    OR?: FrontendPromptWhereInput[]
    NOT?: FrontendPromptWhereInput | FrontendPromptWhereInput[]
    prompt?: StringNullableFilter<"FrontendPrompt"> | string | null
    managerPrompt?: JsonNullableFilter<"FrontendPrompt">
    responseContent?: StringNullableFilter<"FrontendPrompt"> | string | null
    type?: EnumFrontendPromptTypeFilter<"FrontendPrompt"> | $Enums.FrontendPromptType
    createdAt?: DateTimeFilter<"FrontendPrompt"> | Date | string
    updatedAt?: DateTimeFilter<"FrontendPrompt"> | Date | string
    projectId?: StringFilter<"FrontendPrompt"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type FrontendPromptOrderByWithAggregationInput = {
    id?: SortOrder
    prompt?: SortOrderInput | SortOrder
    managerPrompt?: SortOrderInput | SortOrder
    responseContent?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    _count?: FrontendPromptCountOrderByAggregateInput
    _max?: FrontendPromptMaxOrderByAggregateInput
    _min?: FrontendPromptMinOrderByAggregateInput
  }

  export type FrontendPromptScalarWhereWithAggregatesInput = {
    AND?: FrontendPromptScalarWhereWithAggregatesInput | FrontendPromptScalarWhereWithAggregatesInput[]
    OR?: FrontendPromptScalarWhereWithAggregatesInput[]
    NOT?: FrontendPromptScalarWhereWithAggregatesInput | FrontendPromptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FrontendPrompt"> | string
    prompt?: StringNullableWithAggregatesFilter<"FrontendPrompt"> | string | null
    managerPrompt?: JsonNullableWithAggregatesFilter<"FrontendPrompt">
    responseContent?: StringNullableWithAggregatesFilter<"FrontendPrompt"> | string | null
    type?: EnumFrontendPromptTypeWithAggregatesFilter<"FrontendPrompt"> | $Enums.FrontendPromptType
    createdAt?: DateTimeWithAggregatesFilter<"FrontendPrompt"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FrontendPrompt"> | Date | string
    projectId?: StringWithAggregatesFilter<"FrontendPrompt"> | string
  }

  export type BackendPromptWhereInput = {
    AND?: BackendPromptWhereInput | BackendPromptWhereInput[]
    OR?: BackendPromptWhereInput[]
    NOT?: BackendPromptWhereInput | BackendPromptWhereInput[]
    id?: StringFilter<"BackendPrompt"> | string
    prompt?: StringNullableFilter<"BackendPrompt"> | string | null
    managerPrompt?: JsonNullableFilter<"BackendPrompt">
    responseContent?: StringNullableFilter<"BackendPrompt"> | string | null
    type?: EnumBackendPromptTypeFilter<"BackendPrompt"> | $Enums.BackendPromptType
    createdAt?: DateTimeFilter<"BackendPrompt"> | Date | string
    updatedAt?: DateTimeFilter<"BackendPrompt"> | Date | string
    projectId?: StringFilter<"BackendPrompt"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type BackendPromptOrderByWithRelationInput = {
    id?: SortOrder
    prompt?: SortOrderInput | SortOrder
    managerPrompt?: SortOrderInput | SortOrder
    responseContent?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type BackendPromptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BackendPromptWhereInput | BackendPromptWhereInput[]
    OR?: BackendPromptWhereInput[]
    NOT?: BackendPromptWhereInput | BackendPromptWhereInput[]
    prompt?: StringNullableFilter<"BackendPrompt"> | string | null
    managerPrompt?: JsonNullableFilter<"BackendPrompt">
    responseContent?: StringNullableFilter<"BackendPrompt"> | string | null
    type?: EnumBackendPromptTypeFilter<"BackendPrompt"> | $Enums.BackendPromptType
    createdAt?: DateTimeFilter<"BackendPrompt"> | Date | string
    updatedAt?: DateTimeFilter<"BackendPrompt"> | Date | string
    projectId?: StringFilter<"BackendPrompt"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type BackendPromptOrderByWithAggregationInput = {
    id?: SortOrder
    prompt?: SortOrderInput | SortOrder
    managerPrompt?: SortOrderInput | SortOrder
    responseContent?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    _count?: BackendPromptCountOrderByAggregateInput
    _max?: BackendPromptMaxOrderByAggregateInput
    _min?: BackendPromptMinOrderByAggregateInput
  }

  export type BackendPromptScalarWhereWithAggregatesInput = {
    AND?: BackendPromptScalarWhereWithAggregatesInput | BackendPromptScalarWhereWithAggregatesInput[]
    OR?: BackendPromptScalarWhereWithAggregatesInput[]
    NOT?: BackendPromptScalarWhereWithAggregatesInput | BackendPromptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BackendPrompt"> | string
    prompt?: StringNullableWithAggregatesFilter<"BackendPrompt"> | string | null
    managerPrompt?: JsonNullableWithAggregatesFilter<"BackendPrompt">
    responseContent?: StringNullableWithAggregatesFilter<"BackendPrompt"> | string | null
    type?: EnumBackendPromptTypeWithAggregatesFilter<"BackendPrompt"> | $Enums.BackendPromptType
    createdAt?: DateTimeWithAggregatesFilter<"BackendPrompt"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BackendPrompt"> | Date | string
    projectId?: StringWithAggregatesFilter<"BackendPrompt"> | string
  }

  export type QAPromptWhereInput = {
    AND?: QAPromptWhereInput | QAPromptWhereInput[]
    OR?: QAPromptWhereInput[]
    NOT?: QAPromptWhereInput | QAPromptWhereInput[]
    id?: StringFilter<"QAPrompt"> | string
    prompt?: StringNullableFilter<"QAPrompt"> | string | null
    content?: JsonNullableFilter<"QAPrompt">
    responseContent?: StringNullableFilter<"QAPrompt"> | string | null
    type?: EnumQAPromptTypeFilter<"QAPrompt"> | $Enums.QAPromptType
    createdAt?: DateTimeFilter<"QAPrompt"> | Date | string
    updatedAt?: DateTimeFilter<"QAPrompt"> | Date | string
    projectId?: StringFilter<"QAPrompt"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type QAPromptOrderByWithRelationInput = {
    id?: SortOrder
    prompt?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    responseContent?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type QAPromptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QAPromptWhereInput | QAPromptWhereInput[]
    OR?: QAPromptWhereInput[]
    NOT?: QAPromptWhereInput | QAPromptWhereInput[]
    prompt?: StringNullableFilter<"QAPrompt"> | string | null
    content?: JsonNullableFilter<"QAPrompt">
    responseContent?: StringNullableFilter<"QAPrompt"> | string | null
    type?: EnumQAPromptTypeFilter<"QAPrompt"> | $Enums.QAPromptType
    createdAt?: DateTimeFilter<"QAPrompt"> | Date | string
    updatedAt?: DateTimeFilter<"QAPrompt"> | Date | string
    projectId?: StringFilter<"QAPrompt"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type QAPromptOrderByWithAggregationInput = {
    id?: SortOrder
    prompt?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    responseContent?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    _count?: QAPromptCountOrderByAggregateInput
    _max?: QAPromptMaxOrderByAggregateInput
    _min?: QAPromptMinOrderByAggregateInput
  }

  export type QAPromptScalarWhereWithAggregatesInput = {
    AND?: QAPromptScalarWhereWithAggregatesInput | QAPromptScalarWhereWithAggregatesInput[]
    OR?: QAPromptScalarWhereWithAggregatesInput[]
    NOT?: QAPromptScalarWhereWithAggregatesInput | QAPromptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QAPrompt"> | string
    prompt?: StringNullableWithAggregatesFilter<"QAPrompt"> | string | null
    content?: JsonNullableWithAggregatesFilter<"QAPrompt">
    responseContent?: StringNullableWithAggregatesFilter<"QAPrompt"> | string | null
    type?: EnumQAPromptTypeWithAggregatesFilter<"QAPrompt"> | $Enums.QAPromptType
    createdAt?: DateTimeWithAggregatesFilter<"QAPrompt"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QAPrompt"> | Date | string
    projectId?: StringWithAggregatesFilter<"QAPrompt"> | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutProjectInput
    managerResponses?: ManagerResponseCreateNestedManyWithoutProjectInput
    frontendPrompts?: FrontendPromptCreateNestedManyWithoutProjectInput
    backendPrompts?: BackendPromptCreateNestedManyWithoutProjectInput
    qaPrompts?: QAPromptCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    managerResponses?: ManagerResponseUncheckedCreateNestedManyWithoutProjectInput
    frontendPrompts?: FrontendPromptUncheckedCreateNestedManyWithoutProjectInput
    backendPrompts?: BackendPromptUncheckedCreateNestedManyWithoutProjectInput
    qaPrompts?: QAPromptUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutProjectNestedInput
    managerResponses?: ManagerResponseUpdateManyWithoutProjectNestedInput
    frontendPrompts?: FrontendPromptUpdateManyWithoutProjectNestedInput
    backendPrompts?: BackendPromptUpdateManyWithoutProjectNestedInput
    qaPrompts?: QAPromptUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    managerResponses?: ManagerResponseUncheckedUpdateManyWithoutProjectNestedInput
    frontendPrompts?: FrontendPromptUncheckedUpdateManyWithoutProjectNestedInput
    backendPrompts?: BackendPromptUncheckedUpdateManyWithoutProjectNestedInput
    qaPrompts?: QAPromptUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Project?: ProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Project?: ProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Project?: ProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Project?: ProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagerResponseCreateInput = {
    id?: string
    content?: string | null
    prompt?: string | null
    type?: $Enums.ManagerPromptType | null
    frontendRoadMap?: NullableJsonNullValueInput | InputJsonValue
    backendRoadMap?: NullableJsonNullValueInput | InputJsonValue
    qaRoadmap?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutManagerResponsesInput
  }

  export type ManagerResponseUncheckedCreateInput = {
    id?: string
    content?: string | null
    prompt?: string | null
    type?: $Enums.ManagerPromptType | null
    frontendRoadMap?: NullableJsonNullValueInput | InputJsonValue
    backendRoadMap?: NullableJsonNullValueInput | InputJsonValue
    qaRoadmap?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
  }

  export type ManagerResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumManagerPromptTypeFieldUpdateOperationsInput | $Enums.ManagerPromptType | null
    frontendRoadMap?: NullableJsonNullValueInput | InputJsonValue
    backendRoadMap?: NullableJsonNullValueInput | InputJsonValue
    qaRoadmap?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutManagerResponsesNestedInput
  }

  export type ManagerResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumManagerPromptTypeFieldUpdateOperationsInput | $Enums.ManagerPromptType | null
    frontendRoadMap?: NullableJsonNullValueInput | InputJsonValue
    backendRoadMap?: NullableJsonNullValueInput | InputJsonValue
    qaRoadmap?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type ManagerResponseCreateManyInput = {
    id?: string
    content?: string | null
    prompt?: string | null
    type?: $Enums.ManagerPromptType | null
    frontendRoadMap?: NullableJsonNullValueInput | InputJsonValue
    backendRoadMap?: NullableJsonNullValueInput | InputJsonValue
    qaRoadmap?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
  }

  export type ManagerResponseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumManagerPromptTypeFieldUpdateOperationsInput | $Enums.ManagerPromptType | null
    frontendRoadMap?: NullableJsonNullValueInput | InputJsonValue
    backendRoadMap?: NullableJsonNullValueInput | InputJsonValue
    qaRoadmap?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagerResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumManagerPromptTypeFieldUpdateOperationsInput | $Enums.ManagerPromptType | null
    frontendRoadMap?: NullableJsonNullValueInput | InputJsonValue
    backendRoadMap?: NullableJsonNullValueInput | InputJsonValue
    qaRoadmap?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type FrontendPromptCreateInput = {
    id?: string
    prompt?: string | null
    managerPrompt?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: string | null
    type: $Enums.FrontendPromptType
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutFrontendPromptsInput
  }

  export type FrontendPromptUncheckedCreateInput = {
    id?: string
    prompt?: string | null
    managerPrompt?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: string | null
    type: $Enums.FrontendPromptType
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
  }

  export type FrontendPromptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    managerPrompt?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumFrontendPromptTypeFieldUpdateOperationsInput | $Enums.FrontendPromptType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutFrontendPromptsNestedInput
  }

  export type FrontendPromptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    managerPrompt?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumFrontendPromptTypeFieldUpdateOperationsInput | $Enums.FrontendPromptType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type FrontendPromptCreateManyInput = {
    id?: string
    prompt?: string | null
    managerPrompt?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: string | null
    type: $Enums.FrontendPromptType
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
  }

  export type FrontendPromptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    managerPrompt?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumFrontendPromptTypeFieldUpdateOperationsInput | $Enums.FrontendPromptType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FrontendPromptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    managerPrompt?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumFrontendPromptTypeFieldUpdateOperationsInput | $Enums.FrontendPromptType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type BackendPromptCreateInput = {
    id?: string
    prompt?: string | null
    managerPrompt?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: string | null
    type: $Enums.BackendPromptType
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutBackendPromptsInput
  }

  export type BackendPromptUncheckedCreateInput = {
    id?: string
    prompt?: string | null
    managerPrompt?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: string | null
    type: $Enums.BackendPromptType
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
  }

  export type BackendPromptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    managerPrompt?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumBackendPromptTypeFieldUpdateOperationsInput | $Enums.BackendPromptType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutBackendPromptsNestedInput
  }

  export type BackendPromptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    managerPrompt?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumBackendPromptTypeFieldUpdateOperationsInput | $Enums.BackendPromptType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type BackendPromptCreateManyInput = {
    id?: string
    prompt?: string | null
    managerPrompt?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: string | null
    type: $Enums.BackendPromptType
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
  }

  export type BackendPromptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    managerPrompt?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumBackendPromptTypeFieldUpdateOperationsInput | $Enums.BackendPromptType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BackendPromptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    managerPrompt?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumBackendPromptTypeFieldUpdateOperationsInput | $Enums.BackendPromptType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type QAPromptCreateInput = {
    id?: string
    prompt?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: string | null
    type: $Enums.QAPromptType
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutQaPromptsInput
  }

  export type QAPromptUncheckedCreateInput = {
    id?: string
    prompt?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: string | null
    type: $Enums.QAPromptType
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
  }

  export type QAPromptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQAPromptTypeFieldUpdateOperationsInput | $Enums.QAPromptType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutQaPromptsNestedInput
  }

  export type QAPromptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQAPromptTypeFieldUpdateOperationsInput | $Enums.QAPromptType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type QAPromptCreateManyInput = {
    id?: string
    prompt?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: string | null
    type: $Enums.QAPromptType
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
  }

  export type QAPromptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQAPromptTypeFieldUpdateOperationsInput | $Enums.QAPromptType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QAPromptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQAPromptTypeFieldUpdateOperationsInput | $Enums.QAPromptType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
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

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ManagerResponseListRelationFilter = {
    every?: ManagerResponseWhereInput
    some?: ManagerResponseWhereInput
    none?: ManagerResponseWhereInput
  }

  export type FrontendPromptListRelationFilter = {
    every?: FrontendPromptWhereInput
    some?: FrontendPromptWhereInput
    none?: FrontendPromptWhereInput
  }

  export type BackendPromptListRelationFilter = {
    every?: BackendPromptWhereInput
    some?: BackendPromptWhereInput
    none?: BackendPromptWhereInput
  }

  export type QAPromptListRelationFilter = {
    every?: QAPromptWhereInput
    some?: QAPromptWhereInput
    none?: QAPromptWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ManagerResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FrontendPromptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BackendPromptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QAPromptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
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

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
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

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumManagerPromptTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ManagerPromptType | EnumManagerPromptTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ManagerPromptType[] | ListEnumManagerPromptTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ManagerPromptType[] | ListEnumManagerPromptTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumManagerPromptTypeNullableFilter<$PrismaModel> | $Enums.ManagerPromptType | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ManagerResponseCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    prompt?: SortOrder
    type?: SortOrder
    frontendRoadMap?: SortOrder
    backendRoadMap?: SortOrder
    qaRoadmap?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
  }

  export type ManagerResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    prompt?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
  }

  export type ManagerResponseMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    prompt?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
  }

  export type EnumManagerPromptTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ManagerPromptType | EnumManagerPromptTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ManagerPromptType[] | ListEnumManagerPromptTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ManagerPromptType[] | ListEnumManagerPromptTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumManagerPromptTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.ManagerPromptType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumManagerPromptTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumManagerPromptTypeNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumFrontendPromptTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FrontendPromptType | EnumFrontendPromptTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FrontendPromptType[] | ListEnumFrontendPromptTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FrontendPromptType[] | ListEnumFrontendPromptTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFrontendPromptTypeFilter<$PrismaModel> | $Enums.FrontendPromptType
  }

  export type FrontendPromptCountOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    managerPrompt?: SortOrder
    responseContent?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
  }

  export type FrontendPromptMaxOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    responseContent?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
  }

  export type FrontendPromptMinOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    responseContent?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
  }

  export type EnumFrontendPromptTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FrontendPromptType | EnumFrontendPromptTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FrontendPromptType[] | ListEnumFrontendPromptTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FrontendPromptType[] | ListEnumFrontendPromptTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFrontendPromptTypeWithAggregatesFilter<$PrismaModel> | $Enums.FrontendPromptType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFrontendPromptTypeFilter<$PrismaModel>
    _max?: NestedEnumFrontendPromptTypeFilter<$PrismaModel>
  }

  export type EnumBackendPromptTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BackendPromptType | EnumBackendPromptTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BackendPromptType[] | ListEnumBackendPromptTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BackendPromptType[] | ListEnumBackendPromptTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBackendPromptTypeFilter<$PrismaModel> | $Enums.BackendPromptType
  }

  export type BackendPromptCountOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    managerPrompt?: SortOrder
    responseContent?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
  }

  export type BackendPromptMaxOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    responseContent?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
  }

  export type BackendPromptMinOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    responseContent?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
  }

  export type EnumBackendPromptTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BackendPromptType | EnumBackendPromptTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BackendPromptType[] | ListEnumBackendPromptTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BackendPromptType[] | ListEnumBackendPromptTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBackendPromptTypeWithAggregatesFilter<$PrismaModel> | $Enums.BackendPromptType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBackendPromptTypeFilter<$PrismaModel>
    _max?: NestedEnumBackendPromptTypeFilter<$PrismaModel>
  }

  export type EnumQAPromptTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QAPromptType | EnumQAPromptTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QAPromptType[] | ListEnumQAPromptTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QAPromptType[] | ListEnumQAPromptTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQAPromptTypeFilter<$PrismaModel> | $Enums.QAPromptType
  }

  export type QAPromptCountOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    content?: SortOrder
    responseContent?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
  }

  export type QAPromptMaxOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    responseContent?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
  }

  export type QAPromptMinOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    responseContent?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
  }

  export type EnumQAPromptTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QAPromptType | EnumQAPromptTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QAPromptType[] | ListEnumQAPromptTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QAPromptType[] | ListEnumQAPromptTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQAPromptTypeWithAggregatesFilter<$PrismaModel> | $Enums.QAPromptType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQAPromptTypeFilter<$PrismaModel>
    _max?: NestedEnumQAPromptTypeFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutProjectInput = {
    create?: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectInput
    connect?: UserWhereUniqueInput
  }

  export type ManagerResponseCreateNestedManyWithoutProjectInput = {
    create?: XOR<ManagerResponseCreateWithoutProjectInput, ManagerResponseUncheckedCreateWithoutProjectInput> | ManagerResponseCreateWithoutProjectInput[] | ManagerResponseUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ManagerResponseCreateOrConnectWithoutProjectInput | ManagerResponseCreateOrConnectWithoutProjectInput[]
    createMany?: ManagerResponseCreateManyProjectInputEnvelope
    connect?: ManagerResponseWhereUniqueInput | ManagerResponseWhereUniqueInput[]
  }

  export type FrontendPromptCreateNestedManyWithoutProjectInput = {
    create?: XOR<FrontendPromptCreateWithoutProjectInput, FrontendPromptUncheckedCreateWithoutProjectInput> | FrontendPromptCreateWithoutProjectInput[] | FrontendPromptUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FrontendPromptCreateOrConnectWithoutProjectInput | FrontendPromptCreateOrConnectWithoutProjectInput[]
    createMany?: FrontendPromptCreateManyProjectInputEnvelope
    connect?: FrontendPromptWhereUniqueInput | FrontendPromptWhereUniqueInput[]
  }

  export type BackendPromptCreateNestedManyWithoutProjectInput = {
    create?: XOR<BackendPromptCreateWithoutProjectInput, BackendPromptUncheckedCreateWithoutProjectInput> | BackendPromptCreateWithoutProjectInput[] | BackendPromptUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: BackendPromptCreateOrConnectWithoutProjectInput | BackendPromptCreateOrConnectWithoutProjectInput[]
    createMany?: BackendPromptCreateManyProjectInputEnvelope
    connect?: BackendPromptWhereUniqueInput | BackendPromptWhereUniqueInput[]
  }

  export type QAPromptCreateNestedManyWithoutProjectInput = {
    create?: XOR<QAPromptCreateWithoutProjectInput, QAPromptUncheckedCreateWithoutProjectInput> | QAPromptCreateWithoutProjectInput[] | QAPromptUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: QAPromptCreateOrConnectWithoutProjectInput | QAPromptCreateOrConnectWithoutProjectInput[]
    createMany?: QAPromptCreateManyProjectInputEnvelope
    connect?: QAPromptWhereUniqueInput | QAPromptWhereUniqueInput[]
  }

  export type ManagerResponseUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ManagerResponseCreateWithoutProjectInput, ManagerResponseUncheckedCreateWithoutProjectInput> | ManagerResponseCreateWithoutProjectInput[] | ManagerResponseUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ManagerResponseCreateOrConnectWithoutProjectInput | ManagerResponseCreateOrConnectWithoutProjectInput[]
    createMany?: ManagerResponseCreateManyProjectInputEnvelope
    connect?: ManagerResponseWhereUniqueInput | ManagerResponseWhereUniqueInput[]
  }

  export type FrontendPromptUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<FrontendPromptCreateWithoutProjectInput, FrontendPromptUncheckedCreateWithoutProjectInput> | FrontendPromptCreateWithoutProjectInput[] | FrontendPromptUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FrontendPromptCreateOrConnectWithoutProjectInput | FrontendPromptCreateOrConnectWithoutProjectInput[]
    createMany?: FrontendPromptCreateManyProjectInputEnvelope
    connect?: FrontendPromptWhereUniqueInput | FrontendPromptWhereUniqueInput[]
  }

  export type BackendPromptUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<BackendPromptCreateWithoutProjectInput, BackendPromptUncheckedCreateWithoutProjectInput> | BackendPromptCreateWithoutProjectInput[] | BackendPromptUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: BackendPromptCreateOrConnectWithoutProjectInput | BackendPromptCreateOrConnectWithoutProjectInput[]
    createMany?: BackendPromptCreateManyProjectInputEnvelope
    connect?: BackendPromptWhereUniqueInput | BackendPromptWhereUniqueInput[]
  }

  export type QAPromptUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<QAPromptCreateWithoutProjectInput, QAPromptUncheckedCreateWithoutProjectInput> | QAPromptCreateWithoutProjectInput[] | QAPromptUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: QAPromptCreateOrConnectWithoutProjectInput | QAPromptCreateOrConnectWithoutProjectInput[]
    createMany?: QAPromptCreateManyProjectInputEnvelope
    connect?: QAPromptWhereUniqueInput | QAPromptWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectInput
    upsert?: UserUpsertWithoutProjectInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectInput, UserUpdateWithoutProjectInput>, UserUncheckedUpdateWithoutProjectInput>
  }

  export type ManagerResponseUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ManagerResponseCreateWithoutProjectInput, ManagerResponseUncheckedCreateWithoutProjectInput> | ManagerResponseCreateWithoutProjectInput[] | ManagerResponseUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ManagerResponseCreateOrConnectWithoutProjectInput | ManagerResponseCreateOrConnectWithoutProjectInput[]
    upsert?: ManagerResponseUpsertWithWhereUniqueWithoutProjectInput | ManagerResponseUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ManagerResponseCreateManyProjectInputEnvelope
    set?: ManagerResponseWhereUniqueInput | ManagerResponseWhereUniqueInput[]
    disconnect?: ManagerResponseWhereUniqueInput | ManagerResponseWhereUniqueInput[]
    delete?: ManagerResponseWhereUniqueInput | ManagerResponseWhereUniqueInput[]
    connect?: ManagerResponseWhereUniqueInput | ManagerResponseWhereUniqueInput[]
    update?: ManagerResponseUpdateWithWhereUniqueWithoutProjectInput | ManagerResponseUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ManagerResponseUpdateManyWithWhereWithoutProjectInput | ManagerResponseUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ManagerResponseScalarWhereInput | ManagerResponseScalarWhereInput[]
  }

  export type FrontendPromptUpdateManyWithoutProjectNestedInput = {
    create?: XOR<FrontendPromptCreateWithoutProjectInput, FrontendPromptUncheckedCreateWithoutProjectInput> | FrontendPromptCreateWithoutProjectInput[] | FrontendPromptUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FrontendPromptCreateOrConnectWithoutProjectInput | FrontendPromptCreateOrConnectWithoutProjectInput[]
    upsert?: FrontendPromptUpsertWithWhereUniqueWithoutProjectInput | FrontendPromptUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: FrontendPromptCreateManyProjectInputEnvelope
    set?: FrontendPromptWhereUniqueInput | FrontendPromptWhereUniqueInput[]
    disconnect?: FrontendPromptWhereUniqueInput | FrontendPromptWhereUniqueInput[]
    delete?: FrontendPromptWhereUniqueInput | FrontendPromptWhereUniqueInput[]
    connect?: FrontendPromptWhereUniqueInput | FrontendPromptWhereUniqueInput[]
    update?: FrontendPromptUpdateWithWhereUniqueWithoutProjectInput | FrontendPromptUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: FrontendPromptUpdateManyWithWhereWithoutProjectInput | FrontendPromptUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: FrontendPromptScalarWhereInput | FrontendPromptScalarWhereInput[]
  }

  export type BackendPromptUpdateManyWithoutProjectNestedInput = {
    create?: XOR<BackendPromptCreateWithoutProjectInput, BackendPromptUncheckedCreateWithoutProjectInput> | BackendPromptCreateWithoutProjectInput[] | BackendPromptUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: BackendPromptCreateOrConnectWithoutProjectInput | BackendPromptCreateOrConnectWithoutProjectInput[]
    upsert?: BackendPromptUpsertWithWhereUniqueWithoutProjectInput | BackendPromptUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: BackendPromptCreateManyProjectInputEnvelope
    set?: BackendPromptWhereUniqueInput | BackendPromptWhereUniqueInput[]
    disconnect?: BackendPromptWhereUniqueInput | BackendPromptWhereUniqueInput[]
    delete?: BackendPromptWhereUniqueInput | BackendPromptWhereUniqueInput[]
    connect?: BackendPromptWhereUniqueInput | BackendPromptWhereUniqueInput[]
    update?: BackendPromptUpdateWithWhereUniqueWithoutProjectInput | BackendPromptUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: BackendPromptUpdateManyWithWhereWithoutProjectInput | BackendPromptUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: BackendPromptScalarWhereInput | BackendPromptScalarWhereInput[]
  }

  export type QAPromptUpdateManyWithoutProjectNestedInput = {
    create?: XOR<QAPromptCreateWithoutProjectInput, QAPromptUncheckedCreateWithoutProjectInput> | QAPromptCreateWithoutProjectInput[] | QAPromptUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: QAPromptCreateOrConnectWithoutProjectInput | QAPromptCreateOrConnectWithoutProjectInput[]
    upsert?: QAPromptUpsertWithWhereUniqueWithoutProjectInput | QAPromptUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: QAPromptCreateManyProjectInputEnvelope
    set?: QAPromptWhereUniqueInput | QAPromptWhereUniqueInput[]
    disconnect?: QAPromptWhereUniqueInput | QAPromptWhereUniqueInput[]
    delete?: QAPromptWhereUniqueInput | QAPromptWhereUniqueInput[]
    connect?: QAPromptWhereUniqueInput | QAPromptWhereUniqueInput[]
    update?: QAPromptUpdateWithWhereUniqueWithoutProjectInput | QAPromptUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: QAPromptUpdateManyWithWhereWithoutProjectInput | QAPromptUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: QAPromptScalarWhereInput | QAPromptScalarWhereInput[]
  }

  export type ManagerResponseUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ManagerResponseCreateWithoutProjectInput, ManagerResponseUncheckedCreateWithoutProjectInput> | ManagerResponseCreateWithoutProjectInput[] | ManagerResponseUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ManagerResponseCreateOrConnectWithoutProjectInput | ManagerResponseCreateOrConnectWithoutProjectInput[]
    upsert?: ManagerResponseUpsertWithWhereUniqueWithoutProjectInput | ManagerResponseUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ManagerResponseCreateManyProjectInputEnvelope
    set?: ManagerResponseWhereUniqueInput | ManagerResponseWhereUniqueInput[]
    disconnect?: ManagerResponseWhereUniqueInput | ManagerResponseWhereUniqueInput[]
    delete?: ManagerResponseWhereUniqueInput | ManagerResponseWhereUniqueInput[]
    connect?: ManagerResponseWhereUniqueInput | ManagerResponseWhereUniqueInput[]
    update?: ManagerResponseUpdateWithWhereUniqueWithoutProjectInput | ManagerResponseUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ManagerResponseUpdateManyWithWhereWithoutProjectInput | ManagerResponseUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ManagerResponseScalarWhereInput | ManagerResponseScalarWhereInput[]
  }

  export type FrontendPromptUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<FrontendPromptCreateWithoutProjectInput, FrontendPromptUncheckedCreateWithoutProjectInput> | FrontendPromptCreateWithoutProjectInput[] | FrontendPromptUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: FrontendPromptCreateOrConnectWithoutProjectInput | FrontendPromptCreateOrConnectWithoutProjectInput[]
    upsert?: FrontendPromptUpsertWithWhereUniqueWithoutProjectInput | FrontendPromptUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: FrontendPromptCreateManyProjectInputEnvelope
    set?: FrontendPromptWhereUniqueInput | FrontendPromptWhereUniqueInput[]
    disconnect?: FrontendPromptWhereUniqueInput | FrontendPromptWhereUniqueInput[]
    delete?: FrontendPromptWhereUniqueInput | FrontendPromptWhereUniqueInput[]
    connect?: FrontendPromptWhereUniqueInput | FrontendPromptWhereUniqueInput[]
    update?: FrontendPromptUpdateWithWhereUniqueWithoutProjectInput | FrontendPromptUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: FrontendPromptUpdateManyWithWhereWithoutProjectInput | FrontendPromptUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: FrontendPromptScalarWhereInput | FrontendPromptScalarWhereInput[]
  }

  export type BackendPromptUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<BackendPromptCreateWithoutProjectInput, BackendPromptUncheckedCreateWithoutProjectInput> | BackendPromptCreateWithoutProjectInput[] | BackendPromptUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: BackendPromptCreateOrConnectWithoutProjectInput | BackendPromptCreateOrConnectWithoutProjectInput[]
    upsert?: BackendPromptUpsertWithWhereUniqueWithoutProjectInput | BackendPromptUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: BackendPromptCreateManyProjectInputEnvelope
    set?: BackendPromptWhereUniqueInput | BackendPromptWhereUniqueInput[]
    disconnect?: BackendPromptWhereUniqueInput | BackendPromptWhereUniqueInput[]
    delete?: BackendPromptWhereUniqueInput | BackendPromptWhereUniqueInput[]
    connect?: BackendPromptWhereUniqueInput | BackendPromptWhereUniqueInput[]
    update?: BackendPromptUpdateWithWhereUniqueWithoutProjectInput | BackendPromptUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: BackendPromptUpdateManyWithWhereWithoutProjectInput | BackendPromptUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: BackendPromptScalarWhereInput | BackendPromptScalarWhereInput[]
  }

  export type QAPromptUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<QAPromptCreateWithoutProjectInput, QAPromptUncheckedCreateWithoutProjectInput> | QAPromptCreateWithoutProjectInput[] | QAPromptUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: QAPromptCreateOrConnectWithoutProjectInput | QAPromptCreateOrConnectWithoutProjectInput[]
    upsert?: QAPromptUpsertWithWhereUniqueWithoutProjectInput | QAPromptUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: QAPromptCreateManyProjectInputEnvelope
    set?: QAPromptWhereUniqueInput | QAPromptWhereUniqueInput[]
    disconnect?: QAPromptWhereUniqueInput | QAPromptWhereUniqueInput[]
    delete?: QAPromptWhereUniqueInput | QAPromptWhereUniqueInput[]
    connect?: QAPromptWhereUniqueInput | QAPromptWhereUniqueInput[]
    update?: QAPromptUpdateWithWhereUniqueWithoutProjectInput | QAPromptUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: QAPromptUpdateManyWithWhereWithoutProjectInput | QAPromptUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: QAPromptScalarWhereInput | QAPromptScalarWhereInput[]
  }

  export type ProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutManagerResponsesInput = {
    create?: XOR<ProjectCreateWithoutManagerResponsesInput, ProjectUncheckedCreateWithoutManagerResponsesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutManagerResponsesInput
    connect?: ProjectWhereUniqueInput
  }

  export type NullableEnumManagerPromptTypeFieldUpdateOperationsInput = {
    set?: $Enums.ManagerPromptType | null
  }

  export type ProjectUpdateOneRequiredWithoutManagerResponsesNestedInput = {
    create?: XOR<ProjectCreateWithoutManagerResponsesInput, ProjectUncheckedCreateWithoutManagerResponsesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutManagerResponsesInput
    upsert?: ProjectUpsertWithoutManagerResponsesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutManagerResponsesInput, ProjectUpdateWithoutManagerResponsesInput>, ProjectUncheckedUpdateWithoutManagerResponsesInput>
  }

  export type ProjectCreateNestedOneWithoutFrontendPromptsInput = {
    create?: XOR<ProjectCreateWithoutFrontendPromptsInput, ProjectUncheckedCreateWithoutFrontendPromptsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutFrontendPromptsInput
    connect?: ProjectWhereUniqueInput
  }

  export type EnumFrontendPromptTypeFieldUpdateOperationsInput = {
    set?: $Enums.FrontendPromptType
  }

  export type ProjectUpdateOneRequiredWithoutFrontendPromptsNestedInput = {
    create?: XOR<ProjectCreateWithoutFrontendPromptsInput, ProjectUncheckedCreateWithoutFrontendPromptsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutFrontendPromptsInput
    upsert?: ProjectUpsertWithoutFrontendPromptsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutFrontendPromptsInput, ProjectUpdateWithoutFrontendPromptsInput>, ProjectUncheckedUpdateWithoutFrontendPromptsInput>
  }

  export type ProjectCreateNestedOneWithoutBackendPromptsInput = {
    create?: XOR<ProjectCreateWithoutBackendPromptsInput, ProjectUncheckedCreateWithoutBackendPromptsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutBackendPromptsInput
    connect?: ProjectWhereUniqueInput
  }

  export type EnumBackendPromptTypeFieldUpdateOperationsInput = {
    set?: $Enums.BackendPromptType
  }

  export type ProjectUpdateOneRequiredWithoutBackendPromptsNestedInput = {
    create?: XOR<ProjectCreateWithoutBackendPromptsInput, ProjectUncheckedCreateWithoutBackendPromptsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutBackendPromptsInput
    upsert?: ProjectUpsertWithoutBackendPromptsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutBackendPromptsInput, ProjectUpdateWithoutBackendPromptsInput>, ProjectUncheckedUpdateWithoutBackendPromptsInput>
  }

  export type ProjectCreateNestedOneWithoutQaPromptsInput = {
    create?: XOR<ProjectCreateWithoutQaPromptsInput, ProjectUncheckedCreateWithoutQaPromptsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutQaPromptsInput
    connect?: ProjectWhereUniqueInput
  }

  export type EnumQAPromptTypeFieldUpdateOperationsInput = {
    set?: $Enums.QAPromptType
  }

  export type ProjectUpdateOneRequiredWithoutQaPromptsNestedInput = {
    create?: XOR<ProjectCreateWithoutQaPromptsInput, ProjectUncheckedCreateWithoutQaPromptsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutQaPromptsInput
    upsert?: ProjectUpsertWithoutQaPromptsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutQaPromptsInput, ProjectUpdateWithoutQaPromptsInput>, ProjectUncheckedUpdateWithoutQaPromptsInput>
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

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
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

  export type NestedEnumManagerPromptTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ManagerPromptType | EnumManagerPromptTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ManagerPromptType[] | ListEnumManagerPromptTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ManagerPromptType[] | ListEnumManagerPromptTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumManagerPromptTypeNullableFilter<$PrismaModel> | $Enums.ManagerPromptType | null
  }

  export type NestedEnumManagerPromptTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ManagerPromptType | EnumManagerPromptTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ManagerPromptType[] | ListEnumManagerPromptTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ManagerPromptType[] | ListEnumManagerPromptTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumManagerPromptTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.ManagerPromptType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumManagerPromptTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumManagerPromptTypeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumFrontendPromptTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FrontendPromptType | EnumFrontendPromptTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FrontendPromptType[] | ListEnumFrontendPromptTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FrontendPromptType[] | ListEnumFrontendPromptTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFrontendPromptTypeFilter<$PrismaModel> | $Enums.FrontendPromptType
  }

  export type NestedEnumFrontendPromptTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FrontendPromptType | EnumFrontendPromptTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FrontendPromptType[] | ListEnumFrontendPromptTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FrontendPromptType[] | ListEnumFrontendPromptTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFrontendPromptTypeWithAggregatesFilter<$PrismaModel> | $Enums.FrontendPromptType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFrontendPromptTypeFilter<$PrismaModel>
    _max?: NestedEnumFrontendPromptTypeFilter<$PrismaModel>
  }

  export type NestedEnumBackendPromptTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BackendPromptType | EnumBackendPromptTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BackendPromptType[] | ListEnumBackendPromptTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BackendPromptType[] | ListEnumBackendPromptTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBackendPromptTypeFilter<$PrismaModel> | $Enums.BackendPromptType
  }

  export type NestedEnumBackendPromptTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BackendPromptType | EnumBackendPromptTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BackendPromptType[] | ListEnumBackendPromptTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BackendPromptType[] | ListEnumBackendPromptTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBackendPromptTypeWithAggregatesFilter<$PrismaModel> | $Enums.BackendPromptType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBackendPromptTypeFilter<$PrismaModel>
    _max?: NestedEnumBackendPromptTypeFilter<$PrismaModel>
  }

  export type NestedEnumQAPromptTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QAPromptType | EnumQAPromptTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QAPromptType[] | ListEnumQAPromptTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QAPromptType[] | ListEnumQAPromptTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQAPromptTypeFilter<$PrismaModel> | $Enums.QAPromptType
  }

  export type NestedEnumQAPromptTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QAPromptType | EnumQAPromptTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QAPromptType[] | ListEnumQAPromptTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QAPromptType[] | ListEnumQAPromptTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQAPromptTypeWithAggregatesFilter<$PrismaModel> | $Enums.QAPromptType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQAPromptTypeFilter<$PrismaModel>
    _max?: NestedEnumQAPromptTypeFilter<$PrismaModel>
  }

  export type UserCreateWithoutProjectInput = {
    id?: string
    name?: string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutProjectInput = {
    id?: string
    name?: string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutProjectInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
  }

  export type ManagerResponseCreateWithoutProjectInput = {
    id?: string
    content?: string | null
    prompt?: string | null
    type?: $Enums.ManagerPromptType | null
    frontendRoadMap?: NullableJsonNullValueInput | InputJsonValue
    backendRoadMap?: NullableJsonNullValueInput | InputJsonValue
    qaRoadmap?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ManagerResponseUncheckedCreateWithoutProjectInput = {
    id?: string
    content?: string | null
    prompt?: string | null
    type?: $Enums.ManagerPromptType | null
    frontendRoadMap?: NullableJsonNullValueInput | InputJsonValue
    backendRoadMap?: NullableJsonNullValueInput | InputJsonValue
    qaRoadmap?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ManagerResponseCreateOrConnectWithoutProjectInput = {
    where: ManagerResponseWhereUniqueInput
    create: XOR<ManagerResponseCreateWithoutProjectInput, ManagerResponseUncheckedCreateWithoutProjectInput>
  }

  export type ManagerResponseCreateManyProjectInputEnvelope = {
    data: ManagerResponseCreateManyProjectInput | ManagerResponseCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type FrontendPromptCreateWithoutProjectInput = {
    id?: string
    prompt?: string | null
    managerPrompt?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: string | null
    type: $Enums.FrontendPromptType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FrontendPromptUncheckedCreateWithoutProjectInput = {
    id?: string
    prompt?: string | null
    managerPrompt?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: string | null
    type: $Enums.FrontendPromptType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FrontendPromptCreateOrConnectWithoutProjectInput = {
    where: FrontendPromptWhereUniqueInput
    create: XOR<FrontendPromptCreateWithoutProjectInput, FrontendPromptUncheckedCreateWithoutProjectInput>
  }

  export type FrontendPromptCreateManyProjectInputEnvelope = {
    data: FrontendPromptCreateManyProjectInput | FrontendPromptCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type BackendPromptCreateWithoutProjectInput = {
    id?: string
    prompt?: string | null
    managerPrompt?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: string | null
    type: $Enums.BackendPromptType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BackendPromptUncheckedCreateWithoutProjectInput = {
    id?: string
    prompt?: string | null
    managerPrompt?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: string | null
    type: $Enums.BackendPromptType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BackendPromptCreateOrConnectWithoutProjectInput = {
    where: BackendPromptWhereUniqueInput
    create: XOR<BackendPromptCreateWithoutProjectInput, BackendPromptUncheckedCreateWithoutProjectInput>
  }

  export type BackendPromptCreateManyProjectInputEnvelope = {
    data: BackendPromptCreateManyProjectInput | BackendPromptCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type QAPromptCreateWithoutProjectInput = {
    id?: string
    prompt?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: string | null
    type: $Enums.QAPromptType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QAPromptUncheckedCreateWithoutProjectInput = {
    id?: string
    prompt?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: string | null
    type: $Enums.QAPromptType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QAPromptCreateOrConnectWithoutProjectInput = {
    where: QAPromptWhereUniqueInput
    create: XOR<QAPromptCreateWithoutProjectInput, QAPromptUncheckedCreateWithoutProjectInput>
  }

  export type QAPromptCreateManyProjectInputEnvelope = {
    data: QAPromptCreateManyProjectInput | QAPromptCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProjectInput = {
    update: XOR<UserUpdateWithoutProjectInput, UserUncheckedUpdateWithoutProjectInput>
    create: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectInput, UserUncheckedUpdateWithoutProjectInput>
  }

  export type UserUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagerResponseUpsertWithWhereUniqueWithoutProjectInput = {
    where: ManagerResponseWhereUniqueInput
    update: XOR<ManagerResponseUpdateWithoutProjectInput, ManagerResponseUncheckedUpdateWithoutProjectInput>
    create: XOR<ManagerResponseCreateWithoutProjectInput, ManagerResponseUncheckedCreateWithoutProjectInput>
  }

  export type ManagerResponseUpdateWithWhereUniqueWithoutProjectInput = {
    where: ManagerResponseWhereUniqueInput
    data: XOR<ManagerResponseUpdateWithoutProjectInput, ManagerResponseUncheckedUpdateWithoutProjectInput>
  }

  export type ManagerResponseUpdateManyWithWhereWithoutProjectInput = {
    where: ManagerResponseScalarWhereInput
    data: XOR<ManagerResponseUpdateManyMutationInput, ManagerResponseUncheckedUpdateManyWithoutProjectInput>
  }

  export type ManagerResponseScalarWhereInput = {
    AND?: ManagerResponseScalarWhereInput | ManagerResponseScalarWhereInput[]
    OR?: ManagerResponseScalarWhereInput[]
    NOT?: ManagerResponseScalarWhereInput | ManagerResponseScalarWhereInput[]
    id?: StringFilter<"ManagerResponse"> | string
    content?: StringNullableFilter<"ManagerResponse"> | string | null
    prompt?: StringNullableFilter<"ManagerResponse"> | string | null
    type?: EnumManagerPromptTypeNullableFilter<"ManagerResponse"> | $Enums.ManagerPromptType | null
    frontendRoadMap?: JsonNullableFilter<"ManagerResponse">
    backendRoadMap?: JsonNullableFilter<"ManagerResponse">
    qaRoadmap?: JsonNullableFilter<"ManagerResponse">
    createdAt?: DateTimeFilter<"ManagerResponse"> | Date | string
    updatedAt?: DateTimeFilter<"ManagerResponse"> | Date | string
    projectId?: StringFilter<"ManagerResponse"> | string
  }

  export type FrontendPromptUpsertWithWhereUniqueWithoutProjectInput = {
    where: FrontendPromptWhereUniqueInput
    update: XOR<FrontendPromptUpdateWithoutProjectInput, FrontendPromptUncheckedUpdateWithoutProjectInput>
    create: XOR<FrontendPromptCreateWithoutProjectInput, FrontendPromptUncheckedCreateWithoutProjectInput>
  }

  export type FrontendPromptUpdateWithWhereUniqueWithoutProjectInput = {
    where: FrontendPromptWhereUniqueInput
    data: XOR<FrontendPromptUpdateWithoutProjectInput, FrontendPromptUncheckedUpdateWithoutProjectInput>
  }

  export type FrontendPromptUpdateManyWithWhereWithoutProjectInput = {
    where: FrontendPromptScalarWhereInput
    data: XOR<FrontendPromptUpdateManyMutationInput, FrontendPromptUncheckedUpdateManyWithoutProjectInput>
  }

  export type FrontendPromptScalarWhereInput = {
    AND?: FrontendPromptScalarWhereInput | FrontendPromptScalarWhereInput[]
    OR?: FrontendPromptScalarWhereInput[]
    NOT?: FrontendPromptScalarWhereInput | FrontendPromptScalarWhereInput[]
    id?: StringFilter<"FrontendPrompt"> | string
    prompt?: StringNullableFilter<"FrontendPrompt"> | string | null
    managerPrompt?: JsonNullableFilter<"FrontendPrompt">
    responseContent?: StringNullableFilter<"FrontendPrompt"> | string | null
    type?: EnumFrontendPromptTypeFilter<"FrontendPrompt"> | $Enums.FrontendPromptType
    createdAt?: DateTimeFilter<"FrontendPrompt"> | Date | string
    updatedAt?: DateTimeFilter<"FrontendPrompt"> | Date | string
    projectId?: StringFilter<"FrontendPrompt"> | string
  }

  export type BackendPromptUpsertWithWhereUniqueWithoutProjectInput = {
    where: BackendPromptWhereUniqueInput
    update: XOR<BackendPromptUpdateWithoutProjectInput, BackendPromptUncheckedUpdateWithoutProjectInput>
    create: XOR<BackendPromptCreateWithoutProjectInput, BackendPromptUncheckedCreateWithoutProjectInput>
  }

  export type BackendPromptUpdateWithWhereUniqueWithoutProjectInput = {
    where: BackendPromptWhereUniqueInput
    data: XOR<BackendPromptUpdateWithoutProjectInput, BackendPromptUncheckedUpdateWithoutProjectInput>
  }

  export type BackendPromptUpdateManyWithWhereWithoutProjectInput = {
    where: BackendPromptScalarWhereInput
    data: XOR<BackendPromptUpdateManyMutationInput, BackendPromptUncheckedUpdateManyWithoutProjectInput>
  }

  export type BackendPromptScalarWhereInput = {
    AND?: BackendPromptScalarWhereInput | BackendPromptScalarWhereInput[]
    OR?: BackendPromptScalarWhereInput[]
    NOT?: BackendPromptScalarWhereInput | BackendPromptScalarWhereInput[]
    id?: StringFilter<"BackendPrompt"> | string
    prompt?: StringNullableFilter<"BackendPrompt"> | string | null
    managerPrompt?: JsonNullableFilter<"BackendPrompt">
    responseContent?: StringNullableFilter<"BackendPrompt"> | string | null
    type?: EnumBackendPromptTypeFilter<"BackendPrompt"> | $Enums.BackendPromptType
    createdAt?: DateTimeFilter<"BackendPrompt"> | Date | string
    updatedAt?: DateTimeFilter<"BackendPrompt"> | Date | string
    projectId?: StringFilter<"BackendPrompt"> | string
  }

  export type QAPromptUpsertWithWhereUniqueWithoutProjectInput = {
    where: QAPromptWhereUniqueInput
    update: XOR<QAPromptUpdateWithoutProjectInput, QAPromptUncheckedUpdateWithoutProjectInput>
    create: XOR<QAPromptCreateWithoutProjectInput, QAPromptUncheckedCreateWithoutProjectInput>
  }

  export type QAPromptUpdateWithWhereUniqueWithoutProjectInput = {
    where: QAPromptWhereUniqueInput
    data: XOR<QAPromptUpdateWithoutProjectInput, QAPromptUncheckedUpdateWithoutProjectInput>
  }

  export type QAPromptUpdateManyWithWhereWithoutProjectInput = {
    where: QAPromptScalarWhereInput
    data: XOR<QAPromptUpdateManyMutationInput, QAPromptUncheckedUpdateManyWithoutProjectInput>
  }

  export type QAPromptScalarWhereInput = {
    AND?: QAPromptScalarWhereInput | QAPromptScalarWhereInput[]
    OR?: QAPromptScalarWhereInput[]
    NOT?: QAPromptScalarWhereInput | QAPromptScalarWhereInput[]
    id?: StringFilter<"QAPrompt"> | string
    prompt?: StringNullableFilter<"QAPrompt"> | string | null
    content?: JsonNullableFilter<"QAPrompt">
    responseContent?: StringNullableFilter<"QAPrompt"> | string | null
    type?: EnumQAPromptTypeFilter<"QAPrompt"> | $Enums.QAPromptType
    createdAt?: DateTimeFilter<"QAPrompt"> | Date | string
    updatedAt?: DateTimeFilter<"QAPrompt"> | Date | string
    projectId?: StringFilter<"QAPrompt"> | string
  }

  export type ProjectCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    managerResponses?: ManagerResponseCreateNestedManyWithoutProjectInput
    frontendPrompts?: FrontendPromptCreateNestedManyWithoutProjectInput
    backendPrompts?: BackendPromptCreateNestedManyWithoutProjectInput
    qaPrompts?: QAPromptCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    managerResponses?: ManagerResponseUncheckedCreateNestedManyWithoutProjectInput
    frontendPrompts?: FrontendPromptUncheckedCreateNestedManyWithoutProjectInput
    backendPrompts?: BackendPromptUncheckedCreateNestedManyWithoutProjectInput
    qaPrompts?: QAPromptUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUserInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectCreateManyUserInputEnvelope = {
    data: ProjectCreateManyUserInput | ProjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUserInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    status?: EnumStatusFilter<"Project"> | $Enums.Status
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    userId?: StringFilter<"Project"> | string
  }

  export type ProjectCreateWithoutManagerResponsesInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutProjectInput
    frontendPrompts?: FrontendPromptCreateNestedManyWithoutProjectInput
    backendPrompts?: BackendPromptCreateNestedManyWithoutProjectInput
    qaPrompts?: QAPromptCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutManagerResponsesInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    frontendPrompts?: FrontendPromptUncheckedCreateNestedManyWithoutProjectInput
    backendPrompts?: BackendPromptUncheckedCreateNestedManyWithoutProjectInput
    qaPrompts?: QAPromptUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutManagerResponsesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutManagerResponsesInput, ProjectUncheckedCreateWithoutManagerResponsesInput>
  }

  export type ProjectUpsertWithoutManagerResponsesInput = {
    update: XOR<ProjectUpdateWithoutManagerResponsesInput, ProjectUncheckedUpdateWithoutManagerResponsesInput>
    create: XOR<ProjectCreateWithoutManagerResponsesInput, ProjectUncheckedCreateWithoutManagerResponsesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutManagerResponsesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutManagerResponsesInput, ProjectUncheckedUpdateWithoutManagerResponsesInput>
  }

  export type ProjectUpdateWithoutManagerResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutProjectNestedInput
    frontendPrompts?: FrontendPromptUpdateManyWithoutProjectNestedInput
    backendPrompts?: BackendPromptUpdateManyWithoutProjectNestedInput
    qaPrompts?: QAPromptUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutManagerResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    frontendPrompts?: FrontendPromptUncheckedUpdateManyWithoutProjectNestedInput
    backendPrompts?: BackendPromptUncheckedUpdateManyWithoutProjectNestedInput
    qaPrompts?: QAPromptUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutFrontendPromptsInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutProjectInput
    managerResponses?: ManagerResponseCreateNestedManyWithoutProjectInput
    backendPrompts?: BackendPromptCreateNestedManyWithoutProjectInput
    qaPrompts?: QAPromptCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutFrontendPromptsInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    managerResponses?: ManagerResponseUncheckedCreateNestedManyWithoutProjectInput
    backendPrompts?: BackendPromptUncheckedCreateNestedManyWithoutProjectInput
    qaPrompts?: QAPromptUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutFrontendPromptsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutFrontendPromptsInput, ProjectUncheckedCreateWithoutFrontendPromptsInput>
  }

  export type ProjectUpsertWithoutFrontendPromptsInput = {
    update: XOR<ProjectUpdateWithoutFrontendPromptsInput, ProjectUncheckedUpdateWithoutFrontendPromptsInput>
    create: XOR<ProjectCreateWithoutFrontendPromptsInput, ProjectUncheckedCreateWithoutFrontendPromptsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutFrontendPromptsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutFrontendPromptsInput, ProjectUncheckedUpdateWithoutFrontendPromptsInput>
  }

  export type ProjectUpdateWithoutFrontendPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutProjectNestedInput
    managerResponses?: ManagerResponseUpdateManyWithoutProjectNestedInput
    backendPrompts?: BackendPromptUpdateManyWithoutProjectNestedInput
    qaPrompts?: QAPromptUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutFrontendPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    managerResponses?: ManagerResponseUncheckedUpdateManyWithoutProjectNestedInput
    backendPrompts?: BackendPromptUncheckedUpdateManyWithoutProjectNestedInput
    qaPrompts?: QAPromptUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutBackendPromptsInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutProjectInput
    managerResponses?: ManagerResponseCreateNestedManyWithoutProjectInput
    frontendPrompts?: FrontendPromptCreateNestedManyWithoutProjectInput
    qaPrompts?: QAPromptCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutBackendPromptsInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    managerResponses?: ManagerResponseUncheckedCreateNestedManyWithoutProjectInput
    frontendPrompts?: FrontendPromptUncheckedCreateNestedManyWithoutProjectInput
    qaPrompts?: QAPromptUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutBackendPromptsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutBackendPromptsInput, ProjectUncheckedCreateWithoutBackendPromptsInput>
  }

  export type ProjectUpsertWithoutBackendPromptsInput = {
    update: XOR<ProjectUpdateWithoutBackendPromptsInput, ProjectUncheckedUpdateWithoutBackendPromptsInput>
    create: XOR<ProjectCreateWithoutBackendPromptsInput, ProjectUncheckedCreateWithoutBackendPromptsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutBackendPromptsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutBackendPromptsInput, ProjectUncheckedUpdateWithoutBackendPromptsInput>
  }

  export type ProjectUpdateWithoutBackendPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutProjectNestedInput
    managerResponses?: ManagerResponseUpdateManyWithoutProjectNestedInput
    frontendPrompts?: FrontendPromptUpdateManyWithoutProjectNestedInput
    qaPrompts?: QAPromptUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutBackendPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    managerResponses?: ManagerResponseUncheckedUpdateManyWithoutProjectNestedInput
    frontendPrompts?: FrontendPromptUncheckedUpdateManyWithoutProjectNestedInput
    qaPrompts?: QAPromptUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutQaPromptsInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutProjectInput
    managerResponses?: ManagerResponseCreateNestedManyWithoutProjectInput
    frontendPrompts?: FrontendPromptCreateNestedManyWithoutProjectInput
    backendPrompts?: BackendPromptCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutQaPromptsInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    managerResponses?: ManagerResponseUncheckedCreateNestedManyWithoutProjectInput
    frontendPrompts?: FrontendPromptUncheckedCreateNestedManyWithoutProjectInput
    backendPrompts?: BackendPromptUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutQaPromptsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutQaPromptsInput, ProjectUncheckedCreateWithoutQaPromptsInput>
  }

  export type ProjectUpsertWithoutQaPromptsInput = {
    update: XOR<ProjectUpdateWithoutQaPromptsInput, ProjectUncheckedUpdateWithoutQaPromptsInput>
    create: XOR<ProjectCreateWithoutQaPromptsInput, ProjectUncheckedCreateWithoutQaPromptsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutQaPromptsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutQaPromptsInput, ProjectUncheckedUpdateWithoutQaPromptsInput>
  }

  export type ProjectUpdateWithoutQaPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutProjectNestedInput
    managerResponses?: ManagerResponseUpdateManyWithoutProjectNestedInput
    frontendPrompts?: FrontendPromptUpdateManyWithoutProjectNestedInput
    backendPrompts?: BackendPromptUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutQaPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    managerResponses?: ManagerResponseUncheckedUpdateManyWithoutProjectNestedInput
    frontendPrompts?: FrontendPromptUncheckedUpdateManyWithoutProjectNestedInput
    backendPrompts?: BackendPromptUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ManagerResponseCreateManyProjectInput = {
    id?: string
    content?: string | null
    prompt?: string | null
    type?: $Enums.ManagerPromptType | null
    frontendRoadMap?: NullableJsonNullValueInput | InputJsonValue
    backendRoadMap?: NullableJsonNullValueInput | InputJsonValue
    qaRoadmap?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FrontendPromptCreateManyProjectInput = {
    id?: string
    prompt?: string | null
    managerPrompt?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: string | null
    type: $Enums.FrontendPromptType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BackendPromptCreateManyProjectInput = {
    id?: string
    prompt?: string | null
    managerPrompt?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: string | null
    type: $Enums.BackendPromptType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QAPromptCreateManyProjectInput = {
    id?: string
    prompt?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: string | null
    type: $Enums.QAPromptType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ManagerResponseUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumManagerPromptTypeFieldUpdateOperationsInput | $Enums.ManagerPromptType | null
    frontendRoadMap?: NullableJsonNullValueInput | InputJsonValue
    backendRoadMap?: NullableJsonNullValueInput | InputJsonValue
    qaRoadmap?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagerResponseUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumManagerPromptTypeFieldUpdateOperationsInput | $Enums.ManagerPromptType | null
    frontendRoadMap?: NullableJsonNullValueInput | InputJsonValue
    backendRoadMap?: NullableJsonNullValueInput | InputJsonValue
    qaRoadmap?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagerResponseUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumManagerPromptTypeFieldUpdateOperationsInput | $Enums.ManagerPromptType | null
    frontendRoadMap?: NullableJsonNullValueInput | InputJsonValue
    backendRoadMap?: NullableJsonNullValueInput | InputJsonValue
    qaRoadmap?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FrontendPromptUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    managerPrompt?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumFrontendPromptTypeFieldUpdateOperationsInput | $Enums.FrontendPromptType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FrontendPromptUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    managerPrompt?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumFrontendPromptTypeFieldUpdateOperationsInput | $Enums.FrontendPromptType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FrontendPromptUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    managerPrompt?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumFrontendPromptTypeFieldUpdateOperationsInput | $Enums.FrontendPromptType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BackendPromptUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    managerPrompt?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumBackendPromptTypeFieldUpdateOperationsInput | $Enums.BackendPromptType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BackendPromptUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    managerPrompt?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumBackendPromptTypeFieldUpdateOperationsInput | $Enums.BackendPromptType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BackendPromptUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    managerPrompt?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumBackendPromptTypeFieldUpdateOperationsInput | $Enums.BackendPromptType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QAPromptUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQAPromptTypeFieldUpdateOperationsInput | $Enums.QAPromptType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QAPromptUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQAPromptTypeFieldUpdateOperationsInput | $Enums.QAPromptType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QAPromptUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    responseContent?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumQAPromptTypeFieldUpdateOperationsInput | $Enums.QAPromptType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    status: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managerResponses?: ManagerResponseUpdateManyWithoutProjectNestedInput
    frontendPrompts?: FrontendPromptUpdateManyWithoutProjectNestedInput
    backendPrompts?: BackendPromptUpdateManyWithoutProjectNestedInput
    qaPrompts?: QAPromptUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    managerResponses?: ManagerResponseUncheckedUpdateManyWithoutProjectNestedInput
    frontendPrompts?: FrontendPromptUncheckedUpdateManyWithoutProjectNestedInput
    backendPrompts?: BackendPromptUncheckedUpdateManyWithoutProjectNestedInput
    qaPrompts?: QAPromptUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
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