import { useProductos } from "../hooks/useProductos";
import Slider from "react-slick";
const SliderComponent = (Slider as any).default || Slider;

export const Productos = () => {
  // 1. Llamamos a nuestro hook personalizado
  const { productos } = useProductos();

  var settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
