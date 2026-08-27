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

## 4. Funcionalidades Implementadas

La aplicación no es una copia estática; cuenta con interactividad y flujos dinámicos reales:

- **Navegación e Integración de Rutas:** Configuración de navegación a través de rutas dinámicas. Por ejemplo, al presionar "Iniciar sesión" o el icono de usuario, se redirige a la pantalla de **Login**.
- **Carrito de Compras Interactivo:**
  - Si el carrito está vacío, muestra un estado amigable indicándolo.
  - Al agregar productos desde la tienda, se listan en el panel lateral mostrando miniatura, título, precio unitario y cantidad.
  - El subtotal y total acumulados se calculan y actualizan automáticamente en tiempo real.
- **Flujo(Caja de Pago):**
  - **Paso 1 (Resumen del pedido):** Permite ver los productos finales, incrementar o disminuir cantidades de piezas, y eliminar productos por completo con su bote de basura.
  - **Paso 2 (Datos Personales):** Simulación de confirmación de datos del cliente (nombre, correo ficticio, teléfono) y selección de dirección de entrega.
  - **Paso 3 (Pago):** Vista del paso final con acordeón de opciones de pago (Préstamo Elektra, Tarjeta, PayPal).
  - **Simulación de Pago:** Al dar clic en "Pagar", se activa una ventana emergente (modal personalizado) de confirmación de compra exitosa que te permite regresar al inicio.

---

## 5. Justificación de las Tecnologías Utilizadas

Para el desarrollo del proyecto se seleccionaron herramientas modernas alineadas con los requerimientos técnicos y de escalabilidad:

- **React:** Permite modular la interfaz en componentes reutilizables y gestionar de forma limpia el estado y las props de la aplicación (como el estado global del carrito de compras).
- **Vite:** Utilizado como empaquetador para un entorno de desarrollo ultra veloz y recarga en caliente instantánea.
- **TypeScript:** Agrega tipado estático al proyecto, lo que previene errores en tiempo de desarrollo y asegura contratos consistentes entre servicios y componentes.
- **Tailwind CSS + CSS Puro:** Facilitó la creación del diseño responsivo y la recreación fiel de la paleta de colores y componentes visuales oficiales de Elektra sin sobrecargar el código de hojas de estilo interminables.
- **Estructura del Proyecto (Clean Architecture Básica):** La lógica de la aplicación se dividió en carpetas para separar responsabilidades de forma ordenada:
  - `components/` para la presentación visual.
  - `hooks/` para gestionar la lógica de estado reutilizable.
  - `services/` para el consumo directo de peticiones fetch externas.
  - `utils/` para helpers del proyecto.
  - El objetivo de diseño era mantener los componentes en un tamaño promedio manejable (cercanos o inferiores a 400 líneas), meta que se cumplió en su totalidad.

_Nota de aprendizaje:_ Ciertos retos con TypeScript, el flujo de estados cruzados de React y clases responsivas de Tailwind se resolvieron con éxito a través de la investigación proactiva de la documentación y la práctica constante sobre el código.

---

## 6. Enlaces de Interés y Despliegue

- **Proyecto Desplegado (Netlify):** [https://elecktrae.netlify.app/](https://elecktrae.netlify.app/)
- **Repositorio del Código:** [https://github.com/RmzGerardo/Elektra_EC](https://github.com/RmzGerardo/Elektra_EC)
- **Portafolio Personal:** [https://rmzgerardo.github.io/Elbetunas/](https://rmzgerardo.github.io/Elbetunas/)

---

## Conclusión

Este proyecto representó una excelente práctica para comprender a fondo la arquitectura, el flujo de datos y la experiencia de usuario (UX) que requiere un e-commerce real. Me permitió fortalecer capacidades clave como la resolución de problemas, la adaptabilidad a nuevas tecnologías, el autoaprendizaje y el desarrollo ágil de software enfocado en la calidad.
