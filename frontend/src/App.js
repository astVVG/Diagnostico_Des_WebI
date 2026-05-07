import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tareas, setTareas] = useState([]);

  const [formulario, setFormulario] = useState({
    titulo: "",
    descripcion: "",
    materia: "",
    profesor: "",
    fecha_entrega: "",
  });

  const [editando, setEditando] = useState(false);
  const [idActual, setIdActual] = useState(null);

  const API = "http://127.0.0.1:8000/api/tareas/";

  const obtenerTareas = async () => {
    const res = await axios.get(API);
    setTareas(res.data);
  };

  useEffect(() => {
    obtenerTareas();
  }, []);

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editando) {
      await axios.put(`${API}${idActual}/`, formulario);
      setEditando(false);
      setIdActual(null);
    } else {
      await axios.post(API, formulario);
    }

    setFormulario({
      titulo: "",
      descripcion: "",
      materia: "",
      profesor: "",
      fecha_entrega: "",
    });

    obtenerTareas();
  };

  const editarTarea = (tarea) => {
    setFormulario(tarea);
    setEditando(true);
    setIdActual(tarea.id);
  };

  const eliminarTarea = async (id) => {
    await axios.delete(`${API}${id}/`);
    obtenerTareas();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f6f9",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#333",
          }}
        >
          CRUD DE TAREAS
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "350px 1fr",
            gap: "30px",
          }}
        >
          {/* FORMULARIO */}
          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              height: "fit-content",
            }}
          >
            <h2 style={{ marginBottom: "20px" }}>
              {editando ? "Editar tarea" : "Nueva tarea"}
            </h2>

            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <input
                type="text"
                name="titulo"
                placeholder="Título"
                value={formulario.titulo}
                onChange={handleChange}
                required
                style={inputStyle}
              />

              <textarea
                name="descripcion"
                placeholder="Descripción"
                value={formulario.descripcion}
                onChange={handleChange}
                required
                rows="4"
                style={inputStyle}
              />

              <input
                type="text"
                name="materia"
                placeholder="Materia"
                value={formulario.materia}
                onChange={handleChange}
                required
                style={inputStyle}
              />

              <input
                type="text"
                name="profesor"
                placeholder="Profesor"
                value={formulario.profesor}
                onChange={handleChange}
                required
                style={inputStyle}
              />

              <input
                type="date"
                name="fecha_entrega"
                value={formulario.fecha_entrega}
                onChange={handleChange}
                required
                style={inputStyle}
              />

              <button
                type="submit"
                style={{
                  backgroundColor: editando ? "#f39c12" : "#3498db",
                  color: "white",
                  border: "none",
                  padding: "12px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                {editando ? "Actualizar" : "Guardar"}
              </button>
            </form>
          </div>

          {/* LISTA */}
          <div>
            <h2 style={{ marginBottom: "20px" }}>Lista de tareas</h2>

            {tareas.length === 0 ? (
              <div
                style={{
                  background: "white",
                  padding: "20px",
                  borderRadius: "15px",
                  textAlign: "center",
                  color: "#777",
                }}
              >
                No hay tareas registradas
              </div>
            ) : (
              tareas.map((tarea) => (
                <div
                  key={tarea.id}
                  style={{
                    background: "white",
                    padding: "20px",
                    borderRadius: "15px",
                    marginBottom: "20px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                  }}
                >
                  <h3 style={{ marginBottom: "10px", color: "#2c3e50" }}>
                    {tarea.titulo}
                  </h3>

                  <p style={{ color: "#555" }}>
                    {tarea.descripcion}
                  </p>

                  <div
                    style={{
                      marginTop: "15px",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px",
                    }}
                  >
                    <span style={tagStyle}>
                      📚 {tarea.materia}
                    </span>

                    <span style={tagStyle}>
                      👨‍🏫 {tarea.profesor}
                    </span>

                    <span style={tagStyle}>
                      📅 {tarea.fecha_entrega}
                    </span>
                  </div>

                  <div
                    style={{
                      marginTop: "20px",
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <button
                      onClick={() => editarTarea(tarea)}
                      style={{
                        backgroundColor: "#f39c12",
                        color: "white",
                        border: "none",
                        padding: "10px 15px",
                        borderRadius: "8px",
                        cursor: "pointer",
                      }}
                    >
                      Editar
                    </button>

                    <button
                      onClick={() => eliminarTarea(tarea.id)}
                      style={{
                        backgroundColor: "#e74c3c",
                        color: "white",
                        border: "none",
                        padding: "10px 15px",
                        borderRadius: "8px",
                        cursor: "pointer",
                      }}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  fontSize: "14px",
  outline: "none",
};

const tagStyle = {
  backgroundColor: "#ecf0f1",
  padding: "8px 12px",
  borderRadius: "20px",
  fontSize: "14px",
};

export default App;