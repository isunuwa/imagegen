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

export interface DashboardStats {
  credits_remaining: number;
  total_api_calls: number;
  total_images_generated: number;
  total_credits_used: number;
  success_rate: number;
  provider_usage: {
    [key: string]: number;
  };
  recent_activity: Array<{
    timestamp: string;
    credits_used: number;
    task_details: {
      task_count: number;
      providers_used: string[];
      success_count: number;
    };
  }>;
}

export interface StatCard {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  color: string;
}

export interface StatsCardsProps {
  data?: DashboardStats | null;
  loading?: boolean;
  error?: string | null;
}
