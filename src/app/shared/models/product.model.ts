export interface Product {
    iconSrc: string;
    title: string;
    description?: string | null;
}
export interface BestDeals extends Product {
    isSoldOut?: boolean;
    price: number;
}