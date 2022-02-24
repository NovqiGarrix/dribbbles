import { Fragment, FunctionComponent } from "react";
import Link from "next/link";

import { Menu, Transition } from "@headlessui/react";

import { DropdownMenus } from "../../Header";

interface IFeaturesMenu {
  dropdownMenus: {
    features: boolean;
    resources: boolean;
    tools: boolean;
  };

  menus: Array<{ label: string; href: string }>;
  menuName: DropdownMenus;
}
const DropdownMenu: FunctionComponent<IFeaturesMenu> = (props) => {
  const { dropdownMenus, menus, menuName } = props;

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        show={dropdownMenus[menuName]}
      >
        <Menu.Items className="origin-top-right top-3 absolute right-3 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
          <div className="py-1">
            {menus.map((val, key) => (
              <Menu.Item key={key}>
                {({ active }) => (
                  <div
                    className={`px-4 py-2 text-sm flex ${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    }`}
                  >
                    <Link href={val.href}>
                      <a className="w-full flex-grow">{val.label}</a>
                    </Link>
                  </div>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropdownMenu;
