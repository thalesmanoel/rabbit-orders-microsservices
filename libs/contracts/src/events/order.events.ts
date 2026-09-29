export interface EventEnvelope<T> {
  eventId: string;
  eventType: string;
  occurredAt: string;
  correlationId: string;
  payload: T;
}

export interface OrderItemPayload {
  productId: string;
  quantity: number;
  unitPriceCents: number;
}

export interface OrderCreatedPayload {
  orderId: string;
  customerId: string;
  items: OrderItemPayload[];
  totalCents: number;
}

export interface OrderCancelledPayload {
  orderId: string;
  reason: string;
}

export interface OrderConfirmedPayload {
  orderId: string;
  customerId: string;
  totalCents: number;
}

export interface InventoryReservedPayload {
  orderId: string;
  customerId: string;
  reservationId: string;
  totalCents: number;
}

export interface InventoryRejectedPayload {
  orderId: string;
  reason: string;
  unavailableProductIds: string[];
}

export interface InventoryReleasedPayload {
  orderId: string;
  reservationId: string;
}

export interface PaymentApprovedPayload {
  orderId: string;
  paymentId: string;
  amountCents: number;
}

export interface PaymentFailedPayload {
  orderId: string;
  reason: string;
}
