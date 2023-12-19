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
 * Sign will request object
 * @export
 * @interface SignWillRequest
 */
export interface SignWillRequest {
    /**
     * 
     * @type {string}
     * @memberof SignWillRequest
     */
    signedAt?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SignWillRequest
     */
    printed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SignWillRequest
     */
    storage?: string;
    /**
     * 
     * @type {string}
     * @memberof SignWillRequest
     */
    witness1?: string;
    /**
     * 
     * @type {string}
     * @memberof SignWillRequest
     */
    witness2?: string;
}

export function SignWillRequestFromJSON(json: any): SignWillRequest {
    return SignWillRequestFromJSONTyped(json, false);
}

export function SignWillRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SignWillRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'signedAt': !exists(json, 'signed_at') ? undefined : json['signed_at'],
        'printed': !exists(json, 'printed') ? undefined : json['printed'],
        'storage': !exists(json, 'storage') ? undefined : json['storage'],
        'witness1': !exists(json, 'witness1') ? undefined : json['witness1'],
        'witness2': !exists(json, 'witness2') ? undefined : json['witness2'],
    };
}

export function SignWillRequestToJSON(value?: SignWillRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'signed_at': value.signedAt,
        'printed': value.printed,
        'storage': value.storage,
        'witness1': value.witness1,
        'witness2': value.witness2,
    };
}

