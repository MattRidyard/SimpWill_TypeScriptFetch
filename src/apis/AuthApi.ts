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
    MessageResponse,
    MessageResponseFromJSON,
    MessageResponseToJSON,
    SetNewPasswordData,
    SetNewPasswordDataFromJSON,
    SetNewPasswordDataToJSON,
    UserAuthenticateWithFacebook,
    UserAuthenticateWithFacebookFromJSON,
    UserAuthenticateWithFacebookToJSON,
    UserAuthenticateWithGoogle,
    UserAuthenticateWithGoogleFromJSON,
    UserAuthenticateWithGoogleToJSON,
    UserDataForLogin,
    UserDataForLoginFromJSON,
    UserDataForLoginToJSON,
    UserDataForSignUp,
    UserDataForSignUpFromJSON,
    UserDataForSignUpToJSON,
    UserResponse,
    UserResponseFromJSON,
    UserResponseToJSON,
    UserSendResetPasswordLinkData,
    UserSendResetPasswordLinkDataFromJSON,
    UserSendResetPasswordLinkDataToJSON,
} from '../models';

export interface FacebookLoginRequest {
    userAuthenticateWithFacebook: UserAuthenticateWithFacebook;
}

export interface GoogleLoginRequest {
    userAuthenticateWithGoogle: UserAuthenticateWithGoogle;
}

export interface RequestResetPasswordLinkRequest {
    userSendResetPasswordLinkData: UserSendResetPasswordLinkData;
}

export interface ResetPasswordRequest {
    setNewPasswordData: SetNewPasswordData;
}

export interface UserLoginRequest {
    userDataForLogin: UserDataForLogin;
}

export interface UserSignUpRequest {
    userDataForSignUp: UserDataForSignUp;
}

/**
 * 
 */
export class AuthApi extends runtime.BaseAPI {

