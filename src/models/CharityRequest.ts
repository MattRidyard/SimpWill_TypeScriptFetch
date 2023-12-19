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
 * Charity request object for create.
 * @export
 * @interface CharityRequest
 */
export interface CharityRequest {
    /**
     * 
     * @type {string}
     * @memberof CharityRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CharityRequest
     */
    number: string;
    /**
     * 
     * @type {string}
     * @memberof CharityRequest
     */
    photo: string;
    /**
     * 
     * @type {string}
     * @memberof CharityRequest
     */
    description: string;
}

export function CharityRequestFromJSON(json: any): CharityRequest {
    return CharityRequestFromJSONTyped(json, false);
}

export function CharityRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CharityRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'number': json['number'],
        'photo': json['photo'],
        'description': json['description'],
    };
}

export function CharityRequestToJSON(value?: CharityRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'number': value.number,
        'photo': value.photo,
        'description': value.description,
    };
}

