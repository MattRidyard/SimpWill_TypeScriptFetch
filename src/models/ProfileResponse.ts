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
import {
    UserObject,
    UserObjectFromJSON,
    UserObjectFromJSONTyped,
    UserObjectToJSON,
} from './';

/**
 * User response object.
 * @export
 * @interface ProfileResponse
 */
export interface ProfileResponse {
    /**
     * 
     * @type {UserObject}
     * @memberof ProfileResponse
     */
    data: UserObject;
}

export function ProfileResponseFromJSON(json: any): ProfileResponse {
    return ProfileResponseFromJSONTyped(json, false);
}

export function ProfileResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': UserObjectFromJSON(json['data']),
    };
}

export function ProfileResponseToJSON(value?: ProfileResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': UserObjectToJSON(value.data),
    };
}

