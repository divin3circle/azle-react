import { Principal, StableBTreeMap } from "azle"
import { Note } from "../types";

export const NotesStore = new StableBTreeMap<Principal, Note[]>(0);
