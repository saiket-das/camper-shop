import { Outlet } from "react-router-dom";
import Header from "../ui/Header";

const MainLayout = () => {
  return (
    <section className="max-w-6xl mx-auto p-6 lg:px-8">
      <Header />
      <main>
        <Outlet />
      </main>
    </section>
  );
};

export default MainLayout;
