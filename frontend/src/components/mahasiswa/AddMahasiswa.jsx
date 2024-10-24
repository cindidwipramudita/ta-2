import React, { useEffect, useState } from "react";
import { fetchDepartemen } from "../../utils/MahasiswaHelper";
import axios from "axios";

const AddMahasiswa = () => {
  const [departemen, setDepartemen] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const getDepartemen = async () => {
      const departemenData = await fetchDepartemen();
      if (departemenData) {
        setDepartemen(departemenData);
      }
    };
    getDepartemen();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name == "image") {
      setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataObj = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataObj.append(key, formData[key]);
    });

    try {
      const response = await axios.post(
        "http://localhost:3000/api/mahasiswa/add",
        formDataObj,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        navigate("/admin-dashboard/mahasiswa");
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Tambahkan Mahasiswa</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/*Nama*/}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nama
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Masukkan Nama"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            ></input>
          </div>
          {/*Email*/}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Masukkan Email"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            ></input>
          </div>
          {/*Universitas*/}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Asal Universitas
            </label>
            <input
              type="text"
              name="universitas"
              onChange={handleChange}
              placeholder="Asal Universitas"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            ></input>
          </div>
          {/*Tanggal Masuk*/}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tanggal Masuk
            </label>
            <input
              type="date"
              name="tanggalMasuk"
              onChange={handleChange}
              placeholder="Tanggal Masuk"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            ></input>
          </div>
          {/*Gender*/}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              name="gender"
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Pilih Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          {/*Departemen*/}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Departemen
            </label>
            <select
              name="departemen"
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Pilih Departemen</option>
              {departemen.map((dep) => (
                <option key={dep._id} value={dep._id}>
                  {dep.dep_nama}
                </option>
              ))}
            </select>
          </div>
          {/*Gaji*/}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700">
              Gaji
            </label>
            <input
              type="number"
              name="gaji"
              placeholder="Gaji"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            ></input>
          </div> */}
          {/*Password*/}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="*****"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            ></input>
          </div>
          {/*Role*/}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              name="role"
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Pilih Role</option>
              <option value="admin">Admin</option>
              <option value="pembimbing">Pembimbing</option>
              <option value="mahasiswa">Mahasiswa</option>
            </select>
          </div>
          {/*Image Upload*/}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload Gambar
            </label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              placeholder="Upload Gambar"
              accept="image/*"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            ></input>
          </div>
        </div>
        <button
          type="submit"
          className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rouded-md"
        >
          Tambah Mahasiswa
        </button>
      </form>
    </div>
  );
};

export default AddMahasiswa;
