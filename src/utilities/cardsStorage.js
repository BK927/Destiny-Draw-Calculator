import { writable } from "svelte/store";

// should be like { name: name of the card, count: number of copies }
export const cards = writable([]);
export const combinationList = writable([]);
