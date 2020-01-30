const request = require("supertest");
const server = require("../api/server");

describe("dogsRouter.js", function() {
  describe("enviroment", function() {
    it("should set enviroment to testing", function() {
      expect(process.env.DB_ENV).toBe("testing"); // make sure it fails put "development" in place of testing
    });
  });
  describe("GET /dogs", function() {
    it("should return a 200 OK", function() {
      return request(server) //make sure to put return
        .get("/api/dogs")
        .then(res => {
          expect(res.status).toBe(200); //test 400 to see if it fails
        });
    });
  });
  describe(" POST /dogs", function() {
    it("should be returning json", function() {
      return request(server)
        .post("/api/dogs")
        .expect("Content-Type", /json/); //test with html
    });
    it("should return a 200 OK", function() {
      return request(server) //make sure to put return
        .post("/api/dogs")
        .send({
          name: "andrew",
          breed: "dog"
        })
        .then(res => {
          expect(res.status).toBe(201); //test 400 to see if it fails
        });
    });
  });

  describe("DELETE /:id", function() {
    it("should return a Json", function() {
      return request(server) //make sure to put return
        .delete("/:id")

        .then(res => {
          expect(res.type).toMatch(/text/i);
        });
    });
    it("should return a 404", function() {
      return request(server) //make sure to put return
        .delete("/9")
        .send({
          name: "andrew",
          breed: "dog"
        })
        .then(res => {
          expect(res.status).toBe(404);
        });
    });
  });
});
