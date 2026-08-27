import { useState, useEffect } from "react";
import { useProductos, useCategorias } from "../hooks/useProductos";
import Slider from "react-slick";

// Evita problemas de carga en Vite al usar react-slick (CommonJS)
const SliderComponent = (Slider as any).default || Slider;

interface ProductosProps {
  onAgregarProducto: (producto: any) => void;
}

export const Productos = ({ onAgregarProducto }: ProductosProps) => {
  // Carga de productos y categorias desde nuestros hooks
  const { productos } = useProductos();
  const { categorias } = useCategorias();


  // Temporizador de Cuenta Regresiva para las Ofertas Relámpago
  const [timeLeft, setTimeLeft] = useState({
    horas: 1,
    minutos: 21,
    segundos: 18,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let s = prev.segundos - 1;
        let m = prev.minutos;
        let h = prev.horas;

        if (s < 0) {
          s = 59;
          m = m - 1;
        }
        if (m < 0) {
          m = 59;
          h = h - 1;
        }
        if (h < 0) {
          // Reiniciamos a 1h 21m 18s al llegar a cero (bucle continuo para demostración)
          h = 1;
          m = 21;
          s = 18;
        }
        return { horas: h, minutos: m, segundos: s };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Lista estática de productos en Oferta Relámpago (fidelidad visual con la foto)
  const ofertasRelampago = [
    {
      id: 801,
      title: "Colchón Matrimonial Restonic Ultra Confort Ortopédico con 2 Almohadas Hipoalergénicas",
      description: "Colchón matrimonial Restonic ultra confortable con soporte ortopédico y almohadas hipoalergénicas.",
      thumbnail: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=400&q=80",
      semanas: "Desde $54 a 102 semanas",
      originalPrice: 6998,
      price: 3099,
      discount: 55,
      msi: "Hasta 6 MSI de $516.5",
      compraInternacional: false,
    },
    {
      id: 802,
      title: "Pack 4 Almohadas Peach: Confort Ultra Suave e Hipoalergénicas",
      description: "Almohadas de fibra confortables que aseguran un descanso fresco y suave toda la noche.",
      thumbnail: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=400&q=80",
      semanas: "",
      originalPrice: 1499,
      price: 899,
      discount: 40,
      msi: "Hasta 3 MSI de $299.67",
      compraInternacional: false,
    },
    {
      id: 803,
      title: "Xbox Series X 1TB Digital Edition - Consola Robot White (Blanco)",
      description: "Consola de nueva generación Xbox Series X con 1TB de almacenamiento en elegante color blanco.",
      thumbnail: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=400&q=80",
      semanas: "Desde $192 a 154 semanas",
      originalPrice: 13899,
      price: 12899,
      discount: 7,
      msi: "Hasta 3 MSI de $4,299.67",
      compraInternacional: false,
    },
    {
      id: 804,
      title: "Pulsera PANDORA Moments Snake Chain Slider de plata de ley",
      description: "Pulsera clásica Pandora Moments en plata esterlina con cierre deslizante ajustable.",
      thumbnail: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=400&q=80",
      semanas: "",
      originalPrice: 3219,
      price: 2737,
      discount: 14,
      msi: "",
      compraInternacional: true,
    }
  ];

  // Configuración del carrusel de Ofertas Relámpago
  const ofertasSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Opciones de configuración para el carrusel de banners principal
  var settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Opciones de configuración para el carrusel de categorías
  const categoriasSettings = {
    dots: false, // Quitamos puntos de paginación
    infinite: false,
    speed: 500,
    slidesToShow: 6, // Mostramos 6 tarjetas en pantallas grandes
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024, // Para pantallas medianas o tablets
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640, // Para pantallas chicas o celulares
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Carrusel de Banners Promocionales */}
      <div className="max-w-[1200px] mx-auto px-6 mt-6">
        <SliderComponent {...settings}>
          {/* Slide 1 */}
          <div className="w-full">
            <img
              src="/promo_1.jpg"
              alt="Promoción 1"
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>
          {/* Slide 2 */}
          <div className="w-full">
            <img
              src="/promo_2.jpg"
              alt="Promoción 2"
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>
          {/* Slide 3 */}
          <div className="w-full">
            <img
              src="/promo_3.jpg"
              alt="Promoción 3"
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>
          {/* Slide 4 */}
          <div className="w-full">
            <img
              src="/promo_4.jpg"
              alt="Promoción 4"
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>
          {/* Slide 5 */}
          <div className="w-full">
            <img
              src="/promo_5.jpg"
              alt="Promoción 5"
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>
        </SliderComponent>
      </div>

      {/* Sección: Oferta Relámpago */}
      <div className="max-w-[1200px] mx-auto px-6 mt-16 mb-12">
        <div className="flex flex-row justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Oferta Relámpago</h2>
          
          {/* Contador de Cuenta Regresiva */}
          <div className="flex items-center gap-3">
            {/* Horas */}
            <div className="flex flex-col items-center">
              <div className="bg-[#1a1a1a] text-white rounded-lg px-3 py-2.5 font-bold text-base md:text-lg min-w-[45px] md:min-w-[50px] text-center shadow-md">
                {timeLeft.horas.toString().padStart(2, '0')}
              </div>
              <span className="text-[9px] md:text-[10px] text-gray-500 font-bold uppercase mt-1">Horas</span>
            </div>
            {/* Minutos */}
            <div className="flex flex-col items-center">
              <div className="bg-[#1a1a1a] text-white rounded-lg px-3 py-2.5 font-bold text-base md:text-lg min-w-[45px] md:min-w-[50px] text-center shadow-md">
                {timeLeft.minutos.toString().padStart(2, '0')}
              </div>
              <span className="text-[9px] md:text-[10px] text-gray-500 font-bold uppercase mt-1">Minutos</span>
            </div>
            {/* Segundos */}
            <div className="flex flex-col items-center">
              <div className="bg-[#1a1a1a] text-white rounded-lg px-3 py-2.5 font-bold text-base md:text-lg min-w-[45px] md:min-w-[50px] text-center shadow-md">
                {timeLeft.segundos.toString().padStart(2, '0')}
              </div>
              <span className="text-[9px] md:text-[10px] text-gray-500 font-bold uppercase mt-1">Segundos</span>
            </div>
          </div>
        </div>

        {/* Carrusel de Productos en Oferta */}
        <SliderComponent {...ofertasSettings}>
          {ofertasRelampago.map((item) => (
            <div key={item.id} className="px-2 pb-4">
              <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md hover:border-red-200 transition-all flex flex-col justify-between h-[450px]">
                
                {/* Imagen del Producto */}
                <div className="relative shrink-0">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-36 object-contain rounded-md bg-gray-50"
                  />
                  {/* Etiqueta de Compra Internacional si aplica */}
                  {item.compraInternacional && (
                    <span className="absolute top-2 left-2 bg-blue-50 border border-blue-200 text-[#3368a0] text-[9px] font-bold px-2 py-0.5 rounded">
                      Compra internacional
                    </span>
                  )}
                </div>

                {/* Info y Título */}
                <div className="flex-1 mt-4 flex flex-col justify-between min-h-[140px]">
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-gray-800 line-clamp-2 leading-relaxed">
                      {item.title}
                    </h3>

                    {/* Semanal de Crédito si aplica */}
                    {item.semanas ? (
                      <div className="text-xs text-gray-700 mt-2 font-medium">
                        <p className="text-[10px] text-gray-400">Desde</p>
                        <p className="font-bold text-gray-900">{item.semanas.replace("Desde ", "")}</p>
                      </div>
                    ) : (
                      <div className="h-8"></div>
                    )}
                  </div>

                  {/* Precios y descuento */}
                  <div className="mt-3">
                    <p className="text-[10px] text-gray-400 line-through">
                      ${item.originalPrice.toLocaleString()}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-lg font-bold text-[#da291c]">
                        ${item.price.toLocaleString()}
                      </span>
                      <span className="bg-green-50 text-green-600 text-[10px] font-bold px-1.5 py-0.5 rounded border border-green-200">
                        -{item.discount}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Etiqueta de Meses sin Intereses (MSI) */}
                <div className="mt-4">
                  {item.msi ? (
                    <div className="border border-green-500 rounded bg-green-50 text-green-700 text-[10px] font-bold py-1.2 text-center mb-3">
                      {item.msi}
                    </div>
                  ) : (
                    <div className="h-[30px]"></div>
                  )}

                  {/* Botón de Agregar al carrito */}
                  <button
                    onClick={() => onAgregarProducto(item)}
                    className="w-full bg-[#da291c] hover:bg-[#b82218] text-white text-xs font-bold py-2.5 rounded transition-colors cursor-pointer text-center"
                  >
                    Agregar al carrito
                  </button>
                </div>

              </div>
            </div>
          ))}
        </SliderComponent>
      </div>

      {/* Carrusel de Categorías */}
      <div className="max-w-[1200px] mx-auto px-6 mb-12 mt-16">
        <h2 className="text-xl font-bold mb-6 text-gray-800">
          Categorías de Productos
        </h2>

        <SliderComponent {...categoriasSettings}>
          {categorias.map((categoria) => (
            <div key={categoria} className="px-2">
              {/* Contenedor de la tarjeta de categoría */}
              <div className="bg-white h-32 rounded-lg flex items-center justify-center shadow hover:shadow-md border border-gray-100 hover:border-red-200 transition-all cursor-pointer text-center p-4">
                <span className="text-sm font-bold text-gray-700 capitalize">
                  {/* Reemplazamos los guiones para que se lea mejor */}
                  {categoria.replace("-", " ")}
                </span>
              </div>
            </div>
          ))}
        </SliderComponent>
      </div>

      {/* Sección: Marcas destacadas */}
      <div className="max-w-[1200px] mx-auto px-6 mb-12 mt-16">
        <div className="flex flex-row justify-between items-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            Marcas destacadas
          </h2>
          <a
            href="#"
            className="text-xs md:text-sm font-bold text-[#3368a0] hover:text-[#244b75] hover:underline"
          >
            Mostrar todo &gt;
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Marca 1: Skechers */}
          <div className="relative group overflow-hidden rounded-lg cursor-pointer aspect-square sm:aspect-[4/3] shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80"
              alt="Skechers"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
              <span className="text-white text-2xl md:text-3xl font-black italic tracking-wider font-serif">
                SKECHERS
              </span>
            </div>
          </div>

          {/* Marca 2: Madesa */}
          <div className="relative group overflow-hidden rounded-lg cursor-pointer aspect-square sm:aspect-[4/3] shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=400&q=80"
              alt="Madesa"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
              <span className="text-white text-2xl md:text-3xl font-bold tracking-tight lowercase font-sans">
                madesa
              </span>
            </div>
          </div>

          {/* Marca 3: Letmex */}
          <div className="relative group overflow-hidden rounded-lg cursor-pointer aspect-square sm:aspect-[4/3] shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80"
              alt="Letmex"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
              <span className="text-white text-2xl md:text-3xl font-extrabold tracking-wide uppercase font-sans">
                Letmex®
              </span>
            </div>
          </div>

          {/* Marca 4: LG */}
          <div className="relative group overflow-hidden rounded-lg cursor-pointer aspect-square sm:aspect-[4/3] shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=400&q=80"
              alt="LG"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
              <span className="text-white text-3xl md:text-4xl font-extrabold tracking-normal uppercase font-sans flex items-center gap-1">
                LG
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid de Productos Disponibles */}
      <div className="max-w-[1200px] mx-auto p-6">
        <h2 className="text-xl font-bold mb-6 text-gray-800">
          Nuestros Productos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {productos.map((producto) => (
            <div
              key={producto.id}
              className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col justify-between"
            >
              {/* Foto, título y descripción del producto */}
              <div>
                <img
                  src={producto.thumbnail}
                  alt={producto.title}
                  className="w-full h-40 object-contain rounded-md bg-gray-50"
                />
                <h3 className="font-bold mt-3 text-sm text-gray-800 line-clamp-1">
                  {producto.title}
                </h3>
                <p className="text-gray-500 text-xs mt-1 line-clamp-2">
                  {producto.description}
                </p>
              </div>

              {/* Sección de Precio y Botón de compra */}
              <div className="mt-4">
                <span className="text-lg font-bold text-red-600">
                  ${producto.price}
                </span>
                <button
                  onClick={() => onAgregarProducto(producto)}
                  className="w-full bg-[#da291c] hover:bg-[#b82218] text-white text-xs font-bold py-2 px-4 rounded transition-colors cursor-pointer text-center"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección Beneficios */}
      <div className="max-w-[1200px] mx-auto px-6 mt-12 mb-16">
        <h2 className="text-xl font-bold mb-6 text-gray-800">Beneficios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Ponte Atento */}
          <div className="bg-white border-t-4 border-[#da291c] rounded-lg p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-[#da291c]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-800">¡Ponte atento!</h4>
              <p className="text-xs text-gray-500 mt-0.5">Un estafador puede robar tu dinero</p>
              <a href="#" className="text-[#3368a0] font-bold text-xs mt-1.5 hover:underline block">Mostrar más...</a>
            </div>
          </div>

          {/* Card 2: Envío Gratis */}
          <div className="bg-white border-t-4 border-[#da291c] rounded-lg p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-[#da291c]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-800">Envío gratis*</h4>
              <p className="text-xs text-gray-500 mt-0.5">En productos seleccionados</p>
              <a href="#" className="text-[#3368a0] font-bold text-xs mt-1.5 hover:underline block">Mostrar más...</a>
            </div>
          </div>

          {/* Card 3: Cancelaciones */}
          <div className="bg-white border-t-4 border-[#da291c] rounded-lg p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-[#da291c]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-800">Cancelaciones y Devoluciones</h4>
              <p className="text-xs text-gray-500 mt-0.5">Tus compras están protegidas</p>
              <a href="#" className="text-[#3368a0] font-bold text-xs mt-1.5 hover:underline block">Mostrar más...</a>
            </div>
          </div>

          {/* Card 4: Garantías */}
          <div className="bg-white border-t-4 border-[#da291c] rounded-lg p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-[#da291c]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-800">Garantías Elektra</h4>
              <p className="text-xs text-gray-500 mt-0.5">Tus compras están protegidas</p>
              <a href="#" className="text-[#3368a0] font-bold text-xs mt-1.5 hover:underline block">Mostrar más...</a>
            </div>
          </div>

        </div>
      </div>

      {/* Pie de página (Footer) */}
      <footer className="bg-white border-t border-gray-200">
        
        {/* Barra de Registro de Ofertas */}
        <div className="bg-gray-50 border-b border-gray-100 py-8 px-6">
          <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Regístrate</h3>
              <p className="text-sm text-gray-500 mt-1">Para recibir las mejores ofertas de Elektra</p>
            </div>

            <div className="w-full lg:w-auto">
              <div className="flex w-full lg:w-96">
                <input
                  type="email"
                  placeholder="Ingresa tu correo aquí"
                  className="flex-1 h-11 px-4 border border-gray-300 border-r-0 rounded-l focus:outline-none text-sm bg-white"
                />
                <button className="bg-[#da291c] hover:bg-[#b82218] text-white px-6 rounded-r font-bold h-11 transition-colors text-sm cursor-pointer">
                  ¡Regístrate!
                </button>
              </div>
              <p className="text-[10px] text-gray-400 mt-2 leading-snug">
                Al registrarme, acepto que mis datos sean tratados para fines mercadotécnicos de acuerdo al{" "}
                <a href="#" className="text-[#3368a0] hover:underline">Aviso de Privacidad</a>
              </p>
            </div>
          </div>
        </div>

        {/* Columnas principales del Footer */}
        <div className="max-w-[1200px] mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Columna 1: Contacto */}
          <div>
            <h4 className="font-bold text-sm text-gray-800 mb-4">Compra ahora</h4>
            <a href="tel:5575775547" className="flex items-center gap-2 text-lg font-bold text-gray-800 hover:text-[#da291c] transition-colors mb-4">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span>55 7577 5547</span>
            </a>
            <div className="text-xs text-gray-500 flex flex-col gap-1 font-medium leading-relaxed">
              <p className="font-bold text-gray-700">Servicio al cliente:</p>
              <p>Lunes a Domingo</p>
              <p>9:00am a 9:00pm</p>
              <p className="hover:text-[#da291c] cursor-pointer">contacto@elektra.mx</p>
            </div>

            <p className="font-bold text-xs text-gray-500 uppercase mt-5 mb-2">Síguenos</p>
            <div className="flex gap-2">
              <span className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-500 hover:border-[#da291c] hover:text-[#da291c] cursor-pointer transition-colors">f</span>
              <span className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-500 hover:border-[#da291c] hover:text-[#da291c] cursor-pointer transition-colors">x</span>
              <span className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-500 hover:border-[#da291c] hover:text-[#da291c] cursor-pointer transition-colors">ig</span>
              <span className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-500 hover:border-[#da291c] hover:text-[#da291c] cursor-pointer transition-colors">yt</span>
            </div>
          </div>

          {/* Columna 2: Ayuda */}
          <div>
            <h4 className="font-bold text-sm text-gray-800 mb-4">Ayuda</h4>
            <ul className="text-xs text-gray-500 flex flex-col gap-2.5 font-medium">
              <li className="hover:text-[#da291c] cursor-pointer transition-colors">Promociones Meses sin Intereses</li>
              <li className="hover:text-[#da291c] cursor-pointer transition-colors">Términos de promociones</li>
              <li className="hover:text-[#da291c] cursor-pointer transition-colors">Centro de Ayuda</li>
              <li className="hover:text-[#da291c] cursor-pointer transition-colors">¿Cómo comprar?</li>
              <li className="hover:text-[#da291c] cursor-pointer transition-colors">Formas de pago</li>
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h4 className="font-bold text-sm text-gray-800 mb-4">Servicios</h4>
            <ul className="text-xs text-gray-500 flex flex-col gap-2.5 font-medium">
              <li className="hover:text-[#da291c] cursor-pointer transition-colors">Facturación Electrónica</li>
              <li className="hover:text-[#da291c] cursor-pointer transition-colors">Descarga App Banco Azteca</li>
              <li className="hover:text-[#da291c] cursor-pointer transition-colors">Enviar y recibir dinero del extranjero</li>
              <li className="hover:text-[#da291c] cursor-pointer transition-colors">Préstamo Elektra</li>
            </ul>
          </div>

          {/* Columna 4: Acerca de */}
          <div>
            <h4 className="font-bold text-sm text-gray-800 mb-4">Acerca de Elektra</h4>
            <ul className="text-xs text-gray-500 flex flex-col gap-2.5 font-medium">
              <li className="hover:text-[#da291c] cursor-pointer transition-colors">El mejor fin está en Elektra</li>
              <li className="hover:text-[#da291c] cursor-pointer transition-colors">Hot sale</li>
              <li className="hover:text-[#da291c] cursor-pointer transition-colors">Gran Venta Nocturna</li>
              <li className="hover:text-[#da291c] cursor-pointer transition-colors">Cyber Elektra</li>
              <li className="hover:text-[#da291c] cursor-pointer transition-colors">Buscador de tiendas</li>
            </ul>
          </div>

        </div>
      </footer>
    </>
  );
};
