import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  public languages: string[] = ['en', 'ar'];
  public lanPack: {
    menu: {en: string, ar: string},
    pickup: {en: string, ar: string},
    booking: {en: string, ar: string},
    delivery: {en: string, ar: string},
    orderStatus: {en: string, ar: string},
    aboutUs: {en: string, ar: string},
    contactUs: {en: string, ar: string},
    login: {en: string, ar: string},
    disclaimer: {en: string, ar: string},
    arabicButton: {en: string, ar: string},
    englishButton: {en: string, ar: string},
    countrySelectLabel: {en: string, ar: string},
    loginEmail: {en: string, ar: string},
    loginPassword: {en: string, ar: string},
  } = {
    menu: {en: 'Menu', ar: 'القائمة'},
    pickup: {en: 'Pickup', ar: 'استلام الطلب'},
    booking: {en: 'Booking', ar: 'حجز'},
    delivery: {en: 'Delivery', ar: 'توصيل'},
    orderStatus: {en: 'Order Status', ar: 'حالة الطلب'},
    aboutUs: {en: 'About us', ar: 'من نحن'},
    contactUs: {en: 'Contact us', ar: 'اتصل بنا'},
    login: {en: 'Login', ar: 'تسجيل الدخول'},
    disclaimer: {en: 'Powered By CARTLEY', ar: 'بدعم من كارتلي'},
    arabicButton: {en: 'Arabic', ar: 'عربي'},
    englishButton: {en: 'English', ar: 'انجليزي'},
    countrySelectLabel: {en: 'Country', ar: 'الدولة'},
    loginEmail: {en: 'Email', ar: 'البريد الالكتروني'},
    loginPassword: {en: 'Password', ar: 'كلمة المرور'},
  };
  constructor() {}
}
