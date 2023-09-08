import { writable } from 'svelte/store';
import type { User } from 'firebase/auth';

export const isLoading = writable(false);
export const user = writable<User>();
export const cartItems = writable<any[]>([]);
