import React, { useState } from "react";
import googleIcon from "../assets/static/google-icon.png";
import twitterIcon from "../assets/static/twitter-icon.png";
import "../assets/styles/components/Login.scss";
import { Link } from "react-router-dom";

function Login() {
    const [form, setValues] = useState({
        email: "",
        password: "",
    });

    const handleInput = (e) => {
        setValues({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <section className="login">
            <section className="login__container">
                <h2>Inicia sesión</h2>
                <form
                    className="login__container--form"
                    onSubmit={handleSubmit}
                >
                    <input
                        name="email"
                        className="input"
                        type="text"
                        placeholder="Correo electronico"
                        onChange={handleInput}
                    />
                    <input
                        name="password"
                        className="input"
                        type="password"
                        placeholder="Contraseña"
                        onChange={handleInput}
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
    );
}

export default Login;
