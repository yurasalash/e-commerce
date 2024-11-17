
export interface ProductReview {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    images: string[];
    rating: number;
    reviews: ProductReview[];
}

export interface ProductsApiResponse {
    products: Product[];
    limit: number;
    total: number;
    skip: number;
}