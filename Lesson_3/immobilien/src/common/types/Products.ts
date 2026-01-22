interface Category {
  id: number;
  name: string;
  image: string;
  slug: string;
}

export interface Products {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}
