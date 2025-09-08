
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
 * Model VerificationCodes
 * 
 */
export type VerificationCodes = $Result.DefaultSelection<Prisma.$VerificationCodesPayload>
/**
 * Model Medications
 * 
 */
export type Medications = $Result.DefaultSelection<Prisma.$MedicationsPayload>
/**
 * Model Notifications
 * 
 */
export type Notifications = $Result.DefaultSelection<Prisma.$NotificationsPayload>
/**
 * Model Annotations
 * 
 */
export type Annotations = $Result.DefaultSelection<Prisma.$AnnotationsPayload>
/**
 * Model Sharings
 * 
 */
export type Sharings = $Result.DefaultSelection<Prisma.$SharingsPayload>
/**
 * Model VisualTypes
 * 
 */
export type VisualTypes = $Result.DefaultSelection<Prisma.$VisualTypesPayload>
/**
 * Model SoundTypes
 * 
 */
export type SoundTypes = $Result.DefaultSelection<Prisma.$SoundTypesPayload>

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
   * `prisma.verificationCodes`: Exposes CRUD operations for the **VerificationCodes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationCodes
    * const verificationCodes = await prisma.verificationCodes.findMany()
    * ```
    */
  get verificationCodes(): Prisma.VerificationCodesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medications`: Exposes CRUD operations for the **Medications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medications
    * const medications = await prisma.medications.findMany()
    * ```
    */
  get medications(): Prisma.MedicationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **Notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.NotificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.annotations`: Exposes CRUD operations for the **Annotations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Annotations
    * const annotations = await prisma.annotations.findMany()
    * ```
    */
  get annotations(): Prisma.AnnotationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sharings`: Exposes CRUD operations for the **Sharings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sharings
    * const sharings = await prisma.sharings.findMany()
    * ```
    */
  get sharings(): Prisma.SharingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visualTypes`: Exposes CRUD operations for the **VisualTypes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VisualTypes
    * const visualTypes = await prisma.visualTypes.findMany()
    * ```
    */
  get visualTypes(): Prisma.VisualTypesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.soundTypes`: Exposes CRUD operations for the **SoundTypes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SoundTypes
    * const soundTypes = await prisma.soundTypes.findMany()
    * ```
    */
  get soundTypes(): Prisma.SoundTypesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
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
    Users: 'Users',
    VerificationCodes: 'VerificationCodes',
    Medications: 'Medications',
    Notifications: 'Notifications',
    Annotations: 'Annotations',
    Sharings: 'Sharings',
    VisualTypes: 'VisualTypes',
    SoundTypes: 'SoundTypes'
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
      modelProps: "users" | "verificationCodes" | "medications" | "notifications" | "annotations" | "sharings" | "visualTypes" | "soundTypes"
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
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
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
      VerificationCodes: {
        payload: Prisma.$VerificationCodesPayload<ExtArgs>
        fields: Prisma.VerificationCodesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationCodesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationCodesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodesPayload>
          }
          findFirst: {
            args: Prisma.VerificationCodesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationCodesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodesPayload>
          }
          findMany: {
            args: Prisma.VerificationCodesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodesPayload>[]
          }
          create: {
            args: Prisma.VerificationCodesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodesPayload>
          }
          createMany: {
            args: Prisma.VerificationCodesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCodesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodesPayload>[]
          }
          delete: {
            args: Prisma.VerificationCodesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodesPayload>
          }
          update: {
            args: Prisma.VerificationCodesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodesPayload>
          }
          deleteMany: {
            args: Prisma.VerificationCodesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationCodesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationCodesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodesPayload>[]
          }
          upsert: {
            args: Prisma.VerificationCodesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodesPayload>
          }
          aggregate: {
            args: Prisma.VerificationCodesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationCodes>
          }
          groupBy: {
            args: Prisma.VerificationCodesGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationCodesGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCodesCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCodesCountAggregateOutputType> | number
          }
        }
      }
      Medications: {
        payload: Prisma.$MedicationsPayload<ExtArgs>
        fields: Prisma.MedicationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationsPayload>
          }
          findFirst: {
            args: Prisma.MedicationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationsPayload>
          }
          findMany: {
            args: Prisma.MedicationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationsPayload>[]
          }
          create: {
            args: Prisma.MedicationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationsPayload>
          }
          createMany: {
            args: Prisma.MedicationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationsPayload>[]
          }
          delete: {
            args: Prisma.MedicationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationsPayload>
          }
          update: {
            args: Prisma.MedicationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationsPayload>
          }
          deleteMany: {
            args: Prisma.MedicationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationsPayload>[]
          }
          upsert: {
            args: Prisma.MedicationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationsPayload>
          }
          aggregate: {
            args: Prisma.MedicationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedications>
          }
          groupBy: {
            args: Prisma.MedicationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicationsCountArgs<ExtArgs>
            result: $Utils.Optional<MedicationsCountAggregateOutputType> | number
          }
        }
      }
      Notifications: {
        payload: Prisma.$NotificationsPayload<ExtArgs>
        fields: Prisma.NotificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          findFirst: {
            args: Prisma.NotificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          findMany: {
            args: Prisma.NotificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          create: {
            args: Prisma.NotificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          createMany: {
            args: Prisma.NotificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          delete: {
            args: Prisma.NotificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          update: {
            args: Prisma.NotificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          deleteMany: {
            args: Prisma.NotificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          upsert: {
            args: Prisma.NotificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifications>
          }
          groupBy: {
            args: Prisma.NotificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number
          }
        }
      }
      Annotations: {
        payload: Prisma.$AnnotationsPayload<ExtArgs>
        fields: Prisma.AnnotationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnotationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnotationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnotationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnotationsPayload>
          }
          findFirst: {
            args: Prisma.AnnotationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnotationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnotationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnotationsPayload>
          }
          findMany: {
            args: Prisma.AnnotationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnotationsPayload>[]
          }
          create: {
            args: Prisma.AnnotationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnotationsPayload>
          }
          createMany: {
            args: Prisma.AnnotationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnotationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnotationsPayload>[]
          }
          delete: {
            args: Prisma.AnnotationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnotationsPayload>
          }
          update: {
            args: Prisma.AnnotationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnotationsPayload>
          }
          deleteMany: {
            args: Prisma.AnnotationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnotationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnnotationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnotationsPayload>[]
          }
          upsert: {
            args: Prisma.AnnotationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnotationsPayload>
          }
          aggregate: {
            args: Prisma.AnnotationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnotations>
          }
          groupBy: {
            args: Prisma.AnnotationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnotationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnotationsCountArgs<ExtArgs>
            result: $Utils.Optional<AnnotationsCountAggregateOutputType> | number
          }
        }
      }
      Sharings: {
        payload: Prisma.$SharingsPayload<ExtArgs>
        fields: Prisma.SharingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SharingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SharingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharingsPayload>
          }
          findFirst: {
            args: Prisma.SharingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SharingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharingsPayload>
          }
          findMany: {
            args: Prisma.SharingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharingsPayload>[]
          }
          create: {
            args: Prisma.SharingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharingsPayload>
          }
          createMany: {
            args: Prisma.SharingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SharingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharingsPayload>[]
          }
          delete: {
            args: Prisma.SharingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharingsPayload>
          }
          update: {
            args: Prisma.SharingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharingsPayload>
          }
          deleteMany: {
            args: Prisma.SharingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SharingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SharingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharingsPayload>[]
          }
          upsert: {
            args: Prisma.SharingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharingsPayload>
          }
          aggregate: {
            args: Prisma.SharingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSharings>
          }
          groupBy: {
            args: Prisma.SharingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SharingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SharingsCountArgs<ExtArgs>
            result: $Utils.Optional<SharingsCountAggregateOutputType> | number
          }
        }
      }
      VisualTypes: {
        payload: Prisma.$VisualTypesPayload<ExtArgs>
        fields: Prisma.VisualTypesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisualTypesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualTypesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisualTypesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualTypesPayload>
          }
          findFirst: {
            args: Prisma.VisualTypesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualTypesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisualTypesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualTypesPayload>
          }
          findMany: {
            args: Prisma.VisualTypesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualTypesPayload>[]
          }
          create: {
            args: Prisma.VisualTypesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualTypesPayload>
          }
          createMany: {
            args: Prisma.VisualTypesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VisualTypesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualTypesPayload>[]
          }
          delete: {
            args: Prisma.VisualTypesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualTypesPayload>
          }
          update: {
            args: Prisma.VisualTypesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualTypesPayload>
          }
          deleteMany: {
            args: Prisma.VisualTypesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisualTypesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VisualTypesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualTypesPayload>[]
          }
          upsert: {
            args: Prisma.VisualTypesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualTypesPayload>
          }
          aggregate: {
            args: Prisma.VisualTypesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisualTypes>
          }
          groupBy: {
            args: Prisma.VisualTypesGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisualTypesGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisualTypesCountArgs<ExtArgs>
            result: $Utils.Optional<VisualTypesCountAggregateOutputType> | number
          }
        }
      }
      SoundTypes: {
        payload: Prisma.$SoundTypesPayload<ExtArgs>
        fields: Prisma.SoundTypesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SoundTypesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoundTypesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SoundTypesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoundTypesPayload>
          }
          findFirst: {
            args: Prisma.SoundTypesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoundTypesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SoundTypesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoundTypesPayload>
          }
          findMany: {
            args: Prisma.SoundTypesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoundTypesPayload>[]
          }
          create: {
            args: Prisma.SoundTypesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoundTypesPayload>
          }
          createMany: {
            args: Prisma.SoundTypesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SoundTypesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoundTypesPayload>[]
          }
          delete: {
            args: Prisma.SoundTypesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoundTypesPayload>
          }
          update: {
            args: Prisma.SoundTypesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoundTypesPayload>
          }
          deleteMany: {
            args: Prisma.SoundTypesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SoundTypesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SoundTypesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoundTypesPayload>[]
          }
          upsert: {
            args: Prisma.SoundTypesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SoundTypesPayload>
          }
          aggregate: {
            args: Prisma.SoundTypesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSoundTypes>
          }
          groupBy: {
            args: Prisma.SoundTypesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SoundTypesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SoundTypesCountArgs<ExtArgs>
            result: $Utils.Optional<SoundTypesCountAggregateOutputType> | number
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
    verificationCodes?: VerificationCodesOmit
    medications?: MedicationsOmit
    notifications?: NotificationsOmit
    annotations?: AnnotationsOmit
    sharings?: SharingsOmit
    visualTypes?: VisualTypesOmit
    soundTypes?: SoundTypesOmit
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
    verificationCodes: number
    medications: number
    patientSharings: number
    caretakerSharings: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verificationCodes?: boolean | UsersCountOutputTypeCountVerificationCodesArgs
    medications?: boolean | UsersCountOutputTypeCountMedicationsArgs
    patientSharings?: boolean | UsersCountOutputTypeCountPatientSharingsArgs
    caretakerSharings?: boolean | UsersCountOutputTypeCountCaretakerSharingsArgs
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
  export type UsersCountOutputTypeCountVerificationCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationCodesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMedicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPatientSharingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharingsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCaretakerSharingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharingsWhereInput
  }


  /**
   * Count Type MedicationsCountOutputType
   */

  export type MedicationsCountOutputType = {
    notifications: number
    annotations: number
  }

  export type MedicationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | MedicationsCountOutputTypeCountNotificationsArgs
    annotations?: boolean | MedicationsCountOutputTypeCountAnnotationsArgs
  }

  // Custom InputTypes
  /**
   * MedicationsCountOutputType without action
   */
  export type MedicationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationsCountOutputType
     */
    select?: MedicationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicationsCountOutputType without action
   */
  export type MedicationsCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
  }

  /**
   * MedicationsCountOutputType without action
   */
  export type MedicationsCountOutputTypeCountAnnotationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnotationsWhereInput
  }


  /**
   * Count Type VisualTypesCountOutputType
   */

  export type VisualTypesCountOutputType = {
    medications: number
  }

  export type VisualTypesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medications?: boolean | VisualTypesCountOutputTypeCountMedicationsArgs
  }

  // Custom InputTypes
  /**
   * VisualTypesCountOutputType without action
   */
  export type VisualTypesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualTypesCountOutputType
     */
    select?: VisualTypesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VisualTypesCountOutputType without action
   */
  export type VisualTypesCountOutputTypeCountMedicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationsWhereInput
  }


  /**
   * Count Type SoundTypesCountOutputType
   */

  export type SoundTypesCountOutputType = {
    medications: number
  }

  export type SoundTypesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medications?: boolean | SoundTypesCountOutputTypeCountMedicationsArgs
  }

  // Custom InputTypes
  /**
   * SoundTypesCountOutputType without action
   */
  export type SoundTypesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoundTypesCountOutputType
     */
    select?: SoundTypesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SoundTypesCountOutputType without action
   */
  export type SoundTypesCountOutputTypeCountMedicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationsWhereInput
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
    userId: string | null
    fullName: string | null
    email: string | null
    phone: string | null
    hash: string | null
    image: string | null
    acceptedTosAt: Date | null
    accountConfirmedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    userId: string | null
    fullName: string | null
    email: string | null
    phone: string | null
    hash: string | null
    image: string | null
    acceptedTosAt: Date | null
    accountConfirmedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    userId: number
    fullName: number
    email: number
    phone: number
    hash: number
    image: number
    acceptedTosAt: number
    accountConfirmedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    userId?: true
    fullName?: true
    email?: true
    phone?: true
    hash?: true
    image?: true
    acceptedTosAt?: true
    accountConfirmedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    userId?: true
    fullName?: true
    email?: true
    phone?: true
    hash?: true
    image?: true
    acceptedTosAt?: true
    accountConfirmedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    userId?: true
    fullName?: true
    email?: true
    phone?: true
    hash?: true
    image?: true
    acceptedTosAt?: true
    accountConfirmedAt?: true
    createdAt?: true
    updatedAt?: true
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
    userId: string
    fullName: string
    email: string
    phone: string
    hash: string
    image: string | null
    acceptedTosAt: Date
    accountConfirmedAt: Date | null
    createdAt: Date
    updatedAt: Date
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
    userId?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    hash?: boolean
    image?: boolean
    acceptedTosAt?: boolean
    accountConfirmedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    verificationCodes?: boolean | Users$verificationCodesArgs<ExtArgs>
    medications?: boolean | Users$medicationsArgs<ExtArgs>
    patientSharings?: boolean | Users$patientSharingsArgs<ExtArgs>
    caretakerSharings?: boolean | Users$caretakerSharingsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    hash?: boolean
    image?: boolean
    acceptedTosAt?: boolean
    accountConfirmedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    hash?: boolean
    image?: boolean
    acceptedTosAt?: boolean
    accountConfirmedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    userId?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    hash?: boolean
    image?: boolean
    acceptedTosAt?: boolean
    accountConfirmedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "fullName" | "email" | "phone" | "hash" | "image" | "acceptedTosAt" | "accountConfirmedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verificationCodes?: boolean | Users$verificationCodesArgs<ExtArgs>
    medications?: boolean | Users$medicationsArgs<ExtArgs>
    patientSharings?: boolean | Users$patientSharingsArgs<ExtArgs>
    caretakerSharings?: boolean | Users$caretakerSharingsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      verificationCodes: Prisma.$VerificationCodesPayload<ExtArgs>[]
      medications: Prisma.$MedicationsPayload<ExtArgs>[]
      patientSharings: Prisma.$SharingsPayload<ExtArgs>[]
      caretakerSharings: Prisma.$SharingsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      fullName: string
      email: string
      phone: string
      hash: string
      image: string | null
      acceptedTosAt: Date
      accountConfirmedAt: Date | null
      createdAt: Date
      updatedAt: Date
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
     * // Only select the `userId`
     * const usersWithUserIdOnly = await prisma.users.findMany({ select: { userId: true } })
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
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userId`
     * const usersWithUserIdOnly = await prisma.users.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userId`
     * const usersWithUserIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    verificationCodes<T extends Users$verificationCodesArgs<ExtArgs> = {}>(args?: Subset<T, Users$verificationCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    medications<T extends Users$medicationsArgs<ExtArgs> = {}>(args?: Subset<T, Users$medicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    patientSharings<T extends Users$patientSharingsArgs<ExtArgs> = {}>(args?: Subset<T, Users$patientSharingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    caretakerSharings<T extends Users$caretakerSharingsArgs<ExtArgs> = {}>(args?: Subset<T, Users$caretakerSharingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly userId: FieldRef<"Users", 'String'>
    readonly fullName: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly phone: FieldRef<"Users", 'String'>
    readonly hash: FieldRef<"Users", 'String'>
    readonly image: FieldRef<"Users", 'String'>
    readonly acceptedTosAt: FieldRef<"Users", 'DateTime'>
    readonly accountConfirmedAt: FieldRef<"Users", 'DateTime'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
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
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
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
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
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
   * Users.verificationCodes
   */
  export type Users$verificationCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodesInclude<ExtArgs> | null
    where?: VerificationCodesWhereInput
    orderBy?: VerificationCodesOrderByWithRelationInput | VerificationCodesOrderByWithRelationInput[]
    cursor?: VerificationCodesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VerificationCodesScalarFieldEnum | VerificationCodesScalarFieldEnum[]
  }

  /**
   * Users.medications
   */
  export type Users$medicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medications
     */
    select?: MedicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medications
     */
    omit?: MedicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationsInclude<ExtArgs> | null
    where?: MedicationsWhereInput
    orderBy?: MedicationsOrderByWithRelationInput | MedicationsOrderByWithRelationInput[]
    cursor?: MedicationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicationsScalarFieldEnum | MedicationsScalarFieldEnum[]
  }

  /**
   * Users.patientSharings
   */
  export type Users$patientSharingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sharings
     */
    select?: SharingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sharings
     */
    omit?: SharingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharingsInclude<ExtArgs> | null
    where?: SharingsWhereInput
    orderBy?: SharingsOrderByWithRelationInput | SharingsOrderByWithRelationInput[]
    cursor?: SharingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SharingsScalarFieldEnum | SharingsScalarFieldEnum[]
  }

  /**
   * Users.caretakerSharings
   */
  export type Users$caretakerSharingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sharings
     */
    select?: SharingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sharings
     */
    omit?: SharingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharingsInclude<ExtArgs> | null
    where?: SharingsWhereInput
    orderBy?: SharingsOrderByWithRelationInput | SharingsOrderByWithRelationInput[]
    cursor?: SharingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SharingsScalarFieldEnum | SharingsScalarFieldEnum[]
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
   * Model VerificationCodes
   */

  export type AggregateVerificationCodes = {
    _count: VerificationCodesCountAggregateOutputType | null
    _min: VerificationCodesMinAggregateOutputType | null
    _max: VerificationCodesMaxAggregateOutputType | null
  }

  export type VerificationCodesMinAggregateOutputType = {
    codeId: string | null
    userId: string | null
    value: string | null
    codeType: string | null
    confirmedAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCodesMaxAggregateOutputType = {
    codeId: string | null
    userId: string | null
    value: string | null
    codeType: string | null
    confirmedAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCodesCountAggregateOutputType = {
    codeId: number
    userId: number
    value: number
    codeType: number
    confirmedAt: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationCodesMinAggregateInputType = {
    codeId?: true
    userId?: true
    value?: true
    codeType?: true
    confirmedAt?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCodesMaxAggregateInputType = {
    codeId?: true
    userId?: true
    value?: true
    codeType?: true
    confirmedAt?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCodesCountAggregateInputType = {
    codeId?: true
    userId?: true
    value?: true
    codeType?: true
    confirmedAt?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationCodesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationCodes to aggregate.
     */
    where?: VerificationCodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodesOrderByWithRelationInput | VerificationCodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationCodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationCodes
    **/
    _count?: true | VerificationCodesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationCodesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationCodesMaxAggregateInputType
  }

  export type GetVerificationCodesAggregateType<T extends VerificationCodesAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationCodes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationCodes[P]>
      : GetScalarType<T[P], AggregateVerificationCodes[P]>
  }




  export type VerificationCodesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationCodesWhereInput
    orderBy?: VerificationCodesOrderByWithAggregationInput | VerificationCodesOrderByWithAggregationInput[]
    by: VerificationCodesScalarFieldEnum[] | VerificationCodesScalarFieldEnum
    having?: VerificationCodesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCodesCountAggregateInputType | true
    _min?: VerificationCodesMinAggregateInputType
    _max?: VerificationCodesMaxAggregateInputType
  }

  export type VerificationCodesGroupByOutputType = {
    codeId: string
    userId: string
    value: string
    codeType: string
    confirmedAt: Date | null
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationCodesCountAggregateOutputType | null
    _min: VerificationCodesMinAggregateOutputType | null
    _max: VerificationCodesMaxAggregateOutputType | null
  }

  type GetVerificationCodesGroupByPayload<T extends VerificationCodesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationCodesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationCodesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationCodesGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationCodesGroupByOutputType[P]>
        }
      >
    >


  export type VerificationCodesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codeId?: boolean
    userId?: boolean
    value?: boolean
    codeType?: boolean
    confirmedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationCodes"]>

  export type VerificationCodesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codeId?: boolean
    userId?: boolean
    value?: boolean
    codeType?: boolean
    confirmedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationCodes"]>

  export type VerificationCodesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    codeId?: boolean
    userId?: boolean
    value?: boolean
    codeType?: boolean
    confirmedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationCodes"]>

  export type VerificationCodesSelectScalar = {
    codeId?: boolean
    userId?: boolean
    value?: boolean
    codeType?: boolean
    confirmedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationCodesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"codeId" | "userId" | "value" | "codeType" | "confirmedAt" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verificationCodes"]>
  export type VerificationCodesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type VerificationCodesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type VerificationCodesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $VerificationCodesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationCodes"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      codeId: string
      userId: string
      value: string
      codeType: string
      confirmedAt: Date | null
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verificationCodes"]>
    composites: {}
  }

  type VerificationCodesGetPayload<S extends boolean | null | undefined | VerificationCodesDefaultArgs> = $Result.GetResult<Prisma.$VerificationCodesPayload, S>

  type VerificationCodesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationCodesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCodesCountAggregateInputType | true
    }

  export interface VerificationCodesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationCodes'], meta: { name: 'VerificationCodes' } }
    /**
     * Find zero or one VerificationCodes that matches the filter.
     * @param {VerificationCodesFindUniqueArgs} args - Arguments to find a VerificationCodes
     * @example
     * // Get one VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationCodesFindUniqueArgs>(args: SelectSubset<T, VerificationCodesFindUniqueArgs<ExtArgs>>): Prisma__VerificationCodesClient<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationCodes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationCodesFindUniqueOrThrowArgs} args - Arguments to find a VerificationCodes
     * @example
     * // Get one VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationCodesFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationCodesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationCodesClient<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodesFindFirstArgs} args - Arguments to find a VerificationCodes
     * @example
     * // Get one VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationCodesFindFirstArgs>(args?: SelectSubset<T, VerificationCodesFindFirstArgs<ExtArgs>>): Prisma__VerificationCodesClient<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationCodes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodesFindFirstOrThrowArgs} args - Arguments to find a VerificationCodes
     * @example
     * // Get one VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationCodesFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationCodesFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationCodesClient<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.findMany()
     * 
     * // Get first 10 VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.findMany({ take: 10 })
     * 
     * // Only select the `codeId`
     * const verificationCodesWithCodeIdOnly = await prisma.verificationCodes.findMany({ select: { codeId: true } })
     * 
     */
    findMany<T extends VerificationCodesFindManyArgs>(args?: SelectSubset<T, VerificationCodesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationCodes.
     * @param {VerificationCodesCreateArgs} args - Arguments to create a VerificationCodes.
     * @example
     * // Create one VerificationCodes
     * const VerificationCodes = await prisma.verificationCodes.create({
     *   data: {
     *     // ... data to create a VerificationCodes
     *   }
     * })
     * 
     */
    create<T extends VerificationCodesCreateArgs>(args: SelectSubset<T, VerificationCodesCreateArgs<ExtArgs>>): Prisma__VerificationCodesClient<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationCodes.
     * @param {VerificationCodesCreateManyArgs} args - Arguments to create many VerificationCodes.
     * @example
     * // Create many VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCodesCreateManyArgs>(args?: SelectSubset<T, VerificationCodesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationCodes and returns the data saved in the database.
     * @param {VerificationCodesCreateManyAndReturnArgs} args - Arguments to create many VerificationCodes.
     * @example
     * // Create many VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationCodes and only return the `codeId`
     * const verificationCodesWithCodeIdOnly = await prisma.verificationCodes.createManyAndReturn({
     *   select: { codeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCodesCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCodesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationCodes.
     * @param {VerificationCodesDeleteArgs} args - Arguments to delete one VerificationCodes.
     * @example
     * // Delete one VerificationCodes
     * const VerificationCodes = await prisma.verificationCodes.delete({
     *   where: {
     *     // ... filter to delete one VerificationCodes
     *   }
     * })
     * 
     */
    delete<T extends VerificationCodesDeleteArgs>(args: SelectSubset<T, VerificationCodesDeleteArgs<ExtArgs>>): Prisma__VerificationCodesClient<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationCodes.
     * @param {VerificationCodesUpdateArgs} args - Arguments to update one VerificationCodes.
     * @example
     * // Update one VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationCodesUpdateArgs>(args: SelectSubset<T, VerificationCodesUpdateArgs<ExtArgs>>): Prisma__VerificationCodesClient<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationCodes.
     * @param {VerificationCodesDeleteManyArgs} args - Arguments to filter VerificationCodes to delete.
     * @example
     * // Delete a few VerificationCodes
     * const { count } = await prisma.verificationCodes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationCodesDeleteManyArgs>(args?: SelectSubset<T, VerificationCodesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationCodesUpdateManyArgs>(args: SelectSubset<T, VerificationCodesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationCodes and returns the data updated in the database.
     * @param {VerificationCodesUpdateManyAndReturnArgs} args - Arguments to update many VerificationCodes.
     * @example
     * // Update many VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationCodes and only return the `codeId`
     * const verificationCodesWithCodeIdOnly = await prisma.verificationCodes.updateManyAndReturn({
     *   select: { codeId: true },
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
    updateManyAndReturn<T extends VerificationCodesUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationCodesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationCodes.
     * @param {VerificationCodesUpsertArgs} args - Arguments to update or create a VerificationCodes.
     * @example
     * // Update or create a VerificationCodes
     * const verificationCodes = await prisma.verificationCodes.upsert({
     *   create: {
     *     // ... data to create a VerificationCodes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationCodes we want to update
     *   }
     * })
     */
    upsert<T extends VerificationCodesUpsertArgs>(args: SelectSubset<T, VerificationCodesUpsertArgs<ExtArgs>>): Prisma__VerificationCodesClient<$Result.GetResult<Prisma.$VerificationCodesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodesCountArgs} args - Arguments to filter VerificationCodes to count.
     * @example
     * // Count the number of VerificationCodes
     * const count = await prisma.verificationCodes.count({
     *   where: {
     *     // ... the filter for the VerificationCodes we want to count
     *   }
     * })
    **/
    count<T extends VerificationCodesCountArgs>(
      args?: Subset<T, VerificationCodesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCodesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationCodesAggregateArgs>(args: Subset<T, VerificationCodesAggregateArgs>): Prisma.PrismaPromise<GetVerificationCodesAggregateType<T>>

    /**
     * Group by VerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodesGroupByArgs} args - Group by arguments.
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
      T extends VerificationCodesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationCodesGroupByArgs['orderBy'] }
        : { orderBy?: VerificationCodesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationCodesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationCodesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationCodes model
   */
  readonly fields: VerificationCodesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationCodes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationCodesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the VerificationCodes model
   */
  interface VerificationCodesFieldRefs {
    readonly codeId: FieldRef<"VerificationCodes", 'String'>
    readonly userId: FieldRef<"VerificationCodes", 'String'>
    readonly value: FieldRef<"VerificationCodes", 'String'>
    readonly codeType: FieldRef<"VerificationCodes", 'String'>
    readonly confirmedAt: FieldRef<"VerificationCodes", 'DateTime'>
    readonly expiresAt: FieldRef<"VerificationCodes", 'DateTime'>
    readonly createdAt: FieldRef<"VerificationCodes", 'DateTime'>
    readonly updatedAt: FieldRef<"VerificationCodes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationCodes findUnique
   */
  export type VerificationCodesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodesInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCodes to fetch.
     */
    where: VerificationCodesWhereUniqueInput
  }

  /**
   * VerificationCodes findUniqueOrThrow
   */
  export type VerificationCodesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodesInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCodes to fetch.
     */
    where: VerificationCodesWhereUniqueInput
  }

  /**
   * VerificationCodes findFirst
   */
  export type VerificationCodesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodesInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCodes to fetch.
     */
    where?: VerificationCodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodesOrderByWithRelationInput | VerificationCodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationCodes.
     */
    cursor?: VerificationCodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationCodes.
     */
    distinct?: VerificationCodesScalarFieldEnum | VerificationCodesScalarFieldEnum[]
  }

  /**
   * VerificationCodes findFirstOrThrow
   */
  export type VerificationCodesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodesInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCodes to fetch.
     */
    where?: VerificationCodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodesOrderByWithRelationInput | VerificationCodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationCodes.
     */
    cursor?: VerificationCodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationCodes.
     */
    distinct?: VerificationCodesScalarFieldEnum | VerificationCodesScalarFieldEnum[]
  }

  /**
   * VerificationCodes findMany
   */
  export type VerificationCodesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodesInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCodes to fetch.
     */
    where?: VerificationCodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodesOrderByWithRelationInput | VerificationCodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationCodes.
     */
    cursor?: VerificationCodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    distinct?: VerificationCodesScalarFieldEnum | VerificationCodesScalarFieldEnum[]
  }

  /**
   * VerificationCodes create
   */
  export type VerificationCodesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodesInclude<ExtArgs> | null
    /**
     * The data needed to create a VerificationCodes.
     */
    data: XOR<VerificationCodesCreateInput, VerificationCodesUncheckedCreateInput>
  }

  /**
   * VerificationCodes createMany
   */
  export type VerificationCodesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationCodes.
     */
    data: VerificationCodesCreateManyInput | VerificationCodesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationCodes createManyAndReturn
   */
  export type VerificationCodesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationCodes.
     */
    data: VerificationCodesCreateManyInput | VerificationCodesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VerificationCodes update
   */
  export type VerificationCodesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodesInclude<ExtArgs> | null
    /**
     * The data needed to update a VerificationCodes.
     */
    data: XOR<VerificationCodesUpdateInput, VerificationCodesUncheckedUpdateInput>
    /**
     * Choose, which VerificationCodes to update.
     */
    where: VerificationCodesWhereUniqueInput
  }

  /**
   * VerificationCodes updateMany
   */
  export type VerificationCodesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationCodes.
     */
    data: XOR<VerificationCodesUpdateManyMutationInput, VerificationCodesUncheckedUpdateManyInput>
    /**
     * Filter which VerificationCodes to update
     */
    where?: VerificationCodesWhereInput
    /**
     * Limit how many VerificationCodes to update.
     */
    limit?: number
  }

  /**
   * VerificationCodes updateManyAndReturn
   */
  export type VerificationCodesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * The data used to update VerificationCodes.
     */
    data: XOR<VerificationCodesUpdateManyMutationInput, VerificationCodesUncheckedUpdateManyInput>
    /**
     * Filter which VerificationCodes to update
     */
    where?: VerificationCodesWhereInput
    /**
     * Limit how many VerificationCodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VerificationCodes upsert
   */
  export type VerificationCodesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodesInclude<ExtArgs> | null
    /**
     * The filter to search for the VerificationCodes to update in case it exists.
     */
    where: VerificationCodesWhereUniqueInput
    /**
     * In case the VerificationCodes found by the `where` argument doesn't exist, create a new VerificationCodes with this data.
     */
    create: XOR<VerificationCodesCreateInput, VerificationCodesUncheckedCreateInput>
    /**
     * In case the VerificationCodes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationCodesUpdateInput, VerificationCodesUncheckedUpdateInput>
  }

  /**
   * VerificationCodes delete
   */
  export type VerificationCodesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodesInclude<ExtArgs> | null
    /**
     * Filter which VerificationCodes to delete.
     */
    where: VerificationCodesWhereUniqueInput
  }

  /**
   * VerificationCodes deleteMany
   */
  export type VerificationCodesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationCodes to delete
     */
    where?: VerificationCodesWhereInput
    /**
     * Limit how many VerificationCodes to delete.
     */
    limit?: number
  }

  /**
   * VerificationCodes without action
   */
  export type VerificationCodesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCodes
     */
    select?: VerificationCodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCodes
     */
    omit?: VerificationCodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodesInclude<ExtArgs> | null
  }


  /**
   * Model Medications
   */

  export type AggregateMedications = {
    _count: MedicationsCountAggregateOutputType | null
    _avg: MedicationsAvgAggregateOutputType | null
    _sum: MedicationsSumAggregateOutputType | null
    _min: MedicationsMinAggregateOutputType | null
    _max: MedicationsMaxAggregateOutputType | null
  }

  export type MedicationsAvgAggregateOutputType = {
    alertPeriodInHours: number | null
  }

  export type MedicationsSumAggregateOutputType = {
    alertPeriodInHours: number | null
  }

  export type MedicationsMinAggregateOutputType = {
    medicationId: string | null
    userId: string | null
    name: string | null
    dose: string | null
    description: string | null
    visualTypeId: string | null
    soundTypeId: string | null
    alertPeriodInHours: number | null
    endTreatmentAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicationsMaxAggregateOutputType = {
    medicationId: string | null
    userId: string | null
    name: string | null
    dose: string | null
    description: string | null
    visualTypeId: string | null
    soundTypeId: string | null
    alertPeriodInHours: number | null
    endTreatmentAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicationsCountAggregateOutputType = {
    medicationId: number
    userId: number
    name: number
    dose: number
    description: number
    visualTypeId: number
    soundTypeId: number
    alertPeriodInHours: number
    endTreatmentAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MedicationsAvgAggregateInputType = {
    alertPeriodInHours?: true
  }

  export type MedicationsSumAggregateInputType = {
    alertPeriodInHours?: true
  }

  export type MedicationsMinAggregateInputType = {
    medicationId?: true
    userId?: true
    name?: true
    dose?: true
    description?: true
    visualTypeId?: true
    soundTypeId?: true
    alertPeriodInHours?: true
    endTreatmentAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicationsMaxAggregateInputType = {
    medicationId?: true
    userId?: true
    name?: true
    dose?: true
    description?: true
    visualTypeId?: true
    soundTypeId?: true
    alertPeriodInHours?: true
    endTreatmentAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicationsCountAggregateInputType = {
    medicationId?: true
    userId?: true
    name?: true
    dose?: true
    description?: true
    visualTypeId?: true
    soundTypeId?: true
    alertPeriodInHours?: true
    endTreatmentAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MedicationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medications to aggregate.
     */
    where?: MedicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationsOrderByWithRelationInput | MedicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medications
    **/
    _count?: true | MedicationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicationsMaxAggregateInputType
  }

  export type GetMedicationsAggregateType<T extends MedicationsAggregateArgs> = {
        [P in keyof T & keyof AggregateMedications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedications[P]>
      : GetScalarType<T[P], AggregateMedications[P]>
  }




  export type MedicationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationsWhereInput
    orderBy?: MedicationsOrderByWithAggregationInput | MedicationsOrderByWithAggregationInput[]
    by: MedicationsScalarFieldEnum[] | MedicationsScalarFieldEnum
    having?: MedicationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicationsCountAggregateInputType | true
    _avg?: MedicationsAvgAggregateInputType
    _sum?: MedicationsSumAggregateInputType
    _min?: MedicationsMinAggregateInputType
    _max?: MedicationsMaxAggregateInputType
  }

  export type MedicationsGroupByOutputType = {
    medicationId: string
    userId: string
    name: string
    dose: string | null
    description: string | null
    visualTypeId: string
    soundTypeId: string
    alertPeriodInHours: number
    endTreatmentAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: MedicationsCountAggregateOutputType | null
    _avg: MedicationsAvgAggregateOutputType | null
    _sum: MedicationsSumAggregateOutputType | null
    _min: MedicationsMinAggregateOutputType | null
    _max: MedicationsMaxAggregateOutputType | null
  }

  type GetMedicationsGroupByPayload<T extends MedicationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicationsGroupByOutputType[P]>
            : GetScalarType<T[P], MedicationsGroupByOutputType[P]>
        }
      >
    >


  export type MedicationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    medicationId?: boolean
    userId?: boolean
    name?: boolean
    dose?: boolean
    description?: boolean
    visualTypeId?: boolean
    soundTypeId?: boolean
    alertPeriodInHours?: boolean
    endTreatmentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    visualType?: boolean | VisualTypesDefaultArgs<ExtArgs>
    soundType?: boolean | SoundTypesDefaultArgs<ExtArgs>
    notifications?: boolean | Medications$notificationsArgs<ExtArgs>
    annotations?: boolean | Medications$annotationsArgs<ExtArgs>
    _count?: boolean | MedicationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medications"]>

  export type MedicationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    medicationId?: boolean
    userId?: boolean
    name?: boolean
    dose?: boolean
    description?: boolean
    visualTypeId?: boolean
    soundTypeId?: boolean
    alertPeriodInHours?: boolean
    endTreatmentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    visualType?: boolean | VisualTypesDefaultArgs<ExtArgs>
    soundType?: boolean | SoundTypesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medications"]>

  export type MedicationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    medicationId?: boolean
    userId?: boolean
    name?: boolean
    dose?: boolean
    description?: boolean
    visualTypeId?: boolean
    soundTypeId?: boolean
    alertPeriodInHours?: boolean
    endTreatmentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    visualType?: boolean | VisualTypesDefaultArgs<ExtArgs>
    soundType?: boolean | SoundTypesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medications"]>

  export type MedicationsSelectScalar = {
    medicationId?: boolean
    userId?: boolean
    name?: boolean
    dose?: boolean
    description?: boolean
    visualTypeId?: boolean
    soundTypeId?: boolean
    alertPeriodInHours?: boolean
    endTreatmentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MedicationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"medicationId" | "userId" | "name" | "dose" | "description" | "visualTypeId" | "soundTypeId" | "alertPeriodInHours" | "endTreatmentAt" | "createdAt" | "updatedAt", ExtArgs["result"]["medications"]>
  export type MedicationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    visualType?: boolean | VisualTypesDefaultArgs<ExtArgs>
    soundType?: boolean | SoundTypesDefaultArgs<ExtArgs>
    notifications?: boolean | Medications$notificationsArgs<ExtArgs>
    annotations?: boolean | Medications$annotationsArgs<ExtArgs>
    _count?: boolean | MedicationsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    visualType?: boolean | VisualTypesDefaultArgs<ExtArgs>
    soundType?: boolean | SoundTypesDefaultArgs<ExtArgs>
  }
  export type MedicationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    visualType?: boolean | VisualTypesDefaultArgs<ExtArgs>
    soundType?: boolean | SoundTypesDefaultArgs<ExtArgs>
  }

  export type $MedicationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medications"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      visualType: Prisma.$VisualTypesPayload<ExtArgs>
      soundType: Prisma.$SoundTypesPayload<ExtArgs>
      notifications: Prisma.$NotificationsPayload<ExtArgs>[]
      annotations: Prisma.$AnnotationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      medicationId: string
      userId: string
      name: string
      dose: string | null
      description: string | null
      visualTypeId: string
      soundTypeId: string
      alertPeriodInHours: number
      endTreatmentAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["medications"]>
    composites: {}
  }

  type MedicationsGetPayload<S extends boolean | null | undefined | MedicationsDefaultArgs> = $Result.GetResult<Prisma.$MedicationsPayload, S>

  type MedicationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicationsCountAggregateInputType | true
    }

  export interface MedicationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medications'], meta: { name: 'Medications' } }
    /**
     * Find zero or one Medications that matches the filter.
     * @param {MedicationsFindUniqueArgs} args - Arguments to find a Medications
     * @example
     * // Get one Medications
     * const medications = await prisma.medications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicationsFindUniqueArgs>(args: SelectSubset<T, MedicationsFindUniqueArgs<ExtArgs>>): Prisma__MedicationsClient<$Result.GetResult<Prisma.$MedicationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicationsFindUniqueOrThrowArgs} args - Arguments to find a Medications
     * @example
     * // Get one Medications
     * const medications = await prisma.medications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicationsFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicationsClient<$Result.GetResult<Prisma.$MedicationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationsFindFirstArgs} args - Arguments to find a Medications
     * @example
     * // Get one Medications
     * const medications = await prisma.medications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicationsFindFirstArgs>(args?: SelectSubset<T, MedicationsFindFirstArgs<ExtArgs>>): Prisma__MedicationsClient<$Result.GetResult<Prisma.$MedicationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationsFindFirstOrThrowArgs} args - Arguments to find a Medications
     * @example
     * // Get one Medications
     * const medications = await prisma.medications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicationsFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicationsClient<$Result.GetResult<Prisma.$MedicationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medications
     * const medications = await prisma.medications.findMany()
     * 
     * // Get first 10 Medications
     * const medications = await prisma.medications.findMany({ take: 10 })
     * 
     * // Only select the `medicationId`
     * const medicationsWithMedicationIdOnly = await prisma.medications.findMany({ select: { medicationId: true } })
     * 
     */
    findMany<T extends MedicationsFindManyArgs>(args?: SelectSubset<T, MedicationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medications.
     * @param {MedicationsCreateArgs} args - Arguments to create a Medications.
     * @example
     * // Create one Medications
     * const Medications = await prisma.medications.create({
     *   data: {
     *     // ... data to create a Medications
     *   }
     * })
     * 
     */
    create<T extends MedicationsCreateArgs>(args: SelectSubset<T, MedicationsCreateArgs<ExtArgs>>): Prisma__MedicationsClient<$Result.GetResult<Prisma.$MedicationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medications.
     * @param {MedicationsCreateManyArgs} args - Arguments to create many Medications.
     * @example
     * // Create many Medications
     * const medications = await prisma.medications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicationsCreateManyArgs>(args?: SelectSubset<T, MedicationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medications and returns the data saved in the database.
     * @param {MedicationsCreateManyAndReturnArgs} args - Arguments to create many Medications.
     * @example
     * // Create many Medications
     * const medications = await prisma.medications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medications and only return the `medicationId`
     * const medicationsWithMedicationIdOnly = await prisma.medications.createManyAndReturn({
     *   select: { medicationId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicationsCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medications.
     * @param {MedicationsDeleteArgs} args - Arguments to delete one Medications.
     * @example
     * // Delete one Medications
     * const Medications = await prisma.medications.delete({
     *   where: {
     *     // ... filter to delete one Medications
     *   }
     * })
     * 
     */
    delete<T extends MedicationsDeleteArgs>(args: SelectSubset<T, MedicationsDeleteArgs<ExtArgs>>): Prisma__MedicationsClient<$Result.GetResult<Prisma.$MedicationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medications.
     * @param {MedicationsUpdateArgs} args - Arguments to update one Medications.
     * @example
     * // Update one Medications
     * const medications = await prisma.medications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicationsUpdateArgs>(args: SelectSubset<T, MedicationsUpdateArgs<ExtArgs>>): Prisma__MedicationsClient<$Result.GetResult<Prisma.$MedicationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medications.
     * @param {MedicationsDeleteManyArgs} args - Arguments to filter Medications to delete.
     * @example
     * // Delete a few Medications
     * const { count } = await prisma.medications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicationsDeleteManyArgs>(args?: SelectSubset<T, MedicationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medications
     * const medications = await prisma.medications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicationsUpdateManyArgs>(args: SelectSubset<T, MedicationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medications and returns the data updated in the database.
     * @param {MedicationsUpdateManyAndReturnArgs} args - Arguments to update many Medications.
     * @example
     * // Update many Medications
     * const medications = await prisma.medications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medications and only return the `medicationId`
     * const medicationsWithMedicationIdOnly = await prisma.medications.updateManyAndReturn({
     *   select: { medicationId: true },
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
    updateManyAndReturn<T extends MedicationsUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medications.
     * @param {MedicationsUpsertArgs} args - Arguments to update or create a Medications.
     * @example
     * // Update or create a Medications
     * const medications = await prisma.medications.upsert({
     *   create: {
     *     // ... data to create a Medications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medications we want to update
     *   }
     * })
     */
    upsert<T extends MedicationsUpsertArgs>(args: SelectSubset<T, MedicationsUpsertArgs<ExtArgs>>): Prisma__MedicationsClient<$Result.GetResult<Prisma.$MedicationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationsCountArgs} args - Arguments to filter Medications to count.
     * @example
     * // Count the number of Medications
     * const count = await prisma.medications.count({
     *   where: {
     *     // ... the filter for the Medications we want to count
     *   }
     * })
    **/
    count<T extends MedicationsCountArgs>(
      args?: Subset<T, MedicationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicationsAggregateArgs>(args: Subset<T, MedicationsAggregateArgs>): Prisma.PrismaPromise<GetMedicationsAggregateType<T>>

    /**
     * Group by Medications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationsGroupByArgs} args - Group by arguments.
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
      T extends MedicationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicationsGroupByArgs['orderBy'] }
        : { orderBy?: MedicationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medications model
   */
  readonly fields: MedicationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    visualType<T extends VisualTypesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VisualTypesDefaultArgs<ExtArgs>>): Prisma__VisualTypesClient<$Result.GetResult<Prisma.$VisualTypesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    soundType<T extends SoundTypesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SoundTypesDefaultArgs<ExtArgs>>): Prisma__SoundTypesClient<$Result.GetResult<Prisma.$SoundTypesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notifications<T extends Medications$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Medications$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    annotations<T extends Medications$annotationsArgs<ExtArgs> = {}>(args?: Subset<T, Medications$annotationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnotationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Medications model
   */
  interface MedicationsFieldRefs {
    readonly medicationId: FieldRef<"Medications", 'String'>
    readonly userId: FieldRef<"Medications", 'String'>
    readonly name: FieldRef<"Medications", 'String'>
    readonly dose: FieldRef<"Medications", 'String'>
    readonly description: FieldRef<"Medications", 'String'>
    readonly visualTypeId: FieldRef<"Medications", 'String'>
    readonly soundTypeId: FieldRef<"Medications", 'String'>
    readonly alertPeriodInHours: FieldRef<"Medications", 'Int'>
    readonly endTreatmentAt: FieldRef<"Medications", 'DateTime'>
    readonly createdAt: FieldRef<"Medications", 'DateTime'>
    readonly updatedAt: FieldRef<"Medications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Medications findUnique
   */
  export type MedicationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medications
     */
    select?: MedicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medications
     */
    omit?: MedicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationsInclude<ExtArgs> | null
    /**
     * Filter, which Medications to fetch.
     */
    where: MedicationsWhereUniqueInput
  }

  /**
   * Medications findUniqueOrThrow
   */
  export type MedicationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medications
     */
    select?: MedicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medications
     */
    omit?: MedicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationsInclude<ExtArgs> | null
    /**
     * Filter, which Medications to fetch.
     */
    where: MedicationsWhereUniqueInput
  }

  /**
   * Medications findFirst
   */
  export type MedicationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medications
     */
    select?: MedicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medications
     */
    omit?: MedicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationsInclude<ExtArgs> | null
    /**
     * Filter, which Medications to fetch.
     */
    where?: MedicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationsOrderByWithRelationInput | MedicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medications.
     */
    cursor?: MedicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medications.
     */
    distinct?: MedicationsScalarFieldEnum | MedicationsScalarFieldEnum[]
  }

  /**
   * Medications findFirstOrThrow
   */
  export type MedicationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medications
     */
    select?: MedicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medications
     */
    omit?: MedicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationsInclude<ExtArgs> | null
    /**
     * Filter, which Medications to fetch.
     */
    where?: MedicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationsOrderByWithRelationInput | MedicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medications.
     */
    cursor?: MedicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medications.
     */
    distinct?: MedicationsScalarFieldEnum | MedicationsScalarFieldEnum[]
  }

  /**
   * Medications findMany
   */
  export type MedicationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medications
     */
    select?: MedicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medications
     */
    omit?: MedicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationsInclude<ExtArgs> | null
    /**
     * Filter, which Medications to fetch.
     */
    where?: MedicationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationsOrderByWithRelationInput | MedicationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medications.
     */
    cursor?: MedicationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    distinct?: MedicationsScalarFieldEnum | MedicationsScalarFieldEnum[]
  }

  /**
   * Medications create
   */
  export type MedicationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medications
     */
    select?: MedicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medications
     */
    omit?: MedicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Medications.
     */
    data: XOR<MedicationsCreateInput, MedicationsUncheckedCreateInput>
  }

  /**
   * Medications createMany
   */
  export type MedicationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medications.
     */
    data: MedicationsCreateManyInput | MedicationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medications createManyAndReturn
   */
  export type MedicationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medications
     */
    select?: MedicationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medications
     */
    omit?: MedicationsOmit<ExtArgs> | null
    /**
     * The data used to create many Medications.
     */
    data: MedicationsCreateManyInput | MedicationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medications update
   */
  export type MedicationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medications
     */
    select?: MedicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medications
     */
    omit?: MedicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Medications.
     */
    data: XOR<MedicationsUpdateInput, MedicationsUncheckedUpdateInput>
    /**
     * Choose, which Medications to update.
     */
    where: MedicationsWhereUniqueInput
  }

  /**
   * Medications updateMany
   */
  export type MedicationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medications.
     */
    data: XOR<MedicationsUpdateManyMutationInput, MedicationsUncheckedUpdateManyInput>
    /**
     * Filter which Medications to update
     */
    where?: MedicationsWhereInput
    /**
     * Limit how many Medications to update.
     */
    limit?: number
  }

  /**
   * Medications updateManyAndReturn
   */
  export type MedicationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medications
     */
    select?: MedicationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medications
     */
    omit?: MedicationsOmit<ExtArgs> | null
    /**
     * The data used to update Medications.
     */
    data: XOR<MedicationsUpdateManyMutationInput, MedicationsUncheckedUpdateManyInput>
    /**
     * Filter which Medications to update
     */
    where?: MedicationsWhereInput
    /**
     * Limit how many Medications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medications upsert
   */
  export type MedicationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medications
     */
    select?: MedicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medications
     */
    omit?: MedicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Medications to update in case it exists.
     */
    where: MedicationsWhereUniqueInput
    /**
     * In case the Medications found by the `where` argument doesn't exist, create a new Medications with this data.
     */
    create: XOR<MedicationsCreateInput, MedicationsUncheckedCreateInput>
    /**
     * In case the Medications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicationsUpdateInput, MedicationsUncheckedUpdateInput>
  }

  /**
   * Medications delete
   */
  export type MedicationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medications
     */
    select?: MedicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medications
     */
    omit?: MedicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationsInclude<ExtArgs> | null
    /**
     * Filter which Medications to delete.
     */
    where: MedicationsWhereUniqueInput
  }

  /**
   * Medications deleteMany
   */
  export type MedicationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medications to delete
     */
    where?: MedicationsWhereInput
    /**
     * Limit how many Medications to delete.
     */
    limit?: number
  }

  /**
   * Medications.notifications
   */
  export type Medications$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    cursor?: NotificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Medications.annotations
   */
  export type Medications$annotationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotations
     */
    select?: AnnotationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotations
     */
    omit?: AnnotationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationsInclude<ExtArgs> | null
    where?: AnnotationsWhereInput
    orderBy?: AnnotationsOrderByWithRelationInput | AnnotationsOrderByWithRelationInput[]
    cursor?: AnnotationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnotationsScalarFieldEnum | AnnotationsScalarFieldEnum[]
  }

  /**
   * Medications without action
   */
  export type MedicationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medications
     */
    select?: MedicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medications
     */
    omit?: MedicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationsInclude<ExtArgs> | null
  }


  /**
   * Model Notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsAvgAggregateOutputType = {
    soundId: number | null
  }

  export type NotificationsSumAggregateOutputType = {
    soundId: number | null
  }

  export type NotificationsMinAggregateOutputType = {
    notificationId: string | null
    medicationId: string | null
    name: string | null
    alertAt: Date | null
    soundId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationsMaxAggregateOutputType = {
    notificationId: string | null
    medicationId: string | null
    name: string | null
    alertAt: Date | null
    soundId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationsCountAggregateOutputType = {
    notificationId: number
    medicationId: number
    name: number
    alertAt: number
    soundId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationsAvgAggregateInputType = {
    soundId?: true
  }

  export type NotificationsSumAggregateInputType = {
    soundId?: true
  }

  export type NotificationsMinAggregateInputType = {
    notificationId?: true
    medicationId?: true
    name?: true
    alertAt?: true
    soundId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationsMaxAggregateInputType = {
    notificationId?: true
    medicationId?: true
    name?: true
    alertAt?: true
    soundId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationsCountAggregateInputType = {
    notificationId?: true
    medicationId?: true
    name?: true
    alertAt?: true
    soundId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to aggregate.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type NotificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithAggregationInput | NotificationsOrderByWithAggregationInput[]
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum
    having?: NotificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _avg?: NotificationsAvgAggregateInputType
    _sum?: NotificationsSumAggregateInputType
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }

  export type NotificationsGroupByOutputType = {
    notificationId: string
    medicationId: string
    name: string
    alertAt: Date
    soundId: number
    createdAt: Date
    updatedAt: Date
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends NotificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type NotificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notificationId?: boolean
    medicationId?: boolean
    name?: boolean
    alertAt?: boolean
    soundId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medication?: boolean | MedicationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type NotificationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notificationId?: boolean
    medicationId?: boolean
    name?: boolean
    alertAt?: boolean
    soundId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medication?: boolean | MedicationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type NotificationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notificationId?: boolean
    medicationId?: boolean
    name?: boolean
    alertAt?: boolean
    soundId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medication?: boolean | MedicationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type NotificationsSelectScalar = {
    notificationId?: boolean
    medicationId?: boolean
    name?: boolean
    alertAt?: boolean
    soundId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"notificationId" | "medicationId" | "name" | "alertAt" | "soundId" | "createdAt" | "updatedAt", ExtArgs["result"]["notifications"]>
  export type NotificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medication?: boolean | MedicationsDefaultArgs<ExtArgs>
  }
  export type NotificationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medication?: boolean | MedicationsDefaultArgs<ExtArgs>
  }
  export type NotificationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medication?: boolean | MedicationsDefaultArgs<ExtArgs>
  }

  export type $NotificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notifications"
    objects: {
      medication: Prisma.$MedicationsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      notificationId: string
      medicationId: string
      name: string
      alertAt: Date
      soundId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notifications"]>
    composites: {}
  }

  type NotificationsGetPayload<S extends boolean | null | undefined | NotificationsDefaultArgs> = $Result.GetResult<Prisma.$NotificationsPayload, S>

  type NotificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface NotificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notifications'], meta: { name: 'Notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {NotificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationsFindUniqueArgs>(args: SelectSubset<T, NotificationsFindUniqueArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationsFindFirstArgs>(args?: SelectSubset<T, NotificationsFindFirstArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `notificationId`
     * const notificationsWithNotificationIdOnly = await prisma.notifications.findMany({ select: { notificationId: true } })
     * 
     */
    findMany<T extends NotificationsFindManyArgs>(args?: SelectSubset<T, NotificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifications.
     * @param {NotificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
     */
    create<T extends NotificationsCreateArgs>(args: SelectSubset<T, NotificationsCreateArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationsCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationsCreateManyArgs>(args?: SelectSubset<T, NotificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationsCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `notificationId`
     * const notificationsWithNotificationIdOnly = await prisma.notifications.createManyAndReturn({
     *   select: { notificationId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationsCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notifications.
     * @param {NotificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
     */
    delete<T extends NotificationsDeleteArgs>(args: SelectSubset<T, NotificationsDeleteArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifications.
     * @param {NotificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationsUpdateArgs>(args: SelectSubset<T, NotificationsUpdateArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationsDeleteManyArgs>(args?: SelectSubset<T, NotificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationsUpdateManyArgs>(args: SelectSubset<T, NotificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationsUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `notificationId`
     * const notificationsWithNotificationIdOnly = await prisma.notifications.updateManyAndReturn({
     *   select: { notificationId: true },
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
    updateManyAndReturn<T extends NotificationsUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notifications.
     * @param {NotificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     */
    upsert<T extends NotificationsUpsertArgs>(args: SelectSubset<T, NotificationsUpsertArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationsCountArgs>(
      args?: Subset<T, NotificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsGroupByArgs} args - Group by arguments.
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
      T extends NotificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationsGroupByArgs['orderBy'] }
        : { orderBy?: NotificationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notifications model
   */
  readonly fields: NotificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medication<T extends MedicationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicationsDefaultArgs<ExtArgs>>): Prisma__MedicationsClient<$Result.GetResult<Prisma.$MedicationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notifications model
   */
  interface NotificationsFieldRefs {
    readonly notificationId: FieldRef<"Notifications", 'String'>
    readonly medicationId: FieldRef<"Notifications", 'String'>
    readonly name: FieldRef<"Notifications", 'String'>
    readonly alertAt: FieldRef<"Notifications", 'DateTime'>
    readonly soundId: FieldRef<"Notifications", 'Int'>
    readonly createdAt: FieldRef<"Notifications", 'DateTime'>
    readonly updatedAt: FieldRef<"Notifications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notifications findUnique
   */
  export type NotificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications findUniqueOrThrow
   */
  export type NotificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications findFirst
   */
  export type NotificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications findFirstOrThrow
   */
  export type NotificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications findMany
   */
  export type NotificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications create
   */
  export type NotificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Notifications.
     */
    data: XOR<NotificationsCreateInput, NotificationsUncheckedCreateInput>
  }

  /**
   * Notifications createMany
   */
  export type NotificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationsCreateManyInput | NotificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notifications createManyAndReturn
   */
  export type NotificationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationsCreateManyInput | NotificationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notifications update
   */
  export type NotificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Notifications.
     */
    data: XOR<NotificationsUpdateInput, NotificationsUncheckedUpdateInput>
    /**
     * Choose, which Notifications to update.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications updateMany
   */
  export type NotificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notifications updateManyAndReturn
   */
  export type NotificationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notifications upsert
   */
  export type NotificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Notifications to update in case it exists.
     */
    where: NotificationsWhereUniqueInput
    /**
     * In case the Notifications found by the `where` argument doesn't exist, create a new Notifications with this data.
     */
    create: XOR<NotificationsCreateInput, NotificationsUncheckedCreateInput>
    /**
     * In case the Notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationsUpdateInput, NotificationsUncheckedUpdateInput>
  }

  /**
   * Notifications delete
   */
  export type NotificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter which Notifications to delete.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications deleteMany
   */
  export type NotificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notifications without action
   */
  export type NotificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
  }


  /**
   * Model Annotations
   */

  export type AggregateAnnotations = {
    _count: AnnotationsCountAggregateOutputType | null
    _min: AnnotationsMinAggregateOutputType | null
    _max: AnnotationsMaxAggregateOutputType | null
  }

  export type AnnotationsMinAggregateOutputType = {
    annotationId: string | null
    medicationId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnnotationsMaxAggregateOutputType = {
    annotationId: string | null
    medicationId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnnotationsCountAggregateOutputType = {
    annotationId: number
    medicationId: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnnotationsMinAggregateInputType = {
    annotationId?: true
    medicationId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnnotationsMaxAggregateInputType = {
    annotationId?: true
    medicationId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnnotationsCountAggregateInputType = {
    annotationId?: true
    medicationId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnnotationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Annotations to aggregate.
     */
    where?: AnnotationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annotations to fetch.
     */
    orderBy?: AnnotationsOrderByWithRelationInput | AnnotationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnotationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annotations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Annotations
    **/
    _count?: true | AnnotationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnotationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnotationsMaxAggregateInputType
  }

  export type GetAnnotationsAggregateType<T extends AnnotationsAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnotations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnotations[P]>
      : GetScalarType<T[P], AggregateAnnotations[P]>
  }




  export type AnnotationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnotationsWhereInput
    orderBy?: AnnotationsOrderByWithAggregationInput | AnnotationsOrderByWithAggregationInput[]
    by: AnnotationsScalarFieldEnum[] | AnnotationsScalarFieldEnum
    having?: AnnotationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnotationsCountAggregateInputType | true
    _min?: AnnotationsMinAggregateInputType
    _max?: AnnotationsMaxAggregateInputType
  }

  export type AnnotationsGroupByOutputType = {
    annotationId: string
    medicationId: string
    content: string
    createdAt: Date
    updatedAt: Date
    _count: AnnotationsCountAggregateOutputType | null
    _min: AnnotationsMinAggregateOutputType | null
    _max: AnnotationsMaxAggregateOutputType | null
  }

  type GetAnnotationsGroupByPayload<T extends AnnotationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnotationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnotationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnotationsGroupByOutputType[P]>
            : GetScalarType<T[P], AnnotationsGroupByOutputType[P]>
        }
      >
    >


  export type AnnotationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    annotationId?: boolean
    medicationId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medication?: boolean | MedicationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["annotations"]>

  export type AnnotationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    annotationId?: boolean
    medicationId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medication?: boolean | MedicationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["annotations"]>

  export type AnnotationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    annotationId?: boolean
    medicationId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medication?: boolean | MedicationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["annotations"]>

  export type AnnotationsSelectScalar = {
    annotationId?: boolean
    medicationId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnnotationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"annotationId" | "medicationId" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["annotations"]>
  export type AnnotationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medication?: boolean | MedicationsDefaultArgs<ExtArgs>
  }
  export type AnnotationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medication?: boolean | MedicationsDefaultArgs<ExtArgs>
  }
  export type AnnotationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medication?: boolean | MedicationsDefaultArgs<ExtArgs>
  }

  export type $AnnotationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Annotations"
    objects: {
      medication: Prisma.$MedicationsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      annotationId: string
      medicationId: string
      content: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["annotations"]>
    composites: {}
  }

  type AnnotationsGetPayload<S extends boolean | null | undefined | AnnotationsDefaultArgs> = $Result.GetResult<Prisma.$AnnotationsPayload, S>

  type AnnotationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnnotationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnnotationsCountAggregateInputType | true
    }

  export interface AnnotationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Annotations'], meta: { name: 'Annotations' } }
    /**
     * Find zero or one Annotations that matches the filter.
     * @param {AnnotationsFindUniqueArgs} args - Arguments to find a Annotations
     * @example
     * // Get one Annotations
     * const annotations = await prisma.annotations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnotationsFindUniqueArgs>(args: SelectSubset<T, AnnotationsFindUniqueArgs<ExtArgs>>): Prisma__AnnotationsClient<$Result.GetResult<Prisma.$AnnotationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Annotations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnotationsFindUniqueOrThrowArgs} args - Arguments to find a Annotations
     * @example
     * // Get one Annotations
     * const annotations = await prisma.annotations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnotationsFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnotationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnotationsClient<$Result.GetResult<Prisma.$AnnotationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Annotations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnotationsFindFirstArgs} args - Arguments to find a Annotations
     * @example
     * // Get one Annotations
     * const annotations = await prisma.annotations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnotationsFindFirstArgs>(args?: SelectSubset<T, AnnotationsFindFirstArgs<ExtArgs>>): Prisma__AnnotationsClient<$Result.GetResult<Prisma.$AnnotationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Annotations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnotationsFindFirstOrThrowArgs} args - Arguments to find a Annotations
     * @example
     * // Get one Annotations
     * const annotations = await prisma.annotations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnotationsFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnotationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnotationsClient<$Result.GetResult<Prisma.$AnnotationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Annotations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnotationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Annotations
     * const annotations = await prisma.annotations.findMany()
     * 
     * // Get first 10 Annotations
     * const annotations = await prisma.annotations.findMany({ take: 10 })
     * 
     * // Only select the `annotationId`
     * const annotationsWithAnnotationIdOnly = await prisma.annotations.findMany({ select: { annotationId: true } })
     * 
     */
    findMany<T extends AnnotationsFindManyArgs>(args?: SelectSubset<T, AnnotationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnotationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Annotations.
     * @param {AnnotationsCreateArgs} args - Arguments to create a Annotations.
     * @example
     * // Create one Annotations
     * const Annotations = await prisma.annotations.create({
     *   data: {
     *     // ... data to create a Annotations
     *   }
     * })
     * 
     */
    create<T extends AnnotationsCreateArgs>(args: SelectSubset<T, AnnotationsCreateArgs<ExtArgs>>): Prisma__AnnotationsClient<$Result.GetResult<Prisma.$AnnotationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Annotations.
     * @param {AnnotationsCreateManyArgs} args - Arguments to create many Annotations.
     * @example
     * // Create many Annotations
     * const annotations = await prisma.annotations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnotationsCreateManyArgs>(args?: SelectSubset<T, AnnotationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Annotations and returns the data saved in the database.
     * @param {AnnotationsCreateManyAndReturnArgs} args - Arguments to create many Annotations.
     * @example
     * // Create many Annotations
     * const annotations = await prisma.annotations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Annotations and only return the `annotationId`
     * const annotationsWithAnnotationIdOnly = await prisma.annotations.createManyAndReturn({
     *   select: { annotationId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnotationsCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnotationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnotationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Annotations.
     * @param {AnnotationsDeleteArgs} args - Arguments to delete one Annotations.
     * @example
     * // Delete one Annotations
     * const Annotations = await prisma.annotations.delete({
     *   where: {
     *     // ... filter to delete one Annotations
     *   }
     * })
     * 
     */
    delete<T extends AnnotationsDeleteArgs>(args: SelectSubset<T, AnnotationsDeleteArgs<ExtArgs>>): Prisma__AnnotationsClient<$Result.GetResult<Prisma.$AnnotationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Annotations.
     * @param {AnnotationsUpdateArgs} args - Arguments to update one Annotations.
     * @example
     * // Update one Annotations
     * const annotations = await prisma.annotations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnotationsUpdateArgs>(args: SelectSubset<T, AnnotationsUpdateArgs<ExtArgs>>): Prisma__AnnotationsClient<$Result.GetResult<Prisma.$AnnotationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Annotations.
     * @param {AnnotationsDeleteManyArgs} args - Arguments to filter Annotations to delete.
     * @example
     * // Delete a few Annotations
     * const { count } = await prisma.annotations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnotationsDeleteManyArgs>(args?: SelectSubset<T, AnnotationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Annotations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnotationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Annotations
     * const annotations = await prisma.annotations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnotationsUpdateManyArgs>(args: SelectSubset<T, AnnotationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Annotations and returns the data updated in the database.
     * @param {AnnotationsUpdateManyAndReturnArgs} args - Arguments to update many Annotations.
     * @example
     * // Update many Annotations
     * const annotations = await prisma.annotations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Annotations and only return the `annotationId`
     * const annotationsWithAnnotationIdOnly = await prisma.annotations.updateManyAndReturn({
     *   select: { annotationId: true },
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
    updateManyAndReturn<T extends AnnotationsUpdateManyAndReturnArgs>(args: SelectSubset<T, AnnotationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnotationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Annotations.
     * @param {AnnotationsUpsertArgs} args - Arguments to update or create a Annotations.
     * @example
     * // Update or create a Annotations
     * const annotations = await prisma.annotations.upsert({
     *   create: {
     *     // ... data to create a Annotations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Annotations we want to update
     *   }
     * })
     */
    upsert<T extends AnnotationsUpsertArgs>(args: SelectSubset<T, AnnotationsUpsertArgs<ExtArgs>>): Prisma__AnnotationsClient<$Result.GetResult<Prisma.$AnnotationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Annotations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnotationsCountArgs} args - Arguments to filter Annotations to count.
     * @example
     * // Count the number of Annotations
     * const count = await prisma.annotations.count({
     *   where: {
     *     // ... the filter for the Annotations we want to count
     *   }
     * })
    **/
    count<T extends AnnotationsCountArgs>(
      args?: Subset<T, AnnotationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnotationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Annotations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnotationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnnotationsAggregateArgs>(args: Subset<T, AnnotationsAggregateArgs>): Prisma.PrismaPromise<GetAnnotationsAggregateType<T>>

    /**
     * Group by Annotations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnotationsGroupByArgs} args - Group by arguments.
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
      T extends AnnotationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnotationsGroupByArgs['orderBy'] }
        : { orderBy?: AnnotationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnnotationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnotationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Annotations model
   */
  readonly fields: AnnotationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Annotations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnotationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medication<T extends MedicationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicationsDefaultArgs<ExtArgs>>): Prisma__MedicationsClient<$Result.GetResult<Prisma.$MedicationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Annotations model
   */
  interface AnnotationsFieldRefs {
    readonly annotationId: FieldRef<"Annotations", 'String'>
    readonly medicationId: FieldRef<"Annotations", 'String'>
    readonly content: FieldRef<"Annotations", 'String'>
    readonly createdAt: FieldRef<"Annotations", 'DateTime'>
    readonly updatedAt: FieldRef<"Annotations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Annotations findUnique
   */
  export type AnnotationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotations
     */
    select?: AnnotationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotations
     */
    omit?: AnnotationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationsInclude<ExtArgs> | null
    /**
     * Filter, which Annotations to fetch.
     */
    where: AnnotationsWhereUniqueInput
  }

  /**
   * Annotations findUniqueOrThrow
   */
  export type AnnotationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotations
     */
    select?: AnnotationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotations
     */
    omit?: AnnotationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationsInclude<ExtArgs> | null
    /**
     * Filter, which Annotations to fetch.
     */
    where: AnnotationsWhereUniqueInput
  }

  /**
   * Annotations findFirst
   */
  export type AnnotationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotations
     */
    select?: AnnotationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotations
     */
    omit?: AnnotationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationsInclude<ExtArgs> | null
    /**
     * Filter, which Annotations to fetch.
     */
    where?: AnnotationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annotations to fetch.
     */
    orderBy?: AnnotationsOrderByWithRelationInput | AnnotationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Annotations.
     */
    cursor?: AnnotationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annotations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Annotations.
     */
    distinct?: AnnotationsScalarFieldEnum | AnnotationsScalarFieldEnum[]
  }

  /**
   * Annotations findFirstOrThrow
   */
  export type AnnotationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotations
     */
    select?: AnnotationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotations
     */
    omit?: AnnotationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationsInclude<ExtArgs> | null
    /**
     * Filter, which Annotations to fetch.
     */
    where?: AnnotationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annotations to fetch.
     */
    orderBy?: AnnotationsOrderByWithRelationInput | AnnotationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Annotations.
     */
    cursor?: AnnotationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annotations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Annotations.
     */
    distinct?: AnnotationsScalarFieldEnum | AnnotationsScalarFieldEnum[]
  }

  /**
   * Annotations findMany
   */
  export type AnnotationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotations
     */
    select?: AnnotationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotations
     */
    omit?: AnnotationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationsInclude<ExtArgs> | null
    /**
     * Filter, which Annotations to fetch.
     */
    where?: AnnotationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annotations to fetch.
     */
    orderBy?: AnnotationsOrderByWithRelationInput | AnnotationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Annotations.
     */
    cursor?: AnnotationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annotations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annotations.
     */
    skip?: number
    distinct?: AnnotationsScalarFieldEnum | AnnotationsScalarFieldEnum[]
  }

  /**
   * Annotations create
   */
  export type AnnotationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotations
     */
    select?: AnnotationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotations
     */
    omit?: AnnotationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Annotations.
     */
    data: XOR<AnnotationsCreateInput, AnnotationsUncheckedCreateInput>
  }

  /**
   * Annotations createMany
   */
  export type AnnotationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Annotations.
     */
    data: AnnotationsCreateManyInput | AnnotationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Annotations createManyAndReturn
   */
  export type AnnotationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotations
     */
    select?: AnnotationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Annotations
     */
    omit?: AnnotationsOmit<ExtArgs> | null
    /**
     * The data used to create many Annotations.
     */
    data: AnnotationsCreateManyInput | AnnotationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Annotations update
   */
  export type AnnotationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotations
     */
    select?: AnnotationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotations
     */
    omit?: AnnotationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Annotations.
     */
    data: XOR<AnnotationsUpdateInput, AnnotationsUncheckedUpdateInput>
    /**
     * Choose, which Annotations to update.
     */
    where: AnnotationsWhereUniqueInput
  }

  /**
   * Annotations updateMany
   */
  export type AnnotationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Annotations.
     */
    data: XOR<AnnotationsUpdateManyMutationInput, AnnotationsUncheckedUpdateManyInput>
    /**
     * Filter which Annotations to update
     */
    where?: AnnotationsWhereInput
    /**
     * Limit how many Annotations to update.
     */
    limit?: number
  }

  /**
   * Annotations updateManyAndReturn
   */
  export type AnnotationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotations
     */
    select?: AnnotationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Annotations
     */
    omit?: AnnotationsOmit<ExtArgs> | null
    /**
     * The data used to update Annotations.
     */
    data: XOR<AnnotationsUpdateManyMutationInput, AnnotationsUncheckedUpdateManyInput>
    /**
     * Filter which Annotations to update
     */
    where?: AnnotationsWhereInput
    /**
     * Limit how many Annotations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Annotations upsert
   */
  export type AnnotationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotations
     */
    select?: AnnotationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotations
     */
    omit?: AnnotationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Annotations to update in case it exists.
     */
    where: AnnotationsWhereUniqueInput
    /**
     * In case the Annotations found by the `where` argument doesn't exist, create a new Annotations with this data.
     */
    create: XOR<AnnotationsCreateInput, AnnotationsUncheckedCreateInput>
    /**
     * In case the Annotations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnotationsUpdateInput, AnnotationsUncheckedUpdateInput>
  }

  /**
   * Annotations delete
   */
  export type AnnotationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotations
     */
    select?: AnnotationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotations
     */
    omit?: AnnotationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationsInclude<ExtArgs> | null
    /**
     * Filter which Annotations to delete.
     */
    where: AnnotationsWhereUniqueInput
  }

  /**
   * Annotations deleteMany
   */
  export type AnnotationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Annotations to delete
     */
    where?: AnnotationsWhereInput
    /**
     * Limit how many Annotations to delete.
     */
    limit?: number
  }

  /**
   * Annotations without action
   */
  export type AnnotationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annotations
     */
    select?: AnnotationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annotations
     */
    omit?: AnnotationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnotationsInclude<ExtArgs> | null
  }


  /**
   * Model Sharings
   */

  export type AggregateSharings = {
    _count: SharingsCountAggregateOutputType | null
    _min: SharingsMinAggregateOutputType | null
    _max: SharingsMaxAggregateOutputType | null
  }

  export type SharingsMinAggregateOutputType = {
    sharingId: string | null
    patientId: string | null
    caretakerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SharingsMaxAggregateOutputType = {
    sharingId: string | null
    patientId: string | null
    caretakerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SharingsCountAggregateOutputType = {
    sharingId: number
    patientId: number
    caretakerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SharingsMinAggregateInputType = {
    sharingId?: true
    patientId?: true
    caretakerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SharingsMaxAggregateInputType = {
    sharingId?: true
    patientId?: true
    caretakerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SharingsCountAggregateInputType = {
    sharingId?: true
    patientId?: true
    caretakerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SharingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sharings to aggregate.
     */
    where?: SharingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sharings to fetch.
     */
    orderBy?: SharingsOrderByWithRelationInput | SharingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SharingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sharings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sharings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sharings
    **/
    _count?: true | SharingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SharingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SharingsMaxAggregateInputType
  }

  export type GetSharingsAggregateType<T extends SharingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSharings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSharings[P]>
      : GetScalarType<T[P], AggregateSharings[P]>
  }




  export type SharingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharingsWhereInput
    orderBy?: SharingsOrderByWithAggregationInput | SharingsOrderByWithAggregationInput[]
    by: SharingsScalarFieldEnum[] | SharingsScalarFieldEnum
    having?: SharingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SharingsCountAggregateInputType | true
    _min?: SharingsMinAggregateInputType
    _max?: SharingsMaxAggregateInputType
  }

  export type SharingsGroupByOutputType = {
    sharingId: string
    patientId: string
    caretakerId: string
    createdAt: Date
    updatedAt: Date
    _count: SharingsCountAggregateOutputType | null
    _min: SharingsMinAggregateOutputType | null
    _max: SharingsMaxAggregateOutputType | null
  }

  type GetSharingsGroupByPayload<T extends SharingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SharingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SharingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SharingsGroupByOutputType[P]>
            : GetScalarType<T[P], SharingsGroupByOutputType[P]>
        }
      >
    >


  export type SharingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sharingId?: boolean
    patientId?: boolean
    caretakerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | UsersDefaultArgs<ExtArgs>
    caretaker?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sharings"]>

  export type SharingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sharingId?: boolean
    patientId?: boolean
    caretakerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | UsersDefaultArgs<ExtArgs>
    caretaker?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sharings"]>

  export type SharingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sharingId?: boolean
    patientId?: boolean
    caretakerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | UsersDefaultArgs<ExtArgs>
    caretaker?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sharings"]>

  export type SharingsSelectScalar = {
    sharingId?: boolean
    patientId?: boolean
    caretakerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SharingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sharingId" | "patientId" | "caretakerId" | "createdAt" | "updatedAt", ExtArgs["result"]["sharings"]>
  export type SharingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | UsersDefaultArgs<ExtArgs>
    caretaker?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type SharingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | UsersDefaultArgs<ExtArgs>
    caretaker?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type SharingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | UsersDefaultArgs<ExtArgs>
    caretaker?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $SharingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sharings"
    objects: {
      patient: Prisma.$UsersPayload<ExtArgs>
      caretaker: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      sharingId: string
      patientId: string
      caretakerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sharings"]>
    composites: {}
  }

  type SharingsGetPayload<S extends boolean | null | undefined | SharingsDefaultArgs> = $Result.GetResult<Prisma.$SharingsPayload, S>

  type SharingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SharingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SharingsCountAggregateInputType | true
    }

  export interface SharingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sharings'], meta: { name: 'Sharings' } }
    /**
     * Find zero or one Sharings that matches the filter.
     * @param {SharingsFindUniqueArgs} args - Arguments to find a Sharings
     * @example
     * // Get one Sharings
     * const sharings = await prisma.sharings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SharingsFindUniqueArgs>(args: SelectSubset<T, SharingsFindUniqueArgs<ExtArgs>>): Prisma__SharingsClient<$Result.GetResult<Prisma.$SharingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sharings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SharingsFindUniqueOrThrowArgs} args - Arguments to find a Sharings
     * @example
     * // Get one Sharings
     * const sharings = await prisma.sharings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SharingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SharingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SharingsClient<$Result.GetResult<Prisma.$SharingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sharings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharingsFindFirstArgs} args - Arguments to find a Sharings
     * @example
     * // Get one Sharings
     * const sharings = await prisma.sharings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SharingsFindFirstArgs>(args?: SelectSubset<T, SharingsFindFirstArgs<ExtArgs>>): Prisma__SharingsClient<$Result.GetResult<Prisma.$SharingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sharings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharingsFindFirstOrThrowArgs} args - Arguments to find a Sharings
     * @example
     * // Get one Sharings
     * const sharings = await prisma.sharings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SharingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SharingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SharingsClient<$Result.GetResult<Prisma.$SharingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sharings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sharings
     * const sharings = await prisma.sharings.findMany()
     * 
     * // Get first 10 Sharings
     * const sharings = await prisma.sharings.findMany({ take: 10 })
     * 
     * // Only select the `sharingId`
     * const sharingsWithSharingIdOnly = await prisma.sharings.findMany({ select: { sharingId: true } })
     * 
     */
    findMany<T extends SharingsFindManyArgs>(args?: SelectSubset<T, SharingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sharings.
     * @param {SharingsCreateArgs} args - Arguments to create a Sharings.
     * @example
     * // Create one Sharings
     * const Sharings = await prisma.sharings.create({
     *   data: {
     *     // ... data to create a Sharings
     *   }
     * })
     * 
     */
    create<T extends SharingsCreateArgs>(args: SelectSubset<T, SharingsCreateArgs<ExtArgs>>): Prisma__SharingsClient<$Result.GetResult<Prisma.$SharingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sharings.
     * @param {SharingsCreateManyArgs} args - Arguments to create many Sharings.
     * @example
     * // Create many Sharings
     * const sharings = await prisma.sharings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SharingsCreateManyArgs>(args?: SelectSubset<T, SharingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sharings and returns the data saved in the database.
     * @param {SharingsCreateManyAndReturnArgs} args - Arguments to create many Sharings.
     * @example
     * // Create many Sharings
     * const sharings = await prisma.sharings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sharings and only return the `sharingId`
     * const sharingsWithSharingIdOnly = await prisma.sharings.createManyAndReturn({
     *   select: { sharingId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SharingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SharingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sharings.
     * @param {SharingsDeleteArgs} args - Arguments to delete one Sharings.
     * @example
     * // Delete one Sharings
     * const Sharings = await prisma.sharings.delete({
     *   where: {
     *     // ... filter to delete one Sharings
     *   }
     * })
     * 
     */
    delete<T extends SharingsDeleteArgs>(args: SelectSubset<T, SharingsDeleteArgs<ExtArgs>>): Prisma__SharingsClient<$Result.GetResult<Prisma.$SharingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sharings.
     * @param {SharingsUpdateArgs} args - Arguments to update one Sharings.
     * @example
     * // Update one Sharings
     * const sharings = await prisma.sharings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SharingsUpdateArgs>(args: SelectSubset<T, SharingsUpdateArgs<ExtArgs>>): Prisma__SharingsClient<$Result.GetResult<Prisma.$SharingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sharings.
     * @param {SharingsDeleteManyArgs} args - Arguments to filter Sharings to delete.
     * @example
     * // Delete a few Sharings
     * const { count } = await prisma.sharings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SharingsDeleteManyArgs>(args?: SelectSubset<T, SharingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sharings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sharings
     * const sharings = await prisma.sharings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SharingsUpdateManyArgs>(args: SelectSubset<T, SharingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sharings and returns the data updated in the database.
     * @param {SharingsUpdateManyAndReturnArgs} args - Arguments to update many Sharings.
     * @example
     * // Update many Sharings
     * const sharings = await prisma.sharings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sharings and only return the `sharingId`
     * const sharingsWithSharingIdOnly = await prisma.sharings.updateManyAndReturn({
     *   select: { sharingId: true },
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
    updateManyAndReturn<T extends SharingsUpdateManyAndReturnArgs>(args: SelectSubset<T, SharingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sharings.
     * @param {SharingsUpsertArgs} args - Arguments to update or create a Sharings.
     * @example
     * // Update or create a Sharings
     * const sharings = await prisma.sharings.upsert({
     *   create: {
     *     // ... data to create a Sharings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sharings we want to update
     *   }
     * })
     */
    upsert<T extends SharingsUpsertArgs>(args: SelectSubset<T, SharingsUpsertArgs<ExtArgs>>): Prisma__SharingsClient<$Result.GetResult<Prisma.$SharingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sharings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharingsCountArgs} args - Arguments to filter Sharings to count.
     * @example
     * // Count the number of Sharings
     * const count = await prisma.sharings.count({
     *   where: {
     *     // ... the filter for the Sharings we want to count
     *   }
     * })
    **/
    count<T extends SharingsCountArgs>(
      args?: Subset<T, SharingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SharingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sharings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SharingsAggregateArgs>(args: Subset<T, SharingsAggregateArgs>): Prisma.PrismaPromise<GetSharingsAggregateType<T>>

    /**
     * Group by Sharings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharingsGroupByArgs} args - Group by arguments.
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
      T extends SharingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SharingsGroupByArgs['orderBy'] }
        : { orderBy?: SharingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SharingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSharingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sharings model
   */
  readonly fields: SharingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sharings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SharingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    caretaker<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Sharings model
   */
  interface SharingsFieldRefs {
    readonly sharingId: FieldRef<"Sharings", 'String'>
    readonly patientId: FieldRef<"Sharings", 'String'>
    readonly caretakerId: FieldRef<"Sharings", 'String'>
    readonly createdAt: FieldRef<"Sharings", 'DateTime'>
    readonly updatedAt: FieldRef<"Sharings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sharings findUnique
   */
  export type SharingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sharings
     */
    select?: SharingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sharings
     */
    omit?: SharingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharingsInclude<ExtArgs> | null
    /**
     * Filter, which Sharings to fetch.
     */
    where: SharingsWhereUniqueInput
  }

  /**
   * Sharings findUniqueOrThrow
   */
  export type SharingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sharings
     */
    select?: SharingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sharings
     */
    omit?: SharingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharingsInclude<ExtArgs> | null
    /**
     * Filter, which Sharings to fetch.
     */
    where: SharingsWhereUniqueInput
  }

  /**
   * Sharings findFirst
   */
  export type SharingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sharings
     */
    select?: SharingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sharings
     */
    omit?: SharingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharingsInclude<ExtArgs> | null
    /**
     * Filter, which Sharings to fetch.
     */
    where?: SharingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sharings to fetch.
     */
    orderBy?: SharingsOrderByWithRelationInput | SharingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sharings.
     */
    cursor?: SharingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sharings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sharings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sharings.
     */
    distinct?: SharingsScalarFieldEnum | SharingsScalarFieldEnum[]
  }

  /**
   * Sharings findFirstOrThrow
   */
  export type SharingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sharings
     */
    select?: SharingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sharings
     */
    omit?: SharingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharingsInclude<ExtArgs> | null
    /**
     * Filter, which Sharings to fetch.
     */
    where?: SharingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sharings to fetch.
     */
    orderBy?: SharingsOrderByWithRelationInput | SharingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sharings.
     */
    cursor?: SharingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sharings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sharings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sharings.
     */
    distinct?: SharingsScalarFieldEnum | SharingsScalarFieldEnum[]
  }

  /**
   * Sharings findMany
   */
  export type SharingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sharings
     */
    select?: SharingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sharings
     */
    omit?: SharingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharingsInclude<ExtArgs> | null
    /**
     * Filter, which Sharings to fetch.
     */
    where?: SharingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sharings to fetch.
     */
    orderBy?: SharingsOrderByWithRelationInput | SharingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sharings.
     */
    cursor?: SharingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sharings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sharings.
     */
    skip?: number
    distinct?: SharingsScalarFieldEnum | SharingsScalarFieldEnum[]
  }

  /**
   * Sharings create
   */
  export type SharingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sharings
     */
    select?: SharingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sharings
     */
    omit?: SharingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharingsInclude<ExtArgs> | null
    /**
     * The data needed to create a Sharings.
     */
    data: XOR<SharingsCreateInput, SharingsUncheckedCreateInput>
  }

  /**
   * Sharings createMany
   */
  export type SharingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sharings.
     */
    data: SharingsCreateManyInput | SharingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sharings createManyAndReturn
   */
  export type SharingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sharings
     */
    select?: SharingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sharings
     */
    omit?: SharingsOmit<ExtArgs> | null
    /**
     * The data used to create many Sharings.
     */
    data: SharingsCreateManyInput | SharingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sharings update
   */
  export type SharingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sharings
     */
    select?: SharingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sharings
     */
    omit?: SharingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharingsInclude<ExtArgs> | null
    /**
     * The data needed to update a Sharings.
     */
    data: XOR<SharingsUpdateInput, SharingsUncheckedUpdateInput>
    /**
     * Choose, which Sharings to update.
     */
    where: SharingsWhereUniqueInput
  }

  /**
   * Sharings updateMany
   */
  export type SharingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sharings.
     */
    data: XOR<SharingsUpdateManyMutationInput, SharingsUncheckedUpdateManyInput>
    /**
     * Filter which Sharings to update
     */
    where?: SharingsWhereInput
    /**
     * Limit how many Sharings to update.
     */
    limit?: number
  }

  /**
   * Sharings updateManyAndReturn
   */
  export type SharingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sharings
     */
    select?: SharingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sharings
     */
    omit?: SharingsOmit<ExtArgs> | null
    /**
     * The data used to update Sharings.
     */
    data: XOR<SharingsUpdateManyMutationInput, SharingsUncheckedUpdateManyInput>
    /**
     * Filter which Sharings to update
     */
    where?: SharingsWhereInput
    /**
     * Limit how many Sharings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sharings upsert
   */
  export type SharingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sharings
     */
    select?: SharingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sharings
     */
    omit?: SharingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharingsInclude<ExtArgs> | null
    /**
     * The filter to search for the Sharings to update in case it exists.
     */
    where: SharingsWhereUniqueInput
    /**
     * In case the Sharings found by the `where` argument doesn't exist, create a new Sharings with this data.
     */
    create: XOR<SharingsCreateInput, SharingsUncheckedCreateInput>
    /**
     * In case the Sharings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SharingsUpdateInput, SharingsUncheckedUpdateInput>
  }

  /**
   * Sharings delete
   */
  export type SharingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sharings
     */
    select?: SharingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sharings
     */
    omit?: SharingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharingsInclude<ExtArgs> | null
    /**
     * Filter which Sharings to delete.
     */
    where: SharingsWhereUniqueInput
  }

  /**
   * Sharings deleteMany
   */
  export type SharingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sharings to delete
     */
    where?: SharingsWhereInput
    /**
     * Limit how many Sharings to delete.
     */
    limit?: number
  }

  /**
   * Sharings without action
   */
  export type SharingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sharings
     */
    select?: SharingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sharings
     */
    omit?: SharingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharingsInclude<ExtArgs> | null
  }


  /**
   * Model VisualTypes
   */

  export type AggregateVisualTypes = {
    _count: VisualTypesCountAggregateOutputType | null
    _min: VisualTypesMinAggregateOutputType | null
    _max: VisualTypesMaxAggregateOutputType | null
  }

  export type VisualTypesMinAggregateOutputType = {
    visualId: string | null
    visual: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VisualTypesMaxAggregateOutputType = {
    visualId: string | null
    visual: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VisualTypesCountAggregateOutputType = {
    visualId: number
    visual: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VisualTypesMinAggregateInputType = {
    visualId?: true
    visual?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VisualTypesMaxAggregateInputType = {
    visualId?: true
    visual?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VisualTypesCountAggregateInputType = {
    visualId?: true
    visual?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VisualTypesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisualTypes to aggregate.
     */
    where?: VisualTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisualTypes to fetch.
     */
    orderBy?: VisualTypesOrderByWithRelationInput | VisualTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisualTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisualTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisualTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VisualTypes
    **/
    _count?: true | VisualTypesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisualTypesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisualTypesMaxAggregateInputType
  }

  export type GetVisualTypesAggregateType<T extends VisualTypesAggregateArgs> = {
        [P in keyof T & keyof AggregateVisualTypes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisualTypes[P]>
      : GetScalarType<T[P], AggregateVisualTypes[P]>
  }




  export type VisualTypesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisualTypesWhereInput
    orderBy?: VisualTypesOrderByWithAggregationInput | VisualTypesOrderByWithAggregationInput[]
    by: VisualTypesScalarFieldEnum[] | VisualTypesScalarFieldEnum
    having?: VisualTypesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisualTypesCountAggregateInputType | true
    _min?: VisualTypesMinAggregateInputType
    _max?: VisualTypesMaxAggregateInputType
  }

  export type VisualTypesGroupByOutputType = {
    visualId: string
    visual: string
    createdAt: Date
    updatedAt: Date
    _count: VisualTypesCountAggregateOutputType | null
    _min: VisualTypesMinAggregateOutputType | null
    _max: VisualTypesMaxAggregateOutputType | null
  }

  type GetVisualTypesGroupByPayload<T extends VisualTypesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisualTypesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisualTypesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisualTypesGroupByOutputType[P]>
            : GetScalarType<T[P], VisualTypesGroupByOutputType[P]>
        }
      >
    >


  export type VisualTypesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    visualId?: boolean
    visual?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medications?: boolean | VisualTypes$medicationsArgs<ExtArgs>
    _count?: boolean | VisualTypesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visualTypes"]>

  export type VisualTypesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    visualId?: boolean
    visual?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["visualTypes"]>

  export type VisualTypesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    visualId?: boolean
    visual?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["visualTypes"]>

  export type VisualTypesSelectScalar = {
    visualId?: boolean
    visual?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VisualTypesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"visualId" | "visual" | "createdAt" | "updatedAt", ExtArgs["result"]["visualTypes"]>
  export type VisualTypesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medications?: boolean | VisualTypes$medicationsArgs<ExtArgs>
    _count?: boolean | VisualTypesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VisualTypesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VisualTypesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VisualTypesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VisualTypes"
    objects: {
      medications: Prisma.$MedicationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      visualId: string
      visual: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["visualTypes"]>
    composites: {}
  }

  type VisualTypesGetPayload<S extends boolean | null | undefined | VisualTypesDefaultArgs> = $Result.GetResult<Prisma.$VisualTypesPayload, S>

  type VisualTypesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisualTypesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisualTypesCountAggregateInputType | true
    }

  export interface VisualTypesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VisualTypes'], meta: { name: 'VisualTypes' } }
    /**
     * Find zero or one VisualTypes that matches the filter.
     * @param {VisualTypesFindUniqueArgs} args - Arguments to find a VisualTypes
     * @example
     * // Get one VisualTypes
     * const visualTypes = await prisma.visualTypes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisualTypesFindUniqueArgs>(args: SelectSubset<T, VisualTypesFindUniqueArgs<ExtArgs>>): Prisma__VisualTypesClient<$Result.GetResult<Prisma.$VisualTypesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VisualTypes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisualTypesFindUniqueOrThrowArgs} args - Arguments to find a VisualTypes
     * @example
     * // Get one VisualTypes
     * const visualTypes = await prisma.visualTypes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisualTypesFindUniqueOrThrowArgs>(args: SelectSubset<T, VisualTypesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisualTypesClient<$Result.GetResult<Prisma.$VisualTypesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisualTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualTypesFindFirstArgs} args - Arguments to find a VisualTypes
     * @example
     * // Get one VisualTypes
     * const visualTypes = await prisma.visualTypes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisualTypesFindFirstArgs>(args?: SelectSubset<T, VisualTypesFindFirstArgs<ExtArgs>>): Prisma__VisualTypesClient<$Result.GetResult<Prisma.$VisualTypesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VisualTypes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualTypesFindFirstOrThrowArgs} args - Arguments to find a VisualTypes
     * @example
     * // Get one VisualTypes
     * const visualTypes = await prisma.visualTypes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisualTypesFindFirstOrThrowArgs>(args?: SelectSubset<T, VisualTypesFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisualTypesClient<$Result.GetResult<Prisma.$VisualTypesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VisualTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualTypesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VisualTypes
     * const visualTypes = await prisma.visualTypes.findMany()
     * 
     * // Get first 10 VisualTypes
     * const visualTypes = await prisma.visualTypes.findMany({ take: 10 })
     * 
     * // Only select the `visualId`
     * const visualTypesWithVisualIdOnly = await prisma.visualTypes.findMany({ select: { visualId: true } })
     * 
     */
    findMany<T extends VisualTypesFindManyArgs>(args?: SelectSubset<T, VisualTypesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisualTypesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VisualTypes.
     * @param {VisualTypesCreateArgs} args - Arguments to create a VisualTypes.
     * @example
     * // Create one VisualTypes
     * const VisualTypes = await prisma.visualTypes.create({
     *   data: {
     *     // ... data to create a VisualTypes
     *   }
     * })
     * 
     */
    create<T extends VisualTypesCreateArgs>(args: SelectSubset<T, VisualTypesCreateArgs<ExtArgs>>): Prisma__VisualTypesClient<$Result.GetResult<Prisma.$VisualTypesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VisualTypes.
     * @param {VisualTypesCreateManyArgs} args - Arguments to create many VisualTypes.
     * @example
     * // Create many VisualTypes
     * const visualTypes = await prisma.visualTypes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisualTypesCreateManyArgs>(args?: SelectSubset<T, VisualTypesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VisualTypes and returns the data saved in the database.
     * @param {VisualTypesCreateManyAndReturnArgs} args - Arguments to create many VisualTypes.
     * @example
     * // Create many VisualTypes
     * const visualTypes = await prisma.visualTypes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VisualTypes and only return the `visualId`
     * const visualTypesWithVisualIdOnly = await prisma.visualTypes.createManyAndReturn({
     *   select: { visualId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VisualTypesCreateManyAndReturnArgs>(args?: SelectSubset<T, VisualTypesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisualTypesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VisualTypes.
     * @param {VisualTypesDeleteArgs} args - Arguments to delete one VisualTypes.
     * @example
     * // Delete one VisualTypes
     * const VisualTypes = await prisma.visualTypes.delete({
     *   where: {
     *     // ... filter to delete one VisualTypes
     *   }
     * })
     * 
     */
    delete<T extends VisualTypesDeleteArgs>(args: SelectSubset<T, VisualTypesDeleteArgs<ExtArgs>>): Prisma__VisualTypesClient<$Result.GetResult<Prisma.$VisualTypesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VisualTypes.
     * @param {VisualTypesUpdateArgs} args - Arguments to update one VisualTypes.
     * @example
     * // Update one VisualTypes
     * const visualTypes = await prisma.visualTypes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisualTypesUpdateArgs>(args: SelectSubset<T, VisualTypesUpdateArgs<ExtArgs>>): Prisma__VisualTypesClient<$Result.GetResult<Prisma.$VisualTypesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VisualTypes.
     * @param {VisualTypesDeleteManyArgs} args - Arguments to filter VisualTypes to delete.
     * @example
     * // Delete a few VisualTypes
     * const { count } = await prisma.visualTypes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisualTypesDeleteManyArgs>(args?: SelectSubset<T, VisualTypesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisualTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualTypesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VisualTypes
     * const visualTypes = await prisma.visualTypes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisualTypesUpdateManyArgs>(args: SelectSubset<T, VisualTypesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisualTypes and returns the data updated in the database.
     * @param {VisualTypesUpdateManyAndReturnArgs} args - Arguments to update many VisualTypes.
     * @example
     * // Update many VisualTypes
     * const visualTypes = await prisma.visualTypes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VisualTypes and only return the `visualId`
     * const visualTypesWithVisualIdOnly = await prisma.visualTypes.updateManyAndReturn({
     *   select: { visualId: true },
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
    updateManyAndReturn<T extends VisualTypesUpdateManyAndReturnArgs>(args: SelectSubset<T, VisualTypesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisualTypesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VisualTypes.
     * @param {VisualTypesUpsertArgs} args - Arguments to update or create a VisualTypes.
     * @example
     * // Update or create a VisualTypes
     * const visualTypes = await prisma.visualTypes.upsert({
     *   create: {
     *     // ... data to create a VisualTypes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VisualTypes we want to update
     *   }
     * })
     */
    upsert<T extends VisualTypesUpsertArgs>(args: SelectSubset<T, VisualTypesUpsertArgs<ExtArgs>>): Prisma__VisualTypesClient<$Result.GetResult<Prisma.$VisualTypesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VisualTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualTypesCountArgs} args - Arguments to filter VisualTypes to count.
     * @example
     * // Count the number of VisualTypes
     * const count = await prisma.visualTypes.count({
     *   where: {
     *     // ... the filter for the VisualTypes we want to count
     *   }
     * })
    **/
    count<T extends VisualTypesCountArgs>(
      args?: Subset<T, VisualTypesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisualTypesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VisualTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualTypesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VisualTypesAggregateArgs>(args: Subset<T, VisualTypesAggregateArgs>): Prisma.PrismaPromise<GetVisualTypesAggregateType<T>>

    /**
     * Group by VisualTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualTypesGroupByArgs} args - Group by arguments.
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
      T extends VisualTypesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisualTypesGroupByArgs['orderBy'] }
        : { orderBy?: VisualTypesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VisualTypesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisualTypesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VisualTypes model
   */
  readonly fields: VisualTypesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VisualTypes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisualTypesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medications<T extends VisualTypes$medicationsArgs<ExtArgs> = {}>(args?: Subset<T, VisualTypes$medicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the VisualTypes model
   */
  interface VisualTypesFieldRefs {
    readonly visualId: FieldRef<"VisualTypes", 'String'>
    readonly visual: FieldRef<"VisualTypes", 'String'>
    readonly createdAt: FieldRef<"VisualTypes", 'DateTime'>
    readonly updatedAt: FieldRef<"VisualTypes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VisualTypes findUnique
   */
  export type VisualTypesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualTypes
     */
    select?: VisualTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisualTypes
     */
    omit?: VisualTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualTypesInclude<ExtArgs> | null
    /**
     * Filter, which VisualTypes to fetch.
     */
    where: VisualTypesWhereUniqueInput
  }

  /**
   * VisualTypes findUniqueOrThrow
   */
  export type VisualTypesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualTypes
     */
    select?: VisualTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisualTypes
     */
    omit?: VisualTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualTypesInclude<ExtArgs> | null
    /**
     * Filter, which VisualTypes to fetch.
     */
    where: VisualTypesWhereUniqueInput
  }

  /**
   * VisualTypes findFirst
   */
  export type VisualTypesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualTypes
     */
    select?: VisualTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisualTypes
     */
    omit?: VisualTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualTypesInclude<ExtArgs> | null
    /**
     * Filter, which VisualTypes to fetch.
     */
    where?: VisualTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisualTypes to fetch.
     */
    orderBy?: VisualTypesOrderByWithRelationInput | VisualTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisualTypes.
     */
    cursor?: VisualTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisualTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisualTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisualTypes.
     */
    distinct?: VisualTypesScalarFieldEnum | VisualTypesScalarFieldEnum[]
  }

  /**
   * VisualTypes findFirstOrThrow
   */
  export type VisualTypesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualTypes
     */
    select?: VisualTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisualTypes
     */
    omit?: VisualTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualTypesInclude<ExtArgs> | null
    /**
     * Filter, which VisualTypes to fetch.
     */
    where?: VisualTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisualTypes to fetch.
     */
    orderBy?: VisualTypesOrderByWithRelationInput | VisualTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisualTypes.
     */
    cursor?: VisualTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisualTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisualTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisualTypes.
     */
    distinct?: VisualTypesScalarFieldEnum | VisualTypesScalarFieldEnum[]
  }

  /**
   * VisualTypes findMany
   */
  export type VisualTypesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualTypes
     */
    select?: VisualTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisualTypes
     */
    omit?: VisualTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualTypesInclude<ExtArgs> | null
    /**
     * Filter, which VisualTypes to fetch.
     */
    where?: VisualTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisualTypes to fetch.
     */
    orderBy?: VisualTypesOrderByWithRelationInput | VisualTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VisualTypes.
     */
    cursor?: VisualTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisualTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisualTypes.
     */
    skip?: number
    distinct?: VisualTypesScalarFieldEnum | VisualTypesScalarFieldEnum[]
  }

  /**
   * VisualTypes create
   */
  export type VisualTypesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualTypes
     */
    select?: VisualTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisualTypes
     */
    omit?: VisualTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualTypesInclude<ExtArgs> | null
    /**
     * The data needed to create a VisualTypes.
     */
    data: XOR<VisualTypesCreateInput, VisualTypesUncheckedCreateInput>
  }

  /**
   * VisualTypes createMany
   */
  export type VisualTypesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VisualTypes.
     */
    data: VisualTypesCreateManyInput | VisualTypesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VisualTypes createManyAndReturn
   */
  export type VisualTypesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualTypes
     */
    select?: VisualTypesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VisualTypes
     */
    omit?: VisualTypesOmit<ExtArgs> | null
    /**
     * The data used to create many VisualTypes.
     */
    data: VisualTypesCreateManyInput | VisualTypesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VisualTypes update
   */
  export type VisualTypesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualTypes
     */
    select?: VisualTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisualTypes
     */
    omit?: VisualTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualTypesInclude<ExtArgs> | null
    /**
     * The data needed to update a VisualTypes.
     */
    data: XOR<VisualTypesUpdateInput, VisualTypesUncheckedUpdateInput>
    /**
     * Choose, which VisualTypes to update.
     */
    where: VisualTypesWhereUniqueInput
  }

  /**
   * VisualTypes updateMany
   */
  export type VisualTypesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VisualTypes.
     */
    data: XOR<VisualTypesUpdateManyMutationInput, VisualTypesUncheckedUpdateManyInput>
    /**
     * Filter which VisualTypes to update
     */
    where?: VisualTypesWhereInput
    /**
     * Limit how many VisualTypes to update.
     */
    limit?: number
  }

  /**
   * VisualTypes updateManyAndReturn
   */
  export type VisualTypesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualTypes
     */
    select?: VisualTypesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VisualTypes
     */
    omit?: VisualTypesOmit<ExtArgs> | null
    /**
     * The data used to update VisualTypes.
     */
    data: XOR<VisualTypesUpdateManyMutationInput, VisualTypesUncheckedUpdateManyInput>
    /**
     * Filter which VisualTypes to update
     */
    where?: VisualTypesWhereInput
    /**
     * Limit how many VisualTypes to update.
     */
    limit?: number
  }

  /**
   * VisualTypes upsert
   */
  export type VisualTypesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualTypes
     */
    select?: VisualTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisualTypes
     */
    omit?: VisualTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualTypesInclude<ExtArgs> | null
    /**
     * The filter to search for the VisualTypes to update in case it exists.
     */
    where: VisualTypesWhereUniqueInput
    /**
     * In case the VisualTypes found by the `where` argument doesn't exist, create a new VisualTypes with this data.
     */
    create: XOR<VisualTypesCreateInput, VisualTypesUncheckedCreateInput>
    /**
     * In case the VisualTypes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisualTypesUpdateInput, VisualTypesUncheckedUpdateInput>
  }

  /**
   * VisualTypes delete
   */
  export type VisualTypesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualTypes
     */
    select?: VisualTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisualTypes
     */
    omit?: VisualTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualTypesInclude<ExtArgs> | null
    /**
     * Filter which VisualTypes to delete.
     */
    where: VisualTypesWhereUniqueInput
  }

  /**
   * VisualTypes deleteMany
   */
  export type VisualTypesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisualTypes to delete
     */
    where?: VisualTypesWhereInput
    /**
     * Limit how many VisualTypes to delete.
     */
    limit?: number
  }

  /**
   * VisualTypes.medications
   */
  export type VisualTypes$medicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medications
     */
    select?: MedicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medications
     */
    omit?: MedicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationsInclude<ExtArgs> | null
    where?: MedicationsWhereInput
    orderBy?: MedicationsOrderByWithRelationInput | MedicationsOrderByWithRelationInput[]
    cursor?: MedicationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicationsScalarFieldEnum | MedicationsScalarFieldEnum[]
  }

  /**
   * VisualTypes without action
   */
  export type VisualTypesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisualTypes
     */
    select?: VisualTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VisualTypes
     */
    omit?: VisualTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualTypesInclude<ExtArgs> | null
  }


  /**
   * Model SoundTypes
   */

  export type AggregateSoundTypes = {
    _count: SoundTypesCountAggregateOutputType | null
    _min: SoundTypesMinAggregateOutputType | null
    _max: SoundTypesMaxAggregateOutputType | null
  }

  export type SoundTypesMinAggregateOutputType = {
    soundId: string | null
    sound: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SoundTypesMaxAggregateOutputType = {
    soundId: string | null
    sound: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SoundTypesCountAggregateOutputType = {
    soundId: number
    sound: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SoundTypesMinAggregateInputType = {
    soundId?: true
    sound?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SoundTypesMaxAggregateInputType = {
    soundId?: true
    sound?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SoundTypesCountAggregateInputType = {
    soundId?: true
    sound?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SoundTypesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SoundTypes to aggregate.
     */
    where?: SoundTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SoundTypes to fetch.
     */
    orderBy?: SoundTypesOrderByWithRelationInput | SoundTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SoundTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SoundTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SoundTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SoundTypes
    **/
    _count?: true | SoundTypesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SoundTypesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SoundTypesMaxAggregateInputType
  }

  export type GetSoundTypesAggregateType<T extends SoundTypesAggregateArgs> = {
        [P in keyof T & keyof AggregateSoundTypes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSoundTypes[P]>
      : GetScalarType<T[P], AggregateSoundTypes[P]>
  }




  export type SoundTypesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SoundTypesWhereInput
    orderBy?: SoundTypesOrderByWithAggregationInput | SoundTypesOrderByWithAggregationInput[]
    by: SoundTypesScalarFieldEnum[] | SoundTypesScalarFieldEnum
    having?: SoundTypesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SoundTypesCountAggregateInputType | true
    _min?: SoundTypesMinAggregateInputType
    _max?: SoundTypesMaxAggregateInputType
  }

  export type SoundTypesGroupByOutputType = {
    soundId: string
    sound: string
    createdAt: Date
    updatedAt: Date
    _count: SoundTypesCountAggregateOutputType | null
    _min: SoundTypesMinAggregateOutputType | null
    _max: SoundTypesMaxAggregateOutputType | null
  }

  type GetSoundTypesGroupByPayload<T extends SoundTypesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SoundTypesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SoundTypesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SoundTypesGroupByOutputType[P]>
            : GetScalarType<T[P], SoundTypesGroupByOutputType[P]>
        }
      >
    >


  export type SoundTypesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    soundId?: boolean
    sound?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medications?: boolean | SoundTypes$medicationsArgs<ExtArgs>
    _count?: boolean | SoundTypesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["soundTypes"]>

  export type SoundTypesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    soundId?: boolean
    sound?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["soundTypes"]>

  export type SoundTypesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    soundId?: boolean
    sound?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["soundTypes"]>

  export type SoundTypesSelectScalar = {
    soundId?: boolean
    sound?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SoundTypesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"soundId" | "sound" | "createdAt" | "updatedAt", ExtArgs["result"]["soundTypes"]>
  export type SoundTypesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medications?: boolean | SoundTypes$medicationsArgs<ExtArgs>
    _count?: boolean | SoundTypesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SoundTypesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SoundTypesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SoundTypesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SoundTypes"
    objects: {
      medications: Prisma.$MedicationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      soundId: string
      sound: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["soundTypes"]>
    composites: {}
  }

  type SoundTypesGetPayload<S extends boolean | null | undefined | SoundTypesDefaultArgs> = $Result.GetResult<Prisma.$SoundTypesPayload, S>

  type SoundTypesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SoundTypesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SoundTypesCountAggregateInputType | true
    }

  export interface SoundTypesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SoundTypes'], meta: { name: 'SoundTypes' } }
    /**
     * Find zero or one SoundTypes that matches the filter.
     * @param {SoundTypesFindUniqueArgs} args - Arguments to find a SoundTypes
     * @example
     * // Get one SoundTypes
     * const soundTypes = await prisma.soundTypes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SoundTypesFindUniqueArgs>(args: SelectSubset<T, SoundTypesFindUniqueArgs<ExtArgs>>): Prisma__SoundTypesClient<$Result.GetResult<Prisma.$SoundTypesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SoundTypes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SoundTypesFindUniqueOrThrowArgs} args - Arguments to find a SoundTypes
     * @example
     * // Get one SoundTypes
     * const soundTypes = await prisma.soundTypes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SoundTypesFindUniqueOrThrowArgs>(args: SelectSubset<T, SoundTypesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SoundTypesClient<$Result.GetResult<Prisma.$SoundTypesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SoundTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoundTypesFindFirstArgs} args - Arguments to find a SoundTypes
     * @example
     * // Get one SoundTypes
     * const soundTypes = await prisma.soundTypes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SoundTypesFindFirstArgs>(args?: SelectSubset<T, SoundTypesFindFirstArgs<ExtArgs>>): Prisma__SoundTypesClient<$Result.GetResult<Prisma.$SoundTypesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SoundTypes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoundTypesFindFirstOrThrowArgs} args - Arguments to find a SoundTypes
     * @example
     * // Get one SoundTypes
     * const soundTypes = await prisma.soundTypes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SoundTypesFindFirstOrThrowArgs>(args?: SelectSubset<T, SoundTypesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SoundTypesClient<$Result.GetResult<Prisma.$SoundTypesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SoundTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoundTypesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SoundTypes
     * const soundTypes = await prisma.soundTypes.findMany()
     * 
     * // Get first 10 SoundTypes
     * const soundTypes = await prisma.soundTypes.findMany({ take: 10 })
     * 
     * // Only select the `soundId`
     * const soundTypesWithSoundIdOnly = await prisma.soundTypes.findMany({ select: { soundId: true } })
     * 
     */
    findMany<T extends SoundTypesFindManyArgs>(args?: SelectSubset<T, SoundTypesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoundTypesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SoundTypes.
     * @param {SoundTypesCreateArgs} args - Arguments to create a SoundTypes.
     * @example
     * // Create one SoundTypes
     * const SoundTypes = await prisma.soundTypes.create({
     *   data: {
     *     // ... data to create a SoundTypes
     *   }
     * })
     * 
     */
    create<T extends SoundTypesCreateArgs>(args: SelectSubset<T, SoundTypesCreateArgs<ExtArgs>>): Prisma__SoundTypesClient<$Result.GetResult<Prisma.$SoundTypesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SoundTypes.
     * @param {SoundTypesCreateManyArgs} args - Arguments to create many SoundTypes.
     * @example
     * // Create many SoundTypes
     * const soundTypes = await prisma.soundTypes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SoundTypesCreateManyArgs>(args?: SelectSubset<T, SoundTypesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SoundTypes and returns the data saved in the database.
     * @param {SoundTypesCreateManyAndReturnArgs} args - Arguments to create many SoundTypes.
     * @example
     * // Create many SoundTypes
     * const soundTypes = await prisma.soundTypes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SoundTypes and only return the `soundId`
     * const soundTypesWithSoundIdOnly = await prisma.soundTypes.createManyAndReturn({
     *   select: { soundId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SoundTypesCreateManyAndReturnArgs>(args?: SelectSubset<T, SoundTypesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoundTypesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SoundTypes.
     * @param {SoundTypesDeleteArgs} args - Arguments to delete one SoundTypes.
     * @example
     * // Delete one SoundTypes
     * const SoundTypes = await prisma.soundTypes.delete({
     *   where: {
     *     // ... filter to delete one SoundTypes
     *   }
     * })
     * 
     */
    delete<T extends SoundTypesDeleteArgs>(args: SelectSubset<T, SoundTypesDeleteArgs<ExtArgs>>): Prisma__SoundTypesClient<$Result.GetResult<Prisma.$SoundTypesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SoundTypes.
     * @param {SoundTypesUpdateArgs} args - Arguments to update one SoundTypes.
     * @example
     * // Update one SoundTypes
     * const soundTypes = await prisma.soundTypes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SoundTypesUpdateArgs>(args: SelectSubset<T, SoundTypesUpdateArgs<ExtArgs>>): Prisma__SoundTypesClient<$Result.GetResult<Prisma.$SoundTypesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SoundTypes.
     * @param {SoundTypesDeleteManyArgs} args - Arguments to filter SoundTypes to delete.
     * @example
     * // Delete a few SoundTypes
     * const { count } = await prisma.soundTypes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SoundTypesDeleteManyArgs>(args?: SelectSubset<T, SoundTypesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SoundTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoundTypesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SoundTypes
     * const soundTypes = await prisma.soundTypes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SoundTypesUpdateManyArgs>(args: SelectSubset<T, SoundTypesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SoundTypes and returns the data updated in the database.
     * @param {SoundTypesUpdateManyAndReturnArgs} args - Arguments to update many SoundTypes.
     * @example
     * // Update many SoundTypes
     * const soundTypes = await prisma.soundTypes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SoundTypes and only return the `soundId`
     * const soundTypesWithSoundIdOnly = await prisma.soundTypes.updateManyAndReturn({
     *   select: { soundId: true },
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
    updateManyAndReturn<T extends SoundTypesUpdateManyAndReturnArgs>(args: SelectSubset<T, SoundTypesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SoundTypesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SoundTypes.
     * @param {SoundTypesUpsertArgs} args - Arguments to update or create a SoundTypes.
     * @example
     * // Update or create a SoundTypes
     * const soundTypes = await prisma.soundTypes.upsert({
     *   create: {
     *     // ... data to create a SoundTypes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SoundTypes we want to update
     *   }
     * })
     */
    upsert<T extends SoundTypesUpsertArgs>(args: SelectSubset<T, SoundTypesUpsertArgs<ExtArgs>>): Prisma__SoundTypesClient<$Result.GetResult<Prisma.$SoundTypesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SoundTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoundTypesCountArgs} args - Arguments to filter SoundTypes to count.
     * @example
     * // Count the number of SoundTypes
     * const count = await prisma.soundTypes.count({
     *   where: {
     *     // ... the filter for the SoundTypes we want to count
     *   }
     * })
    **/
    count<T extends SoundTypesCountArgs>(
      args?: Subset<T, SoundTypesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SoundTypesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SoundTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoundTypesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SoundTypesAggregateArgs>(args: Subset<T, SoundTypesAggregateArgs>): Prisma.PrismaPromise<GetSoundTypesAggregateType<T>>

    /**
     * Group by SoundTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoundTypesGroupByArgs} args - Group by arguments.
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
      T extends SoundTypesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SoundTypesGroupByArgs['orderBy'] }
        : { orderBy?: SoundTypesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SoundTypesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSoundTypesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SoundTypes model
   */
  readonly fields: SoundTypesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SoundTypes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SoundTypesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medications<T extends SoundTypes$medicationsArgs<ExtArgs> = {}>(args?: Subset<T, SoundTypes$medicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SoundTypes model
   */
  interface SoundTypesFieldRefs {
    readonly soundId: FieldRef<"SoundTypes", 'String'>
    readonly sound: FieldRef<"SoundTypes", 'String'>
    readonly createdAt: FieldRef<"SoundTypes", 'DateTime'>
    readonly updatedAt: FieldRef<"SoundTypes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SoundTypes findUnique
   */
  export type SoundTypesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoundTypes
     */
    select?: SoundTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoundTypes
     */
    omit?: SoundTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoundTypesInclude<ExtArgs> | null
    /**
     * Filter, which SoundTypes to fetch.
     */
    where: SoundTypesWhereUniqueInput
  }

  /**
   * SoundTypes findUniqueOrThrow
   */
  export type SoundTypesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoundTypes
     */
    select?: SoundTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoundTypes
     */
    omit?: SoundTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoundTypesInclude<ExtArgs> | null
    /**
     * Filter, which SoundTypes to fetch.
     */
    where: SoundTypesWhereUniqueInput
  }

  /**
   * SoundTypes findFirst
   */
  export type SoundTypesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoundTypes
     */
    select?: SoundTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoundTypes
     */
    omit?: SoundTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoundTypesInclude<ExtArgs> | null
    /**
     * Filter, which SoundTypes to fetch.
     */
    where?: SoundTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SoundTypes to fetch.
     */
    orderBy?: SoundTypesOrderByWithRelationInput | SoundTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SoundTypes.
     */
    cursor?: SoundTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SoundTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SoundTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SoundTypes.
     */
    distinct?: SoundTypesScalarFieldEnum | SoundTypesScalarFieldEnum[]
  }

  /**
   * SoundTypes findFirstOrThrow
   */
  export type SoundTypesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoundTypes
     */
    select?: SoundTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoundTypes
     */
    omit?: SoundTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoundTypesInclude<ExtArgs> | null
    /**
     * Filter, which SoundTypes to fetch.
     */
    where?: SoundTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SoundTypes to fetch.
     */
    orderBy?: SoundTypesOrderByWithRelationInput | SoundTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SoundTypes.
     */
    cursor?: SoundTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SoundTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SoundTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SoundTypes.
     */
    distinct?: SoundTypesScalarFieldEnum | SoundTypesScalarFieldEnum[]
  }

  /**
   * SoundTypes findMany
   */
  export type SoundTypesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoundTypes
     */
    select?: SoundTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoundTypes
     */
    omit?: SoundTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoundTypesInclude<ExtArgs> | null
    /**
     * Filter, which SoundTypes to fetch.
     */
    where?: SoundTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SoundTypes to fetch.
     */
    orderBy?: SoundTypesOrderByWithRelationInput | SoundTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SoundTypes.
     */
    cursor?: SoundTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SoundTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SoundTypes.
     */
    skip?: number
    distinct?: SoundTypesScalarFieldEnum | SoundTypesScalarFieldEnum[]
  }

  /**
   * SoundTypes create
   */
  export type SoundTypesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoundTypes
     */
    select?: SoundTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoundTypes
     */
    omit?: SoundTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoundTypesInclude<ExtArgs> | null
    /**
     * The data needed to create a SoundTypes.
     */
    data: XOR<SoundTypesCreateInput, SoundTypesUncheckedCreateInput>
  }

  /**
   * SoundTypes createMany
   */
  export type SoundTypesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SoundTypes.
     */
    data: SoundTypesCreateManyInput | SoundTypesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SoundTypes createManyAndReturn
   */
  export type SoundTypesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoundTypes
     */
    select?: SoundTypesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SoundTypes
     */
    omit?: SoundTypesOmit<ExtArgs> | null
    /**
     * The data used to create many SoundTypes.
     */
    data: SoundTypesCreateManyInput | SoundTypesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SoundTypes update
   */
  export type SoundTypesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoundTypes
     */
    select?: SoundTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoundTypes
     */
    omit?: SoundTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoundTypesInclude<ExtArgs> | null
    /**
     * The data needed to update a SoundTypes.
     */
    data: XOR<SoundTypesUpdateInput, SoundTypesUncheckedUpdateInput>
    /**
     * Choose, which SoundTypes to update.
     */
    where: SoundTypesWhereUniqueInput
  }

  /**
   * SoundTypes updateMany
   */
  export type SoundTypesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SoundTypes.
     */
    data: XOR<SoundTypesUpdateManyMutationInput, SoundTypesUncheckedUpdateManyInput>
    /**
     * Filter which SoundTypes to update
     */
    where?: SoundTypesWhereInput
    /**
     * Limit how many SoundTypes to update.
     */
    limit?: number
  }

  /**
   * SoundTypes updateManyAndReturn
   */
  export type SoundTypesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoundTypes
     */
    select?: SoundTypesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SoundTypes
     */
    omit?: SoundTypesOmit<ExtArgs> | null
    /**
     * The data used to update SoundTypes.
     */
    data: XOR<SoundTypesUpdateManyMutationInput, SoundTypesUncheckedUpdateManyInput>
    /**
     * Filter which SoundTypes to update
     */
    where?: SoundTypesWhereInput
    /**
     * Limit how many SoundTypes to update.
     */
    limit?: number
  }

  /**
   * SoundTypes upsert
   */
  export type SoundTypesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoundTypes
     */
    select?: SoundTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoundTypes
     */
    omit?: SoundTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoundTypesInclude<ExtArgs> | null
    /**
     * The filter to search for the SoundTypes to update in case it exists.
     */
    where: SoundTypesWhereUniqueInput
    /**
     * In case the SoundTypes found by the `where` argument doesn't exist, create a new SoundTypes with this data.
     */
    create: XOR<SoundTypesCreateInput, SoundTypesUncheckedCreateInput>
    /**
     * In case the SoundTypes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SoundTypesUpdateInput, SoundTypesUncheckedUpdateInput>
  }

  /**
   * SoundTypes delete
   */
  export type SoundTypesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoundTypes
     */
    select?: SoundTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoundTypes
     */
    omit?: SoundTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoundTypesInclude<ExtArgs> | null
    /**
     * Filter which SoundTypes to delete.
     */
    where: SoundTypesWhereUniqueInput
  }

  /**
   * SoundTypes deleteMany
   */
  export type SoundTypesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SoundTypes to delete
     */
    where?: SoundTypesWhereInput
    /**
     * Limit how many SoundTypes to delete.
     */
    limit?: number
  }

  /**
   * SoundTypes.medications
   */
  export type SoundTypes$medicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medications
     */
    select?: MedicationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medications
     */
    omit?: MedicationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationsInclude<ExtArgs> | null
    where?: MedicationsWhereInput
    orderBy?: MedicationsOrderByWithRelationInput | MedicationsOrderByWithRelationInput[]
    cursor?: MedicationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicationsScalarFieldEnum | MedicationsScalarFieldEnum[]
  }

  /**
   * SoundTypes without action
   */
  export type SoundTypesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoundTypes
     */
    select?: SoundTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SoundTypes
     */
    omit?: SoundTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SoundTypesInclude<ExtArgs> | null
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
    userId: 'userId',
    fullName: 'fullName',
    email: 'email',
    phone: 'phone',
    hash: 'hash',
    image: 'image',
    acceptedTosAt: 'acceptedTosAt',
    accountConfirmedAt: 'accountConfirmedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const VerificationCodesScalarFieldEnum: {
    codeId: 'codeId',
    userId: 'userId',
    value: 'value',
    codeType: 'codeType',
    confirmedAt: 'confirmedAt',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationCodesScalarFieldEnum = (typeof VerificationCodesScalarFieldEnum)[keyof typeof VerificationCodesScalarFieldEnum]


  export const MedicationsScalarFieldEnum: {
    medicationId: 'medicationId',
    userId: 'userId',
    name: 'name',
    dose: 'dose',
    description: 'description',
    visualTypeId: 'visualTypeId',
    soundTypeId: 'soundTypeId',
    alertPeriodInHours: 'alertPeriodInHours',
    endTreatmentAt: 'endTreatmentAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MedicationsScalarFieldEnum = (typeof MedicationsScalarFieldEnum)[keyof typeof MedicationsScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    notificationId: 'notificationId',
    medicationId: 'medicationId',
    name: 'name',
    alertAt: 'alertAt',
    soundId: 'soundId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


  export const AnnotationsScalarFieldEnum: {
    annotationId: 'annotationId',
    medicationId: 'medicationId',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnnotationsScalarFieldEnum = (typeof AnnotationsScalarFieldEnum)[keyof typeof AnnotationsScalarFieldEnum]


  export const SharingsScalarFieldEnum: {
    sharingId: 'sharingId',
    patientId: 'patientId',
    caretakerId: 'caretakerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SharingsScalarFieldEnum = (typeof SharingsScalarFieldEnum)[keyof typeof SharingsScalarFieldEnum]


  export const VisualTypesScalarFieldEnum: {
    visualId: 'visualId',
    visual: 'visual',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VisualTypesScalarFieldEnum = (typeof VisualTypesScalarFieldEnum)[keyof typeof VisualTypesScalarFieldEnum]


  export const SoundTypesScalarFieldEnum: {
    soundId: 'soundId',
    sound: 'sound',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SoundTypesScalarFieldEnum = (typeof SoundTypesScalarFieldEnum)[keyof typeof SoundTypesScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    userId?: StringFilter<"Users"> | string
    fullName?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    phone?: StringFilter<"Users"> | string
    hash?: StringFilter<"Users"> | string
    image?: StringNullableFilter<"Users"> | string | null
    acceptedTosAt?: DateTimeFilter<"Users"> | Date | string
    accountConfirmedAt?: DateTimeNullableFilter<"Users"> | Date | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    verificationCodes?: VerificationCodesListRelationFilter
    medications?: MedicationsListRelationFilter
    patientSharings?: SharingsListRelationFilter
    caretakerSharings?: SharingsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    userId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    hash?: SortOrder
    image?: SortOrderInput | SortOrder
    acceptedTosAt?: SortOrder
    accountConfirmedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    verificationCodes?: VerificationCodesOrderByRelationAggregateInput
    medications?: MedicationsOrderByRelationAggregateInput
    patientSharings?: SharingsOrderByRelationAggregateInput
    caretakerSharings?: SharingsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    fullName?: StringFilter<"Users"> | string
    phone?: StringFilter<"Users"> | string
    hash?: StringFilter<"Users"> | string
    image?: StringNullableFilter<"Users"> | string | null
    acceptedTosAt?: DateTimeFilter<"Users"> | Date | string
    accountConfirmedAt?: DateTimeNullableFilter<"Users"> | Date | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    verificationCodes?: VerificationCodesListRelationFilter
    medications?: MedicationsListRelationFilter
    patientSharings?: SharingsListRelationFilter
    caretakerSharings?: SharingsListRelationFilter
  }, "userId" | "email">

  export type UsersOrderByWithAggregationInput = {
    userId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    hash?: SortOrder
    image?: SortOrderInput | SortOrder
    acceptedTosAt?: SortOrder
    accountConfirmedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Users"> | string
    fullName?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    phone?: StringWithAggregatesFilter<"Users"> | string
    hash?: StringWithAggregatesFilter<"Users"> | string
    image?: StringNullableWithAggregatesFilter<"Users"> | string | null
    acceptedTosAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    accountConfirmedAt?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type VerificationCodesWhereInput = {
    AND?: VerificationCodesWhereInput | VerificationCodesWhereInput[]
    OR?: VerificationCodesWhereInput[]
    NOT?: VerificationCodesWhereInput | VerificationCodesWhereInput[]
    codeId?: StringFilter<"VerificationCodes"> | string
    userId?: StringFilter<"VerificationCodes"> | string
    value?: StringFilter<"VerificationCodes"> | string
    codeType?: StringFilter<"VerificationCodes"> | string
    confirmedAt?: DateTimeNullableFilter<"VerificationCodes"> | Date | string | null
    expiresAt?: DateTimeFilter<"VerificationCodes"> | Date | string
    createdAt?: DateTimeFilter<"VerificationCodes"> | Date | string
    updatedAt?: DateTimeFilter<"VerificationCodes"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type VerificationCodesOrderByWithRelationInput = {
    codeId?: SortOrder
    userId?: SortOrder
    value?: SortOrder
    codeType?: SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type VerificationCodesWhereUniqueInput = Prisma.AtLeast<{
    codeId?: string
    AND?: VerificationCodesWhereInput | VerificationCodesWhereInput[]
    OR?: VerificationCodesWhereInput[]
    NOT?: VerificationCodesWhereInput | VerificationCodesWhereInput[]
    userId?: StringFilter<"VerificationCodes"> | string
    value?: StringFilter<"VerificationCodes"> | string
    codeType?: StringFilter<"VerificationCodes"> | string
    confirmedAt?: DateTimeNullableFilter<"VerificationCodes"> | Date | string | null
    expiresAt?: DateTimeFilter<"VerificationCodes"> | Date | string
    createdAt?: DateTimeFilter<"VerificationCodes"> | Date | string
    updatedAt?: DateTimeFilter<"VerificationCodes"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "codeId">

  export type VerificationCodesOrderByWithAggregationInput = {
    codeId?: SortOrder
    userId?: SortOrder
    value?: SortOrder
    codeType?: SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationCodesCountOrderByAggregateInput
    _max?: VerificationCodesMaxOrderByAggregateInput
    _min?: VerificationCodesMinOrderByAggregateInput
  }

  export type VerificationCodesScalarWhereWithAggregatesInput = {
    AND?: VerificationCodesScalarWhereWithAggregatesInput | VerificationCodesScalarWhereWithAggregatesInput[]
    OR?: VerificationCodesScalarWhereWithAggregatesInput[]
    NOT?: VerificationCodesScalarWhereWithAggregatesInput | VerificationCodesScalarWhereWithAggregatesInput[]
    codeId?: StringWithAggregatesFilter<"VerificationCodes"> | string
    userId?: StringWithAggregatesFilter<"VerificationCodes"> | string
    value?: StringWithAggregatesFilter<"VerificationCodes"> | string
    codeType?: StringWithAggregatesFilter<"VerificationCodes"> | string
    confirmedAt?: DateTimeNullableWithAggregatesFilter<"VerificationCodes"> | Date | string | null
    expiresAt?: DateTimeWithAggregatesFilter<"VerificationCodes"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"VerificationCodes"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VerificationCodes"> | Date | string
  }

  export type MedicationsWhereInput = {
    AND?: MedicationsWhereInput | MedicationsWhereInput[]
    OR?: MedicationsWhereInput[]
    NOT?: MedicationsWhereInput | MedicationsWhereInput[]
    medicationId?: StringFilter<"Medications"> | string
    userId?: StringFilter<"Medications"> | string
    name?: StringFilter<"Medications"> | string
    dose?: StringNullableFilter<"Medications"> | string | null
    description?: StringNullableFilter<"Medications"> | string | null
    visualTypeId?: StringFilter<"Medications"> | string
    soundTypeId?: StringFilter<"Medications"> | string
    alertPeriodInHours?: IntFilter<"Medications"> | number
    endTreatmentAt?: DateTimeNullableFilter<"Medications"> | Date | string | null
    createdAt?: DateTimeFilter<"Medications"> | Date | string
    updatedAt?: DateTimeFilter<"Medications"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    visualType?: XOR<VisualTypesScalarRelationFilter, VisualTypesWhereInput>
    soundType?: XOR<SoundTypesScalarRelationFilter, SoundTypesWhereInput>
    notifications?: NotificationsListRelationFilter
    annotations?: AnnotationsListRelationFilter
  }

  export type MedicationsOrderByWithRelationInput = {
    medicationId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    dose?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    visualTypeId?: SortOrder
    soundTypeId?: SortOrder
    alertPeriodInHours?: SortOrder
    endTreatmentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    visualType?: VisualTypesOrderByWithRelationInput
    soundType?: SoundTypesOrderByWithRelationInput
    notifications?: NotificationsOrderByRelationAggregateInput
    annotations?: AnnotationsOrderByRelationAggregateInput
  }

  export type MedicationsWhereUniqueInput = Prisma.AtLeast<{
    medicationId?: string
    AND?: MedicationsWhereInput | MedicationsWhereInput[]
    OR?: MedicationsWhereInput[]
    NOT?: MedicationsWhereInput | MedicationsWhereInput[]
    userId?: StringFilter<"Medications"> | string
    name?: StringFilter<"Medications"> | string
    dose?: StringNullableFilter<"Medications"> | string | null
    description?: StringNullableFilter<"Medications"> | string | null
    visualTypeId?: StringFilter<"Medications"> | string
    soundTypeId?: StringFilter<"Medications"> | string
    alertPeriodInHours?: IntFilter<"Medications"> | number
    endTreatmentAt?: DateTimeNullableFilter<"Medications"> | Date | string | null
    createdAt?: DateTimeFilter<"Medications"> | Date | string
    updatedAt?: DateTimeFilter<"Medications"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    visualType?: XOR<VisualTypesScalarRelationFilter, VisualTypesWhereInput>
    soundType?: XOR<SoundTypesScalarRelationFilter, SoundTypesWhereInput>
    notifications?: NotificationsListRelationFilter
    annotations?: AnnotationsListRelationFilter
  }, "medicationId">

  export type MedicationsOrderByWithAggregationInput = {
    medicationId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    dose?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    visualTypeId?: SortOrder
    soundTypeId?: SortOrder
    alertPeriodInHours?: SortOrder
    endTreatmentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MedicationsCountOrderByAggregateInput
    _avg?: MedicationsAvgOrderByAggregateInput
    _max?: MedicationsMaxOrderByAggregateInput
    _min?: MedicationsMinOrderByAggregateInput
    _sum?: MedicationsSumOrderByAggregateInput
  }

  export type MedicationsScalarWhereWithAggregatesInput = {
    AND?: MedicationsScalarWhereWithAggregatesInput | MedicationsScalarWhereWithAggregatesInput[]
    OR?: MedicationsScalarWhereWithAggregatesInput[]
    NOT?: MedicationsScalarWhereWithAggregatesInput | MedicationsScalarWhereWithAggregatesInput[]
    medicationId?: StringWithAggregatesFilter<"Medications"> | string
    userId?: StringWithAggregatesFilter<"Medications"> | string
    name?: StringWithAggregatesFilter<"Medications"> | string
    dose?: StringNullableWithAggregatesFilter<"Medications"> | string | null
    description?: StringNullableWithAggregatesFilter<"Medications"> | string | null
    visualTypeId?: StringWithAggregatesFilter<"Medications"> | string
    soundTypeId?: StringWithAggregatesFilter<"Medications"> | string
    alertPeriodInHours?: IntWithAggregatesFilter<"Medications"> | number
    endTreatmentAt?: DateTimeNullableWithAggregatesFilter<"Medications"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Medications"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Medications"> | Date | string
  }

  export type NotificationsWhereInput = {
    AND?: NotificationsWhereInput | NotificationsWhereInput[]
    OR?: NotificationsWhereInput[]
    NOT?: NotificationsWhereInput | NotificationsWhereInput[]
    notificationId?: StringFilter<"Notifications"> | string
    medicationId?: StringFilter<"Notifications"> | string
    name?: StringFilter<"Notifications"> | string
    alertAt?: DateTimeFilter<"Notifications"> | Date | string
    soundId?: IntFilter<"Notifications"> | number
    createdAt?: DateTimeFilter<"Notifications"> | Date | string
    updatedAt?: DateTimeFilter<"Notifications"> | Date | string
    medication?: XOR<MedicationsScalarRelationFilter, MedicationsWhereInput>
  }

  export type NotificationsOrderByWithRelationInput = {
    notificationId?: SortOrder
    medicationId?: SortOrder
    name?: SortOrder
    alertAt?: SortOrder
    soundId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    medication?: MedicationsOrderByWithRelationInput
  }

  export type NotificationsWhereUniqueInput = Prisma.AtLeast<{
    notificationId?: string
    AND?: NotificationsWhereInput | NotificationsWhereInput[]
    OR?: NotificationsWhereInput[]
    NOT?: NotificationsWhereInput | NotificationsWhereInput[]
    medicationId?: StringFilter<"Notifications"> | string
    name?: StringFilter<"Notifications"> | string
    alertAt?: DateTimeFilter<"Notifications"> | Date | string
    soundId?: IntFilter<"Notifications"> | number
    createdAt?: DateTimeFilter<"Notifications"> | Date | string
    updatedAt?: DateTimeFilter<"Notifications"> | Date | string
    medication?: XOR<MedicationsScalarRelationFilter, MedicationsWhereInput>
  }, "notificationId">

  export type NotificationsOrderByWithAggregationInput = {
    notificationId?: SortOrder
    medicationId?: SortOrder
    name?: SortOrder
    alertAt?: SortOrder
    soundId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationsCountOrderByAggregateInput
    _avg?: NotificationsAvgOrderByAggregateInput
    _max?: NotificationsMaxOrderByAggregateInput
    _min?: NotificationsMinOrderByAggregateInput
    _sum?: NotificationsSumOrderByAggregateInput
  }

  export type NotificationsScalarWhereWithAggregatesInput = {
    AND?: NotificationsScalarWhereWithAggregatesInput | NotificationsScalarWhereWithAggregatesInput[]
    OR?: NotificationsScalarWhereWithAggregatesInput[]
    NOT?: NotificationsScalarWhereWithAggregatesInput | NotificationsScalarWhereWithAggregatesInput[]
    notificationId?: StringWithAggregatesFilter<"Notifications"> | string
    medicationId?: StringWithAggregatesFilter<"Notifications"> | string
    name?: StringWithAggregatesFilter<"Notifications"> | string
    alertAt?: DateTimeWithAggregatesFilter<"Notifications"> | Date | string
    soundId?: IntWithAggregatesFilter<"Notifications"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Notifications"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notifications"> | Date | string
  }

  export type AnnotationsWhereInput = {
    AND?: AnnotationsWhereInput | AnnotationsWhereInput[]
    OR?: AnnotationsWhereInput[]
    NOT?: AnnotationsWhereInput | AnnotationsWhereInput[]
    annotationId?: StringFilter<"Annotations"> | string
    medicationId?: StringFilter<"Annotations"> | string
    content?: StringFilter<"Annotations"> | string
    createdAt?: DateTimeFilter<"Annotations"> | Date | string
    updatedAt?: DateTimeFilter<"Annotations"> | Date | string
    medication?: XOR<MedicationsScalarRelationFilter, MedicationsWhereInput>
  }

  export type AnnotationsOrderByWithRelationInput = {
    annotationId?: SortOrder
    medicationId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    medication?: MedicationsOrderByWithRelationInput
  }

  export type AnnotationsWhereUniqueInput = Prisma.AtLeast<{
    annotationId?: string
    AND?: AnnotationsWhereInput | AnnotationsWhereInput[]
    OR?: AnnotationsWhereInput[]
    NOT?: AnnotationsWhereInput | AnnotationsWhereInput[]
    medicationId?: StringFilter<"Annotations"> | string
    content?: StringFilter<"Annotations"> | string
    createdAt?: DateTimeFilter<"Annotations"> | Date | string
    updatedAt?: DateTimeFilter<"Annotations"> | Date | string
    medication?: XOR<MedicationsScalarRelationFilter, MedicationsWhereInput>
  }, "annotationId">

  export type AnnotationsOrderByWithAggregationInput = {
    annotationId?: SortOrder
    medicationId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnnotationsCountOrderByAggregateInput
    _max?: AnnotationsMaxOrderByAggregateInput
    _min?: AnnotationsMinOrderByAggregateInput
  }

  export type AnnotationsScalarWhereWithAggregatesInput = {
    AND?: AnnotationsScalarWhereWithAggregatesInput | AnnotationsScalarWhereWithAggregatesInput[]
    OR?: AnnotationsScalarWhereWithAggregatesInput[]
    NOT?: AnnotationsScalarWhereWithAggregatesInput | AnnotationsScalarWhereWithAggregatesInput[]
    annotationId?: StringWithAggregatesFilter<"Annotations"> | string
    medicationId?: StringWithAggregatesFilter<"Annotations"> | string
    content?: StringWithAggregatesFilter<"Annotations"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Annotations"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Annotations"> | Date | string
  }

  export type SharingsWhereInput = {
    AND?: SharingsWhereInput | SharingsWhereInput[]
    OR?: SharingsWhereInput[]
    NOT?: SharingsWhereInput | SharingsWhereInput[]
    sharingId?: StringFilter<"Sharings"> | string
    patientId?: StringFilter<"Sharings"> | string
    caretakerId?: StringFilter<"Sharings"> | string
    createdAt?: DateTimeFilter<"Sharings"> | Date | string
    updatedAt?: DateTimeFilter<"Sharings"> | Date | string
    patient?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    caretaker?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type SharingsOrderByWithRelationInput = {
    sharingId?: SortOrder
    patientId?: SortOrder
    caretakerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: UsersOrderByWithRelationInput
    caretaker?: UsersOrderByWithRelationInput
  }

  export type SharingsWhereUniqueInput = Prisma.AtLeast<{
    sharingId?: string
    AND?: SharingsWhereInput | SharingsWhereInput[]
    OR?: SharingsWhereInput[]
    NOT?: SharingsWhereInput | SharingsWhereInput[]
    patientId?: StringFilter<"Sharings"> | string
    caretakerId?: StringFilter<"Sharings"> | string
    createdAt?: DateTimeFilter<"Sharings"> | Date | string
    updatedAt?: DateTimeFilter<"Sharings"> | Date | string
    patient?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    caretaker?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "sharingId">

  export type SharingsOrderByWithAggregationInput = {
    sharingId?: SortOrder
    patientId?: SortOrder
    caretakerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SharingsCountOrderByAggregateInput
    _max?: SharingsMaxOrderByAggregateInput
    _min?: SharingsMinOrderByAggregateInput
  }

  export type SharingsScalarWhereWithAggregatesInput = {
    AND?: SharingsScalarWhereWithAggregatesInput | SharingsScalarWhereWithAggregatesInput[]
    OR?: SharingsScalarWhereWithAggregatesInput[]
    NOT?: SharingsScalarWhereWithAggregatesInput | SharingsScalarWhereWithAggregatesInput[]
    sharingId?: StringWithAggregatesFilter<"Sharings"> | string
    patientId?: StringWithAggregatesFilter<"Sharings"> | string
    caretakerId?: StringWithAggregatesFilter<"Sharings"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Sharings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sharings"> | Date | string
  }

  export type VisualTypesWhereInput = {
    AND?: VisualTypesWhereInput | VisualTypesWhereInput[]
    OR?: VisualTypesWhereInput[]
    NOT?: VisualTypesWhereInput | VisualTypesWhereInput[]
    visualId?: StringFilter<"VisualTypes"> | string
    visual?: StringFilter<"VisualTypes"> | string
    createdAt?: DateTimeFilter<"VisualTypes"> | Date | string
    updatedAt?: DateTimeFilter<"VisualTypes"> | Date | string
    medications?: MedicationsListRelationFilter
  }

  export type VisualTypesOrderByWithRelationInput = {
    visualId?: SortOrder
    visual?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    medications?: MedicationsOrderByRelationAggregateInput
  }

  export type VisualTypesWhereUniqueInput = Prisma.AtLeast<{
    visualId?: string
    AND?: VisualTypesWhereInput | VisualTypesWhereInput[]
    OR?: VisualTypesWhereInput[]
    NOT?: VisualTypesWhereInput | VisualTypesWhereInput[]
    visual?: StringFilter<"VisualTypes"> | string
    createdAt?: DateTimeFilter<"VisualTypes"> | Date | string
    updatedAt?: DateTimeFilter<"VisualTypes"> | Date | string
    medications?: MedicationsListRelationFilter
  }, "visualId">

  export type VisualTypesOrderByWithAggregationInput = {
    visualId?: SortOrder
    visual?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VisualTypesCountOrderByAggregateInput
    _max?: VisualTypesMaxOrderByAggregateInput
    _min?: VisualTypesMinOrderByAggregateInput
  }

  export type VisualTypesScalarWhereWithAggregatesInput = {
    AND?: VisualTypesScalarWhereWithAggregatesInput | VisualTypesScalarWhereWithAggregatesInput[]
    OR?: VisualTypesScalarWhereWithAggregatesInput[]
    NOT?: VisualTypesScalarWhereWithAggregatesInput | VisualTypesScalarWhereWithAggregatesInput[]
    visualId?: StringWithAggregatesFilter<"VisualTypes"> | string
    visual?: StringWithAggregatesFilter<"VisualTypes"> | string
    createdAt?: DateTimeWithAggregatesFilter<"VisualTypes"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VisualTypes"> | Date | string
  }

  export type SoundTypesWhereInput = {
    AND?: SoundTypesWhereInput | SoundTypesWhereInput[]
    OR?: SoundTypesWhereInput[]
    NOT?: SoundTypesWhereInput | SoundTypesWhereInput[]
    soundId?: StringFilter<"SoundTypes"> | string
    sound?: StringFilter<"SoundTypes"> | string
    createdAt?: DateTimeFilter<"SoundTypes"> | Date | string
    updatedAt?: DateTimeFilter<"SoundTypes"> | Date | string
    medications?: MedicationsListRelationFilter
  }

  export type SoundTypesOrderByWithRelationInput = {
    soundId?: SortOrder
    sound?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    medications?: MedicationsOrderByRelationAggregateInput
  }

  export type SoundTypesWhereUniqueInput = Prisma.AtLeast<{
    soundId?: string
    AND?: SoundTypesWhereInput | SoundTypesWhereInput[]
    OR?: SoundTypesWhereInput[]
    NOT?: SoundTypesWhereInput | SoundTypesWhereInput[]
    sound?: StringFilter<"SoundTypes"> | string
    createdAt?: DateTimeFilter<"SoundTypes"> | Date | string
    updatedAt?: DateTimeFilter<"SoundTypes"> | Date | string
    medications?: MedicationsListRelationFilter
  }, "soundId">

  export type SoundTypesOrderByWithAggregationInput = {
    soundId?: SortOrder
    sound?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SoundTypesCountOrderByAggregateInput
    _max?: SoundTypesMaxOrderByAggregateInput
    _min?: SoundTypesMinOrderByAggregateInput
  }

  export type SoundTypesScalarWhereWithAggregatesInput = {
    AND?: SoundTypesScalarWhereWithAggregatesInput | SoundTypesScalarWhereWithAggregatesInput[]
    OR?: SoundTypesScalarWhereWithAggregatesInput[]
    NOT?: SoundTypesScalarWhereWithAggregatesInput | SoundTypesScalarWhereWithAggregatesInput[]
    soundId?: StringWithAggregatesFilter<"SoundTypes"> | string
    sound?: StringWithAggregatesFilter<"SoundTypes"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SoundTypes"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SoundTypes"> | Date | string
  }

  export type UsersCreateInput = {
    userId?: string
    fullName: string
    email: string
    phone: string
    hash: string
    image?: string | null
    acceptedTosAt?: Date | string
    accountConfirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    verificationCodes?: VerificationCodesCreateNestedManyWithoutUserInput
    medications?: MedicationsCreateNestedManyWithoutUserInput
    patientSharings?: SharingsCreateNestedManyWithoutPatientInput
    caretakerSharings?: SharingsCreateNestedManyWithoutCaretakerInput
  }

  export type UsersUncheckedCreateInput = {
    userId?: string
    fullName: string
    email: string
    phone: string
    hash: string
    image?: string | null
    acceptedTosAt?: Date | string
    accountConfirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    verificationCodes?: VerificationCodesUncheckedCreateNestedManyWithoutUserInput
    medications?: MedicationsUncheckedCreateNestedManyWithoutUserInput
    patientSharings?: SharingsUncheckedCreateNestedManyWithoutPatientInput
    caretakerSharings?: SharingsUncheckedCreateNestedManyWithoutCaretakerInput
  }

  export type UsersUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedTosAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountConfirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationCodes?: VerificationCodesUpdateManyWithoutUserNestedInput
    medications?: MedicationsUpdateManyWithoutUserNestedInput
    patientSharings?: SharingsUpdateManyWithoutPatientNestedInput
    caretakerSharings?: SharingsUpdateManyWithoutCaretakerNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedTosAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountConfirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationCodes?: VerificationCodesUncheckedUpdateManyWithoutUserNestedInput
    medications?: MedicationsUncheckedUpdateManyWithoutUserNestedInput
    patientSharings?: SharingsUncheckedUpdateManyWithoutPatientNestedInput
    caretakerSharings?: SharingsUncheckedUpdateManyWithoutCaretakerNestedInput
  }

  export type UsersCreateManyInput = {
    userId?: string
    fullName: string
    email: string
    phone: string
    hash: string
    image?: string | null
    acceptedTosAt?: Date | string
    accountConfirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedTosAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountConfirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedTosAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountConfirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodesCreateInput = {
    codeId?: string
    value: string
    codeType: string
    confirmedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutVerificationCodesInput
  }

  export type VerificationCodesUncheckedCreateInput = {
    codeId?: string
    userId: string
    value: string
    codeType: string
    confirmedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationCodesUpdateInput = {
    codeId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    codeType?: StringFieldUpdateOperationsInput | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutVerificationCodesNestedInput
  }

  export type VerificationCodesUncheckedUpdateInput = {
    codeId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    codeType?: StringFieldUpdateOperationsInput | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodesCreateManyInput = {
    codeId?: string
    userId: string
    value: string
    codeType: string
    confirmedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationCodesUpdateManyMutationInput = {
    codeId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    codeType?: StringFieldUpdateOperationsInput | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodesUncheckedUpdateManyInput = {
    codeId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    codeType?: StringFieldUpdateOperationsInput | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationsCreateInput = {
    medicationId?: string
    name: string
    dose?: string | null
    description?: string | null
    alertPeriodInHours: number
    endTreatmentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutMedicationsInput
    visualType: VisualTypesCreateNestedOneWithoutMedicationsInput
    soundType: SoundTypesCreateNestedOneWithoutMedicationsInput
    notifications?: NotificationsCreateNestedManyWithoutMedicationInput
    annotations?: AnnotationsCreateNestedManyWithoutMedicationInput
  }

  export type MedicationsUncheckedCreateInput = {
    medicationId?: string
    userId: string
    name: string
    dose?: string | null
    description?: string | null
    visualTypeId: string
    soundTypeId: string
    alertPeriodInHours: number
    endTreatmentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationsUncheckedCreateNestedManyWithoutMedicationInput
    annotations?: AnnotationsUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationsUpdateInput = {
    medicationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dose?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    alertPeriodInHours?: IntFieldUpdateOperationsInput | number
    endTreatmentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutMedicationsNestedInput
    visualType?: VisualTypesUpdateOneRequiredWithoutMedicationsNestedInput
    soundType?: SoundTypesUpdateOneRequiredWithoutMedicationsNestedInput
    notifications?: NotificationsUpdateManyWithoutMedicationNestedInput
    annotations?: AnnotationsUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationsUncheckedUpdateInput = {
    medicationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dose?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visualTypeId?: StringFieldUpdateOperationsInput | string
    soundTypeId?: StringFieldUpdateOperationsInput | string
    alertPeriodInHours?: IntFieldUpdateOperationsInput | number
    endTreatmentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationsUncheckedUpdateManyWithoutMedicationNestedInput
    annotations?: AnnotationsUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationsCreateManyInput = {
    medicationId?: string
    userId: string
    name: string
    dose?: string | null
    description?: string | null
    visualTypeId: string
    soundTypeId: string
    alertPeriodInHours: number
    endTreatmentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationsUpdateManyMutationInput = {
    medicationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dose?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    alertPeriodInHours?: IntFieldUpdateOperationsInput | number
    endTreatmentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationsUncheckedUpdateManyInput = {
    medicationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dose?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visualTypeId?: StringFieldUpdateOperationsInput | string
    soundTypeId?: StringFieldUpdateOperationsInput | string
    alertPeriodInHours?: IntFieldUpdateOperationsInput | number
    endTreatmentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsCreateInput = {
    notificationId?: string
    name: string
    alertAt?: Date | string
    soundId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    medication: MedicationsCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationsUncheckedCreateInput = {
    notificationId?: string
    medicationId: string
    name: string
    alertAt?: Date | string
    soundId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationsUpdateInput = {
    notificationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alertAt?: DateTimeFieldUpdateOperationsInput | Date | string
    soundId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medication?: MedicationsUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationsUncheckedUpdateInput = {
    notificationId?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alertAt?: DateTimeFieldUpdateOperationsInput | Date | string
    soundId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsCreateManyInput = {
    notificationId?: string
    medicationId: string
    name: string
    alertAt?: Date | string
    soundId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationsUpdateManyMutationInput = {
    notificationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alertAt?: DateTimeFieldUpdateOperationsInput | Date | string
    soundId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsUncheckedUpdateManyInput = {
    notificationId?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alertAt?: DateTimeFieldUpdateOperationsInput | Date | string
    soundId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnotationsCreateInput = {
    annotationId?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    medication: MedicationsCreateNestedOneWithoutAnnotationsInput
  }

  export type AnnotationsUncheckedCreateInput = {
    annotationId?: string
    medicationId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnotationsUpdateInput = {
    annotationId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medication?: MedicationsUpdateOneRequiredWithoutAnnotationsNestedInput
  }

  export type AnnotationsUncheckedUpdateInput = {
    annotationId?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnotationsCreateManyInput = {
    annotationId?: string
    medicationId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnotationsUpdateManyMutationInput = {
    annotationId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnotationsUncheckedUpdateManyInput = {
    annotationId?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharingsCreateInput = {
    sharingId?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: UsersCreateNestedOneWithoutPatientSharingsInput
    caretaker: UsersCreateNestedOneWithoutCaretakerSharingsInput
  }

  export type SharingsUncheckedCreateInput = {
    sharingId?: string
    patientId: string
    caretakerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SharingsUpdateInput = {
    sharingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: UsersUpdateOneRequiredWithoutPatientSharingsNestedInput
    caretaker?: UsersUpdateOneRequiredWithoutCaretakerSharingsNestedInput
  }

  export type SharingsUncheckedUpdateInput = {
    sharingId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    caretakerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharingsCreateManyInput = {
    sharingId?: string
    patientId: string
    caretakerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SharingsUpdateManyMutationInput = {
    sharingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharingsUncheckedUpdateManyInput = {
    sharingId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    caretakerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisualTypesCreateInput = {
    visualId?: string
    visual: string
    createdAt?: Date | string
    updatedAt?: Date | string
    medications?: MedicationsCreateNestedManyWithoutVisualTypeInput
  }

  export type VisualTypesUncheckedCreateInput = {
    visualId?: string
    visual: string
    createdAt?: Date | string
    updatedAt?: Date | string
    medications?: MedicationsUncheckedCreateNestedManyWithoutVisualTypeInput
  }

  export type VisualTypesUpdateInput = {
    visualId?: StringFieldUpdateOperationsInput | string
    visual?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: MedicationsUpdateManyWithoutVisualTypeNestedInput
  }

  export type VisualTypesUncheckedUpdateInput = {
    visualId?: StringFieldUpdateOperationsInput | string
    visual?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: MedicationsUncheckedUpdateManyWithoutVisualTypeNestedInput
  }

  export type VisualTypesCreateManyInput = {
    visualId?: string
    visual: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisualTypesUpdateManyMutationInput = {
    visualId?: StringFieldUpdateOperationsInput | string
    visual?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisualTypesUncheckedUpdateManyInput = {
    visualId?: StringFieldUpdateOperationsInput | string
    visual?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SoundTypesCreateInput = {
    soundId?: string
    sound: string
    createdAt?: Date | string
    updatedAt?: Date | string
    medications?: MedicationsCreateNestedManyWithoutSoundTypeInput
  }

  export type SoundTypesUncheckedCreateInput = {
    soundId?: string
    sound: string
    createdAt?: Date | string
    updatedAt?: Date | string
    medications?: MedicationsUncheckedCreateNestedManyWithoutSoundTypeInput
  }

  export type SoundTypesUpdateInput = {
    soundId?: StringFieldUpdateOperationsInput | string
    sound?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: MedicationsUpdateManyWithoutSoundTypeNestedInput
  }

  export type SoundTypesUncheckedUpdateInput = {
    soundId?: StringFieldUpdateOperationsInput | string
    sound?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: MedicationsUncheckedUpdateManyWithoutSoundTypeNestedInput
  }

  export type SoundTypesCreateManyInput = {
    soundId?: string
    sound: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SoundTypesUpdateManyMutationInput = {
    soundId?: StringFieldUpdateOperationsInput | string
    sound?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SoundTypesUncheckedUpdateManyInput = {
    soundId?: StringFieldUpdateOperationsInput | string
    sound?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type VerificationCodesListRelationFilter = {
    every?: VerificationCodesWhereInput
    some?: VerificationCodesWhereInput
    none?: VerificationCodesWhereInput
  }

  export type MedicationsListRelationFilter = {
    every?: MedicationsWhereInput
    some?: MedicationsWhereInput
    none?: MedicationsWhereInput
  }

  export type SharingsListRelationFilter = {
    every?: SharingsWhereInput
    some?: SharingsWhereInput
    none?: SharingsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VerificationCodesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SharingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    userId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    hash?: SortOrder
    image?: SortOrder
    acceptedTosAt?: SortOrder
    accountConfirmedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    userId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    hash?: SortOrder
    image?: SortOrder
    acceptedTosAt?: SortOrder
    accountConfirmedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    userId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    hash?: SortOrder
    image?: SortOrder
    acceptedTosAt?: SortOrder
    accountConfirmedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type VerificationCodesCountOrderByAggregateInput = {
    codeId?: SortOrder
    userId?: SortOrder
    value?: SortOrder
    codeType?: SortOrder
    confirmedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationCodesMaxOrderByAggregateInput = {
    codeId?: SortOrder
    userId?: SortOrder
    value?: SortOrder
    codeType?: SortOrder
    confirmedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationCodesMinOrderByAggregateInput = {
    codeId?: SortOrder
    userId?: SortOrder
    value?: SortOrder
    codeType?: SortOrder
    confirmedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type VisualTypesScalarRelationFilter = {
    is?: VisualTypesWhereInput
    isNot?: VisualTypesWhereInput
  }

  export type SoundTypesScalarRelationFilter = {
    is?: SoundTypesWhereInput
    isNot?: SoundTypesWhereInput
  }

  export type NotificationsListRelationFilter = {
    every?: NotificationsWhereInput
    some?: NotificationsWhereInput
    none?: NotificationsWhereInput
  }

  export type AnnotationsListRelationFilter = {
    every?: AnnotationsWhereInput
    some?: AnnotationsWhereInput
    none?: AnnotationsWhereInput
  }

  export type NotificationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnnotationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicationsCountOrderByAggregateInput = {
    medicationId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    dose?: SortOrder
    description?: SortOrder
    visualTypeId?: SortOrder
    soundTypeId?: SortOrder
    alertPeriodInHours?: SortOrder
    endTreatmentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicationsAvgOrderByAggregateInput = {
    alertPeriodInHours?: SortOrder
  }

  export type MedicationsMaxOrderByAggregateInput = {
    medicationId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    dose?: SortOrder
    description?: SortOrder
    visualTypeId?: SortOrder
    soundTypeId?: SortOrder
    alertPeriodInHours?: SortOrder
    endTreatmentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicationsMinOrderByAggregateInput = {
    medicationId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    dose?: SortOrder
    description?: SortOrder
    visualTypeId?: SortOrder
    soundTypeId?: SortOrder
    alertPeriodInHours?: SortOrder
    endTreatmentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicationsSumOrderByAggregateInput = {
    alertPeriodInHours?: SortOrder
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

  export type MedicationsScalarRelationFilter = {
    is?: MedicationsWhereInput
    isNot?: MedicationsWhereInput
  }

  export type NotificationsCountOrderByAggregateInput = {
    notificationId?: SortOrder
    medicationId?: SortOrder
    name?: SortOrder
    alertAt?: SortOrder
    soundId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationsAvgOrderByAggregateInput = {
    soundId?: SortOrder
  }

  export type NotificationsMaxOrderByAggregateInput = {
    notificationId?: SortOrder
    medicationId?: SortOrder
    name?: SortOrder
    alertAt?: SortOrder
    soundId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationsMinOrderByAggregateInput = {
    notificationId?: SortOrder
    medicationId?: SortOrder
    name?: SortOrder
    alertAt?: SortOrder
    soundId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationsSumOrderByAggregateInput = {
    soundId?: SortOrder
  }

  export type AnnotationsCountOrderByAggregateInput = {
    annotationId?: SortOrder
    medicationId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnotationsMaxOrderByAggregateInput = {
    annotationId?: SortOrder
    medicationId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnotationsMinOrderByAggregateInput = {
    annotationId?: SortOrder
    medicationId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SharingsCountOrderByAggregateInput = {
    sharingId?: SortOrder
    patientId?: SortOrder
    caretakerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SharingsMaxOrderByAggregateInput = {
    sharingId?: SortOrder
    patientId?: SortOrder
    caretakerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SharingsMinOrderByAggregateInput = {
    sharingId?: SortOrder
    patientId?: SortOrder
    caretakerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisualTypesCountOrderByAggregateInput = {
    visualId?: SortOrder
    visual?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisualTypesMaxOrderByAggregateInput = {
    visualId?: SortOrder
    visual?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisualTypesMinOrderByAggregateInput = {
    visualId?: SortOrder
    visual?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SoundTypesCountOrderByAggregateInput = {
    soundId?: SortOrder
    sound?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SoundTypesMaxOrderByAggregateInput = {
    soundId?: SortOrder
    sound?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SoundTypesMinOrderByAggregateInput = {
    soundId?: SortOrder
    sound?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationCodesCreateNestedManyWithoutUserInput = {
    create?: XOR<VerificationCodesCreateWithoutUserInput, VerificationCodesUncheckedCreateWithoutUserInput> | VerificationCodesCreateWithoutUserInput[] | VerificationCodesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCodesCreateOrConnectWithoutUserInput | VerificationCodesCreateOrConnectWithoutUserInput[]
    createMany?: VerificationCodesCreateManyUserInputEnvelope
    connect?: VerificationCodesWhereUniqueInput | VerificationCodesWhereUniqueInput[]
  }

  export type MedicationsCreateNestedManyWithoutUserInput = {
    create?: XOR<MedicationsCreateWithoutUserInput, MedicationsUncheckedCreateWithoutUserInput> | MedicationsCreateWithoutUserInput[] | MedicationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicationsCreateOrConnectWithoutUserInput | MedicationsCreateOrConnectWithoutUserInput[]
    createMany?: MedicationsCreateManyUserInputEnvelope
    connect?: MedicationsWhereUniqueInput | MedicationsWhereUniqueInput[]
  }

  export type SharingsCreateNestedManyWithoutPatientInput = {
    create?: XOR<SharingsCreateWithoutPatientInput, SharingsUncheckedCreateWithoutPatientInput> | SharingsCreateWithoutPatientInput[] | SharingsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: SharingsCreateOrConnectWithoutPatientInput | SharingsCreateOrConnectWithoutPatientInput[]
    createMany?: SharingsCreateManyPatientInputEnvelope
    connect?: SharingsWhereUniqueInput | SharingsWhereUniqueInput[]
  }

  export type SharingsCreateNestedManyWithoutCaretakerInput = {
    create?: XOR<SharingsCreateWithoutCaretakerInput, SharingsUncheckedCreateWithoutCaretakerInput> | SharingsCreateWithoutCaretakerInput[] | SharingsUncheckedCreateWithoutCaretakerInput[]
    connectOrCreate?: SharingsCreateOrConnectWithoutCaretakerInput | SharingsCreateOrConnectWithoutCaretakerInput[]
    createMany?: SharingsCreateManyCaretakerInputEnvelope
    connect?: SharingsWhereUniqueInput | SharingsWhereUniqueInput[]
  }

  export type VerificationCodesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VerificationCodesCreateWithoutUserInput, VerificationCodesUncheckedCreateWithoutUserInput> | VerificationCodesCreateWithoutUserInput[] | VerificationCodesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCodesCreateOrConnectWithoutUserInput | VerificationCodesCreateOrConnectWithoutUserInput[]
    createMany?: VerificationCodesCreateManyUserInputEnvelope
    connect?: VerificationCodesWhereUniqueInput | VerificationCodesWhereUniqueInput[]
  }

  export type MedicationsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MedicationsCreateWithoutUserInput, MedicationsUncheckedCreateWithoutUserInput> | MedicationsCreateWithoutUserInput[] | MedicationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicationsCreateOrConnectWithoutUserInput | MedicationsCreateOrConnectWithoutUserInput[]
    createMany?: MedicationsCreateManyUserInputEnvelope
    connect?: MedicationsWhereUniqueInput | MedicationsWhereUniqueInput[]
  }

  export type SharingsUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<SharingsCreateWithoutPatientInput, SharingsUncheckedCreateWithoutPatientInput> | SharingsCreateWithoutPatientInput[] | SharingsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: SharingsCreateOrConnectWithoutPatientInput | SharingsCreateOrConnectWithoutPatientInput[]
    createMany?: SharingsCreateManyPatientInputEnvelope
    connect?: SharingsWhereUniqueInput | SharingsWhereUniqueInput[]
  }

  export type SharingsUncheckedCreateNestedManyWithoutCaretakerInput = {
    create?: XOR<SharingsCreateWithoutCaretakerInput, SharingsUncheckedCreateWithoutCaretakerInput> | SharingsCreateWithoutCaretakerInput[] | SharingsUncheckedCreateWithoutCaretakerInput[]
    connectOrCreate?: SharingsCreateOrConnectWithoutCaretakerInput | SharingsCreateOrConnectWithoutCaretakerInput[]
    createMany?: SharingsCreateManyCaretakerInputEnvelope
    connect?: SharingsWhereUniqueInput | SharingsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type VerificationCodesUpdateManyWithoutUserNestedInput = {
    create?: XOR<VerificationCodesCreateWithoutUserInput, VerificationCodesUncheckedCreateWithoutUserInput> | VerificationCodesCreateWithoutUserInput[] | VerificationCodesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCodesCreateOrConnectWithoutUserInput | VerificationCodesCreateOrConnectWithoutUserInput[]
    upsert?: VerificationCodesUpsertWithWhereUniqueWithoutUserInput | VerificationCodesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VerificationCodesCreateManyUserInputEnvelope
    set?: VerificationCodesWhereUniqueInput | VerificationCodesWhereUniqueInput[]
    disconnect?: VerificationCodesWhereUniqueInput | VerificationCodesWhereUniqueInput[]
    delete?: VerificationCodesWhereUniqueInput | VerificationCodesWhereUniqueInput[]
    connect?: VerificationCodesWhereUniqueInput | VerificationCodesWhereUniqueInput[]
    update?: VerificationCodesUpdateWithWhereUniqueWithoutUserInput | VerificationCodesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VerificationCodesUpdateManyWithWhereWithoutUserInput | VerificationCodesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VerificationCodesScalarWhereInput | VerificationCodesScalarWhereInput[]
  }

  export type MedicationsUpdateManyWithoutUserNestedInput = {
    create?: XOR<MedicationsCreateWithoutUserInput, MedicationsUncheckedCreateWithoutUserInput> | MedicationsCreateWithoutUserInput[] | MedicationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicationsCreateOrConnectWithoutUserInput | MedicationsCreateOrConnectWithoutUserInput[]
    upsert?: MedicationsUpsertWithWhereUniqueWithoutUserInput | MedicationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MedicationsCreateManyUserInputEnvelope
    set?: MedicationsWhereUniqueInput | MedicationsWhereUniqueInput[]
    disconnect?: MedicationsWhereUniqueInput | MedicationsWhereUniqueInput[]
    delete?: MedicationsWhereUniqueInput | MedicationsWhereUniqueInput[]
    connect?: MedicationsWhereUniqueInput | MedicationsWhereUniqueInput[]
    update?: MedicationsUpdateWithWhereUniqueWithoutUserInput | MedicationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MedicationsUpdateManyWithWhereWithoutUserInput | MedicationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MedicationsScalarWhereInput | MedicationsScalarWhereInput[]
  }

  export type SharingsUpdateManyWithoutPatientNestedInput = {
    create?: XOR<SharingsCreateWithoutPatientInput, SharingsUncheckedCreateWithoutPatientInput> | SharingsCreateWithoutPatientInput[] | SharingsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: SharingsCreateOrConnectWithoutPatientInput | SharingsCreateOrConnectWithoutPatientInput[]
    upsert?: SharingsUpsertWithWhereUniqueWithoutPatientInput | SharingsUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: SharingsCreateManyPatientInputEnvelope
    set?: SharingsWhereUniqueInput | SharingsWhereUniqueInput[]
    disconnect?: SharingsWhereUniqueInput | SharingsWhereUniqueInput[]
    delete?: SharingsWhereUniqueInput | SharingsWhereUniqueInput[]
    connect?: SharingsWhereUniqueInput | SharingsWhereUniqueInput[]
    update?: SharingsUpdateWithWhereUniqueWithoutPatientInput | SharingsUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: SharingsUpdateManyWithWhereWithoutPatientInput | SharingsUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: SharingsScalarWhereInput | SharingsScalarWhereInput[]
  }

  export type SharingsUpdateManyWithoutCaretakerNestedInput = {
    create?: XOR<SharingsCreateWithoutCaretakerInput, SharingsUncheckedCreateWithoutCaretakerInput> | SharingsCreateWithoutCaretakerInput[] | SharingsUncheckedCreateWithoutCaretakerInput[]
    connectOrCreate?: SharingsCreateOrConnectWithoutCaretakerInput | SharingsCreateOrConnectWithoutCaretakerInput[]
    upsert?: SharingsUpsertWithWhereUniqueWithoutCaretakerInput | SharingsUpsertWithWhereUniqueWithoutCaretakerInput[]
    createMany?: SharingsCreateManyCaretakerInputEnvelope
    set?: SharingsWhereUniqueInput | SharingsWhereUniqueInput[]
    disconnect?: SharingsWhereUniqueInput | SharingsWhereUniqueInput[]
    delete?: SharingsWhereUniqueInput | SharingsWhereUniqueInput[]
    connect?: SharingsWhereUniqueInput | SharingsWhereUniqueInput[]
    update?: SharingsUpdateWithWhereUniqueWithoutCaretakerInput | SharingsUpdateWithWhereUniqueWithoutCaretakerInput[]
    updateMany?: SharingsUpdateManyWithWhereWithoutCaretakerInput | SharingsUpdateManyWithWhereWithoutCaretakerInput[]
    deleteMany?: SharingsScalarWhereInput | SharingsScalarWhereInput[]
  }

  export type VerificationCodesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VerificationCodesCreateWithoutUserInput, VerificationCodesUncheckedCreateWithoutUserInput> | VerificationCodesCreateWithoutUserInput[] | VerificationCodesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCodesCreateOrConnectWithoutUserInput | VerificationCodesCreateOrConnectWithoutUserInput[]
    upsert?: VerificationCodesUpsertWithWhereUniqueWithoutUserInput | VerificationCodesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VerificationCodesCreateManyUserInputEnvelope
    set?: VerificationCodesWhereUniqueInput | VerificationCodesWhereUniqueInput[]
    disconnect?: VerificationCodesWhereUniqueInput | VerificationCodesWhereUniqueInput[]
    delete?: VerificationCodesWhereUniqueInput | VerificationCodesWhereUniqueInput[]
    connect?: VerificationCodesWhereUniqueInput | VerificationCodesWhereUniqueInput[]
    update?: VerificationCodesUpdateWithWhereUniqueWithoutUserInput | VerificationCodesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VerificationCodesUpdateManyWithWhereWithoutUserInput | VerificationCodesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VerificationCodesScalarWhereInput | VerificationCodesScalarWhereInput[]
  }

  export type MedicationsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MedicationsCreateWithoutUserInput, MedicationsUncheckedCreateWithoutUserInput> | MedicationsCreateWithoutUserInput[] | MedicationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MedicationsCreateOrConnectWithoutUserInput | MedicationsCreateOrConnectWithoutUserInput[]
    upsert?: MedicationsUpsertWithWhereUniqueWithoutUserInput | MedicationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MedicationsCreateManyUserInputEnvelope
    set?: MedicationsWhereUniqueInput | MedicationsWhereUniqueInput[]
    disconnect?: MedicationsWhereUniqueInput | MedicationsWhereUniqueInput[]
    delete?: MedicationsWhereUniqueInput | MedicationsWhereUniqueInput[]
    connect?: MedicationsWhereUniqueInput | MedicationsWhereUniqueInput[]
    update?: MedicationsUpdateWithWhereUniqueWithoutUserInput | MedicationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MedicationsUpdateManyWithWhereWithoutUserInput | MedicationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MedicationsScalarWhereInput | MedicationsScalarWhereInput[]
  }

  export type SharingsUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<SharingsCreateWithoutPatientInput, SharingsUncheckedCreateWithoutPatientInput> | SharingsCreateWithoutPatientInput[] | SharingsUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: SharingsCreateOrConnectWithoutPatientInput | SharingsCreateOrConnectWithoutPatientInput[]
    upsert?: SharingsUpsertWithWhereUniqueWithoutPatientInput | SharingsUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: SharingsCreateManyPatientInputEnvelope
    set?: SharingsWhereUniqueInput | SharingsWhereUniqueInput[]
    disconnect?: SharingsWhereUniqueInput | SharingsWhereUniqueInput[]
    delete?: SharingsWhereUniqueInput | SharingsWhereUniqueInput[]
    connect?: SharingsWhereUniqueInput | SharingsWhereUniqueInput[]
    update?: SharingsUpdateWithWhereUniqueWithoutPatientInput | SharingsUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: SharingsUpdateManyWithWhereWithoutPatientInput | SharingsUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: SharingsScalarWhereInput | SharingsScalarWhereInput[]
  }

  export type SharingsUncheckedUpdateManyWithoutCaretakerNestedInput = {
    create?: XOR<SharingsCreateWithoutCaretakerInput, SharingsUncheckedCreateWithoutCaretakerInput> | SharingsCreateWithoutCaretakerInput[] | SharingsUncheckedCreateWithoutCaretakerInput[]
    connectOrCreate?: SharingsCreateOrConnectWithoutCaretakerInput | SharingsCreateOrConnectWithoutCaretakerInput[]
    upsert?: SharingsUpsertWithWhereUniqueWithoutCaretakerInput | SharingsUpsertWithWhereUniqueWithoutCaretakerInput[]
    createMany?: SharingsCreateManyCaretakerInputEnvelope
    set?: SharingsWhereUniqueInput | SharingsWhereUniqueInput[]
    disconnect?: SharingsWhereUniqueInput | SharingsWhereUniqueInput[]
    delete?: SharingsWhereUniqueInput | SharingsWhereUniqueInput[]
    connect?: SharingsWhereUniqueInput | SharingsWhereUniqueInput[]
    update?: SharingsUpdateWithWhereUniqueWithoutCaretakerInput | SharingsUpdateWithWhereUniqueWithoutCaretakerInput[]
    updateMany?: SharingsUpdateManyWithWhereWithoutCaretakerInput | SharingsUpdateManyWithWhereWithoutCaretakerInput[]
    deleteMany?: SharingsScalarWhereInput | SharingsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutVerificationCodesInput = {
    create?: XOR<UsersCreateWithoutVerificationCodesInput, UsersUncheckedCreateWithoutVerificationCodesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutVerificationCodesInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutVerificationCodesNestedInput = {
    create?: XOR<UsersCreateWithoutVerificationCodesInput, UsersUncheckedCreateWithoutVerificationCodesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutVerificationCodesInput
    upsert?: UsersUpsertWithoutVerificationCodesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutVerificationCodesInput, UsersUpdateWithoutVerificationCodesInput>, UsersUncheckedUpdateWithoutVerificationCodesInput>
  }

  export type UsersCreateNestedOneWithoutMedicationsInput = {
    create?: XOR<UsersCreateWithoutMedicationsInput, UsersUncheckedCreateWithoutMedicationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMedicationsInput
    connect?: UsersWhereUniqueInput
  }

  export type VisualTypesCreateNestedOneWithoutMedicationsInput = {
    create?: XOR<VisualTypesCreateWithoutMedicationsInput, VisualTypesUncheckedCreateWithoutMedicationsInput>
    connectOrCreate?: VisualTypesCreateOrConnectWithoutMedicationsInput
    connect?: VisualTypesWhereUniqueInput
  }

  export type SoundTypesCreateNestedOneWithoutMedicationsInput = {
    create?: XOR<SoundTypesCreateWithoutMedicationsInput, SoundTypesUncheckedCreateWithoutMedicationsInput>
    connectOrCreate?: SoundTypesCreateOrConnectWithoutMedicationsInput
    connect?: SoundTypesWhereUniqueInput
  }

  export type NotificationsCreateNestedManyWithoutMedicationInput = {
    create?: XOR<NotificationsCreateWithoutMedicationInput, NotificationsUncheckedCreateWithoutMedicationInput> | NotificationsCreateWithoutMedicationInput[] | NotificationsUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutMedicationInput | NotificationsCreateOrConnectWithoutMedicationInput[]
    createMany?: NotificationsCreateManyMedicationInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type AnnotationsCreateNestedManyWithoutMedicationInput = {
    create?: XOR<AnnotationsCreateWithoutMedicationInput, AnnotationsUncheckedCreateWithoutMedicationInput> | AnnotationsCreateWithoutMedicationInput[] | AnnotationsUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: AnnotationsCreateOrConnectWithoutMedicationInput | AnnotationsCreateOrConnectWithoutMedicationInput[]
    createMany?: AnnotationsCreateManyMedicationInputEnvelope
    connect?: AnnotationsWhereUniqueInput | AnnotationsWhereUniqueInput[]
  }

  export type NotificationsUncheckedCreateNestedManyWithoutMedicationInput = {
    create?: XOR<NotificationsCreateWithoutMedicationInput, NotificationsUncheckedCreateWithoutMedicationInput> | NotificationsCreateWithoutMedicationInput[] | NotificationsUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutMedicationInput | NotificationsCreateOrConnectWithoutMedicationInput[]
    createMany?: NotificationsCreateManyMedicationInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type AnnotationsUncheckedCreateNestedManyWithoutMedicationInput = {
    create?: XOR<AnnotationsCreateWithoutMedicationInput, AnnotationsUncheckedCreateWithoutMedicationInput> | AnnotationsCreateWithoutMedicationInput[] | AnnotationsUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: AnnotationsCreateOrConnectWithoutMedicationInput | AnnotationsCreateOrConnectWithoutMedicationInput[]
    createMany?: AnnotationsCreateManyMedicationInputEnvelope
    connect?: AnnotationsWhereUniqueInput | AnnotationsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsersUpdateOneRequiredWithoutMedicationsNestedInput = {
    create?: XOR<UsersCreateWithoutMedicationsInput, UsersUncheckedCreateWithoutMedicationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMedicationsInput
    upsert?: UsersUpsertWithoutMedicationsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutMedicationsInput, UsersUpdateWithoutMedicationsInput>, UsersUncheckedUpdateWithoutMedicationsInput>
  }

  export type VisualTypesUpdateOneRequiredWithoutMedicationsNestedInput = {
    create?: XOR<VisualTypesCreateWithoutMedicationsInput, VisualTypesUncheckedCreateWithoutMedicationsInput>
    connectOrCreate?: VisualTypesCreateOrConnectWithoutMedicationsInput
    upsert?: VisualTypesUpsertWithoutMedicationsInput
    connect?: VisualTypesWhereUniqueInput
    update?: XOR<XOR<VisualTypesUpdateToOneWithWhereWithoutMedicationsInput, VisualTypesUpdateWithoutMedicationsInput>, VisualTypesUncheckedUpdateWithoutMedicationsInput>
  }

  export type SoundTypesUpdateOneRequiredWithoutMedicationsNestedInput = {
    create?: XOR<SoundTypesCreateWithoutMedicationsInput, SoundTypesUncheckedCreateWithoutMedicationsInput>
    connectOrCreate?: SoundTypesCreateOrConnectWithoutMedicationsInput
    upsert?: SoundTypesUpsertWithoutMedicationsInput
    connect?: SoundTypesWhereUniqueInput
    update?: XOR<XOR<SoundTypesUpdateToOneWithWhereWithoutMedicationsInput, SoundTypesUpdateWithoutMedicationsInput>, SoundTypesUncheckedUpdateWithoutMedicationsInput>
  }

  export type NotificationsUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<NotificationsCreateWithoutMedicationInput, NotificationsUncheckedCreateWithoutMedicationInput> | NotificationsCreateWithoutMedicationInput[] | NotificationsUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutMedicationInput | NotificationsCreateOrConnectWithoutMedicationInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutMedicationInput | NotificationsUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: NotificationsCreateManyMedicationInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutMedicationInput | NotificationsUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutMedicationInput | NotificationsUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type AnnotationsUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<AnnotationsCreateWithoutMedicationInput, AnnotationsUncheckedCreateWithoutMedicationInput> | AnnotationsCreateWithoutMedicationInput[] | AnnotationsUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: AnnotationsCreateOrConnectWithoutMedicationInput | AnnotationsCreateOrConnectWithoutMedicationInput[]
    upsert?: AnnotationsUpsertWithWhereUniqueWithoutMedicationInput | AnnotationsUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: AnnotationsCreateManyMedicationInputEnvelope
    set?: AnnotationsWhereUniqueInput | AnnotationsWhereUniqueInput[]
    disconnect?: AnnotationsWhereUniqueInput | AnnotationsWhereUniqueInput[]
    delete?: AnnotationsWhereUniqueInput | AnnotationsWhereUniqueInput[]
    connect?: AnnotationsWhereUniqueInput | AnnotationsWhereUniqueInput[]
    update?: AnnotationsUpdateWithWhereUniqueWithoutMedicationInput | AnnotationsUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: AnnotationsUpdateManyWithWhereWithoutMedicationInput | AnnotationsUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: AnnotationsScalarWhereInput | AnnotationsScalarWhereInput[]
  }

  export type NotificationsUncheckedUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<NotificationsCreateWithoutMedicationInput, NotificationsUncheckedCreateWithoutMedicationInput> | NotificationsCreateWithoutMedicationInput[] | NotificationsUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutMedicationInput | NotificationsCreateOrConnectWithoutMedicationInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutMedicationInput | NotificationsUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: NotificationsCreateManyMedicationInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutMedicationInput | NotificationsUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutMedicationInput | NotificationsUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type AnnotationsUncheckedUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<AnnotationsCreateWithoutMedicationInput, AnnotationsUncheckedCreateWithoutMedicationInput> | AnnotationsCreateWithoutMedicationInput[] | AnnotationsUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: AnnotationsCreateOrConnectWithoutMedicationInput | AnnotationsCreateOrConnectWithoutMedicationInput[]
    upsert?: AnnotationsUpsertWithWhereUniqueWithoutMedicationInput | AnnotationsUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: AnnotationsCreateManyMedicationInputEnvelope
    set?: AnnotationsWhereUniqueInput | AnnotationsWhereUniqueInput[]
    disconnect?: AnnotationsWhereUniqueInput | AnnotationsWhereUniqueInput[]
    delete?: AnnotationsWhereUniqueInput | AnnotationsWhereUniqueInput[]
    connect?: AnnotationsWhereUniqueInput | AnnotationsWhereUniqueInput[]
    update?: AnnotationsUpdateWithWhereUniqueWithoutMedicationInput | AnnotationsUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: AnnotationsUpdateManyWithWhereWithoutMedicationInput | AnnotationsUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: AnnotationsScalarWhereInput | AnnotationsScalarWhereInput[]
  }

  export type MedicationsCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<MedicationsCreateWithoutNotificationsInput, MedicationsUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: MedicationsCreateOrConnectWithoutNotificationsInput
    connect?: MedicationsWhereUniqueInput
  }

  export type MedicationsUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<MedicationsCreateWithoutNotificationsInput, MedicationsUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: MedicationsCreateOrConnectWithoutNotificationsInput
    upsert?: MedicationsUpsertWithoutNotificationsInput
    connect?: MedicationsWhereUniqueInput
    update?: XOR<XOR<MedicationsUpdateToOneWithWhereWithoutNotificationsInput, MedicationsUpdateWithoutNotificationsInput>, MedicationsUncheckedUpdateWithoutNotificationsInput>
  }

  export type MedicationsCreateNestedOneWithoutAnnotationsInput = {
    create?: XOR<MedicationsCreateWithoutAnnotationsInput, MedicationsUncheckedCreateWithoutAnnotationsInput>
    connectOrCreate?: MedicationsCreateOrConnectWithoutAnnotationsInput
    connect?: MedicationsWhereUniqueInput
  }

  export type MedicationsUpdateOneRequiredWithoutAnnotationsNestedInput = {
    create?: XOR<MedicationsCreateWithoutAnnotationsInput, MedicationsUncheckedCreateWithoutAnnotationsInput>
    connectOrCreate?: MedicationsCreateOrConnectWithoutAnnotationsInput
    upsert?: MedicationsUpsertWithoutAnnotationsInput
    connect?: MedicationsWhereUniqueInput
    update?: XOR<XOR<MedicationsUpdateToOneWithWhereWithoutAnnotationsInput, MedicationsUpdateWithoutAnnotationsInput>, MedicationsUncheckedUpdateWithoutAnnotationsInput>
  }

  export type UsersCreateNestedOneWithoutPatientSharingsInput = {
    create?: XOR<UsersCreateWithoutPatientSharingsInput, UsersUncheckedCreateWithoutPatientSharingsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPatientSharingsInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutCaretakerSharingsInput = {
    create?: XOR<UsersCreateWithoutCaretakerSharingsInput, UsersUncheckedCreateWithoutCaretakerSharingsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCaretakerSharingsInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutPatientSharingsNestedInput = {
    create?: XOR<UsersCreateWithoutPatientSharingsInput, UsersUncheckedCreateWithoutPatientSharingsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPatientSharingsInput
    upsert?: UsersUpsertWithoutPatientSharingsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutPatientSharingsInput, UsersUpdateWithoutPatientSharingsInput>, UsersUncheckedUpdateWithoutPatientSharingsInput>
  }

  export type UsersUpdateOneRequiredWithoutCaretakerSharingsNestedInput = {
    create?: XOR<UsersCreateWithoutCaretakerSharingsInput, UsersUncheckedCreateWithoutCaretakerSharingsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCaretakerSharingsInput
    upsert?: UsersUpsertWithoutCaretakerSharingsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCaretakerSharingsInput, UsersUpdateWithoutCaretakerSharingsInput>, UsersUncheckedUpdateWithoutCaretakerSharingsInput>
  }

  export type MedicationsCreateNestedManyWithoutVisualTypeInput = {
    create?: XOR<MedicationsCreateWithoutVisualTypeInput, MedicationsUncheckedCreateWithoutVisualTypeInput> | MedicationsCreateWithoutVisualTypeInput[] | MedicationsUncheckedCreateWithoutVisualTypeInput[]
    connectOrCreate?: MedicationsCreateOrConnectWithoutVisualTypeInput | MedicationsCreateOrConnectWithoutVisualTypeInput[]
    createMany?: MedicationsCreateManyVisualTypeInputEnvelope
    connect?: MedicationsWhereUniqueInput | MedicationsWhereUniqueInput[]
  }

  export type MedicationsUncheckedCreateNestedManyWithoutVisualTypeInput = {
    create?: XOR<MedicationsCreateWithoutVisualTypeInput, MedicationsUncheckedCreateWithoutVisualTypeInput> | MedicationsCreateWithoutVisualTypeInput[] | MedicationsUncheckedCreateWithoutVisualTypeInput[]
    connectOrCreate?: MedicationsCreateOrConnectWithoutVisualTypeInput | MedicationsCreateOrConnectWithoutVisualTypeInput[]
    createMany?: MedicationsCreateManyVisualTypeInputEnvelope
    connect?: MedicationsWhereUniqueInput | MedicationsWhereUniqueInput[]
  }

  export type MedicationsUpdateManyWithoutVisualTypeNestedInput = {
    create?: XOR<MedicationsCreateWithoutVisualTypeInput, MedicationsUncheckedCreateWithoutVisualTypeInput> | MedicationsCreateWithoutVisualTypeInput[] | MedicationsUncheckedCreateWithoutVisualTypeInput[]
    connectOrCreate?: MedicationsCreateOrConnectWithoutVisualTypeInput | MedicationsCreateOrConnectWithoutVisualTypeInput[]
    upsert?: MedicationsUpsertWithWhereUniqueWithoutVisualTypeInput | MedicationsUpsertWithWhereUniqueWithoutVisualTypeInput[]
    createMany?: MedicationsCreateManyVisualTypeInputEnvelope
    set?: MedicationsWhereUniqueInput | MedicationsWhereUniqueInput[]
    disconnect?: MedicationsWhereUniqueInput | MedicationsWhereUniqueInput[]
    delete?: MedicationsWhereUniqueInput | MedicationsWhereUniqueInput[]
    connect?: MedicationsWhereUniqueInput | MedicationsWhereUniqueInput[]
    update?: MedicationsUpdateWithWhereUniqueWithoutVisualTypeInput | MedicationsUpdateWithWhereUniqueWithoutVisualTypeInput[]
    updateMany?: MedicationsUpdateManyWithWhereWithoutVisualTypeInput | MedicationsUpdateManyWithWhereWithoutVisualTypeInput[]
    deleteMany?: MedicationsScalarWhereInput | MedicationsScalarWhereInput[]
  }

  export type MedicationsUncheckedUpdateManyWithoutVisualTypeNestedInput = {
    create?: XOR<MedicationsCreateWithoutVisualTypeInput, MedicationsUncheckedCreateWithoutVisualTypeInput> | MedicationsCreateWithoutVisualTypeInput[] | MedicationsUncheckedCreateWithoutVisualTypeInput[]
    connectOrCreate?: MedicationsCreateOrConnectWithoutVisualTypeInput | MedicationsCreateOrConnectWithoutVisualTypeInput[]
    upsert?: MedicationsUpsertWithWhereUniqueWithoutVisualTypeInput | MedicationsUpsertWithWhereUniqueWithoutVisualTypeInput[]
    createMany?: MedicationsCreateManyVisualTypeInputEnvelope
    set?: MedicationsWhereUniqueInput | MedicationsWhereUniqueInput[]
    disconnect?: MedicationsWhereUniqueInput | MedicationsWhereUniqueInput[]
    delete?: MedicationsWhereUniqueInput | MedicationsWhereUniqueInput[]
    connect?: MedicationsWhereUniqueInput | MedicationsWhereUniqueInput[]
    update?: MedicationsUpdateWithWhereUniqueWithoutVisualTypeInput | MedicationsUpdateWithWhereUniqueWithoutVisualTypeInput[]
    updateMany?: MedicationsUpdateManyWithWhereWithoutVisualTypeInput | MedicationsUpdateManyWithWhereWithoutVisualTypeInput[]
    deleteMany?: MedicationsScalarWhereInput | MedicationsScalarWhereInput[]
  }

  export type MedicationsCreateNestedManyWithoutSoundTypeInput = {
    create?: XOR<MedicationsCreateWithoutSoundTypeInput, MedicationsUncheckedCreateWithoutSoundTypeInput> | MedicationsCreateWithoutSoundTypeInput[] | MedicationsUncheckedCreateWithoutSoundTypeInput[]
    connectOrCreate?: MedicationsCreateOrConnectWithoutSoundTypeInput | MedicationsCreateOrConnectWithoutSoundTypeInput[]
    createMany?: MedicationsCreateManySoundTypeInputEnvelope
    connect?: MedicationsWhereUniqueInput | MedicationsWhereUniqueInput[]
  }

  export type MedicationsUncheckedCreateNestedManyWithoutSoundTypeInput = {
    create?: XOR<MedicationsCreateWithoutSoundTypeInput, MedicationsUncheckedCreateWithoutSoundTypeInput> | MedicationsCreateWithoutSoundTypeInput[] | MedicationsUncheckedCreateWithoutSoundTypeInput[]
    connectOrCreate?: MedicationsCreateOrConnectWithoutSoundTypeInput | MedicationsCreateOrConnectWithoutSoundTypeInput[]
    createMany?: MedicationsCreateManySoundTypeInputEnvelope
    connect?: MedicationsWhereUniqueInput | MedicationsWhereUniqueInput[]
  }

  export type MedicationsUpdateManyWithoutSoundTypeNestedInput = {
    create?: XOR<MedicationsCreateWithoutSoundTypeInput, MedicationsUncheckedCreateWithoutSoundTypeInput> | MedicationsCreateWithoutSoundTypeInput[] | MedicationsUncheckedCreateWithoutSoundTypeInput[]
    connectOrCreate?: MedicationsCreateOrConnectWithoutSoundTypeInput | MedicationsCreateOrConnectWithoutSoundTypeInput[]
    upsert?: MedicationsUpsertWithWhereUniqueWithoutSoundTypeInput | MedicationsUpsertWithWhereUniqueWithoutSoundTypeInput[]
    createMany?: MedicationsCreateManySoundTypeInputEnvelope
    set?: MedicationsWhereUniqueInput | MedicationsWhereUniqueInput[]
    disconnect?: MedicationsWhereUniqueInput | MedicationsWhereUniqueInput[]
    delete?: MedicationsWhereUniqueInput | MedicationsWhereUniqueInput[]
    connect?: MedicationsWhereUniqueInput | MedicationsWhereUniqueInput[]
    update?: MedicationsUpdateWithWhereUniqueWithoutSoundTypeInput | MedicationsUpdateWithWhereUniqueWithoutSoundTypeInput[]
    updateMany?: MedicationsUpdateManyWithWhereWithoutSoundTypeInput | MedicationsUpdateManyWithWhereWithoutSoundTypeInput[]
    deleteMany?: MedicationsScalarWhereInput | MedicationsScalarWhereInput[]
  }

  export type MedicationsUncheckedUpdateManyWithoutSoundTypeNestedInput = {
    create?: XOR<MedicationsCreateWithoutSoundTypeInput, MedicationsUncheckedCreateWithoutSoundTypeInput> | MedicationsCreateWithoutSoundTypeInput[] | MedicationsUncheckedCreateWithoutSoundTypeInput[]
    connectOrCreate?: MedicationsCreateOrConnectWithoutSoundTypeInput | MedicationsCreateOrConnectWithoutSoundTypeInput[]
    upsert?: MedicationsUpsertWithWhereUniqueWithoutSoundTypeInput | MedicationsUpsertWithWhereUniqueWithoutSoundTypeInput[]
    createMany?: MedicationsCreateManySoundTypeInputEnvelope
    set?: MedicationsWhereUniqueInput | MedicationsWhereUniqueInput[]
    disconnect?: MedicationsWhereUniqueInput | MedicationsWhereUniqueInput[]
    delete?: MedicationsWhereUniqueInput | MedicationsWhereUniqueInput[]
    connect?: MedicationsWhereUniqueInput | MedicationsWhereUniqueInput[]
    update?: MedicationsUpdateWithWhereUniqueWithoutSoundTypeInput | MedicationsUpdateWithWhereUniqueWithoutSoundTypeInput[]
    updateMany?: MedicationsUpdateManyWithWhereWithoutSoundTypeInput | MedicationsUpdateManyWithWhereWithoutSoundTypeInput[]
    deleteMany?: MedicationsScalarWhereInput | MedicationsScalarWhereInput[]
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type VerificationCodesCreateWithoutUserInput = {
    codeId?: string
    value: string
    codeType: string
    confirmedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationCodesUncheckedCreateWithoutUserInput = {
    codeId?: string
    value: string
    codeType: string
    confirmedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationCodesCreateOrConnectWithoutUserInput = {
    where: VerificationCodesWhereUniqueInput
    create: XOR<VerificationCodesCreateWithoutUserInput, VerificationCodesUncheckedCreateWithoutUserInput>
  }

  export type VerificationCodesCreateManyUserInputEnvelope = {
    data: VerificationCodesCreateManyUserInput | VerificationCodesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MedicationsCreateWithoutUserInput = {
    medicationId?: string
    name: string
    dose?: string | null
    description?: string | null
    alertPeriodInHours: number
    endTreatmentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    visualType: VisualTypesCreateNestedOneWithoutMedicationsInput
    soundType: SoundTypesCreateNestedOneWithoutMedicationsInput
    notifications?: NotificationsCreateNestedManyWithoutMedicationInput
    annotations?: AnnotationsCreateNestedManyWithoutMedicationInput
  }

  export type MedicationsUncheckedCreateWithoutUserInput = {
    medicationId?: string
    name: string
    dose?: string | null
    description?: string | null
    visualTypeId: string
    soundTypeId: string
    alertPeriodInHours: number
    endTreatmentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationsUncheckedCreateNestedManyWithoutMedicationInput
    annotations?: AnnotationsUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationsCreateOrConnectWithoutUserInput = {
    where: MedicationsWhereUniqueInput
    create: XOR<MedicationsCreateWithoutUserInput, MedicationsUncheckedCreateWithoutUserInput>
  }

  export type MedicationsCreateManyUserInputEnvelope = {
    data: MedicationsCreateManyUserInput | MedicationsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SharingsCreateWithoutPatientInput = {
    sharingId?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    caretaker: UsersCreateNestedOneWithoutCaretakerSharingsInput
  }

  export type SharingsUncheckedCreateWithoutPatientInput = {
    sharingId?: string
    caretakerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SharingsCreateOrConnectWithoutPatientInput = {
    where: SharingsWhereUniqueInput
    create: XOR<SharingsCreateWithoutPatientInput, SharingsUncheckedCreateWithoutPatientInput>
  }

  export type SharingsCreateManyPatientInputEnvelope = {
    data: SharingsCreateManyPatientInput | SharingsCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type SharingsCreateWithoutCaretakerInput = {
    sharingId?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: UsersCreateNestedOneWithoutPatientSharingsInput
  }

  export type SharingsUncheckedCreateWithoutCaretakerInput = {
    sharingId?: string
    patientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SharingsCreateOrConnectWithoutCaretakerInput = {
    where: SharingsWhereUniqueInput
    create: XOR<SharingsCreateWithoutCaretakerInput, SharingsUncheckedCreateWithoutCaretakerInput>
  }

  export type SharingsCreateManyCaretakerInputEnvelope = {
    data: SharingsCreateManyCaretakerInput | SharingsCreateManyCaretakerInput[]
    skipDuplicates?: boolean
  }

  export type VerificationCodesUpsertWithWhereUniqueWithoutUserInput = {
    where: VerificationCodesWhereUniqueInput
    update: XOR<VerificationCodesUpdateWithoutUserInput, VerificationCodesUncheckedUpdateWithoutUserInput>
    create: XOR<VerificationCodesCreateWithoutUserInput, VerificationCodesUncheckedCreateWithoutUserInput>
  }

  export type VerificationCodesUpdateWithWhereUniqueWithoutUserInput = {
    where: VerificationCodesWhereUniqueInput
    data: XOR<VerificationCodesUpdateWithoutUserInput, VerificationCodesUncheckedUpdateWithoutUserInput>
  }

  export type VerificationCodesUpdateManyWithWhereWithoutUserInput = {
    where: VerificationCodesScalarWhereInput
    data: XOR<VerificationCodesUpdateManyMutationInput, VerificationCodesUncheckedUpdateManyWithoutUserInput>
  }

  export type VerificationCodesScalarWhereInput = {
    AND?: VerificationCodesScalarWhereInput | VerificationCodesScalarWhereInput[]
    OR?: VerificationCodesScalarWhereInput[]
    NOT?: VerificationCodesScalarWhereInput | VerificationCodesScalarWhereInput[]
    codeId?: StringFilter<"VerificationCodes"> | string
    userId?: StringFilter<"VerificationCodes"> | string
    value?: StringFilter<"VerificationCodes"> | string
    codeType?: StringFilter<"VerificationCodes"> | string
    confirmedAt?: DateTimeNullableFilter<"VerificationCodes"> | Date | string | null
    expiresAt?: DateTimeFilter<"VerificationCodes"> | Date | string
    createdAt?: DateTimeFilter<"VerificationCodes"> | Date | string
    updatedAt?: DateTimeFilter<"VerificationCodes"> | Date | string
  }

  export type MedicationsUpsertWithWhereUniqueWithoutUserInput = {
    where: MedicationsWhereUniqueInput
    update: XOR<MedicationsUpdateWithoutUserInput, MedicationsUncheckedUpdateWithoutUserInput>
    create: XOR<MedicationsCreateWithoutUserInput, MedicationsUncheckedCreateWithoutUserInput>
  }

  export type MedicationsUpdateWithWhereUniqueWithoutUserInput = {
    where: MedicationsWhereUniqueInput
    data: XOR<MedicationsUpdateWithoutUserInput, MedicationsUncheckedUpdateWithoutUserInput>
  }

  export type MedicationsUpdateManyWithWhereWithoutUserInput = {
    where: MedicationsScalarWhereInput
    data: XOR<MedicationsUpdateManyMutationInput, MedicationsUncheckedUpdateManyWithoutUserInput>
  }

  export type MedicationsScalarWhereInput = {
    AND?: MedicationsScalarWhereInput | MedicationsScalarWhereInput[]
    OR?: MedicationsScalarWhereInput[]
    NOT?: MedicationsScalarWhereInput | MedicationsScalarWhereInput[]
    medicationId?: StringFilter<"Medications"> | string
    userId?: StringFilter<"Medications"> | string
    name?: StringFilter<"Medications"> | string
    dose?: StringNullableFilter<"Medications"> | string | null
    description?: StringNullableFilter<"Medications"> | string | null
    visualTypeId?: StringFilter<"Medications"> | string
    soundTypeId?: StringFilter<"Medications"> | string
    alertPeriodInHours?: IntFilter<"Medications"> | number
    endTreatmentAt?: DateTimeNullableFilter<"Medications"> | Date | string | null
    createdAt?: DateTimeFilter<"Medications"> | Date | string
    updatedAt?: DateTimeFilter<"Medications"> | Date | string
  }

  export type SharingsUpsertWithWhereUniqueWithoutPatientInput = {
    where: SharingsWhereUniqueInput
    update: XOR<SharingsUpdateWithoutPatientInput, SharingsUncheckedUpdateWithoutPatientInput>
    create: XOR<SharingsCreateWithoutPatientInput, SharingsUncheckedCreateWithoutPatientInput>
  }

  export type SharingsUpdateWithWhereUniqueWithoutPatientInput = {
    where: SharingsWhereUniqueInput
    data: XOR<SharingsUpdateWithoutPatientInput, SharingsUncheckedUpdateWithoutPatientInput>
  }

  export type SharingsUpdateManyWithWhereWithoutPatientInput = {
    where: SharingsScalarWhereInput
    data: XOR<SharingsUpdateManyMutationInput, SharingsUncheckedUpdateManyWithoutPatientInput>
  }

  export type SharingsScalarWhereInput = {
    AND?: SharingsScalarWhereInput | SharingsScalarWhereInput[]
    OR?: SharingsScalarWhereInput[]
    NOT?: SharingsScalarWhereInput | SharingsScalarWhereInput[]
    sharingId?: StringFilter<"Sharings"> | string
    patientId?: StringFilter<"Sharings"> | string
    caretakerId?: StringFilter<"Sharings"> | string
    createdAt?: DateTimeFilter<"Sharings"> | Date | string
    updatedAt?: DateTimeFilter<"Sharings"> | Date | string
  }

  export type SharingsUpsertWithWhereUniqueWithoutCaretakerInput = {
    where: SharingsWhereUniqueInput
    update: XOR<SharingsUpdateWithoutCaretakerInput, SharingsUncheckedUpdateWithoutCaretakerInput>
    create: XOR<SharingsCreateWithoutCaretakerInput, SharingsUncheckedCreateWithoutCaretakerInput>
  }

  export type SharingsUpdateWithWhereUniqueWithoutCaretakerInput = {
    where: SharingsWhereUniqueInput
    data: XOR<SharingsUpdateWithoutCaretakerInput, SharingsUncheckedUpdateWithoutCaretakerInput>
  }

  export type SharingsUpdateManyWithWhereWithoutCaretakerInput = {
    where: SharingsScalarWhereInput
    data: XOR<SharingsUpdateManyMutationInput, SharingsUncheckedUpdateManyWithoutCaretakerInput>
  }

  export type UsersCreateWithoutVerificationCodesInput = {
    userId?: string
    fullName: string
    email: string
    phone: string
    hash: string
    image?: string | null
    acceptedTosAt?: Date | string
    accountConfirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medications?: MedicationsCreateNestedManyWithoutUserInput
    patientSharings?: SharingsCreateNestedManyWithoutPatientInput
    caretakerSharings?: SharingsCreateNestedManyWithoutCaretakerInput
  }

  export type UsersUncheckedCreateWithoutVerificationCodesInput = {
    userId?: string
    fullName: string
    email: string
    phone: string
    hash: string
    image?: string | null
    acceptedTosAt?: Date | string
    accountConfirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medications?: MedicationsUncheckedCreateNestedManyWithoutUserInput
    patientSharings?: SharingsUncheckedCreateNestedManyWithoutPatientInput
    caretakerSharings?: SharingsUncheckedCreateNestedManyWithoutCaretakerInput
  }

  export type UsersCreateOrConnectWithoutVerificationCodesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutVerificationCodesInput, UsersUncheckedCreateWithoutVerificationCodesInput>
  }

  export type UsersUpsertWithoutVerificationCodesInput = {
    update: XOR<UsersUpdateWithoutVerificationCodesInput, UsersUncheckedUpdateWithoutVerificationCodesInput>
    create: XOR<UsersCreateWithoutVerificationCodesInput, UsersUncheckedCreateWithoutVerificationCodesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutVerificationCodesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutVerificationCodesInput, UsersUncheckedUpdateWithoutVerificationCodesInput>
  }

  export type UsersUpdateWithoutVerificationCodesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedTosAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountConfirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: MedicationsUpdateManyWithoutUserNestedInput
    patientSharings?: SharingsUpdateManyWithoutPatientNestedInput
    caretakerSharings?: SharingsUpdateManyWithoutCaretakerNestedInput
  }

  export type UsersUncheckedUpdateWithoutVerificationCodesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedTosAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountConfirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: MedicationsUncheckedUpdateManyWithoutUserNestedInput
    patientSharings?: SharingsUncheckedUpdateManyWithoutPatientNestedInput
    caretakerSharings?: SharingsUncheckedUpdateManyWithoutCaretakerNestedInput
  }

  export type UsersCreateWithoutMedicationsInput = {
    userId?: string
    fullName: string
    email: string
    phone: string
    hash: string
    image?: string | null
    acceptedTosAt?: Date | string
    accountConfirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    verificationCodes?: VerificationCodesCreateNestedManyWithoutUserInput
    patientSharings?: SharingsCreateNestedManyWithoutPatientInput
    caretakerSharings?: SharingsCreateNestedManyWithoutCaretakerInput
  }

  export type UsersUncheckedCreateWithoutMedicationsInput = {
    userId?: string
    fullName: string
    email: string
    phone: string
    hash: string
    image?: string | null
    acceptedTosAt?: Date | string
    accountConfirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    verificationCodes?: VerificationCodesUncheckedCreateNestedManyWithoutUserInput
    patientSharings?: SharingsUncheckedCreateNestedManyWithoutPatientInput
    caretakerSharings?: SharingsUncheckedCreateNestedManyWithoutCaretakerInput
  }

  export type UsersCreateOrConnectWithoutMedicationsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutMedicationsInput, UsersUncheckedCreateWithoutMedicationsInput>
  }

  export type VisualTypesCreateWithoutMedicationsInput = {
    visualId?: string
    visual: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisualTypesUncheckedCreateWithoutMedicationsInput = {
    visualId?: string
    visual: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisualTypesCreateOrConnectWithoutMedicationsInput = {
    where: VisualTypesWhereUniqueInput
    create: XOR<VisualTypesCreateWithoutMedicationsInput, VisualTypesUncheckedCreateWithoutMedicationsInput>
  }

  export type SoundTypesCreateWithoutMedicationsInput = {
    soundId?: string
    sound: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SoundTypesUncheckedCreateWithoutMedicationsInput = {
    soundId?: string
    sound: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SoundTypesCreateOrConnectWithoutMedicationsInput = {
    where: SoundTypesWhereUniqueInput
    create: XOR<SoundTypesCreateWithoutMedicationsInput, SoundTypesUncheckedCreateWithoutMedicationsInput>
  }

  export type NotificationsCreateWithoutMedicationInput = {
    notificationId?: string
    name: string
    alertAt?: Date | string
    soundId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationsUncheckedCreateWithoutMedicationInput = {
    notificationId?: string
    name: string
    alertAt?: Date | string
    soundId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationsCreateOrConnectWithoutMedicationInput = {
    where: NotificationsWhereUniqueInput
    create: XOR<NotificationsCreateWithoutMedicationInput, NotificationsUncheckedCreateWithoutMedicationInput>
  }

  export type NotificationsCreateManyMedicationInputEnvelope = {
    data: NotificationsCreateManyMedicationInput | NotificationsCreateManyMedicationInput[]
    skipDuplicates?: boolean
  }

  export type AnnotationsCreateWithoutMedicationInput = {
    annotationId?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnotationsUncheckedCreateWithoutMedicationInput = {
    annotationId?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnotationsCreateOrConnectWithoutMedicationInput = {
    where: AnnotationsWhereUniqueInput
    create: XOR<AnnotationsCreateWithoutMedicationInput, AnnotationsUncheckedCreateWithoutMedicationInput>
  }

  export type AnnotationsCreateManyMedicationInputEnvelope = {
    data: AnnotationsCreateManyMedicationInput | AnnotationsCreateManyMedicationInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutMedicationsInput = {
    update: XOR<UsersUpdateWithoutMedicationsInput, UsersUncheckedUpdateWithoutMedicationsInput>
    create: XOR<UsersCreateWithoutMedicationsInput, UsersUncheckedCreateWithoutMedicationsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutMedicationsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutMedicationsInput, UsersUncheckedUpdateWithoutMedicationsInput>
  }

  export type UsersUpdateWithoutMedicationsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedTosAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountConfirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationCodes?: VerificationCodesUpdateManyWithoutUserNestedInput
    patientSharings?: SharingsUpdateManyWithoutPatientNestedInput
    caretakerSharings?: SharingsUpdateManyWithoutCaretakerNestedInput
  }

  export type UsersUncheckedUpdateWithoutMedicationsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedTosAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountConfirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationCodes?: VerificationCodesUncheckedUpdateManyWithoutUserNestedInput
    patientSharings?: SharingsUncheckedUpdateManyWithoutPatientNestedInput
    caretakerSharings?: SharingsUncheckedUpdateManyWithoutCaretakerNestedInput
  }

  export type VisualTypesUpsertWithoutMedicationsInput = {
    update: XOR<VisualTypesUpdateWithoutMedicationsInput, VisualTypesUncheckedUpdateWithoutMedicationsInput>
    create: XOR<VisualTypesCreateWithoutMedicationsInput, VisualTypesUncheckedCreateWithoutMedicationsInput>
    where?: VisualTypesWhereInput
  }

  export type VisualTypesUpdateToOneWithWhereWithoutMedicationsInput = {
    where?: VisualTypesWhereInput
    data: XOR<VisualTypesUpdateWithoutMedicationsInput, VisualTypesUncheckedUpdateWithoutMedicationsInput>
  }

  export type VisualTypesUpdateWithoutMedicationsInput = {
    visualId?: StringFieldUpdateOperationsInput | string
    visual?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisualTypesUncheckedUpdateWithoutMedicationsInput = {
    visualId?: StringFieldUpdateOperationsInput | string
    visual?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SoundTypesUpsertWithoutMedicationsInput = {
    update: XOR<SoundTypesUpdateWithoutMedicationsInput, SoundTypesUncheckedUpdateWithoutMedicationsInput>
    create: XOR<SoundTypesCreateWithoutMedicationsInput, SoundTypesUncheckedCreateWithoutMedicationsInput>
    where?: SoundTypesWhereInput
  }

  export type SoundTypesUpdateToOneWithWhereWithoutMedicationsInput = {
    where?: SoundTypesWhereInput
    data: XOR<SoundTypesUpdateWithoutMedicationsInput, SoundTypesUncheckedUpdateWithoutMedicationsInput>
  }

  export type SoundTypesUpdateWithoutMedicationsInput = {
    soundId?: StringFieldUpdateOperationsInput | string
    sound?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SoundTypesUncheckedUpdateWithoutMedicationsInput = {
    soundId?: StringFieldUpdateOperationsInput | string
    sound?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsUpsertWithWhereUniqueWithoutMedicationInput = {
    where: NotificationsWhereUniqueInput
    update: XOR<NotificationsUpdateWithoutMedicationInput, NotificationsUncheckedUpdateWithoutMedicationInput>
    create: XOR<NotificationsCreateWithoutMedicationInput, NotificationsUncheckedCreateWithoutMedicationInput>
  }

  export type NotificationsUpdateWithWhereUniqueWithoutMedicationInput = {
    where: NotificationsWhereUniqueInput
    data: XOR<NotificationsUpdateWithoutMedicationInput, NotificationsUncheckedUpdateWithoutMedicationInput>
  }

  export type NotificationsUpdateManyWithWhereWithoutMedicationInput = {
    where: NotificationsScalarWhereInput
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyWithoutMedicationInput>
  }

  export type NotificationsScalarWhereInput = {
    AND?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
    OR?: NotificationsScalarWhereInput[]
    NOT?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
    notificationId?: StringFilter<"Notifications"> | string
    medicationId?: StringFilter<"Notifications"> | string
    name?: StringFilter<"Notifications"> | string
    alertAt?: DateTimeFilter<"Notifications"> | Date | string
    soundId?: IntFilter<"Notifications"> | number
    createdAt?: DateTimeFilter<"Notifications"> | Date | string
    updatedAt?: DateTimeFilter<"Notifications"> | Date | string
  }

  export type AnnotationsUpsertWithWhereUniqueWithoutMedicationInput = {
    where: AnnotationsWhereUniqueInput
    update: XOR<AnnotationsUpdateWithoutMedicationInput, AnnotationsUncheckedUpdateWithoutMedicationInput>
    create: XOR<AnnotationsCreateWithoutMedicationInput, AnnotationsUncheckedCreateWithoutMedicationInput>
  }

  export type AnnotationsUpdateWithWhereUniqueWithoutMedicationInput = {
    where: AnnotationsWhereUniqueInput
    data: XOR<AnnotationsUpdateWithoutMedicationInput, AnnotationsUncheckedUpdateWithoutMedicationInput>
  }

  export type AnnotationsUpdateManyWithWhereWithoutMedicationInput = {
    where: AnnotationsScalarWhereInput
    data: XOR<AnnotationsUpdateManyMutationInput, AnnotationsUncheckedUpdateManyWithoutMedicationInput>
  }

  export type AnnotationsScalarWhereInput = {
    AND?: AnnotationsScalarWhereInput | AnnotationsScalarWhereInput[]
    OR?: AnnotationsScalarWhereInput[]
    NOT?: AnnotationsScalarWhereInput | AnnotationsScalarWhereInput[]
    annotationId?: StringFilter<"Annotations"> | string
    medicationId?: StringFilter<"Annotations"> | string
    content?: StringFilter<"Annotations"> | string
    createdAt?: DateTimeFilter<"Annotations"> | Date | string
    updatedAt?: DateTimeFilter<"Annotations"> | Date | string
  }

  export type MedicationsCreateWithoutNotificationsInput = {
    medicationId?: string
    name: string
    dose?: string | null
    description?: string | null
    alertPeriodInHours: number
    endTreatmentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutMedicationsInput
    visualType: VisualTypesCreateNestedOneWithoutMedicationsInput
    soundType: SoundTypesCreateNestedOneWithoutMedicationsInput
    annotations?: AnnotationsCreateNestedManyWithoutMedicationInput
  }

  export type MedicationsUncheckedCreateWithoutNotificationsInput = {
    medicationId?: string
    userId: string
    name: string
    dose?: string | null
    description?: string | null
    visualTypeId: string
    soundTypeId: string
    alertPeriodInHours: number
    endTreatmentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    annotations?: AnnotationsUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationsCreateOrConnectWithoutNotificationsInput = {
    where: MedicationsWhereUniqueInput
    create: XOR<MedicationsCreateWithoutNotificationsInput, MedicationsUncheckedCreateWithoutNotificationsInput>
  }

  export type MedicationsUpsertWithoutNotificationsInput = {
    update: XOR<MedicationsUpdateWithoutNotificationsInput, MedicationsUncheckedUpdateWithoutNotificationsInput>
    create: XOR<MedicationsCreateWithoutNotificationsInput, MedicationsUncheckedCreateWithoutNotificationsInput>
    where?: MedicationsWhereInput
  }

  export type MedicationsUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: MedicationsWhereInput
    data: XOR<MedicationsUpdateWithoutNotificationsInput, MedicationsUncheckedUpdateWithoutNotificationsInput>
  }

  export type MedicationsUpdateWithoutNotificationsInput = {
    medicationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dose?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    alertPeriodInHours?: IntFieldUpdateOperationsInput | number
    endTreatmentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutMedicationsNestedInput
    visualType?: VisualTypesUpdateOneRequiredWithoutMedicationsNestedInput
    soundType?: SoundTypesUpdateOneRequiredWithoutMedicationsNestedInput
    annotations?: AnnotationsUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationsUncheckedUpdateWithoutNotificationsInput = {
    medicationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dose?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visualTypeId?: StringFieldUpdateOperationsInput | string
    soundTypeId?: StringFieldUpdateOperationsInput | string
    alertPeriodInHours?: IntFieldUpdateOperationsInput | number
    endTreatmentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    annotations?: AnnotationsUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationsCreateWithoutAnnotationsInput = {
    medicationId?: string
    name: string
    dose?: string | null
    description?: string | null
    alertPeriodInHours: number
    endTreatmentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutMedicationsInput
    visualType: VisualTypesCreateNestedOneWithoutMedicationsInput
    soundType: SoundTypesCreateNestedOneWithoutMedicationsInput
    notifications?: NotificationsCreateNestedManyWithoutMedicationInput
  }

  export type MedicationsUncheckedCreateWithoutAnnotationsInput = {
    medicationId?: string
    userId: string
    name: string
    dose?: string | null
    description?: string | null
    visualTypeId: string
    soundTypeId: string
    alertPeriodInHours: number
    endTreatmentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationsUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationsCreateOrConnectWithoutAnnotationsInput = {
    where: MedicationsWhereUniqueInput
    create: XOR<MedicationsCreateWithoutAnnotationsInput, MedicationsUncheckedCreateWithoutAnnotationsInput>
  }

  export type MedicationsUpsertWithoutAnnotationsInput = {
    update: XOR<MedicationsUpdateWithoutAnnotationsInput, MedicationsUncheckedUpdateWithoutAnnotationsInput>
    create: XOR<MedicationsCreateWithoutAnnotationsInput, MedicationsUncheckedCreateWithoutAnnotationsInput>
    where?: MedicationsWhereInput
  }

  export type MedicationsUpdateToOneWithWhereWithoutAnnotationsInput = {
    where?: MedicationsWhereInput
    data: XOR<MedicationsUpdateWithoutAnnotationsInput, MedicationsUncheckedUpdateWithoutAnnotationsInput>
  }

  export type MedicationsUpdateWithoutAnnotationsInput = {
    medicationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dose?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    alertPeriodInHours?: IntFieldUpdateOperationsInput | number
    endTreatmentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutMedicationsNestedInput
    visualType?: VisualTypesUpdateOneRequiredWithoutMedicationsNestedInput
    soundType?: SoundTypesUpdateOneRequiredWithoutMedicationsNestedInput
    notifications?: NotificationsUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationsUncheckedUpdateWithoutAnnotationsInput = {
    medicationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dose?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visualTypeId?: StringFieldUpdateOperationsInput | string
    soundTypeId?: StringFieldUpdateOperationsInput | string
    alertPeriodInHours?: IntFieldUpdateOperationsInput | number
    endTreatmentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationsUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type UsersCreateWithoutPatientSharingsInput = {
    userId?: string
    fullName: string
    email: string
    phone: string
    hash: string
    image?: string | null
    acceptedTosAt?: Date | string
    accountConfirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    verificationCodes?: VerificationCodesCreateNestedManyWithoutUserInput
    medications?: MedicationsCreateNestedManyWithoutUserInput
    caretakerSharings?: SharingsCreateNestedManyWithoutCaretakerInput
  }

  export type UsersUncheckedCreateWithoutPatientSharingsInput = {
    userId?: string
    fullName: string
    email: string
    phone: string
    hash: string
    image?: string | null
    acceptedTosAt?: Date | string
    accountConfirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    verificationCodes?: VerificationCodesUncheckedCreateNestedManyWithoutUserInput
    medications?: MedicationsUncheckedCreateNestedManyWithoutUserInput
    caretakerSharings?: SharingsUncheckedCreateNestedManyWithoutCaretakerInput
  }

  export type UsersCreateOrConnectWithoutPatientSharingsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutPatientSharingsInput, UsersUncheckedCreateWithoutPatientSharingsInput>
  }

  export type UsersCreateWithoutCaretakerSharingsInput = {
    userId?: string
    fullName: string
    email: string
    phone: string
    hash: string
    image?: string | null
    acceptedTosAt?: Date | string
    accountConfirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    verificationCodes?: VerificationCodesCreateNestedManyWithoutUserInput
    medications?: MedicationsCreateNestedManyWithoutUserInput
    patientSharings?: SharingsCreateNestedManyWithoutPatientInput
  }

  export type UsersUncheckedCreateWithoutCaretakerSharingsInput = {
    userId?: string
    fullName: string
    email: string
    phone: string
    hash: string
    image?: string | null
    acceptedTosAt?: Date | string
    accountConfirmedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    verificationCodes?: VerificationCodesUncheckedCreateNestedManyWithoutUserInput
    medications?: MedicationsUncheckedCreateNestedManyWithoutUserInput
    patientSharings?: SharingsUncheckedCreateNestedManyWithoutPatientInput
  }

  export type UsersCreateOrConnectWithoutCaretakerSharingsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCaretakerSharingsInput, UsersUncheckedCreateWithoutCaretakerSharingsInput>
  }

  export type UsersUpsertWithoutPatientSharingsInput = {
    update: XOR<UsersUpdateWithoutPatientSharingsInput, UsersUncheckedUpdateWithoutPatientSharingsInput>
    create: XOR<UsersCreateWithoutPatientSharingsInput, UsersUncheckedCreateWithoutPatientSharingsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutPatientSharingsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutPatientSharingsInput, UsersUncheckedUpdateWithoutPatientSharingsInput>
  }

  export type UsersUpdateWithoutPatientSharingsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedTosAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountConfirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationCodes?: VerificationCodesUpdateManyWithoutUserNestedInput
    medications?: MedicationsUpdateManyWithoutUserNestedInput
    caretakerSharings?: SharingsUpdateManyWithoutCaretakerNestedInput
  }

  export type UsersUncheckedUpdateWithoutPatientSharingsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedTosAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountConfirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationCodes?: VerificationCodesUncheckedUpdateManyWithoutUserNestedInput
    medications?: MedicationsUncheckedUpdateManyWithoutUserNestedInput
    caretakerSharings?: SharingsUncheckedUpdateManyWithoutCaretakerNestedInput
  }

  export type UsersUpsertWithoutCaretakerSharingsInput = {
    update: XOR<UsersUpdateWithoutCaretakerSharingsInput, UsersUncheckedUpdateWithoutCaretakerSharingsInput>
    create: XOR<UsersCreateWithoutCaretakerSharingsInput, UsersUncheckedCreateWithoutCaretakerSharingsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCaretakerSharingsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCaretakerSharingsInput, UsersUncheckedUpdateWithoutCaretakerSharingsInput>
  }

  export type UsersUpdateWithoutCaretakerSharingsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedTosAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountConfirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationCodes?: VerificationCodesUpdateManyWithoutUserNestedInput
    medications?: MedicationsUpdateManyWithoutUserNestedInput
    patientSharings?: SharingsUpdateManyWithoutPatientNestedInput
  }

  export type UsersUncheckedUpdateWithoutCaretakerSharingsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedTosAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountConfirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationCodes?: VerificationCodesUncheckedUpdateManyWithoutUserNestedInput
    medications?: MedicationsUncheckedUpdateManyWithoutUserNestedInput
    patientSharings?: SharingsUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type MedicationsCreateWithoutVisualTypeInput = {
    medicationId?: string
    name: string
    dose?: string | null
    description?: string | null
    alertPeriodInHours: number
    endTreatmentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutMedicationsInput
    soundType: SoundTypesCreateNestedOneWithoutMedicationsInput
    notifications?: NotificationsCreateNestedManyWithoutMedicationInput
    annotations?: AnnotationsCreateNestedManyWithoutMedicationInput
  }

  export type MedicationsUncheckedCreateWithoutVisualTypeInput = {
    medicationId?: string
    userId: string
    name: string
    dose?: string | null
    description?: string | null
    soundTypeId: string
    alertPeriodInHours: number
    endTreatmentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationsUncheckedCreateNestedManyWithoutMedicationInput
    annotations?: AnnotationsUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationsCreateOrConnectWithoutVisualTypeInput = {
    where: MedicationsWhereUniqueInput
    create: XOR<MedicationsCreateWithoutVisualTypeInput, MedicationsUncheckedCreateWithoutVisualTypeInput>
  }

  export type MedicationsCreateManyVisualTypeInputEnvelope = {
    data: MedicationsCreateManyVisualTypeInput | MedicationsCreateManyVisualTypeInput[]
    skipDuplicates?: boolean
  }

  export type MedicationsUpsertWithWhereUniqueWithoutVisualTypeInput = {
    where: MedicationsWhereUniqueInput
    update: XOR<MedicationsUpdateWithoutVisualTypeInput, MedicationsUncheckedUpdateWithoutVisualTypeInput>
    create: XOR<MedicationsCreateWithoutVisualTypeInput, MedicationsUncheckedCreateWithoutVisualTypeInput>
  }

  export type MedicationsUpdateWithWhereUniqueWithoutVisualTypeInput = {
    where: MedicationsWhereUniqueInput
    data: XOR<MedicationsUpdateWithoutVisualTypeInput, MedicationsUncheckedUpdateWithoutVisualTypeInput>
  }

  export type MedicationsUpdateManyWithWhereWithoutVisualTypeInput = {
    where: MedicationsScalarWhereInput
    data: XOR<MedicationsUpdateManyMutationInput, MedicationsUncheckedUpdateManyWithoutVisualTypeInput>
  }

  export type MedicationsCreateWithoutSoundTypeInput = {
    medicationId?: string
    name: string
    dose?: string | null
    description?: string | null
    alertPeriodInHours: number
    endTreatmentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutMedicationsInput
    visualType: VisualTypesCreateNestedOneWithoutMedicationsInput
    notifications?: NotificationsCreateNestedManyWithoutMedicationInput
    annotations?: AnnotationsCreateNestedManyWithoutMedicationInput
  }

  export type MedicationsUncheckedCreateWithoutSoundTypeInput = {
    medicationId?: string
    userId: string
    name: string
    dose?: string | null
    description?: string | null
    visualTypeId: string
    alertPeriodInHours: number
    endTreatmentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationsUncheckedCreateNestedManyWithoutMedicationInput
    annotations?: AnnotationsUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationsCreateOrConnectWithoutSoundTypeInput = {
    where: MedicationsWhereUniqueInput
    create: XOR<MedicationsCreateWithoutSoundTypeInput, MedicationsUncheckedCreateWithoutSoundTypeInput>
  }

  export type MedicationsCreateManySoundTypeInputEnvelope = {
    data: MedicationsCreateManySoundTypeInput | MedicationsCreateManySoundTypeInput[]
    skipDuplicates?: boolean
  }

  export type MedicationsUpsertWithWhereUniqueWithoutSoundTypeInput = {
    where: MedicationsWhereUniqueInput
    update: XOR<MedicationsUpdateWithoutSoundTypeInput, MedicationsUncheckedUpdateWithoutSoundTypeInput>
    create: XOR<MedicationsCreateWithoutSoundTypeInput, MedicationsUncheckedCreateWithoutSoundTypeInput>
  }

  export type MedicationsUpdateWithWhereUniqueWithoutSoundTypeInput = {
    where: MedicationsWhereUniqueInput
    data: XOR<MedicationsUpdateWithoutSoundTypeInput, MedicationsUncheckedUpdateWithoutSoundTypeInput>
  }

  export type MedicationsUpdateManyWithWhereWithoutSoundTypeInput = {
    where: MedicationsScalarWhereInput
    data: XOR<MedicationsUpdateManyMutationInput, MedicationsUncheckedUpdateManyWithoutSoundTypeInput>
  }

  export type VerificationCodesCreateManyUserInput = {
    codeId?: string
    value: string
    codeType: string
    confirmedAt?: Date | string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationsCreateManyUserInput = {
    medicationId?: string
    name: string
    dose?: string | null
    description?: string | null
    visualTypeId: string
    soundTypeId: string
    alertPeriodInHours: number
    endTreatmentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SharingsCreateManyPatientInput = {
    sharingId?: string
    caretakerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SharingsCreateManyCaretakerInput = {
    sharingId?: string
    patientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationCodesUpdateWithoutUserInput = {
    codeId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    codeType?: StringFieldUpdateOperationsInput | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodesUncheckedUpdateWithoutUserInput = {
    codeId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    codeType?: StringFieldUpdateOperationsInput | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCodesUncheckedUpdateManyWithoutUserInput = {
    codeId?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    codeType?: StringFieldUpdateOperationsInput | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationsUpdateWithoutUserInput = {
    medicationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dose?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    alertPeriodInHours?: IntFieldUpdateOperationsInput | number
    endTreatmentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visualType?: VisualTypesUpdateOneRequiredWithoutMedicationsNestedInput
    soundType?: SoundTypesUpdateOneRequiredWithoutMedicationsNestedInput
    notifications?: NotificationsUpdateManyWithoutMedicationNestedInput
    annotations?: AnnotationsUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationsUncheckedUpdateWithoutUserInput = {
    medicationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dose?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visualTypeId?: StringFieldUpdateOperationsInput | string
    soundTypeId?: StringFieldUpdateOperationsInput | string
    alertPeriodInHours?: IntFieldUpdateOperationsInput | number
    endTreatmentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationsUncheckedUpdateManyWithoutMedicationNestedInput
    annotations?: AnnotationsUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationsUncheckedUpdateManyWithoutUserInput = {
    medicationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dose?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visualTypeId?: StringFieldUpdateOperationsInput | string
    soundTypeId?: StringFieldUpdateOperationsInput | string
    alertPeriodInHours?: IntFieldUpdateOperationsInput | number
    endTreatmentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharingsUpdateWithoutPatientInput = {
    sharingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caretaker?: UsersUpdateOneRequiredWithoutCaretakerSharingsNestedInput
  }

  export type SharingsUncheckedUpdateWithoutPatientInput = {
    sharingId?: StringFieldUpdateOperationsInput | string
    caretakerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharingsUncheckedUpdateManyWithoutPatientInput = {
    sharingId?: StringFieldUpdateOperationsInput | string
    caretakerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharingsUpdateWithoutCaretakerInput = {
    sharingId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: UsersUpdateOneRequiredWithoutPatientSharingsNestedInput
  }

  export type SharingsUncheckedUpdateWithoutCaretakerInput = {
    sharingId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharingsUncheckedUpdateManyWithoutCaretakerInput = {
    sharingId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsCreateManyMedicationInput = {
    notificationId?: string
    name: string
    alertAt?: Date | string
    soundId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnotationsCreateManyMedicationInput = {
    annotationId?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationsUpdateWithoutMedicationInput = {
    notificationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alertAt?: DateTimeFieldUpdateOperationsInput | Date | string
    soundId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsUncheckedUpdateWithoutMedicationInput = {
    notificationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alertAt?: DateTimeFieldUpdateOperationsInput | Date | string
    soundId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsUncheckedUpdateManyWithoutMedicationInput = {
    notificationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    alertAt?: DateTimeFieldUpdateOperationsInput | Date | string
    soundId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnotationsUpdateWithoutMedicationInput = {
    annotationId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnotationsUncheckedUpdateWithoutMedicationInput = {
    annotationId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnotationsUncheckedUpdateManyWithoutMedicationInput = {
    annotationId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationsCreateManyVisualTypeInput = {
    medicationId?: string
    userId: string
    name: string
    dose?: string | null
    description?: string | null
    soundTypeId: string
    alertPeriodInHours: number
    endTreatmentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationsUpdateWithoutVisualTypeInput = {
    medicationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dose?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    alertPeriodInHours?: IntFieldUpdateOperationsInput | number
    endTreatmentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutMedicationsNestedInput
    soundType?: SoundTypesUpdateOneRequiredWithoutMedicationsNestedInput
    notifications?: NotificationsUpdateManyWithoutMedicationNestedInput
    annotations?: AnnotationsUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationsUncheckedUpdateWithoutVisualTypeInput = {
    medicationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dose?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    soundTypeId?: StringFieldUpdateOperationsInput | string
    alertPeriodInHours?: IntFieldUpdateOperationsInput | number
    endTreatmentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationsUncheckedUpdateManyWithoutMedicationNestedInput
    annotations?: AnnotationsUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationsUncheckedUpdateManyWithoutVisualTypeInput = {
    medicationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dose?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    soundTypeId?: StringFieldUpdateOperationsInput | string
    alertPeriodInHours?: IntFieldUpdateOperationsInput | number
    endTreatmentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationsCreateManySoundTypeInput = {
    medicationId?: string
    userId: string
    name: string
    dose?: string | null
    description?: string | null
    visualTypeId: string
    alertPeriodInHours: number
    endTreatmentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationsUpdateWithoutSoundTypeInput = {
    medicationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dose?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    alertPeriodInHours?: IntFieldUpdateOperationsInput | number
    endTreatmentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutMedicationsNestedInput
    visualType?: VisualTypesUpdateOneRequiredWithoutMedicationsNestedInput
    notifications?: NotificationsUpdateManyWithoutMedicationNestedInput
    annotations?: AnnotationsUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationsUncheckedUpdateWithoutSoundTypeInput = {
    medicationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dose?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visualTypeId?: StringFieldUpdateOperationsInput | string
    alertPeriodInHours?: IntFieldUpdateOperationsInput | number
    endTreatmentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationsUncheckedUpdateManyWithoutMedicationNestedInput
    annotations?: AnnotationsUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationsUncheckedUpdateManyWithoutSoundTypeInput = {
    medicationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dose?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visualTypeId?: StringFieldUpdateOperationsInput | string
    alertPeriodInHours?: IntFieldUpdateOperationsInput | number
    endTreatmentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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