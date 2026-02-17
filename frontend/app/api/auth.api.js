import { api } from "./api";

/* ---------------- LOGOUT ---------------- */
export async function logoutApi() {
  const { data } = await api.post("/logout");
  return data;
}

/* ---------------- GET SESSION USER ---------------- */
export const getMe = async () => {
  const res = await api.get("/user");
  return res.data; // { success, user }
};
