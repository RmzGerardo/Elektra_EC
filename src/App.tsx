import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./components/Main";
import { Productos } from "./components/Productos";
import { Carrito } from "./components/Carrito";
import { Login } from "./components/Login";
import { Pagar } from "./components/Pagar";
import { DatosPersonales } from "./components/DatosPersonales";
import { Pagando } from "./components/Pagando";

// Estructura de los productos que guardamos en el carrito de compras
export interface ElementoCarrito {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
}

export const App = () => {
  // Estado para saber si el carrito lateral derecho está abierto o cerrado
  const [carritoAbierto, setCarritoAbierto] = useState(false);
  // Lista de productos seleccionados por el cliente
  const [carrito, setCarrito] = useState<ElementoCarrito[]>([]);

  // Agrega un producto al carrito (o le suma 1 a la cantidad si ya existe en la lista)
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

  // Resta una pieza de un producto del carrito. Si la cantidad llega a 0, lo elimina
  const restarAlCarrito = (id: number) => {
    setCarrito((prevCarrito) =>
      prevCarrito
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  // Elimina un producto por completo del carrito (sin importar cuántas piezas tenga)
  const eliminarDelCarrito = (id: number) => {
    setCarrito((prevCarrito) => prevCarrito.filter((item) => item.id !== id));
  };

  // Suma todas las piezas del carrito para mostrar la cantidad en el círculo rojo
  let totalArticulos = 0;
  carrito.forEach((item) => {
    totalArticulos = totalArticulos + item.quantity;
  });

  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta principal: Muestra la tienda con su cabecera y el listado de productos */}
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

        {/* Pantalla de Login (no lleva cabecera global) */}
        <Route path="/Login" element={<Login />} />

        {/* Primer paso del pago: Confirmar productos del carrito */}
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

        {/* Segundo paso del pago: Datos del cliente y dirección */}
        <Route
          path="/DatosPersonales"
          element={<DatosPersonales elementos={carrito} />}
        />

        {/* Tercer paso del pago: Selección de métodos de pago */}
        <Route path="/Pagando" element={<Pagando elementos={carrito} />} />
      </Routes>

      {/* El panel lateral del carrito de compras que se desliza por la derecha */}
      {carritoAbierto && (
        <Carrito onClose={() => setCarritoAbierto(false)} elementos={carrito} />
      )}
    </BrowserRouter>
  );
};
