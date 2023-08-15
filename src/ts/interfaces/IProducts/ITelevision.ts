import { TColors } from "../../types/TColors";

export interface ITelevision {
	articleName: string;
	model: string;
	price: number;
	brand: string;
	colors: TColors[];
	quantity: number;
	rating: number;
	screen: string;
	digitalTuner: string;
	technology: string;
	resolution: string;
	operatingSystem: string;
	status: string;
	images: string[];
	timestamp: number;
	articleId: number;
}
