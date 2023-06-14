import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { homeRoutes } from "./homeRoutes";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route index element={<Login />} />
      {homeRoutes.map((route) => (
        <Route key={route.path} element={route.children} path={route.path} />
      ))}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});
