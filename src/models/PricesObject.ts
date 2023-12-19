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
 * Prices object.
 * @export
 * @enum {string}
 */
export enum PricesObject {
    SingleWill = 'single_will',
    JointWill = 'joint_will',
    OneLpa = 'one_lpa',
    BothLpas = 'both_lpas'
}

export function PricesObjectFromJSON(json: any): PricesObject {
    return PricesObjectFromJSONTyped(json, false);
}

export function PricesObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): PricesObject {
    return json as PricesObject;
}

export function PricesObjectToJSON(value?: PricesObject | null): any {
    return value as any;
}

