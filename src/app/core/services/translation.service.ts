import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  public lanPack: {
    menu: {en: string, ar: string},
    orderStatus: {en: string, ar: string},
    aboutUs: {en: string, ar: string},
    contactUs: {en: string, ar: string},
    login: {en: string, ar: string},
    disclaimer: {en: string, ar: string},
    arabicButton: {en: string, ar: string},
    englishButton: {en: string, ar: string},
  } = {
    menu: {en: 'Menu', ar: 'القائمة'},
    orderStatus: {en: 'Order Status', ar: 'حالة الطلب'},
    aboutUs: {en: 'About us', ar: 'من نحن'},
    contactUs: {en: 'Contact us', ar: 'اتصل بنا'},
    login: {en: 'Login', ar: 'تسجيل الدخول'},
    disclaimer: {en: 'Powered By CARTLEY', ar: 'بدعم من كارتلي'},
    arabicButton: {en: 'Arabic', ar: 'عربي'},
    englishButton: {en: 'English', ar: 'انجليزي'}
  };
  constructor() {}
}
