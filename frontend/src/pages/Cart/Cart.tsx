import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import CartCard from "../../components/ui/CartCard";

const Cart = () => {
  const cart = useAppSelector((state: RootState) => state.cart.cart);

  // console.log(cart);
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
          {cart.map((product) => (
            <CartCard key={product._id} {...product} />
          ))}
        </div>

        {/* Amount Section  */}
        <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
          <div className="flex items-center justify-between w-full mb-6">
            <p className="font-normal text-lg leading-8 text-gray-400">
              Sub Total
            </p>
            <h6 className="font-semibold text-lg leading-8 text-gray-900">
              ৳360.00
            </h6>
          </div>
          <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
            <p className="font-normal text-lg leading-8 text-gray-400">
              Delivery Charge
            </p>
            <h6 className="font-semibold text-lg leading-8 text-gray-900">
              ৳45.00
            </h6>
          </div>
          <div className="flex items-center justify-between w-full py-6">
            <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">
              Total
            </p>
            <h6 className="font-manrope font-bold text-2xl leading-9 text-primary-600">
              ৳405.00
            </h6>
          </div>
        </div>
        <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
          <button className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-primary font-semibold text-lg text-white flex transition-all duration-500 hover:bg-primary-600">
            Continue to Payment
            <svg
              className="ml-2"
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
            >
              <path
                d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998"
                stroke="white"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
