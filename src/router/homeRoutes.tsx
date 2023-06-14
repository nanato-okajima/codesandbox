import { UserManagement } from "../components/pages/UserManagement";
import { Setting } from "../components/pages/Setting";
import { Home } from "../components/pages/Home";

export const homeRoutes = [
  {
    path: "/home",
    children: <Home />
  },
  {
    path: "/home/user_management",
    children: <UserManagement />
  },
  {
    path: "/home/setting",
    children: <Setting />
  }
];
