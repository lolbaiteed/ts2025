
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Categorys
 * 
 */
export type Categorys = $Result.DefaultSelection<Prisma.$CategorysPayload>
/**
 * Model Bicycles
 * 
 */
export type Bicycles = $Result.DefaultSelection<Prisma.$BicyclesPayload>
/**
 * Model Tariffs
 * 
 */
export type Tariffs = $Result.DefaultSelection<Prisma.$TariffsPayload>
/**
 * Model Applications
 * 
 */
export type Applications = $Result.DefaultSelection<Prisma.$ApplicationsPayload>
/**
 * Model Bookings
 * 
 */
export type Bookings = $Result.DefaultSelection<Prisma.$BookingsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categorys`: Exposes CRUD operations for the **Categorys** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorys
    * const categorys = await prisma.categorys.findMany()
    * ```
    */
  get categorys(): Prisma.CategorysDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bicycles`: Exposes CRUD operations for the **Bicycles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bicycles
    * const bicycles = await prisma.bicycles.findMany()
    * ```
    */
  get bicycles(): Prisma.BicyclesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tariffs`: Exposes CRUD operations for the **Tariffs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tariffs
    * const tariffs = await prisma.tariffs.findMany()
    * ```
    */
  get tariffs(): Prisma.TariffsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.applications`: Exposes CRUD operations for the **Applications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.applications.findMany()
    * ```
    */
  get applications(): Prisma.ApplicationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookings`: Exposes CRUD operations for the **Bookings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.bookings.findMany()
    * ```
    */
  get bookings(): Prisma.BookingsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Users: 'Users',
    Categorys: 'Categorys',
    Bicycles: 'Bicycles',
    Tariffs: 'Tariffs',
    Applications: 'Applications',
    Bookings: 'Bookings'
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
      modelProps: "users" | "categorys" | "bicycles" | "tariffs" | "applications" | "bookings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Categorys: {
        payload: Prisma.$CategorysPayload<ExtArgs>
        fields: Prisma.CategorysFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategorysFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorysPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategorysFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorysPayload>
          }
          findFirst: {
            args: Prisma.CategorysFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorysPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategorysFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorysPayload>
          }
          findMany: {
            args: Prisma.CategorysFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorysPayload>[]
          }
          create: {
            args: Prisma.CategorysCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorysPayload>
          }
          createMany: {
            args: Prisma.CategorysCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategorysDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorysPayload>
          }
          update: {
            args: Prisma.CategorysUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorysPayload>
          }
          deleteMany: {
            args: Prisma.CategorysDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategorysUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategorysUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorysPayload>
          }
          aggregate: {
            args: Prisma.CategorysAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategorys>
          }
          groupBy: {
            args: Prisma.CategorysGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategorysGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategorysCountArgs<ExtArgs>
            result: $Utils.Optional<CategorysCountAggregateOutputType> | number
          }
        }
      }
      Bicycles: {
        payload: Prisma.$BicyclesPayload<ExtArgs>
        fields: Prisma.BicyclesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BicyclesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BicyclesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BicyclesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BicyclesPayload>
          }
          findFirst: {
            args: Prisma.BicyclesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BicyclesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BicyclesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BicyclesPayload>
          }
          findMany: {
            args: Prisma.BicyclesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BicyclesPayload>[]
          }
          create: {
            args: Prisma.BicyclesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BicyclesPayload>
          }
          createMany: {
            args: Prisma.BicyclesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BicyclesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BicyclesPayload>
          }
          update: {
            args: Prisma.BicyclesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BicyclesPayload>
          }
          deleteMany: {
            args: Prisma.BicyclesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BicyclesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BicyclesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BicyclesPayload>
          }
          aggregate: {
            args: Prisma.BicyclesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBicycles>
          }
          groupBy: {
            args: Prisma.BicyclesGroupByArgs<ExtArgs>
            result: $Utils.Optional<BicyclesGroupByOutputType>[]
          }
          count: {
            args: Prisma.BicyclesCountArgs<ExtArgs>
            result: $Utils.Optional<BicyclesCountAggregateOutputType> | number
          }
        }
      }
      Tariffs: {
        payload: Prisma.$TariffsPayload<ExtArgs>
        fields: Prisma.TariffsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TariffsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TariffsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffsPayload>
          }
          findFirst: {
            args: Prisma.TariffsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TariffsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffsPayload>
          }
          findMany: {
            args: Prisma.TariffsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffsPayload>[]
          }
          create: {
            args: Prisma.TariffsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffsPayload>
          }
          createMany: {
            args: Prisma.TariffsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TariffsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffsPayload>
          }
          update: {
            args: Prisma.TariffsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffsPayload>
          }
          deleteMany: {
            args: Prisma.TariffsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TariffsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TariffsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TariffsPayload>
          }
          aggregate: {
            args: Prisma.TariffsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTariffs>
          }
          groupBy: {
            args: Prisma.TariffsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TariffsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TariffsCountArgs<ExtArgs>
            result: $Utils.Optional<TariffsCountAggregateOutputType> | number
          }
        }
      }
      Applications: {
        payload: Prisma.$ApplicationsPayload<ExtArgs>
        fields: Prisma.ApplicationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          findFirst: {
            args: Prisma.ApplicationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          findMany: {
            args: Prisma.ApplicationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>[]
          }
          create: {
            args: Prisma.ApplicationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          createMany: {
            args: Prisma.ApplicationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ApplicationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          update: {
            args: Prisma.ApplicationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ApplicationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationsPayload>
          }
          aggregate: {
            args: Prisma.ApplicationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplications>
          }
          groupBy: {
            args: Prisma.ApplicationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationsCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationsCountAggregateOutputType> | number
          }
        }
      }
      Bookings: {
        payload: Prisma.$BookingsPayload<ExtArgs>
        fields: Prisma.BookingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          findFirst: {
            args: Prisma.BookingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          findMany: {
            args: Prisma.BookingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>[]
          }
          create: {
            args: Prisma.BookingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          createMany: {
            args: Prisma.BookingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          update: {
            args: Prisma.BookingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          deleteMany: {
            args: Prisma.BookingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingsPayload>
          }
          aggregate: {
            args: Prisma.BookingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookings>
          }
          groupBy: {
            args: Prisma.BookingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingsCountArgs<ExtArgs>
            result: $Utils.Optional<BookingsCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    users?: UsersOmit
    categorys?: CategorysOmit
    bicycles?: BicyclesOmit
    tariffs?: TariffsOmit
    applications?: ApplicationsOmit
    bookings?: BookingsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    categories: number
    applications: number
    bookings: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | UsersCountOutputTypeCountCategoriesArgs
    applications?: boolean | UsersCountOutputTypeCountApplicationsArgs
    bookings?: boolean | UsersCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategorysWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingsWhereInput
  }


  /**
   * Count Type CategorysCountOutputType
   */

  export type CategorysCountOutputType = {
    bicycles: number
    applications: number
    tariffs: number
  }

  export type CategorysCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bicycles?: boolean | CategorysCountOutputTypeCountBicyclesArgs
    applications?: boolean | CategorysCountOutputTypeCountApplicationsArgs
    tariffs?: boolean | CategorysCountOutputTypeCountTariffsArgs
  }

  // Custom InputTypes
  /**
   * CategorysCountOutputType without action
   */
  export type CategorysCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorysCountOutputType
     */
    select?: CategorysCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategorysCountOutputType without action
   */
  export type CategorysCountOutputTypeCountBicyclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BicyclesWhereInput
  }

  /**
   * CategorysCountOutputType without action
   */
  export type CategorysCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationsWhereInput
  }

  /**
   * CategorysCountOutputType without action
   */
  export type CategorysCountOutputTypeCountTariffsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TariffsWhereInput
  }


  /**
   * Count Type BicyclesCountOutputType
   */

  export type BicyclesCountOutputType = {
    bookings: number
  }

  export type BicyclesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | BicyclesCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * BicyclesCountOutputType without action
   */
  export type BicyclesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BicyclesCountOutputType
     */
    select?: BicyclesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BicyclesCountOutputType without action
   */
  export type BicyclesCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingsWhereInput
  }


  /**
   * Count Type TariffsCountOutputType
   */

  export type TariffsCountOutputType = {
    bookings: number
  }

  export type TariffsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | TariffsCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * TariffsCountOutputType without action
   */
  export type TariffsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TariffsCountOutputType
     */
    select?: TariffsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TariffsCountOutputType without action
   */
  export type TariffsCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    user_key: string | null
    name: string | null
    email: string | null
    phone: string | null
    password_hash: string | null
  }

  export type UsersMaxAggregateOutputType = {
    user_key: string | null
    name: string | null
    email: string | null
    phone: string | null
    password_hash: string | null
  }

  export type UsersCountAggregateOutputType = {
    user_key: number
    name: number
    email: number
    phone: number
    password_hash: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    user_key?: true
    name?: true
    email?: true
    phone?: true
    password_hash?: true
  }

  export type UsersMaxAggregateInputType = {
    user_key?: true
    name?: true
    email?: true
    phone?: true
    password_hash?: true
  }

  export type UsersCountAggregateInputType = {
    user_key?: true
    name?: true
    email?: true
    phone?: true
    password_hash?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
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
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_key: string
    name: string
    email: string
    phone: string
    password_hash: string
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_key?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password_hash?: boolean
    categories?: boolean | Users$categoriesArgs<ExtArgs>
    applications?: boolean | Users$applicationsArgs<ExtArgs>
    bookings?: boolean | Users$bookingsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    user_key?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password_hash?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_key" | "name" | "email" | "phone" | "password_hash", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | Users$categoriesArgs<ExtArgs>
    applications?: boolean | Users$applicationsArgs<ExtArgs>
    bookings?: boolean | Users$bookingsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      categories: Prisma.$CategorysPayload<ExtArgs>[]
      applications: Prisma.$ApplicationsPayload<ExtArgs>[]
      bookings: Prisma.$BookingsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_key: string
      name: string
      email: string
      phone: string
      password_hash: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_key`
     * const usersWithUser_keyOnly = await prisma.users.findMany({ select: { user_key: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends Users$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Users$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategorysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    applications<T extends Users$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Users$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends Users$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Users$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly user_key: FieldRef<"Users", 'String'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly phone: FieldRef<"Users", 'String'>
    readonly password_hash: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.categories
   */
  export type Users$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorys
     */
    select?: CategorysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorys
     */
    omit?: CategorysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorysInclude<ExtArgs> | null
    where?: CategorysWhereInput
    orderBy?: CategorysOrderByWithRelationInput | CategorysOrderByWithRelationInput[]
    cursor?: CategorysWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategorysScalarFieldEnum | CategorysScalarFieldEnum[]
  }

  /**
   * Users.applications
   */
  export type Users$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    where?: ApplicationsWhereInput
    orderBy?: ApplicationsOrderByWithRelationInput | ApplicationsOrderByWithRelationInput[]
    cursor?: ApplicationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }

  /**
   * Users.bookings
   */
  export type Users$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    where?: BookingsWhereInput
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    cursor?: BookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Categorys
   */

  export type AggregateCategorys = {
    _count: CategorysCountAggregateOutputType | null
    _min: CategorysMinAggregateOutputType | null
    _max: CategorysMaxAggregateOutputType | null
  }

  export type CategorysMinAggregateOutputType = {
    category_key: string | null
    name: string | null
    user_ref: string | null
  }

  export type CategorysMaxAggregateOutputType = {
    category_key: string | null
    name: string | null
    user_ref: string | null
  }

  export type CategorysCountAggregateOutputType = {
    category_key: number
    name: number
    user_ref: number
    _all: number
  }


  export type CategorysMinAggregateInputType = {
    category_key?: true
    name?: true
    user_ref?: true
  }

  export type CategorysMaxAggregateInputType = {
    category_key?: true
    name?: true
    user_ref?: true
  }

  export type CategorysCountAggregateInputType = {
    category_key?: true
    name?: true
    user_ref?: true
    _all?: true
  }

  export type CategorysAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorys to aggregate.
     */
    where?: CategorysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorys to fetch.
     */
    orderBy?: CategorysOrderByWithRelationInput | CategorysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategorysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorys
    **/
    _count?: true | CategorysCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategorysMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategorysMaxAggregateInputType
  }

  export type GetCategorysAggregateType<T extends CategorysAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorys]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorys[P]>
      : GetScalarType<T[P], AggregateCategorys[P]>
  }




  export type CategorysGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategorysWhereInput
    orderBy?: CategorysOrderByWithAggregationInput | CategorysOrderByWithAggregationInput[]
    by: CategorysScalarFieldEnum[] | CategorysScalarFieldEnum
    having?: CategorysScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategorysCountAggregateInputType | true
    _min?: CategorysMinAggregateInputType
    _max?: CategorysMaxAggregateInputType
  }

  export type CategorysGroupByOutputType = {
    category_key: string
    name: string
    user_ref: string
    _count: CategorysCountAggregateOutputType | null
    _min: CategorysMinAggregateOutputType | null
    _max: CategorysMaxAggregateOutputType | null
  }

  type GetCategorysGroupByPayload<T extends CategorysGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategorysGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategorysGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategorysGroupByOutputType[P]>
            : GetScalarType<T[P], CategorysGroupByOutputType[P]>
        }
      >
    >


  export type CategorysSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_key?: boolean
    name?: boolean
    user_ref?: boolean
    owner?: boolean | UsersDefaultArgs<ExtArgs>
    bicycles?: boolean | Categorys$bicyclesArgs<ExtArgs>
    applications?: boolean | Categorys$applicationsArgs<ExtArgs>
    tariffs?: boolean | Categorys$tariffsArgs<ExtArgs>
    _count?: boolean | CategorysCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorys"]>



  export type CategorysSelectScalar = {
    category_key?: boolean
    name?: boolean
    user_ref?: boolean
  }

  export type CategorysOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"category_key" | "name" | "user_ref", ExtArgs["result"]["categorys"]>
  export type CategorysInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UsersDefaultArgs<ExtArgs>
    bicycles?: boolean | Categorys$bicyclesArgs<ExtArgs>
    applications?: boolean | Categorys$applicationsArgs<ExtArgs>
    tariffs?: boolean | Categorys$tariffsArgs<ExtArgs>
    _count?: boolean | CategorysCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategorysPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categorys"
    objects: {
      owner: Prisma.$UsersPayload<ExtArgs>
      bicycles: Prisma.$BicyclesPayload<ExtArgs>[]
      applications: Prisma.$ApplicationsPayload<ExtArgs>[]
      tariffs: Prisma.$TariffsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      category_key: string
      name: string
      user_ref: string
    }, ExtArgs["result"]["categorys"]>
    composites: {}
  }

  type CategorysGetPayload<S extends boolean | null | undefined | CategorysDefaultArgs> = $Result.GetResult<Prisma.$CategorysPayload, S>

  type CategorysCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategorysFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategorysCountAggregateInputType | true
    }

  export interface CategorysDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categorys'], meta: { name: 'Categorys' } }
    /**
     * Find zero or one Categorys that matches the filter.
     * @param {CategorysFindUniqueArgs} args - Arguments to find a Categorys
     * @example
     * // Get one Categorys
     * const categorys = await prisma.categorys.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategorysFindUniqueArgs>(args: SelectSubset<T, CategorysFindUniqueArgs<ExtArgs>>): Prisma__CategorysClient<$Result.GetResult<Prisma.$CategorysPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categorys that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategorysFindUniqueOrThrowArgs} args - Arguments to find a Categorys
     * @example
     * // Get one Categorys
     * const categorys = await prisma.categorys.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategorysFindUniqueOrThrowArgs>(args: SelectSubset<T, CategorysFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategorysClient<$Result.GetResult<Prisma.$CategorysPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorysFindFirstArgs} args - Arguments to find a Categorys
     * @example
     * // Get one Categorys
     * const categorys = await prisma.categorys.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategorysFindFirstArgs>(args?: SelectSubset<T, CategorysFindFirstArgs<ExtArgs>>): Prisma__CategorysClient<$Result.GetResult<Prisma.$CategorysPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorys that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorysFindFirstOrThrowArgs} args - Arguments to find a Categorys
     * @example
     * // Get one Categorys
     * const categorys = await prisma.categorys.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategorysFindFirstOrThrowArgs>(args?: SelectSubset<T, CategorysFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategorysClient<$Result.GetResult<Prisma.$CategorysPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorysFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorys
     * const categorys = await prisma.categorys.findMany()
     * 
     * // Get first 10 Categorys
     * const categorys = await prisma.categorys.findMany({ take: 10 })
     * 
     * // Only select the `category_key`
     * const categorysWithCategory_keyOnly = await prisma.categorys.findMany({ select: { category_key: true } })
     * 
     */
    findMany<T extends CategorysFindManyArgs>(args?: SelectSubset<T, CategorysFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategorysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categorys.
     * @param {CategorysCreateArgs} args - Arguments to create a Categorys.
     * @example
     * // Create one Categorys
     * const Categorys = await prisma.categorys.create({
     *   data: {
     *     // ... data to create a Categorys
     *   }
     * })
     * 
     */
    create<T extends CategorysCreateArgs>(args: SelectSubset<T, CategorysCreateArgs<ExtArgs>>): Prisma__CategorysClient<$Result.GetResult<Prisma.$CategorysPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorys.
     * @param {CategorysCreateManyArgs} args - Arguments to create many Categorys.
     * @example
     * // Create many Categorys
     * const categorys = await prisma.categorys.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategorysCreateManyArgs>(args?: SelectSubset<T, CategorysCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categorys.
     * @param {CategorysDeleteArgs} args - Arguments to delete one Categorys.
     * @example
     * // Delete one Categorys
     * const Categorys = await prisma.categorys.delete({
     *   where: {
     *     // ... filter to delete one Categorys
     *   }
     * })
     * 
     */
    delete<T extends CategorysDeleteArgs>(args: SelectSubset<T, CategorysDeleteArgs<ExtArgs>>): Prisma__CategorysClient<$Result.GetResult<Prisma.$CategorysPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categorys.
     * @param {CategorysUpdateArgs} args - Arguments to update one Categorys.
     * @example
     * // Update one Categorys
     * const categorys = await prisma.categorys.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategorysUpdateArgs>(args: SelectSubset<T, CategorysUpdateArgs<ExtArgs>>): Prisma__CategorysClient<$Result.GetResult<Prisma.$CategorysPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorys.
     * @param {CategorysDeleteManyArgs} args - Arguments to filter Categorys to delete.
     * @example
     * // Delete a few Categorys
     * const { count } = await prisma.categorys.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategorysDeleteManyArgs>(args?: SelectSubset<T, CategorysDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorys
     * const categorys = await prisma.categorys.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategorysUpdateManyArgs>(args: SelectSubset<T, CategorysUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categorys.
     * @param {CategorysUpsertArgs} args - Arguments to update or create a Categorys.
     * @example
     * // Update or create a Categorys
     * const categorys = await prisma.categorys.upsert({
     *   create: {
     *     // ... data to create a Categorys
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorys we want to update
     *   }
     * })
     */
    upsert<T extends CategorysUpsertArgs>(args: SelectSubset<T, CategorysUpsertArgs<ExtArgs>>): Prisma__CategorysClient<$Result.GetResult<Prisma.$CategorysPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorysCountArgs} args - Arguments to filter Categorys to count.
     * @example
     * // Count the number of Categorys
     * const count = await prisma.categorys.count({
     *   where: {
     *     // ... the filter for the Categorys we want to count
     *   }
     * })
    **/
    count<T extends CategorysCountArgs>(
      args?: Subset<T, CategorysCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategorysCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategorysAggregateArgs>(args: Subset<T, CategorysAggregateArgs>): Prisma.PrismaPromise<GetCategorysAggregateType<T>>

    /**
     * Group by Categorys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorysGroupByArgs} args - Group by arguments.
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
      T extends CategorysGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategorysGroupByArgs['orderBy'] }
        : { orderBy?: CategorysGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategorysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategorysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categorys model
   */
  readonly fields: CategorysFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categorys.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategorysClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bicycles<T extends Categorys$bicyclesArgs<ExtArgs> = {}>(args?: Subset<T, Categorys$bicyclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BicyclesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    applications<T extends Categorys$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Categorys$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tariffs<T extends Categorys$tariffsArgs<ExtArgs> = {}>(args?: Subset<T, Categorys$tariffsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TariffsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categorys model
   */
  interface CategorysFieldRefs {
    readonly category_key: FieldRef<"Categorys", 'String'>
    readonly name: FieldRef<"Categorys", 'String'>
    readonly user_ref: FieldRef<"Categorys", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categorys findUnique
   */
  export type CategorysFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorys
     */
    select?: CategorysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorys
     */
    omit?: CategorysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorysInclude<ExtArgs> | null
    /**
     * Filter, which Categorys to fetch.
     */
    where: CategorysWhereUniqueInput
  }

  /**
   * Categorys findUniqueOrThrow
   */
  export type CategorysFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorys
     */
    select?: CategorysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorys
     */
    omit?: CategorysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorysInclude<ExtArgs> | null
    /**
     * Filter, which Categorys to fetch.
     */
    where: CategorysWhereUniqueInput
  }

  /**
   * Categorys findFirst
   */
  export type CategorysFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorys
     */
    select?: CategorysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorys
     */
    omit?: CategorysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorysInclude<ExtArgs> | null
    /**
     * Filter, which Categorys to fetch.
     */
    where?: CategorysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorys to fetch.
     */
    orderBy?: CategorysOrderByWithRelationInput | CategorysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorys.
     */
    cursor?: CategorysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorys.
     */
    distinct?: CategorysScalarFieldEnum | CategorysScalarFieldEnum[]
  }

  /**
   * Categorys findFirstOrThrow
   */
  export type CategorysFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorys
     */
    select?: CategorysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorys
     */
    omit?: CategorysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorysInclude<ExtArgs> | null
    /**
     * Filter, which Categorys to fetch.
     */
    where?: CategorysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorys to fetch.
     */
    orderBy?: CategorysOrderByWithRelationInput | CategorysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorys.
     */
    cursor?: CategorysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorys.
     */
    distinct?: CategorysScalarFieldEnum | CategorysScalarFieldEnum[]
  }

  /**
   * Categorys findMany
   */
  export type CategorysFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorys
     */
    select?: CategorysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorys
     */
    omit?: CategorysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorysInclude<ExtArgs> | null
    /**
     * Filter, which Categorys to fetch.
     */
    where?: CategorysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorys to fetch.
     */
    orderBy?: CategorysOrderByWithRelationInput | CategorysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorys.
     */
    cursor?: CategorysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorys.
     */
    skip?: number
    distinct?: CategorysScalarFieldEnum | CategorysScalarFieldEnum[]
  }

  /**
   * Categorys create
   */
  export type CategorysCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorys
     */
    select?: CategorysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorys
     */
    omit?: CategorysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorysInclude<ExtArgs> | null
    /**
     * The data needed to create a Categorys.
     */
    data: XOR<CategorysCreateInput, CategorysUncheckedCreateInput>
  }

  /**
   * Categorys createMany
   */
  export type CategorysCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorys.
     */
    data: CategorysCreateManyInput | CategorysCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categorys update
   */
  export type CategorysUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorys
     */
    select?: CategorysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorys
     */
    omit?: CategorysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorysInclude<ExtArgs> | null
    /**
     * The data needed to update a Categorys.
     */
    data: XOR<CategorysUpdateInput, CategorysUncheckedUpdateInput>
    /**
     * Choose, which Categorys to update.
     */
    where: CategorysWhereUniqueInput
  }

  /**
   * Categorys updateMany
   */
  export type CategorysUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorys.
     */
    data: XOR<CategorysUpdateManyMutationInput, CategorysUncheckedUpdateManyInput>
    /**
     * Filter which Categorys to update
     */
    where?: CategorysWhereInput
    /**
     * Limit how many Categorys to update.
     */
    limit?: number
  }

  /**
   * Categorys upsert
   */
  export type CategorysUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorys
     */
    select?: CategorysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorys
     */
    omit?: CategorysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorysInclude<ExtArgs> | null
    /**
     * The filter to search for the Categorys to update in case it exists.
     */
    where: CategorysWhereUniqueInput
    /**
     * In case the Categorys found by the `where` argument doesn't exist, create a new Categorys with this data.
     */
    create: XOR<CategorysCreateInput, CategorysUncheckedCreateInput>
    /**
     * In case the Categorys was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategorysUpdateInput, CategorysUncheckedUpdateInput>
  }

  /**
   * Categorys delete
   */
  export type CategorysDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorys
     */
    select?: CategorysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorys
     */
    omit?: CategorysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorysInclude<ExtArgs> | null
    /**
     * Filter which Categorys to delete.
     */
    where: CategorysWhereUniqueInput
  }

  /**
   * Categorys deleteMany
   */
  export type CategorysDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorys to delete
     */
    where?: CategorysWhereInput
    /**
     * Limit how many Categorys to delete.
     */
    limit?: number
  }

  /**
   * Categorys.bicycles
   */
  export type Categorys$bicyclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bicycles
     */
    select?: BicyclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bicycles
     */
    omit?: BicyclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BicyclesInclude<ExtArgs> | null
    where?: BicyclesWhereInput
    orderBy?: BicyclesOrderByWithRelationInput | BicyclesOrderByWithRelationInput[]
    cursor?: BicyclesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BicyclesScalarFieldEnum | BicyclesScalarFieldEnum[]
  }

  /**
   * Categorys.applications
   */
  export type Categorys$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    where?: ApplicationsWhereInput
    orderBy?: ApplicationsOrderByWithRelationInput | ApplicationsOrderByWithRelationInput[]
    cursor?: ApplicationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }

  /**
   * Categorys.tariffs
   */
  export type Categorys$tariffsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariffs
     */
    select?: TariffsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tariffs
     */
    omit?: TariffsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffsInclude<ExtArgs> | null
    where?: TariffsWhereInput
    orderBy?: TariffsOrderByWithRelationInput | TariffsOrderByWithRelationInput[]
    cursor?: TariffsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TariffsScalarFieldEnum | TariffsScalarFieldEnum[]
  }

  /**
   * Categorys without action
   */
  export type CategorysDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorys
     */
    select?: CategorysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorys
     */
    omit?: CategorysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorysInclude<ExtArgs> | null
  }


  /**
   * Model Bicycles
   */

  export type AggregateBicycles = {
    _count: BicyclesCountAggregateOutputType | null
    _avg: BicyclesAvgAggregateOutputType | null
    _sum: BicyclesSumAggregateOutputType | null
    _min: BicyclesMinAggregateOutputType | null
    _max: BicyclesMaxAggregateOutputType | null
  }

  export type BicyclesAvgAggregateOutputType = {
    locationX: number | null
    locationY: number | null
  }

  export type BicyclesSumAggregateOutputType = {
    locationX: number | null
    locationY: number | null
  }

  export type BicyclesMinAggregateOutputType = {
    bicycle_key: string | null
    name: string | null
    slug: string | null
    description: string | null
    locationX: number | null
    locationY: number | null
    pathToImage: string | null
    category_ref: string | null
  }

  export type BicyclesMaxAggregateOutputType = {
    bicycle_key: string | null
    name: string | null
    slug: string | null
    description: string | null
    locationX: number | null
    locationY: number | null
    pathToImage: string | null
    category_ref: string | null
  }

  export type BicyclesCountAggregateOutputType = {
    bicycle_key: number
    name: number
    slug: number
    description: number
    locationX: number
    locationY: number
    pathToImage: number
    category_ref: number
    _all: number
  }


  export type BicyclesAvgAggregateInputType = {
    locationX?: true
    locationY?: true
  }

  export type BicyclesSumAggregateInputType = {
    locationX?: true
    locationY?: true
  }

  export type BicyclesMinAggregateInputType = {
    bicycle_key?: true
    name?: true
    slug?: true
    description?: true
    locationX?: true
    locationY?: true
    pathToImage?: true
    category_ref?: true
  }

  export type BicyclesMaxAggregateInputType = {
    bicycle_key?: true
    name?: true
    slug?: true
    description?: true
    locationX?: true
    locationY?: true
    pathToImage?: true
    category_ref?: true
  }

  export type BicyclesCountAggregateInputType = {
    bicycle_key?: true
    name?: true
    slug?: true
    description?: true
    locationX?: true
    locationY?: true
    pathToImage?: true
    category_ref?: true
    _all?: true
  }

  export type BicyclesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bicycles to aggregate.
     */
    where?: BicyclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bicycles to fetch.
     */
    orderBy?: BicyclesOrderByWithRelationInput | BicyclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BicyclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bicycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bicycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bicycles
    **/
    _count?: true | BicyclesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BicyclesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BicyclesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BicyclesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BicyclesMaxAggregateInputType
  }

  export type GetBicyclesAggregateType<T extends BicyclesAggregateArgs> = {
        [P in keyof T & keyof AggregateBicycles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBicycles[P]>
      : GetScalarType<T[P], AggregateBicycles[P]>
  }




  export type BicyclesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BicyclesWhereInput
    orderBy?: BicyclesOrderByWithAggregationInput | BicyclesOrderByWithAggregationInput[]
    by: BicyclesScalarFieldEnum[] | BicyclesScalarFieldEnum
    having?: BicyclesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BicyclesCountAggregateInputType | true
    _avg?: BicyclesAvgAggregateInputType
    _sum?: BicyclesSumAggregateInputType
    _min?: BicyclesMinAggregateInputType
    _max?: BicyclesMaxAggregateInputType
  }

  export type BicyclesGroupByOutputType = {
    bicycle_key: string
    name: string
    slug: string
    description: string
    locationX: number
    locationY: number
    pathToImage: string
    category_ref: string
    _count: BicyclesCountAggregateOutputType | null
    _avg: BicyclesAvgAggregateOutputType | null
    _sum: BicyclesSumAggregateOutputType | null
    _min: BicyclesMinAggregateOutputType | null
    _max: BicyclesMaxAggregateOutputType | null
  }

  type GetBicyclesGroupByPayload<T extends BicyclesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BicyclesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BicyclesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BicyclesGroupByOutputType[P]>
            : GetScalarType<T[P], BicyclesGroupByOutputType[P]>
        }
      >
    >


  export type BicyclesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bicycle_key?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    locationX?: boolean
    locationY?: boolean
    pathToImage?: boolean
    category_ref?: boolean
    category?: boolean | CategorysDefaultArgs<ExtArgs>
    bookings?: boolean | Bicycles$bookingsArgs<ExtArgs>
    _count?: boolean | BicyclesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bicycles"]>



  export type BicyclesSelectScalar = {
    bicycle_key?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    locationX?: boolean
    locationY?: boolean
    pathToImage?: boolean
    category_ref?: boolean
  }

  export type BicyclesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"bicycle_key" | "name" | "slug" | "description" | "locationX" | "locationY" | "pathToImage" | "category_ref", ExtArgs["result"]["bicycles"]>
  export type BicyclesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategorysDefaultArgs<ExtArgs>
    bookings?: boolean | Bicycles$bookingsArgs<ExtArgs>
    _count?: boolean | BicyclesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BicyclesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bicycles"
    objects: {
      category: Prisma.$CategorysPayload<ExtArgs>
      bookings: Prisma.$BookingsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      bicycle_key: string
      name: string
      slug: string
      description: string
      locationX: number
      locationY: number
      pathToImage: string
      category_ref: string
    }, ExtArgs["result"]["bicycles"]>
    composites: {}
  }

  type BicyclesGetPayload<S extends boolean | null | undefined | BicyclesDefaultArgs> = $Result.GetResult<Prisma.$BicyclesPayload, S>

  type BicyclesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BicyclesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BicyclesCountAggregateInputType | true
    }

  export interface BicyclesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bicycles'], meta: { name: 'Bicycles' } }
    /**
     * Find zero or one Bicycles that matches the filter.
     * @param {BicyclesFindUniqueArgs} args - Arguments to find a Bicycles
     * @example
     * // Get one Bicycles
     * const bicycles = await prisma.bicycles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BicyclesFindUniqueArgs>(args: SelectSubset<T, BicyclesFindUniqueArgs<ExtArgs>>): Prisma__BicyclesClient<$Result.GetResult<Prisma.$BicyclesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bicycles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BicyclesFindUniqueOrThrowArgs} args - Arguments to find a Bicycles
     * @example
     * // Get one Bicycles
     * const bicycles = await prisma.bicycles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BicyclesFindUniqueOrThrowArgs>(args: SelectSubset<T, BicyclesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BicyclesClient<$Result.GetResult<Prisma.$BicyclesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bicycles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BicyclesFindFirstArgs} args - Arguments to find a Bicycles
     * @example
     * // Get one Bicycles
     * const bicycles = await prisma.bicycles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BicyclesFindFirstArgs>(args?: SelectSubset<T, BicyclesFindFirstArgs<ExtArgs>>): Prisma__BicyclesClient<$Result.GetResult<Prisma.$BicyclesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bicycles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BicyclesFindFirstOrThrowArgs} args - Arguments to find a Bicycles
     * @example
     * // Get one Bicycles
     * const bicycles = await prisma.bicycles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BicyclesFindFirstOrThrowArgs>(args?: SelectSubset<T, BicyclesFindFirstOrThrowArgs<ExtArgs>>): Prisma__BicyclesClient<$Result.GetResult<Prisma.$BicyclesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bicycles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BicyclesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bicycles
     * const bicycles = await prisma.bicycles.findMany()
     * 
     * // Get first 10 Bicycles
     * const bicycles = await prisma.bicycles.findMany({ take: 10 })
     * 
     * // Only select the `bicycle_key`
     * const bicyclesWithBicycle_keyOnly = await prisma.bicycles.findMany({ select: { bicycle_key: true } })
     * 
     */
    findMany<T extends BicyclesFindManyArgs>(args?: SelectSubset<T, BicyclesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BicyclesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bicycles.
     * @param {BicyclesCreateArgs} args - Arguments to create a Bicycles.
     * @example
     * // Create one Bicycles
     * const Bicycles = await prisma.bicycles.create({
     *   data: {
     *     // ... data to create a Bicycles
     *   }
     * })
     * 
     */
    create<T extends BicyclesCreateArgs>(args: SelectSubset<T, BicyclesCreateArgs<ExtArgs>>): Prisma__BicyclesClient<$Result.GetResult<Prisma.$BicyclesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bicycles.
     * @param {BicyclesCreateManyArgs} args - Arguments to create many Bicycles.
     * @example
     * // Create many Bicycles
     * const bicycles = await prisma.bicycles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BicyclesCreateManyArgs>(args?: SelectSubset<T, BicyclesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bicycles.
     * @param {BicyclesDeleteArgs} args - Arguments to delete one Bicycles.
     * @example
     * // Delete one Bicycles
     * const Bicycles = await prisma.bicycles.delete({
     *   where: {
     *     // ... filter to delete one Bicycles
     *   }
     * })
     * 
     */
    delete<T extends BicyclesDeleteArgs>(args: SelectSubset<T, BicyclesDeleteArgs<ExtArgs>>): Prisma__BicyclesClient<$Result.GetResult<Prisma.$BicyclesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bicycles.
     * @param {BicyclesUpdateArgs} args - Arguments to update one Bicycles.
     * @example
     * // Update one Bicycles
     * const bicycles = await prisma.bicycles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BicyclesUpdateArgs>(args: SelectSubset<T, BicyclesUpdateArgs<ExtArgs>>): Prisma__BicyclesClient<$Result.GetResult<Prisma.$BicyclesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bicycles.
     * @param {BicyclesDeleteManyArgs} args - Arguments to filter Bicycles to delete.
     * @example
     * // Delete a few Bicycles
     * const { count } = await prisma.bicycles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BicyclesDeleteManyArgs>(args?: SelectSubset<T, BicyclesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bicycles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BicyclesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bicycles
     * const bicycles = await prisma.bicycles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BicyclesUpdateManyArgs>(args: SelectSubset<T, BicyclesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bicycles.
     * @param {BicyclesUpsertArgs} args - Arguments to update or create a Bicycles.
     * @example
     * // Update or create a Bicycles
     * const bicycles = await prisma.bicycles.upsert({
     *   create: {
     *     // ... data to create a Bicycles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bicycles we want to update
     *   }
     * })
     */
    upsert<T extends BicyclesUpsertArgs>(args: SelectSubset<T, BicyclesUpsertArgs<ExtArgs>>): Prisma__BicyclesClient<$Result.GetResult<Prisma.$BicyclesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bicycles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BicyclesCountArgs} args - Arguments to filter Bicycles to count.
     * @example
     * // Count the number of Bicycles
     * const count = await prisma.bicycles.count({
     *   where: {
     *     // ... the filter for the Bicycles we want to count
     *   }
     * })
    **/
    count<T extends BicyclesCountArgs>(
      args?: Subset<T, BicyclesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BicyclesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bicycles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BicyclesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BicyclesAggregateArgs>(args: Subset<T, BicyclesAggregateArgs>): Prisma.PrismaPromise<GetBicyclesAggregateType<T>>

    /**
     * Group by Bicycles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BicyclesGroupByArgs} args - Group by arguments.
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
      T extends BicyclesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BicyclesGroupByArgs['orderBy'] }
        : { orderBy?: BicyclesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BicyclesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBicyclesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bicycles model
   */
  readonly fields: BicyclesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bicycles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BicyclesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategorysDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategorysDefaultArgs<ExtArgs>>): Prisma__CategorysClient<$Result.GetResult<Prisma.$CategorysPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends Bicycles$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Bicycles$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Bicycles model
   */
  interface BicyclesFieldRefs {
    readonly bicycle_key: FieldRef<"Bicycles", 'String'>
    readonly name: FieldRef<"Bicycles", 'String'>
    readonly slug: FieldRef<"Bicycles", 'String'>
    readonly description: FieldRef<"Bicycles", 'String'>
    readonly locationX: FieldRef<"Bicycles", 'Float'>
    readonly locationY: FieldRef<"Bicycles", 'Float'>
    readonly pathToImage: FieldRef<"Bicycles", 'String'>
    readonly category_ref: FieldRef<"Bicycles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Bicycles findUnique
   */
  export type BicyclesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bicycles
     */
    select?: BicyclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bicycles
     */
    omit?: BicyclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BicyclesInclude<ExtArgs> | null
    /**
     * Filter, which Bicycles to fetch.
     */
    where: BicyclesWhereUniqueInput
  }

  /**
   * Bicycles findUniqueOrThrow
   */
  export type BicyclesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bicycles
     */
    select?: BicyclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bicycles
     */
    omit?: BicyclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BicyclesInclude<ExtArgs> | null
    /**
     * Filter, which Bicycles to fetch.
     */
    where: BicyclesWhereUniqueInput
  }

  /**
   * Bicycles findFirst
   */
  export type BicyclesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bicycles
     */
    select?: BicyclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bicycles
     */
    omit?: BicyclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BicyclesInclude<ExtArgs> | null
    /**
     * Filter, which Bicycles to fetch.
     */
    where?: BicyclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bicycles to fetch.
     */
    orderBy?: BicyclesOrderByWithRelationInput | BicyclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bicycles.
     */
    cursor?: BicyclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bicycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bicycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bicycles.
     */
    distinct?: BicyclesScalarFieldEnum | BicyclesScalarFieldEnum[]
  }

  /**
   * Bicycles findFirstOrThrow
   */
  export type BicyclesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bicycles
     */
    select?: BicyclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bicycles
     */
    omit?: BicyclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BicyclesInclude<ExtArgs> | null
    /**
     * Filter, which Bicycles to fetch.
     */
    where?: BicyclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bicycles to fetch.
     */
    orderBy?: BicyclesOrderByWithRelationInput | BicyclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bicycles.
     */
    cursor?: BicyclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bicycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bicycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bicycles.
     */
    distinct?: BicyclesScalarFieldEnum | BicyclesScalarFieldEnum[]
  }

  /**
   * Bicycles findMany
   */
  export type BicyclesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bicycles
     */
    select?: BicyclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bicycles
     */
    omit?: BicyclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BicyclesInclude<ExtArgs> | null
    /**
     * Filter, which Bicycles to fetch.
     */
    where?: BicyclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bicycles to fetch.
     */
    orderBy?: BicyclesOrderByWithRelationInput | BicyclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bicycles.
     */
    cursor?: BicyclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bicycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bicycles.
     */
    skip?: number
    distinct?: BicyclesScalarFieldEnum | BicyclesScalarFieldEnum[]
  }

  /**
   * Bicycles create
   */
  export type BicyclesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bicycles
     */
    select?: BicyclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bicycles
     */
    omit?: BicyclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BicyclesInclude<ExtArgs> | null
    /**
     * The data needed to create a Bicycles.
     */
    data: XOR<BicyclesCreateInput, BicyclesUncheckedCreateInput>
  }

  /**
   * Bicycles createMany
   */
  export type BicyclesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bicycles.
     */
    data: BicyclesCreateManyInput | BicyclesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bicycles update
   */
  export type BicyclesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bicycles
     */
    select?: BicyclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bicycles
     */
    omit?: BicyclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BicyclesInclude<ExtArgs> | null
    /**
     * The data needed to update a Bicycles.
     */
    data: XOR<BicyclesUpdateInput, BicyclesUncheckedUpdateInput>
    /**
     * Choose, which Bicycles to update.
     */
    where: BicyclesWhereUniqueInput
  }

  /**
   * Bicycles updateMany
   */
  export type BicyclesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bicycles.
     */
    data: XOR<BicyclesUpdateManyMutationInput, BicyclesUncheckedUpdateManyInput>
    /**
     * Filter which Bicycles to update
     */
    where?: BicyclesWhereInput
    /**
     * Limit how many Bicycles to update.
     */
    limit?: number
  }

  /**
   * Bicycles upsert
   */
  export type BicyclesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bicycles
     */
    select?: BicyclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bicycles
     */
    omit?: BicyclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BicyclesInclude<ExtArgs> | null
    /**
     * The filter to search for the Bicycles to update in case it exists.
     */
    where: BicyclesWhereUniqueInput
    /**
     * In case the Bicycles found by the `where` argument doesn't exist, create a new Bicycles with this data.
     */
    create: XOR<BicyclesCreateInput, BicyclesUncheckedCreateInput>
    /**
     * In case the Bicycles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BicyclesUpdateInput, BicyclesUncheckedUpdateInput>
  }

  /**
   * Bicycles delete
   */
  export type BicyclesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bicycles
     */
    select?: BicyclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bicycles
     */
    omit?: BicyclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BicyclesInclude<ExtArgs> | null
    /**
     * Filter which Bicycles to delete.
     */
    where: BicyclesWhereUniqueInput
  }

  /**
   * Bicycles deleteMany
   */
  export type BicyclesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bicycles to delete
     */
    where?: BicyclesWhereInput
    /**
     * Limit how many Bicycles to delete.
     */
    limit?: number
  }

  /**
   * Bicycles.bookings
   */
  export type Bicycles$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    where?: BookingsWhereInput
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    cursor?: BookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Bicycles without action
   */
  export type BicyclesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bicycles
     */
    select?: BicyclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bicycles
     */
    omit?: BicyclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BicyclesInclude<ExtArgs> | null
  }


  /**
   * Model Tariffs
   */

  export type AggregateTariffs = {
    _count: TariffsCountAggregateOutputType | null
    _avg: TariffsAvgAggregateOutputType | null
    _sum: TariffsSumAggregateOutputType | null
    _min: TariffsMinAggregateOutputType | null
    _max: TariffsMaxAggregateOutputType | null
  }

  export type TariffsAvgAggregateOutputType = {
    basePrice: number | null
    minPrice: number | null
    maxPrice: number | null
  }

  export type TariffsSumAggregateOutputType = {
    basePrice: number | null
    minPrice: number | null
    maxPrice: number | null
  }

  export type TariffsMinAggregateOutputType = {
    tariff_key: string | null
    name: string | null
    type: string | null
    basePrice: number | null
    minPrice: number | null
    maxPrice: number | null
    category_ref: string | null
  }

  export type TariffsMaxAggregateOutputType = {
    tariff_key: string | null
    name: string | null
    type: string | null
    basePrice: number | null
    minPrice: number | null
    maxPrice: number | null
    category_ref: string | null
  }

  export type TariffsCountAggregateOutputType = {
    tariff_key: number
    name: number
    type: number
    basePrice: number
    minPrice: number
    maxPrice: number
    category_ref: number
    _all: number
  }


  export type TariffsAvgAggregateInputType = {
    basePrice?: true
    minPrice?: true
    maxPrice?: true
  }

  export type TariffsSumAggregateInputType = {
    basePrice?: true
    minPrice?: true
    maxPrice?: true
  }

  export type TariffsMinAggregateInputType = {
    tariff_key?: true
    name?: true
    type?: true
    basePrice?: true
    minPrice?: true
    maxPrice?: true
    category_ref?: true
  }

  export type TariffsMaxAggregateInputType = {
    tariff_key?: true
    name?: true
    type?: true
    basePrice?: true
    minPrice?: true
    maxPrice?: true
    category_ref?: true
  }

  export type TariffsCountAggregateInputType = {
    tariff_key?: true
    name?: true
    type?: true
    basePrice?: true
    minPrice?: true
    maxPrice?: true
    category_ref?: true
    _all?: true
  }

  export type TariffsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tariffs to aggregate.
     */
    where?: TariffsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tariffs to fetch.
     */
    orderBy?: TariffsOrderByWithRelationInput | TariffsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TariffsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tariffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tariffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tariffs
    **/
    _count?: true | TariffsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TariffsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TariffsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TariffsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TariffsMaxAggregateInputType
  }

  export type GetTariffsAggregateType<T extends TariffsAggregateArgs> = {
        [P in keyof T & keyof AggregateTariffs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTariffs[P]>
      : GetScalarType<T[P], AggregateTariffs[P]>
  }




  export type TariffsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TariffsWhereInput
    orderBy?: TariffsOrderByWithAggregationInput | TariffsOrderByWithAggregationInput[]
    by: TariffsScalarFieldEnum[] | TariffsScalarFieldEnum
    having?: TariffsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TariffsCountAggregateInputType | true
    _avg?: TariffsAvgAggregateInputType
    _sum?: TariffsSumAggregateInputType
    _min?: TariffsMinAggregateInputType
    _max?: TariffsMaxAggregateInputType
  }

  export type TariffsGroupByOutputType = {
    tariff_key: string
    name: string
    type: string
    basePrice: number
    minPrice: number | null
    maxPrice: number | null
    category_ref: string
    _count: TariffsCountAggregateOutputType | null
    _avg: TariffsAvgAggregateOutputType | null
    _sum: TariffsSumAggregateOutputType | null
    _min: TariffsMinAggregateOutputType | null
    _max: TariffsMaxAggregateOutputType | null
  }

  type GetTariffsGroupByPayload<T extends TariffsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TariffsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TariffsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TariffsGroupByOutputType[P]>
            : GetScalarType<T[P], TariffsGroupByOutputType[P]>
        }
      >
    >


  export type TariffsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tariff_key?: boolean
    name?: boolean
    type?: boolean
    basePrice?: boolean
    minPrice?: boolean
    maxPrice?: boolean
    category_ref?: boolean
    category?: boolean | CategorysDefaultArgs<ExtArgs>
    bookings?: boolean | Tariffs$bookingsArgs<ExtArgs>
    _count?: boolean | TariffsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tariffs"]>



  export type TariffsSelectScalar = {
    tariff_key?: boolean
    name?: boolean
    type?: boolean
    basePrice?: boolean
    minPrice?: boolean
    maxPrice?: boolean
    category_ref?: boolean
  }

  export type TariffsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tariff_key" | "name" | "type" | "basePrice" | "minPrice" | "maxPrice" | "category_ref", ExtArgs["result"]["tariffs"]>
  export type TariffsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategorysDefaultArgs<ExtArgs>
    bookings?: boolean | Tariffs$bookingsArgs<ExtArgs>
    _count?: boolean | TariffsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TariffsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tariffs"
    objects: {
      category: Prisma.$CategorysPayload<ExtArgs>
      bookings: Prisma.$BookingsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      tariff_key: string
      name: string
      type: string
      basePrice: number
      minPrice: number | null
      maxPrice: number | null
      category_ref: string
    }, ExtArgs["result"]["tariffs"]>
    composites: {}
  }

  type TariffsGetPayload<S extends boolean | null | undefined | TariffsDefaultArgs> = $Result.GetResult<Prisma.$TariffsPayload, S>

  type TariffsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TariffsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TariffsCountAggregateInputType | true
    }

  export interface TariffsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tariffs'], meta: { name: 'Tariffs' } }
    /**
     * Find zero or one Tariffs that matches the filter.
     * @param {TariffsFindUniqueArgs} args - Arguments to find a Tariffs
     * @example
     * // Get one Tariffs
     * const tariffs = await prisma.tariffs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TariffsFindUniqueArgs>(args: SelectSubset<T, TariffsFindUniqueArgs<ExtArgs>>): Prisma__TariffsClient<$Result.GetResult<Prisma.$TariffsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tariffs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TariffsFindUniqueOrThrowArgs} args - Arguments to find a Tariffs
     * @example
     * // Get one Tariffs
     * const tariffs = await prisma.tariffs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TariffsFindUniqueOrThrowArgs>(args: SelectSubset<T, TariffsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TariffsClient<$Result.GetResult<Prisma.$TariffsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tariffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffsFindFirstArgs} args - Arguments to find a Tariffs
     * @example
     * // Get one Tariffs
     * const tariffs = await prisma.tariffs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TariffsFindFirstArgs>(args?: SelectSubset<T, TariffsFindFirstArgs<ExtArgs>>): Prisma__TariffsClient<$Result.GetResult<Prisma.$TariffsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tariffs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffsFindFirstOrThrowArgs} args - Arguments to find a Tariffs
     * @example
     * // Get one Tariffs
     * const tariffs = await prisma.tariffs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TariffsFindFirstOrThrowArgs>(args?: SelectSubset<T, TariffsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TariffsClient<$Result.GetResult<Prisma.$TariffsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tariffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tariffs
     * const tariffs = await prisma.tariffs.findMany()
     * 
     * // Get first 10 Tariffs
     * const tariffs = await prisma.tariffs.findMany({ take: 10 })
     * 
     * // Only select the `tariff_key`
     * const tariffsWithTariff_keyOnly = await prisma.tariffs.findMany({ select: { tariff_key: true } })
     * 
     */
    findMany<T extends TariffsFindManyArgs>(args?: SelectSubset<T, TariffsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TariffsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tariffs.
     * @param {TariffsCreateArgs} args - Arguments to create a Tariffs.
     * @example
     * // Create one Tariffs
     * const Tariffs = await prisma.tariffs.create({
     *   data: {
     *     // ... data to create a Tariffs
     *   }
     * })
     * 
     */
    create<T extends TariffsCreateArgs>(args: SelectSubset<T, TariffsCreateArgs<ExtArgs>>): Prisma__TariffsClient<$Result.GetResult<Prisma.$TariffsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tariffs.
     * @param {TariffsCreateManyArgs} args - Arguments to create many Tariffs.
     * @example
     * // Create many Tariffs
     * const tariffs = await prisma.tariffs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TariffsCreateManyArgs>(args?: SelectSubset<T, TariffsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tariffs.
     * @param {TariffsDeleteArgs} args - Arguments to delete one Tariffs.
     * @example
     * // Delete one Tariffs
     * const Tariffs = await prisma.tariffs.delete({
     *   where: {
     *     // ... filter to delete one Tariffs
     *   }
     * })
     * 
     */
    delete<T extends TariffsDeleteArgs>(args: SelectSubset<T, TariffsDeleteArgs<ExtArgs>>): Prisma__TariffsClient<$Result.GetResult<Prisma.$TariffsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tariffs.
     * @param {TariffsUpdateArgs} args - Arguments to update one Tariffs.
     * @example
     * // Update one Tariffs
     * const tariffs = await prisma.tariffs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TariffsUpdateArgs>(args: SelectSubset<T, TariffsUpdateArgs<ExtArgs>>): Prisma__TariffsClient<$Result.GetResult<Prisma.$TariffsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tariffs.
     * @param {TariffsDeleteManyArgs} args - Arguments to filter Tariffs to delete.
     * @example
     * // Delete a few Tariffs
     * const { count } = await prisma.tariffs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TariffsDeleteManyArgs>(args?: SelectSubset<T, TariffsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tariffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tariffs
     * const tariffs = await prisma.tariffs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TariffsUpdateManyArgs>(args: SelectSubset<T, TariffsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tariffs.
     * @param {TariffsUpsertArgs} args - Arguments to update or create a Tariffs.
     * @example
     * // Update or create a Tariffs
     * const tariffs = await prisma.tariffs.upsert({
     *   create: {
     *     // ... data to create a Tariffs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tariffs we want to update
     *   }
     * })
     */
    upsert<T extends TariffsUpsertArgs>(args: SelectSubset<T, TariffsUpsertArgs<ExtArgs>>): Prisma__TariffsClient<$Result.GetResult<Prisma.$TariffsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tariffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffsCountArgs} args - Arguments to filter Tariffs to count.
     * @example
     * // Count the number of Tariffs
     * const count = await prisma.tariffs.count({
     *   where: {
     *     // ... the filter for the Tariffs we want to count
     *   }
     * })
    **/
    count<T extends TariffsCountArgs>(
      args?: Subset<T, TariffsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TariffsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tariffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TariffsAggregateArgs>(args: Subset<T, TariffsAggregateArgs>): Prisma.PrismaPromise<GetTariffsAggregateType<T>>

    /**
     * Group by Tariffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffsGroupByArgs} args - Group by arguments.
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
      T extends TariffsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TariffsGroupByArgs['orderBy'] }
        : { orderBy?: TariffsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TariffsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTariffsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tariffs model
   */
  readonly fields: TariffsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tariffs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TariffsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategorysDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategorysDefaultArgs<ExtArgs>>): Prisma__CategorysClient<$Result.GetResult<Prisma.$CategorysPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends Tariffs$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Tariffs$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tariffs model
   */
  interface TariffsFieldRefs {
    readonly tariff_key: FieldRef<"Tariffs", 'String'>
    readonly name: FieldRef<"Tariffs", 'String'>
    readonly type: FieldRef<"Tariffs", 'String'>
    readonly basePrice: FieldRef<"Tariffs", 'Float'>
    readonly minPrice: FieldRef<"Tariffs", 'Float'>
    readonly maxPrice: FieldRef<"Tariffs", 'Float'>
    readonly category_ref: FieldRef<"Tariffs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tariffs findUnique
   */
  export type TariffsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariffs
     */
    select?: TariffsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tariffs
     */
    omit?: TariffsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffsInclude<ExtArgs> | null
    /**
     * Filter, which Tariffs to fetch.
     */
    where: TariffsWhereUniqueInput
  }

  /**
   * Tariffs findUniqueOrThrow
   */
  export type TariffsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariffs
     */
    select?: TariffsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tariffs
     */
    omit?: TariffsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffsInclude<ExtArgs> | null
    /**
     * Filter, which Tariffs to fetch.
     */
    where: TariffsWhereUniqueInput
  }

  /**
   * Tariffs findFirst
   */
  export type TariffsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariffs
     */
    select?: TariffsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tariffs
     */
    omit?: TariffsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffsInclude<ExtArgs> | null
    /**
     * Filter, which Tariffs to fetch.
     */
    where?: TariffsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tariffs to fetch.
     */
    orderBy?: TariffsOrderByWithRelationInput | TariffsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tariffs.
     */
    cursor?: TariffsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tariffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tariffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tariffs.
     */
    distinct?: TariffsScalarFieldEnum | TariffsScalarFieldEnum[]
  }

  /**
   * Tariffs findFirstOrThrow
   */
  export type TariffsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariffs
     */
    select?: TariffsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tariffs
     */
    omit?: TariffsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffsInclude<ExtArgs> | null
    /**
     * Filter, which Tariffs to fetch.
     */
    where?: TariffsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tariffs to fetch.
     */
    orderBy?: TariffsOrderByWithRelationInput | TariffsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tariffs.
     */
    cursor?: TariffsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tariffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tariffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tariffs.
     */
    distinct?: TariffsScalarFieldEnum | TariffsScalarFieldEnum[]
  }

  /**
   * Tariffs findMany
   */
  export type TariffsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariffs
     */
    select?: TariffsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tariffs
     */
    omit?: TariffsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffsInclude<ExtArgs> | null
    /**
     * Filter, which Tariffs to fetch.
     */
    where?: TariffsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tariffs to fetch.
     */
    orderBy?: TariffsOrderByWithRelationInput | TariffsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tariffs.
     */
    cursor?: TariffsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tariffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tariffs.
     */
    skip?: number
    distinct?: TariffsScalarFieldEnum | TariffsScalarFieldEnum[]
  }

  /**
   * Tariffs create
   */
  export type TariffsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariffs
     */
    select?: TariffsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tariffs
     */
    omit?: TariffsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffsInclude<ExtArgs> | null
    /**
     * The data needed to create a Tariffs.
     */
    data: XOR<TariffsCreateInput, TariffsUncheckedCreateInput>
  }

  /**
   * Tariffs createMany
   */
  export type TariffsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tariffs.
     */
    data: TariffsCreateManyInput | TariffsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tariffs update
   */
  export type TariffsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariffs
     */
    select?: TariffsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tariffs
     */
    omit?: TariffsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffsInclude<ExtArgs> | null
    /**
     * The data needed to update a Tariffs.
     */
    data: XOR<TariffsUpdateInput, TariffsUncheckedUpdateInput>
    /**
     * Choose, which Tariffs to update.
     */
    where: TariffsWhereUniqueInput
  }

  /**
   * Tariffs updateMany
   */
  export type TariffsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tariffs.
     */
    data: XOR<TariffsUpdateManyMutationInput, TariffsUncheckedUpdateManyInput>
    /**
     * Filter which Tariffs to update
     */
    where?: TariffsWhereInput
    /**
     * Limit how many Tariffs to update.
     */
    limit?: number
  }

  /**
   * Tariffs upsert
   */
  export type TariffsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariffs
     */
    select?: TariffsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tariffs
     */
    omit?: TariffsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffsInclude<ExtArgs> | null
    /**
     * The filter to search for the Tariffs to update in case it exists.
     */
    where: TariffsWhereUniqueInput
    /**
     * In case the Tariffs found by the `where` argument doesn't exist, create a new Tariffs with this data.
     */
    create: XOR<TariffsCreateInput, TariffsUncheckedCreateInput>
    /**
     * In case the Tariffs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TariffsUpdateInput, TariffsUncheckedUpdateInput>
  }

  /**
   * Tariffs delete
   */
  export type TariffsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariffs
     */
    select?: TariffsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tariffs
     */
    omit?: TariffsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffsInclude<ExtArgs> | null
    /**
     * Filter which Tariffs to delete.
     */
    where: TariffsWhereUniqueInput
  }

  /**
   * Tariffs deleteMany
   */
  export type TariffsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tariffs to delete
     */
    where?: TariffsWhereInput
    /**
     * Limit how many Tariffs to delete.
     */
    limit?: number
  }

  /**
   * Tariffs.bookings
   */
  export type Tariffs$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    where?: BookingsWhereInput
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    cursor?: BookingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Tariffs without action
   */
  export type TariffsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tariffs
     */
    select?: TariffsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tariffs
     */
    omit?: TariffsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TariffsInclude<ExtArgs> | null
  }


  /**
   * Model Applications
   */

  export type AggregateApplications = {
    _count: ApplicationsCountAggregateOutputType | null
    _min: ApplicationsMinAggregateOutputType | null
    _max: ApplicationsMaxAggregateOutputType | null
  }

  export type ApplicationsMinAggregateOutputType = {
    application_key: string | null
    category_ref: string | null
    user_ref: string | null
  }

  export type ApplicationsMaxAggregateOutputType = {
    application_key: string | null
    category_ref: string | null
    user_ref: string | null
  }

  export type ApplicationsCountAggregateOutputType = {
    application_key: number
    category_ref: number
    user_ref: number
    _all: number
  }


  export type ApplicationsMinAggregateInputType = {
    application_key?: true
    category_ref?: true
    user_ref?: true
  }

  export type ApplicationsMaxAggregateInputType = {
    application_key?: true
    category_ref?: true
    user_ref?: true
  }

  export type ApplicationsCountAggregateInputType = {
    application_key?: true
    category_ref?: true
    user_ref?: true
    _all?: true
  }

  export type ApplicationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to aggregate.
     */
    where?: ApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationsOrderByWithRelationInput | ApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationsMaxAggregateInputType
  }

  export type GetApplicationsAggregateType<T extends ApplicationsAggregateArgs> = {
        [P in keyof T & keyof AggregateApplications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplications[P]>
      : GetScalarType<T[P], AggregateApplications[P]>
  }




  export type ApplicationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationsWhereInput
    orderBy?: ApplicationsOrderByWithAggregationInput | ApplicationsOrderByWithAggregationInput[]
    by: ApplicationsScalarFieldEnum[] | ApplicationsScalarFieldEnum
    having?: ApplicationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationsCountAggregateInputType | true
    _min?: ApplicationsMinAggregateInputType
    _max?: ApplicationsMaxAggregateInputType
  }

  export type ApplicationsGroupByOutputType = {
    application_key: string
    category_ref: string
    user_ref: string
    _count: ApplicationsCountAggregateOutputType | null
    _min: ApplicationsMinAggregateOutputType | null
    _max: ApplicationsMaxAggregateOutputType | null
  }

  type GetApplicationsGroupByPayload<T extends ApplicationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationsGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationsGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    application_key?: boolean
    category_ref?: boolean
    user_ref?: boolean
    category?: boolean | CategorysDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applications"]>



  export type ApplicationsSelectScalar = {
    application_key?: boolean
    category_ref?: boolean
    user_ref?: boolean
  }

  export type ApplicationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"application_key" | "category_ref" | "user_ref", ExtArgs["result"]["applications"]>
  export type ApplicationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategorysDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $ApplicationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Applications"
    objects: {
      category: Prisma.$CategorysPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      application_key: string
      category_ref: string
      user_ref: string
    }, ExtArgs["result"]["applications"]>
    composites: {}
  }

  type ApplicationsGetPayload<S extends boolean | null | undefined | ApplicationsDefaultArgs> = $Result.GetResult<Prisma.$ApplicationsPayload, S>

  type ApplicationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationsCountAggregateInputType | true
    }

  export interface ApplicationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Applications'], meta: { name: 'Applications' } }
    /**
     * Find zero or one Applications that matches the filter.
     * @param {ApplicationsFindUniqueArgs} args - Arguments to find a Applications
     * @example
     * // Get one Applications
     * const applications = await prisma.applications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationsFindUniqueArgs>(args: SelectSubset<T, ApplicationsFindUniqueArgs<ExtArgs>>): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Applications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationsFindUniqueOrThrowArgs} args - Arguments to find a Applications
     * @example
     * // Get one Applications
     * const applications = await prisma.applications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationsFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsFindFirstArgs} args - Arguments to find a Applications
     * @example
     * // Get one Applications
     * const applications = await prisma.applications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationsFindFirstArgs>(args?: SelectSubset<T, ApplicationsFindFirstArgs<ExtArgs>>): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Applications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsFindFirstOrThrowArgs} args - Arguments to find a Applications
     * @example
     * // Get one Applications
     * const applications = await prisma.applications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationsFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.applications.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.applications.findMany({ take: 10 })
     * 
     * // Only select the `application_key`
     * const applicationsWithApplication_keyOnly = await prisma.applications.findMany({ select: { application_key: true } })
     * 
     */
    findMany<T extends ApplicationsFindManyArgs>(args?: SelectSubset<T, ApplicationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Applications.
     * @param {ApplicationsCreateArgs} args - Arguments to create a Applications.
     * @example
     * // Create one Applications
     * const Applications = await prisma.applications.create({
     *   data: {
     *     // ... data to create a Applications
     *   }
     * })
     * 
     */
    create<T extends ApplicationsCreateArgs>(args: SelectSubset<T, ApplicationsCreateArgs<ExtArgs>>): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applications.
     * @param {ApplicationsCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const applications = await prisma.applications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationsCreateManyArgs>(args?: SelectSubset<T, ApplicationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Applications.
     * @param {ApplicationsDeleteArgs} args - Arguments to delete one Applications.
     * @example
     * // Delete one Applications
     * const Applications = await prisma.applications.delete({
     *   where: {
     *     // ... filter to delete one Applications
     *   }
     * })
     * 
     */
    delete<T extends ApplicationsDeleteArgs>(args: SelectSubset<T, ApplicationsDeleteArgs<ExtArgs>>): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Applications.
     * @param {ApplicationsUpdateArgs} args - Arguments to update one Applications.
     * @example
     * // Update one Applications
     * const applications = await prisma.applications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationsUpdateArgs>(args: SelectSubset<T, ApplicationsUpdateArgs<ExtArgs>>): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationsDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.applications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationsDeleteManyArgs>(args?: SelectSubset<T, ApplicationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const applications = await prisma.applications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationsUpdateManyArgs>(args: SelectSubset<T, ApplicationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Applications.
     * @param {ApplicationsUpsertArgs} args - Arguments to update or create a Applications.
     * @example
     * // Update or create a Applications
     * const applications = await prisma.applications.upsert({
     *   create: {
     *     // ... data to create a Applications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Applications we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationsUpsertArgs>(args: SelectSubset<T, ApplicationsUpsertArgs<ExtArgs>>): Prisma__ApplicationsClient<$Result.GetResult<Prisma.$ApplicationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.applications.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationsCountArgs>(
      args?: Subset<T, ApplicationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApplicationsAggregateArgs>(args: Subset<T, ApplicationsAggregateArgs>): Prisma.PrismaPromise<GetApplicationsAggregateType<T>>

    /**
     * Group by Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationsGroupByArgs} args - Group by arguments.
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
      T extends ApplicationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationsGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApplicationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Applications model
   */
  readonly fields: ApplicationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Applications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategorysDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategorysDefaultArgs<ExtArgs>>): Prisma__CategorysClient<$Result.GetResult<Prisma.$CategorysPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Applications model
   */
  interface ApplicationsFieldRefs {
    readonly application_key: FieldRef<"Applications", 'String'>
    readonly category_ref: FieldRef<"Applications", 'String'>
    readonly user_ref: FieldRef<"Applications", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Applications findUnique
   */
  export type ApplicationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where: ApplicationsWhereUniqueInput
  }

  /**
   * Applications findUniqueOrThrow
   */
  export type ApplicationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where: ApplicationsWhereUniqueInput
  }

  /**
   * Applications findFirst
   */
  export type ApplicationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationsOrderByWithRelationInput | ApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }

  /**
   * Applications findFirstOrThrow
   */
  export type ApplicationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationsOrderByWithRelationInput | ApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }

  /**
   * Applications findMany
   */
  export type ApplicationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationsOrderByWithRelationInput | ApplicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: ApplicationsScalarFieldEnum | ApplicationsScalarFieldEnum[]
  }

  /**
   * Applications create
   */
  export type ApplicationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Applications.
     */
    data: XOR<ApplicationsCreateInput, ApplicationsUncheckedCreateInput>
  }

  /**
   * Applications createMany
   */
  export type ApplicationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationsCreateManyInput | ApplicationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Applications update
   */
  export type ApplicationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Applications.
     */
    data: XOR<ApplicationsUpdateInput, ApplicationsUncheckedUpdateInput>
    /**
     * Choose, which Applications to update.
     */
    where: ApplicationsWhereUniqueInput
  }

  /**
   * Applications updateMany
   */
  export type ApplicationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationsUpdateManyMutationInput, ApplicationsUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationsWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
  }

  /**
   * Applications upsert
   */
  export type ApplicationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Applications to update in case it exists.
     */
    where: ApplicationsWhereUniqueInput
    /**
     * In case the Applications found by the `where` argument doesn't exist, create a new Applications with this data.
     */
    create: XOR<ApplicationsCreateInput, ApplicationsUncheckedCreateInput>
    /**
     * In case the Applications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationsUpdateInput, ApplicationsUncheckedUpdateInput>
  }

  /**
   * Applications delete
   */
  export type ApplicationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
    /**
     * Filter which Applications to delete.
     */
    where: ApplicationsWhereUniqueInput
  }

  /**
   * Applications deleteMany
   */
  export type ApplicationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationsWhereInput
    /**
     * Limit how many Applications to delete.
     */
    limit?: number
  }

  /**
   * Applications without action
   */
  export type ApplicationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Applications
     */
    select?: ApplicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Applications
     */
    omit?: ApplicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationsInclude<ExtArgs> | null
  }


  /**
   * Model Bookings
   */

  export type AggregateBookings = {
    _count: BookingsCountAggregateOutputType | null
    _avg: BookingsAvgAggregateOutputType | null
    _sum: BookingsSumAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  export type BookingsAvgAggregateOutputType = {
    rating: number | null
    price: number | null
    percentageOfWear: number | null
  }

  export type BookingsSumAggregateOutputType = {
    rating: number | null
    price: number | null
    percentageOfWear: number | null
  }

  export type BookingsMinAggregateOutputType = {
    booking_key: string | null
    rating: number | null
    price: number | null
    percentageOfWear: number | null
    startedAt: Date | null
    endedAt: Date | null
    bicycle_ref: string | null
    tariff_ref: string | null
    user_ref: string | null
  }

  export type BookingsMaxAggregateOutputType = {
    booking_key: string | null
    rating: number | null
    price: number | null
    percentageOfWear: number | null
    startedAt: Date | null
    endedAt: Date | null
    bicycle_ref: string | null
    tariff_ref: string | null
    user_ref: string | null
  }

  export type BookingsCountAggregateOutputType = {
    booking_key: number
    rating: number
    price: number
    percentageOfWear: number
    startedAt: number
    endedAt: number
    bicycle_ref: number
    tariff_ref: number
    user_ref: number
    photos: number
    _all: number
  }


  export type BookingsAvgAggregateInputType = {
    rating?: true
    price?: true
    percentageOfWear?: true
  }

  export type BookingsSumAggregateInputType = {
    rating?: true
    price?: true
    percentageOfWear?: true
  }

  export type BookingsMinAggregateInputType = {
    booking_key?: true
    rating?: true
    price?: true
    percentageOfWear?: true
    startedAt?: true
    endedAt?: true
    bicycle_ref?: true
    tariff_ref?: true
    user_ref?: true
  }

  export type BookingsMaxAggregateInputType = {
    booking_key?: true
    rating?: true
    price?: true
    percentageOfWear?: true
    startedAt?: true
    endedAt?: true
    bicycle_ref?: true
    tariff_ref?: true
    user_ref?: true
  }

  export type BookingsCountAggregateInputType = {
    booking_key?: true
    rating?: true
    price?: true
    percentageOfWear?: true
    startedAt?: true
    endedAt?: true
    bicycle_ref?: true
    tariff_ref?: true
    user_ref?: true
    photos?: true
    _all?: true
  }

  export type BookingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to aggregate.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingsMaxAggregateInputType
  }

  export type GetBookingsAggregateType<T extends BookingsAggregateArgs> = {
        [P in keyof T & keyof AggregateBookings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookings[P]>
      : GetScalarType<T[P], AggregateBookings[P]>
  }




  export type BookingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingsWhereInput
    orderBy?: BookingsOrderByWithAggregationInput | BookingsOrderByWithAggregationInput[]
    by: BookingsScalarFieldEnum[] | BookingsScalarFieldEnum
    having?: BookingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingsCountAggregateInputType | true
    _avg?: BookingsAvgAggregateInputType
    _sum?: BookingsSumAggregateInputType
    _min?: BookingsMinAggregateInputType
    _max?: BookingsMaxAggregateInputType
  }

  export type BookingsGroupByOutputType = {
    booking_key: string
    rating: number | null
    price: number | null
    percentageOfWear: number | null
    startedAt: Date
    endedAt: Date | null
    bicycle_ref: string
    tariff_ref: string
    user_ref: string
    photos: JsonValue | null
    _count: BookingsCountAggregateOutputType | null
    _avg: BookingsAvgAggregateOutputType | null
    _sum: BookingsSumAggregateOutputType | null
    _min: BookingsMinAggregateOutputType | null
    _max: BookingsMaxAggregateOutputType | null
  }

  type GetBookingsGroupByPayload<T extends BookingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingsGroupByOutputType[P]>
            : GetScalarType<T[P], BookingsGroupByOutputType[P]>
        }
      >
    >


  export type BookingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    booking_key?: boolean
    rating?: boolean
    price?: boolean
    percentageOfWear?: boolean
    startedAt?: boolean
    endedAt?: boolean
    bicycle_ref?: boolean
    tariff_ref?: boolean
    user_ref?: boolean
    photos?: boolean
    bicycle?: boolean | BicyclesDefaultArgs<ExtArgs>
    tariff?: boolean | TariffsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookings"]>



  export type BookingsSelectScalar = {
    booking_key?: boolean
    rating?: boolean
    price?: boolean
    percentageOfWear?: boolean
    startedAt?: boolean
    endedAt?: boolean
    bicycle_ref?: boolean
    tariff_ref?: boolean
    user_ref?: boolean
    photos?: boolean
  }

  export type BookingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"booking_key" | "rating" | "price" | "percentageOfWear" | "startedAt" | "endedAt" | "bicycle_ref" | "tariff_ref" | "user_ref" | "photos", ExtArgs["result"]["bookings"]>
  export type BookingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bicycle?: boolean | BicyclesDefaultArgs<ExtArgs>
    tariff?: boolean | TariffsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $BookingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bookings"
    objects: {
      bicycle: Prisma.$BicyclesPayload<ExtArgs>
      tariff: Prisma.$TariffsPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      booking_key: string
      rating: number | null
      price: number | null
      percentageOfWear: number | null
      startedAt: Date
      endedAt: Date | null
      bicycle_ref: string
      tariff_ref: string
      user_ref: string
      photos: Prisma.JsonValue | null
    }, ExtArgs["result"]["bookings"]>
    composites: {}
  }

  type BookingsGetPayload<S extends boolean | null | undefined | BookingsDefaultArgs> = $Result.GetResult<Prisma.$BookingsPayload, S>

  type BookingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingsCountAggregateInputType | true
    }

  export interface BookingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bookings'], meta: { name: 'Bookings' } }
    /**
     * Find zero or one Bookings that matches the filter.
     * @param {BookingsFindUniqueArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingsFindUniqueArgs>(args: SelectSubset<T, BookingsFindUniqueArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bookings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingsFindUniqueOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingsFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsFindFirstArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingsFindFirstArgs>(args?: SelectSubset<T, BookingsFindFirstArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsFindFirstOrThrowArgs} args - Arguments to find a Bookings
     * @example
     * // Get one Bookings
     * const bookings = await prisma.bookings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingsFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.bookings.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.bookings.findMany({ take: 10 })
     * 
     * // Only select the `booking_key`
     * const bookingsWithBooking_keyOnly = await prisma.bookings.findMany({ select: { booking_key: true } })
     * 
     */
    findMany<T extends BookingsFindManyArgs>(args?: SelectSubset<T, BookingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bookings.
     * @param {BookingsCreateArgs} args - Arguments to create a Bookings.
     * @example
     * // Create one Bookings
     * const Bookings = await prisma.bookings.create({
     *   data: {
     *     // ... data to create a Bookings
     *   }
     * })
     * 
     */
    create<T extends BookingsCreateArgs>(args: SelectSubset<T, BookingsCreateArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingsCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const bookings = await prisma.bookings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingsCreateManyArgs>(args?: SelectSubset<T, BookingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bookings.
     * @param {BookingsDeleteArgs} args - Arguments to delete one Bookings.
     * @example
     * // Delete one Bookings
     * const Bookings = await prisma.bookings.delete({
     *   where: {
     *     // ... filter to delete one Bookings
     *   }
     * })
     * 
     */
    delete<T extends BookingsDeleteArgs>(args: SelectSubset<T, BookingsDeleteArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bookings.
     * @param {BookingsUpdateArgs} args - Arguments to update one Bookings.
     * @example
     * // Update one Bookings
     * const bookings = await prisma.bookings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingsUpdateArgs>(args: SelectSubset<T, BookingsUpdateArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingsDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.bookings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingsDeleteManyArgs>(args?: SelectSubset<T, BookingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const bookings = await prisma.bookings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingsUpdateManyArgs>(args: SelectSubset<T, BookingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bookings.
     * @param {BookingsUpsertArgs} args - Arguments to update or create a Bookings.
     * @example
     * // Update or create a Bookings
     * const bookings = await prisma.bookings.upsert({
     *   create: {
     *     // ... data to create a Bookings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookings we want to update
     *   }
     * })
     */
    upsert<T extends BookingsUpsertArgs>(args: SelectSubset<T, BookingsUpsertArgs<ExtArgs>>): Prisma__BookingsClient<$Result.GetResult<Prisma.$BookingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.bookings.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingsCountArgs>(
      args?: Subset<T, BookingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingsAggregateArgs>(args: Subset<T, BookingsAggregateArgs>): Prisma.PrismaPromise<GetBookingsAggregateType<T>>

    /**
     * Group by Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingsGroupByArgs} args - Group by arguments.
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
      T extends BookingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingsGroupByArgs['orderBy'] }
        : { orderBy?: BookingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bookings model
   */
  readonly fields: BookingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bookings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bicycle<T extends BicyclesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BicyclesDefaultArgs<ExtArgs>>): Prisma__BicyclesClient<$Result.GetResult<Prisma.$BicyclesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tariff<T extends TariffsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TariffsDefaultArgs<ExtArgs>>): Prisma__TariffsClient<$Result.GetResult<Prisma.$TariffsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Bookings model
   */
  interface BookingsFieldRefs {
    readonly booking_key: FieldRef<"Bookings", 'String'>
    readonly rating: FieldRef<"Bookings", 'Int'>
    readonly price: FieldRef<"Bookings", 'Float'>
    readonly percentageOfWear: FieldRef<"Bookings", 'Float'>
    readonly startedAt: FieldRef<"Bookings", 'DateTime'>
    readonly endedAt: FieldRef<"Bookings", 'DateTime'>
    readonly bicycle_ref: FieldRef<"Bookings", 'String'>
    readonly tariff_ref: FieldRef<"Bookings", 'String'>
    readonly user_ref: FieldRef<"Bookings", 'String'>
    readonly photos: FieldRef<"Bookings", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Bookings findUnique
   */
  export type BookingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where: BookingsWhereUniqueInput
  }

  /**
   * Bookings findUniqueOrThrow
   */
  export type BookingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where: BookingsWhereUniqueInput
  }

  /**
   * Bookings findFirst
   */
  export type BookingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Bookings findFirstOrThrow
   */
  export type BookingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Bookings findMany
   */
  export type BookingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingsOrderByWithRelationInput | BookingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingsScalarFieldEnum | BookingsScalarFieldEnum[]
  }

  /**
   * Bookings create
   */
  export type BookingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * The data needed to create a Bookings.
     */
    data: XOR<BookingsCreateInput, BookingsUncheckedCreateInput>
  }

  /**
   * Bookings createMany
   */
  export type BookingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingsCreateManyInput | BookingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bookings update
   */
  export type BookingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * The data needed to update a Bookings.
     */
    data: XOR<BookingsUpdateInput, BookingsUncheckedUpdateInput>
    /**
     * Choose, which Bookings to update.
     */
    where: BookingsWhereUniqueInput
  }

  /**
   * Bookings updateMany
   */
  export type BookingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingsUpdateManyMutationInput, BookingsUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingsWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Bookings upsert
   */
  export type BookingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * The filter to search for the Bookings to update in case it exists.
     */
    where: BookingsWhereUniqueInput
    /**
     * In case the Bookings found by the `where` argument doesn't exist, create a new Bookings with this data.
     */
    create: XOR<BookingsCreateInput, BookingsUncheckedCreateInput>
    /**
     * In case the Bookings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingsUpdateInput, BookingsUncheckedUpdateInput>
  }

  /**
   * Bookings delete
   */
  export type BookingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
    /**
     * Filter which Bookings to delete.
     */
    where: BookingsWhereUniqueInput
  }

  /**
   * Bookings deleteMany
   */
  export type BookingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingsWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Bookings without action
   */
  export type BookingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookings
     */
    select?: BookingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookings
     */
    omit?: BookingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingsInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    user_key: 'user_key',
    name: 'name',
    email: 'email',
    phone: 'phone',
    password_hash: 'password_hash'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const CategorysScalarFieldEnum: {
    category_key: 'category_key',
    name: 'name',
    user_ref: 'user_ref'
  };

  export type CategorysScalarFieldEnum = (typeof CategorysScalarFieldEnum)[keyof typeof CategorysScalarFieldEnum]


  export const BicyclesScalarFieldEnum: {
    bicycle_key: 'bicycle_key',
    name: 'name',
    slug: 'slug',
    description: 'description',
    locationX: 'locationX',
    locationY: 'locationY',
    pathToImage: 'pathToImage',
    category_ref: 'category_ref'
  };

  export type BicyclesScalarFieldEnum = (typeof BicyclesScalarFieldEnum)[keyof typeof BicyclesScalarFieldEnum]


  export const TariffsScalarFieldEnum: {
    tariff_key: 'tariff_key',
    name: 'name',
    type: 'type',
    basePrice: 'basePrice',
    minPrice: 'minPrice',
    maxPrice: 'maxPrice',
    category_ref: 'category_ref'
  };

  export type TariffsScalarFieldEnum = (typeof TariffsScalarFieldEnum)[keyof typeof TariffsScalarFieldEnum]


  export const ApplicationsScalarFieldEnum: {
    application_key: 'application_key',
    category_ref: 'category_ref',
    user_ref: 'user_ref'
  };

  export type ApplicationsScalarFieldEnum = (typeof ApplicationsScalarFieldEnum)[keyof typeof ApplicationsScalarFieldEnum]


  export const BookingsScalarFieldEnum: {
    booking_key: 'booking_key',
    rating: 'rating',
    price: 'price',
    percentageOfWear: 'percentageOfWear',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    bicycle_ref: 'bicycle_ref',
    tariff_ref: 'tariff_ref',
    user_ref: 'user_ref',
    photos: 'photos'
  };

  export type BookingsScalarFieldEnum = (typeof BookingsScalarFieldEnum)[keyof typeof BookingsScalarFieldEnum]


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


  export const UsersOrderByRelevanceFieldEnum: {
    user_key: 'user_key',
    name: 'name',
    email: 'email',
    phone: 'phone',
    password_hash: 'password_hash'
  };

  export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum]


  export const CategorysOrderByRelevanceFieldEnum: {
    category_key: 'category_key',
    name: 'name',
    user_ref: 'user_ref'
  };

  export type CategorysOrderByRelevanceFieldEnum = (typeof CategorysOrderByRelevanceFieldEnum)[keyof typeof CategorysOrderByRelevanceFieldEnum]


  export const BicyclesOrderByRelevanceFieldEnum: {
    bicycle_key: 'bicycle_key',
    name: 'name',
    slug: 'slug',
    description: 'description',
    pathToImage: 'pathToImage',
    category_ref: 'category_ref'
  };

  export type BicyclesOrderByRelevanceFieldEnum = (typeof BicyclesOrderByRelevanceFieldEnum)[keyof typeof BicyclesOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const TariffsOrderByRelevanceFieldEnum: {
    tariff_key: 'tariff_key',
    name: 'name',
    type: 'type',
    category_ref: 'category_ref'
  };

  export type TariffsOrderByRelevanceFieldEnum = (typeof TariffsOrderByRelevanceFieldEnum)[keyof typeof TariffsOrderByRelevanceFieldEnum]


  export const ApplicationsOrderByRelevanceFieldEnum: {
    application_key: 'application_key',
    category_ref: 'category_ref',
    user_ref: 'user_ref'
  };

  export type ApplicationsOrderByRelevanceFieldEnum = (typeof ApplicationsOrderByRelevanceFieldEnum)[keyof typeof ApplicationsOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const BookingsOrderByRelevanceFieldEnum: {
    booking_key: 'booking_key',
    bicycle_ref: 'bicycle_ref',
    tariff_ref: 'tariff_ref',
    user_ref: 'user_ref'
  };

  export type BookingsOrderByRelevanceFieldEnum = (typeof BookingsOrderByRelevanceFieldEnum)[keyof typeof BookingsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    user_key?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    phone?: StringFilter<"Users"> | string
    password_hash?: StringFilter<"Users"> | string
    categories?: CategorysListRelationFilter
    applications?: ApplicationsListRelationFilter
    bookings?: BookingsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    user_key?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password_hash?: SortOrder
    categories?: CategorysOrderByRelationAggregateInput
    applications?: ApplicationsOrderByRelationAggregateInput
    bookings?: BookingsOrderByRelationAggregateInput
    _relevance?: UsersOrderByRelevanceInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    user_key?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    phone?: StringFilter<"Users"> | string
    password_hash?: StringFilter<"Users"> | string
    categories?: CategorysListRelationFilter
    applications?: ApplicationsListRelationFilter
    bookings?: BookingsListRelationFilter
  }, "user_key" | "user_key">

  export type UsersOrderByWithAggregationInput = {
    user_key?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password_hash?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    user_key?: StringWithAggregatesFilter<"Users"> | string
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    phone?: StringWithAggregatesFilter<"Users"> | string
    password_hash?: StringWithAggregatesFilter<"Users"> | string
  }

  export type CategorysWhereInput = {
    AND?: CategorysWhereInput | CategorysWhereInput[]
    OR?: CategorysWhereInput[]
    NOT?: CategorysWhereInput | CategorysWhereInput[]
    category_key?: StringFilter<"Categorys"> | string
    name?: StringFilter<"Categorys"> | string
    user_ref?: StringFilter<"Categorys"> | string
    owner?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    bicycles?: BicyclesListRelationFilter
    applications?: ApplicationsListRelationFilter
    tariffs?: TariffsListRelationFilter
  }

  export type CategorysOrderByWithRelationInput = {
    category_key?: SortOrder
    name?: SortOrder
    user_ref?: SortOrder
    owner?: UsersOrderByWithRelationInput
    bicycles?: BicyclesOrderByRelationAggregateInput
    applications?: ApplicationsOrderByRelationAggregateInput
    tariffs?: TariffsOrderByRelationAggregateInput
    _relevance?: CategorysOrderByRelevanceInput
  }

  export type CategorysWhereUniqueInput = Prisma.AtLeast<{
    category_key?: string
    AND?: CategorysWhereInput | CategorysWhereInput[]
    OR?: CategorysWhereInput[]
    NOT?: CategorysWhereInput | CategorysWhereInput[]
    name?: StringFilter<"Categorys"> | string
    user_ref?: StringFilter<"Categorys"> | string
    owner?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    bicycles?: BicyclesListRelationFilter
    applications?: ApplicationsListRelationFilter
    tariffs?: TariffsListRelationFilter
  }, "category_key" | "category_key">

  export type CategorysOrderByWithAggregationInput = {
    category_key?: SortOrder
    name?: SortOrder
    user_ref?: SortOrder
    _count?: CategorysCountOrderByAggregateInput
    _max?: CategorysMaxOrderByAggregateInput
    _min?: CategorysMinOrderByAggregateInput
  }

  export type CategorysScalarWhereWithAggregatesInput = {
    AND?: CategorysScalarWhereWithAggregatesInput | CategorysScalarWhereWithAggregatesInput[]
    OR?: CategorysScalarWhereWithAggregatesInput[]
    NOT?: CategorysScalarWhereWithAggregatesInput | CategorysScalarWhereWithAggregatesInput[]
    category_key?: StringWithAggregatesFilter<"Categorys"> | string
    name?: StringWithAggregatesFilter<"Categorys"> | string
    user_ref?: StringWithAggregatesFilter<"Categorys"> | string
  }

  export type BicyclesWhereInput = {
    AND?: BicyclesWhereInput | BicyclesWhereInput[]
    OR?: BicyclesWhereInput[]
    NOT?: BicyclesWhereInput | BicyclesWhereInput[]
    bicycle_key?: StringFilter<"Bicycles"> | string
    name?: StringFilter<"Bicycles"> | string
    slug?: StringFilter<"Bicycles"> | string
    description?: StringFilter<"Bicycles"> | string
    locationX?: FloatFilter<"Bicycles"> | number
    locationY?: FloatFilter<"Bicycles"> | number
    pathToImage?: StringFilter<"Bicycles"> | string
    category_ref?: StringFilter<"Bicycles"> | string
    category?: XOR<CategorysScalarRelationFilter, CategorysWhereInput>
    bookings?: BookingsListRelationFilter
  }

  export type BicyclesOrderByWithRelationInput = {
    bicycle_key?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    locationX?: SortOrder
    locationY?: SortOrder
    pathToImage?: SortOrder
    category_ref?: SortOrder
    category?: CategorysOrderByWithRelationInput
    bookings?: BookingsOrderByRelationAggregateInput
    _relevance?: BicyclesOrderByRelevanceInput
  }

  export type BicyclesWhereUniqueInput = Prisma.AtLeast<{
    bicycle_key?: string
    AND?: BicyclesWhereInput | BicyclesWhereInput[]
    OR?: BicyclesWhereInput[]
    NOT?: BicyclesWhereInput | BicyclesWhereInput[]
    name?: StringFilter<"Bicycles"> | string
    slug?: StringFilter<"Bicycles"> | string
    description?: StringFilter<"Bicycles"> | string
    locationX?: FloatFilter<"Bicycles"> | number
    locationY?: FloatFilter<"Bicycles"> | number
    pathToImage?: StringFilter<"Bicycles"> | string
    category_ref?: StringFilter<"Bicycles"> | string
    category?: XOR<CategorysScalarRelationFilter, CategorysWhereInput>
    bookings?: BookingsListRelationFilter
  }, "bicycle_key" | "bicycle_key">

  export type BicyclesOrderByWithAggregationInput = {
    bicycle_key?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    locationX?: SortOrder
    locationY?: SortOrder
    pathToImage?: SortOrder
    category_ref?: SortOrder
    _count?: BicyclesCountOrderByAggregateInput
    _avg?: BicyclesAvgOrderByAggregateInput
    _max?: BicyclesMaxOrderByAggregateInput
    _min?: BicyclesMinOrderByAggregateInput
    _sum?: BicyclesSumOrderByAggregateInput
  }

  export type BicyclesScalarWhereWithAggregatesInput = {
    AND?: BicyclesScalarWhereWithAggregatesInput | BicyclesScalarWhereWithAggregatesInput[]
    OR?: BicyclesScalarWhereWithAggregatesInput[]
    NOT?: BicyclesScalarWhereWithAggregatesInput | BicyclesScalarWhereWithAggregatesInput[]
    bicycle_key?: StringWithAggregatesFilter<"Bicycles"> | string
    name?: StringWithAggregatesFilter<"Bicycles"> | string
    slug?: StringWithAggregatesFilter<"Bicycles"> | string
    description?: StringWithAggregatesFilter<"Bicycles"> | string
    locationX?: FloatWithAggregatesFilter<"Bicycles"> | number
    locationY?: FloatWithAggregatesFilter<"Bicycles"> | number
    pathToImage?: StringWithAggregatesFilter<"Bicycles"> | string
    category_ref?: StringWithAggregatesFilter<"Bicycles"> | string
  }

  export type TariffsWhereInput = {
    AND?: TariffsWhereInput | TariffsWhereInput[]
    OR?: TariffsWhereInput[]
    NOT?: TariffsWhereInput | TariffsWhereInput[]
    tariff_key?: StringFilter<"Tariffs"> | string
    name?: StringFilter<"Tariffs"> | string
    type?: StringFilter<"Tariffs"> | string
    basePrice?: FloatFilter<"Tariffs"> | number
    minPrice?: FloatNullableFilter<"Tariffs"> | number | null
    maxPrice?: FloatNullableFilter<"Tariffs"> | number | null
    category_ref?: StringFilter<"Tariffs"> | string
    category?: XOR<CategorysScalarRelationFilter, CategorysWhereInput>
    bookings?: BookingsListRelationFilter
  }

  export type TariffsOrderByWithRelationInput = {
    tariff_key?: SortOrder
    name?: SortOrder
    type?: SortOrder
    basePrice?: SortOrder
    minPrice?: SortOrderInput | SortOrder
    maxPrice?: SortOrderInput | SortOrder
    category_ref?: SortOrder
    category?: CategorysOrderByWithRelationInput
    bookings?: BookingsOrderByRelationAggregateInput
    _relevance?: TariffsOrderByRelevanceInput
  }

  export type TariffsWhereUniqueInput = Prisma.AtLeast<{
    tariff_key?: string
    AND?: TariffsWhereInput | TariffsWhereInput[]
    OR?: TariffsWhereInput[]
    NOT?: TariffsWhereInput | TariffsWhereInput[]
    name?: StringFilter<"Tariffs"> | string
    type?: StringFilter<"Tariffs"> | string
    basePrice?: FloatFilter<"Tariffs"> | number
    minPrice?: FloatNullableFilter<"Tariffs"> | number | null
    maxPrice?: FloatNullableFilter<"Tariffs"> | number | null
    category_ref?: StringFilter<"Tariffs"> | string
    category?: XOR<CategorysScalarRelationFilter, CategorysWhereInput>
    bookings?: BookingsListRelationFilter
  }, "tariff_key" | "tariff_key">

  export type TariffsOrderByWithAggregationInput = {
    tariff_key?: SortOrder
    name?: SortOrder
    type?: SortOrder
    basePrice?: SortOrder
    minPrice?: SortOrderInput | SortOrder
    maxPrice?: SortOrderInput | SortOrder
    category_ref?: SortOrder
    _count?: TariffsCountOrderByAggregateInput
    _avg?: TariffsAvgOrderByAggregateInput
    _max?: TariffsMaxOrderByAggregateInput
    _min?: TariffsMinOrderByAggregateInput
    _sum?: TariffsSumOrderByAggregateInput
  }

  export type TariffsScalarWhereWithAggregatesInput = {
    AND?: TariffsScalarWhereWithAggregatesInput | TariffsScalarWhereWithAggregatesInput[]
    OR?: TariffsScalarWhereWithAggregatesInput[]
    NOT?: TariffsScalarWhereWithAggregatesInput | TariffsScalarWhereWithAggregatesInput[]
    tariff_key?: StringWithAggregatesFilter<"Tariffs"> | string
    name?: StringWithAggregatesFilter<"Tariffs"> | string
    type?: StringWithAggregatesFilter<"Tariffs"> | string
    basePrice?: FloatWithAggregatesFilter<"Tariffs"> | number
    minPrice?: FloatNullableWithAggregatesFilter<"Tariffs"> | number | null
    maxPrice?: FloatNullableWithAggregatesFilter<"Tariffs"> | number | null
    category_ref?: StringWithAggregatesFilter<"Tariffs"> | string
  }

  export type ApplicationsWhereInput = {
    AND?: ApplicationsWhereInput | ApplicationsWhereInput[]
    OR?: ApplicationsWhereInput[]
    NOT?: ApplicationsWhereInput | ApplicationsWhereInput[]
    application_key?: StringFilter<"Applications"> | string
    category_ref?: StringFilter<"Applications"> | string
    user_ref?: StringFilter<"Applications"> | string
    category?: XOR<CategorysScalarRelationFilter, CategorysWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type ApplicationsOrderByWithRelationInput = {
    application_key?: SortOrder
    category_ref?: SortOrder
    user_ref?: SortOrder
    category?: CategorysOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
    _relevance?: ApplicationsOrderByRelevanceInput
  }

  export type ApplicationsWhereUniqueInput = Prisma.AtLeast<{
    application_key?: string
    AND?: ApplicationsWhereInput | ApplicationsWhereInput[]
    OR?: ApplicationsWhereInput[]
    NOT?: ApplicationsWhereInput | ApplicationsWhereInput[]
    category_ref?: StringFilter<"Applications"> | string
    user_ref?: StringFilter<"Applications"> | string
    category?: XOR<CategorysScalarRelationFilter, CategorysWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "application_key" | "application_key">

  export type ApplicationsOrderByWithAggregationInput = {
    application_key?: SortOrder
    category_ref?: SortOrder
    user_ref?: SortOrder
    _count?: ApplicationsCountOrderByAggregateInput
    _max?: ApplicationsMaxOrderByAggregateInput
    _min?: ApplicationsMinOrderByAggregateInput
  }

  export type ApplicationsScalarWhereWithAggregatesInput = {
    AND?: ApplicationsScalarWhereWithAggregatesInput | ApplicationsScalarWhereWithAggregatesInput[]
    OR?: ApplicationsScalarWhereWithAggregatesInput[]
    NOT?: ApplicationsScalarWhereWithAggregatesInput | ApplicationsScalarWhereWithAggregatesInput[]
    application_key?: StringWithAggregatesFilter<"Applications"> | string
    category_ref?: StringWithAggregatesFilter<"Applications"> | string
    user_ref?: StringWithAggregatesFilter<"Applications"> | string
  }

  export type BookingsWhereInput = {
    AND?: BookingsWhereInput | BookingsWhereInput[]
    OR?: BookingsWhereInput[]
    NOT?: BookingsWhereInput | BookingsWhereInput[]
    booking_key?: StringFilter<"Bookings"> | string
    rating?: IntNullableFilter<"Bookings"> | number | null
    price?: FloatNullableFilter<"Bookings"> | number | null
    percentageOfWear?: FloatNullableFilter<"Bookings"> | number | null
    startedAt?: DateTimeFilter<"Bookings"> | Date | string
    endedAt?: DateTimeNullableFilter<"Bookings"> | Date | string | null
    bicycle_ref?: StringFilter<"Bookings"> | string
    tariff_ref?: StringFilter<"Bookings"> | string
    user_ref?: StringFilter<"Bookings"> | string
    photos?: JsonNullableFilter<"Bookings">
    bicycle?: XOR<BicyclesScalarRelationFilter, BicyclesWhereInput>
    tariff?: XOR<TariffsScalarRelationFilter, TariffsWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type BookingsOrderByWithRelationInput = {
    booking_key?: SortOrder
    rating?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    percentageOfWear?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    bicycle_ref?: SortOrder
    tariff_ref?: SortOrder
    user_ref?: SortOrder
    photos?: SortOrderInput | SortOrder
    bicycle?: BicyclesOrderByWithRelationInput
    tariff?: TariffsOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
    _relevance?: BookingsOrderByRelevanceInput
  }

  export type BookingsWhereUniqueInput = Prisma.AtLeast<{
    booking_key?: string
    AND?: BookingsWhereInput | BookingsWhereInput[]
    OR?: BookingsWhereInput[]
    NOT?: BookingsWhereInput | BookingsWhereInput[]
    rating?: IntNullableFilter<"Bookings"> | number | null
    price?: FloatNullableFilter<"Bookings"> | number | null
    percentageOfWear?: FloatNullableFilter<"Bookings"> | number | null
    startedAt?: DateTimeFilter<"Bookings"> | Date | string
    endedAt?: DateTimeNullableFilter<"Bookings"> | Date | string | null
    bicycle_ref?: StringFilter<"Bookings"> | string
    tariff_ref?: StringFilter<"Bookings"> | string
    user_ref?: StringFilter<"Bookings"> | string
    photos?: JsonNullableFilter<"Bookings">
    bicycle?: XOR<BicyclesScalarRelationFilter, BicyclesWhereInput>
    tariff?: XOR<TariffsScalarRelationFilter, TariffsWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "booking_key" | "booking_key">

  export type BookingsOrderByWithAggregationInput = {
    booking_key?: SortOrder
    rating?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    percentageOfWear?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    bicycle_ref?: SortOrder
    tariff_ref?: SortOrder
    user_ref?: SortOrder
    photos?: SortOrderInput | SortOrder
    _count?: BookingsCountOrderByAggregateInput
    _avg?: BookingsAvgOrderByAggregateInput
    _max?: BookingsMaxOrderByAggregateInput
    _min?: BookingsMinOrderByAggregateInput
    _sum?: BookingsSumOrderByAggregateInput
  }

  export type BookingsScalarWhereWithAggregatesInput = {
    AND?: BookingsScalarWhereWithAggregatesInput | BookingsScalarWhereWithAggregatesInput[]
    OR?: BookingsScalarWhereWithAggregatesInput[]
    NOT?: BookingsScalarWhereWithAggregatesInput | BookingsScalarWhereWithAggregatesInput[]
    booking_key?: StringWithAggregatesFilter<"Bookings"> | string
    rating?: IntNullableWithAggregatesFilter<"Bookings"> | number | null
    price?: FloatNullableWithAggregatesFilter<"Bookings"> | number | null
    percentageOfWear?: FloatNullableWithAggregatesFilter<"Bookings"> | number | null
    startedAt?: DateTimeWithAggregatesFilter<"Bookings"> | Date | string
    endedAt?: DateTimeNullableWithAggregatesFilter<"Bookings"> | Date | string | null
    bicycle_ref?: StringWithAggregatesFilter<"Bookings"> | string
    tariff_ref?: StringWithAggregatesFilter<"Bookings"> | string
    user_ref?: StringWithAggregatesFilter<"Bookings"> | string
    photos?: JsonNullableWithAggregatesFilter<"Bookings">
  }

  export type UsersCreateInput = {
    user_key: string
    name: string
    email: string
    phone: string
    password_hash: string
    categories?: CategorysCreateNestedManyWithoutOwnerInput
    applications?: ApplicationsCreateNestedManyWithoutUserInput
    bookings?: BookingsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    user_key: string
    name: string
    email: string
    phone: string
    password_hash: string
    categories?: CategorysUncheckedCreateNestedManyWithoutOwnerInput
    applications?: ApplicationsUncheckedCreateNestedManyWithoutUserInput
    bookings?: BookingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    user_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    categories?: CategorysUpdateManyWithoutOwnerNestedInput
    applications?: ApplicationsUpdateManyWithoutUserNestedInput
    bookings?: BookingsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    user_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    categories?: CategorysUncheckedUpdateManyWithoutOwnerNestedInput
    applications?: ApplicationsUncheckedUpdateManyWithoutUserNestedInput
    bookings?: BookingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    user_key: string
    name: string
    email: string
    phone: string
    password_hash: string
  }

  export type UsersUpdateManyMutationInput = {
    user_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateManyInput = {
    user_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
  }

  export type CategorysCreateInput = {
    category_key: string
    name: string
    owner: UsersCreateNestedOneWithoutCategoriesInput
    bicycles?: BicyclesCreateNestedManyWithoutCategoryInput
    applications?: ApplicationsCreateNestedManyWithoutCategoryInput
    tariffs?: TariffsCreateNestedManyWithoutCategoryInput
  }

  export type CategorysUncheckedCreateInput = {
    category_key: string
    name: string
    user_ref: string
    bicycles?: BicyclesUncheckedCreateNestedManyWithoutCategoryInput
    applications?: ApplicationsUncheckedCreateNestedManyWithoutCategoryInput
    tariffs?: TariffsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategorysUpdateInput = {
    category_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    owner?: UsersUpdateOneRequiredWithoutCategoriesNestedInput
    bicycles?: BicyclesUpdateManyWithoutCategoryNestedInput
    applications?: ApplicationsUpdateManyWithoutCategoryNestedInput
    tariffs?: TariffsUpdateManyWithoutCategoryNestedInput
  }

  export type CategorysUncheckedUpdateInput = {
    category_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_ref?: StringFieldUpdateOperationsInput | string
    bicycles?: BicyclesUncheckedUpdateManyWithoutCategoryNestedInput
    applications?: ApplicationsUncheckedUpdateManyWithoutCategoryNestedInput
    tariffs?: TariffsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategorysCreateManyInput = {
    category_key: string
    name: string
    user_ref: string
  }

  export type CategorysUpdateManyMutationInput = {
    category_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategorysUncheckedUpdateManyInput = {
    category_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_ref?: StringFieldUpdateOperationsInput | string
  }

  export type BicyclesCreateInput = {
    bicycle_key: string
    name: string
    slug: string
    description: string
    locationX: number
    locationY: number
    pathToImage: string
    category: CategorysCreateNestedOneWithoutBicyclesInput
    bookings?: BookingsCreateNestedManyWithoutBicycleInput
  }

  export type BicyclesUncheckedCreateInput = {
    bicycle_key: string
    name: string
    slug: string
    description: string
    locationX: number
    locationY: number
    pathToImage: string
    category_ref: string
    bookings?: BookingsUncheckedCreateNestedManyWithoutBicycleInput
  }

  export type BicyclesUpdateInput = {
    bicycle_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    locationX?: FloatFieldUpdateOperationsInput | number
    locationY?: FloatFieldUpdateOperationsInput | number
    pathToImage?: StringFieldUpdateOperationsInput | string
    category?: CategorysUpdateOneRequiredWithoutBicyclesNestedInput
    bookings?: BookingsUpdateManyWithoutBicycleNestedInput
  }

  export type BicyclesUncheckedUpdateInput = {
    bicycle_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    locationX?: FloatFieldUpdateOperationsInput | number
    locationY?: FloatFieldUpdateOperationsInput | number
    pathToImage?: StringFieldUpdateOperationsInput | string
    category_ref?: StringFieldUpdateOperationsInput | string
    bookings?: BookingsUncheckedUpdateManyWithoutBicycleNestedInput
  }

  export type BicyclesCreateManyInput = {
    bicycle_key: string
    name: string
    slug: string
    description: string
    locationX: number
    locationY: number
    pathToImage: string
    category_ref: string
  }

  export type BicyclesUpdateManyMutationInput = {
    bicycle_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    locationX?: FloatFieldUpdateOperationsInput | number
    locationY?: FloatFieldUpdateOperationsInput | number
    pathToImage?: StringFieldUpdateOperationsInput | string
  }

  export type BicyclesUncheckedUpdateManyInput = {
    bicycle_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    locationX?: FloatFieldUpdateOperationsInput | number
    locationY?: FloatFieldUpdateOperationsInput | number
    pathToImage?: StringFieldUpdateOperationsInput | string
    category_ref?: StringFieldUpdateOperationsInput | string
  }

  export type TariffsCreateInput = {
    tariff_key: string
    name: string
    type: string
    basePrice: number
    minPrice?: number | null
    maxPrice?: number | null
    category: CategorysCreateNestedOneWithoutTariffsInput
    bookings?: BookingsCreateNestedManyWithoutTariffInput
  }

  export type TariffsUncheckedCreateInput = {
    tariff_key: string
    name: string
    type: string
    basePrice: number
    minPrice?: number | null
    maxPrice?: number | null
    category_ref: string
    bookings?: BookingsUncheckedCreateNestedManyWithoutTariffInput
  }

  export type TariffsUpdateInput = {
    tariff_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: CategorysUpdateOneRequiredWithoutTariffsNestedInput
    bookings?: BookingsUpdateManyWithoutTariffNestedInput
  }

  export type TariffsUncheckedUpdateInput = {
    tariff_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    category_ref?: StringFieldUpdateOperationsInput | string
    bookings?: BookingsUncheckedUpdateManyWithoutTariffNestedInput
  }

  export type TariffsCreateManyInput = {
    tariff_key: string
    name: string
    type: string
    basePrice: number
    minPrice?: number | null
    maxPrice?: number | null
    category_ref: string
  }

  export type TariffsUpdateManyMutationInput = {
    tariff_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TariffsUncheckedUpdateManyInput = {
    tariff_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    category_ref?: StringFieldUpdateOperationsInput | string
  }

  export type ApplicationsCreateInput = {
    application_key: string
    category: CategorysCreateNestedOneWithoutApplicationsInput
    user: UsersCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationsUncheckedCreateInput = {
    application_key: string
    category_ref: string
    user_ref: string
  }

  export type ApplicationsUpdateInput = {
    application_key?: StringFieldUpdateOperationsInput | string
    category?: CategorysUpdateOneRequiredWithoutApplicationsNestedInput
    user?: UsersUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationsUncheckedUpdateInput = {
    application_key?: StringFieldUpdateOperationsInput | string
    category_ref?: StringFieldUpdateOperationsInput | string
    user_ref?: StringFieldUpdateOperationsInput | string
  }

  export type ApplicationsCreateManyInput = {
    application_key: string
    category_ref: string
    user_ref: string
  }

  export type ApplicationsUpdateManyMutationInput = {
    application_key?: StringFieldUpdateOperationsInput | string
  }

  export type ApplicationsUncheckedUpdateManyInput = {
    application_key?: StringFieldUpdateOperationsInput | string
    category_ref?: StringFieldUpdateOperationsInput | string
    user_ref?: StringFieldUpdateOperationsInput | string
  }

  export type BookingsCreateInput = {
    booking_key: string
    rating?: number | null
    price?: number | null
    percentageOfWear?: number | null
    startedAt: Date | string
    endedAt?: Date | string | null
    photos?: NullableJsonNullValueInput | InputJsonValue
    bicycle: BicyclesCreateNestedOneWithoutBookingsInput
    tariff: TariffsCreateNestedOneWithoutBookingsInput
    user: UsersCreateNestedOneWithoutBookingsInput
  }

  export type BookingsUncheckedCreateInput = {
    booking_key: string
    rating?: number | null
    price?: number | null
    percentageOfWear?: number | null
    startedAt: Date | string
    endedAt?: Date | string | null
    bicycle_ref: string
    tariff_ref: string
    user_ref: string
    photos?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BookingsUpdateInput = {
    booking_key?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    percentageOfWear?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photos?: NullableJsonNullValueInput | InputJsonValue
    bicycle?: BicyclesUpdateOneRequiredWithoutBookingsNestedInput
    tariff?: TariffsUpdateOneRequiredWithoutBookingsNestedInput
    user?: UsersUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingsUncheckedUpdateInput = {
    booking_key?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    percentageOfWear?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bicycle_ref?: StringFieldUpdateOperationsInput | string
    tariff_ref?: StringFieldUpdateOperationsInput | string
    user_ref?: StringFieldUpdateOperationsInput | string
    photos?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BookingsCreateManyInput = {
    booking_key: string
    rating?: number | null
    price?: number | null
    percentageOfWear?: number | null
    startedAt: Date | string
    endedAt?: Date | string | null
    bicycle_ref: string
    tariff_ref: string
    user_ref: string
    photos?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BookingsUpdateManyMutationInput = {
    booking_key?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    percentageOfWear?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photos?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BookingsUncheckedUpdateManyInput = {
    booking_key?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    percentageOfWear?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bicycle_ref?: StringFieldUpdateOperationsInput | string
    tariff_ref?: StringFieldUpdateOperationsInput | string
    user_ref?: StringFieldUpdateOperationsInput | string
    photos?: NullableJsonNullValueInput | InputJsonValue
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CategorysListRelationFilter = {
    every?: CategorysWhereInput
    some?: CategorysWhereInput
    none?: CategorysWhereInput
  }

  export type ApplicationsListRelationFilter = {
    every?: ApplicationsWhereInput
    some?: ApplicationsWhereInput
    none?: ApplicationsWhereInput
  }

  export type BookingsListRelationFilter = {
    every?: BookingsWhereInput
    some?: BookingsWhereInput
    none?: BookingsWhereInput
  }

  export type CategorysOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersOrderByRelevanceInput = {
    fields: UsersOrderByRelevanceFieldEnum | UsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersCountOrderByAggregateInput = {
    user_key?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password_hash?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    user_key?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password_hash?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    user_key?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password_hash?: SortOrder
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type BicyclesListRelationFilter = {
    every?: BicyclesWhereInput
    some?: BicyclesWhereInput
    none?: BicyclesWhereInput
  }

  export type TariffsListRelationFilter = {
    every?: TariffsWhereInput
    some?: TariffsWhereInput
    none?: TariffsWhereInput
  }

  export type BicyclesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TariffsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategorysOrderByRelevanceInput = {
    fields: CategorysOrderByRelevanceFieldEnum | CategorysOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategorysCountOrderByAggregateInput = {
    category_key?: SortOrder
    name?: SortOrder
    user_ref?: SortOrder
  }

  export type CategorysMaxOrderByAggregateInput = {
    category_key?: SortOrder
    name?: SortOrder
    user_ref?: SortOrder
  }

  export type CategorysMinOrderByAggregateInput = {
    category_key?: SortOrder
    name?: SortOrder
    user_ref?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CategorysScalarRelationFilter = {
    is?: CategorysWhereInput
    isNot?: CategorysWhereInput
  }

  export type BicyclesOrderByRelevanceInput = {
    fields: BicyclesOrderByRelevanceFieldEnum | BicyclesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BicyclesCountOrderByAggregateInput = {
    bicycle_key?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    locationX?: SortOrder
    locationY?: SortOrder
    pathToImage?: SortOrder
    category_ref?: SortOrder
  }

  export type BicyclesAvgOrderByAggregateInput = {
    locationX?: SortOrder
    locationY?: SortOrder
  }

  export type BicyclesMaxOrderByAggregateInput = {
    bicycle_key?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    locationX?: SortOrder
    locationY?: SortOrder
    pathToImage?: SortOrder
    category_ref?: SortOrder
  }

  export type BicyclesMinOrderByAggregateInput = {
    bicycle_key?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    locationX?: SortOrder
    locationY?: SortOrder
    pathToImage?: SortOrder
    category_ref?: SortOrder
  }

  export type BicyclesSumOrderByAggregateInput = {
    locationX?: SortOrder
    locationY?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TariffsOrderByRelevanceInput = {
    fields: TariffsOrderByRelevanceFieldEnum | TariffsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TariffsCountOrderByAggregateInput = {
    tariff_key?: SortOrder
    name?: SortOrder
    type?: SortOrder
    basePrice?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    category_ref?: SortOrder
  }

  export type TariffsAvgOrderByAggregateInput = {
    basePrice?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
  }

  export type TariffsMaxOrderByAggregateInput = {
    tariff_key?: SortOrder
    name?: SortOrder
    type?: SortOrder
    basePrice?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    category_ref?: SortOrder
  }

  export type TariffsMinOrderByAggregateInput = {
    tariff_key?: SortOrder
    name?: SortOrder
    type?: SortOrder
    basePrice?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    category_ref?: SortOrder
  }

  export type TariffsSumOrderByAggregateInput = {
    basePrice?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ApplicationsOrderByRelevanceInput = {
    fields: ApplicationsOrderByRelevanceFieldEnum | ApplicationsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ApplicationsCountOrderByAggregateInput = {
    application_key?: SortOrder
    category_ref?: SortOrder
    user_ref?: SortOrder
  }

  export type ApplicationsMaxOrderByAggregateInput = {
    application_key?: SortOrder
    category_ref?: SortOrder
    user_ref?: SortOrder
  }

  export type ApplicationsMinOrderByAggregateInput = {
    application_key?: SortOrder
    category_ref?: SortOrder
    user_ref?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BicyclesScalarRelationFilter = {
    is?: BicyclesWhereInput
    isNot?: BicyclesWhereInput
  }

  export type TariffsScalarRelationFilter = {
    is?: TariffsWhereInput
    isNot?: TariffsWhereInput
  }

  export type BookingsOrderByRelevanceInput = {
    fields: BookingsOrderByRelevanceFieldEnum | BookingsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BookingsCountOrderByAggregateInput = {
    booking_key?: SortOrder
    rating?: SortOrder
    price?: SortOrder
    percentageOfWear?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    bicycle_ref?: SortOrder
    tariff_ref?: SortOrder
    user_ref?: SortOrder
    photos?: SortOrder
  }

  export type BookingsAvgOrderByAggregateInput = {
    rating?: SortOrder
    price?: SortOrder
    percentageOfWear?: SortOrder
  }

  export type BookingsMaxOrderByAggregateInput = {
    booking_key?: SortOrder
    rating?: SortOrder
    price?: SortOrder
    percentageOfWear?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    bicycle_ref?: SortOrder
    tariff_ref?: SortOrder
    user_ref?: SortOrder
  }

  export type BookingsMinOrderByAggregateInput = {
    booking_key?: SortOrder
    rating?: SortOrder
    price?: SortOrder
    percentageOfWear?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    bicycle_ref?: SortOrder
    tariff_ref?: SortOrder
    user_ref?: SortOrder
  }

  export type BookingsSumOrderByAggregateInput = {
    rating?: SortOrder
    price?: SortOrder
    percentageOfWear?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type CategorysCreateNestedManyWithoutOwnerInput = {
    create?: XOR<CategorysCreateWithoutOwnerInput, CategorysUncheckedCreateWithoutOwnerInput> | CategorysCreateWithoutOwnerInput[] | CategorysUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CategorysCreateOrConnectWithoutOwnerInput | CategorysCreateOrConnectWithoutOwnerInput[]
    createMany?: CategorysCreateManyOwnerInputEnvelope
    connect?: CategorysWhereUniqueInput | CategorysWhereUniqueInput[]
  }

  export type ApplicationsCreateNestedManyWithoutUserInput = {
    create?: XOR<ApplicationsCreateWithoutUserInput, ApplicationsUncheckedCreateWithoutUserInput> | ApplicationsCreateWithoutUserInput[] | ApplicationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutUserInput | ApplicationsCreateOrConnectWithoutUserInput[]
    createMany?: ApplicationsCreateManyUserInputEnvelope
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
  }

  export type BookingsCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingsCreateWithoutUserInput, BookingsUncheckedCreateWithoutUserInput> | BookingsCreateWithoutUserInput[] | BookingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutUserInput | BookingsCreateOrConnectWithoutUserInput[]
    createMany?: BookingsCreateManyUserInputEnvelope
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
  }

  export type CategorysUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<CategorysCreateWithoutOwnerInput, CategorysUncheckedCreateWithoutOwnerInput> | CategorysCreateWithoutOwnerInput[] | CategorysUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CategorysCreateOrConnectWithoutOwnerInput | CategorysCreateOrConnectWithoutOwnerInput[]
    createMany?: CategorysCreateManyOwnerInputEnvelope
    connect?: CategorysWhereUniqueInput | CategorysWhereUniqueInput[]
  }

  export type ApplicationsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ApplicationsCreateWithoutUserInput, ApplicationsUncheckedCreateWithoutUserInput> | ApplicationsCreateWithoutUserInput[] | ApplicationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutUserInput | ApplicationsCreateOrConnectWithoutUserInput[]
    createMany?: ApplicationsCreateManyUserInputEnvelope
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
  }

  export type BookingsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingsCreateWithoutUserInput, BookingsUncheckedCreateWithoutUserInput> | BookingsCreateWithoutUserInput[] | BookingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutUserInput | BookingsCreateOrConnectWithoutUserInput[]
    createMany?: BookingsCreateManyUserInputEnvelope
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CategorysUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<CategorysCreateWithoutOwnerInput, CategorysUncheckedCreateWithoutOwnerInput> | CategorysCreateWithoutOwnerInput[] | CategorysUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CategorysCreateOrConnectWithoutOwnerInput | CategorysCreateOrConnectWithoutOwnerInput[]
    upsert?: CategorysUpsertWithWhereUniqueWithoutOwnerInput | CategorysUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: CategorysCreateManyOwnerInputEnvelope
    set?: CategorysWhereUniqueInput | CategorysWhereUniqueInput[]
    disconnect?: CategorysWhereUniqueInput | CategorysWhereUniqueInput[]
    delete?: CategorysWhereUniqueInput | CategorysWhereUniqueInput[]
    connect?: CategorysWhereUniqueInput | CategorysWhereUniqueInput[]
    update?: CategorysUpdateWithWhereUniqueWithoutOwnerInput | CategorysUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: CategorysUpdateManyWithWhereWithoutOwnerInput | CategorysUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: CategorysScalarWhereInput | CategorysScalarWhereInput[]
  }

  export type ApplicationsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApplicationsCreateWithoutUserInput, ApplicationsUncheckedCreateWithoutUserInput> | ApplicationsCreateWithoutUserInput[] | ApplicationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutUserInput | ApplicationsCreateOrConnectWithoutUserInput[]
    upsert?: ApplicationsUpsertWithWhereUniqueWithoutUserInput | ApplicationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApplicationsCreateManyUserInputEnvelope
    set?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    disconnect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    delete?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    update?: ApplicationsUpdateWithWhereUniqueWithoutUserInput | ApplicationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApplicationsUpdateManyWithWhereWithoutUserInput | ApplicationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApplicationsScalarWhereInput | ApplicationsScalarWhereInput[]
  }

  export type BookingsUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingsCreateWithoutUserInput, BookingsUncheckedCreateWithoutUserInput> | BookingsCreateWithoutUserInput[] | BookingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutUserInput | BookingsCreateOrConnectWithoutUserInput[]
    upsert?: BookingsUpsertWithWhereUniqueWithoutUserInput | BookingsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingsCreateManyUserInputEnvelope
    set?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    disconnect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    delete?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    update?: BookingsUpdateWithWhereUniqueWithoutUserInput | BookingsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingsUpdateManyWithWhereWithoutUserInput | BookingsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
  }

  export type CategorysUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<CategorysCreateWithoutOwnerInput, CategorysUncheckedCreateWithoutOwnerInput> | CategorysCreateWithoutOwnerInput[] | CategorysUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CategorysCreateOrConnectWithoutOwnerInput | CategorysCreateOrConnectWithoutOwnerInput[]
    upsert?: CategorysUpsertWithWhereUniqueWithoutOwnerInput | CategorysUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: CategorysCreateManyOwnerInputEnvelope
    set?: CategorysWhereUniqueInput | CategorysWhereUniqueInput[]
    disconnect?: CategorysWhereUniqueInput | CategorysWhereUniqueInput[]
    delete?: CategorysWhereUniqueInput | CategorysWhereUniqueInput[]
    connect?: CategorysWhereUniqueInput | CategorysWhereUniqueInput[]
    update?: CategorysUpdateWithWhereUniqueWithoutOwnerInput | CategorysUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: CategorysUpdateManyWithWhereWithoutOwnerInput | CategorysUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: CategorysScalarWhereInput | CategorysScalarWhereInput[]
  }

  export type ApplicationsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ApplicationsCreateWithoutUserInput, ApplicationsUncheckedCreateWithoutUserInput> | ApplicationsCreateWithoutUserInput[] | ApplicationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutUserInput | ApplicationsCreateOrConnectWithoutUserInput[]
    upsert?: ApplicationsUpsertWithWhereUniqueWithoutUserInput | ApplicationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ApplicationsCreateManyUserInputEnvelope
    set?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    disconnect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    delete?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    update?: ApplicationsUpdateWithWhereUniqueWithoutUserInput | ApplicationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ApplicationsUpdateManyWithWhereWithoutUserInput | ApplicationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ApplicationsScalarWhereInput | ApplicationsScalarWhereInput[]
  }

  export type BookingsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingsCreateWithoutUserInput, BookingsUncheckedCreateWithoutUserInput> | BookingsCreateWithoutUserInput[] | BookingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutUserInput | BookingsCreateOrConnectWithoutUserInput[]
    upsert?: BookingsUpsertWithWhereUniqueWithoutUserInput | BookingsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingsCreateManyUserInputEnvelope
    set?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    disconnect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    delete?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    update?: BookingsUpdateWithWhereUniqueWithoutUserInput | BookingsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingsUpdateManyWithWhereWithoutUserInput | BookingsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<UsersCreateWithoutCategoriesInput, UsersUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCategoriesInput
    connect?: UsersWhereUniqueInput
  }

  export type BicyclesCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BicyclesCreateWithoutCategoryInput, BicyclesUncheckedCreateWithoutCategoryInput> | BicyclesCreateWithoutCategoryInput[] | BicyclesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BicyclesCreateOrConnectWithoutCategoryInput | BicyclesCreateOrConnectWithoutCategoryInput[]
    createMany?: BicyclesCreateManyCategoryInputEnvelope
    connect?: BicyclesWhereUniqueInput | BicyclesWhereUniqueInput[]
  }

  export type ApplicationsCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ApplicationsCreateWithoutCategoryInput, ApplicationsUncheckedCreateWithoutCategoryInput> | ApplicationsCreateWithoutCategoryInput[] | ApplicationsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutCategoryInput | ApplicationsCreateOrConnectWithoutCategoryInput[]
    createMany?: ApplicationsCreateManyCategoryInputEnvelope
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
  }

  export type TariffsCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TariffsCreateWithoutCategoryInput, TariffsUncheckedCreateWithoutCategoryInput> | TariffsCreateWithoutCategoryInput[] | TariffsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TariffsCreateOrConnectWithoutCategoryInput | TariffsCreateOrConnectWithoutCategoryInput[]
    createMany?: TariffsCreateManyCategoryInputEnvelope
    connect?: TariffsWhereUniqueInput | TariffsWhereUniqueInput[]
  }

  export type BicyclesUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BicyclesCreateWithoutCategoryInput, BicyclesUncheckedCreateWithoutCategoryInput> | BicyclesCreateWithoutCategoryInput[] | BicyclesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BicyclesCreateOrConnectWithoutCategoryInput | BicyclesCreateOrConnectWithoutCategoryInput[]
    createMany?: BicyclesCreateManyCategoryInputEnvelope
    connect?: BicyclesWhereUniqueInput | BicyclesWhereUniqueInput[]
  }

  export type ApplicationsUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ApplicationsCreateWithoutCategoryInput, ApplicationsUncheckedCreateWithoutCategoryInput> | ApplicationsCreateWithoutCategoryInput[] | ApplicationsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutCategoryInput | ApplicationsCreateOrConnectWithoutCategoryInput[]
    createMany?: ApplicationsCreateManyCategoryInputEnvelope
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
  }

  export type TariffsUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<TariffsCreateWithoutCategoryInput, TariffsUncheckedCreateWithoutCategoryInput> | TariffsCreateWithoutCategoryInput[] | TariffsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TariffsCreateOrConnectWithoutCategoryInput | TariffsCreateOrConnectWithoutCategoryInput[]
    createMany?: TariffsCreateManyCategoryInputEnvelope
    connect?: TariffsWhereUniqueInput | TariffsWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<UsersCreateWithoutCategoriesInput, UsersUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCategoriesInput
    upsert?: UsersUpsertWithoutCategoriesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCategoriesInput, UsersUpdateWithoutCategoriesInput>, UsersUncheckedUpdateWithoutCategoriesInput>
  }

  export type BicyclesUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BicyclesCreateWithoutCategoryInput, BicyclesUncheckedCreateWithoutCategoryInput> | BicyclesCreateWithoutCategoryInput[] | BicyclesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BicyclesCreateOrConnectWithoutCategoryInput | BicyclesCreateOrConnectWithoutCategoryInput[]
    upsert?: BicyclesUpsertWithWhereUniqueWithoutCategoryInput | BicyclesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BicyclesCreateManyCategoryInputEnvelope
    set?: BicyclesWhereUniqueInput | BicyclesWhereUniqueInput[]
    disconnect?: BicyclesWhereUniqueInput | BicyclesWhereUniqueInput[]
    delete?: BicyclesWhereUniqueInput | BicyclesWhereUniqueInput[]
    connect?: BicyclesWhereUniqueInput | BicyclesWhereUniqueInput[]
    update?: BicyclesUpdateWithWhereUniqueWithoutCategoryInput | BicyclesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BicyclesUpdateManyWithWhereWithoutCategoryInput | BicyclesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BicyclesScalarWhereInput | BicyclesScalarWhereInput[]
  }

  export type ApplicationsUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ApplicationsCreateWithoutCategoryInput, ApplicationsUncheckedCreateWithoutCategoryInput> | ApplicationsCreateWithoutCategoryInput[] | ApplicationsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutCategoryInput | ApplicationsCreateOrConnectWithoutCategoryInput[]
    upsert?: ApplicationsUpsertWithWhereUniqueWithoutCategoryInput | ApplicationsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ApplicationsCreateManyCategoryInputEnvelope
    set?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    disconnect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    delete?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    update?: ApplicationsUpdateWithWhereUniqueWithoutCategoryInput | ApplicationsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ApplicationsUpdateManyWithWhereWithoutCategoryInput | ApplicationsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ApplicationsScalarWhereInput | ApplicationsScalarWhereInput[]
  }

  export type TariffsUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TariffsCreateWithoutCategoryInput, TariffsUncheckedCreateWithoutCategoryInput> | TariffsCreateWithoutCategoryInput[] | TariffsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TariffsCreateOrConnectWithoutCategoryInput | TariffsCreateOrConnectWithoutCategoryInput[]
    upsert?: TariffsUpsertWithWhereUniqueWithoutCategoryInput | TariffsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TariffsCreateManyCategoryInputEnvelope
    set?: TariffsWhereUniqueInput | TariffsWhereUniqueInput[]
    disconnect?: TariffsWhereUniqueInput | TariffsWhereUniqueInput[]
    delete?: TariffsWhereUniqueInput | TariffsWhereUniqueInput[]
    connect?: TariffsWhereUniqueInput | TariffsWhereUniqueInput[]
    update?: TariffsUpdateWithWhereUniqueWithoutCategoryInput | TariffsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TariffsUpdateManyWithWhereWithoutCategoryInput | TariffsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TariffsScalarWhereInput | TariffsScalarWhereInput[]
  }

  export type BicyclesUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BicyclesCreateWithoutCategoryInput, BicyclesUncheckedCreateWithoutCategoryInput> | BicyclesCreateWithoutCategoryInput[] | BicyclesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BicyclesCreateOrConnectWithoutCategoryInput | BicyclesCreateOrConnectWithoutCategoryInput[]
    upsert?: BicyclesUpsertWithWhereUniqueWithoutCategoryInput | BicyclesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BicyclesCreateManyCategoryInputEnvelope
    set?: BicyclesWhereUniqueInput | BicyclesWhereUniqueInput[]
    disconnect?: BicyclesWhereUniqueInput | BicyclesWhereUniqueInput[]
    delete?: BicyclesWhereUniqueInput | BicyclesWhereUniqueInput[]
    connect?: BicyclesWhereUniqueInput | BicyclesWhereUniqueInput[]
    update?: BicyclesUpdateWithWhereUniqueWithoutCategoryInput | BicyclesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BicyclesUpdateManyWithWhereWithoutCategoryInput | BicyclesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BicyclesScalarWhereInput | BicyclesScalarWhereInput[]
  }

  export type ApplicationsUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ApplicationsCreateWithoutCategoryInput, ApplicationsUncheckedCreateWithoutCategoryInput> | ApplicationsCreateWithoutCategoryInput[] | ApplicationsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ApplicationsCreateOrConnectWithoutCategoryInput | ApplicationsCreateOrConnectWithoutCategoryInput[]
    upsert?: ApplicationsUpsertWithWhereUniqueWithoutCategoryInput | ApplicationsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ApplicationsCreateManyCategoryInputEnvelope
    set?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    disconnect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    delete?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    connect?: ApplicationsWhereUniqueInput | ApplicationsWhereUniqueInput[]
    update?: ApplicationsUpdateWithWhereUniqueWithoutCategoryInput | ApplicationsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ApplicationsUpdateManyWithWhereWithoutCategoryInput | ApplicationsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ApplicationsScalarWhereInput | ApplicationsScalarWhereInput[]
  }

  export type TariffsUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<TariffsCreateWithoutCategoryInput, TariffsUncheckedCreateWithoutCategoryInput> | TariffsCreateWithoutCategoryInput[] | TariffsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: TariffsCreateOrConnectWithoutCategoryInput | TariffsCreateOrConnectWithoutCategoryInput[]
    upsert?: TariffsUpsertWithWhereUniqueWithoutCategoryInput | TariffsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: TariffsCreateManyCategoryInputEnvelope
    set?: TariffsWhereUniqueInput | TariffsWhereUniqueInput[]
    disconnect?: TariffsWhereUniqueInput | TariffsWhereUniqueInput[]
    delete?: TariffsWhereUniqueInput | TariffsWhereUniqueInput[]
    connect?: TariffsWhereUniqueInput | TariffsWhereUniqueInput[]
    update?: TariffsUpdateWithWhereUniqueWithoutCategoryInput | TariffsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: TariffsUpdateManyWithWhereWithoutCategoryInput | TariffsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: TariffsScalarWhereInput | TariffsScalarWhereInput[]
  }

  export type CategorysCreateNestedOneWithoutBicyclesInput = {
    create?: XOR<CategorysCreateWithoutBicyclesInput, CategorysUncheckedCreateWithoutBicyclesInput>
    connectOrCreate?: CategorysCreateOrConnectWithoutBicyclesInput
    connect?: CategorysWhereUniqueInput
  }

  export type BookingsCreateNestedManyWithoutBicycleInput = {
    create?: XOR<BookingsCreateWithoutBicycleInput, BookingsUncheckedCreateWithoutBicycleInput> | BookingsCreateWithoutBicycleInput[] | BookingsUncheckedCreateWithoutBicycleInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutBicycleInput | BookingsCreateOrConnectWithoutBicycleInput[]
    createMany?: BookingsCreateManyBicycleInputEnvelope
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
  }

  export type BookingsUncheckedCreateNestedManyWithoutBicycleInput = {
    create?: XOR<BookingsCreateWithoutBicycleInput, BookingsUncheckedCreateWithoutBicycleInput> | BookingsCreateWithoutBicycleInput[] | BookingsUncheckedCreateWithoutBicycleInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutBicycleInput | BookingsCreateOrConnectWithoutBicycleInput[]
    createMany?: BookingsCreateManyBicycleInputEnvelope
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategorysUpdateOneRequiredWithoutBicyclesNestedInput = {
    create?: XOR<CategorysCreateWithoutBicyclesInput, CategorysUncheckedCreateWithoutBicyclesInput>
    connectOrCreate?: CategorysCreateOrConnectWithoutBicyclesInput
    upsert?: CategorysUpsertWithoutBicyclesInput
    connect?: CategorysWhereUniqueInput
    update?: XOR<XOR<CategorysUpdateToOneWithWhereWithoutBicyclesInput, CategorysUpdateWithoutBicyclesInput>, CategorysUncheckedUpdateWithoutBicyclesInput>
  }

  export type BookingsUpdateManyWithoutBicycleNestedInput = {
    create?: XOR<BookingsCreateWithoutBicycleInput, BookingsUncheckedCreateWithoutBicycleInput> | BookingsCreateWithoutBicycleInput[] | BookingsUncheckedCreateWithoutBicycleInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutBicycleInput | BookingsCreateOrConnectWithoutBicycleInput[]
    upsert?: BookingsUpsertWithWhereUniqueWithoutBicycleInput | BookingsUpsertWithWhereUniqueWithoutBicycleInput[]
    createMany?: BookingsCreateManyBicycleInputEnvelope
    set?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    disconnect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    delete?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    update?: BookingsUpdateWithWhereUniqueWithoutBicycleInput | BookingsUpdateWithWhereUniqueWithoutBicycleInput[]
    updateMany?: BookingsUpdateManyWithWhereWithoutBicycleInput | BookingsUpdateManyWithWhereWithoutBicycleInput[]
    deleteMany?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
  }

  export type BookingsUncheckedUpdateManyWithoutBicycleNestedInput = {
    create?: XOR<BookingsCreateWithoutBicycleInput, BookingsUncheckedCreateWithoutBicycleInput> | BookingsCreateWithoutBicycleInput[] | BookingsUncheckedCreateWithoutBicycleInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutBicycleInput | BookingsCreateOrConnectWithoutBicycleInput[]
    upsert?: BookingsUpsertWithWhereUniqueWithoutBicycleInput | BookingsUpsertWithWhereUniqueWithoutBicycleInput[]
    createMany?: BookingsCreateManyBicycleInputEnvelope
    set?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    disconnect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    delete?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    update?: BookingsUpdateWithWhereUniqueWithoutBicycleInput | BookingsUpdateWithWhereUniqueWithoutBicycleInput[]
    updateMany?: BookingsUpdateManyWithWhereWithoutBicycleInput | BookingsUpdateManyWithWhereWithoutBicycleInput[]
    deleteMany?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
  }

  export type CategorysCreateNestedOneWithoutTariffsInput = {
    create?: XOR<CategorysCreateWithoutTariffsInput, CategorysUncheckedCreateWithoutTariffsInput>
    connectOrCreate?: CategorysCreateOrConnectWithoutTariffsInput
    connect?: CategorysWhereUniqueInput
  }

  export type BookingsCreateNestedManyWithoutTariffInput = {
    create?: XOR<BookingsCreateWithoutTariffInput, BookingsUncheckedCreateWithoutTariffInput> | BookingsCreateWithoutTariffInput[] | BookingsUncheckedCreateWithoutTariffInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutTariffInput | BookingsCreateOrConnectWithoutTariffInput[]
    createMany?: BookingsCreateManyTariffInputEnvelope
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
  }

  export type BookingsUncheckedCreateNestedManyWithoutTariffInput = {
    create?: XOR<BookingsCreateWithoutTariffInput, BookingsUncheckedCreateWithoutTariffInput> | BookingsCreateWithoutTariffInput[] | BookingsUncheckedCreateWithoutTariffInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutTariffInput | BookingsCreateOrConnectWithoutTariffInput[]
    createMany?: BookingsCreateManyTariffInputEnvelope
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategorysUpdateOneRequiredWithoutTariffsNestedInput = {
    create?: XOR<CategorysCreateWithoutTariffsInput, CategorysUncheckedCreateWithoutTariffsInput>
    connectOrCreate?: CategorysCreateOrConnectWithoutTariffsInput
    upsert?: CategorysUpsertWithoutTariffsInput
    connect?: CategorysWhereUniqueInput
    update?: XOR<XOR<CategorysUpdateToOneWithWhereWithoutTariffsInput, CategorysUpdateWithoutTariffsInput>, CategorysUncheckedUpdateWithoutTariffsInput>
  }

  export type BookingsUpdateManyWithoutTariffNestedInput = {
    create?: XOR<BookingsCreateWithoutTariffInput, BookingsUncheckedCreateWithoutTariffInput> | BookingsCreateWithoutTariffInput[] | BookingsUncheckedCreateWithoutTariffInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutTariffInput | BookingsCreateOrConnectWithoutTariffInput[]
    upsert?: BookingsUpsertWithWhereUniqueWithoutTariffInput | BookingsUpsertWithWhereUniqueWithoutTariffInput[]
    createMany?: BookingsCreateManyTariffInputEnvelope
    set?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    disconnect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    delete?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    update?: BookingsUpdateWithWhereUniqueWithoutTariffInput | BookingsUpdateWithWhereUniqueWithoutTariffInput[]
    updateMany?: BookingsUpdateManyWithWhereWithoutTariffInput | BookingsUpdateManyWithWhereWithoutTariffInput[]
    deleteMany?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
  }

  export type BookingsUncheckedUpdateManyWithoutTariffNestedInput = {
    create?: XOR<BookingsCreateWithoutTariffInput, BookingsUncheckedCreateWithoutTariffInput> | BookingsCreateWithoutTariffInput[] | BookingsUncheckedCreateWithoutTariffInput[]
    connectOrCreate?: BookingsCreateOrConnectWithoutTariffInput | BookingsCreateOrConnectWithoutTariffInput[]
    upsert?: BookingsUpsertWithWhereUniqueWithoutTariffInput | BookingsUpsertWithWhereUniqueWithoutTariffInput[]
    createMany?: BookingsCreateManyTariffInputEnvelope
    set?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    disconnect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    delete?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    connect?: BookingsWhereUniqueInput | BookingsWhereUniqueInput[]
    update?: BookingsUpdateWithWhereUniqueWithoutTariffInput | BookingsUpdateWithWhereUniqueWithoutTariffInput[]
    updateMany?: BookingsUpdateManyWithWhereWithoutTariffInput | BookingsUpdateManyWithWhereWithoutTariffInput[]
    deleteMany?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
  }

  export type CategorysCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<CategorysCreateWithoutApplicationsInput, CategorysUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: CategorysCreateOrConnectWithoutApplicationsInput
    connect?: CategorysWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<UsersCreateWithoutApplicationsInput, UsersUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutApplicationsInput
    connect?: UsersWhereUniqueInput
  }

  export type CategorysUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<CategorysCreateWithoutApplicationsInput, CategorysUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: CategorysCreateOrConnectWithoutApplicationsInput
    upsert?: CategorysUpsertWithoutApplicationsInput
    connect?: CategorysWhereUniqueInput
    update?: XOR<XOR<CategorysUpdateToOneWithWhereWithoutApplicationsInput, CategorysUpdateWithoutApplicationsInput>, CategorysUncheckedUpdateWithoutApplicationsInput>
  }

  export type UsersUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<UsersCreateWithoutApplicationsInput, UsersUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutApplicationsInput
    upsert?: UsersUpsertWithoutApplicationsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutApplicationsInput, UsersUpdateWithoutApplicationsInput>, UsersUncheckedUpdateWithoutApplicationsInput>
  }

  export type BicyclesCreateNestedOneWithoutBookingsInput = {
    create?: XOR<BicyclesCreateWithoutBookingsInput, BicyclesUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: BicyclesCreateOrConnectWithoutBookingsInput
    connect?: BicyclesWhereUniqueInput
  }

  export type TariffsCreateNestedOneWithoutBookingsInput = {
    create?: XOR<TariffsCreateWithoutBookingsInput, TariffsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: TariffsCreateOrConnectWithoutBookingsInput
    connect?: TariffsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UsersCreateWithoutBookingsInput, UsersUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBookingsInput
    connect?: UsersWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BicyclesUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<BicyclesCreateWithoutBookingsInput, BicyclesUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: BicyclesCreateOrConnectWithoutBookingsInput
    upsert?: BicyclesUpsertWithoutBookingsInput
    connect?: BicyclesWhereUniqueInput
    update?: XOR<XOR<BicyclesUpdateToOneWithWhereWithoutBookingsInput, BicyclesUpdateWithoutBookingsInput>, BicyclesUncheckedUpdateWithoutBookingsInput>
  }

  export type TariffsUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<TariffsCreateWithoutBookingsInput, TariffsUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: TariffsCreateOrConnectWithoutBookingsInput
    upsert?: TariffsUpsertWithoutBookingsInput
    connect?: TariffsWhereUniqueInput
    update?: XOR<XOR<TariffsUpdateToOneWithWhereWithoutBookingsInput, TariffsUpdateWithoutBookingsInput>, TariffsUncheckedUpdateWithoutBookingsInput>
  }

  export type UsersUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UsersCreateWithoutBookingsInput, UsersUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBookingsInput
    upsert?: UsersUpsertWithoutBookingsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutBookingsInput, UsersUpdateWithoutBookingsInput>, UsersUncheckedUpdateWithoutBookingsInput>
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CategorysCreateWithoutOwnerInput = {
    category_key: string
    name: string
    bicycles?: BicyclesCreateNestedManyWithoutCategoryInput
    applications?: ApplicationsCreateNestedManyWithoutCategoryInput
    tariffs?: TariffsCreateNestedManyWithoutCategoryInput
  }

  export type CategorysUncheckedCreateWithoutOwnerInput = {
    category_key: string
    name: string
    bicycles?: BicyclesUncheckedCreateNestedManyWithoutCategoryInput
    applications?: ApplicationsUncheckedCreateNestedManyWithoutCategoryInput
    tariffs?: TariffsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategorysCreateOrConnectWithoutOwnerInput = {
    where: CategorysWhereUniqueInput
    create: XOR<CategorysCreateWithoutOwnerInput, CategorysUncheckedCreateWithoutOwnerInput>
  }

  export type CategorysCreateManyOwnerInputEnvelope = {
    data: CategorysCreateManyOwnerInput | CategorysCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationsCreateWithoutUserInput = {
    application_key: string
    category: CategorysCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationsUncheckedCreateWithoutUserInput = {
    application_key: string
    category_ref: string
  }

  export type ApplicationsCreateOrConnectWithoutUserInput = {
    where: ApplicationsWhereUniqueInput
    create: XOR<ApplicationsCreateWithoutUserInput, ApplicationsUncheckedCreateWithoutUserInput>
  }

  export type ApplicationsCreateManyUserInputEnvelope = {
    data: ApplicationsCreateManyUserInput | ApplicationsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookingsCreateWithoutUserInput = {
    booking_key: string
    rating?: number | null
    price?: number | null
    percentageOfWear?: number | null
    startedAt: Date | string
    endedAt?: Date | string | null
    photos?: NullableJsonNullValueInput | InputJsonValue
    bicycle: BicyclesCreateNestedOneWithoutBookingsInput
    tariff: TariffsCreateNestedOneWithoutBookingsInput
  }

  export type BookingsUncheckedCreateWithoutUserInput = {
    booking_key: string
    rating?: number | null
    price?: number | null
    percentageOfWear?: number | null
    startedAt: Date | string
    endedAt?: Date | string | null
    bicycle_ref: string
    tariff_ref: string
    photos?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BookingsCreateOrConnectWithoutUserInput = {
    where: BookingsWhereUniqueInput
    create: XOR<BookingsCreateWithoutUserInput, BookingsUncheckedCreateWithoutUserInput>
  }

  export type BookingsCreateManyUserInputEnvelope = {
    data: BookingsCreateManyUserInput | BookingsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CategorysUpsertWithWhereUniqueWithoutOwnerInput = {
    where: CategorysWhereUniqueInput
    update: XOR<CategorysUpdateWithoutOwnerInput, CategorysUncheckedUpdateWithoutOwnerInput>
    create: XOR<CategorysCreateWithoutOwnerInput, CategorysUncheckedCreateWithoutOwnerInput>
  }

  export type CategorysUpdateWithWhereUniqueWithoutOwnerInput = {
    where: CategorysWhereUniqueInput
    data: XOR<CategorysUpdateWithoutOwnerInput, CategorysUncheckedUpdateWithoutOwnerInput>
  }

  export type CategorysUpdateManyWithWhereWithoutOwnerInput = {
    where: CategorysScalarWhereInput
    data: XOR<CategorysUpdateManyMutationInput, CategorysUncheckedUpdateManyWithoutOwnerInput>
  }

  export type CategorysScalarWhereInput = {
    AND?: CategorysScalarWhereInput | CategorysScalarWhereInput[]
    OR?: CategorysScalarWhereInput[]
    NOT?: CategorysScalarWhereInput | CategorysScalarWhereInput[]
    category_key?: StringFilter<"Categorys"> | string
    name?: StringFilter<"Categorys"> | string
    user_ref?: StringFilter<"Categorys"> | string
  }

  export type ApplicationsUpsertWithWhereUniqueWithoutUserInput = {
    where: ApplicationsWhereUniqueInput
    update: XOR<ApplicationsUpdateWithoutUserInput, ApplicationsUncheckedUpdateWithoutUserInput>
    create: XOR<ApplicationsCreateWithoutUserInput, ApplicationsUncheckedCreateWithoutUserInput>
  }

  export type ApplicationsUpdateWithWhereUniqueWithoutUserInput = {
    where: ApplicationsWhereUniqueInput
    data: XOR<ApplicationsUpdateWithoutUserInput, ApplicationsUncheckedUpdateWithoutUserInput>
  }

  export type ApplicationsUpdateManyWithWhereWithoutUserInput = {
    where: ApplicationsScalarWhereInput
    data: XOR<ApplicationsUpdateManyMutationInput, ApplicationsUncheckedUpdateManyWithoutUserInput>
  }

  export type ApplicationsScalarWhereInput = {
    AND?: ApplicationsScalarWhereInput | ApplicationsScalarWhereInput[]
    OR?: ApplicationsScalarWhereInput[]
    NOT?: ApplicationsScalarWhereInput | ApplicationsScalarWhereInput[]
    application_key?: StringFilter<"Applications"> | string
    category_ref?: StringFilter<"Applications"> | string
    user_ref?: StringFilter<"Applications"> | string
  }

  export type BookingsUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingsWhereUniqueInput
    update: XOR<BookingsUpdateWithoutUserInput, BookingsUncheckedUpdateWithoutUserInput>
    create: XOR<BookingsCreateWithoutUserInput, BookingsUncheckedCreateWithoutUserInput>
  }

  export type BookingsUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingsWhereUniqueInput
    data: XOR<BookingsUpdateWithoutUserInput, BookingsUncheckedUpdateWithoutUserInput>
  }

  export type BookingsUpdateManyWithWhereWithoutUserInput = {
    where: BookingsScalarWhereInput
    data: XOR<BookingsUpdateManyMutationInput, BookingsUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingsScalarWhereInput = {
    AND?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
    OR?: BookingsScalarWhereInput[]
    NOT?: BookingsScalarWhereInput | BookingsScalarWhereInput[]
    booking_key?: StringFilter<"Bookings"> | string
    rating?: IntNullableFilter<"Bookings"> | number | null
    price?: FloatNullableFilter<"Bookings"> | number | null
    percentageOfWear?: FloatNullableFilter<"Bookings"> | number | null
    startedAt?: DateTimeFilter<"Bookings"> | Date | string
    endedAt?: DateTimeNullableFilter<"Bookings"> | Date | string | null
    bicycle_ref?: StringFilter<"Bookings"> | string
    tariff_ref?: StringFilter<"Bookings"> | string
    user_ref?: StringFilter<"Bookings"> | string
    photos?: JsonNullableFilter<"Bookings">
  }

  export type UsersCreateWithoutCategoriesInput = {
    user_key: string
    name: string
    email: string
    phone: string
    password_hash: string
    applications?: ApplicationsCreateNestedManyWithoutUserInput
    bookings?: BookingsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutCategoriesInput = {
    user_key: string
    name: string
    email: string
    phone: string
    password_hash: string
    applications?: ApplicationsUncheckedCreateNestedManyWithoutUserInput
    bookings?: BookingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutCategoriesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCategoriesInput, UsersUncheckedCreateWithoutCategoriesInput>
  }

  export type BicyclesCreateWithoutCategoryInput = {
    bicycle_key: string
    name: string
    slug: string
    description: string
    locationX: number
    locationY: number
    pathToImage: string
    bookings?: BookingsCreateNestedManyWithoutBicycleInput
  }

  export type BicyclesUncheckedCreateWithoutCategoryInput = {
    bicycle_key: string
    name: string
    slug: string
    description: string
    locationX: number
    locationY: number
    pathToImage: string
    bookings?: BookingsUncheckedCreateNestedManyWithoutBicycleInput
  }

  export type BicyclesCreateOrConnectWithoutCategoryInput = {
    where: BicyclesWhereUniqueInput
    create: XOR<BicyclesCreateWithoutCategoryInput, BicyclesUncheckedCreateWithoutCategoryInput>
  }

  export type BicyclesCreateManyCategoryInputEnvelope = {
    data: BicyclesCreateManyCategoryInput | BicyclesCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationsCreateWithoutCategoryInput = {
    application_key: string
    user: UsersCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationsUncheckedCreateWithoutCategoryInput = {
    application_key: string
    user_ref: string
  }

  export type ApplicationsCreateOrConnectWithoutCategoryInput = {
    where: ApplicationsWhereUniqueInput
    create: XOR<ApplicationsCreateWithoutCategoryInput, ApplicationsUncheckedCreateWithoutCategoryInput>
  }

  export type ApplicationsCreateManyCategoryInputEnvelope = {
    data: ApplicationsCreateManyCategoryInput | ApplicationsCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type TariffsCreateWithoutCategoryInput = {
    tariff_key: string
    name: string
    type: string
    basePrice: number
    minPrice?: number | null
    maxPrice?: number | null
    bookings?: BookingsCreateNestedManyWithoutTariffInput
  }

  export type TariffsUncheckedCreateWithoutCategoryInput = {
    tariff_key: string
    name: string
    type: string
    basePrice: number
    minPrice?: number | null
    maxPrice?: number | null
    bookings?: BookingsUncheckedCreateNestedManyWithoutTariffInput
  }

  export type TariffsCreateOrConnectWithoutCategoryInput = {
    where: TariffsWhereUniqueInput
    create: XOR<TariffsCreateWithoutCategoryInput, TariffsUncheckedCreateWithoutCategoryInput>
  }

  export type TariffsCreateManyCategoryInputEnvelope = {
    data: TariffsCreateManyCategoryInput | TariffsCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutCategoriesInput = {
    update: XOR<UsersUpdateWithoutCategoriesInput, UsersUncheckedUpdateWithoutCategoriesInput>
    create: XOR<UsersCreateWithoutCategoriesInput, UsersUncheckedCreateWithoutCategoriesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCategoriesInput, UsersUncheckedUpdateWithoutCategoriesInput>
  }

  export type UsersUpdateWithoutCategoriesInput = {
    user_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    applications?: ApplicationsUpdateManyWithoutUserNestedInput
    bookings?: BookingsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutCategoriesInput = {
    user_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    applications?: ApplicationsUncheckedUpdateManyWithoutUserNestedInput
    bookings?: BookingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BicyclesUpsertWithWhereUniqueWithoutCategoryInput = {
    where: BicyclesWhereUniqueInput
    update: XOR<BicyclesUpdateWithoutCategoryInput, BicyclesUncheckedUpdateWithoutCategoryInput>
    create: XOR<BicyclesCreateWithoutCategoryInput, BicyclesUncheckedCreateWithoutCategoryInput>
  }

  export type BicyclesUpdateWithWhereUniqueWithoutCategoryInput = {
    where: BicyclesWhereUniqueInput
    data: XOR<BicyclesUpdateWithoutCategoryInput, BicyclesUncheckedUpdateWithoutCategoryInput>
  }

  export type BicyclesUpdateManyWithWhereWithoutCategoryInput = {
    where: BicyclesScalarWhereInput
    data: XOR<BicyclesUpdateManyMutationInput, BicyclesUncheckedUpdateManyWithoutCategoryInput>
  }

  export type BicyclesScalarWhereInput = {
    AND?: BicyclesScalarWhereInput | BicyclesScalarWhereInput[]
    OR?: BicyclesScalarWhereInput[]
    NOT?: BicyclesScalarWhereInput | BicyclesScalarWhereInput[]
    bicycle_key?: StringFilter<"Bicycles"> | string
    name?: StringFilter<"Bicycles"> | string
    slug?: StringFilter<"Bicycles"> | string
    description?: StringFilter<"Bicycles"> | string
    locationX?: FloatFilter<"Bicycles"> | number
    locationY?: FloatFilter<"Bicycles"> | number
    pathToImage?: StringFilter<"Bicycles"> | string
    category_ref?: StringFilter<"Bicycles"> | string
  }

  export type ApplicationsUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ApplicationsWhereUniqueInput
    update: XOR<ApplicationsUpdateWithoutCategoryInput, ApplicationsUncheckedUpdateWithoutCategoryInput>
    create: XOR<ApplicationsCreateWithoutCategoryInput, ApplicationsUncheckedCreateWithoutCategoryInput>
  }

  export type ApplicationsUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ApplicationsWhereUniqueInput
    data: XOR<ApplicationsUpdateWithoutCategoryInput, ApplicationsUncheckedUpdateWithoutCategoryInput>
  }

  export type ApplicationsUpdateManyWithWhereWithoutCategoryInput = {
    where: ApplicationsScalarWhereInput
    data: XOR<ApplicationsUpdateManyMutationInput, ApplicationsUncheckedUpdateManyWithoutCategoryInput>
  }

  export type TariffsUpsertWithWhereUniqueWithoutCategoryInput = {
    where: TariffsWhereUniqueInput
    update: XOR<TariffsUpdateWithoutCategoryInput, TariffsUncheckedUpdateWithoutCategoryInput>
    create: XOR<TariffsCreateWithoutCategoryInput, TariffsUncheckedCreateWithoutCategoryInput>
  }

  export type TariffsUpdateWithWhereUniqueWithoutCategoryInput = {
    where: TariffsWhereUniqueInput
    data: XOR<TariffsUpdateWithoutCategoryInput, TariffsUncheckedUpdateWithoutCategoryInput>
  }

  export type TariffsUpdateManyWithWhereWithoutCategoryInput = {
    where: TariffsScalarWhereInput
    data: XOR<TariffsUpdateManyMutationInput, TariffsUncheckedUpdateManyWithoutCategoryInput>
  }

  export type TariffsScalarWhereInput = {
    AND?: TariffsScalarWhereInput | TariffsScalarWhereInput[]
    OR?: TariffsScalarWhereInput[]
    NOT?: TariffsScalarWhereInput | TariffsScalarWhereInput[]
    tariff_key?: StringFilter<"Tariffs"> | string
    name?: StringFilter<"Tariffs"> | string
    type?: StringFilter<"Tariffs"> | string
    basePrice?: FloatFilter<"Tariffs"> | number
    minPrice?: FloatNullableFilter<"Tariffs"> | number | null
    maxPrice?: FloatNullableFilter<"Tariffs"> | number | null
    category_ref?: StringFilter<"Tariffs"> | string
  }

  export type CategorysCreateWithoutBicyclesInput = {
    category_key: string
    name: string
    owner: UsersCreateNestedOneWithoutCategoriesInput
    applications?: ApplicationsCreateNestedManyWithoutCategoryInput
    tariffs?: TariffsCreateNestedManyWithoutCategoryInput
  }

  export type CategorysUncheckedCreateWithoutBicyclesInput = {
    category_key: string
    name: string
    user_ref: string
    applications?: ApplicationsUncheckedCreateNestedManyWithoutCategoryInput
    tariffs?: TariffsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategorysCreateOrConnectWithoutBicyclesInput = {
    where: CategorysWhereUniqueInput
    create: XOR<CategorysCreateWithoutBicyclesInput, CategorysUncheckedCreateWithoutBicyclesInput>
  }

  export type BookingsCreateWithoutBicycleInput = {
    booking_key: string
    rating?: number | null
    price?: number | null
    percentageOfWear?: number | null
    startedAt: Date | string
    endedAt?: Date | string | null
    photos?: NullableJsonNullValueInput | InputJsonValue
    tariff: TariffsCreateNestedOneWithoutBookingsInput
    user: UsersCreateNestedOneWithoutBookingsInput
  }

  export type BookingsUncheckedCreateWithoutBicycleInput = {
    booking_key: string
    rating?: number | null
    price?: number | null
    percentageOfWear?: number | null
    startedAt: Date | string
    endedAt?: Date | string | null
    tariff_ref: string
    user_ref: string
    photos?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BookingsCreateOrConnectWithoutBicycleInput = {
    where: BookingsWhereUniqueInput
    create: XOR<BookingsCreateWithoutBicycleInput, BookingsUncheckedCreateWithoutBicycleInput>
  }

  export type BookingsCreateManyBicycleInputEnvelope = {
    data: BookingsCreateManyBicycleInput | BookingsCreateManyBicycleInput[]
    skipDuplicates?: boolean
  }

  export type CategorysUpsertWithoutBicyclesInput = {
    update: XOR<CategorysUpdateWithoutBicyclesInput, CategorysUncheckedUpdateWithoutBicyclesInput>
    create: XOR<CategorysCreateWithoutBicyclesInput, CategorysUncheckedCreateWithoutBicyclesInput>
    where?: CategorysWhereInput
  }

  export type CategorysUpdateToOneWithWhereWithoutBicyclesInput = {
    where?: CategorysWhereInput
    data: XOR<CategorysUpdateWithoutBicyclesInput, CategorysUncheckedUpdateWithoutBicyclesInput>
  }

  export type CategorysUpdateWithoutBicyclesInput = {
    category_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    owner?: UsersUpdateOneRequiredWithoutCategoriesNestedInput
    applications?: ApplicationsUpdateManyWithoutCategoryNestedInput
    tariffs?: TariffsUpdateManyWithoutCategoryNestedInput
  }

  export type CategorysUncheckedUpdateWithoutBicyclesInput = {
    category_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_ref?: StringFieldUpdateOperationsInput | string
    applications?: ApplicationsUncheckedUpdateManyWithoutCategoryNestedInput
    tariffs?: TariffsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type BookingsUpsertWithWhereUniqueWithoutBicycleInput = {
    where: BookingsWhereUniqueInput
    update: XOR<BookingsUpdateWithoutBicycleInput, BookingsUncheckedUpdateWithoutBicycleInput>
    create: XOR<BookingsCreateWithoutBicycleInput, BookingsUncheckedCreateWithoutBicycleInput>
  }

  export type BookingsUpdateWithWhereUniqueWithoutBicycleInput = {
    where: BookingsWhereUniqueInput
    data: XOR<BookingsUpdateWithoutBicycleInput, BookingsUncheckedUpdateWithoutBicycleInput>
  }

  export type BookingsUpdateManyWithWhereWithoutBicycleInput = {
    where: BookingsScalarWhereInput
    data: XOR<BookingsUpdateManyMutationInput, BookingsUncheckedUpdateManyWithoutBicycleInput>
  }

  export type CategorysCreateWithoutTariffsInput = {
    category_key: string
    name: string
    owner: UsersCreateNestedOneWithoutCategoriesInput
    bicycles?: BicyclesCreateNestedManyWithoutCategoryInput
    applications?: ApplicationsCreateNestedManyWithoutCategoryInput
  }

  export type CategorysUncheckedCreateWithoutTariffsInput = {
    category_key: string
    name: string
    user_ref: string
    bicycles?: BicyclesUncheckedCreateNestedManyWithoutCategoryInput
    applications?: ApplicationsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategorysCreateOrConnectWithoutTariffsInput = {
    where: CategorysWhereUniqueInput
    create: XOR<CategorysCreateWithoutTariffsInput, CategorysUncheckedCreateWithoutTariffsInput>
  }

  export type BookingsCreateWithoutTariffInput = {
    booking_key: string
    rating?: number | null
    price?: number | null
    percentageOfWear?: number | null
    startedAt: Date | string
    endedAt?: Date | string | null
    photos?: NullableJsonNullValueInput | InputJsonValue
    bicycle: BicyclesCreateNestedOneWithoutBookingsInput
    user: UsersCreateNestedOneWithoutBookingsInput
  }

  export type BookingsUncheckedCreateWithoutTariffInput = {
    booking_key: string
    rating?: number | null
    price?: number | null
    percentageOfWear?: number | null
    startedAt: Date | string
    endedAt?: Date | string | null
    bicycle_ref: string
    user_ref: string
    photos?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BookingsCreateOrConnectWithoutTariffInput = {
    where: BookingsWhereUniqueInput
    create: XOR<BookingsCreateWithoutTariffInput, BookingsUncheckedCreateWithoutTariffInput>
  }

  export type BookingsCreateManyTariffInputEnvelope = {
    data: BookingsCreateManyTariffInput | BookingsCreateManyTariffInput[]
    skipDuplicates?: boolean
  }

  export type CategorysUpsertWithoutTariffsInput = {
    update: XOR<CategorysUpdateWithoutTariffsInput, CategorysUncheckedUpdateWithoutTariffsInput>
    create: XOR<CategorysCreateWithoutTariffsInput, CategorysUncheckedCreateWithoutTariffsInput>
    where?: CategorysWhereInput
  }

  export type CategorysUpdateToOneWithWhereWithoutTariffsInput = {
    where?: CategorysWhereInput
    data: XOR<CategorysUpdateWithoutTariffsInput, CategorysUncheckedUpdateWithoutTariffsInput>
  }

  export type CategorysUpdateWithoutTariffsInput = {
    category_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    owner?: UsersUpdateOneRequiredWithoutCategoriesNestedInput
    bicycles?: BicyclesUpdateManyWithoutCategoryNestedInput
    applications?: ApplicationsUpdateManyWithoutCategoryNestedInput
  }

  export type CategorysUncheckedUpdateWithoutTariffsInput = {
    category_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_ref?: StringFieldUpdateOperationsInput | string
    bicycles?: BicyclesUncheckedUpdateManyWithoutCategoryNestedInput
    applications?: ApplicationsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type BookingsUpsertWithWhereUniqueWithoutTariffInput = {
    where: BookingsWhereUniqueInput
    update: XOR<BookingsUpdateWithoutTariffInput, BookingsUncheckedUpdateWithoutTariffInput>
    create: XOR<BookingsCreateWithoutTariffInput, BookingsUncheckedCreateWithoutTariffInput>
  }

  export type BookingsUpdateWithWhereUniqueWithoutTariffInput = {
    where: BookingsWhereUniqueInput
    data: XOR<BookingsUpdateWithoutTariffInput, BookingsUncheckedUpdateWithoutTariffInput>
  }

  export type BookingsUpdateManyWithWhereWithoutTariffInput = {
    where: BookingsScalarWhereInput
    data: XOR<BookingsUpdateManyMutationInput, BookingsUncheckedUpdateManyWithoutTariffInput>
  }

  export type CategorysCreateWithoutApplicationsInput = {
    category_key: string
    name: string
    owner: UsersCreateNestedOneWithoutCategoriesInput
    bicycles?: BicyclesCreateNestedManyWithoutCategoryInput
    tariffs?: TariffsCreateNestedManyWithoutCategoryInput
  }

  export type CategorysUncheckedCreateWithoutApplicationsInput = {
    category_key: string
    name: string
    user_ref: string
    bicycles?: BicyclesUncheckedCreateNestedManyWithoutCategoryInput
    tariffs?: TariffsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategorysCreateOrConnectWithoutApplicationsInput = {
    where: CategorysWhereUniqueInput
    create: XOR<CategorysCreateWithoutApplicationsInput, CategorysUncheckedCreateWithoutApplicationsInput>
  }

  export type UsersCreateWithoutApplicationsInput = {
    user_key: string
    name: string
    email: string
    phone: string
    password_hash: string
    categories?: CategorysCreateNestedManyWithoutOwnerInput
    bookings?: BookingsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutApplicationsInput = {
    user_key: string
    name: string
    email: string
    phone: string
    password_hash: string
    categories?: CategorysUncheckedCreateNestedManyWithoutOwnerInput
    bookings?: BookingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutApplicationsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutApplicationsInput, UsersUncheckedCreateWithoutApplicationsInput>
  }

  export type CategorysUpsertWithoutApplicationsInput = {
    update: XOR<CategorysUpdateWithoutApplicationsInput, CategorysUncheckedUpdateWithoutApplicationsInput>
    create: XOR<CategorysCreateWithoutApplicationsInput, CategorysUncheckedCreateWithoutApplicationsInput>
    where?: CategorysWhereInput
  }

  export type CategorysUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: CategorysWhereInput
    data: XOR<CategorysUpdateWithoutApplicationsInput, CategorysUncheckedUpdateWithoutApplicationsInput>
  }

  export type CategorysUpdateWithoutApplicationsInput = {
    category_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    owner?: UsersUpdateOneRequiredWithoutCategoriesNestedInput
    bicycles?: BicyclesUpdateManyWithoutCategoryNestedInput
    tariffs?: TariffsUpdateManyWithoutCategoryNestedInput
  }

  export type CategorysUncheckedUpdateWithoutApplicationsInput = {
    category_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_ref?: StringFieldUpdateOperationsInput | string
    bicycles?: BicyclesUncheckedUpdateManyWithoutCategoryNestedInput
    tariffs?: TariffsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type UsersUpsertWithoutApplicationsInput = {
    update: XOR<UsersUpdateWithoutApplicationsInput, UsersUncheckedUpdateWithoutApplicationsInput>
    create: XOR<UsersCreateWithoutApplicationsInput, UsersUncheckedCreateWithoutApplicationsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutApplicationsInput, UsersUncheckedUpdateWithoutApplicationsInput>
  }

  export type UsersUpdateWithoutApplicationsInput = {
    user_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    categories?: CategorysUpdateManyWithoutOwnerNestedInput
    bookings?: BookingsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutApplicationsInput = {
    user_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    categories?: CategorysUncheckedUpdateManyWithoutOwnerNestedInput
    bookings?: BookingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BicyclesCreateWithoutBookingsInput = {
    bicycle_key: string
    name: string
    slug: string
    description: string
    locationX: number
    locationY: number
    pathToImage: string
    category: CategorysCreateNestedOneWithoutBicyclesInput
  }

  export type BicyclesUncheckedCreateWithoutBookingsInput = {
    bicycle_key: string
    name: string
    slug: string
    description: string
    locationX: number
    locationY: number
    pathToImage: string
    category_ref: string
  }

  export type BicyclesCreateOrConnectWithoutBookingsInput = {
    where: BicyclesWhereUniqueInput
    create: XOR<BicyclesCreateWithoutBookingsInput, BicyclesUncheckedCreateWithoutBookingsInput>
  }

  export type TariffsCreateWithoutBookingsInput = {
    tariff_key: string
    name: string
    type: string
    basePrice: number
    minPrice?: number | null
    maxPrice?: number | null
    category: CategorysCreateNestedOneWithoutTariffsInput
  }

  export type TariffsUncheckedCreateWithoutBookingsInput = {
    tariff_key: string
    name: string
    type: string
    basePrice: number
    minPrice?: number | null
    maxPrice?: number | null
    category_ref: string
  }

  export type TariffsCreateOrConnectWithoutBookingsInput = {
    where: TariffsWhereUniqueInput
    create: XOR<TariffsCreateWithoutBookingsInput, TariffsUncheckedCreateWithoutBookingsInput>
  }

  export type UsersCreateWithoutBookingsInput = {
    user_key: string
    name: string
    email: string
    phone: string
    password_hash: string
    categories?: CategorysCreateNestedManyWithoutOwnerInput
    applications?: ApplicationsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutBookingsInput = {
    user_key: string
    name: string
    email: string
    phone: string
    password_hash: string
    categories?: CategorysUncheckedCreateNestedManyWithoutOwnerInput
    applications?: ApplicationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutBookingsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutBookingsInput, UsersUncheckedCreateWithoutBookingsInput>
  }

  export type BicyclesUpsertWithoutBookingsInput = {
    update: XOR<BicyclesUpdateWithoutBookingsInput, BicyclesUncheckedUpdateWithoutBookingsInput>
    create: XOR<BicyclesCreateWithoutBookingsInput, BicyclesUncheckedCreateWithoutBookingsInput>
    where?: BicyclesWhereInput
  }

  export type BicyclesUpdateToOneWithWhereWithoutBookingsInput = {
    where?: BicyclesWhereInput
    data: XOR<BicyclesUpdateWithoutBookingsInput, BicyclesUncheckedUpdateWithoutBookingsInput>
  }

  export type BicyclesUpdateWithoutBookingsInput = {
    bicycle_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    locationX?: FloatFieldUpdateOperationsInput | number
    locationY?: FloatFieldUpdateOperationsInput | number
    pathToImage?: StringFieldUpdateOperationsInput | string
    category?: CategorysUpdateOneRequiredWithoutBicyclesNestedInput
  }

  export type BicyclesUncheckedUpdateWithoutBookingsInput = {
    bicycle_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    locationX?: FloatFieldUpdateOperationsInput | number
    locationY?: FloatFieldUpdateOperationsInput | number
    pathToImage?: StringFieldUpdateOperationsInput | string
    category_ref?: StringFieldUpdateOperationsInput | string
  }

  export type TariffsUpsertWithoutBookingsInput = {
    update: XOR<TariffsUpdateWithoutBookingsInput, TariffsUncheckedUpdateWithoutBookingsInput>
    create: XOR<TariffsCreateWithoutBookingsInput, TariffsUncheckedCreateWithoutBookingsInput>
    where?: TariffsWhereInput
  }

  export type TariffsUpdateToOneWithWhereWithoutBookingsInput = {
    where?: TariffsWhereInput
    data: XOR<TariffsUpdateWithoutBookingsInput, TariffsUncheckedUpdateWithoutBookingsInput>
  }

  export type TariffsUpdateWithoutBookingsInput = {
    tariff_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: CategorysUpdateOneRequiredWithoutTariffsNestedInput
  }

  export type TariffsUncheckedUpdateWithoutBookingsInput = {
    tariff_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    category_ref?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUpsertWithoutBookingsInput = {
    update: XOR<UsersUpdateWithoutBookingsInput, UsersUncheckedUpdateWithoutBookingsInput>
    create: XOR<UsersCreateWithoutBookingsInput, UsersUncheckedCreateWithoutBookingsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutBookingsInput, UsersUncheckedUpdateWithoutBookingsInput>
  }

  export type UsersUpdateWithoutBookingsInput = {
    user_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    categories?: CategorysUpdateManyWithoutOwnerNestedInput
    applications?: ApplicationsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutBookingsInput = {
    user_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    categories?: CategorysUncheckedUpdateManyWithoutOwnerNestedInput
    applications?: ApplicationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategorysCreateManyOwnerInput = {
    category_key: string
    name: string
  }

  export type ApplicationsCreateManyUserInput = {
    application_key: string
    category_ref: string
  }

  export type BookingsCreateManyUserInput = {
    booking_key: string
    rating?: number | null
    price?: number | null
    percentageOfWear?: number | null
    startedAt: Date | string
    endedAt?: Date | string | null
    bicycle_ref: string
    tariff_ref: string
    photos?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CategorysUpdateWithoutOwnerInput = {
    category_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bicycles?: BicyclesUpdateManyWithoutCategoryNestedInput
    applications?: ApplicationsUpdateManyWithoutCategoryNestedInput
    tariffs?: TariffsUpdateManyWithoutCategoryNestedInput
  }

  export type CategorysUncheckedUpdateWithoutOwnerInput = {
    category_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bicycles?: BicyclesUncheckedUpdateManyWithoutCategoryNestedInput
    applications?: ApplicationsUncheckedUpdateManyWithoutCategoryNestedInput
    tariffs?: TariffsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategorysUncheckedUpdateManyWithoutOwnerInput = {
    category_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ApplicationsUpdateWithoutUserInput = {
    application_key?: StringFieldUpdateOperationsInput | string
    category?: CategorysUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationsUncheckedUpdateWithoutUserInput = {
    application_key?: StringFieldUpdateOperationsInput | string
    category_ref?: StringFieldUpdateOperationsInput | string
  }

  export type ApplicationsUncheckedUpdateManyWithoutUserInput = {
    application_key?: StringFieldUpdateOperationsInput | string
    category_ref?: StringFieldUpdateOperationsInput | string
  }

  export type BookingsUpdateWithoutUserInput = {
    booking_key?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    percentageOfWear?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photos?: NullableJsonNullValueInput | InputJsonValue
    bicycle?: BicyclesUpdateOneRequiredWithoutBookingsNestedInput
    tariff?: TariffsUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingsUncheckedUpdateWithoutUserInput = {
    booking_key?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    percentageOfWear?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bicycle_ref?: StringFieldUpdateOperationsInput | string
    tariff_ref?: StringFieldUpdateOperationsInput | string
    photos?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BookingsUncheckedUpdateManyWithoutUserInput = {
    booking_key?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    percentageOfWear?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bicycle_ref?: StringFieldUpdateOperationsInput | string
    tariff_ref?: StringFieldUpdateOperationsInput | string
    photos?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BicyclesCreateManyCategoryInput = {
    bicycle_key: string
    name: string
    slug: string
    description: string
    locationX: number
    locationY: number
    pathToImage: string
  }

  export type ApplicationsCreateManyCategoryInput = {
    application_key: string
    user_ref: string
  }

  export type TariffsCreateManyCategoryInput = {
    tariff_key: string
    name: string
    type: string
    basePrice: number
    minPrice?: number | null
    maxPrice?: number | null
  }

  export type BicyclesUpdateWithoutCategoryInput = {
    bicycle_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    locationX?: FloatFieldUpdateOperationsInput | number
    locationY?: FloatFieldUpdateOperationsInput | number
    pathToImage?: StringFieldUpdateOperationsInput | string
    bookings?: BookingsUpdateManyWithoutBicycleNestedInput
  }

  export type BicyclesUncheckedUpdateWithoutCategoryInput = {
    bicycle_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    locationX?: FloatFieldUpdateOperationsInput | number
    locationY?: FloatFieldUpdateOperationsInput | number
    pathToImage?: StringFieldUpdateOperationsInput | string
    bookings?: BookingsUncheckedUpdateManyWithoutBicycleNestedInput
  }

  export type BicyclesUncheckedUpdateManyWithoutCategoryInput = {
    bicycle_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    locationX?: FloatFieldUpdateOperationsInput | number
    locationY?: FloatFieldUpdateOperationsInput | number
    pathToImage?: StringFieldUpdateOperationsInput | string
  }

  export type ApplicationsUpdateWithoutCategoryInput = {
    application_key?: StringFieldUpdateOperationsInput | string
    user?: UsersUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationsUncheckedUpdateWithoutCategoryInput = {
    application_key?: StringFieldUpdateOperationsInput | string
    user_ref?: StringFieldUpdateOperationsInput | string
  }

  export type ApplicationsUncheckedUpdateManyWithoutCategoryInput = {
    application_key?: StringFieldUpdateOperationsInput | string
    user_ref?: StringFieldUpdateOperationsInput | string
  }

  export type TariffsUpdateWithoutCategoryInput = {
    tariff_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    bookings?: BookingsUpdateManyWithoutTariffNestedInput
  }

  export type TariffsUncheckedUpdateWithoutCategoryInput = {
    tariff_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    bookings?: BookingsUncheckedUpdateManyWithoutTariffNestedInput
  }

  export type TariffsUncheckedUpdateManyWithoutCategoryInput = {
    tariff_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    minPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    maxPrice?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type BookingsCreateManyBicycleInput = {
    booking_key: string
    rating?: number | null
    price?: number | null
    percentageOfWear?: number | null
    startedAt: Date | string
    endedAt?: Date | string | null
    tariff_ref: string
    user_ref: string
    photos?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BookingsUpdateWithoutBicycleInput = {
    booking_key?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    percentageOfWear?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photos?: NullableJsonNullValueInput | InputJsonValue
    tariff?: TariffsUpdateOneRequiredWithoutBookingsNestedInput
    user?: UsersUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingsUncheckedUpdateWithoutBicycleInput = {
    booking_key?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    percentageOfWear?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tariff_ref?: StringFieldUpdateOperationsInput | string
    user_ref?: StringFieldUpdateOperationsInput | string
    photos?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BookingsUncheckedUpdateManyWithoutBicycleInput = {
    booking_key?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    percentageOfWear?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tariff_ref?: StringFieldUpdateOperationsInput | string
    user_ref?: StringFieldUpdateOperationsInput | string
    photos?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BookingsCreateManyTariffInput = {
    booking_key: string
    rating?: number | null
    price?: number | null
    percentageOfWear?: number | null
    startedAt: Date | string
    endedAt?: Date | string | null
    bicycle_ref: string
    user_ref: string
    photos?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BookingsUpdateWithoutTariffInput = {
    booking_key?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    percentageOfWear?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photos?: NullableJsonNullValueInput | InputJsonValue
    bicycle?: BicyclesUpdateOneRequiredWithoutBookingsNestedInput
    user?: UsersUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingsUncheckedUpdateWithoutTariffInput = {
    booking_key?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    percentageOfWear?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bicycle_ref?: StringFieldUpdateOperationsInput | string
    user_ref?: StringFieldUpdateOperationsInput | string
    photos?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BookingsUncheckedUpdateManyWithoutTariffInput = {
    booking_key?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    percentageOfWear?: NullableFloatFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bicycle_ref?: StringFieldUpdateOperationsInput | string
    user_ref?: StringFieldUpdateOperationsInput | string
    photos?: NullableJsonNullValueInput | InputJsonValue
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