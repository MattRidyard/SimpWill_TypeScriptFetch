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
    AssetObject,
    AssetObjectFromJSON,
    AssetObjectFromJSONTyped,
    AssetObjectToJSON,
} from './';

/**
 * Asset response object.
 * @export
 * @interface AssetResponse
 */
export interface AssetResponse {
    /**
     * 
     * @type {AssetObject}
     * @memberof AssetResponse
     */
    data: AssetObject;
}

export function AssetResponseFromJSON(json: any): AssetResponse {
    return AssetResponseFromJSONTyped(json, false);
}

export function AssetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': AssetObjectFromJSON(json['data']),
    };
}

export function AssetResponseToJSON(value?: AssetResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AssetObjectToJSON(value.data),
    };
}


