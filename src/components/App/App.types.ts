export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string | null;
  description: string | null;
  likes: number;
  user: User;
}

export interface FetchImagesResponse {
  results: Image[];
  total: number;
  total_pages: number;
}
interface User {
  name: string;
}
