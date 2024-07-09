import Home from "../../pages/Home/Home";
import Header from "../ui/Header";

const MainLayout = () => {
  return (
    <section className="max-w-7xl mx-auto p-6 lg:px-8">
      <Header />
      <Home />
    </section>
  );
};

export default MainLayout;
