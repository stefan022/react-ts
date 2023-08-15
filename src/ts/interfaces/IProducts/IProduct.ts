import { TColors } from "../../types/TColors";

export interface IProduct {
    articleName: string;
    discount: number;
    price: number;
    brand: string;
    model: string;
    colors: TColors[];
    quantity: number;
    rating: number;
    camera?: {
        rearCamera: string; 
        frontCamera: string;
    },
    screen: string | {
        screenType: string;
        screenDiagonal: string;
    },
    memory: {
        ramMemory: string;
        internalMemory: string;
    },
    battery: string;
    status: string;
    images: string[];
    timestamp: number;
    articleId: number;
    ram?: string;
    processor?: string;
    graphic?: string;
    ssd_hdd?: string;
	digitalTuner?: string;
	technology?: string;
	resolution?: string;
	operatingSystem?: string;
}