import { OrderStatusProps } from "./order.constant";

interface OrderItemProps {
  productId: string;
  quantity: number;
}

export interface OrderProps {
  items: OrderItemProps[];
  totalAmount: number;
  orderStatus: OrderStatusProps;
}
