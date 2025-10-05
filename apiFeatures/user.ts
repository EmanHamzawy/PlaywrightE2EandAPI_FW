import {APIRequestContext, test} from "@playwright/test"
import {APIClient } from "../utils/APIClient"
import * as data from "../testData/API/urlData.json"

const baseURL = data.baseURL;

export async function registerUser(request: APIRequestContext, client: APIClient, name: string, email: string, password: string) {
    return request.post(`${baseURL}${data.path.user.register}`, {
        headers: client.getHeaders(),
        form: { name, email, password },
    });
}

export async function loginUser(request: APIRequestContext, client: APIClient, email: string, password: string) {
    const response = await request.post(`${baseURL}${data.path.user.login}`, {
        headers: client.getHeaders(),
        form: { email, password }
    })
    const responseBody = await response.json()
    console.log(responseBody);
    return responseBody;
}

export async function changePassword(request: APIRequestContext, client:APIClient, auth: boolean, currentPassword: string, newPassword: string) {
    return request.post(`${baseURL}${data.path.user.changePass}`, {
        headers: client.getHeaders(auth),
        form: { currentPassword, newPassword }
    })
}
