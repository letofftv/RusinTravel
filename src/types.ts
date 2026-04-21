export interface Tour {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  format: 'individual' | 'group' | 'seasonal' | 'interactive' | 'military' | 'bike';
  duration: string;
  groupSize: string;
  price: string;
  priceNote?: string;
  startPoint: string;
  highlights: string[];
  features: string[];
  imageUrl: string;
  category: string[];
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
  imageUrl: string;
  publishedAt: string;
}
