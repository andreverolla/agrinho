import { ButtonHover, BorderButton } from "../layouts/Buttons"

function Home() {
  return (
    <section id="home" className="min-h-screen w-full px-8 py-16">
      <div className="max-w-[1280px] mx-auto flex items-center justify-center flex-col mt-24">
        <div className="w-[75%] text-center max-lg:w-[85%] max-md:w-full">
          <span className="text-earth bg-vanilla py-2 px-4 text-sm rounded-lg font-medium">Olá, seja bem vindo! 👋</span>
          <h1 className="text-4xl md:text-5xl font-semibold font-titles text-black leading-tight mt-4">
            Nossa história, nossas raízes: o orgulho de ser do Rio Bom
          </h1>
          <p className="text-lg md:text-2xl text-contrast mt-4 mb-10">
            Descubra como a força da nossa gente e o amor pela terra constroem um futuro mais consciente e sustentável.
          </p>
          <ButtonHover to="about" title="Veja mais" text="Veja mais" />
        </div>

        <div className="rounded-lg bg-contrast p-2 mt-24 w-full">
          <iframe 
            src="https://www.youtube.com/embed/OxmglDzP88U" title="Vídeo sobre a tradicional festa do churrasco no espeto de bambu em Rio Bom" 
            frameborder="0" 
            className="h-[36rem] max-lg:h-80 w-full m-0 m-auto"
            allowFullScreen

          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Home