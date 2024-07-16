import { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { ApppAssets } from "../../utils/AppAssets";
import { Link } from "react-router-dom";
import AppRoutes from "../../utils/AppRoutes";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cart = useAppSelector((state: RootState) => state.cart.cart);

  const totalProduct = cart.length;

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between pb-10"
      >
        <div className="flex lg:flex-1">
          <Link to={AppRoutes.HOME} className="-m-1.5 p-1.5">
            <img alt="logo" src={ApppAssets.LOGO} className="h-12 w-auto" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            to={AppRoutes.HOME}
            className="text-md font-medium leading-6 text-gray-900 hover:text-primary"
          >
            Home
          </Link>
          <Link
            to={AppRoutes.PRODUCTS}
            className="text-md font-medium leading-6 text-gray-900 hover:text-primary"
          >
            Products
          </Link>

          <Link
            to={AppRoutes.ABOUT_US}
            className="text-md font-medium leading-6 text-gray-900 hover:text-primary"
          >
            About us
          </Link>
          <Link
            to={AppRoutes.DASHBOARD}
            className="text-md font-medium leading-6 text-gray-900 hover:text-primary"
          >
            Dashboard
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to={AppRoutes.CART}
            className="flex h-12 w-12 flex-none items-center justify-center rounded-full hover:bg-gray-50"
          >
            <div className="relative inline-flex">
              <ShoppingCartIcon
                aria-hidden="true"
                className="w-6 flex-none text-primary"
              />
              {totalProduct != 0 && (
                <span className="absolute rounded-full py-1 text-xs font-medium content-[''] leading-none grid place-items-center top-[5%] right-[2%] translate-x-2/4 -translate-y-2/4 bg-primary text-white min-w-[20px] min-h-[20px]">
                  {totalProduct}
                </span>
              )}
            </div>
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to={AppRoutes.DASHBOARD} className="-m-1.5 p-1.5">
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to={AppRoutes.HOME}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-primary hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link
                  to={AppRoutes.PRODUCTS}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-primary hover:bg-gray-50"
                >
                  Products
                </Link>

                <Link
                  to={AppRoutes.ABOUT_US}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-primary hover:bg-gray-50"
                >
                  About us
                </Link>
                <Link
                  to={AppRoutes.DASHBOARD}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-primary hover:bg-gray-50"
                >
                  Dashboard
                </Link>
              </div>
              <div className="py-6">
                <Link
                  to={AppRoutes.CART}
                  className="flex h-12 w-12 flex-none items-center justify-center rounded-full hover:bg-gray-50"
                >
                  <ShoppingCartIcon
                    aria-hidden="true"
                    className="w-6 flex-none text-primary"
                  />
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
