/**
 * For ID values (can be string or number)
 */
export type GenericId = number | string;

/**
 * Generic Object type
 */
export type GenericObject<T = any> = {[x: string ] : T};
