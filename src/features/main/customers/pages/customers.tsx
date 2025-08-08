import { Icon } from "@iconify/react";
import { CustomerTable } from "../components/customers_table";
import { SyncCustomersModal } from "../components/sync_customers_modal";

const Customers = (): React.JSX.Element => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-0">Customers</h1>
      <p className="text-gray-700">
        Manage your customers and their information.
      </p>
      <SyncCustomersModal/>
      <div className="mt-4">
        <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl p-4 md:py-5 md:px-2">
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="rounded-lg divide-y divide-gray-200">
                  <div className="py-3 px-4 flex items-center justify-between pb-8">
                    <div className="relative max-w-xs">
                      <label className="sr-only">Search</label>
                      <input type="text" name="hs-table-with-pagination-search" id="hs-table-with-pagination-search" className="py-1.5 sm:py-2 px-3 ps-9 block w-full border-gray-200 shadow-2xs rounded-lg sm:text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Search for items" />
                      <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                        <Icon icon="mdi:magnify" className="text-gray-400" />
                      </div>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <button type="button" className="py-2 px-3 cursor-pointer inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-hidden focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none"  aria-haspopup="dialog" aria-expanded="false" aria-controls="sync-customer" data-hs-overlay="#sync-customer">
                        <Icon icon="picon:gdrive" className="size-4" /> Sync
                      </button>
                      <button type="button" className="py-2 px-3 cursor-pointer inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-hidden focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none">
                        <Icon icon="fontisto:import" className="size-4" /> Import
                      </button>
                      <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                        <Icon icon="mdi:plus" className="size-4" /> Add Customer
                      </button>
                    </div>
                  </div>
                  <div className="overflow-hidden">
                    <CustomerTable />
                  </div>
                  <div className="py-1 px-4">
                    <nav className="flex items-center space-x-1" aria-label="Pagination">
                      <button type="button" className="p-2.5 min-w-10 inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                        <span className="sr-only">Previous</span>
                      </button>
                      <button type="button" className="min-w-10 flex justify-center items-center text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none" aria-current="page">1</button>
                      <button type="button" className="min-w-10 flex justify-center items-center text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none">2</button>
                      <button type="button" className="min-w-10 flex justify-center items-center text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none">3</button>
                      <button type="button" className="p-2.5 min-w-10 inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" aria-label="Next">
                        <span className="sr-only">Next</span>
                        <span aria-hidden="true">»</span>
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Customers;