export interface Product {
    imgSrc: string;
    title: string;
    description?: string | null;
}
export interface BestDeals extends Product {
    isSoldOut?: boolean;
    price: number;
}
export interface PopularCupCakes extends BestDeals {
    backgroundImgSrc: string;
    backgroundColor: string;
}
