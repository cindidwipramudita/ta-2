import Departemen from "../models/Departemen.js";

const addDepartemen = async (req, res) => {
  try {
    const { dep_nama, deskripsi } = req.body;
    const newDep = new Departemen({
      dep_nama,
      deskripsi,
    });
    await newDep.save();
    return res.status(200).json({ success: true, departemen: newDep });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: "tambah departemen server error" });
  }
};

export { addDepartemen };
