import Image from "next/image";
import { useRouter } from "next/navigation";

// Utilities
import { useAppSelector } from "hooks/redux.hooks";

// Styles
import "./Footer.scss";

export default function Footer() {
  const { isAuthenticated } = useAppSelector((rootReducer) => rootReducer.userReducer);
  const router = useRouter();

  const handleRouterLoginClick = () => router.push("/login");

  return (
    <footer className="bg-[#4c5b79] mt-32">
      <div className="pt-5 footerContent h-full p-10">
        <div>
          <h1 className="font-bold text-xl pb-3">Navegação</h1>

          <div className="flex flex-col text-white">
            <a href="#" className="hover:text-[#283040] transition duration-300">
              Início
            </a>
            <a href="#variety" className="hover:text-[#283040] transition duration-300">
              Produtos
            </a>
            {!isAuthenticated && (
              <p onClick={handleRouterLoginClick} className="cursor-pointer hover:text-[#283040] transition duration-300">
                Entrar
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-xl text-left">Formas de pagamento</h1>
          <div className="flex flex-wrap w-64 gap-2 mt-5">
            <Image
              src="http://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png"
              alt="visa"
              width={30}
              height={30}
            />

            <Image
              src="http://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png"
              alt="visa"
              width={30}
              height={30}
            />

            <Image
              src="http://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png"
              alt="visa"
              width={30}
              height={30}
            />

            <Image
              src="http://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/diners@2x.png"
              alt="visa"
              width={30}
              height={30}
            />

            <Image
              src="http://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/aura@2x.png"
              alt="visa"
              width={30}
              height={30}
            />

            <Image
              src="http://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/elo@2x.png"
              alt="visa"
              width={30}
              height={30}
            />

            <Image
              src="http://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/hipercard@2x.png"
              alt="visa"
              width={30}
              height={30}
            />

            <Image
              src="http://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/payment-method-types/pix@2x.png"
              alt="visa"
              width={30}
              height={30}
            />

            <Image
              src="http://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/discover@2x.png"
              alt="visa"
              width={30}
              height={30}
            />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold py-5 text-left text-xl">Meios de envio</h1>
            <Image
              src="http://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/shipping/api/4190@2x.png"
              alt="visa"
              width={30}
              height={30}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 ">
          <h1 className="font-bold text-xl text-left pb-3">Contato</h1>
          <p className="text-white">+55 (45)99836-5461</p>
          <p className="text-white">devlpsousa@gmail.com</p>
          <a
            href="https://www.linkedin.com/in/matheussousadev/"
            target="blank"
            className="text-white hover:text-[#283040] transition duration-300"
          >
            <p>LinkedIn</p>
          </a>
        </div>
      </div>

      <div className="flex justify-between flex-wrap text-center px-7 py-5 bg-[#283040] w-full">
        <h1 className="font-bold text-2xl">Inova Store</h1>
        <div className="flex gap-2">
          <h1 className="font-bold">
            Desenvolvido por{" "}
            <a
              href="https://www.linkedin.com/in/matheussousadev/"
              className="hover:text-[#f2b6c1] transition-all duration-300"
            >
              @Matheus Sousa
            </a>{" "}
          </h1>
        </div>
      </div>
    </footer>
  );
}