    /**
     * Authenticate with facebook.
     */
    async facebookLoginRaw(requestParameters: FacebookLoginRequest): Promise<runtime.ApiResponse<UserResponse>> {
        if (requestParameters.userAuthenticateWithFacebook === null || requestParameters.userAuthenticateWithFacebook === undefined) {
            throw new runtime.RequiredError('userAuthenticateWithFacebook','Required parameter requestParameters.userAuthenticateWithFacebook was null or undefined when calling facebookLogin.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/auth/login/facebook`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserAuthenticateWithFacebookToJSON(requestParameters.userAuthenticateWithFacebook),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserResponseFromJSON(jsonValue));
    }

    /**
     * Authenticate with facebook.
     */
    async facebookLogin(requestParameters: FacebookLoginRequest): Promise<UserResponse> {
        const response = await this.facebookLoginRaw(requestParameters);
        return await response.value();
    }

    /**
     * Authenticate with google.
     */
    async googleLoginRaw(requestParameters: GoogleLoginRequest): Promise<runtime.ApiResponse<UserResponse>> {
        if (requestParameters.userAuthenticateWithGoogle === null || requestParameters.userAuthenticateWithGoogle === undefined) {
            throw new runtime.RequiredError('userAuthenticateWithGoogle','Required parameter requestParameters.userAuthenticateWithGoogle was null or undefined when calling googleLogin.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/auth/login/google`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserAuthenticateWithGoogleToJSON(requestParameters.userAuthenticateWithGoogle),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserResponseFromJSON(jsonValue));
    }

    /**
     * Authenticate with google.
     */
    async googleLogin(requestParameters: GoogleLoginRequest): Promise<UserResponse> {
        const response = await this.googleLoginRaw(requestParameters);
        return await response.value();
    }

    /**
     * Refresh user auth token.
     * Refresh token
     */
    async refreshTokenRaw(): Promise<runtime.ApiResponse<UserResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/auth/refresh`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserResponseFromJSON(jsonValue));
    }

    /**
     * Refresh user auth token.
     * Refresh token
     */
    async refreshToken(): Promise<UserResponse> {
        const response = await this.refreshTokenRaw();
        return await response.value();
    }

    /**
     * User will recieve an email with reset password token.
     * Send link to reset password.
     */
    async requestResetPasswordLinkRaw(requestParameters: RequestResetPasswordLinkRequest): Promise<runtime.ApiResponse<MessageResponse>> {
        if (requestParameters.userSendResetPasswordLinkData === null || requestParameters.userSendResetPasswordLinkData === undefined) {
            throw new runtime.RequiredError('userSendResetPasswordLinkData','Required parameter requestParameters.userSendResetPasswordLinkData was null or undefined when calling requestResetPasswordLink.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/password/reset`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserSendResetPasswordLinkDataToJSON(requestParameters.userSendResetPasswordLinkData),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MessageResponseFromJSON(jsonValue));
    }

    /**
     * User will recieve an email with reset password token.
     * Send link to reset password.
     */
    async requestResetPasswordLink(requestParameters: RequestResetPasswordLinkRequest): Promise<MessageResponse> {
        const response = await this.requestResetPasswordLinkRaw(requestParameters);
        return await response.value();
    }

    /**
     * Reset user password.
     */
    async resetPasswordRaw(requestParameters: ResetPasswordRequest): Promise<runtime.ApiResponse<MessageResponse>> {
        if (requestParameters.setNewPasswordData === null || requestParameters.setNewPasswordData === undefined) {
            throw new runtime.RequiredError('setNewPasswordData','Required parameter requestParameters.setNewPasswordData was null or undefined when calling resetPassword.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/password/change`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SetNewPasswordDataToJSON(requestParameters.setNewPasswordData),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MessageResponseFromJSON(jsonValue));
    }

    /**
     * Reset user password.
     */
    async resetPassword(requestParameters: ResetPasswordRequest): Promise<MessageResponse> {
        const response = await this.resetPasswordRaw(requestParameters);
        return await response.value();
    }

    /**
     * Login by email-password pair or google/facebook access token.
     * Log in
     */
    async userLoginRaw(requestParameters: UserLoginRequest): Promise<runtime.ApiResponse<UserResponse>> {
        if (requestParameters.userDataForLogin === null || requestParameters.userDataForLogin === undefined) {
            throw new runtime.RequiredError('userDataForLogin','Required parameter requestParameters.userDataForLogin was null or undefined when calling userLogin.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/auth/login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserDataForLoginToJSON(requestParameters.userDataForLogin),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserResponseFromJSON(jsonValue));
    }

    /**
     * Login by email-password pair or google/facebook access token.
     * Log in
     */
    async userLogin(requestParameters: UserLoginRequest): Promise<UserResponse> {
        const response = await this.userLoginRaw(requestParameters);
        return await response.value();
    }

    /**
     * Logout using bearer token.
     * Logout
     */
    async userLogoutRaw(): Promise<runtime.ApiResponse<MessageResponse>> {
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
            path: `/api/auth/logout`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MessageResponseFromJSON(jsonValue));
    }

    /**
     * Logout using bearer token.
     * Logout
     */
    async userLogout(): Promise<MessageResponse> {
        const response = await this.userLogoutRaw();
        return await response.value();
    }

    /**
     * Register with user name, email and password
     * Registration
     */
    async userSignUpRaw(requestParameters: UserSignUpRequest): Promise<runtime.ApiResponse<UserResponse>> {
        if (requestParameters.userDataForSignUp === null || requestParameters.userDataForSignUp === undefined) {
            throw new runtime.RequiredError('userDataForSignUp','Required parameter requestParameters.userDataForSignUp was null or undefined when calling userSignUp.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/auth/register`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserDataForSignUpToJSON(requestParameters.userDataForSignUp),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserResponseFromJSON(jsonValue));
    }

    /**
     * Register with user name, email and password
     * Registration
     */
    async userSignUp(requestParameters: UserSignUpRequest): Promise<UserResponse> {
        const response = await this.userSignUpRaw(requestParameters);
        return await response.value();
    }

}
