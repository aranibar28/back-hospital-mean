const { response } = require("express");
const Medic = require("../models/medic");

const getMedics = (req, res = response) => {
  res.json({
    ok: true,
    msg: "getMedics",
  });
};

const createMedic = async (req, res = response) => {
  const uid = req.uid;
  const medico = new Medic({
    user: uid,
    ...req.body,
  });
  
  try {
    const medicDB = await medico.save();
    res.json({
      ok: true,
      medic: medicDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado... revisar logs!",
    });
  }
};

const updateMedic = (req, res = response) => {
  res.json({
    ok: true,
    msg: "updateMedic",
  });
};

const deleteMedic = (req, res = response) => {
  res.json({
    ok: true,
    msg: "deleteMedic",
  });
};

module.exports = { getMedics, createMedic, updateMedic, deleteMedic };