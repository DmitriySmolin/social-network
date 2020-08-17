import { updateNewMessageBodyCreator, dialogsReducer, sendMessageCreator } from "./dialogs-reducer";

test("correct dialogsPage update new message body", () => {
  let startState = {
    dialogs: [
      { id: 1, name: "Dimych" },
      { id: 2, name: "Andrey" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Sasha" },
      { id: 5, name: "Viktor" },
      { id: 6, name: "Valera" },
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How is your it-kamasutra" },
      { id: 3, message: "Yo" },
    ],
    newMessageBody: "",
  };
  let body = "new message body";

  const endState = dialogsReducer(startState, updateNewMessageBodyCreator(body));

  expect(endState.newMessageBody).toBe("new message body");
  // expect(endState[0].id).toBe(todolistId2);
});

test("correct dialogsPage send message", () => {
  let startState = {
    dialogs: [
      { id: 1, name: "Dimych" },
      { id: 2, name: "Andrey" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Sasha" },
      { id: 5, name: "Viktor" },
      { id: 6, name: "Valera" },
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How is your it-kamasutra" },
      { id: 3, message: "Yo" },
    ],
    newMessageBody: "new message",
  };

  const endState = dialogsReducer(startState, sendMessageCreator());

  expect(endState.messages.length).toBe(4);
  expect(endState.messages[3].message).toBe("new message");
  // expect(endState[0].id).toBe(todolistId2);
});
