import { PROJECTS_PREFIX_PATH } from "constants/route.constant";
import { NAV_ITEM_TYPE_ITEM } from "constants/navigation.constant";
import { ADMIN } from "constants/roles.constant";

const projectsNavigationConfig = [
  {
    key: "apps.projects",
    path: `${PROJECTS_PREFIX_PATH}`,
    title: "Assigned Projects",
    icon: "projects",
    type: NAV_ITEM_TYPE_ITEM,
    authority: [ADMIN],
    subMenu: [],
  },
];

export default projectsNavigationConfig;
