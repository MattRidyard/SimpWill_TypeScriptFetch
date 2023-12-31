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
 * User data to send reset password link.
 * @export
 * @interface UserSendResetPasswordLinkData
 */
export interface UserSendResetPasswordLinkData {
    /**
     * 
     * @type {string}
     * @memberof UserSendResetPasswordLinkData
     */
    email: string;
}

export function UserSendResetPasswordLinkDataFromJSON(json: any): UserSendResetPasswordLinkData {
    return UserSendResetPasswordLinkDataFromJSONTyped(json, false);
}

export function UserSendResetPasswordLinkDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserSendResetPasswordLinkData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': json['email'],
    };
}

export function UserSendResetPasswordLinkDataToJSON(value?: UserSendResetPasswordLinkData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
    };
}


