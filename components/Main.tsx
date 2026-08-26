import { useState } from "react";
import Elektra from "../public/Elektra_Logo.png";

export const Main = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Menu Lateral Hamburguesa (Drawer Móvil) */}
      {/* Fondo oscuro traslúcido */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 block md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Panel del Menú Lateral */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white z-50 shadow-2xl transition-transform duration-300 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } block md:hidden overflow-y-auto`}
      >
        {/* Botón de cerrar (X) */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-[#da291c] focus:outline-none cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Saludo ¡Hola! */}
        <div className="flex items-center gap-3 px-6 pb-4">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center border border-gray-300">
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-800">¡Hola!</span>
        </div>

        {/* Botones de inicio / registro */}
        <div className="grid grid-cols-2 gap-3 px-6 pb-6 border-b border-gray-200">
          <button className="bg-[#da291c] text-white text-xs font-bold py-2 rounded hover:bg-[#b82218] transition-colors cursor-pointer text-center">
            Iniciar sesión
          </button>
          <button className="bg-white text-[#da291c] border border-[#da291c] text-xs font-bold py-2 rounded hover:bg-red-50 transition-colors cursor-pointer text-center">
            Crear cuenta
          </button>
        </div>

        {/* Links del Menú Lateral */}
        <div className="flex flex-col text-sm font-bold text-gray-700">
          <a className="flex justify-between items-center px-6 py-4 border-b border-gray-100 text-[#da291c] hover:bg-gray-50 cursor-pointer">
            <span>Préstamo Elektra</span>
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </a>

          <a className="flex justify-between items-center px-6 py-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
            <span>Categorías</span>
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </a>

          <a className="flex items-center gap-3 px-6 py-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer text-red-600">
            <svg
              className="w-4 h-4 fill-red-600 text-red-600"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.586 2.586A2 2 0 0011.172 2H4a2 2 0 00-2 2v7.172a2 2 0 00.586 1.414l8 8a2 2 0 002.828 0l7.172-7.172a2 2 0 000-2.828l-8-8zM7 9a2 2 0 112-2 2 2 0 01-2 2z"></path>
            </svg>
            <span>Ofertas semanales</span>
          </a>

          <a className="flex items-center gap-3 px-6 py-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
            <svg
              className="w-4 h-4 text-red-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              ></path>
            </svg>
            <span>Garantía Extendida Elektra</span>
          </a>

          <a className="flex justify-between items-center px-6 py-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
            <span>Servicios</span>
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </a>

          <a className="px-6 py-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
            <span>Descarga la app</span>
          </a>

          <a className="px-6 py-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
            <span>Ubica tu tienda</span>
          </a>
        </div>
      </div>

      {/* Contenedor principal */}
      <div className="w-full">
        {/* Contenedor interno centrado  */}
        <div className="container_main flex flex-wrap md:flex-nowrap justify-between items-center gap-4 py-3 px-6 w-full max-w-[1200px] mx-auto">
          {/* Logo (Orden 1 en móvil y normal en pantallas grandes) */}
          <div className="logo_cabecera order-1 md:order-none">
            <img
              className="logo_elektra2 w-[150px] h-auto block"
              src={Elektra}
              alt="Elektra Logo"
            />
          </div>

          {/* Barra de búsqueda (Orden 4 en móvil, con el menú hamburguesa a la izquierda) */}
          <div className="input_busqueda order-4 md:order-none w-full md:w-auto flex flex-1 max-w-xl md:mx-8 items-center gap-3">
            {/* Botón Hamburguesa */}
            <button
              onClick={() => setMenuOpen(true)}
              className="block md:hidden text-gray-700 hover:text-[#da291c] focus:outline-none cursor-pointer"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>

            {/* Input y Botón de búsqueda */}
            <div className="flex flex-1">
              <input
                type="text"
                className="busqueda_input flex-1 h-10 px-4 rounded-l-md border border-r-0 border-gray-300 focus:outline-none placeholder:italic text-sm"
                placeholder="Buscar en Elektra.."
              />
              <button className="bg-[#da291c] hover:bg-[#b82218] text-white px-5 rounded-r-md flex items-center justify-center h-10 transition-colors cursor-pointer">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Iniciar Sesión  */}
          <div className="order-2 md:order-none ml-auto md:ml-0">
            <button className="flex items-center gap-2 text-sm font-bold text-gray-800 hover:text-[#da291c] transition-colors cursor-pointer">
              {/* Icono de Usuario */}
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center border border-gray-300">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </div>
              <span className="hidden sm:inline">Iniciar sesión</span>
            </button>
          </div>

          {/* Carrito  */}
          <div className="order-3 md:order-none">
            <button className="relative flex items-center justify-center p-2 text-gray-800 hover:text-[#da291c] transition-colors cursor-pointer">
              {/* Icono de Carrito */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
              {/* indecador*/}
              <span className="absolute -top-1 -right-1 bg-[#da291c] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Barra de Ubicación Móvil  */}
      <div className="block md:hidden w-full bg-[#f4f4f4] py-2 px-4 border-b border-gray-200">
        <div className="flex items-center justify-between text-xs font-bold text-red-600 cursor-pointer">
          <div className="flex items-center gap-1.5">
            {/* Icono de Ubicación Pin */}
            <svg
              className="w-3.5 h-3.5 fill-[#da291c]"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>Ingresa tu C.P.</span>
          </div>
          {/* Chevron derecha */}
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </div>
      </div>

      {/* Barra de Categorías  */}
      <div className="w-full border-b border-gray-300 shadow-sm mt-1 hidden md:block">
        <div className="flex flex-row justify-between items-center w-full max-w-[1200px] mx-auto px-6 py-2 text-sm font-bold text-gray-700">
          {/* Lado izquierdo (Categorías) */}
          <div className="Categorias flex flex-row gap-10">
            <a className="hover:text-[#da291c] cursor-pointer transition-colors">
              Categorias
            </a>
            <a className="hover:text-[#da291c] cursor-pointer transition-colors">
              Servicios
            </a>
            <a className="hover:text-[#da291c] cursor-pointer transition-colors">
              Liquidaciones
            </a>
            <a className="hover:text-[#da291c] cursor-pointer transition-colors">
              Garantia Extendida Elektra
            </a>
          </div>

          {/* Lado derecho */}
          <div className="flex flex-row gap-10">
            <a className="hover:text-[#da291c] cursor-pointer transition-colors">
              Ingresa tu C.P.
            </a>
            <a className="hover:text-[#da291c] cursor-pointer transition-colors">
              Ubica tu tienda
            </a>
            <a className="hover:text-[#da291c] cursor-pointer transition-colors">
              Prestamo Elektra
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
