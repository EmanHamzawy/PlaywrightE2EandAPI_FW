// import {test,expect} from "@playwright/test";
// import {APIClient} from "../../utils/APIClient";
//
//
// const apiClient= new APIClient();
// const baseURL = "https://practice.expandtesting.com/notes/api";
// test("registerNewUser", async ({request}) => {
//     const registerResponse = await request.post(`${baseURL}/users/register`, {
//         headers: apiClient.getHeaders(),
//         form:{
//             'name': 'userName',
//             'email': 'test2232@mail.com',
//             'password': 'Password'
//         }
//     })
//     const responseBody = await registerResponse.json();
//     console.log(registerResponse.status())
//     console.log(responseBody);
//     expect(responseBody.status).toEqual(409)
// })
// test("login", async ({request}) => {
//     const registerResponse = await request.post(`${baseURL}/users/login`, {
//         headers: apiClient.getHeaders(),
//         form: {
//             'email': 'test2232@mail.com',
//             'password': 'Password2'
//         },
//
//     })
//     const responseBody = await registerResponse.json();
//     console.log(responseBody)
//     console.log(responseBody.data.token);
//     const token = responseBody.data.token;
// })
// test("changePassword", async ({request}) => {
//     const changePasswordResponse = await request.post(`${baseURL}/users/change-password`, {
//         headers: apiClient.getHeaders(),
//         form: {
//             'currentPassword': 'Password2',
//             'newPassword': 'Password2'
//         }
//     })
//     const responseBody2 = await changePasswordResponse.json();
//     console.log(responseBody2);
//
// })
//
// test("createNote", async ({request}) => {
//     const createNoteResponse = await request.post(`${baseURL}/notes`, {
//         headers: apiClient.getHeaders(),
//         form: {
//             'title': 'note1',
//             'description': 'desc',
//             'category': 'Work'
//         }
//     })
//     const createNoteResponseBody = await createNoteResponse.json();
//     console.log(createNoteResponseBody);
//     const noteId = createNoteResponseBody.data.id;
//
// })
//
// test("updateNote", async ({request}) => {
//
//     const updateNoteResponse = await request.put(`${baseURL}/notes/${noteId}`, {
//         headers: apiClient.getHeaders(),
//         form: {
//             'title': 'note1',
//             'description': 'desc',
//             'completed': 'true',
//             'category': 'Personal'
//         }
//     })
//     const updateNoteResponseBody = await updateNoteResponse.json();
//     console.log(updateNoteResponseBody);
//
// })
//
// test("deleteNote", async ({request}) => {
//     const deleteNoteResponse = await request.delete(`${baseURL}/notes/${noteId}`, {
//         headers: apiClient.getHeaders()
//     })
//     const deleteNoteResponseBody = await deleteNoteResponse.json();
//     console.log(deleteNoteResponseBody);
// })