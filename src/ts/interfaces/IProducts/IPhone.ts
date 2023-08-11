import { TColors } from "../../types/TColors";

export interface IPhone {
    phoneName: string;
    discount: number;
    price: number;
    brand: string;
    model: string;
    colors: TColors[];
    quantity: number;
    rating: number;
    camera: { 
        rearCamera: string;
        frontCamera: string;
    },
    screen: {
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
    phoneId: number;
};