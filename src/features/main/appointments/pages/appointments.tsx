import { Icon } from "@iconify/react";

const Appointments = (): React.JSX.Element => {
  return <>
    <h1 className="text-2xl font-bold mb-0">Appointments</h1>
    <p className="text-gray-700">
      Manage your appointments and schedule.
    </p>

    <button type="button" className="mt-4 py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
      <Icon icon="mdi:plus" className="size-4" /> Add Appointment
    </button>
  </>
}

export default Appointments;