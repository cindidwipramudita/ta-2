import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import axios from "axios";
import { columns, DepartemenButtons } from "../../utils/DepartemenHelper";

const DepartemenList = () => {
  const [departemen, setDepartemen] = useState([]);
  const [depLoading, setDepLoading] = useState(false);
  const [filteredDepartemen, setFilteredDepartemen] = useState([]);

  const fetchDepartemen = async () => {
    setDepLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/api/departemen", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.data.success) {
        let sno = 1;
        const data = response.data.departemen.map((dep) => ({
          _id: dep._id,
          sno: sno++,
          dep_nama: dep.dep_nama,
          action: (
            <DepartemenButtons
              _id={dep._id}
              onDepartemenDelete={onDepartemenDelete}
              fetchDepartemen={fetchDepartemen} // Tambahkan fungsi fetchDepartemen ke props
            />
          ),
        }));
        setDepartemen(data);
        setFilteredDepartemen(data);
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    } finally {
      setDepLoading(false);
    }
  };

  useEffect(() => {
    fetchDepartemen(); // Panggil fungsi untuk mengambil data pada awal komponen
  }, []);

  const onDepartemenDelete = (id) => {
    // Menghapus data dari state
    setDepartemen(departemen.filter((dep) => dep._id !== id));
  };

  const filterDepartemen = (e) => {
    const records = departemen.filter((dep) =>
      dep.dep_nama.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredDepartemen(records);
  };

  return (
    <>
      {depLoading ? (
        <div>Loading ...</div>
      ) : (
        <div className="p-5">
          <div className="text-center">
            <h3 className="text-2xl font-bold">Kelola Departemen</h3>
          </div>
          <div className="flex justify-between items-center mb-4">
            <input
              type="text"
              placeholder="Search by Nama Dep"
              className="px-4 py-0.5"
              onChange={filterDepartemen}
            />
            <Link
              to="/admin-dashboard/add-departemen"
              className="px-4 py-1 bg-teal-600 rounded text-white"
            >
              Tambah Departemen
            </Link>
          </div>
          <div>
            <DataTable columns={columns} data={filteredDepartemen} pagination />
          </div>
        </div>
      )}
    </>
  );
};

export default DepartemenList;
