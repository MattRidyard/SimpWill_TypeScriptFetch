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
 * Pet request object for create.
 * @export
 * @interface PetCreateRequest
 */
export interface PetCreateRequest {
    /**
     * 
     * @type {number}
     * @memberof PetCreateRequest
     */
    documentId: number;
    /**
     * 
     * @type {string}
     * @memberof PetCreateRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PetCreateRequest
     */
    type: string;
}

export function PetCreateRequestFromJSON(json: any): PetCreateRequest {
    return PetCreateRequestFromJSONTyped(json, false);
}

export function PetCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PetCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'documentId': json['document_id'],
        'name': json['name'],
        'type': json['type'],
    };
}

export function PetCreateRequestToJSON(value?: PetCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'document_id': value.documentId,
        'name': value.name,
        'type': value.type,
    };
}

