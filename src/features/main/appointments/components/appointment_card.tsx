import { Icon } from "@iconify/react";
import type { AppointmentListType } from "../../../../cores/types/appointment_list_type";

export const AppointmentCard = ({appointment, handler}: {appointment: AppointmentListType, handler: (appointment: AppointmentListType) => void}): React.JSX.Element => {
  return (
    <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl p-4 md:p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <img className="inline-block size-11 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Avatar" />
          <div className="flex flex-col">
            <span className="text-gray-800 font-semibold">{appointment.name}</span>
            <span className="text-gray-600 text-sm">{appointment.contact}</span>
          </div>
        </div>
        <div className="flex flex-col gap-x-2 items-end">
          <span className="text-gray-600 text-sm">Next Appointment</span>
          <span className="text-gray-800 text-sm font-semibold">{appointment.date.toLocaleString()}</span>
        </div>
      </div>
      <div className="flex gap-x-2 text-sm items-center text-gray-600 my-4">
        <Icon icon="mdi:calendar-clock" className="size-6 text-gray-500" />{appointment.type}
      </div>
      <div className="flex gap-x-2 mb-4 items-center justify-between bg-blue-100 border border-blue-200 text-sm text-blue-800 px-3 py-2" role="alert" tabIndex={-1} aria-labelledby="hs-soft-color-info-label">
        <div className="flex gap-x-2 items-start">
          <Icon icon="mingcute:ai-line" />
          <h1>
            <span id="hs-soft-color-info-label" className="font-bold">AI Summary</span> {appointment.summary}
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-end gap-x-2">
        <button onClick={() => handler(appointment)} type="button" className="py-2 px-3 cursor-pointer inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
          <Icon icon="mdi:send" className="size-4" /> Send
        </button>
        <button type="button" className="py-2 cursor-pointer px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500 focus:outline-hidden focus:border-blue-500 focus:text-blue-500 disabled:opacity-50 disabled:pointer-events-none">
          <Icon icon="mdi:calendar" className="size-4" /> Reschedule
        </button>
      </div>
    </div>
  )
}