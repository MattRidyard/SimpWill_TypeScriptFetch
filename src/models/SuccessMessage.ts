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
 * Success response message.
 * @export
 * @interface SuccessMessage
 */
export interface SuccessMessage {
    /**
     * 
     * @type {string}
     * @memberof SuccessMessage
     */
    message: string;
}

export function SuccessMessageFromJSON(json: any): SuccessMessage {
    return SuccessMessageFromJSONTyped(json, false);
}

export function SuccessMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuccessMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': json['message'],
    };
}

export function SuccessMessageToJSON(value?: SuccessMessage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
    };
}

