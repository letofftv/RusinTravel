export interface Tour {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  hook?: string;
  shortDescription: string;
  fullDescription: string;
  format: 'individual' | 'group' | 'seasonal' | 'interactive' | 'military' | 'bike' | 'lecture' | 'school';
  categories: string[];
  duration: string;
  groupSize: string;
  groupSizeMin?: number;
  groupSizeMax?: number;
  price: string;
  priceValue?: number;
  priceNote?: string;
  startPoint: string;
  weatherDependency?: string;
  included?: string[];
  notIncluded?: string[];
  extraServices?: string[];
  suitableFor?: string[];
  childrenAllowed?: boolean;
  schoolGroupsAllowed?: boolean;
  paymentScenario?: 'request' | 'prepayment' | 'full_online' | 'on_site' | 'mixed';
  cancellationRules?: string;
  highlights: string[];
  features: string[];
  imageUrl: string;
  gallery?: string[];
  seoTitle?: string;
  seoDescription?: string;
  isPublished?: boolean;
  category: string[]; // Сохраняем для обратной совместимости с текущим кодом
}

export interface Review {
  id: string;
  author: string;
  source: string;
  text: string;
  date?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content?: string;
  imageUrl: string;
  gallery?: string[];
  publishedAt: string;
  updatedAt?: string;
  linkedTourId?: string;
  isFeatured?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  isPublished?: boolean;
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  linkedTourId?: string;
  description: string;
  dateStart: string;
  dateEnd?: string;
  duration: string;
  startPoint: string;
  price: string;
  priceValue?: number;
  seatsTotal?: number;
  seatsAvailable?: number;
  paymentEnabled: boolean;
  status: 'draft' | 'published' | 'sold_out' | 'archived';
  category: string[];
  imageUrl: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption?: string;
  category: 'routes' | 'old-alushta' | 'architecture' | 'artifacts' | 'before-after';
  imageUrl: string;
  thumbUrl?: string;
  alt: string;
  year?: string;
  place?: string;
  linkedTourId?: string;
  isPublished: boolean;
}
