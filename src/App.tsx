import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "../components/Main";
import { Productos } from "../components/Productos";
import { Carrito } from "../components/Carrito";
import { Login } from "../components/Login";
import { Pagar } from "../components/Pagar";
import { DatosPersonales } from "../components/DatosPersonales";
import { Pagando } from "../components/Pagando";

export interface ElementoCarrito {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
}

export const App = () => {
  const [carritoAbierto, setCarritoAbierto] = useState(false);
  const [carrito, setCarrito] = useState<ElementoCarrito[]>([]);

  // 1. RESTAURAR: Devolvemos el código para agregar productos al carrito
  const agregarAlCarrito = (producto: any) => {
    setCarrito((prevCarrito) => {
      const existe = prevCarrito.find((item) => item.id === producto.id);
      if (existe) {
        return prevCarrito.map((item) =>
          item.id === producto.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [
        ...prevCarrito,
        {
          id: producto.id,
          title: producto.title,
          price: producto.price,
          thumbnail: producto.thumbnail,
          quantity: 1,
        },
      ];
    });
  };

  const restarAlCarrito = (id: number) => {
    setCarrito((prevCarrito) =>
      prevCarrito
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const eliminarDelCarrito = (id: number) => {
    setCarrito((prevCarrito) => prevCarrito.filter((item) => item.id !== id));
  };

  // 4. Calculamos el total de piezas agregadas para el número rojo del menú
  let totalArticulos = 0;
  carrito.forEach((item) => {
    totalArticulos = totalArticulos + item.quantity;
  });

  return (
    <BrowserRouter>
      <Routes>
        {/* 2. METER AQUÍ: Colocamos el Main con sus props solo en la ruta principal "/" */}
        <Route
          path="/"
          element={
            <>
              <Main
                abrirCarro={() => setCarritoAbierto(true)}
                totalArticulos={totalArticulos}
              />
              <Productos onAgregarProducto={agregarAlCarrito} />
            </>
          }
        />

        {/* Ruta del login: Sin el Main */}
        <Route path="/Login" element={<Login />} />

        {/* Ruta de Pagar: Sin el Main (ya que tiene su propio header de checkout) */}
        <Route
          path="/Pagar"
          element={
            <Pagar
              elementos={carrito}
              onAgregar={agregarAlCarrito}
              onRestar={restarAlCarrito}
              onEliminar={eliminarDelCarrito}
            />
          }
        />

        {/* Ruta de Datos Personales */}
        <Route
          path="/DatosPersonales"
          element={<DatosPersonales elementos={carrito} />}
        />

        {/* Ruta de Pagando */}
        <Route
          path="/Pagando"
          element={<Pagando elementos={carrito} />}
        />
      </Routes>

      {/* El carrito flotante */}
      {carritoAbierto && (
        <Carrito onClose={() => setCarritoAbierto(false)} elementos={carrito} />
      )}
    </BrowserRouter>
  );
};
