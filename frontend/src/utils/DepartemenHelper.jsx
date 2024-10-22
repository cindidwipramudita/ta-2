import axios from "axios";
import { useNavigate } from "react-router-dom";

export const columns = [
  {
    name: "S No",
    selector: (row) => row.sno,
  },
  {
    name: "Nama Departemen",
    selector: (row) => row.dep_nama,
  },
  {
    name: "Action",
    selector: (row) => row.action,
  },
];

export const DepartemenButtons = ({
  _id,
  onDepartemenDelete,
  fetchDepartemen,
}) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirm = window.confirm("Do you want to delete?");
    if (confirm) {
      try {
        const response = await axios.delete(
          `http://localhost:3000/api/departemen/${_id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          onDepartemenDelete(_id); // Memanggil fungsi untuk menghapus dari state
          fetchDepartemen(); // Memanggil kembali fungsi untuk mendapatkan data terbaru
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    }
  };

  return (
    <div className="flex space-x-3">
      <button
        className="px-4 py-1 bg-teal-600 text-white"
        onClick={() => navigate(`/admin-dashboard/departemen/${_id}`)}
      >
        Edit
      </button>
      <button
        className="px-4 py-1 bg-red-600 text-white"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};
