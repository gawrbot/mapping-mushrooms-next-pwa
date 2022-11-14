import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

export default function Header() {
  return (
    <header className="flex flex-col relative justify-center items-center w-screen text-black text-l z-10 shadow-md relative space-around font-bold bg-[url('/crow-prints3.png')]">
      <Menu as="div" className="relative inline-block text-center">
        <div>
          <Menu.Button className="inline-flex w-screen justify-center px-4 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-opacity-75">
            <Image
              alt="logo for navigation bar to open"
              src="/mushroom-from-below.png"
              width={100}
              height={100}
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute mt-2 w-screen origin-top-center divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-opacity-95">
            <div className="px-1 py-1 text-center">
              <Menu.Item>
                <Link
                  className="block px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  href="/map"
                >
                  Map
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  className="block px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  href="/lexicon"
                >
                  Lexicon
                </Link>
              </Menu.Item>
            </div>
            <div className="px-1 text-center">
              <Menu.Item>
                <Link
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  href="/private-profile"
                >
                  Profile
                </Link>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </header>
  );
}
