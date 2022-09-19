import { request } from "supertest";
import {describe, expect, test} from '@jest/globals';
import { app } from "../app";

describe("Test create route", () => {
    test("Testing Create Todo", async()=> {
        const res = await request(app).post("/api/addTodo").send({
            name: "Create Test Todo"
        });
    })
})