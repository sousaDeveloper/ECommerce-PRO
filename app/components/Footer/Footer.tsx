import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="py-6 px-4 bg-[#283040] mt-12">
      <h1 className="font-bold text-2xl">Next Store</h1>
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
    </footer>
  );
}
