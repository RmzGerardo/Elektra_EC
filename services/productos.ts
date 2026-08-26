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
