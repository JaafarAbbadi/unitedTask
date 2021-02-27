

export interface Details {
    category_id: string;
    category_name: string;
    category_name_ar: string;
    image: string;
    product_total: string;
}

export interface SpecialPrice {
    1: number;
    15: number;
}

export interface OriginalSpecialPrice {
    1: number;
    15: number;
}

export interface Product {
    product_id: string;
    title: string;
    title_ar: string;
    description: string;
    description_ar: string;
    sale_price: number;
    image: string;
    current_stock: string;
    subcat_status?: any;
    discount: string;
    special_price_discount: string;
    sort_order: string;
    digital_product: string;
    catering: string;
    preparation_time: number;
    short_description: string;
    short_description_ar: string;
    main_image: string;
    thumb_image: string;
    special_price: SpecialPrice;
    original_price: number;
    original_special_price: OriginalSpecialPrice;
}

export interface Category {
    details: Details;
    products: Product[];
}

export interface CountryProducts {
    maintenance: number;
    embed_api_key: string;
    authorization: number;
    availability: string;
    next_page?: any;
    categories: Category[];
    vouchers: any[];
    unit_types: string[];
    pickup_available: number;
}