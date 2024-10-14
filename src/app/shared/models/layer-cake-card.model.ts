import { Product } from "./product.model";

export interface LayerCakeCard extends Product {
    price: number;
    type: string;
    vendor: string;
    categoryId: number;
}