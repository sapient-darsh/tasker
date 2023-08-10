import api from "service/api";

export async function login(data) {
  return api.post("/auth/local?populate=*", data);
}
