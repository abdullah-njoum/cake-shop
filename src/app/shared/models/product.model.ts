export interface Product {
    imgSrc: string;
    title: string;
    description?: string | null;
    price: number;
}
export interface BestDeals extends Product {
    isSoldOut?: boolean;
}
export interface PopularCupCakes extends BestDeals {
    backgroundImgSrc: string;
    backgroundColor: string;
}
