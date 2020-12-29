import React from "react";
import styles from "./Formulario.module.css";
import useSelect from "../hooks/useSelect";

const Formulario = ({ setCategoria }) => {
  const OPCIONES = [
    {
      value: "general",
      label: "General",
    },
    {
      value: "business",
      label: "Negocios",
    },
    {
      value: "entertaiment",
      label: "Entretenimiento",
    },
    {
      value: "healthy",
      label: "Salud",
    },
    {
      value: "science",
      label: "Ciencia",
    },
    {
      value: "sports",
      label: "Deportes",
    },
    {
      value: "technology",
      label: "Tecnología",
    },
  ];
  const [categoria, SelectNoticias] = useSelect("general", OPCIONES);

  const buscarNoticias = (e) => {
    e.preventDefault();
    setCategoria(categoria);
  };
  return (
    <div>
      <div className={`row ${styles.buscador}`}>
        <div className="col s12 m8 offset-m2">
          <form onSubmit={buscarNoticias}>
            <h2 className={styles.heading}>Encuentra noticias por categoria</h2>
            <SelectNoticias />
            <div className="input-field col s12">
              <input
                type="submit"
                className={`btn-large amber darken-2 ${styles.btn_block}`}
                value="Buscar"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
