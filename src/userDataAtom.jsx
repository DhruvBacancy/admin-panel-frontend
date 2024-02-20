// userDataAtom.js
import { atom } from "jotai";

export const userDataAtom = atom([
  {
    id: '5cf5e048-f368-4563-8e5b-4fba748dd8a9',
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    password: "password1",
    role: "Admin",
  },
  {
    id: 'fbcd7c48-bf5f-47cc-8c3c-119a5182d201',
    firstName: "Jane",
    lastName: "Doe",
    email: "jane@example.com",
    password: "password2",
    role: "User",
  },
]);
