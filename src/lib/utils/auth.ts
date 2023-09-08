import { isLoading, user } from '$lib/stores';
import {
	signInWithPopup,
	GoogleAuthProvider,
	getAuth,
	onAuthStateChanged,
	signOut
} from 'firebase/auth';
import { app } from './config';
import { goto } from '$app/navigation';
import { page } from '$app/stores';
import { get } from 'svelte/store';

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export const signInWithGoogle = async () => {
	isLoading.set(true);
	await signInWithPopup(auth, provider)
		.then((result) => {
			user.set(result.user);
			goto('/');
		})
		.catch((error) => {
			// addNotification(error.message, true);
			console.log(error);
		});

	isLoading.set(false);
};

export const signOutUser = async () => {
	try {
		isLoading.set(true);
		await signOut(auth);
		isLoading.set(false);
	} catch (e) {
		console.log(e);
	}
};

export const getCurrentUser = () => {
	onAuthStateChanged(auth, (userData) => {
		const protectedPages = ['/cart'];

		if (userData) {
			isLoading.set(true);
			user.set(userData);
			isLoading.set(false);
			if (get(page).route?.id === '/login') {
				goto('/');
			}
		} else {
			if (protectedPages.includes(get(page).route?.id || '')) {
				goto('/login');
			}
		}

		return userData;
	});
};
