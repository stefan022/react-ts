import { TColors } from "../../types/TColors";

export interface ILaptop {
    articleName: string;
    model: string;
    price: number;
    brand: string;
    colors: TColors[];
    quantity: number;
    rating: number;
    screen: string;
    ram: string;
    processor: string;
    graphic: string;
    ssd_hdd: string;
    status: string;
    images: string[];
    timestamp: number;
    articleId: number;
}