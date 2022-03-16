import { writable } from "svelte/store";

// should be like { name: name of the card, count: number of copies, combinationArr: boolen array of cards }
export const cards = writable([]);
export const numberOfDeck = writable(40);
