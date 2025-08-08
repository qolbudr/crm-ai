import { Icon } from "@iconify/react";
import { useState } from "react";

export const SyncCustomersModal = (): React.JSX.Element => {
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSync = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate async operation
      setConnected(true);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <div id="sync-customer" className="hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabIndex={-1} aria-labelledby="sync-customer-label">
        <div className="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-56px)] flex items-center">
          <div className="w-full flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl pointer-events-auto">
            <div className="flex justify-between items-center py-3 px-4 border-b border-gray-200">
              <h3 id="sync-customer-label" className="font-bold text-gray-800">
                Google Sheet Sync
              </h3>
              <button type="button" className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none" aria-label="Close" data-hs-overlay="#sync-customer">
                <span className="sr-only">Close</span>
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
            <div className="p-4 overflow-y-auto">
              <p className="text-gray-600 text-sm mb-4">
                Sync your customer data from a Google Sheet. Ensure your sheet is formatted correctly with the necessary columns.</p>
              <div className={`flex gap-x-2 shadow-2xs rounded-xl p-4 md:p-5 border ${connected ? 'text-green-500 bg-green-100 border-green-500' : 'text-red-500 bg-red-100 border-red-500'}`}>
                <Icon icon="picon:gdrive" className={`size-6 ${connected ? 'text-green-500' : 'text-red-500 '}`} /> {connected ? 'Connected' : 'Not Connected'}
              </div>
              <label htmlFor="input-label" className="block text-sm font-medium mb-2 mt-4">Document URL</label>
              <input type="url" id="input-label" className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="https://docs.google.com/spreadsheets/d/your-sheet-id" />
            </div>
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t border-gray-200">
              <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#sync-customer">
                Close
              </button>
              <button onClick={handleSync} type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                {loading ? (
                  <>
                    <span className="animate-spin inline-block size-4 border-3 border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading"></span>
                    Loading
                  </>
                ) : (
                  "Sync"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
