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
    MetaParameters,
    MetaParametersFromJSON,
    MetaParametersFromJSONTyped,
    MetaParametersToJSON,
    TagObject,
    TagObjectFromJSON,
    TagObjectFromJSONTyped,
    TagObjectToJSON,
} from './';

/**
 * Article collection object.
 * @export
 * @interface ArticlesCollectionObject
 */
export interface ArticlesCollectionObject {
    /**
     * 
     * @type {Array<ArticleObject>}
     * @memberof ArticlesCollectionObject
     */
    records: Array<ArticleObject>;
    /**
     * 
     * @type {MetaParameters}
     * @memberof ArticlesCollectionObject
     */
    meta: MetaParameters;
    /**
     * 
     * @type {Array<TagObject>}
     * @memberof ArticlesCollectionObject
     */
    tags: Array<TagObject>;
}

export function ArticlesCollectionObjectFromJSON(json: any): ArticlesCollectionObject {
    return ArticlesCollectionObjectFromJSONTyped(json, false);
}

export function ArticlesCollectionObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArticlesCollectionObject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'records': ((json['records'] as Array<any>).map(ArticleObjectFromJSON)),
        'meta': MetaParametersFromJSON(json['meta']),
        'tags': ((json['tags'] as Array<any>).map(TagObjectFromJSON)),
    };
}

export function ArticlesCollectionObjectToJSON(value?: ArticlesCollectionObject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'records': ((value.records as Array<any>).map(ArticleObjectToJSON)),
        'meta': MetaParametersToJSON(value.meta),
        'tags': ((value.tags as Array<any>).map(TagObjectToJSON)),
    };
}


