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


import * as runtime from '../runtime';
import {
    DocumentsResponse,
    DocumentsResponseFromJSON,
    DocumentsResponseToJSON,
} from '../models';

/**
 * 
 */
export class DocumentsApi extends runtime.BaseAPI {

    /**
     * Get user documents.
     */
    async getDocumentsRaw(): Promise<runtime.ApiResponse<DocumentsResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/documents`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DocumentsResponseFromJSON(jsonValue));
    }

    /**
     * Get user documents.
     */
    async getDocuments(): Promise<DocumentsResponse> {
        const response = await this.getDocumentsRaw();
        return await response.value();
    }

}