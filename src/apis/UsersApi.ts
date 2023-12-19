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
    HistoryResponse,
    HistoryResponseFromJSON,
    HistoryResponseToJSON,
    PaymentRequest,
    PaymentRequestFromJSON,
    PaymentRequestToJSON,
    PaymentResponse,
    PaymentResponseFromJSON,
    PaymentResponseToJSON,
    ProfileRequest,
    ProfileRequestFromJSON,
    ProfileRequestToJSON,
    ProfileResponse,
    ProfileResponseFromJSON,
    ProfileResponseToJSON,
    SubscriptionRequest,
    SubscriptionRequestFromJSON,
    SubscriptionRequestToJSON,
    SubscriptionResponse,
    SubscriptionResponseFromJSON,
    SubscriptionResponseToJSON,
} from '../models';

export interface DeleteUserRequest {
    user: number;
}

export interface SendDeleteEmailRequest {
    user: number;
}

export interface UpdateUserRequest {
    profileRequest: ProfileRequest;
}

export interface UpdateUserPaymentRequest {
    paymentRequest: PaymentRequest;
}

export interface UserSubscriptionRequest {
    subscriptionRequest: SubscriptionRequest;
}

/**
 * 
 */
export class UsersApi extends runtime.BaseAPI {

    /**
     * Cancel subscription.
     */
    async cancelSubscriptionRaw(): Promise<runtime.ApiResponse<void>> {
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
            path: `/api/subscription`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Cancel subscription.
     */
    async cancelSubscription(): Promise<void> {
        await this.cancelSubscriptionRaw();
    }

    /**
     * Delete user.
     */
    async deleteUserRaw(requestParameters: DeleteUserRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling deleteUser.');
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
            path: `/api/user/delete`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete user.
     */
    async deleteUser(requestParameters: DeleteUserRequest): Promise<void> {
        await this.deleteUserRaw(requestParameters);
    }

    /**
     * Get info about user.
     */
    async getUserRaw(): Promise<runtime.ApiResponse<ProfileResponse>> {
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
            path: `/api/user/profile`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ProfileResponseFromJSON(jsonValue));
    }

    /**
     * Get info about user.
     */
    async getUser(): Promise<ProfileResponse> {
        const response = await this.getUserRaw();
        return await response.value();
    }

    /**
     * Get user documents.
     */
    async getUserHistoryRaw(): Promise<runtime.ApiResponse<HistoryResponse>> {
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
            path: `/api/user/history`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => HistoryResponseFromJSON(jsonValue));
    }

    /**
     * Get user documents.
     */
    async getUserHistory(): Promise<HistoryResponse> {
        const response = await this.getUserHistoryRaw();
        return await response.value();
    }

    /**
     * Get current user payment info.
     */
    async getUserPaymentRaw(): Promise<runtime.ApiResponse<PaymentResponse>> {
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
            path: `/api/user/payment`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentResponseFromJSON(jsonValue));
    }

    /**
     * Get current user payment info.
     */
    async getUserPayment(): Promise<PaymentResponse> {
        const response = await this.getUserPaymentRaw();
        return await response.value();
    }

    /**
     * Send delete email.
     */
    async sendDeleteEmailRaw(requestParameters: SendDeleteEmailRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling sendDeleteEmail.');
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
            path: `/api/user/{user}`.replace(`{${"user"}}`, encodeURIComponent(String(requestParameters.user))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Send delete email.
     */
    async sendDeleteEmail(requestParameters: SendDeleteEmailRequest): Promise<void> {
        await this.sendDeleteEmailRaw(requestParameters);
    }

    /**
     * Update user.
     */
    async updateUserRaw(requestParameters: UpdateUserRequest): Promise<runtime.ApiResponse<ProfileResponse>> {
        if (requestParameters.profileRequest === null || requestParameters.profileRequest === undefined) {
            throw new runtime.RequiredError('profileRequest','Required parameter requestParameters.profileRequest was null or undefined when calling updateUser.');
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
            path: `/api/user/profile`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ProfileRequestToJSON(requestParameters.profileRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ProfileResponseFromJSON(jsonValue));
    }

    /**
     * Update user.
     */
    async updateUser(requestParameters: UpdateUserRequest): Promise<ProfileResponse> {
        const response = await this.updateUserRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update user payment info.
     */
    async updateUserPaymentRaw(requestParameters: UpdateUserPaymentRequest): Promise<runtime.ApiResponse<PaymentResponse>> {
        if (requestParameters.paymentRequest === null || requestParameters.paymentRequest === undefined) {
            throw new runtime.RequiredError('paymentRequest','Required parameter requestParameters.paymentRequest was null or undefined when calling updateUserPayment.');
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
            path: `/api/user/payment`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PaymentRequestToJSON(requestParameters.paymentRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentResponseFromJSON(jsonValue));
    }

    /**
     * Update user payment info.
     */
    async updateUserPayment(requestParameters: UpdateUserPaymentRequest): Promise<PaymentResponse> {
        const response = await this.updateUserPaymentRaw(requestParameters);
        return await response.value();
    }

    /**
     * work with user subscription.
     */
    async userSubscriptionRaw(requestParameters: UserSubscriptionRequest): Promise<runtime.ApiResponse<SubscriptionResponse>> {
        if (requestParameters.subscriptionRequest === null || requestParameters.subscriptionRequest === undefined) {
            throw new runtime.RequiredError('subscriptionRequest','Required parameter requestParameters.subscriptionRequest was null or undefined when calling userSubscription.');
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
            path: `/api/user/subscription`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionRequestToJSON(requestParameters.subscriptionRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionResponseFromJSON(jsonValue));
    }

    /**
     * work with user subscription.
     */
    async userSubscription(requestParameters: UserSubscriptionRequest): Promise<SubscriptionResponse> {
        const response = await this.userSubscriptionRaw(requestParameters);
        return await response.value();
    }

}