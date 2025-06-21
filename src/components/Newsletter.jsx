function Newsletter () {
    return (
        <section id="newsletter" className="bg-sand py-20 px-6">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text=olive-800 mb-4">
                Receba Novidades do Projeto
                </h2>
                <p className="text-earth mb-8">
                Cadastre seu e-mail e fique por dentro das ações, eventos e histórias inspiradoras da nossa comunidade rural.
                </p>

                <form className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="w-full sm:w-auto text-contrast px-6 py-3 rounded-lg border placeholder:text-earth font-medium border-earth focus:border-olive-600 focus:text-olive-800 focus:outline-none focus:ring-2 focus:ring-olive-600 transition"
                />
                <button
                    type="submit"
                    className="bg-olive-600 hover:bg-olive-700 text-white font-medium px-6 py-3 rounded-lg transition"
                >
                    Inscrever-se
                </button>
                </form>
            </div>
        </section>
    )
}

export default Newsletter