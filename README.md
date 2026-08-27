# Proyecto Elektra - Réplica de E-commerce

Este proyecto consiste en recrear el e-commerce de Elektra, enfocándose en el diseño responsivo, la fidelidad visual y la experiencia de usuario (UX) para lograr una web rápida, interactiva y funcional.

---

## 1. Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu equipo:

- **Git** (para el control de versiones)
- **Node.js** (versión 16 o superior recomendada)
- **npm** (gestor de paquetes de Node)

---

## 2. Instalación

Clona este repositorio en tu máquina local ejecutando el siguiente comando en tu terminal:

```bash
git clone https://github.com/RmzGerardo/Elektra_EC.git
```

---

## 3. Ejecución en Local

Una vez clonado el repositorio, accede a la carpeta del proyecto desde tu terminal y ejecuta los siguientes comandos:

1. **Instalar las dependencias necesarias:**
   ```bash
   npm install
   ```

2. **Iniciar el servidor de desarrollo local:**
   ```bash
   npm run dev
   ```

El proyecto se ejecutará y estará disponible en tu navegador en la dirección: [http://localhost:5173](http://localhost:5173).

---

## 4. Estructura de Carpetas del Proyecto

El proyecto sigue una estructura limpia y modular que separa la lógica de negocio de la lógica de presentación:

```text
src/
├── components/          # Componentes de presentación visual (UI)
│   ├── Carrito.tsx      # Sidebar del carrito de compras
│   ├── DatosPersonales.tsx # Datos del cliente y dirección (Checkout)
│   ├── Login.tsx        # Pantalla de inicio de sesión
│   ├── Main.tsx         # Cabecera, buscador y menú móvil
│   ├── Pagando.tsx      # Métodos de pago y simulación final (Checkout)
│   ├── Pagar.tsx        # Resumen del carrito y controles (+/-)
│   └── Productos.tsx    # Carruseles, grilla de productos y footer
├── hooks/               # Hooks de React para encapsular lógica de estado
│   └── useProductos.ts  # Control de productos y categorías de la API
├── services/            # Peticiones HTTP externas a la API pública
│   └── productos.ts     # Peticiones Fetch a dummyjson.com
├── utils/               # Funciones de soporte
│   └── carrito.ts       # Funciones auxiliares
├── App.tsx              # Componente raíz, rutas y estado compartido
├── main.tsx             # Punto de entrada de la aplicación React
└── App.css              # Estilos CSS globales y ajustes personalizados
```

---

## 5. Patrones y Buenas Prácticas Aplicadas

Para demostrar calidad técnica en la prueba de desarrollo frontend, se implementaron los siguientes conceptos:

- **Separación de Responsabilidades (Separation of Concerns):** Los componentes visuales no realizan peticiones HTTP directas. En su lugar, consumen **hooks personalizados** (`useProductos`), los cuales a su vez delegan las llamadas a la capa de **servicios** (`services/`).
- **Estado Compartido (Lifting State Up):** El carrito de compras y su visibilidad se definen en el componente padre común (`App.tsx`). Esto permite que múltiples componentes independientes (el contador de la cabecera, la lista de productos y la pasarela de pagos) accedan e interactúen con el mismo carrito en tiempo real.
- **Tipado Estático Eficiente:** El uso de interfaces en TypeScript (`ElementoCarrito`, `Product`, etc.) asegura la consistencia de los datos en toda la aplicación, reduciendo fallos en tiempo de ejecución.
- **Ciclos de Renderizado Ligeros:** Cálculos como totales, subtotales e impuestos se calculan dinámicamente en memoria utilizando iteraciones simples (`forEach`) al renderizar, evitando sobrecargar el estado de React innecesariamente.

---

## 6. Funcionalidades y Experiencia de Usuario (UX)

La aplicación implementa dinámicas reales del proceso de compra de un e-commerce:

- **Diseño Móvil Responsivo:** Menú lateral de navegación deslizante (hamburger drawer) y barras de localización adaptadas al flujo de celulares.
- **Flujo de Checkout Dinámico de 3 Pasos:**
  - **Paso 1 (Resumen):** Permite controlar cantidades (agregar/quitar piezas) y eliminar del pedido con recálculo automático.
  - **Paso 2 (Datos del Cliente):** Recopilación simulada de datos de contacto y selección de dirección de entrega.
  - **Paso 3 (Pago y Simulación):** Selección de métodos de pago comunes de Elektra y activación de un modal interactivo de éxito que finaliza y limpia la experiencia de compra.
- **Manejo de Estados Vacíos (Empty States):** Interfaz amigable cuando el carrito de compras no cuenta con ningún producto agregado.

---

## 7. Próximos Pasos (Roadmap de Escalabilidad)

Si este proyecto se llevara a una fase de producción real, el plan de desarrollo contemplaría:
1. **Manejador de Estado Global:** Migración a **Redux Toolkit** o **React Context API** para evitar la propagación de props en exceso (prop drilling) conforme el árbol de componentes crezca.
2. **Pasarela de Pago Real:** Integración del SDK de Stripe o PayPal para procesar transacciones bancarias reales de forma segura.
3. **Pruebas Automatizadas:** Implementación de pruebas unitarias y de integración con **Jest** y **React Testing Library**, junto con pruebas End-to-End (E2E) con **Cypress**.
4. **Persistencia del Carrito:** Guardado en `localStorage` o base de datos en la nube para que el usuario no pierda su carrito al refrescar la página.

---

## 8. Enlaces de Interés y Despliegue

- **Proyecto Desplegado (Netlify):** [https://elecktrae.netlify.app/](https://elecktrae.netlify.app/)
- **Repositorio del Código:** [https://github.com/RmzGerardo/Elektra_EC](https://github.com/RmzGerardo/Elektra_EC)
- **Portafolio Personal:** [https://rmzgerardo.github.io/Elbetunas/](https://rmzgerardo.github.io/Elbetunas/)

---

## Conclusión

Este proyecto representó una excelente práctica para comprender a fondo la arquitectura, el flujo de datos y la experiencia de usuario (UX) que requiere un e-commerce real. Me permitió fortalecer capacidades clave como la resolución de problemas, la adaptabilidad a nuevas tecnologías, el autoaprendizaje y el desarrollo ágil de software enfocado en la calidad.
