import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditDepartemen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [departemen, setDepartemen] = useState({
    dep_nama: "",
    deskripsi: "",
  });
  const [depLoading, setDepLoading] = useState(false);

  useEffect(() => {
    const fetchDepartemen = async () => {
      setDepLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:3000/api/departemen/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          setDepartemen(response.data.departemen);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      } finally {
        setDepLoading(false);
      }
    };
    fetchDepartemen();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepartemen({ ...departemen, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3000/api/departemen/${id}`,
        departemen,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        alert("Departemen berhasil diperbarui");
        navigate("/admin-dashboard/departemen");
      }
    } catch (error) {
      alert("Terjadi kesalahan saat memperbarui departemen");
    }
  };

  return (
    <>
      {depLoading ? (
        <div>Loading ...</div>
      ) : (
        <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96">
          <div className="text-2xl font-bold mb-6">
            <h3>Edit Departemen</h3>
            <form onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="dep_nama"
                  className="text-sm font-medium text-gray-700"
                >
                  Nama Departemen
                </label>
                <input
                  type="text"
                  name="dep_nama"
                  onChange={handleChange}
                  value={departemen.dep_nama}
                  placeholder="Masukkan Nama Dep"
                  className="mt-1 w-full p-2 border-gray-300 rounded-md"
                  style={{ textTransform: "none", fontWeight: "normal" }}
                  required
                />
              </div>
              <div className="mt-3">
                <label
                  htmlFor="deskripsi"
                  className="block text-sm font-medium text-gray-700"
                >
                  Deskripsi
                </label>
                <textarea
                  name="deskripsi"
                  placeholder="Deskripsi"
                  onChange={handleChange}
                  value={departemen.deskripsi}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  rows="4"
                  style={{ textTransform: "none", fontWeight: "normal" }}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
              >
                Edit Departemen
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditDepartemen;
