/* tslint:disable */
/* eslint-disable */
/**
 * Simpwill API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Contact types object.
 * @export
 * @enum {string}
 */
export enum UserContactTypes {
    Email = 'Email',
    Phone = 'Phone',
    Post = 'Post'
}

export function UserContactTypesFromJSON(json: any): UserContactTypes {
    return UserContactTypesFromJSONTyped(json, false);
}

export function UserContactTypesFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserContactTypes {
    return json as UserContactTypes;
}

export function UserContactTypesToJSON(value?: UserContactTypes | null): any {
    return value as any;
}

