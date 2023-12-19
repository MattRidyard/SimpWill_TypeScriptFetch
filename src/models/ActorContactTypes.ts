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
export enum ActorContactTypes {
    Post = 'Post',
    Phone = 'Phone',
    Email = 'Email',
    InWelshLanguage = 'In Welsh language'
}

export function ActorContactTypesFromJSON(json: any): ActorContactTypes {
    return ActorContactTypesFromJSONTyped(json, false);
}

export function ActorContactTypesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActorContactTypes {
    return json as ActorContactTypes;
}

export function ActorContactTypesToJSON(value?: ActorContactTypes | null): any {
    return value as any;
}

