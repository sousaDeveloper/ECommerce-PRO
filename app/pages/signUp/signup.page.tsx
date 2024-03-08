import validator from "validator";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

// Components
import Header from "../../components/Header/Header";
import InputErrorMessage from "../../components/InputErrorMessage/InputErrorMessage";
import CustomInputContainer from "../../components/CustomInputContainer/CustomInputContainer";
import CustomInput from "../../components/CustomInputContainer/CustomInput";

// Utilities
import { Link } from "react-router-dom";
import { auth, db } from "../../config/firebase.config";

interface SignUpform {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<SignUpform>();

  const handleSubmitPress = async (data: SignUpform) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, data.email, data.password);

      await addDoc(collection(db, "users"), {
        id: userCredentials.user.uid,
        firstName: data.firstName,
        lastName: data.lastName,
        email: userCredentials.user.email,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const watchPassword = watch("password");

  return (
    <>
      <Header />
      <div className="grid place-content-center place-items-center mt-9 p-5">
        <div
          style={{ animation: "slideInFromLeft 1s ease-out" }}
          className=" max-w-[30rem] rounded shadow-2xl overflow-hidden p-8 space-y-8 "
        >
          <h2
            style={{ animation: "appear 2s ease-out" }}
            className="text-center text-4xl font-extrabold text-[#8C3A60] border-b border-solid border-[#f2B6C1] pb-2 px-10"
          >
            Crie a sua conta
          </h2>

          <CustomInputContainer label="Nome" htmlFor="name">
            <CustomInput func={{ ...register("firstName", { required: true }) }} id="name" placeholder="name" type="name" />
            {errors?.firstName?.type === "required" && <InputErrorMessage>O nome é obrigatório.</InputErrorMessage>}
          </CustomInputContainer>
          <CustomInputContainer label="Sobrenome" htmlFor="lastName">
            <CustomInput
              func={{ ...register("lastName", { required: true }) }}
              id="lastName"
              placeholder="lastName"
              type="lastName"
            />
            {errors?.lastName?.type === "required" && <InputErrorMessage>O sobrenome é obrigatório.</InputErrorMessage>}
          </CustomInputContainer>
          <CustomInputContainer label="Email" htmlFor="email">
            <CustomInput
              func={{
                ...register("email", {
                  required: true,
                  validate: (value) => {
                    return validator.isEmail(value);
                  },
                }),
              }}
              id="email"
              placeholder="email"
              type="email"
            />
            {errors?.email?.type === "required" && <InputErrorMessage>O email é obrigatório.</InputErrorMessage>}
            {errors?.email?.type === "validate" && <InputErrorMessage>Insira um email válido.</InputErrorMessage>}
          </CustomInputContainer>
          <CustomInputContainer label="Senha" htmlFor="password">
            <CustomInput
              func={{ ...register("password", { required: true }) }}
              id="password"
              placeholder="password"
              type="password"
            />
            {errors?.password?.type === "required" && <InputErrorMessage>A senha é obrigatória.</InputErrorMessage>}
          </CustomInputContainer>
          <CustomInputContainer label="Confirmar Senha" htmlFor="confirmPassword">
            <CustomInput
              func={{
                ...register("confirmPassword", {
                  required: true,
                  validate: (value) => {
                    return value === watchPassword;
                  },
                }),
              }}
              id="confirmPassword"
              placeholder="confirmPassword"
              type="password"
            />
            {errors?.confirmPassword?.type === "required" && (
              <InputErrorMessage>A confirmação da senha é obrigatória.</InputErrorMessage>
            )}

            {errors?.confirmPassword?.type === "validate" && <InputErrorMessage>As senhas não coincidem.</InputErrorMessage>}
          </CustomInputContainer>
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
            Criar conta
          </button>
          <div className="text-center text-gray-300 flex justify-center gap-2">
            Já possui uma conta?{" "}
            <p className="text-[#F2B6C1] hover:underline font-bold">
              <Link to="/login">Login </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
