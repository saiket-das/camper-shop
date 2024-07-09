const ProductCard = () => {
  return (
    <div className="mx-auto mt-11 w-80 transform overflow-hidden shadow-md rounded-lg duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        className="h-56 w-full object-cover object-center"
        src="https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Product Image"
      />
      <div className="px-6 py-4">
        <h2 className="mb-2 text-2xl font-medium">Camping tent</h2>
        <p className="mb-2 text-gray-700">Product description goes here.</p>
        <div className="flex items-center">
          <p className="mr-2 text-lg font-semibol">$20.00</p>
          {/* <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
            $25.00
          </p> */}
          <p className="ml-auto text-base font-medium text-green-500">$20.00</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
