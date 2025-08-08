import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Sidebar } from "../../components/sidebar";
import { Navbar } from "../../components/navbar";

async function loadPreline() {
  return import('preline/dist/index.js');
}

const MainLayout = (): React.JSX.Element => {
  const location = useLocation();
  useEffect(() => {
    const initPreline = async () => {
      await loadPreline();
      if (
        window.HSStaticMethods &&
        typeof window.HSStaticMethods.autoInit === 'function'
      ) {
        window.HSStaticMethods.autoInit();
      }
    };

    initPreline();
  }, [location.pathname]);

  return <>
    <Navbar />
    <Sidebar />
    <main className="lg:ps-64 pt-[75px]">
      <div className="p-4 px-6">
        <Outlet />
      </div>
    </main>
  </>
}

export default MainLayout;