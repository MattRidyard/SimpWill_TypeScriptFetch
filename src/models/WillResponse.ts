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
    WillObject,
    WillObjectFromJSON,
    WillObjectFromJSONTyped,
    WillObjectToJSON,
} from './';

/**
 * Will response.
 * @export
 * @interface WillResponse
 */
export interface WillResponse {
    /**
     * 
     * @type {WillObject}
     * @memberof WillResponse
     */
    data: WillObject;
}

export function WillResponseFromJSON(json: any): WillResponse {
    return WillResponseFromJSONTyped(json, false);
}

export function WillResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WillResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': WillObjectFromJSON(json['data']),
    };
}

export function WillResponseToJSON(value?: WillResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': WillObjectToJSON(value.data),
    };
}

