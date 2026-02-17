import axios from "axios";

export const api = axios.create({
  baseURL: "https://bri-efcasse-2.onrender.com/api",
    withCredentials: true,
  timeout: 60000,

});

/* Attach token on every request */
// api.interceptors.request.use((config) => {
//   if (typeof window !== "undefined") {
//     const token = localStorage.getItem("bc_token");
//     if (token) config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

/* Auto logout on invalid token */
// api.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     if (err?.response?.status === 401) {
//       localStorage.removeItem("bc_token");
//       localStorage.removeItem("bc_user");
//       window.location.href = "/";
//     }
//     return Promise.reject(err);
//   }
// );
