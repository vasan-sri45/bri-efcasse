export const getStoredUser = () => {
  if (typeof window === "undefined") return null;

  try {
    const data = localStorage.getItem("bc_user");
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};
