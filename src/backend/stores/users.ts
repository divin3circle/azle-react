import { Principal, StableBTreeMap } from "azle"

export const UsersStore = new StableBTreeMap<Principal, number>(0);