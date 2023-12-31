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
 * Preference object.
 * @export
 * @interface PreferenceObject
 */
export interface PreferenceObject {
    /**
     * 
     * @type {number}
     * @memberof PreferenceObject
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof PreferenceObject
     */
    name: string;
}

export function PreferenceObjectFromJSON(json: any): PreferenceObject {
    return PreferenceObjectFromJSONTyped(json, false);
}

export function PreferenceObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): PreferenceObject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
    };
}

export function PreferenceObjectToJSON(value?: PreferenceObject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
    };
}


