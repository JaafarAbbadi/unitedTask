import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { skip } from 'rxjs/operators';
import { init } from '../features/base/base.actions';
import { selectInitData } from '../features/base/base.selectors';
import { loadCountryProducts } from '../features/menu/menu.actions';
import { Country, Init } from '../models/init.model';
/*
  this service subscribes to the init object in the store.
  then it generates the right values based on business default preferences
  or changes them if the preference is changed locally through ngrx actions & reducers;
*/
@Injectable({
  providedIn: 'root'
})
export class InitService {
  sub: Subscription;
  init: Init;
  /* business theming */
  public primaryColor: string;
  public secondaryColor: string;
  public tertiaryColor: string;
  public favicon: string;
  public logo: string;
  public logoPosition: string;
  public background: string;
  public banner: string;
  public productsView: string;


  /* business preferences */
  public defaultLanguage: string;
  public selectedCountry: string; // init.default.country_id
  public defaultCountry: Country;
  public countries: Country[];
  public termsOn: boolean;
  public returnPolicyOn: boolean;
  public shippingPolicyOn: boolean;
  public loyaltyProgram: boolean;
  public ageConfirmation: boolean;
  public multiCountryDelivery: boolean;
  public hasFundNumber: boolean;
  public fundNumberMandetory: boolean;
  public cateringService: boolean;
  public customerWallet: boolean;
  public customerWalletRecharge: boolean;
  public dineInBooking: boolean;
  public dineInBookingLimit: number;
  public dineInDepositAmount: number;
  public extrasInventory: boolean;
  public customerRegisteration: boolean;
  public productInventory: boolean;
  // public productPreperationTime: string;
  // public productWeight: string;
  public showReviewButton: boolean;
  public showTotalProducts: boolean;
  public specialPriceByCountry: boolean;
  public subCategory: boolean;
  public pickupAvailable: boolean;    // not inside settings
  public deliveryAvailable: boolean;  // not inside settings
  /* business Marketing, social media & analytics */
  public facebook: string;
  public skype: string;
  public googlePlus: string;
  public twitter: string;
  public youtube: string;
  public pintrest: string;
  public instagram: string;
  public snapchat: string;
  public whatsapp: string;
  public googleAnalyticsKey: string;
  public appleAppStore: string;
  public googlePlayStore: string;
  public adBanner: string;

  /* business info (multi-lingual) */
  public company: string;
  public address: {lat: number, lan: number};
  public phone: string;
  public email: string;

  public storeName: string;
  public terms: string;
  public returnPolicy: string;
  public shippingPolicy: string;
  public fundNumberLabel: string;
  public aboutUs: string;
  public address1: string;
  public productCommentLabel: string;
  /* TODO: ask about those Unknown Variables */
  public scheduleInterval: number;
  public maximumScheduleDays: number;
  public defaultPreperationTime: number;
  public fbPixelId: string;
  public searchOption: string;

  constructor(
    private store: Store
  ) {
  }

