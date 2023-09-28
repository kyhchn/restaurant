export interface Restaurant {
  status: boolean;
  message: string;
  timestamp: number;
  data: Data;
}

export interface Data {
  location: DataLocation;
  hours: DataHours;
  ownerStatus: OwnerStatus;
  ownerLikelihood: OwnerLikelihood;
  overview: Overview;
}

export interface DataHours {
  openStatus: string;
  openStatusText: string;
  hoursTodayText: string;
  currentHoursText: string;
  allOpenHours: Hour[];
  addHoursLink: AddHoursLink;
}

export interface AddHoursLink {
  url: string;
  text: string;
}

export interface Hour {
  days: string;
  times: string[];
}

export interface DataLocation {
  location_id: string;
  name: string;
  latitude: string;
  longitude: string;
  num_reviews: string;
  timezone: string;
  location_string: string;
  awards: any[];
  doubleclick_zone: string;
  preferred_map_engine: string;
  raw_ranking: string;
  ranking_geo: string;
  ranking_geo_id: string;
  ranking_position: string;
  ranking_denominator: string;
  ranking_category: string;
  ranking: string;
  distance: null;
  distance_string: null;
  bearing: null;
  rating: string;
  is_closed: boolean;
  open_now_text: string;
  is_long_closed: boolean;
  price_level: string;
  price: string;
  neighborhood_info: NeighborhoodInfo[];
  description: string;
  web_url: string;
  write_review: string;
  ancestors: Ancestor[];
  category: Category;
  subcategory: Category[];
  parent_display_name: string;
  is_jfy_enabled: boolean;
  nearest_metro_station: any[];
  website: string;
  email: string;
  address_obj: AddressObj;
  address: string;
  hours: LocationHours;
  is_candidate_for_contact_info_suppression: boolean;
  cuisine: Category[];
  dietary_restrictions: Category[];
  photo: Photo;
  tags: null;
  display_hours: Hour[];
}

export interface AddressObj {
  street1: string;
  street2: null;
  city: string;
  state: string;
  country: string;
  postalcode: string;
}

export interface Ancestor {
  subcategory: Category[];
  name: string;
  abbrv: null;
  location_id: string;
}

export interface Category {
  key: string;
  name: string;
}

export interface LocationHours {
  week_ranges: Array<WeekRange[]>;
  timezone: string;
}

export interface WeekRange {
  open_time: number;
  close_time: number;
}

export interface NeighborhoodInfo {
  location_id: string;
  name: string;
}

export interface Photo {
  id: string;
  caption: string;
  published_date: string;
  helpful_votes: string;
  is_blessed: boolean;
  uploaded_date: string;
  images: Images;
}

export interface Images {
  small: Large;
  thumbnail: Large;
  original: Large;
  large: Large;
  medium: Large;
}

export interface Large {
  url: string;
  width: string;
  height: string;
}

export interface Overview {
  name: string;
  detailId: number;
  geo: string;
  geoId: number;
  isOwner: boolean;
  links: Links;
  location: OverviewLocation;
  contact: Contact;
  rating: Rating;
  award: Award;
  tags: Tags;
  detailCard: DetailCard;
}

export interface Award {
  icon: string;
  awardText: string;
  yearsText: string;
  isTravelersChoice: boolean;
}

export interface Contact {
  address: string;
  email: string;
  phone: null;
  website: string;
}

export interface DetailCard {
  tagTexts: TagTexts;
  numericalPrice: string;
  improveListingUrl: string;
  updateListingUrl: string;
  restaurantOwner: RestaurantOwner;
}

export interface RestaurantOwner {
  text: null;
  tooltip: null;
  trackingItemName: string;
}

export interface TagTexts {
  priceRange: Cuisines;
  cuisines: Cuisines;
  dietaryRestrictions: Cuisines;
  meals: Cuisines;
  features: Cuisines;
  establishmentType: Cuisines;
}

export interface Cuisines {
  tagCategoryId: number;
  tags: Tag[];
}

export interface Tag {
  tagId: number;
  tagValue: string;
}

export interface Links {
  warUrl: string;
  addPhotoUrl: string;
  ownerAddPhotoUrl: string;
}

export interface OverviewLocation {
  latitude: number;
  longitude: number;
  directionsUrl: string;
  landmark: string;
  neighborhood: string;
}

export interface Rating {
  primaryRanking: PrimaryRanking;
  secondaryRanking: null;
  primaryRating: number;
  reviewCount: number;
  ratingQuestions: RatingQuestion[];
}

export interface PrimaryRanking {
  rank: number;
  totalCount: number;
  category: string;
  geo: string;
  url: string;
}

export interface RatingQuestion {
  name: string;
  rating: number;
  icon: string;
}

export interface Tags {
  reviewSnippetSections: null;
}

export interface OwnerLikelihood {
  isOwner: boolean;
  likelihood: string;
}

export interface OwnerStatus {
  isVerified: boolean;
  isMemberOwner: boolean;
  isUserInCountry: boolean;
}
