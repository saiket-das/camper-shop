export interface ProductProps {
  name: string;
  price: number;
  stock: number;
  description: string;
  category: string;
  ratings?: number;
  images?: string[];
  featured?: boolean;
}
