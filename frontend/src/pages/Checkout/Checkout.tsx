import { FieldValues } from "react-hook-form";
import AppForm from "../../components/form/AppForm";
import AppInput from "../../components/form/AppInput";

const Checkout = () => {
  const onSubmit = (data: FieldValues) => {
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
    const name = firstName + lastName;
    const deliveryAddress =
      street + ", " + city + ", " + state + ", " + postcode;

    // User data
    const userData = {
      name,
      email,
      phoneNumber,
      deliveryAddress,
    };
    console.log(userData);
  };
  return (
    <AppForm onSubmit={onSubmit}>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        {/* Personal Information  */}
        <div className="sm:col-span-3">
          <AppInput type="text" name="firstName" label="First name" />
        </div>
        <div className="sm:col-span-3">
          <AppInput type="text" name="lastName" label="Last name" />
        </div>
        <div className="sm:col-span-3">
          <AppInput type="text" name="email" label="Email address" />
        </div>
        <div className="sm:col-span-3">
          <AppInput type="text" name="phoneNumber" label="Phone number" />
        </div>

        {/* Address Information */}
        <div className="sm:col-span-6">
          <AppInput type="text" name="street" label="Street address" />
        </div>
        <div className="sm:col-span-2">
          <AppInput type="text" name="city" label="City" />
        </div>
        <div className="sm:col-span-2">
          <AppInput type="text" name="state" label="State / Province" />
        </div>
        <div className="sm:col-span-2">
          <AppInput type="text" name="postcode" label="ZIP / Postal code" />
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
