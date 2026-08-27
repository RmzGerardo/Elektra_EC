import { consumirProductos, consumirCategorias } from "../services/productos";
import { useEffect, useState } from "react";

// Estructura de datos para tipar un producto individual
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

// Hook personalizado para cargar y controlar los productos de la tienda
export const useProductos = () => {
  const [productos, setProductos] = useState<Product[]>([]);

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

// Hook personalizado para cargar y controlar la lista de categorías
export const useCategorias = () => {
  const [categorias, setCategorias] = useState<string[]>([]);

  useEffect(() => {
    const getCategorias = async () => {
      try {
        const response = await consumirCategorias();
        if (response) {
          setCategorias(response);
        }
      } catch (error) {
        console.error("Error al obtener las categorias: ", error);
      }
    };

    getCategorias();
  }, []);

  return { categorias };
};
