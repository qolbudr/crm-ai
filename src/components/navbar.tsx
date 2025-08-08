import { Icon } from '@iconify/react';


export const Navbar = (): React.JSX.Element => {
  return (
    <header className="fixed top-0 left-0 right-0 flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 border-b border-gray-200">
      <nav className="w-full py-2 sm:flex sm:items-center sm:justify-between ps-4 lg:ps-64">
        <div className="flex flex-wrap items-center justify-between lg:justify-end w-full ps-0 pe-4 lg:ps-4 ">
          <a href="#" className="block lg:hidden text-lg font-semibold text-gray-800" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-sidebar-basic-usage" aria-label="Toggle navigation" data-hs-overlay="#hs-sidebar-basic-usage">
            <Icon icon="material-symbols:menu" className="size-6" />
          </a>
          <div className='flex items-center gap-x-2'>
            <button type="button" className="py-2 px-3 cursor-pointer inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-hidden focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none">
              <Icon icon="mdi:phone-outline" className="size-4" />
            </button>
            <button type="button" className="py-2 px-3 cursor-pointer inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-hidden focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none">
              <Icon icon="mdi:message-notification-outline" className="size-4" />
            </button>
            <button type="button" className="py-2 px-3 cursor-pointer inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-hidden focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none">
              <Icon icon="mingcute:notification-line" className="size-4" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}