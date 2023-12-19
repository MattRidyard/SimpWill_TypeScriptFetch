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

import { exists, mapValues } from '../runtime';
/**
 * Author object.
 * @export
 * @interface AuthorObject
 */
export interface AuthorObject {
    /**
     * 
     * @type {number}
     * @memberof AuthorObject
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof AuthorObject
     */
    avatar: string;
    /**
     * 
     * @type {string}
     * @memberof AuthorObject
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof AuthorObject
     */
    lastName: string;
}

export function AuthorObjectFromJSON(json: any): AuthorObject {
    return AuthorObjectFromJSONTyped(json, false);
}

export function AuthorObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthorObject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'avatar': json['avatar'],
        'firstName': json['first_name'],
        'lastName': json['last_name'],
    };
}

export function AuthorObjectToJSON(value?: AuthorObject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'avatar': value.avatar,
        'first_name': value.firstName,
        'last_name': value.lastName,
    };
}

