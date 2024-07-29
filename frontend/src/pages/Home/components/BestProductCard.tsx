import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import AppRoutes from "../../../utils/AppRoutes";

interface BestProductCardProps {
  title?: string;
  description?: string;
  price?: number;
  quantity?: number;
  imageUrl?: string;
}

const BestProductCard = ({
  title = "Camping tent",
  description = "Product description goes here.",
  price = 20,
  quantity = 200,
  imageUrl,
}: BestProductCardProps) => {
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

        <Link
          to={AppRoutes.PRODUCTS}
          className="w-full mt-5 mb-1 flex justify-center items-center bg-primary text-white font-base py-2 px-4 rounded hover:bg-primary-600"
        >
          See more
          <ArrowRightCircleIcon
            aria-hidden="true"
            className="w-5 ml-2 flex-none text-white"
          />
        </Link>
      </div>
    </div>
  );
};

export default BestProductCard;
