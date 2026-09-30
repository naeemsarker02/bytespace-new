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

export interface Creator {
  slug: string;
  name: string;
  role: string;
  badge: string;
  bio: string[];
  avatar: string;
  products: number;
  followers: number;
}

export interface LessonPreview {
  number: string;
  title: string;
  duration: string;
}

export interface CourseModule {
  title: string;
  description: string;
}

export interface CourseInclude {
  icon: "resources" | "video" | "certificate" | "consultation";
  label: string;
}

export interface CourseDetail {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  level: string;
  rating: number;
  reviewCount: number;
  students: number;
  video: string;
  lessonCount: number;
  hours: number;
  lessonPreview: LessonPreview[];
  moreVideos: number;
  pitch: string;
  price: string;
  priceSuffix: string;
  includes: CourseInclude[];
  description: string[];
  sneakPeek: string[];
  keyPoints: string[];
  modules: CourseModule[];
  progress: number;
  creator: Creator;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  date: string;
  quote: string;
}

export interface RatingBreakdown {
  stars: number;
  count: number;
  percent: number; // width of the lime bar, 0-100
}
