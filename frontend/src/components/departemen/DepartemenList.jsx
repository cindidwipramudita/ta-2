import React from "react";
import { Link } from "react-router-dom";

const DepartemenList = () => {
  return (
    <div className="p-5">
      <div className="text-center">
        <h3 className="text-2xl font-bold">Kelola Departemen</h3>
      </div>
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search by Nama Dep"
          className="px-4 py-0.5"
        />
        <Link
          to="/admin-dashboard/add-departemen"
          className="px-4 py-1 bg-teal-600 rounded text-white"
        >
          Tambah Departemen
        </Link>
      </div>
    </div>
  );
};

export default DepartemenList;
