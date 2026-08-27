import Elektra from "../public/Elektra_Logo.png";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="login-container">
        <img className="logo_elektra" src={Elektra} alt="Elektra Logo" />
      </div>

      {/* Card del login */}

      <div className="container-login">
        <label onClick={() => navigate("/")} className="cursor-pointer">
          &lt; Regresar
        </label>
        <div className="card-login">
          <p className="title-login">Inicia sesión</p>
          <p className="text-login">
            Recuerda que si ya has comprado en Elektra.mx o<br />
            en la app Elektra ya tienes una cuenta con
            <br />
            nosotros.
          </p>

          <div className="formulario-inputs">
            <p className="text-formulario">
              Ingresa con tu correo y contraseña
            </p>
            <div className="inputs">
              <input type="text" placeholder="Correo electrónico" />
              <input type="password" placeholder="Contraseña" />
            </div>
            <label className="contra_ol">Olvide mi contraseña</label>
            <div className="boton_iniciar">
              <button disabled>Iniciar sesion</button>
              <button disabled className="codigo_correo">
                Ingresar con correo y código
              </button>
            </div>
            <div className="registro-seccion">
              <div className="divider-register">
                <span>¿No tienes cuenta?</span>
              </div>
              <label className="crear-cuenta">Crear cuenta</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
