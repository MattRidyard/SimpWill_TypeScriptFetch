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
 * Estate request object.
 * @export
 * @interface EstateRequestObject
 */
export interface EstateRequestObject {
    /**
     * 
     * @type {number}
     * @memberof EstateRequestObject
     */
    actorId?: number;
    /**
     * 
     * @type {number}
     * @memberof EstateRequestObject
     */
    charityId?: number;
    /**
     * 
     * @type {number}
     * @memberof EstateRequestObject
     */
    percent: number;
}

export function EstateRequestObjectFromJSON(json: any): EstateRequestObject {
    return EstateRequestObjectFromJSONTyped(json, false);
}

export function EstateRequestObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): EstateRequestObject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actorId': !exists(json, 'actor_id') ? undefined : json['actor_id'],
        'charityId': !exists(json, 'charity_id') ? undefined : json['charity_id'],
        'percent': json['percent'],
    };
}

export function EstateRequestObjectToJSON(value?: EstateRequestObject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actor_id': value.actorId,
        'charity_id': value.charityId,
        'percent': value.percent,
    };
}

