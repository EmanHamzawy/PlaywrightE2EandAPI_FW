import {test, expect} from "../../fixtures/apiFixture";
import {createNote, updateNote, deleteNote} from "../../apiFeatures/notes";
import * as note from "../../testData/API/note.json"

let noteId: string;
test.describe.serial("Notes API", () => {
    test("Positive: create Note with valid data", async ({request, client}) => {
        const response = await createNote(request, client,true, note.createNote.validNote.title, note.createNote.validNote.desc, note.createNote.validNote.category);

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
        noteId= responseJson.data.id;
        expect(status).toBe(200);
        expect(response.headers()["content-type"]).toContain("application/json");
    });

    test("Positive: Update Note with valid data", async ({request, client}) => {
        const response = await updateNote(request, client,true, note.updateNote.valid.title,note.updateNote.valid.desc, note.updateNote.valid.completed, note.updateNote.valid.category ,noteId);
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
        expect(responseJson.success).toBe( true);
        expect(response.headers()["content-type"]).toContain("application/json");
    })

    test("Positive: delete Note", async ({request, client}) => {
        const response = await deleteNote(request, client, true, noteId);

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
    })

});

test("Negative: create Note with invalid category", async ({request, client}) => {
    const response = await createNote(request, client,true, note.createNote.validNote.title, note.createNote.validNote.desc, note.createNote.invalidNote.invalidCategory);
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
});

test("Negative: Update Note with Unauthorized", async ({request, client}) => {
    const response = await updateNote(request, client,false, note.updateNote.valid.title,note.updateNote.valid.desc, note.updateNote.valid.completed, note.updateNote.valid.category ,noteId);
    // console.log(response);
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
    expect(responseJson.success).toBe( false);
});

test("Negative: delete with invalid noteId", async ({request, client}) => {
    const response = await deleteNote(request, client, true, note.deleteNote.invalidId);
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
    expect(responseJson).toHaveProperty("success", false);
});

test("Negative: Delete Note with Unauthorized", async ({request, client}) => {

    const createResponse = await createNote(request, client,true, note.createNote.validNote.title, note.createNote.validNote.desc, note.createNote.validNote.category);
    const body= await createResponse.json()
    noteId= body.data.id;


    const response = await deleteNote(request, client, false, noteId);
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
    expect(responseJson).toHaveProperty("success", false);
});
