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
 * Document progress object.
 * @export
 * @enum {string}
 */
export enum DocumentProgress {
    ToDo = 'To do',
    InProgress = 'In progress',
    Completed = 'Completed',
    Unavailable = 'Unavailable',
    Purchased = 'Purchased',
    Signed = 'Signed',
    Printed = 'Printed',
    Checked = 'Checked'
}

export function DocumentProgressFromJSON(json: any): DocumentProgress {
    return DocumentProgressFromJSONTyped(json, false);
}

export function DocumentProgressFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentProgress {
    return json as DocumentProgress;
}

export function DocumentProgressToJSON(value?: DocumentProgress | null): any {
    return value as any;
}

