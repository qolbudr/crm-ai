import { Icon } from '@iconify/react'

const Dashboard = (): React.JSX.Element => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-0">Dashboard</h1>
      <p className="text-gray-700">
        See your activities, statistics, and other.
      </p>

      {/* Card */}
      <div className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl p-4 md:p-5">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold">Total Customers</span>
              <Icon icon="mdi:account-group-outline" className="text-2xl" />
            </div>
            <span className="text-2xl font-bold my-2">1,234</span>
            <span className="text-sm text-gray-500"><span className='text-green-500'>+12%</span> from last month</span>
          </div>
          <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl p-4 md:p-5">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold">Appointments</span>
              <Icon icon="mdi:calendar-check-outline" className="text-2xl" />
            </div>
            <span className="text-2xl font-bold my-2">8</span>
            <span className="text-sm text-gray-500"><span className='text-red-500'>-5%</span> from last month</span>
          </div>
          <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl p-4 md:p-5">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold">Calls</span>
              <Icon icon="mdi:phone-outline" className="text-2xl" />
            </div>
            <span className="text-2xl font-bold my-2">100</span>
            <span className="text-sm text-gray-500"><span className='text-green-500'>50%</span> from last month</span>
          </div>
          <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl p-4 md:p-5">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold">Messages</span>
              <Icon icon="mdi:message-outline" className="text-2xl" />
            </div>
            <span className="text-2xl font-bold my-2">12</span>
            <span className="text-sm text-gray-500"><span className='text-red-500'>-12%</span> from last month</span>
          </div>
        </div>
      </div>

      <div className="flex mt-4">
        <div className="flex bg-gray-100 hover:bg-gray-200 rounded-lg transition p-1">
          <nav className="flex gap-x-1" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
            <button type="button" className="hs-tab-active:bg-white hs-tab-active:text-gray-700 hs-tab-active: hs-tab-active: py-3 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 focus:outline-hidden focus:text-gray-700 font-medium rounded-lg hover:hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none active" id="segment-item-1" aria-selected="true" data-hs-tab="#segment-1" aria-controls="segment-1" role="tab">
              Recent Customers
            </button>
            <button type="button" className="hs-tab-active:bg-white hs-tab-active:text-gray-700 hs-tab-active: hs-tab-active: py-3 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 focus:outline-hidden focus:text-gray-700 font-medium rounded-lg hover:hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none" id="segment-item-2" aria-selected="false" data-hs-tab="#segment-2" aria-controls="segment-2" role="tab">
              Recent Activity
            </button>
            <button type="button" className="hs-tab-active:bg-white hs-tab-active:text-gray-700 hs-tab-active: hs-tab-active: py-3 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 focus:outline-hidden focus:text-gray-700 font-medium rounded-lg hover:hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none" id="segment-item-3" aria-selected="false" data-hs-tab="#segment-3" aria-controls="segment-3" role="tab">
              Appointments
            </button>
          </nav>
        </div>
      </div>

      <div className="mt-3">
        <div id="segment-1" role="tabpanel" aria-labelledby="segment-item-1">
          <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl p-4 md:p-5">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Recent Customers</span>
              <Icon icon="mdi:account-group-outline" className="text-2xl" />
            </div>
            <div className='w-full h-[250px] flex items-center justify-center'>
              <div className="text-center flex flex-col items-center">
                <Icon icon="mdi:account-multiple-outline" className="text-6xl text-gray-300 mb-2" />
                <p className="text-gray-500 text-sm mt-2">
                  No recent customers found. Please add some customers to see them here.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="segment-2" className="hidden" role="tabpanel" aria-labelledby="segment-item-2">
          <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl p-4 md:p-5">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Recent Activity</span>
              <Icon icon="mdi:graph-outline" className="text-2xl" />
            </div>
            <div className='w-full h-[250px] flex items-center justify-center'>
              <div className="text-center flex flex-col items-center">
                <Icon icon="mdi:graph-outline" className="text-6xl text-gray-300 mb-2" />
                <p className="text-gray-500 text-sm mt-2">
                  No recent activity found. Please perform some actions to see them here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="segment-3" className="hidden" role="tabpanel" aria-labelledby="segment-item-3">
        <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl p-4 md:p-5">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Recent Appointments</span>
            <Icon icon="mdi:calendar-outline" className="text-2xl" />
          </div>
          <div className='w-full h-[250px] flex items-center justify-center'>
            <div className="text-center flex flex-col items-center">
              <Icon icon="mdi:calendar-outline" className="text-6xl text-gray-300 mb-2" />
              <p className="text-gray-500 text-sm mt-2">
                No recent appointments found. Please add some appointments to see them here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;