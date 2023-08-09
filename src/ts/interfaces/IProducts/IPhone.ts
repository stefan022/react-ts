export interface IPhone {
    phoneName: string;
    price: number;
    brand: string;
    model: string;
    colors: ("black" | "white" | "red" | "blue" | "purple" | "gold" | "yellow" | "grey" | "gray" | "green" | "silver")[];
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