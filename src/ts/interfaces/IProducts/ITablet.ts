import { TColors } from './../../types/TColors';

export interface ITablet {
	articleName: string;
	model: string;
	price: number;
	brand: string;
	colors: TColors[];
	quantity: number;
	rating: number;
	screen: {
		screenDiagonal: string;
		resolution: string;
	};
	memory: {
		ramMemory: string;
		internalMemory: string;
	};
	battery: string;
	status: string;
	images: string[];
	timestamp: number;
	articleId: number;
}
