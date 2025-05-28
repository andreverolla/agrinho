function Home() {
  return (
    <section className="bg-[url(./assets/home-bg.jpg)] h-[100rem] bg-cover bg-center w-full bg-no-repeat">
      <div className="text-center max-w-3xl flex flex-col h-screen m-auto">
        <main className="relative items-center place-items-center content-center">
            <h1 className="font-bold text-6xl text-black">Conecte-se com o Futuro do Campo!</h1>
            <p className="text-xl my-4">Descubra como a tecnologia está unindo o campo e a cidade, transformando o trabalho agrícola e despertando o interesse dos jovens!</p>
            <a href="#about" className="bg-primary text-xl text-pattern rounded-full py-2.5 px-8 transition-all hover:bg-hover">Saiba mais!</a>
        </main>
      </div>
    </section>
  )
}

export default Home