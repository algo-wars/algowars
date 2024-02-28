import { Routes, Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import NotFound from "./not-found/NotFound";
import ProblemPage from "./problem/ProblemPage";
import { AuthenticationGuard } from "@/guards/AuthenticationGuard";
import Admin from "./admin/Admin";
import AdminCreate from "./admin/admin-create/AdminCreate";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="problem/:problemSlug" element={<ProblemPage />} />
      <Route
        path="admin/create"
        element={<AuthenticationGuard component={AdminCreate} />}
      />
      <Route path="admin" element={<AuthenticationGuard component={Admin} />} />
      <Route index element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default PageRoutes;
