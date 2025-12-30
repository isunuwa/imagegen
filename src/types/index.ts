export interface ImageGenerationRequest {
  prompt: string;
  style?: string;
  resolution?: {
    width: number;
    height: number;
  };
}

export interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  createdAt: Date;
}

export interface Testimonial {
  name: string;
  feedback: string;
  imageUrl?: string;
}

export interface Feature {
  title: string;
  description: string;
  iconUrl: string;
}

export interface FilterBarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}
