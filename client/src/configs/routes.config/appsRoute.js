import React from "react";
import {
  DASHBOARD_PREFIX_PATH,
  DAILYTASK_PREFIX_PATH,
  LEAVE_PREFIX_PATH,
  PROJECTS_PREFIX_PATH,
  EMPLOYEES_PREFIX_PATH,
} from "constants/route.constant";
import { ADMIN, USER } from "constants/roles.constant";

const appsRoute = [
  {
    key: "apps.dashboard",
    path: `${DASHBOARD_PREFIX_PATH}`,
    component: React.lazy(() => import("views/Dashboard")),
    authority: [ADMIN, USER],
  },
  {
    key: "apps.dailyTasks",
    path: `${DAILYTASK_PREFIX_PATH}`,
    component: React.lazy(() => import("views/DailyTasks")),
    authority: [ADMIN, USER],
  },
  {
    key: "apps.leave",
    path: `${LEAVE_PREFIX_PATH}`,
    component: React.lazy(() => import("views/Leave")),
    authority: [ADMIN, USER],
  },
  {
    key: "apps.projects",
    path: `${PROJECTS_PREFIX_PATH}`,
    component: React.lazy(() => import("views/Projects")),
    authority: [ADMIN, USER],
  },
  {
    key: "apps.employees",
    path: `${EMPLOYEES_PREFIX_PATH}`,
    component: React.lazy(() => import("views/Employees")),
    authority: [ADMIN, USER],
  },
];

export default appsRoute;
