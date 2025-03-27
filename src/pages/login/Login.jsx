import { useNavigate } from "react-router-dom";
import { auth, provider, signInWithPopup } from "../../firebase/config";
import logoUnivalle from "../../assets/images/logoUnivalle.png";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard"); // Redirige al Dashboard
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Usuario autenticado:", result.user);
      navigate("/dashboard"); // Redirigir al dashboard después del login
    } catch (error) {
      console.error("Error en la autenticación:", error);
    }
  };

  return (
    <div className="login-container">
      {/* Sección Izquierda: Logo */}
      <div className="login-left">
        <img src={logoUnivalle} alt="Univalle Logo" className="login-logo" />
      </div>

      {/* Sección Derecha: Formulario + Botón de Google */}
      <div className="login-right">
        <div className="login-box">
          <h2>Univalle</h2>
          <form onSubmit={handleLogin} className="login-form">
            <input type="email" placeholder="Correo electrónico" required />
            <input type="password" placeholder="Contraseña" required />
            <button type="submit">Iniciar Sesión</button>
          </form>
          <button onClick={handleGoogleLogin} className="google-login-btn">
            Iniciar sesión con Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
