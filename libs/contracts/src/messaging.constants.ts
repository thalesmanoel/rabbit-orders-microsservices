export const ORDERS_EXCHANGE = 'orders.topic';
export const ORDERS_DLX = 'orders.dlx';
export const ORDERS_RETRY_EXCHANGE = 'orders.retry';

export const RoutingKeys = {
  ORDER_CREATED: 'order.created',
  ORDER_CONFIRMED: 'order.confirmed',
  ORDER_CANCELLED: 'order.cancelled',

  INVENTORY_RESERVED: 'inventory.reserved',
  INVENTORY_REJECTED: 'inventory.rejected',
  INVENTORY_RELEASED: 'inventory.released',

  PAYMENT_APPROVED: 'payment.approved',
  PAYMENT_FAILED: 'payment.failed',
} as const;

export type RoutingKey = (typeof RoutingKeys)[keyof typeof RoutingKeys];

export const Queues = {
  INVENTORY_ORDER_CREATED: 'inventory.order-created',
  INVENTORY_ORDER_CANCELLED: 'inventory.order-cancelled',
  PAYMENTS_INVENTORY_RESERVED: 'payments.inventory-reserved',
  ORDERS_SAGA: 'orders.saga',
  NOTIFICATIONS_ALL: 'notifications.all',
} as const;

export const ORDERS_RPC_QUEUE = 'orders.rpc';

export const OrdersRpc = {
  CREATE_ORDER: 'orders.create',
  FIND_ORDER: 'orders.find',
  LIST_ORDERS: 'orders.list',
} as const;

export const RETRY_DELAY_MS = 5000;
export const MAX_RETRY_ATTEMPTS = 3;
