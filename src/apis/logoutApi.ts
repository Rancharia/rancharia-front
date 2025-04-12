import api from "../boot/axiosConfig";

export const logout = async () => {
  try {
    const response = await api.post(
      "/logout",
      {},
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    throw error.response?.data || error;
  }
};
