export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export const getSession = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/session`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Unable to check authentication status");
  }

  return response.json();
};
