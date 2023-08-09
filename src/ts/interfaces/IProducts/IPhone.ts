import { Colors } from "../../types/Colors";

export interface IPhone {
    phoneName: string;
    price: number;
    brand: string;
    model: string;
    colors: Colors[];
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