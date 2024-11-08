import minhaImagem from "./assets/imagem-perfil.png";
import localization from "./assets/localization.png";
import whatsapp from "./assets/wpp-2.png";
import lash from "./assets/lash.jpg";
import imagemFundo from "./assets/img-perfil.jpg";
import "./app.css"

export default function App() {
  
  return (

    <div className="relative flex flex-col items-center justify-center min-h-screen w-full">
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-50 -z-10"
        src={imagemFundo}
        alt="imagem-fundo"
      />
      <img
        className="rounded-full w-24 sm:w-32 md:w-48 mt-10 border-2 border-orange-400"
        src={minhaImagem}
        alt="foto-podologa"
      />
      
      <h1 className="text-xl sm:text-2xl md:text-4xl font-sans text-zinc-900 mt-2">
        Cilios da Mari
      </h1>
      
      <p className="text-zinc-900 mt-3 mb-5 text-center text-sm md:text-base">
        "Todo o poder feminino em delicados fios."
      </p>

      <main className="flex flex-col w-11/12 max-w-lg text-center space-y-4">
        <section className="bg-white py-4 px-6 rounded-lg border-2 border-orange-400 flex items-center gap-4 transition-transform hover:scale-105 cursor-pointer">
          <img className="w-6 ml-3" src={whatsapp} alt="whatsapp" />
          <a
            href="https://api.whatsapp.com/send?phone=5532991996004&text=Ol%C3%A1,%20desejo%20agendar%20um%20horario!!%20Pode%20me%20passar%20mais%20informa%C3%A7%C3%B5es?"
            className="text-zinc-900 font-sans text-base ml-2 md:text-lg font-bold"
          >
            Agende seu horario
          </a>
        </section>

        <section className="bg-white py-4 px-6 rounded-lg border-2 border-orange-400 flex items-center gap-4 transition-transform hover:scale-105 cursor-pointer">
          <img className="w-11" src={lash} alt="avaliation" />
          <a
            href="https://wa.me/c/553291996004"
            className="text-zinc-900 font-sans text-base md:text-lg font-bold"
          >
            Catalogo de serviços
          </a>
        </section>

        <section className="bg-white py-4 px-6 rounded-lg border-2 border-orange-400 flex items-center gap-4 transition-transform hover:scale-105 cursor-pointer">
          <img className="w-9 ml-1" src={localization} alt="maps" />
          <a
            href="https://www.google.com.br/maps/place/Sheily+Maria+Pugliesi+Cavalcanti/@-21.7643505,-43.3518166,17z/data=!4m14!1m7!3m6!1s0x989b6056193487:0xdc445c0704934262!2sSheily+Maria+Pugliesi+Cavalcanti!8m2!3d-21.7643555!4d-43.3492417!16s%2Fg%2F1td5ychn!3m5!1s0x989b6056193487:0xdc445c0704934262!8m2!3d-21.7643555!4d-43.3492417!16s%2Fg%2F1td5ychn?entry=ttu&g_ep=EgoyMDI0MTEwNS4wIKXMDSoASAFQAw%3D%3D"
            className="text-zinc-900 font-sans text-base ml-2 md:text-lg font-bold"
          >
            Me encontre aqui
          </a>
        </section>

        <footer className="flex flex-col items-center gap-3 my-8 md:my-12">
          <p className="text-white text-xs md:text-sm drop-shadow">
            &copy;2024 marianaoliveira. Todos os direitos reservados.
          </p>
          
        </footer>
      </main>

    </div>
  )
}