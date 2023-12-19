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
    PricesObject,
    PricesObjectFromJSON,
    PricesObjectFromJSONTyped,
    PricesObjectToJSON,
} from './';

/**
 * Purchase request object
 * @export
 * @interface PurchaseRequest
 */
export interface PurchaseRequest {
    /**
     * 
     * @type {string}
     * @memberof PurchaseRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PurchaseRequest
     */
    paymentMethodId?: string;
    /**
     * 
     * @type {PricesObject}
     * @memberof PurchaseRequest
     */
    priceStatus?: PricesObject;
    /**
     * 
     * @type {boolean}
     * @memberof PurchaseRequest
     */
    unlimitedUpdates?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PurchaseRequest
     */
    partnerEmail?: string;
    /**
     * 
     * @type {string}
     * @memberof PurchaseRequest
     */
    coupon?: string;
}

export function PurchaseRequestFromJSON(json: any): PurchaseRequest {
    return PurchaseRequestFromJSONTyped(json, false);
}

export function PurchaseRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PurchaseRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'paymentMethodId': !exists(json, 'payment_method_id') ? undefined : json['payment_method_id'],
        'priceStatus': !exists(json, 'price_status') ? undefined : PricesObjectFromJSON(json['price_status']),
        'unlimitedUpdates': !exists(json, 'unlimited_updates') ? undefined : json['unlimited_updates'],
        'partnerEmail': !exists(json, 'partner_email') ? undefined : json['partner_email'],
        'coupon': !exists(json, 'coupon') ? undefined : json['coupon'],
    };
}

export function PurchaseRequestToJSON(value?: PurchaseRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'payment_method_id': value.paymentMethodId,
        'price_status': PricesObjectToJSON(value.priceStatus),
        'unlimited_updates': value.unlimitedUpdates,
        'partner_email': value.partnerEmail,
        'coupon': value.coupon,
    };
}


