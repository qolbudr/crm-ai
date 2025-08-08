import { Route } from "react-router";
import MainLayout from "./main_layout";
import Dashboard from "./dashboard/pages/dashboard";
import Customers from "./customers/pages/customers";

export const mainRoutes = [
    <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customers" element={<Customers />} />
    </Route>
]