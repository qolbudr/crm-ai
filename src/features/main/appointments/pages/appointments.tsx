import { Icon } from "@iconify/react";
import { AppointmentCard } from "../components/appointment_card";
import { appointmentList } from "../../../../cores/variables/appointment_list";
import React from "react";
import type { AppointmentListType } from "../../../../cores/types/appointment_list_type";
import { CallSimulation } from "../components/call_simulation";
import { set } from "lodash";

const Appointments = (): React.JSX.Element => {
  const [appointment, selectAppointment] = React.useState<AppointmentListType | undefined>();
  const openModalRef = React.useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const selectAppointmentHandler = (appointment: AppointmentListType) => {
    selectAppointment(appointment);
  };

  const openModal = () => {
    if (openModalRef.current) {
      openModalRef.current.click();
      setIsOpen(true);
    }
  };

  return <>
    <button ref={openModalRef} type="button" className="hidden py-3 px-4 items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="dialog" aria-expanded="false" aria-controls="call-simulation" data-hs-overlay="#call-simulation">
      Open modal
    </button>
    <CallSimulation isOpen={isOpen} />
    <h1 className="text-2xl font-bold mb-0">Appointments</h1>
    <p className="text-gray-700">
      Manage your appointments and schedule.
    </p>
    <div className="flex items-center justify-between mt-4">
      <div className="flex items-center gap-x-2">
        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
          Today
        </button>
        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
          <Icon icon="mdi:filter-outline" className="size-4" />
        </button>
      </div>

      <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
        <Icon icon="mdi:plus" className="size-4" /> Add Appointment
      </button>
    </div>

    <div className="mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl p-4 md:p-5 col-span-2 gap-y-4">
          <h1 className="text-lg font-semibold">Upcoming Appointments</h1>
          <p className="text-gray-600 -mt-4">
            AI recommended base on conversation history and customer profile.
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            {
              ...appointmentList.map((appointment, index) => (
                <AppointmentCard handler={selectAppointmentHandler} key={index} appointment={appointment} />
              ))
            }
          </div>
        </div>
        {appointment && (
          <div className="flex flex-col justify-between bg-white border border-gray-200 shadow-2xs rounded-xl p-4 md:p-5 gap-y-4">
            <div className="flex flex-col gap-y-4">
              <h1 className="text-lg font-semibold">Message Template</h1>
              <p className="text-gray-600 -mt-4">
                Message templates suggestion for quick responses.
              </p>

              <div className="flex flex-col">
                <h1 className="text-md mb">For: <span className="font-semibold">{appointment?.name}</span></h1>
                <h5 className="text-sm text-gray-600">{appointment?.contact}</h5>
              </div>
              <hr className="border-gray-200" />
              <h1 className="text-md mb">AI Suggestion</h1>
              <div className="flex gap-x-2 mb-4 items-center justify-between bg-blue-100 border border-blue-200 text-sm text-blue-800 px-3 py-2" role="alert" tabIndex={-1} aria-labelledby="hs-soft-color-info-label">
                <div className="flex gap-x-2 items-start">
                  <Icon icon="mingcute:ai-line" />
                  <h1>
                    <span id="hs-soft-color-info-label" className="font-bold">AI Summary</span> {appointment?.summary || "No summary available."}
                  </h1>
                </div>
              </div>
              <hr className="border-gray-200" />
              <h1 className="text-md mb">AI Message Template</h1>
              <div className="space-y-3">
                <textarea className="py-2 px-3 sm:py-3 sm:px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" rows={5} value={appointment?.suggestion} placeholder="AI Suggestion" readOnly>{appointment?.suggestion}</textarea>
              </div>
            </div>
            <div className="flex items-center justify-end gap-x-2">
              <button onClick={() => openModal()} type="button" className="cursor-pointer py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="dialog" aria-expanded="false" aria-controls="call-simulation" data-hs-overlay="#call-simulation">
                <Icon icon="mdi:whatsapp" /> Whatsapp
              </button>
              <button onClick={() => openModal()} type="button" className="cursor-pointer py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="dialog" aria-expanded="false" aria-controls="call-simulation" data-hs-overlay="#call-simulation">
                <Icon icon="mdi:email-outline" /> Email
              </button>
              <button onClick={() => openModal()} type="button" className="cursor-pointer py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="dialog" aria-expanded="false" aria-controls="call-simulation" data-hs-overlay="#call-simulation">
                <Icon icon="mdi:phone-outline" /> Call
              </button>
            </div>
          </div>
        )}

        {!appointment && (
          <div className="flex flex-col justify-center bg-white border border-gray-200 shadow-2xs rounded-xl p-4 md:p-5 gap-y-4">
            <div className="flex flex-col items-center justify-center gap-y-4">
              <Icon icon="mdi:calendar-multiple" className="size-16 text-gray-400" />
              <h1 className="text-lg font-semibold">Select an Appointment</h1>
              <p className="text-gray-600 -mt-4 text-center">
                Click on an appointment and send to view details and suggestions.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  </>
}

export default Appointments;