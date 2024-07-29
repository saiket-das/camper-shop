import ProductCard from "../../components/ui/ProductCard";
import { useGetAllProductsQuery } from "../../redux/features/product/productApi";
import { ProductProps } from "../../types/product.types";

const Products = () => {
  const { data: product, isLoading } = useGetAllProductsQuery(undefined);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!product) {
    return (
      <p className="flex justify-center items-center text-primary-600">
        There is no product
      </p>
    );
  }

  return (
    <div className="bg-white">
      <div className="mx-auto">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {product?.data.map((product: ProductProps) => (
            <ProductCard key={product._id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
