import { ShoppingCartIcon } from "@heroicons/react/24/outline";

interface ProductCardProps {
  title?: string;
  description?: string;
  price?: number;
  quantity?: number;
  imageUrl?: string;
}

const ProductCard = ({
  title = "Camping tent",
  description = "Product description goes here.",
  price = 20,
  quantity = 200,
  imageUrl,
}: ProductCardProps) => {
  return (
    <div className="mx-auto mt-11 w-80 transform overflow-hidden shadow-md rounded-lg duration-300 hover:scale-100 hover:shadow-lg">
      <img
        className="h-56 w-full object-cover object-center"
        src={imageUrl}
        alt="Product Image"
      />
      <div className="px-6 py-4">
        <h2 className="mb-3 text-2xl font-medium">{title}</h2>
        <p className="mb-2 text-gray-700">{description}</p>
        <div className="flex items-center">
          <p className="mr-2 text-md font-semibol">Stock: {quantity}</p>
          {/* <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
            $25.00
          </p> */}
          <p className="ml-auto text-lg font-medium text-green-500">${price}</p>
        </div>

        <button className="w-full mt-5 mb-1 flex justify-center items-center bg-primary text-white font-medium py-2 px-4 rounded hover:bg-primary-600">
          <ShoppingCartIcon
            aria-hidden="true"
            className="w-5 mr-2 flex-none text-white"
          />
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
