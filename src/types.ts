export interface Department {
  id: string;
  name: string;
  icon: string;
  image: string;
  shortDesc: string;
  longDesc: string;
  keyServices: string[];
}

export interface Doctor {
  id: string;
  name: string;
  qualification: string;
  experience: string;
  department: string;
  languages: string[];
  availability: string;
  photo: string;
  rating: number;
  bio: string;
}

export interface Facility {
  id: string;
  name: string;
  category: "Clinical" | "Amenities" | "Diagnostics";
  description: string;
  image: string;
}

export interface HealthPackage {
  id: string;
  name: string;
  price: string;
  tagline: string;
  recommendedFor: string;
  testsIncluded: string[];
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  photo: string;
  rating: number;
  reviewText: string;
  departmentTreated: string;
  date: string;
}

export interface HealthTip {
  id: string;
  title: string;
  category: "Heart Care" | "Nutrition" | "Healthy Lifestyle" | "Mental Wellness" | "Diabetes Care" | "Women's Health" | "Children's Health" | "Exercise";
  image: string;
  summary: string;
  content: string;
  readTime: string;
  date: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}
