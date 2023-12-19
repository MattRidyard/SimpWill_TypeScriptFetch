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
 * applier request object for create.
 * @export
 * @interface ApplierRequest
 */
export interface ApplierRequest {
    /**
     * 
     * @type {string}
     * @memberof ApplierRequest
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof ApplierRequest
     */
    country: string;
}

export function ApplierRequestFromJSON(json: any): ApplierRequest {
    return ApplierRequestFromJSONTyped(json, false);
}

export function ApplierRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplierRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': json['email'],
        'country': json['country'],
    };
}

export function ApplierRequestToJSON(value?: ApplierRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'country': value.country,
    };
}


