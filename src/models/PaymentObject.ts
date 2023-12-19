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
 * Payment object
 * @export
 * @interface PaymentObject
 */
export interface PaymentObject {
    /**
     * 
     * @type {number}
     * @memberof PaymentObject
     */
    userId: number;
    /**
     * 
     * @type {string}
     * @memberof PaymentObject
     */
    nameOnCard: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentObject
     */
    cardBrand: string;
    /**
     * 
     * @type {number}
     * @memberof PaymentObject
     */
    expMonth: number;
    /**
     * 
     * @type {number}
     * @memberof PaymentObject
     */
    expYear: number;
    /**
     * 
     * @type {string}
     * @memberof PaymentObject
     */
    lastFour: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentObject
     */
    paymentMethodId: string;
}

export function PaymentObjectFromJSON(json: any): PaymentObject {
    return PaymentObjectFromJSONTyped(json, false);
}

export function PaymentObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentObject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': json['user_id'],
        'nameOnCard': json['name_on_card'],
        'cardBrand': json['card_brand'],
        'expMonth': json['exp_month'],
        'expYear': json['exp_year'],
        'lastFour': json['last_four'],
        'paymentMethodId': json['payment_method_id'],
    };
}

export function PaymentObjectToJSON(value?: PaymentObject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user_id': value.userId,
        'name_on_card': value.nameOnCard,
        'card_brand': value.cardBrand,
        'exp_month': value.expMonth,
        'exp_year': value.expYear,
        'last_four': value.lastFour,
        'payment_method_id': value.paymentMethodId,
    };
}


