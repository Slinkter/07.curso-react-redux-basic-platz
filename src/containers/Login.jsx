import React from "react";
import googleIcon from "../assets/static/google-icon.png";
import twitterIcon from "../assets/static/twitter-icon.png";
import "../assets/styles/components/Login.scss";
import { Link } from "react-router-dom";
function Login() {
    return (
        <div>
            <section className="login">
                <section className="login__container">
                    <h2>Inicia sesión</h2>
                    <form className="login__container--form">
                        <input
                            className="input"
                            type="text"
                            placeholder="Correo"
                        />
                        <input
                            className="input"
                            type="password"
                            placeholder="Contraseña"
                        />
                        <button className="button">Iniciar sesión</button>
                        <div className="login__container--remember-me">
                            <label>
                                <input
                                    type="checkbox"
                                    id="cbox1"
                                    value="first_checkbox"
                                />
                                Recuérdame
                            </label>
                            <a href="/">Olvidé mi contraseña</a>
                        </div>
                    </form>
                    <section className="login__container--social-media">
                        <div>
                            <img src={googleIcon} /> Inicia sesión con Google
                        </div>
                        <div>
                            <img src={twitterIcon} /> Inicia sesión con Twitter
                        </div>
                    </section>

                    <Link to="/register" rel="canonical">
                        <p className=""> Regístrate</p>
                    </Link>
                </section>
            </section>
        </div>
    );
}

export default Login;
