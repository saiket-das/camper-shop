import { FieldValues } from "react-hook-form";
import AppForm from "../../components/form/AppForm";
import AppInput from "../../components/form/AppInput";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { usePostOrderMutation } from "../../redux/features/order/orderApi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import AppRoutes from "../../utils/AppRoutes";
import { clearCart } from "../../redux/features/cart/cartSlice";

const Checkout = () => {
  const [order] = usePostOrderMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const cart = useAppSelector((state: RootState) => state.cart);
  const { items, totalAmount } = cart;
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Loading..");
    try {
      const {
        firstName,
        lastName,
        email,
        phoneNumber,
        street,
        city,
        state,
        postcode,
      } = data;
      // Define name and address
      const name = firstName + " " + lastName;
      const deliveryAddress =
        street + ", " + city + ", " + state + ", " + postcode;

      // User data
      const userData = {
        name,
        email,
        phoneNumber,
        deliveryAddress,
      };

      const orderData = {
        user: userData,
        items,
        totalAmount,
      };
      await order(orderData);
      dispatch(clearCart());
      toast.success("Order Successfully!", { id: toastId, duration: 2000 });
      navigate(AppRoutes.PRODUCTS);
    } catch (err) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };
  return (
    <AppForm onSubmit={onSubmit}>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        {/* Personal Information  */}
        <div className="sm:col-span-3">
          <AppInput
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            label="First name"
          />
        </div>
        <div className="sm:col-span-3">
          <AppInput
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            label="Last name"
          />
        </div>
        <div className="sm:col-span-3">
          <AppInput
            type="text"
            name="email"
            placeholder="Enter your email"
            label="Email address"
          />
        </div>
        <div className="sm:col-span-3">
          <AppInput
            type="text"
            name="phoneNumber"
            placeholder="Enter your phone number"
            label="Phone number"
          />
        </div>

        {/* Address Information */}
        <div className="sm:col-span-6">
          <AppInput
            type="text"
            name="street"
            placeholder="Enter your street address"
            label="Street address"
          />
        </div>
        <div className="sm:col-span-2">
          <AppInput
            type="text"
            name="city"
            placeholder="Enter your city name"
            label="City"
          />
        </div>
        <div className="sm:col-span-2">
          <AppInput
            type="text"
            name="state"
            placeholder="Enter your state"
            label="State / Province"
          />
        </div>
        <div className="sm:col-span-2">
          <AppInput
            type="text"
            name="postcode"
            placeholder="Enter your post code"
            label="ZIP / Postal code"
          />
        </div>
      </div>

      <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
        <button className="rounded-lg w-full max-w-[150px] py-2 text-center justify-center items-center bg-primary font-semibold text-lg text-white flex transition-all duration-500 hover:bg-primary-600">
          Order
        </button>
      </div>
    </AppForm>
  );
};

export default Checkout;
