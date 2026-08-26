// Componente para tener todo centralizado

import { Login } from "../components/Login";
import { Main } from "../components/Main";
import { Productos } from "../components/Productos";

export const App = () => {
  return (
    <>
      {/* <Login /> */}
      <Main />
      <Productos />
    </>
  );
};
