import { Disclosure } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
/**
 * Represents a navbar component.
 *
 * @component
 * @example
 * // Usage:
 * <Navbar />
 */
export default function Navbar() {
  /**
   * Represents the navigation items.
   *
   * @type {Array<object>}
   * @property {string} name - The name of the item.
   * @property {string} href - The link associated with the item.
   * @property {boolean} current - Indicates if the item is the current active page.
   */
  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "Login", href: "login", current: false },
    { name: "Register", href: "register", current: false },
    { name: "Staff", href: "our-staff", current: false },
  ];

  return (
    <Disclosure as="nav" className="bg-transparent w-full z-10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex py-2 items-center justify-between">
              <div className="flex flex-1 items-center sm:items-stretch">
                <div className="hidden sm:ml-6 sm:flex items-center ">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={
                          "text-18 leading-21 px-3 py-2 text-white uppercase"
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Mobile menu button*/}
                <Disclosure.Button className="sm:hidden flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <RxHamburgerMenu
                      className="block px-1 py-2 text-36 text-white bg-secondary rounded-sm"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="flex flex-col space-y-1 px-5 pb-3 pt-2">
              {navigation.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.href}
                  className={
                    "block rounded-md px-3 py-2 text-base font-medium text-gray-300"
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
