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
    MaritalStatuses,
    MaritalStatusesFromJSON,
    MaritalStatusesFromJSONTyped,
    MaritalStatusesToJSON,
} from './';

/**
 * Actor request object for create.
 * @export
 * @interface ActorCreateRequest
 */
export interface ActorCreateRequest {
    /**
     * 
     * @type {number}
     * @memberof ActorCreateRequest
     */
    documentId: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof ActorCreateRequest
     */
    roles?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof ActorCreateRequest
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof ActorCreateRequest
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof ActorCreateRequest
     */
    lastName: string;
    /**
     * 
     * @type {MaritalStatuses}
     * @memberof ActorCreateRequest
     */
    maritalStatus?: MaritalStatuses;
    /**
     * 
     * @type {string}
     * @memberof ActorCreateRequest
     */
    dateOfBirth?: string;
    /**
     * 
     * @type {string}
     * @memberof ActorCreateRequest
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof ActorCreateRequest
     */
    phone?: string;
    /**
     * 
     * @type {string}
     * @memberof ActorCreateRequest
     */
    houseNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof ActorCreateRequest
     */
    street?: string;
    /**
     * 
     * @type {string}
     * @memberof ActorCreateRequest
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof ActorCreateRequest
     */
    postcode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ActorCreateRequest
     */
    liveTogether?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ActorCreateRequest
     */
    personalRelation?: string | null;
}

export function ActorCreateRequestFromJSON(json: any): ActorCreateRequest {
    return ActorCreateRequestFromJSONTyped(json, false);
}

export function ActorCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActorCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'documentId': json['document_id'],
        'roles': !exists(json, 'roles') ? undefined : json['roles'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'firstName': json['first_name'],
        'lastName': json['last_name'],
        'maritalStatus': !exists(json, 'marital_status') ? undefined : MaritalStatusesFromJSON(json['marital_status']),
        'dateOfBirth': !exists(json, 'date_of_birth') ? undefined : json['date_of_birth'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'houseNumber': !exists(json, 'house_number') ? undefined : json['house_number'],
        'street': !exists(json, 'street') ? undefined : json['street'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'postcode': !exists(json, 'postcode') ? undefined : json['postcode'],
        'liveTogether': !exists(json, 'live_together') ? undefined : json['live_together'],
        'personalRelation': !exists(json, 'personal_relation') ? undefined : json['personal_relation'],
    };
}

export function ActorCreateRequestToJSON(value?: ActorCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'document_id': value.documentId,
        'roles': value.roles,
        'title': value.title,
        'first_name': value.firstName,
        'last_name': value.lastName,
        'marital_status': MaritalStatusesToJSON(value.maritalStatus),
        'date_of_birth': value.dateOfBirth,
        'email': value.email,
        'phone': value.phone,
        'house_number': value.houseNumber,
        'street': value.street,
        'city': value.city,
        'postcode': value.postcode,
        'live_together': value.liveTogether,
        'personal_relation': value.personalRelation,
    };
}

