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
    ArticleObject,
    ArticleObjectFromJSON,
    ArticleObjectFromJSONTyped,
    ArticleObjectToJSON,
} from './';

/**
 * Article response object.
 * @export
 * @interface ArticleResponse
 */
export interface ArticleResponse {
    /**
     * 
     * @type {ArticleObject}
     * @memberof ArticleResponse
     */
    data: ArticleObject;
}

export function ArticleResponseFromJSON(json: any): ArticleResponse {
    return ArticleResponseFromJSONTyped(json, false);
}

export function ArticleResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArticleResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ArticleObjectFromJSON(json['data']),
    };
}

export function ArticleResponseToJSON(value?: ArticleResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ArticleObjectToJSON(value.data),
    };
}


