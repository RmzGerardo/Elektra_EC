import type { ElementoCarrito } from "../App";
import { useNavigate } from "react-router-dom";

interface CarritoProps {
  onClose: () => void;
  elementos: ElementoCarrito[];
}

export const Carrito = ({ onClose, elementos }: CarritoProps) => {
  const navigate = useNavigate();

  let precioTotal = 0;
  elementos.forEach((item) => {
    precioTotal = precioTotal + item.price * item.quantity;
  });

  return (
    <>
      <div className="fixed top-0 right-0 h-screen w-80 bg-white shadow-2xl z-50 flex flex-col p-6">
        {/* Cabecera carrito */}
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-lg font-bold text-gray-800">Mi Carrito</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-600 font-bold cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Mensaje de carrito vacío  */}
        {elementos.length === 0 ? (
          <p className="text-gray-500 text-sm text-center my-auto">
            Tu carrito está vacío.
          </p>
        ) : (
          // Contenedor
          <div className="flex-1 overflow-y-auto flex flex-col justify-between">
            {/* Lista de productos */}
            <div className="flex flex-col gap-4">
              {elementos.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 items-center border-b pb-3"
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-12 h-12 object-contain bg-gray-50 rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-gray-800 truncate">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500">
                      Cantidad: {item.quantity}
                    </p>
                    <p className="text-xs text-red-600 font-bold">
                      ${item.price} c/u
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Suma total */}
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-bold text-gray-600">Total:</span>
                <span className="text-xl font-bold text-red-600">
                  ${precioTotal}
                </span>
              </div>
              <button
                onClick={() => {
                  onClose();
                  navigate("/Pagar");
                }}
                className="w-full bg-[#da291c] text-white py-2.5 rounded font-bold hover:bg-[#b82218] transition-colors cursor-pointer text-center text-sm"
              >
                Proceder al pago
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
