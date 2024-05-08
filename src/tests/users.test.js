// You already have the methods imported
import { default as expect } from "expect";
import { getUser, getUsers } from "../users";

const { api } = require("./users");

describe("api", () => {
  it("should return user data when ID is valid", () => {
    const validUserId = 3;

    return api(validUserId).then((userData) => {
      expect(userData).toBeDefined()
      expect(userData.id).toBe(validUserId)
    });
  });

  it("should reject with an error when ID is invalid", () => {
    const invalidUserId = 999;

    return expect(api(invalidUserId)).rejects.toThrow(
      "Usuario no encontrado"
    );
  });
});// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

// READ documentation

