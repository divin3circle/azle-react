import { IDL, query, update, msgCaller, Principal } from "azle";
import { NotesStore } from "./stores/notes";
import { Note } from "./types";

export default class {
  @query([IDL.Principal], IDL.Vec(Note))
  getNotes(userID: Principal): Note[] {
    if (!userID) {
      console.log("User not authenticated");
      return [];
    }
    return NotesStore.get(userID) || [];
  }

  @update([IDL.Principal,IDL.Text], IDL.Bool)
  setNote(userID: Principal, message: string): boolean {
    if (!userID) {
      console.log("User not authenticated");
      return false;
    }
    const timestamp = new Date().getTime();
    const userNotes = NotesStore.get(userID) || [];
    userNotes.push({
      id: this.getNextNoteID(userID),
      content: message,
      createdAt: timestamp,
    });
    NotesStore.insert(userID, userNotes);
    return true;
  }
  @query([IDL.Principal], IDL.Text)
  getNextNoteID(userID: Principal): string {
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
  @query([IDL.Principal,IDL.Text], IDL.Opt(Note))
  getNote(userID: Principal, id: string): Note | null {
    if (!userID) {
      console.log("User not authenticated");
      return null;
    }
    return NotesStore.get(userID).find((note) => note.id === id) || "-1";
  }
  @update([IDL.Principal,IDL.Text], IDL.Bool)
  deleteNote(userID: Principal, id: string): boolean {
    if (!userID) {
      console.log("User not authenticated");
      return false;
    }
  }
}
