export interface NavLink {
  label: string;
  href: string;
}

export interface Course {
  id: string;
  title: string;
  author: string;
  image: string;
  lessons: string;
  duration: string;
  comments: string;
  level: string;
  rating: number;
  price: string;
  priceSuffix: string;
  enrolled: string;
  avatars: string[];
}

export interface Category {
  id: string;
  label: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}
