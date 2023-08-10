import dashboardNavigationConfig from "./dashboard.Navigation.Config";
import dailyTasksNavigationConfig from "./dailyTasks.Navigation.Config";
import leaveNavigationConfig from "./leave.Navigation.Config";
import projectsNavigationConfig from "./projects.Navigation.Config";
import employeesNavigationConfig from "./employees.Navigation.Config";

const navigationConfig = [
  ...dashboardNavigationConfig,
  ...dailyTasksNavigationConfig,
  ...projectsNavigationConfig,
  ...leaveNavigationConfig,
  ...employeesNavigationConfig,
];

export default navigationConfig;
