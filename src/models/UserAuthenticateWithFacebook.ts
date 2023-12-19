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
 * Facebook server code to get user data.
 * @export
 * @interface UserAuthenticateWithFacebook
 */
export interface UserAuthenticateWithFacebook {
    /**
     * 
     * @type {string}
     * @memberof UserAuthenticateWithFacebook
     */
    facebookServerAuthCode: string;
}

export function UserAuthenticateWithFacebookFromJSON(json: any): UserAuthenticateWithFacebook {
    return UserAuthenticateWithFacebookFromJSONTyped(json, false);
}

export function UserAuthenticateWithFacebookFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserAuthenticateWithFacebook {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facebookServerAuthCode': json['facebook_server_auth_code'],
    };
}

export function UserAuthenticateWithFacebookToJSON(value?: UserAuthenticateWithFacebook | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facebook_server_auth_code': value.facebookServerAuthCode,
    };
}


