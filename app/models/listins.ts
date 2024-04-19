export interface ListingsTypes {
  id: number;
  title: string;
  images: [
    {
      url: string;
      thumbnailUrl: string;
    }
  ];
  price: number;
  categoryId: number;
  userId: number;
  location: {
    latitude: number;
    longitude: number;
  };
}

type ImageMimeType = "image/jpeg" | "image/jpg" | "image/png";
export interface ListingPosts {
  title: string;
  images: [
    {
      name: string;
      type: ImageMimeType;
      uri: string;
    }
  ];
  price: number;
  category: {
    value: number;
  };
  description?: string;
  location?: {
    latitude: number;
    longitude: number;
  };
}
