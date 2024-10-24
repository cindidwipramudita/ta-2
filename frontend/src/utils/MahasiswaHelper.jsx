import axios from "axios";

export const fetchDepartemen = async () => {
  let departemen;
  try {
    const response = await axios.get("http://localhost:3000/api/departemen", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.data.success) {
      departemen = response.data.departemen;
    }
  } catch (error) {
    if (error.response && !error.response.data.success) {
      alert(error.response.data.error);
    }
  }
  return departemen;
};
