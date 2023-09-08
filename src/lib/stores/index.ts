import { writable } from 'svelte/store';
import type { User } from 'firebase/auth';
import type { Product } from '../../global';

export const isLoading = writable(false);
export const user = writable<User>();
export const cartItems = writable<Product[]>([]);
