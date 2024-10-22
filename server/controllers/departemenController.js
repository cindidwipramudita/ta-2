import Departemen from "../models/Departemen.js";

const getDepartemen = async (req, res) => {
  try {
    const departemen = await Departemen.find();
    return res.status(200).json({ success: true, departemen });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: "get departemen server error" });
  }
};

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
      .json({ success: false, error: "add departemen server error" });
  }
};

const editDepartemen = async (req, res) => {
  try {
    const { id } = req.params;
    const departemen = await Departemen.findById({ _id: id });
    return res.status(200).json({ success: true, departemen });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: "get departemen server error" });
  }
};

const updateDepartemen = async (req, res) => {
  try {
    const { id } = req.params;
    const { dep_nama, deskripsi } = req.body;
    const updateDep = await Departemen.findByIdAndUpdate(
      { _id: id },
      { dep_nama, deskripsi },
      { new: true }
    );
    return res.status(200).json({ success: true, departemen: updateDep });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: "edit departemen server error" });
  }
};

const deleteDepartemen = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteDep = await Departemen.findByIdAndDelete(id);
    return res.status(200).json({ success: true, departemen: deleteDep });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: "delete departemen server error" });
  }
};

export {
  addDepartemen,
  getDepartemen,
  editDepartemen,
  updateDepartemen,
  deleteDepartemen,
};
