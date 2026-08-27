export const consumirProductos = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");

    if (!response.ok) {
      throw new Error("Error al consumir productos");
    }

    const data = await response.json();

    console.log(data.products);
    return data.products;
  } catch (error) {
    console.error("Error al consumir productos: ", error);
  }
};

export const consumirCategorias = async () => {
  try {
    const response = await fetch(
      "https://dummyjson.com/products/category-list",
    );
    if (!response.ok) {
      throw new Error("Error al consumir categorias");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error al consumir categorias: ", error);
  }
};
