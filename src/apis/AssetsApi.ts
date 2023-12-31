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
    AssetCreateRequest,
    AssetCreateRequestFromJSON,
    AssetCreateRequestToJSON,
    AssetResponse,
    AssetResponseFromJSON,
    AssetResponseToJSON,
    AssetUpdateRequest,
    AssetUpdateRequestFromJSON,
    AssetUpdateRequestToJSON,
    ErrorsObject,
    ErrorsObjectFromJSON,
    ErrorsObjectToJSON,
} from '../models';

export interface CreateAssetRequest {
    assetCreateRequest: AssetCreateRequest;
}

export interface DeleteAssetRequest {
    asset: number;
}

export interface UpdateAssetRequest {
    asset: number;
    assetUpdateRequest: AssetUpdateRequest;
}

/**
 * 
 */
export class AssetsApi extends runtime.BaseAPI {

    /**
     * Create asset.
     */
    async createAssetRaw(requestParameters: CreateAssetRequest): Promise<runtime.ApiResponse<AssetResponse>> {
        if (requestParameters.assetCreateRequest === null || requestParameters.assetCreateRequest === undefined) {
            throw new runtime.RequiredError('assetCreateRequest','Required parameter requestParameters.assetCreateRequest was null or undefined when calling createAsset.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/assets`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AssetCreateRequestToJSON(requestParameters.assetCreateRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AssetResponseFromJSON(jsonValue));
    }

    /**
     * Create asset.
     */
    async createAsset(requestParameters: CreateAssetRequest): Promise<AssetResponse> {
        const response = await this.createAssetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete asset.
     */
    async deleteAssetRaw(requestParameters: DeleteAssetRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset','Required parameter requestParameters.asset was null or undefined when calling deleteAsset.');
        }

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
            path: `/api/assets/{asset}`.replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete asset.
     */
    async deleteAsset(requestParameters: DeleteAssetRequest): Promise<void> {
        await this.deleteAssetRaw(requestParameters);
    }

    /**
     * Update asset.
     */
    async updateAssetRaw(requestParameters: UpdateAssetRequest): Promise<runtime.ApiResponse<AssetResponse>> {
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset','Required parameter requestParameters.asset was null or undefined when calling updateAsset.');
        }

        if (requestParameters.assetUpdateRequest === null || requestParameters.assetUpdateRequest === undefined) {
            throw new runtime.RequiredError('assetUpdateRequest','Required parameter requestParameters.assetUpdateRequest was null or undefined when calling updateAsset.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/assets/{asset}`.replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: AssetUpdateRequestToJSON(requestParameters.assetUpdateRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AssetResponseFromJSON(jsonValue));
    }

    /**
     * Update asset.
     */
    async updateAsset(requestParameters: UpdateAssetRequest): Promise<AssetResponse> {
        const response = await this.updateAssetRaw(requestParameters);
        return await response.value();
    }

}
