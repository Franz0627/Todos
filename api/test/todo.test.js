import  request  from "supertest";
const app = require("../app")

describe("Testing Add Todo route", () => {
    test("Testing Add Todo", async()=> {
        const res = await request(app).post("/api/addTodo").send({
            name: "Create Test Todo"
        });
        expect(res.body.status).toBe("success");
        expect(res.body.message).toBe("Todo added Successfully");
    })
});

describe("Testing Update Todo route", () => {
    test("Testing Update Todo", async()=> {
        const res = await request(app).post("/api/updateTodo/" + "6325c97484a5a3c49b63d61c").send({
            name: "Update Test Todo"
        });
        expect(res.body.status).toBe("success");
        expect(res.body.message).toBe("Todo Successfully Updated");
    })
});

describe("Testing Delete Todo route", () => {
    test("Testing Delete Todo", async()=> {
        const res = await request(app).post("/api/deleteTodo").send({
            id: "632745a747a86d514ce39950"
        });
        expect(res.body.status).toBe("success");
        expect(res.body.message).toBe("Todo Successfully Deleted");
    })
});

describe("Testing Get Todo route", () => {
    test("Testing Get Todo", async()=> {
        const res = await request(app).get("/api/getTodo").send({
            id: "632745a747a86d514ce39950"
        });
        expect(res.body.status).toBe("success");
        expect(res.body.message).toBe("Todo fetched");
    })
})