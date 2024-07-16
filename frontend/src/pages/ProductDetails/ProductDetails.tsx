import { StarIcon } from "@heroicons/react/20/solid";
import { Link, useParams } from "react-router-dom";
import AppRoutes from "../../utils/AppRoutes";
import { useGetSingleProductQuery } from "../../redux/features/product/productApi";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart, removeFromCart } from "../../redux/features/cart/cartSlice";
import { RootState } from "../../redux/store";

const reviews = { href: "#", average: 4, totalCount: 117 };
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const ProductDetails = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading } = useGetSingleProductQuery(id);

  const cart = useAppSelector((state: RootState) => state.cart.cart);
  let cartProduct;
  if (product) {
    cartProduct = cart.find(
      (cartProduct) => cartProduct._id === product.data._id
    );
  }

  const addToCartFunc = () => {
    const cartProduct = {
      _id: product?.data._id,
      quantity: 1,
      price: product?.data.price,
      stock: product?.data.stock,
    };
    dispatch(addToCart(cartProduct));
  };

  const removeFromCartFunc = () => {
    const cartProduct = {
      _id: product?.data._id,
    };
    dispatch(removeFromCart(cartProduct));
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li>
              <div className="flex items-center">
                <Link
                  to={AppRoutes.PRODUCTS}
                  className="mr-2 text-sm font-medium text-gray-900"
                >
                  Products
                </Link>
                <svg
                  fill="currentColor"
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>

            <li className="text-sm font-medium text-gray-500 hover:text-gray-600">
              {product?.data.name}
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              alt={product?.data.images[0].alt}
              src={product?.data.images[0]}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                alt={product?.data.images[1].alt}
                src={product?.data.images[1]}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                alt={product?.data.images[2].alt}
                src={product?.data.images[2]}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              alt={product?.data.images[3].alt}
              src={product?.data.images[3]}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-300 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product?.data.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              ৳{product?.data.price}
            </p>
            <p className="text-md mt-2 tracking-tight text-gray-900">
              Stock: {product?.data.stock}
            </p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={classNames(
                        reviews.average > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                    />
                  ))}
                </div>

                <Link
                  to={AppRoutes.PRODUCTS}
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {reviews.totalCount} reviews
                </Link>
              </div>
            </div>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-300 lg:pb-2 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  {product?.data.description}
                </p>
              </div>
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
                  {cartProduct ? cartProduct.quantity : 0}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
