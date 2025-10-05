import { test, expect} from "../../fixtures/apiFixture";
import {registerUser,changePassword} from "../../apiFeatures/user";
import * as user from "../../testData/API/user.json"


test ("Positive: Valid Register" , async ({request, client }) => {
    const timeStamp = Date.now() / 1000;
    const response = await registerUser(request, client, user.register.name, `${timeStamp}${user.register.email}`,user.register.password);
    const responseJson= await response.json();
    const status= response.status();
    await test.info().attach("Response: ",{
        body: JSON.stringify(
            {
                status,
                body: responseJson,
            },
            null,
            2
        )
    });
    expect(status).toBe(201);
    expect(responseJson).toHaveProperty("message", "User account created successfully");
    expect(response.headers()["content-type"]).toContain("application/json");
    });

test ("Negative: register User with invalid mail" , async ({request, client }) => {
    const timeStamp = Date.now() / 1000;
    const response = await registerUser(request, client, user.register.name, `${timeStamp}${user.invalidRegister.email}`,user.register.password);

    const responseJson= await response.json();
    const status= response.status();
    await test.info().attach("Response: ",{
        body: JSON.stringify(
            {
                status,
                body: responseJson,
            },
            null,
            2
        )
    });
    expect(status).toBe(400);
    expect(responseJson).toHaveProperty("message", "A valid email address is required");
});

test ("Positive: Change Password" , async ({request, client}) => {
    const response = await changePassword(request, client, true,user.changePwd.currentPassword, user.changePwd.newPassword);

    const responseJson= await response.json();
    const status= response.status();
    await test.info().attach("Response: ",{
        body: JSON.stringify(
            {
                status,
                body: responseJson,
            },
            null,
            2
        )
    });

    expect(status).toBe(200);
    expect(responseJson).toHaveProperty("success", true);
    expect(response.headers()["content-type"]).toContain("application/json");

    //Revert
    const response2 = await changePassword(request, client, true,user.changePwd.newPassword, user.changePwd.currentPassword);
    const body2 = await response2.json();
    console.log(body2);


});

test ("Negative: Change Password with Unauthorized" , async ({request, client}) => {
    const response = await changePassword(request, client, false,user.changePwd.currentPassword, user.changePwd.newPassword);

    const responseJson= await response.json();
    const status= response.status();
    await test.info().attach("Response: ",{
        body: JSON.stringify(
            {
                status,
                body: responseJson,
            },
            null,
            2
        )
    });
    expect(status).toBe(401);
});
