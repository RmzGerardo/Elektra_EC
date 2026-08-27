import { useNavigate } from "react-router-dom";
import type { ElementoCarrito } from "../App";

interface DatosPersonalesProps {
  elementos: ElementoCarrito[];
}

export const DatosPersonales = ({ elementos }: DatosPersonalesProps) => {
  const navigate = useNavigate();

  let precioOriginalTotal = 0;
  let precioFinalTotal = 0;
  let cantidadTotal = 0;

  elementos.forEach((item) => {
    const original = Math.ceil(item.price * 1.3);
    precioOriginalTotal = precioOriginalTotal + original * item.quantity;
    precioFinalTotal = precioFinalTotal + item.price * item.quantity;
    cantidadTotal = cantidadTotal + item.quantity;
  });

  const descuentoTotal = precioOriginalTotal - precioFinalTotal;

  return (
    <>
      {/* Cabecera superio */}
      <div className="border-b border-gray-200 bg-white py-4 px-6 shadow-sm">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <img
            onClick={() => navigate("/")}
            src="/Elektra_Logo.png"
            alt="Elektra Logo"
            className="w-36 h-auto cursor-pointer"
          />

          {/* Indicador de pasos */}
          <div className="flex items-center gap-4 text-xs md:text-sm font-semibold text-gray-700">
            {/* Paso 1: Completado */}
            <div className="flex items-center gap-1.5 text-green-600">
              <div className="w-5 h-5 rounded-full bg-green-600 text-white flex items-center justify-center text-[10px]">
                ✔
              </div>
              <span>Datos personales</span>
            </div>

            {/* Línea verde */}
            <div className="w-10 h-0.5 bg-green-600"></div>

            {/* Paso 2: Entrega */}
            <div className="flex items-center gap-1.5 text-gray-800">
              <div className="w-5 h-5 rounded-full border-2 border-gray-800 flex items-center justify-center text-[10px] font-bold">
                2
              </div>
              <span className="font-bold">Entrega</span>
            </div>

            {/* Línea gris */}
            <div className="w-10 h-0.5 bg-gray-300"></div>

            {/* Paso 3: Pago */}
            <div className="flex items-center gap-1.5 text-gray-400">
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center text-[10px] font-bold">
                3
              </div>
              <span>Pago</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contenedor principal de 2 columnas */}
      <div className="max-w-[1200px] mx-auto p-6 mt-6">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Columna izquierda */}
          <div className="flex-1 w-full flex flex-col gap-6">
            {/* Enlace para regresar */}
            <div
              onClick={() => navigate("/Pagar")}
              className="text-[#3368a0] hover:text-[#244b75] text-sm font-bold flex items-center gap-1 cursor-pointer w-fit"
            >
              <span>&lt; Ir al carrito</span>
            </div>

            {/* Card 1: Datos Personales */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col gap-4 relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-xs">
                    ✔
                  </div>
                  <h3 className="font-bold text-gray-800">Datos personales</h3>
                </div>
                {/* Icono */}
                <button className="text-gray-500 hover:text-gray-700 cursor-pointer">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    ></path>
                  </svg>
                </button>
              </div>

              {/* Contenido Datos */}
              <div className="text-sm text-gray-700 flex flex-col gap-1 font-medium pl-8">
                <p className="font-bold text-gray-800">pedro perez</p>
                <p>97@gmail.com</p>
                <p>31 2432 4324</p>
              </div>

              {/* Cerrar sesion */}
              <button className="self-end text-xs font-bold text-[#3368a0] hover:text-[#244b75] cursor-pointer mt-2">
                ✕ Cerrar sesión
              </button>
            </div>

            {/*  promociones */}
            <div className="flex items-start gap-2.5 px-2">
              <input
                type="checkbox"
                defaultChecked
                id="promos"
                className="mt-1 accent-red-600 cursor-pointer"
              />
              <label
                htmlFor="promos"
                className="text-xs text-gray-600 font-semibold cursor-pointer leading-relaxed"
              >
                Quiero recibir ofertas y promociones por correo electrónico.
                <br />
                <span className="font-normal text-gray-500">
                  Reconoces haber leído y aceptas el{" "}
                  <a className="text-[#3368a0] hover:underline" href="#">
                    Aviso de privacidad
                  </a>{" "}
                  y los{" "}
                  <a className="text-[#3368a0] hover:underline" href="#">
                    Términos y Condiciones
                  </a>
                </span>
              </label>
            </div>

            {/*  Entrega */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border-2 border-gray-800 text-gray-800 flex items-center justify-center text-xs font-bold">
                  2
                </div>
                <h3 className="font-bold text-gray-800">Entrega</h3>
              </div>

              {/*  */}
              <div className="bg-[#f8f9fa] border border-gray-200 rounded-lg p-5 flex items-start justify-between">
                <div className="flex gap-3">
                  {/*  */}
                  <div className="w-5 h-5 rounded-full border border-red-500 flex items-center justify-center mt-0.5 shrink-0 bg-white">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#da291c]"></div>
                  </div>

                  {/* Detalles dirección */}
                  <div className="text-xs sm:text-sm text-gray-700 font-medium flex flex-col gap-0.5">
                    <p className="font-bold text-gray-800">32121321, españa</p>
                    <p>calle falsa 123</p>
                    <p>sinaloa, gualadala</p>
                  </div>
                </div>

                {/*  */}
                <button className="text-xs sm:text-sm font-bold text-[#3368a0] hover:text-[#244b75] cursor-pointer">
                  Editar
                </button>
              </div>

              {/*  */}
              <button className="w-full bg-white border border-gray-400 hover:bg-gray-50 text-gray-800 text-xs sm:text-sm font-bold py-2.5 rounded-lg transition-colors cursor-pointer text-center mt-2">
                Agregar nueva dirección
              </button>

              {/*  */}
              <button
                onClick={() => navigate("/Pagando")}
                className="w-full bg-[#da291c] hover:bg-[#b82218] text-white text-xs sm:text-sm font-bold py-3 rounded-lg transition-colors cursor-pointer text-center mt-2 shadow-sm"
              >
                Continuar con el pago
              </button>
            </div>

            {/*  */}
            <div className="bg-white border border-gray-100 rounded-lg p-5 shadow-sm opacity-50 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full border-2 border-gray-300 text-gray-300 flex items-center justify-center text-xs font-bold">
                3
              </div>
              <h3 className="font-bold text-gray-400">Pago</h3>
            </div>
          </div>

          {/* derecha */}
          <div className="w-full lg:w-[400px] flex flex-col gap-6 shrink-0">
            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
              <p className="text-lg font-bold text-gray-800 border-b pb-3 mb-4">
                Resumen del pedido
              </p>

              {/* lista*/}
              <div className="flex flex-col gap-4 mb-5 max-h-[250px] overflow-y-auto pr-1">
                {elementos.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 items-center border-b border-gray-100 pb-3"
                  >
                    {/* Imagen  */}
                    <div className="relative shrink-0">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-14 h-14 object-contain bg-gray-50 rounded border border-gray-200"
                      />
                      <span className="absolute -top-1.5 -right-1.5 bg-gray-100 border border-gray-300 text-gray-700 text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
                        {item.quantity}
                      </span>
                    </div>

                    {/* Detalles */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-gray-800 truncate leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[10px] text-gray-400">
                        ${Math.ceil(item.price * 1.3).toLocaleString()} original
                      </p>
                      <p className="text-xs text-red-600 font-bold">
                        ${item.price.toLocaleString()} o
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desglose de totales */}
              <div className="flex flex-col gap-3 text-sm font-bold text-gray-600 border-t border-gray-100 pt-4">
                <div className="flex justify-between">
                  <span>Subtotal ({cantidadTotal} productos)</span>
                  <span>${precioOriginalTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Envío</span>
                  <span className="text-green-600">Gratis</span>
                </div>
                <div className="flex justify-between">
                  <span>Descuentos</span>
                  <span className="text-red-600">
                    -${descuentoTotal.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between border-t border-gray-200 pt-3 mt-1 text-base text-gray-800">
                  <span>Total</span>
                  <span className="text-lg font-bold text-gray-900">
                    ${precioFinalTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              <p className="text-[10px] mt-5 text-gray-400 text-center leading-relaxed">
                *Fechas estimadas de entrega, sujeto a aprobación de pago y
                disponibilidad al momento de la compra. Realizada la compra
                podrás consultar las fechas de entrega en Mi Cuenta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
