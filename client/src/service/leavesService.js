import api from "service/api";

export async function leavesList() {
  return api.get(
    "/leaves?filters[users_permissions_user][id][$eq]=4&populate=*"
  );
}
