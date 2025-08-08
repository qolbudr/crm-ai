import React from "react";
import { customerList } from "../../../../cores/variables/customer_list";
import { Icon } from "@iconify/react";
import { CallSimulation } from "../../appointments/components/call_simulation";

export const CustomerTable = (): React.JSX.Element => {
  const openModalRef = React.useRef<HTMLButtonElement>(null); 
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    if (openModalRef.current) {
      openModalRef.current.click();
      setIsOpen(true);
    }
  };

  return (
    <>
      <CallSimulation key={'customers'} isOpen={isOpen} />
      <button ref={openModalRef} type="button" className="hidden py-3 px-4 items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="dialog" aria-expanded="false" aria-controls="call-simulation" data-hs-overlay="#call-simulation">
        Open modal
      </button>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th scope="col" className="py-3 px-4 pe-0">
              <div className="flex items-center h-5">
                <input id="hs-table-pagination-checkbox-all" type="checkbox" className="border-gray-200 rounded-sm text-blue-600 focus:ring-blue-500" />
                <label htmlFor="hs-table-pagination-checkbox-all" className="sr-only">Checkbox</label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Customer</th>
            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Contact</th>
            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Status</th>
            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Tags</th>
            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Last Contact</th>
            <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {
            ...customerList.map((item, key) =>
              <React.Fragment key={key}>
                <tr key={key}>
                  <td className="py-3 ps-4" rowSpan={item.tags.includes('Prospect') ? 2 : 1}>
                    <div className="flex items-center h-5">
                      <input id="hs-table-pagination-checkbox-1" type="checkbox" className=" rounded-sm text-blue-600 focus:ring-blue-500" />
                      <label htmlFor="hs-table-pagination-checkbox-1" className="sr-only">Checkbox</label>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800" rowSpan={item.tags.includes('Prospect') ? 2 : 1}>{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.contact}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{
                    item.status === "ACTIVE" ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Active</span>
                    ) : item.status === "INACTIVE" ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">Inactive</span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Pending</span>
                    )
                  }</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{
                    <div className="flex items-center gap-x-2">
                      {item.tags.map((tag, index) => (
                        <span key={index} className="inline-flex items-start px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">{tag}</span>
                      ))}
                    </div>
                  }</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.lastContact.toDateString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                    <div className='flex items-center justify-end gap-x-2'>
                      <button onClick={() => openModal()} type="button" className="py-2 px-3 cursor-pointer inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-hidden focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none">
                        <Icon icon="mdi:phone-outline" className="size-4" />
                      </button>
                      <button type="button" className="py-2 px-3 cursor-pointer inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-hidden focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none">
                        <Icon icon="mdi:message-notification-outline" className="size-4" />
                      </button>
                      <button type="button" className="py-2 px-3 cursor-pointer inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-hidden focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none">
                        <Icon icon="mynaui:trash" className="size-4 text-red-500" />
                      </button>
                    </div>
                  </td>
                </tr>
                {item.tags.includes('Prospect') && (
                  <tr>
                    <td colSpan={5}>
                      <div className="flex gap-x-2 items-center justify-between bg-blue-100 border border-blue-200 text-sm text-blue-800 px-3 py-2" role="alert" tabIndex={-1} aria-labelledby="hs-soft-color-info-label">
                        <div className="flex gap-x-2 items-center">
                          <Icon icon="mingcute:ai-line" />
                          <span id="hs-soft-color-info-label" className="font-bold">AI Summary</span> customer {item.name} is a prospect. Consider reaching out to them for potential engagement and make an appointment at 29 July.
                        </div>
                        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 focus:outline-hidden focus:border-blue-500 focus:text-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                          <Icon icon="mdi:calendar" className="size-4" /> Add
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            )
          }
        </tbody>
      </table>
    </>
  );
}