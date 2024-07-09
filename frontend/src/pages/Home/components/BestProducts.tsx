import ProductCard from "../../../components/ui/ProductCard";

const BestProducts = () => {
  return (
    <div className="grid grid-cols-3 justify-around mb-20 mx-10">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default BestProducts;
