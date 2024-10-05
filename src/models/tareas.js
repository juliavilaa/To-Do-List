const mongoose = require("mongoose"); // importando el componente mogoose
const tareaSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    fechaLimite: {
        type: Date,
        required: true,
    },
    prioridad: {
        type: String,
        requiered: true,
    },
    estado: {
        type: String,
        required: true
    },
    etiqueta: {
        type: String,
        required: true
    },
    idTarea: {
        type: Number,
        required: true
    }
});
module.exports = mongoose.model("tarea", tareaSchema);