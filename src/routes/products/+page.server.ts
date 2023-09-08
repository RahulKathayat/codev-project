import { getCurrentUser } from '$lib/utils/auth';
import axios from 'axios';
import type { PageServerLoad } from './$types';
import type { Product } from '../../global';

export const load: PageServerLoad = async ({ params }) => {
	const data = await axios.get<Product[]>('https://fakestoreapi.com/products/');

	return {
		products: data.data || []
	};
};
