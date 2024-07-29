export const ORDER_STATUS = {
  Pending: "pending",
  Processed: "processed",
  Shipped: "shipped",
  Delivered: "delivered",
  Cancelled: "cancelled",
} as const;

export enum OrderStatus {
  pending = "pending",
  processed = "processed",
  shipped = "shipped",
  delivered = "delivered",
  cancelled = "cancelled",
}

// Create a type based on order status
export type OrderStatusProps = keyof typeof OrderStatus;
