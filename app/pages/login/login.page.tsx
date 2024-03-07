import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import validator from "validator";

import { useForm } from "react-hook-form";
import InputErrorMessage from "../../components/InputErrorMessage/InputErrorMessage";

export default function LoginPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSubmitPress = (data: any) => {
    console.log({ data });
  };

  return (
    <>
      <Header />
      <div className="grid place-content-center place-items-center mt-9 p-5">
        <div
          style={{ animation: "slideInFromLeft 1s ease-out" }}
          className=" max-w-[30rem] rounded shadow-2xl overflow-hidden p-8 space-y-8 "
        >
          <h2 style={{ animation: "appear 2s ease-out" }} className="text-center text-4xl font-extrabold text-[#8C3A60]">
            Entre com sua conta
          </h2>
          <button className="flex items-center justify-center py-2 gap-2 font-bold bg-[#8C3A60] w-full rounded text-white hover:bg-[#F2B8C1] hover:text-black transition duration-300 shadow-lg">
            <svg
              xmlBase="preserve"
              viewBox="0 0 512 512"
              y="0px"
              x="0px"
              xmlSpace="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              width="20"
              version="1.1"
            >
              <path
                d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
	c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
	C103.821,274.792,107.225,292.797,113.47,309.408z"
                style={{ fill: "#FBBB00" }}
              ></path>
              <path
                d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
	c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
	c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
                style={{ fill: "#518EF8" }}
              ></path>
              <path
                d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
	c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
	c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
                style={{ fill: "#28B446" }}
              ></path>
              <path
                d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
	c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
	C318.115,0,375.068,22.126,419.404,58.936z"
                style={{ fill: "#F14336" }}
              ></path>
            </svg>
            Google
          </button>
          <h1 className="text-center font-bold text-[#F2B6C1] border-b border-solid border-[#f2B6C1] pb-2">
            Ou entre com seu e-mail
          </h1>

          <div className="relative">
            <input
              placeholder="john@example.com"
              {...register("email", {
                required: true,
                validate: (value) => {
                  return validator.isEmail(value);
                },
              })}
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-[#F2B6C1]"
              id="email"
              name="email"
              type="email"
            />
            {errors?.email?.type === "required" && <InputErrorMessage>O email é obrigatório.</InputErrorMessage>}
            {errors?.email?.type === "validate" && <InputErrorMessage>Insira um email válido.</InputErrorMessage>}
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#F2B6C1] peer-focus:text-sm"
              htmlFor="email"
            >
              Email
            </label>
          </div>
          <div className="relative">
            <input
              {...register("password", { required: true })}
              placeholder="Password"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-[#F2B6C1]"
              id="password"
              name="password"
              type="password"
            />
            {errors?.password?.type === "required" && <InputErrorMessage>A senha é obrigatória.</InputErrorMessage>}
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#F2B6C1] peer-focus:text-sm"
              htmlFor="password"
            >
              Senha
            </label>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-200">
              <input className="form-checkbox h-4 w-4 text-purple-600 bg-gray-800 border-gray-300 rounded" type="checkbox" />
              <span className="ml-2">Lembrar de mim</span>
            </label>
          </div>
          <button
            className="w-full py-2 px-4 bg-[#8C3A60] hover:bg-[#F2B8C1] hover:text-black rounded shadow-lg text-white font-semibold transition duration-300"
            onClick={() => handleSubmit(handleSubmitPress)()}
          >
            Fazer Login
          </button>
          <div className="text-center text-gray-300">
            Não tem uma conta?{" "}
            <p className="text-[#F2B6C1] hover:underline font-bold">
              <Link to="/register">Registrar </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
