const request = require("supertest");
const server = require("./server.js");

describe("server.js", function() {
  describe("enviroment", function() {
    it("should set enviroment to testing", function() {
      expect(process.env.DB_ENV).toBe("testing"); // make sure it fails put "development" in place of testing
    });
  });
});
