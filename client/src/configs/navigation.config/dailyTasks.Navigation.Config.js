import { DAILYTASK_PREFIX_PATH } from "constants/route.constant";
import { NAV_ITEM_TYPE_ITEM } from "constants/navigation.constant";
import { ADMIN } from "constants/roles.constant";

const dailyTasksNavigationConfig = [
  {
    key: "apps.dailyTasks",
    path: `${DAILYTASK_PREFIX_PATH}`,
    title: "Daily Tasks",
    icon: "dailyTasks",
    type: NAV_ITEM_TYPE_ITEM,
    authority: [ADMIN],
    subMenu: [],
  },
];

export default dailyTasksNavigationConfig;
