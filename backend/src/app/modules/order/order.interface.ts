import { OrderStatusProps } from "./order.constant";

interface UserProps {
  name: string;
  email: string;
  phoneNumber: string;
  deliveryAddress: string;
}
interface OrderItemProps {
  productId: string;
  quantity: number;
  price: number;
}

export interface OrderProps {
  user: UserProps;
  items: OrderItemProps[];
  totalAmount: number;
  orderStatus: OrderStatusProps;
}
