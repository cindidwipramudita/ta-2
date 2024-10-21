import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddDepartemen = () => {
  const [departemen, setDepartemen] = useState({
    dep_nama: "",
    deskripsi: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepartemen({ ...departemen, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/departemen/add",
        departemen,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        navigate("/admin-dashboard/departemen");
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96">
      <div className="text-2xl font-bold mb-6">
        <h3>Tambah Departemen</h3>
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
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              rows="4"
              style={{ textTransform: "none", fontWeight: "normal" }}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
          >
            Tambah Departemen
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDepartemen;
