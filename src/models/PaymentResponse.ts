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
    PaymentObject,
    PaymentObjectFromJSON,
    PaymentObjectFromJSONTyped,
    PaymentObjectToJSON,
} from './';

/**
 * Payment response.
 * @export
 * @interface PaymentResponse
 */
export interface PaymentResponse {
    /**
     * 
     * @type {PaymentObject}
     * @memberof PaymentResponse
     */
    data: PaymentObject;
}

export function PaymentResponseFromJSON(json: any): PaymentResponse {
    return PaymentResponseFromJSONTyped(json, false);
}

export function PaymentResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': PaymentObjectFromJSON(json['data']),
    };
}

export function PaymentResponseToJSON(value?: PaymentResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': PaymentObjectToJSON(value.data),
    };
}


