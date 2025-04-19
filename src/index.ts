import { printMessage } from "./logger";

// src/index.ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}

const message: string = greet("World");
printMessage(message);

// Example of using a modern feature (optional chaining)
const user = { profile: { email: "test@example.com" } };
console.log("User Email:", user?.profile?.email);

export { greet }; // Example export
