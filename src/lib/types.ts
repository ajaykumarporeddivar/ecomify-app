// TypeScript interfaces for every entity in the Ecomify project
export interface User {
 : string;
 : string;
 : string;
 : string;
  plan: string;
  avatar: string  joinedAt:;
}

export interface Store  id: string  name: string  createdAt: string  updatedAt: string  ownerId: string  status: 'active' |inactive';
}

export Product {
  id string;
  name string;
  description: string;
 : number;
 : string;
 : string;
  storeId: string;
  status: 'active' | 'inactive';
}

export interface Order {
  id: string;
  storeId: string;
  productId: string;
  customerId: string;
  total: number;
  status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  status: 'active' | 'inactive';
}

export type ApiResponse<T> = { ok: boolean; data?: T; error?: string };
export type SortDir = 'asc' | 'desc';

export type DemoUser = {
  id: string;
  name: string;
  email: string;
  role: string;
  plan: string;
  avatar: string;
  joinedAt: string;
};

export type Stats = {
  totalRevenue: string;
  revenueGrowth: string;
  activeStores: number;
  storeGrowth: string;
};

export type ChartData = {
  weekly: number[];
  labels: string[];
  revenue: number[];
};

export type SparklineData = {
  revenue: number[];
  stores: number[];
  products: number[];
};

export type RecentActivity = {
  id: string;
  action: string;
  user: string;
  avatar: string;
  time: string;
  type: 'create' | 'update' | 'delete';
};