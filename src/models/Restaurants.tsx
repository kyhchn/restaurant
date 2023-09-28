export interface RestaurantList {
  status: boolean;
  message: string;
  timestamp: number;
  data: Data;
}

export interface Data {
  totalRecords: string;
  totalPages: number;
  data: Datum[];
}

export interface Datum {
  heroImgUrl: string;
  heroImgRawHeight: number;
  heroImgRawWidth: number;
  squareImgUrl: string;
  squareImgRawLength: number;
  locationId: number;
  name: string;
  averageRating: number;
  userReviewCount: number;
  currentOpenStatusCategory: string;
  currentOpenStatusText: string;
  establishmentTypeAndCuisineTags: string[];
  priceTag: string;
  offers: Offers;
  hasMenu: boolean;
  menuUrl: null | string;
  isDifferentGeo: boolean;
  parentGeoName: string;
  distanceTo: string;
  reviewSnippets: ReviewSnippets;
  awardInfo: null;
  isLocalChefItem: boolean;
  isPremium: boolean;
  isStoryboardPublished: boolean;
}


export interface Offers {
  slot1Offer: null;
  slot2Offer: null;
}


export interface ReviewSnippets {
  reviewSnippetsList: ReviewSnippetsList[];
}

export interface ReviewSnippetsList {
  reviewText: string;
  reviewUrl: string;
}
