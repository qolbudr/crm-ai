import { Route } from "react-router";
import MainLayout from "./main_layout";
import Dashboard from "./dashboard/dashboard";

export const mainRoutes = [
    <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
    </Route>
]