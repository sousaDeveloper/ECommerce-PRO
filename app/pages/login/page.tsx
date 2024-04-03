"use client";

import { useForm } from "react-hook-form";
import validator from "validator";
import { AuthError, AuthErrorCodes, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon } from "lucide-react";
import Aos from "aos";

// Utilities
import { auth, db, googleProvider } from "../../config/firebase.config";
import { useAppSelector } from "hooks/redux.hooks";

// Components
import Header from "@components/Header/Header";
import InputErrorMessage from "@components/InputErrorMessage/InputErrorMessage";
import CustomInputContainer from "@components/CustomInputContainer/CustomInputContainer";
import Footer from "@components/Footer/Footer";
import Loading from "@components/Loading/Loading";

interface LoginForm {
  email: string;
  password: string;
}

Aos.init();

export default function LoginPage() {
  const { isAuthenticated } = useAppSelector((rootReducer) => rootReducer.userReducer);

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleRouterSignUpClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      return router.push("/pages/signUp");
    }, 1000);
  };
  const handleRouterBackClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      return router.push("/");
    }, 1000);
  };

  useEffect(() => {
    if (isAuthenticated) {
      toast.success("Login realizado com sucesso.");
      return router.push("/");
    }
  }, [isAuthenticated]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<LoginForm>();

  const handleSubmitPress = async (data: LoginForm) => {
    try {
      setIsLoading(true);
      const userCredentials = await signInWithEmailAndPassword(auth, data.email, data.password);

      console.log({ userCredentials });
    } catch (error) {
      const _error = error as AuthError;

      if (_error.code === AuthErrorCodes.INVALID_PASSWORD) {
        return setError("password", { type: "mismatch" });
      }

      if (_error.code === AuthErrorCodes.USER_DELETED) {
        return setError("email", { type: "notFound" });
      }
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignInGooglePress = async () => {
    try {
      setIsLoading(true);
      const userCredentials = await signInWithPopup(auth, googleProvider);

      const querySnapshot = await getDocs(query(collection(db, "users"), where("id", "==", userCredentials.user.uid)));

      const user = querySnapshot.docs[0]?.data();

      if (!user) {
        const firstName = userCredentials.user.displayName?.split(" ")[0];
        const lastName = userCredentials.user.displayName?.split(" ")[1];
        await addDoc(collection(db, "users"), {
          id: userCredentials.user.uid,
          email: userCredentials.user.email,
          firstName,
          lastName,
          provider: "google",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      <Header />

      <div className="mt-7 pl-4">
        <button
          className="flex gap-1 items-center text-[#283040] hover:text-[#8c3a60] transition duration-300"
          data-aos="fade-right"
          onClick={handleRouterBackClick}
        >
          <ChevronLeftIcon size={25} />
          <p className="font-bold text-xl">Voltar</p>
        </button>
      </div>
      <div className="grid place-content-center place-items-center p-5 pt-0 min-h-[79vh]" data-aos="fade-down">
        <div
          style={{ animation: "slideInFromLeft 1s ease-out", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          className="max-w-[30rem] rounded overflow-hidden p-8 space-y-8 bg-[#283040]"
        >
          <h2 style={{ animation: "appear 2s ease-out" }} className="text-center text-4xl font-extrabold text-[#8C3A60]">
            Entre com sua conta
          </h2>

          <CustomInputContainer
            label="Email"
            type="text"
            func={{
              ...register("email", {
                required: true,
                validate: (value) => {
                  return validator.isEmail(value);
                },
              }),
            }}
          >
            {errors?.email?.type === "required" && <InputErrorMessage>O email é obrigatório.</InputErrorMessage>}
            {errors?.email?.type === "validate" && <InputErrorMessage>Insira um email válido.</InputErrorMessage>}
            {errors?.email?.type === "notFound" && <InputErrorMessage>Email não encontrado.</InputErrorMessage>}
          </CustomInputContainer>

          <CustomInputContainer label="Senha" type="password" func={{ ...register("password", { required: true }) }}>
            {errors?.password?.type === "required" && <InputErrorMessage>A senha é obrigatória.</InputErrorMessage>}
            {errors?.password?.type === "validate" && <InputErrorMessage>Insira uma senha válida.</InputErrorMessage>}
            {errors?.password?.type === "mismatch" && <InputErrorMessage>Senha incorreta.</InputErrorMessage>}
          </CustomInputContainer>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-200">
              <input className="form-checkbox h-4 w-4 text-purple-600 bg-gray-800 border-gray-300 rounded" type="checkbox" />
              <span className="ml-2">Lembrar de mim</span>
            </label>
          </div>
          <button
            className="w-full py-2 px-4 bg-[#8C3A60] hover:bg-[#F2B6C1] hover:text-black rounded shadow-lg text-white font-semibold transition duration-300"
            onClick={() => handleSubmit(handleSubmitPress)()}
          >
            Fazer Login
          </button>
          <div
            className="flex gap-2 justify-center items-center p-2 bg-white font-bold rounded cursor-pointer hover:bg-[#F2B6C1] transition duration-300"
            onClick={handleSignInGooglePress}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              version="1.1"
              x="0px"
              y="0px"
              className="google-icon"
              viewBox="0 0 48 48"
              height="1.5em"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            <span>Login com o Google</span>
          </div>
          <div className="text-center text-gray-300 flex justify-center gap-2">
            Não tem uma conta?{" "}
            <p className="text-[#F2B6C1] hover:underline font-bold cursor-pointer" onClick={handleRouterSignUpClick}>
              Registrar
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
