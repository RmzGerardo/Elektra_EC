import { useProductos, useCategorias } from "../hooks/useProductos";
import Slider from "react-slick";
const SliderComponent = (Slider as any).default || Slider;

interface ProductosProps {
  onAgregarProducto: (producto: any) => void;
}

export const Productos = ({ onAgregarProducto }: ProductosProps) => {
  // 1. Llamamos a nuestro hook personalizado
  const { productos } = useProductos();
  const { categorias } = useCategorias();

  var settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const categoriasSettings = {
    dots: false, // Quitamos los puntos de abajo para que sea más limpio
    infinite: false, // No hace falta que sea infinito
    speed: 500,
    slidesToShow: 6, // Mostramos 6 tarjetas a la vez en PC
    slidesToScroll: 2, // Al deslizar, avanzará de 2 en 2
    responsive: [
      {
        breakpoint: 1024, // Tablets y laptops chicas
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640, // Celulares
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* s */}
      <div className="max-w-[1200px] mx-auto px-6 mt-6">
        <SliderComponent {...settings}>
          {/* Slide 1 (Corregido a w-full para ser uniforme) */}
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

      {/* categorias de productos */}
      <div className="max-w-[1200px] mx-auto px-6 mb-12 mt-16">
        <h2 className="text-xl font-bold mb-6 text-gray-800">
          Categorías de Productos
        </h2>

        <SliderComponent {...categoriasSettings}>
          {categorias.map((categoria) => (
            <div key={categoria} className="px-2">
              {" "}
              {/* px-2 crea el espacio de separación entre tarjetas */}
              <div className="bg-white h-32 rounded-lg flex items-center justify-center shadow hover:shadow-md border border-gray-100 hover:border-red-200 transition-all cursor-pointer text-center p-4">
                <span className="text-sm font-bold text-gray-700 capitalize">
                  {/* Reemplazamos los guiones por espacios para que se vea más limpio (ej. "home-decoration" -> "home decoration") */}
                  {categoria.replace("-", " ")}
                </span>
              </div>
            </div>
          ))}
        </SliderComponent>
      </div>

      {/* prodcutos en exhibicion */}

      <div className="max-w-[1200px] mx-auto p-6">
        <h2 className="text-xl font-bold mb-6 text-gray-800">
          Nuestros Productos
        </h2>

        {/* 2. Grid que muestra 1 columna en móvil y 4 en pantallas medianas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {productos.map((producto) => (
            <div
              key={producto.id}
              className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col justify-between"
            >
              {/* Foto del producto */}
              <div>
                <img
                  src={producto.thumbnail}
                  alt={producto.title}
                  className="w-full h-40 object-contain rounded-md bg-gray-50"
                />
                {/* Título */}
                <h3 className="font-bold mt-3 text-sm text-gray-800 line-clamp-1">
                  {producto.title}
                </h3>
                {/* Descripción */}
                <p className="text-gray-500 text-xs mt-1 line-clamp-2">
                  {producto.description}
                </p>
              </div>

              {/* Precio */}
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
    </>
  );
};
