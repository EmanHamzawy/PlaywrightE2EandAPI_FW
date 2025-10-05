import {APIRequestContext} from "@playwright/test";

export class APIClient {
    private request : APIRequestContext;
    private token: string | null = null;

    constructor(request : APIRequestContext) {
        this.request = request;
    }
    setToken(token: string) {
        this.token = token;
    }
    getHeaders(auth= true){
        const headers: Record<string, string> = {
            "accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        };

        if (auth && this.token) {
            headers["X-Auth-Token"] = this.token;
        }

        return headers;
    }

}