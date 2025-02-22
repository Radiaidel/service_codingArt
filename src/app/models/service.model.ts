export interface Service {
    id: number;
    name: string;
    category: string;
    isActive: boolean;
    description?: string;
    price: number;
    image: string | ArrayBuffer | null;
  }