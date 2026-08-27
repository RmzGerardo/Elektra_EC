import { useNavigate } from "react-router-dom";
import type { ElementoCarrito } from "../src/App";

interface PagarProps {
  elementos: ElementoCarrito[];
  onAgregar: (producto: any) => void;
  onRestar: (id: number) => void;
  onEliminar: (id: number) => void;
}

export const Pagar = ({
  elementos,
  onAgregar,
  onRestar,
  onEliminar,
}: PagarProps) => {
  const navigate = useNavigate();

  // Calcular subtotales
  let subtotal = 0;
  elementos.forEach((item) => {
    subtotal = subtotal + (item.price * item.quantity);
  });
  const total = subtotal;

  return (
    <>
      {/* Cabecera superior */}
      <div className="border-b border-gray-200 shadow-sm bg-white py-3 px-6">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <img
            onClick={() => navigate("/")}
            src="/Elektra_Logo.png"
            alt="Elektra Logo"
            className="w-40 h-auto cursor-pointer"
          />
          <div className="justify-end">
            <p className="text-xs md:text-sm text-gray-500 font-bold">
              Llamar para comprar
            </p>
          </div>
        </div>
      </div>

      {/* Contenedor principal */}
      <div className="max-w-[1200px] mx-auto p-6 mt-8">
        <h2 className="font-bold text-2xl text-gray-700 mb-6">Mi carrito</h2>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Columna izquierda (Detalles de envío y Productos) */}
          <div className="flex-1 w-full flex flex-col gap-6">
            {/* Tarjeta del Código Postal */}
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between border border-gray-100">
              <p className="text-sm font-bold text-gray-700 mr-4">
                Ingresa el código postal donde quieres recibir o recoger tu
                compra:
              </p>
              <input
                type="text"
                placeholder="Código Postal"
                className="border border-gray-300 rounded-lg p-2 w-full sm:w-48 text-center font-normal focus:outline-none focus:border-[#da291c] mt-3 sm:mt-0"
              />
            </div>

            {/* Elige una opción de entrega (Header de la foto) */}
            <div className="flex flex-col gap-4 mt-2">
              <h3 className="font-bold text-base text-gray-800">
                Elige una opción de entrega
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Opción 1: Envío a domicilio */}
                <div className="bg-white border-2 border-black rounded-lg p-5 flex items-center justify-center gap-3 cursor-pointer shadow-sm">
                  {/* Icono Camión SVG */}
                  <svg
                    className="w-5 h-5 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.75A1.125 1.125 0 012.625 17.625V6.375c0-.621.504-1.125 1.125-1.125H9.75v10.5m-5.625 3h1.5m10.5-3v-10.5m0 10.5h1.5a1.125 1.125 0 001.125-1.125v-3.026a2.999 2.999 0 00-.75-1.996l-3.077-3.27A2.999 2.999 0 0010.745 5.25H9.75v10.5m6 3a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.5a1.125 1.125 0 001.125-1.125v-1.125h-5.25"
                    ></path>
                  </svg>
                  <span className="font-bold text-gray-700 text-sm">
                    Envío a domicilio
                  </span>
                  <span className="text-green-600 font-bold text-sm">
                    Disponible
                  </span>
                </div>

                {/* ENVIO */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 flex items-center justify-center gap-3 cursor-not-allowed opacity-60">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72M6.75 18h.008v.008H6.75V18zm0-3h.008v.008H6.75V15zm0-3h.008v.008H6.75V12zm3 6h.008v.008H9.75V18zm0-3h.008v.008H9.75V15zm0-3h.008v.008H9.75V12zm3 6h.008v.008h-.008V18zm0-3h.008v.008h-.008V15zm0-3h.008v.008h-.008V12zm3 6h.008v.008h-.008V18zm0-3h.008v.008h-.008V15zm0-3h.008v.008h-.008V12z"
                    ></path>
                  </svg>
                  <span className="font-bold text-gray-400 text-sm">
                    Entrega en tienda
                  </span>
                  <span className="text-red-500 font-bold text-sm">
                    No disponible
                  </span>
                </div>
              </div>
            </div>

            {/* lista*/}
            <div className="flex flex-col gap-4 mt-2">
              {elementos.length === 0 ? (
                <div className="bg-white shadow-md rounded-lg p-8 text-center text-gray-500 border border-gray-100">
                  No hay productos en el carrito.
                </div>
              ) : (
                elementos.map((item) => {
                  const pagoSemanal = Math.ceil(item.price / 52);
                  const precioOriginal = Math.ceil(item.price * 1.3);

                  return (
                    <div
                      key={item.id}
                      className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm"
                    >
                      {/* Vendedor y divisor */}
                      <div className="text-sm text-gray-800 font-semibold mb-2">
                        Vendido por <span className="font-bold">Mabe</span>
                      </div>
                      <div className="border-t border-gray-200 my-3"></div>

                      <div className="flex flex-col md:flex-row gap-5 items-center justify-between">
                        {/* Foto y detalles principales */}
                        <div className="flex gap-4 items-center flex-1 w-full">
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-20 h-20 object-contain bg-gray-50 rounded shrink-0"
                          />
                          <div className="flex flex-col gap-1 min-w-0">
                            <h4 className="text-sm font-bold text-gray-800 leading-snug">
                              {item.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs">
                              <span className="text-gray-400 line-through">
                                ${precioOriginal.toLocaleString()}
                              </span>
                              <span className="text-sm font-bold text-gray-800">
                                ${item.price.toLocaleString()} o
                              </span>
                            </div>
                            <p className="text-xs text-gray-800 font-medium">
                              ${pagoSemanal} semanales con{" "}
                              <span className="text-[#da291c] font-bold">
                                Préstamo elektra
                              </span>
                            </p>
                          </div>
                        </div>

                        {/* Controles de cantidad, fecha de entrega y eliminar */}
                        <div className="flex flex-wrap items-center gap-6 justify-between md:justify-end w-full md:w-auto">
                          <span className="text-xs text-green-600 font-bold">
                            Recibe antes de 3 días hábiles
                          </span>

                          {/* Suma / Resta de cantidad */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => onRestar(item.id)}
                              className="w-7 h-7 rounded-full border border-gray-300 text-gray-600 hover:border-[#da291c] hover:text-[#da291c] flex items-center justify-center font-bold cursor-pointer transition-colors"
                            >
                              -
                            </button>
                            <div className="border border-gray-300 rounded px-3 py-1 text-xs font-bold text-gray-700 min-w-[70px] text-center">
                              {item.quantity} Piezas
                            </div>
                            <button
                              onClick={() => onAgregar(item)}
                              className="w-7 h-7 rounded-full border border-gray-300 text-gray-600 hover:border-[#da291c] hover:text-[#da291c] flex items-center justify-center font-bold cursor-pointer transition-colors"
                            >
                              +
                            </button>
                          </div>

                          {/* Eliminar (Bote de basura) */}
                          <button
                            onClick={() => onEliminar(item.id)}
                            className="text-gray-400 hover:text-[#da291c] cursor-pointer transition-colors p-1"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Columna derecha (Resumen del pedido) */}
          <div className="w-full lg:w-[400px] flex flex-col gap-6 shrink-0">
            {/* Pagos */}
            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
              <p className="text-lg font-bold text-gray-800 border-b pb-3 mb-4">
                Resumen del pedido
              </p>

              <p className="text-sm text-blue-500 cursor-pointer hover:text-red-500 text-center mb-4">
                ¿Tienes cupón de descuento?
              </p>
              <div className="flex flex-col gap-3 text-sm font-bold text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Envío</span>
                  <span className="text-green-600">Gratis</span>
                </div>
                <div className="flex justify-between">
                  <span>Impuestos</span>
                  <span>$0.00</span>
                </div>

                <div className="flex justify-between border-t border-gray-200 pt-3 mt-1 text-base text-gray-800">
                  <span>Total</span>
                  <span className="text-red-600 text-lg">
                    ${total.toLocaleString()}
                  </span>
                </div>
              </div>
              <p className="text-[10px] mt-5 text-gray-400 text-center leading-relaxed">
                *Fechas estimadas de entrega, sujeto a aprobación de pago y
                disponibilidad al momento de la compra. Realizada la compra
                podrás consultar las fechas de entrega en Mi Cuenta.
              </p>
            </div>

            {/* Botones de acción */}
            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex flex-col gap-4 text-center">
              <button
                onClick={() => navigate("/DatosPersonales")}
                className="w-full bg-[#da291c] hover:bg-[#b82218] text-white text-xs font-bold py-2.5 rounded transition-colors cursor-pointer text-center"
              >
                Continuar con tu compra
              </button>
              <p className="font-bold text-sm text-gray-400">O</p>
              <button
                onClick={() => navigate("/")}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold py-2.5 rounded transition-colors cursor-pointer text-center"
              >
                Agregar más productos
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
