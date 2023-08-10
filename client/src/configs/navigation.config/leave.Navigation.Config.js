import { LEAVE_PREFIX_PATH } from "constants/route.constant";
import { NAV_ITEM_TYPE_ITEM } from "constants/navigation.constant";
import { ADMIN } from "constants/roles.constant";

const leaveNavigationConfig = [
  {
    key: "apps.leave",
    path: `${LEAVE_PREFIX_PATH}`,
    title: "Leave",
    icon: "leave",
    type: NAV_ITEM_TYPE_ITEM,
    authority: [ADMIN],
    subMenu: [],
  },
];

export default leaveNavigationConfig;
