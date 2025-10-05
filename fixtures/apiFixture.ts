import {test as base} from "@playwright/test";
import {loginUser} from "../apiFeatures/user";
import {APIClient} from "../utils/APIClient";
import * as user from "../testData/API/user.json"

export const test = base.extend<{ client: APIClient }>({
    client: async ({request}, use) => {
        const client = new APIClient(request);
        const response= await loginUser(request, client, user.validLogin.userName, user.validLogin.password);
        if (response?.data?.token) client.setToken(response.data?.token);
        await use(client);
    },
});
export {expect} from "@playwright/test";

