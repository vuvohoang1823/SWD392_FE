export interface FreelancerRating {
  name: string;
  rating: number;
  ratingCount: number;
}

export interface Comment {
  avatar: string;
  title: string;
  description: string;
  rating?: number;
}
