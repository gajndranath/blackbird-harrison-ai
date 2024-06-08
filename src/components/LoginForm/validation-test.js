// src/validation.test.js
import { validateEmail, validatePassword } from "./validation";

describe("Email Validation", () => {
  test("Valid email should pass", () => {
    expect(validateEmail("test@example.com")).toBe(true);
  });

  test("Invalid email should fail", () => {
    expect(validateEmail("test@example")).toBe(false);
    expect(validateEmail("testexample.com")).toBe(false);
    expect(validateEmail("test@.com")).toBe(false);
  });
});

describe("Password Validation", () => {
  test("Valid password should pass", () => {
    expect(validatePassword("Aa1!aaaa")).toBe(true);
  });

  test("Invalid password should fail", () => {
    expect(validatePassword("aaaa")).toBe(false); // Too short
    expect(validatePassword("aaaaaaaa")).toBe(false); // No uppercase, no digits, no special character
    expect(validatePassword("AAAAAAAA")).toBe(false); // No lowercase, no digits, no special character
    expect(validatePassword("Aa1aaaaa")).toBe(false); // No special character
    expect(validatePassword("Aa!aaaaa")).toBe(false); // No digit
  });
});
