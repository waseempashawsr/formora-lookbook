export interface Product {
  styleCode: string;
  name: string;
  description: string;
  image: string;
}

export interface CollectionData {
  id: string;
  title: string;
  slug: string;
  bannerImage: string;
  introduction: string;
  products: Product[];
}