  initSubscription(){
    this.sub = this.store.select(selectInitData).pipe(skip(1)).subscribe(i => {
      // business theme
      this.init = i;
      this.primaryColor = i?.settings.primary_color;
      this.secondaryColor = i?.settings.header_color;
      this.tertiaryColor = i?.settings.icon_color;

      document.documentElement.style.setProperty('--ion-color-primary', this.primaryColor);
      document.documentElement.style.setProperty('--ion-color-secondary', this.secondaryColor);
      document.documentElement.style.setProperty('--ion-color-tertiary', this.tertiaryColor);

      this.favicon = i?.settings.favicon;
      this.logo = i?.settings.logo;
      this.logoPosition = i?.settings.logo_position;
      this.background = i?.settings.background;
      this.banner = i?.settings.banner;
      this.productsView = i?.settings.products_view;
      // Business Preferences
      this.defaultLanguage = i?.settings.default_language;
      this.countries = i?.countries;
      this.selectedCountry = i?.default_country.country_id;
      this.defaultCountry = i?.default_country;
      this.store.dispatch(loadCountryProducts({countryIdentifier: this.defaultCountry?.country_id}));
      this.termsOn = i?.settings.terms_on === '1';
      this.returnPolicyOn = i?.settings.return_policy_on === '1';
      this.shippingPolicyOn = i?.settings.shipping_policy_on === '1';
      this.loyaltyProgram = i?.settings.loyalty_program === '1';
      this.ageConfirmation = i?.settings.age_confirmation  === '1';
      this.multiCountryDelivery = i?.settings.multi_country_delivery === '1';
      this.hasFundNumber = i?.settings.has_fundnumber === '1';
      this.fundNumberMandetory = i?.settings.fundnumber_mandatory === '1';
      this.cateringService = i?.settings.catering_service === '1';
      this.customerWallet = i?.settings.customer_wallet === '1';
      this.customerWalletRecharge = i?.settings.customer_wallet_recharge === '1';
      this.dineInBooking = i?.settings.dinein_booking === 1;
      this.dineInBookingLimit = +i?.settings.dinein_booking_limit;
      this.dineInDepositAmount = +i?.settings.dinein_deposit_amount;
      this.extrasInventory = i?.settings.extras_inventory === '1';
      this.customerRegisteration = i?.settings.customer_registration === '1';
      this.productInventory = i?.settings.products_inventory === '1';
      this.showReviewButton = i?.settings.show_reviewbtn === '1';
      this.showTotalProducts = i?.settings.show_totalproducts === '1';
      this.specialPriceByCountry = i?.settings.special_price_per_country === '1';
      this.subCategory = i?.settings.sub_category === '1';
      this.pickupAvailable = i?.pickup_available === 1;
      this.deliveryAvailable = i?.delivery_available === 1;
      /* business Marketing, social media & analytics */
      this.facebook = i?.settings.facebook ;
      this.skype = i?.settings.skype ;
      this.googlePlus = i?.settings.google_plus ;
      this.twitter = i?.settings.twitter ;
      this.youtube = i?.settings.youtube ;
      this.pintrest = i?.settings.pinterest ;
      this.instagram = i?.settings.instagram ;
      this.snapchat = i?.settings.snapchat ;
      this.whatsapp = i?.settings.whatsapp ;
      this.googleAnalyticsKey = i?.settings.google_analytics_key ;
      this.appleAppStore = i?.settings.apple_app_store ;
      this.googlePlayStore = i?.settings.google_play_store ;
      this.adBanner = i?.settings.ad_banner;

      // business info
      this.company = i?.settings.company;
      this.phone = i?.settings.phone;
      this.email = i?.settings.email;
      this.address = {lat: +i?.settings.lat_lang[0], lan: +i?.settings.lat_lang[1]};
      if (this.defaultLanguage === 'en'){
        this.address1 = i?.settings.address1;
        this.storeName = i?.settings.store_name;
        this.terms = i?.settings.terms;
        this.returnPolicy = i?.settings.return_policy;
        this.shippingPolicy = i?.settings.shipping_policy;
        this.fundNumberLabel = i?.settings.fundnumber_label;
        this.aboutUs = i?.settings.about_us;
        this.productCommentLabel = i?.settings.product_comment_label;
      }
      if (this.defaultLanguage === 'ar'){
        this.address1 = i?.settings.address1_ar;
        this.storeName = i?.settings.store_name_ar;
        this.terms = i?.settings.terms_ar;
        this.returnPolicy = i?.settings.return_policy_ar;
        this.shippingPolicy = i?.settings.shipping_policy_ar;
        this.fundNumberLabel = i?.settings.fundnumber_label_ar;
        this.aboutUs = i?.settings.about_us_ar;
        this.productCommentLabel = i?.settings.product_comment_label_ar;
      }
    });
  }
  unsubscribe(){
    this.sub.unsubscribe();
  }
}
