import React, { useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const google = window.google;
  let navigate = useNavigate();
  const [data, setData] = useState({});
  const [errorMessageEmail, setErrorMessageerrorMessageEmail] = useState("");
  const [errorMessagePass, setErrorMessageerrorMessagePass] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if(validateEmail(e?.target?.email?.value) && validatePassword(e?.target?.password?.value)){
      console.log('ambos true');
      return navigate("/dashboard");

    }
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
    const validatePasswordRegex = passwordRegex.test(password);
    if(password !== ""){
        if(password.length >= 8){
            if(validatePasswordRegex){
              setErrorMessageerrorMessagePass('')
              return true;
            }else{
              setErrorMessageerrorMessagePass("Tu contraseña debe tener al menos 1 numero y un caracter especial");
            }
        }else{
          setErrorMessageerrorMessagePass("Tu contraseña debe tener al menos 8 caracteres");
        }
    }else{
      setErrorMessageerrorMessagePass("Por favor, completa este campo.");
    }
  };
  const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const validateRegex = emailRegex.test(email);
    if (email !== "") {
      setErrorMessageerrorMessageEmail("");
      if (validateRegex) {
        setErrorMessageerrorMessageEmail("");
        return true;
      } else {
        setErrorMessageerrorMessageEmail(
          "Por favor, ingresa un correo valido."
        );
      }
    } else {
      setErrorMessageerrorMessageEmail("Por favor, completa este campo.");
    }
  };

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <div className="login w-full h-full flex ">
      <div className="first-container-img  hidden lg:flex w-1/2 h-[100vh] items-end ">
        <div className="bg-purple-cash bg-opacity-30 w-full h-[24rem] xl:h-[50%] flex flex-col items-center pt-8 2xl:pt-16 gap-10 text-center">
          <img
            src={require("../resources/mediumLogo.png")}
            className="w-auto h-16 2xl:h-20"
          />
          <h2 className="text-white text-2xl 2xl:text-3xl font-bold">
            Unlock Your Business
          </h2>
          <h2 className="text-white text-2xl 2xl:text-3xl font-bold">
            Send Money With Confidence <br></br>
            Around The World With Ease.
          </h2>
        </div>
      </div>
      <div className="second-container-login w-full lg:w-1/2 h-[100vh] flex justify-center items-center ">
        <div className="form-container w-[360px] h-auto text-center flex flex-col items-center gap-9 ">
          <img src={require("../resources/Spark.png")} />
          <h2 className="text-2xl font-bold">Good Morning!</h2>
          <div className="button-google flex flex-col gap-2">
            <p className="text-sm font-bold text-[#4B5563]">
              Sing in With Google
            </p>
            <div
              id="g_id_onload"
              data-client_id="873532400898-2tbejipkmu828iigifk2rthrrf0lv4qt.apps.googleusercontent.com"
              data-context="signin"
              data-ux_mode="popup"
              data-callback="handleCallbackResponse"
              data-auto_prompt="false"
            ></div>
            <div
              className="g_id_signin"
              data-type="standard"
              data-shape="pill"
              data-theme="outline"
              data-text="signin"
              data-size="large"
              data-logo_alignment="center"
              data-width="360"
            ></div>
          </div>
          <div className="form-container flex flex-col gap-4 w-full">
            <p className="text-sm font-bold text-[#4B5563]">
              Sing in With Email
            </p>
            <form
              className=" flex flex-col h-full "
              onSubmit={(e) => onSubmit(e)}
              noValidate
            >
              {/* INPUT EMAIL */}
              <div className="flex flex-col h-20">
                <div className="relative flex justify-center ">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none  bg-transparent">
                    <img
                      className="w-4 h-3 text-gray-500 dark:text-gray-400"
                      src={require("../resources/Vector.png")}
                    />
                  </div>

                  <input
                    type="email"
                    value={data?.email || ""}
                    id="email"
                    className="border-2 border-gray-200 text-sm rounded-lg block w-[360px] h-[54px] pl-10  focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Email"
                    onChange={handleInputChange}
                  />
                </div>
                {/* ERROR MESSAGE */}
                <div className="place-self-end">
                  {errorMessageEmail && (
                    <span className="text-red-400 text-xs items-end justify-end pt-2">
                      {errorMessageEmail}
                    </span>
                  )}{" "}
                  {/* Mostrar el mensaje de error si existe */}
                </div>
              </div>
              {/* INPUT PASSOWRD */}
              <div className="flex flex-col h-20">
                <div className="relative w-[100%] flex justify-center ">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none  bg-transparent">
                    <img
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      src={require("../resources/lock-password-line.png")}
                    />
                  </div>

                  <input
                    type="password"
                    value={data?.password || ""}
                    id="password"
                    className="border-2 border-gray-200 text-sm rounded-lg block w-[360px] h-[54px] pl-10  focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Password"
                    onChange={handleInputChange}
                    autoComplete="on"
                  />
                </div>
                {/* ERROR MESSAGE */}
                <div className="place-self-end">
                  {errorMessagePass && (
                    <span className="text-red-400 text-xs items-end justify-end pt-2">
                      {errorMessagePass}
                    </span>
                  )}{" "}
                  {/* Mostrar el mensaje de error si existe */}
                </div>
              </div>
              {/* FORGOT PASSWORD */}
              <div className="w-full flex justify-end ">
                <a className="text-sm font-semibold underline">
                  Forgot Password?
                </a>
              </div>
              {/* INPUT SUBMIT */}
              <input
                type="submit"
                className="w-full h-[54px] bg-[#111827] rounded-full text-white mt-5"
                value="Log in"
              />
            </form>
          </div>
          <div className="w-full flex">
            <div className="w-1/2  text-end">
              <p className="text-[15px] text-[#4B5563] ">
                Don't have an account?
              </p>
            </div>
            <a className="text-[15px] w-1/2 text-[#5D5CE7] font-semibold">
              Sing up here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
