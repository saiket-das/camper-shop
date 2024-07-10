import { Link } from "react-router-dom";
import { ProductProps } from "../../types/product.types";
import AppRoutes from "../../utils/AppRoutes";

const ProductCard = ({ _id, name, images, price, stock }: ProductProps) => {
  return (
    <Link to={AppRoutes.PRODUCT_DETAILS(_id)}>
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            alt={name}
            src={images[0]}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">{name}</h3>
            <p className="mt-1 text-sm ">
              Stock: <span className="text-gray-500"> {stock}</span>
            </p>
          </div>
          <p className="text-sm font-medium text-gray-900">৳{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
