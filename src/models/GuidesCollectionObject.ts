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
    AlertObject,
    AlertObjectFromJSON,
    AlertObjectFromJSONTyped,
    AlertObjectToJSON,
    GuideObject,
    GuideObjectFromJSON,
    GuideObjectFromJSONTyped,
    GuideObjectToJSON,
    MetaParameters,
    MetaParametersFromJSON,
    MetaParametersFromJSONTyped,
    MetaParametersToJSON,
} from './';

/**
 * Guide collection object.
 * @export
 * @interface GuidesCollectionObject
 */
export interface GuidesCollectionObject {
    /**
     * 
     * @type {number}
     * @memberof GuidesCollectionObject
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof GuidesCollectionObject
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof GuidesCollectionObject
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof GuidesCollectionObject
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof GuidesCollectionObject
     */
    icon: string;
    /**
     * 
     * @type {AlertObject}
     * @memberof GuidesCollectionObject
     */
    alert?: AlertObject;
    /**
     * 
     * @type {Array<GuideObject>}
     * @memberof GuidesCollectionObject
     */
    records: Array<GuideObject>;
    /**
     * 
     * @type {MetaParameters}
     * @memberof GuidesCollectionObject
     */
    meta: MetaParameters;
}

export function GuidesCollectionObjectFromJSON(json: any): GuidesCollectionObject {
    return GuidesCollectionObjectFromJSONTyped(json, false);
}

export function GuidesCollectionObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuidesCollectionObject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'title': json['title'],
        'description': json['description'],
        'icon': json['icon'],
        'alert': !exists(json, 'alert') ? undefined : AlertObjectFromJSON(json['alert']),
        'records': ((json['records'] as Array<any>).map(GuideObjectFromJSON)),
        'meta': MetaParametersFromJSON(json['meta']),
    };
}

export function GuidesCollectionObjectToJSON(value?: GuidesCollectionObject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'title': value.title,
        'description': value.description,
        'icon': value.icon,
        'alert': AlertObjectToJSON(value.alert),
        'records': ((value.records as Array<any>).map(GuideObjectToJSON)),
        'meta': MetaParametersToJSON(value.meta),
    };
}

