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

/**
 * Exclusive offers object.
 * @export
 * @enum {string}
 */
export enum Offers {
    Funeralcare = 'Funeralcare',
    Anorak = 'Anorak',
    Uinsure = 'Uinsure',
    Homely = 'Homely'
}

export function OffersFromJSON(json: any): Offers {
    return OffersFromJSONTyped(json, false);
}

export function OffersFromJSONTyped(json: any, ignoreDiscriminator: boolean): Offers {
    return json as Offers;
}

export function OffersToJSON(value?: Offers | null): any {
    return value as any;
}

