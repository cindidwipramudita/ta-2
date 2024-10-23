import React from "react";
import { Link } from "react-router-dom";

const MahasiswaList = () => {
  return (
    <div className="px-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold">Kelola Mahasiswa</h3>
      </div>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search by Nama"
          className="px-4 py-0.5"
        />
        <Link
          to="/admin-dashboard/add-mahasiswa"
          className="px-4 py-1 bg-teal-600 rounded text-white"
        >
          Tambah Mahasiswa
        </Link>
      </div>
    </div>
  );
};

export default MahasiswaList;
