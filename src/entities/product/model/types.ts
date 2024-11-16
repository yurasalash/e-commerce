

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    images: string[];
    rating: number;
}

export interface ProductsApiResponse {
    products: Product[];
    limit: number;
    total: number;
    skip: number;
}