import { IDL, query, update, msgCaller } from "azle";
import { NotesStore } from "./stores/notes";
import { Note } from "./types";

export default class {
  @query([], IDL.Vec(Note))
  getNotes(): Note[] {
    const userID = msgCaller();
    if (!userID) {
      console.log("User not authenticated");
      return [];
    }
    return NotesStore.get(userID) || [];
  }

  @update([IDL.Text], IDL.Bool)
  setNote(message: string): boolean {
    const userID = msgCaller();
    if (!userID) {
      console.log("User not authenticated");
      return false;
    }
    const timestamp = new Date().getTime();
    const userNotes = NotesStore.get(userID) || [];
    userNotes.push({
      id: this.getNextNoteID(),
      content: message,
      createdAt: timestamp,
    });
    NotesStore.insert(userID, userNotes);
    return true;
  }
  @query([], IDL.Text)
  getNextNoteID(): string {
    const userID = msgCaller();
    if (!userID) {
      console.log("User not authenticated");
      return "-1";
    }
    const userNotes = NotesStore.get(userID) || [];
    if (userNotes.length === 0) {
      return "01";
    }
    if (userNotes.length < 9) {
      return `0${userNotes.length + 1}`;
    }
    const currentID = userNotes.length + 1;
    return currentID.toString();
  }
}
