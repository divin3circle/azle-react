import { IDL } from "azle";

export type Note = {
  id: string;
  content: string;
  createdAt: number;
};

export const Note = IDL.Record({
  id: IDL.Text,
  content: IDL.Text,
  createdAt: IDL.Nat,
});
