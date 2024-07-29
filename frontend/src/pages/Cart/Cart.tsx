import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import CartCard from "../../components/ui/CartCard";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import AppRoutes from "../../utils/AppRoutes";

const Cart = () => {
  const cart = useAppSelector((state: RootState) => state.cart);
  const { items, totalAmount } = cart;

  if (items.length < 1) {
    return (
      <p className="flex justify-center items-center text-primary-600">
        Cart is empty
      </p>
    );
  }

  return (
    <section className="relative">
      <div className="w-full mx-auto">
        <div className="hidden lg:grid grid-cols-2 py-6">
          <div className="font-normal text-lg leading-8 text-gray-500">
            Product
          </div>
          <p className="font-normal text-lg leading-8 text-gray-500 flex items-center justify-between">
            <span className="w-full max-w-[260px] text-center">Quantity</span>
            <span className="w-full max-w-[200px] text-center">Total</span>
          </p>
        </div>

        {/* Item section */}
        <div>
          {items.map((item) => (
            <CartCard key={item.productId} {...item} />
          ))}
        </div>

        {/* Amount Section  */}
        <div className="bg-gray-50 rounded-xl p-6 w-full mb-4 max-lg:max-w-xl max-lg:mx-auto">
          <div className="flex items-center justify-between w-full">
            <p className="font-normal text-lg leading-8 text-gray-400">
              Sub Total
            </p>
            <h6 className="font-semibold text-lg leading-8 text-gray-900">
              ৳{totalAmount}
            </h6>
          </div>
          <div className="flex items-center justify-between w-full py-5">
            <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">
              Total
            </p>
            <h6 className="font-manrope font-bold text-2xl leading-9 text-primary-600">
              ৳{totalAmount}
            </h6>
          </div>
        </div>
        <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
          <Link
            to={AppRoutes.CHECKOUT}
            className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-primary font-semibold text-lg text-white flex transition-all duration-500 hover:bg-primary-600"
          >
            Continue to Payment
            <ChevronRightIcon
              aria-hidden="true"
              className="w-5 ml-2 flex-none text-white font-semibold"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;
