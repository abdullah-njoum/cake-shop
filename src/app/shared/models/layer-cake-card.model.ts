import { Product } from "./product.model";

export interface LayerCakeCard extends Product {
    type: string;
    vendor: string;
    categoryId: number;
}
