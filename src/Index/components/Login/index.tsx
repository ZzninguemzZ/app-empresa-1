import React, { use, useRef } from "react";
import ButtonApp from "../../UI/Button";
import Input from "../../UI/Input";
import AppContext from "../../context/AppContext";
import Style from "./Login.module.css";
import { useNavigate } from "react-router-dom";

function IndexLogin() {
  const navigate = useNavigate();

  const { ListIcon } = use(AppContext);

  const X: React.ElementType = ListIcon.find(
    (item) => item.description === "Close",
  )!.icon;

  const Google: React.ElementType = ListIcon.find(
    (item) => item.description === "Google",
  )!.icon;

  const Windows: React.ElementType = ListIcon.find(
    (item) => item.description === "Windows",
  )!.icon;

  const { setModalLogin } = use(AppContext);

  let inputt = "";

  if (localStorage.getItem("email") != "") {
    inputt = localStorage.getItem("email")!;
  }

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  return (
    <div>
      <div className={Style.container}>
        <div className={Style.header}>
          <div>
            <h1>Bem-Vindo de volta</h1>
            <p>Entre na sua Conta</p>
          </div>
          <div>
            <ButtonApp onClick={() => setModalLogin(false)}>
              <X />
            </ButtonApp>
          </div>
        </div>
        <form action="" onSubmit={ValidationLogin} className={Style.form}>
          <Input
            type="email"
            id="Email"
            placeholder="seu@email.com"
            classdiv={Style.divinput}
            ref={email}
          >
            Email:
          </Input>
          <Input
            type="password"
            id="Password"
            placeholder="********"
            classdiv={Style.divinput}
            ref={password}
          >
            Senha:
          </Input>
          <div className={Style.bottomform}>
            <Input type="checkbox" classdiv={Style.remindme}>
              Lembrar-me
            </Input>
            <a href="">Esqueceu a senha?</a>
          </div>
          <ButtonApp className={Style.login}>Entrar</ButtonApp>
        </form>
        <div className={Style.loginsmart}>
          <div className={Style.loginsmarttext}>
            <p>Ou continue com</p>
          </div>
          <div className={Style.loginsmartoptions}>
            <ButtonApp className={Style.google}>
              <Google />
              Google
            </ButtonApp>
            <ButtonApp className={Style.microsoft}>
              <Windows />
              Microsoft
            </ButtonApp>
          </div>
        </div>
      </div>
      <div className={Style.overflow}></div>
    </div>
  );

  async function ValidationLogin(e: React.FormEvent) {
    e.preventDefault(); // impede reload da página
    /*     navigate("/system/dashboard") */
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.current?.value,
          password: password.current?.value,
        }),
      });

      if (response.status === 200) {
        console.log(response);
        const data = await response.json();
        sessionStorage.setItem("token", data.token);
        localStorage.setItem("email", email.current!.value);
        navigate("/system/dashboard");
      } else {
        alert("Usuário ou senha incorretos");
      }
    } catch (error) {
      alert("Erro ao fazer login>:" + error);
    }
  }
}

export default IndexLogin;
