import { Route } from "react-router";
import Login from "./login/login";

export const authRoutes = [
    <Route path="/login" element={<Login />} />
]