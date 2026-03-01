export interface Destination {
  id: string;
  name: string;
  description: string;
  images: string[];
  packages: Package[];
  duration: string;
  location: string;
  price: string;
}

export interface Package {
  name: string;
  price: string;
  features: string[];
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  location: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  stats: string;
}
