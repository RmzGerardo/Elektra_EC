import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ElementoCarrito } from "../src/App";

interface PagandoProps {
  elementos: ElementoCarrito[];
}

export const Pagando = ({ elementos }: PagandoProps) => {
  const navigate = useNavigate();
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  // Calcular subtotales usando ciclos forEach sencillos
  let precioOriginalTotal = 0;
  let precioFinalTotal = 0;
  let cantidadTotal = 0;

  elementos.forEach((item) => {
    const original = Math.ceil(item.price * 1.3);
    precioOriginalTotal = precioOriginalTotal + (original * item.quantity);
    precioFinalTotal = precioFinalTotal + (item.price * item.quantity);
    cantidadTotal = cantidadTotal + item.quantity;
  });

  const descuentoTotal = precioOriginalTotal - precioFinalTotal;

  return (
    <>
      {/* Cabecera superior con todos los pasos en verde excepto el 3 */}
      <div className="border-b border-gray-200 bg-white py-4 px-6 shadow-sm">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
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

            {/* Paso 2: Completado */}
            <div className="flex items-center gap-1.5 text-green-600">
              <div className="w-5 h-5 rounded-full bg-green-600 text-white flex items-center justify-center text-[10px]">
                ✔
              </div>
              <span>Entrega</span>
            </div>

            {/* Línea verde */}
            <div className="w-10 h-0.5 bg-green-600"></div>

            {/* Paso 3: Pago (Activo) */}
            <div className="flex items-center gap-1.5 text-gray-800">
              <div className="w-5 h-5 rounded-full border-2 border-gray-800 flex items-center justify-center text-[10px] font-bold">
                3
              </div>
              <span className="font-bold">Pago</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contenedor principal */}
      <div className="max-w-[1200px] mx-auto p-6 mt-6">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Columna izquierda (Datos del Cliente, Dirección Confirmada y Opciones de Pago) */}
          <div className="flex-1 w-full flex flex-col gap-6">
            
            <div
              onClick={() => navigate("/DatosPersonales")}
              className="text-[#3368a0] hover:text-[#244b75] text-sm font-bold flex items-center gap-1 cursor-pointer w-fit"
            >
              <span>&lt; Ir al carrito</span>
            </div>

            {/* Card 1: Datos Personales (Completado) */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-xs">
                    ✔
                  </div>
                  <h3 className="font-bold text-gray-800">Datos personales</h3>
                </div>
                <button className="text-gray-500 hover:text-gray-700 cursor-pointer">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                  </svg>
                </button>
              </div>
              <div className="text-sm text-gray-700 flex flex-col gap-1 font-medium pl-8">
                <p className="font-bold text-gray-800">pedro perez</p>
                <p>elbetunas97@gmail.com</p>
                <p>31 2432 4324</p>
              </div>
              <button className="self-end text-xs font-bold text-[#3368a0] hover:text-[#244b75] cursor-pointer mt-1">
                ✕ Cerrar sesión
              </button>
            </div>

            {/* Card 2: Entrega (Completado) */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-xs">
                    ✔
                  </div>
                  <h3 className="font-bold text-gray-800">Entrega</h3>
                </div>
                <button className="text-gray-500 hover:text-gray-700 cursor-pointer">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                  </svg>
                </button>
              </div>

              {/* Lista de productos para la entrega (como en la foto) */}
              <div className="pl-8 flex flex-col gap-4">
                {elementos.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <div className="relative shrink-0">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-12 h-12 object-contain bg-gray-50 rounded border border-gray-200"
                      />
                      <span className="absolute -top-1.5 -right-1.5 bg-gray-100 border border-gray-300 text-gray-700 text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-xs sm:text-sm font-bold text-gray-800 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-green-600 font-bold mt-0.5">
                        Recibe antes de 3 días hábiles
                      </p>
                      <p className="text-[10px] text-gray-400">
                        Vendido por Mabe
                      </p>
                    </div>
                  </div>
                ))}

                {/* Divisor */}
                <div className="border-t border-gray-100 my-2"></div>

                {/* Dirección Confirmada */}
                <div className="text-xs sm:text-sm text-gray-600 font-medium flex flex-col gap-0.5 leading-relaxed">
                  <p className="font-bold text-gray-800">06720, Doctores</p>
                  <p>privada de doctor arce, Num. 7</p>
                  <p>Cuauhtemoc,</p>
                  <p>cqweqw, qwcwqc, cqweqw, 3124324324</p>
                  <p>
                    Quien recibe: <span className="font-bold text-gray-800">pedro perez</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Método de Pago (Activo) */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border-2 border-gray-800 text-gray-800 flex items-center justify-center text-xs font-bold">
                  3
                </div>
                <h3 className="font-bold text-gray-800">Pago</h3>
              </div>

              <div className="pl-8 flex flex-col gap-4">
                <p className="text-sm font-bold text-gray-500">
                  Selecciona tu método de pago
                </p>

                {/* Opciones de pago tipo acordeón */}
                <div className="flex flex-col border border-gray-200 rounded-lg divide-y divide-gray-200 bg-white">
                  
                  {/* Opción 1: Préstamo Elektra */}
                  <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-gray-800">
                        🔴 Préstamo Elektra
                      </span>
                    </div>
                    {/* Flecha abajo */}
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>

                  {/* Opción 2: Tarjeta débito o crédito */}
                  <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-gray-800">
                        💳 Tarjeta de débito o crédito
                      </span>
                    </div>
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>

                  {/* Opción 3: PayPal */}
                  <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-gray-800">
                        💙 PayPal
                      </span>
                    </div>
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>

                </div>

                {/* Botón Pagar */}
                <button
                  onClick={() => setMostrarAlerta(true)}
                  className="w-full bg-[#da291c] hover:bg-[#b82218] text-white text-sm font-bold py-3 rounded-lg transition-colors cursor-pointer text-center mt-6 shadow-sm"
                >
                  Pagar
                </button>
              </div>
            </div>

          </div>

          {/* Columna derecha (Resumen del pedido) */}
          <div className="w-full lg:w-[400px] flex flex-col gap-6 shrink-0">
            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
              <p className="text-lg font-bold text-gray-800 border-b pb-3 mb-4">
                Resumen del pedido
              </p>

              {/* Lista resumida */}
              <div className="flex flex-col gap-4 mb-5 max-h-[250px] overflow-y-auto pr-1">
                {elementos.map((item) => (
                  <div key={item.id} className="flex gap-3 items-center border-b border-gray-100 pb-3">
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

              {/* Totales */}
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
                  <span className="text-red-600">-${descuentoTotal.toLocaleString()}</span>
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

      {/* Alerta Bonita de Pago Exitoso */}
      {mostrarAlerta && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 flex flex-col items-center text-center">
            {/* Check de Éxito en verde */}
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-3xl mb-4 font-bold border border-green-200 shadow-sm">
              ✔
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">¡Pago Realizado!</h3>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Tu compra se ha procesado con éxito. ¡Muchas gracias por comprar en Elektra!
            </p>
            <button
              onClick={() => {
                setMostrarAlerta(false);
                navigate("/"); // Redirige a la página principal después de aceptar
              }}
              className="w-full bg-green-600 hover:bg-green-700 text-white text-sm font-bold py-2.5 rounded-lg transition-colors cursor-pointer text-center shadow"
            >
              Aceptar
            </button>
          </div>
        </div>
      )}
    </>
  );
};
