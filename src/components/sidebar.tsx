import { Link } from "react-router"
import { sidebarItem } from "../cores/variables/sidebar_item"

export const Sidebar = (): React.JSX.Element => {
  return <>
    <div id="hs-sidebar-basic-usage" className="hs-overlay [--auto-close:lg] lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 w-64 hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform h-full hidden fixed top-0 start-0 bottom-0 z-60 bg-white border-e border-gray-200" role="dialog" tabIndex={-1} aria-label="Sidebar" >
      <div className="relative flex flex-col h-full max-h-full ">
        <header className="p-4 flex justify-between items-center gap-x-2 mb-4">
          <a href="#">
            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop,q=95/AQEDEn9GZ1t8kWnj/tomie-blue-Y4LDOn7a3BIQ1Pea.jpg" alt="logo" className="w-full" />
          </a>
        </header>
        <nav className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
          <div className=" pb-0 px-2  w-full flex flex-col flex-wrap" >
            <ul className="space-y-1">
              {
                ...sidebarItem.map((item, index) =>
                  <li key={index}>
                    <Link to={item.href}>
                      <div className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 ${item.isActive ? 'bg-gray-100' : ''}`}>
                        {item.icon && <span className="size-6">{item.icon}</span>}
                        {item.label}
                      </div>
                    </Link>
                  </li>
                )
              }
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </>
}