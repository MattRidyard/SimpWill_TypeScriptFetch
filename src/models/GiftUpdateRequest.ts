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
    GiftTypes,
    GiftTypesFromJSON,
    GiftTypesFromJSONTyped,
    GiftTypesToJSON,
} from './';

/**
 * Gift request object for update.
 * @export
 * @interface GiftUpdateRequest
 */
export interface GiftUpdateRequest {
    /**
     * 
     * @type {GiftTypes}
     * @memberof GiftUpdateRequest
     */
    type?: GiftTypes;
    /**
     * 
     * @type {string}
     * @memberof GiftUpdateRequest
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof GiftUpdateRequest
     */
    message?: string;
}

export function GiftUpdateRequestFromJSON(json: any): GiftUpdateRequest {
    return GiftUpdateRequestFromJSONTyped(json, false);
}

export function GiftUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GiftUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : GiftTypesFromJSON(json['type']),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function GiftUpdateRequestToJSON(value?: GiftUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': GiftTypesToJSON(value.type),
        'description': value.description,
        'message': value.message,
    };
}


