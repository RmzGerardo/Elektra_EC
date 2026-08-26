import { consumirProductos } from "../services/productos";
import { useEffect, useState } from "react";

export const useProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
      try {
        const response = await consumirProductos();
        if (response) {
          setProductos(response);
        }
      } catch (error) {
        console.error("Error al obtener los productos: ", error);
      }
    };

    getProductos();
  }, []);

  return { productos };
};
