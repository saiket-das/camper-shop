import AppForm from "../../components/form/AppForm";
import AppInput from "../../components/form/AppInput";

const Checkout = () => {
  const onSubmit = () => {};
  return (
    // <form>
    //   <div className="max-w-4xl mx-auto">
    //     <div className="border-b border-gray-900/10 pb-12">
    //       <h2 className="text-base font-semibold leading-7 text-gray-900">
    //         Personal Information
    //       </h2>
    //       <p className="mt-1 text-sm leading-6 text-gray-600">
    //         Use a permanent address where you can receive your order.
    //       </p>

    //       <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
    //         {/* Personal Information  */}
    //         <div className="sm:col-span-3">
    //           <label
    //             htmlFor="first-name"
    //             className="block text-sm font-medium leading-6 text-gray-900"
    //           >
    //             First name
    //           </label>
    //           <div className="mt-2">
    //             <input
    //               id="first-name"
    //               name="first-name"
    //               type="text"
    //               autoComplete="given-name"
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div>

    //         {/* <div className="sm:col-span-3">
    //           <label
    //             htmlFor="last-name"
    //             className="block text-sm font-medium leading-6 text-gray-900"
    //           >
    //             Last name
    //           </label>
    //           <div className="mt-2">
    //             <input
    //               id="last-name"
    //               name="last-name"
    //               type="text"
    //               autoComplete="family-name"
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div> */}

    //         <div className="sm:col-span-4">
    //           <label
    //             htmlFor="email"
    //             className="block text-sm font-medium leading-6 text-gray-900"
    //           >
    //             Email address
    //           </label>
    //           <div className="mt-2">
    //             <input
    //               id="email"
    //               name="email"
    //               type="email"
    //               autoComplete="email"
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div>

    //         {/* Address */}
    //         <div className="col-span-full">
    //           <label
    //             htmlFor="street-address"
    //             className="block text-sm font-medium leading-6 text-gray-900"
    //           >
    //             Street address
    //           </label>
    //           <div className="mt-2">
    //             <input
    //               id="street-address"
    //               name="street-address"
    //               type="text"
    //               autoComplete="street-address"
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div>

    //         <div className="sm:col-span-2 sm:col-start-1">
    //           <label
    //             htmlFor="city"
    //             className="block text-sm font-medium leading-6 text-gray-900"
    //           >
    //             City
    //           </label>
    //           <div className="mt-2">
    //             <input
    //               id="city"
    //               name="city"
    //               type="text"
    //               autoComplete="address-level2"
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div>

    //         <div className="sm:col-span-2">
    //           <label
    //             htmlFor="region"
    //             className="block text-sm font-medium leading-6 text-gray-900"
    //           >
    //             State / Province
    //           </label>
    //           <div className="mt-2">
    //             <input
    //               id="region"
    //               name="region"
    //               type="text"
    //               autoComplete="address-level1"
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div>

    //         <div className="sm:col-span-2">
    //           <label
    //             htmlFor="postal-code"
    //             className="block text-sm font-medium leading-6 text-gray-900"
    //           >
    //             ZIP / Postal code
    //           </label>
    //           <div className="mt-2">
    //             <input
    //               id="postal-code"
    //               name="postal-code"
    //               type="text"
    //               autoComplete="postal-code"
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="mt-6 flex items-center justify-center gap-x-3">
    //     <button className="rounded-lg w-full max-w-[150px] py-2 text-center justify-center items-center bg-primary font-semibold text-lg text-white flex transition-all duration-500 hover:bg-primary-600">
    //       Order
    //     </button>
    //   </div>
    // </form>

    <AppForm onSubmit={onSubmit}>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        {/* Personal Information  */}
        <div className="sm:col-span-3">
          <AppInput type="text" name="id" label="First name" />
        </div>
        <div className="sm:col-span-3">
          <AppInput type="text" name="id" label="Last name" />
        </div>
        <div className="sm:col-span-3">
          <AppInput type="text" name="id" label="Email address" />
        </div>
        <div className="sm:col-span-3">
          <AppInput type="text" name="id" label="Phone number" />
        </div>
        <div className="sm:col-span-6">
          <AppInput type="text" name="id" label="Street address" />
        </div>
        <div className="sm:col-span-2">
          <AppInput type="text" name="id" label="City" />
        </div>
        <div className="sm:col-span-2">
          <AppInput type="text" name="id" label="State / Province" />
        </div>
        <div className="sm:col-span-2">
          <AppInput type="text" name="id" label="ZIP / Postal code" />
        </div>
      </div>
    </AppForm>
  );
};

export default Checkout;
