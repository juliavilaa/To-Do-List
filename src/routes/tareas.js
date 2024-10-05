const express = require("express");
const router = express.Router(); //manejador de rutas de express
const tareaSchema = require("../models/tareas");

// Postear tareas
router.post("/", (req, res) => {
  const tarea = tareaSchema(req.body);
  tarea
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Consultar todos las tareaes
router.get("/", (req, res) => {
  tareaSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Consultar un tarea por su id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  tareaSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Modificar el nombre de un tarea por su id
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { titulo, descripcion, fechaLimite, prioridad,estado, etiqueta } = req.body;
  tareaSchema
    .updateOne(
      { _id: id },
      {
        $set: { titulo, descripcion, fechaLimite, prioridad,estado, etiqueta },
      }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Eliminar un tarea por su id

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  tareaSchema
    .findByIdAndDelete(id)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});


module.exports = router;