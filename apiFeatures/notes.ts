import {APIRequestContext} from "@playwright/test";
import {APIClient} from "../utils/APIClient";
import * as data from "../testData/API/urlData.json"

const baseURL = data.baseURL;

export async function createNote(request:APIRequestContext,  client:APIClient,auth:boolean, title: string, description: string, category:string){
    return request.post(`${baseURL}${data.path.notes.createNote}`, {
        headers: client.getHeaders(auth),
        form: {
            title,
            description,
            category,
        }
    })
}

export async function updateNote(request:APIRequestContext,  client:APIClient, auth:boolean, title: string, description: string, completed:boolean, category:string, noteId:string){
    return request.put(`${baseURL}${data.path.notes.updateNote}${noteId}`, {
        headers: client.getHeaders(auth),
        form: {
            title,
            description,
            completed,
            category,
        }
    })
}

export async function deleteNote(request:APIRequestContext,  client:APIClient,auth:boolean , noteId: string){
    return request.delete(`${baseURL}${data.path.notes.deleteNote}${noteId}`, {
        headers: client.getHeaders(auth)
    })
}