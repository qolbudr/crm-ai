import { Icon } from "@iconify/react";

const Analytics = (): React.JSX.Element => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-0">Analytics</h1>
      <p className="text-gray-700">
        View and analyze your data.
      </p>

      <div className="grid grid-cols-1 gap-4 mt-4">
        <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl p-4 md:p-5 col-span-2 gap-y-4">
          <h1 className="text-lg font-semibold">AI Insight and Recommendation</h1>
          <p className="text-gray-600 -mt-4">
            AI recommended base on conversation history and customer profile.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl p-4 md:p-5">
              <div className="flex justify-between items-center">
                <span className="text-md font-semibold">Peak Response Time</span>
                <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-100 text-red-800">High Impact</span>
              </div>
              <span className="text-sm text-gray-500 mt-3">Customers are most responsive between 9-11am and 2-4pm</span>
            </div>
            <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl p-4 md:p-5">
              <div className="flex justify-between items-center">
                <span className="text-md font-semibold">Sentiment Analysis</span>
                <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Medium</span>
              </div>
              <span className="text-sm text-gray-500 mt-3">68% of conversations were positive, 23% neutral, 9% negative</span>
            </div>
            <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl p-4 md:p-5">
              <div className="flex justify-between items-center">
                <span className="text-md font-semibold">Product Interest</span>
                <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-100 text-red-800">High Impact</span>
              </div>
              <span className="text-sm text-gray-500 mt-3">Product A gets 45% more inquiries than other products</span>
            </div>
            <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl p-4 md:p-5">
              <div className="flex justify-between items-center">
                <span className="text-md font-semibold">Geographic Trend</span>
                <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-100 text-red-800">High Impact</span>
              </div>
              <span className="text-sm text-gray-500 mt-3">Leads from Jakarta have the highest conversion rate (31%)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-4">
        <div className="flex bg-gray-100 hover:bg-gray-200 rounded-lg transition p-1">
          <nav className="flex gap-x-1" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
            <button type="button" className="hs-tab-active:bg-white hs-tab-active:text-gray-700 hs-tab-active: hs-tab-active: py-3 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 focus:outline-hidden focus:text-gray-700 font-medium rounded-lg hover:hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none active" id="segment-item-1" aria-selected="true" data-hs-tab="#segment-1" aria-controls="segment-1" role="tab">
              Trends
            </button>
            <button type="button" className="hs-tab-active:bg-white hs-tab-active:text-gray-700 hs-tab-active: hs-tab-active: py-3 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 focus:outline-hidden focus:text-gray-700 font-medium rounded-lg hover:hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none" id="segment-item-2" aria-selected="false" data-hs-tab="#segment-2" aria-controls="segment-2" role="tab">
              Forecast
            </button>
            <button type="button" className="hs-tab-active:bg-white hs-tab-active:text-gray-700 hs-tab-active: hs-tab-active: py-3 px-4 inline-flex items-center gap-x-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 focus:outline-hidden focus:text-gray-700 font-medium rounded-lg hover:hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none" id="segment-item-3" aria-selected="false" data-hs-tab="#segment-3" aria-controls="segment-3" role="tab">
              Conversion Funnel
            </button>
          </nav>
        </div>
      </div>

      <div className="mt-3">
        <div id="segment-1" role="tabpanel" aria-labelledby="segment-item-1">
          <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl p-4 md:p-5">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Trends</span>
              <Icon icon="healthicons:chart-line" className="text-2xl" />
          </div>
          <div className='w-full h-[250px] flex items-center justify-center'>
            <div className="text-center flex flex-col items-center">
              <Icon icon="healthicons:chart-line" className="text-6xl text-gray-300 mb-2" />
              <p className="text-gray-500 text-sm mt-2">
                Chart Placeholder
              </p>
            </div>
          </div>
          </div>
        </div>
        <div id="segment-2" className="hidden" role="tabpanel" aria-labelledby="segment-item-2">
          <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl p-4 md:p-5">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Forecast</span>
              <Icon icon="healthicons:chart-line" className="text-2xl" />
            </div>
            <div className='w-full h-[250px] flex items-center justify-center'>
              <div className="text-center flex flex-col items-center">
                <Icon icon="healthicons:chart-line" className="text-6xl text-gray-300 mb-2" />
                <p className="text-gray-500 text-sm mt-2">
                  Chart Placeholder
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="segment-3" className="hidden" role="tabpanel" aria-labelledby="segment-item-3">
        <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl p-4 md:p-5">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Conversion Funnel</span>
            <Icon icon="healthicons:chart-line" className="text-2xl" />
          </div>
          <div className='w-full h-[250px] flex items-center justify-center'>
            <div className="text-center flex flex-col items-center">
              <Icon icon="healthicons:chart-line" className="text-6xl text-gray-300 mb-2" />
              <p className="text-gray-500 text-sm mt-2">
                Chart Placeholder
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;