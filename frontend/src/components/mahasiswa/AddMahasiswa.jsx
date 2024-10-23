import React from "react";

const AddMahasiswa = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Tambahkan Mahasiswa</h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/*Nama*/}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nama
            </label>
            <input
              type="text"
              name="nama"
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
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Pilih Departemen</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddMahasiswa;
