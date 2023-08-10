import { EMPLOYEES_PREFIX_PATH } from "constants/route.constant";
import { NAV_ITEM_TYPE_ITEM } from "constants/navigation.constant";
import { ADMIN } from "constants/roles.constant";

const employeesNavigationConfig = [
  {
    key: "apps.employees",
    path: `${EMPLOYEES_PREFIX_PATH}`,
    title: "Employees",
    icon: "employees",
    type: NAV_ITEM_TYPE_ITEM,
    authority: [ADMIN],
    subMenu: [],
  },
];

export default employeesNavigationConfig;
