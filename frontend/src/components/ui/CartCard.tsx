import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import {
  addToCart,
  CartProps,
  removeFromCart,
} from "../../redux/features/cart/cartSlice";
import { useGetSingleProductQuery } from "../../redux/features/product/productApi";
import { useAppDispatch } from "../../redux/hooks";

const CartCard = ({ productId, quantity }: CartProps) => {
  const { data: product, isLoading } = useGetSingleProductQuery(productId);
  const dispatch = useAppDispatch();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const { _id, name, images, price } = product.data;

  // Add to Cart
  const addToCartFunc = () => {
    const cartItem: CartProps = {
      productId: _id,
      quantity: 1,
      price,
    };
    dispatch(addToCart(cartItem));
  };

  // Remove from Cart
  const removeFromCartFunc = () => {
    const cartItem = {
      productId: _id,
    };
    dispatch(removeFromCart(cartItem));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
      <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img
            src={images[0]}
            alt={name}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="pro-data w-full max-w-sm ">
          <h5 className="font-semibold text-lg leading-8 text-black max-[550px]:text-center">
            {name}
          </h5>
          <h6 className="font-medium text-lg leading-8 text-primary-600  max-[550px]:text-center">
            ৳{price}
          </h6>
        </div>
      </div>
      <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
        <div className="flex items-center w-full mx-auto justify-start my-6">
          <button
            onClick={removeFromCartFunc}
            className="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
          >
            <MinusIcon
              aria-hidden="true"
              className="w-5 flex-none text-red-500"
            />
          </button>

          <p className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[98px] min-w-[80px] placeholder:text-gray-900 py-[14px] text-center bg-transparent">
            {quantity}
          </p>
          <button
            onClick={addToCartFunc}
            className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
          >
            <PlusIcon
              aria-hidden="true"
              className="w-5 flex-none text-primary"
            />
          </button>
        </div>
        <h6 className="text-primary-600 font-manrope font-medium text-2xl leading-9 w-full max-w-[176px] text-center">
          ৳{price * quantity}
        </h6>
      </div>
    </div>
  );
};

export default CartCard;
