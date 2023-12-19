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
    SubscriptionObject,
    SubscriptionObjectFromJSON,
    SubscriptionObjectFromJSONTyped,
    SubscriptionObjectToJSON,
} from './';

/**
 * Subscription response.
 * @export
 * @interface SubscriptionResponse
 */
export interface SubscriptionResponse {
    /**
     * 
     * @type {SubscriptionObject}
     * @memberof SubscriptionResponse
     */
    data: SubscriptionObject;
}

export function SubscriptionResponseFromJSON(json: any): SubscriptionResponse {
    return SubscriptionResponseFromJSONTyped(json, false);
}

export function SubscriptionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': SubscriptionObjectFromJSON(json['data']),
    };
}

export function SubscriptionResponseToJSON(value?: SubscriptionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': SubscriptionObjectToJSON(value.data),
    };
}


