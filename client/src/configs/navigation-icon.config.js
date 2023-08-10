import {
  HiClipboardList,
  HiCollection,
  HiDocumentText,
  HiTemplate,
  HiUserGroup,
} from "react-icons/hi";

const navigationIcon = {
  dashboard: <HiTemplate />,
  dailyTasks: <HiClipboardList />,
  leave: <HiDocumentText />,
  projects: <HiCollection />,
  employees: <HiUserGroup />,
};

export default navigationIcon;
