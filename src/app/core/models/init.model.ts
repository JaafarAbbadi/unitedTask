

export interface Settings {
    store_name: string;
    store_name_ar: string;
    about_us: string;
    about_us_ar: string;
    primary_color: string;
    header_color: string;
    icon_color: string;
    default_language: string;
    schedule_interval: string;
    default_preparation_time: string;
    company: string;
    address1: string;
    address1_ar: string;
    facebook: string;
    skype: string;
    google_plus?: any;
    twitter: string;
    youtube: string;
    pinterest?: any;
    lat_lang: string[];
    phone: string;
    email: string;
    google_analytics_key?: any;
    fb_pixel_id?: any;
    instagram: string;
    snapchat: string;
    whatsapp: string;
    customer_registration: string;
    search_option: string;
    terms_on: string;
    return_policy_on: string;
    shipping_policy_on: string;
    terms: string;
    terms_ar: string;
    return_policy: string;
    return_policy_ar: string;
    shipping_policy: string;
    shipping_policy_ar: string;
    loyalty_program: string;
    age_confirmation: string;
    multi_country_delivery: string;
    has_fundnumber: string;
    logo_position: string;
    ad_banner: string;
    apple_app_store: string;
    catering_service: string;
    customer_wallet: string;
    customer_wallet_recharge: string;
    dinein_booking: number;
    dinein_booking_limit: string;
    dinein_deposit_amount: string;
    extras_inventory: string;
    fundnumber_label: string;
    fundnumber_label_ar: string;
    fundnumber_mandatory: string;
    gmap_pin_address: string;
    google_play_store: string;
    logo: string;
    products_inventory: string;
    products_view: string;
    product_comment_label: string;
    product_comment_label_ar: string;
    product_weight: string;
    show_reviewbtn: string;
    show_totalproducts: string;
    special_price_per_country: string;
    sub_category: string;
    favicon: string;
    banner: string;
    default_image: string;
    background: string;
    schedule_30_days: string;
}

export interface Country {
    country_id: string;
    title: string;
    title_ar: string;
    currency_decimals: string;
    currency_title: string;
    currency_title_ar: string;
    conversion_rate: string;
    code: string;
    number_prefix: string;
    flag: string;
}

export interface DefaultCountry {
    country_id: string;
    title: string;
    title_ar: string;
    currency_decimals: string;
    currency_title: string;
    currency_title_ar: string;
    conversion_rate: string;
    code: string;
    number_prefix: string;
    flag: string;
}

export interface Init {
    maintenance: number;
    embed_api_key: string;
    authorization: number;
    availability: string;
    settings: Settings;
    countries: Country[];
    default_country: DefaultCountry;
    pickup_available: number;
    delivery_available: number;
}



