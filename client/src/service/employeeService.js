import api from "service/api";

export async function employeesList() {
  return api.get("/users?filters[user_role][role][$eq]=employee&populate=*");
}
