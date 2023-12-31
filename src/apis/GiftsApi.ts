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
    ErrorsObject,
    ErrorsObjectFromJSON,
    ErrorsObjectToJSON,
    GiftCreateRequest,
    GiftCreateRequestFromJSON,
    GiftCreateRequestToJSON,
    GiftResponse,
    GiftResponseFromJSON,
    GiftResponseToJSON,
    GiftUpdateRequest,
    GiftUpdateRequestFromJSON,
    GiftUpdateRequestToJSON,
} from '../models';

export interface CreateGiftRequest {
    giftCreateRequest: GiftCreateRequest;
}

export interface DeleteGiftRequest {
    gift: number;
}

export interface UpdateGiftRequest {
    gift: number;
    giftUpdateRequest: GiftUpdateRequest;
}

/**
 * 
 */
export class GiftsApi extends runtime.BaseAPI {

    /**
     * Create gift.
     */
    async createGiftRaw(requestParameters: CreateGiftRequest): Promise<runtime.ApiResponse<GiftResponse>> {
        if (requestParameters.giftCreateRequest === null || requestParameters.giftCreateRequest === undefined) {
            throw new runtime.RequiredError('giftCreateRequest','Required parameter requestParameters.giftCreateRequest was null or undefined when calling createGift.');
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
            path: `/api/gifts`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GiftCreateRequestToJSON(requestParameters.giftCreateRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GiftResponseFromJSON(jsonValue));
    }

    /**
     * Create gift.
     */
    async createGift(requestParameters: CreateGiftRequest): Promise<GiftResponse> {
        const response = await this.createGiftRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete gift.
     */
    async deleteGiftRaw(requestParameters: DeleteGiftRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.gift === null || requestParameters.gift === undefined) {
            throw new runtime.RequiredError('gift','Required parameter requestParameters.gift was null or undefined when calling deleteGift.');
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
            path: `/api/gifts/{gift}`.replace(`{${"gift"}}`, encodeURIComponent(String(requestParameters.gift))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete gift.
     */
    async deleteGift(requestParameters: DeleteGiftRequest): Promise<void> {
        await this.deleteGiftRaw(requestParameters);
    }

    /**
     * Update gift.
     */
    async updateGiftRaw(requestParameters: UpdateGiftRequest): Promise<runtime.ApiResponse<GiftResponse>> {
        if (requestParameters.gift === null || requestParameters.gift === undefined) {
            throw new runtime.RequiredError('gift','Required parameter requestParameters.gift was null or undefined when calling updateGift.');
        }

        if (requestParameters.giftUpdateRequest === null || requestParameters.giftUpdateRequest === undefined) {
            throw new runtime.RequiredError('giftUpdateRequest','Required parameter requestParameters.giftUpdateRequest was null or undefined when calling updateGift.');
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
            path: `/api/gifts/{gift}`.replace(`{${"gift"}}`, encodeURIComponent(String(requestParameters.gift))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: GiftUpdateRequestToJSON(requestParameters.giftUpdateRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GiftResponseFromJSON(jsonValue));
    }

    /**
     * Update gift.
     */
    async updateGift(requestParameters: UpdateGiftRequest): Promise<GiftResponse> {
        const response = await this.updateGiftRaw(requestParameters);
        return await response.value();
    }

}
