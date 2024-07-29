import BestProductCard from "./BestProductCard";

const BestProducts = () => {
  return (
    <div className="grid grid-cols-3 justify-around mb-20 ">
      <BestProductCard imageUrl="https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <BestProductCard imageUrl="https://plus.unsplash.com/premium_photo-1664360971368-8cf4df3deb53?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <BestProductCard imageUrl="https://images.unsplash.com/photo-1692113577412-6b6cede6c4d9?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  );
};

export default BestProducts;
