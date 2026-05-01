// Import all types from './types'
import { User, Store, Product, Order, Customer, ApiResponse, SortDir, DemoUser, Stats, ChartData, SparklineData, RecentActivity } from './types';

// DEMO_USER
export const DEMO_USER: DemoUser = {
  id: '12345',
  name: 'Emily Chen',
  email: 'emily.chen@example.com',
  role: 'owner',
  plan: 'basic',
  avatar: 'https://example.com/avatar.jpg',
  joinedAt: '2024-02-15T14:30:00.000Z',
};

// MOCK_USERS
export const MOCK_USERS: User[] = [
  {
    id: '12345',
    name: 'Emily Chen',
    email: 'emily.chen@example.com',
    role: 'owner',
    plan: 'basic',
    avatar: 'https://example.com/avatar.jpg',
    joinedAt: '2024-02-15T14:30:00.000Z',
  },
  {
    id: '67890',
    name: 'David Lee',
    email: 'david.lee@example.com',
    role: 'admin',
    plan: 'premium',
    avatar: 'https://example.com/avatar2.jpg',
    joinedAt: '2024-03-20T10:45:00.000Z',
  },
  // ... 13 more users
];

// MOCK_STORES
export const MOCK_STORES: Store[] = [
  {
    id: 'store1',
    name: 'Shopify Store',
    createdAt: '2024-01-10T12:00:00.000Z',
    updatedAt: '2024-01-10T12:00:00.000Z',
    ownerId: '12345',
    status: 'active',
  },
  {
    id: 'store2',
    name: 'WooCommerce Store',
    createdAt: '2024-02-15T14:30:00.000Z',
    updatedAt: '2024-02-15T14:30:00.000Z',
    ownerId: '67890',
    status: 'active',
  },
  // ... 13 more stores
];

// MOCK_PRODUCTS
export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'product1',
    name: 'Product 1',
    description: 'This is product 1',
    price: 19.99,
    createdAt: '2024-01-10T12:00:00.000Z',
    updatedAt: '2024-01-10T12:00:00.000Z',
    storeId: 'store1',
    status: 'active',
  },
  {
    id: 'product2',
    name: 'Product 2',
    description: 'This is product 2',
    price: 9.99,
    createdAt: '2024-02-15T14:30:00.000Z',
    updatedAt: '2024-02-15T14:30:00.000Z',
    storeId: 'store2',
    status: 'active',
  },
  // ... 13 more products
];

// MOCK_ORDERS
export const MOCK_ORDERS: Order[] = [
  {
    id: 'order1',
    storeId: 'store1',
    productId: 'product1',
    customerId: 'customer1',
    total: 19.99,
    status: 'pending',
    createdAt: '2024-01-10T12:00:00.000Z',
    updatedAt: '2024-01-10T12:00:00.000Z',
  },
  {
    id: 'order2',
    storeId: 'store2',
    productId: 'product2',
    customerId: 'customer2',
    total: 9.99,
    status: 'shipped',
    createdAt: '2024-02-15T14:30:00.000Z',
    updatedAt: '2024-02-15T14:30:00.000Z',
  },
  // ... 13 more orders
];

// MOCK_CUSTOMERS
export const MOCK_CUSTOMERS: Customer[] = [
  {
    id: 'customer1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    createdAt: '2024-01-10T12:00:00.000Z',
    updatedAt: '2024-01-10T12:00:00.000Z',
    status: 'active',
  },
  {
    id: 'customer2',
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    createdAt: '2024-02-15T14:30:00.000Z',
    updatedAt: '2024-02-15T14:30:00.000Z',
    status: 'active',
  },
  // ... 13 more customers
];

// STATS
export const STATS: Stats = {
  totalRevenue: '$284,520',
  revenueGrowth: '+18.4%',
  activeStores: 100,
  storeGrowth: '+12.1%',
};

// CHART_DATA
export const CHART_DATA: ChartData = {
  weekly: [42, 58, 51, 73, 88, 65, 79, 94, 71, 103, 89, 112],
  labels: ['Jan W1', 'Jan W2', 'Jan W3', 'Jan W4', 'Feb W1', 'Feb W2', 'Feb W3', 'Feb W4', 'Mar W1', 'Mar W2', 'Mar W3', 'Mar W4'],
  revenue: [18200, 22400, 19800, 31200, 25800, 29400, 27900, 35100, 28900, 32900, 29900, 37900],
};

// SPARKLINE_DATA
export const SPARKLINE_DATA: SparklineData = {
  revenue: [78, 82, 79, 91, 88, 94, 103],
  stores: [10, 12, 11, 15, 14, 16, 18],
  products: [50, 60, 55, 75, 65, 80, 90],
};

// RECENT_ACTIVITY
export const RECENT_ACTIVITY: RecentActivity[] = [
  {
    id: '1',
    action: 'Created new store',
    user: 'Emily Chen',
    avatar: 'https://example.com/avatar.jpg',
    time: '2 minutes ago',
    type: 'create',
  },
  {
    id: '2',
    action: 'Updated product',
    user: 'David Lee',
    avatar: 'https://example.com/avatar2.jpg',
    time: '1 hour ago',
    type: 'update',
  },
  // ... 10 more activities
];

// Helper functions
export function getById<T extends { id: string }>(arr: T[], id: string): T | undefined {
  return arr.find((x) => x.id === id);
}

export function formatCurrency(n: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0format(n);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}