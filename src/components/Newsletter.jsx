function Newsletter () {
    return (
        <section id="newsletter" className="bg-sand py-20 px-6">
            <div className="max-w-3xl mx-auto">
                <span className="uppercase text-sm text-earth bg-almond border border-simple-stroke px-4 py-1 rounded-md">newsletter</span>
                <h2 className="text-3xl md:text-4xl font-bold text-olive-800 my-4">
                Receba conteúdos inéditos e novidades gratuitamente
                </h2>
                <p className="text-contrast mb-4">
                Cadastre seu e-mail e fique por dentro das ações, eventos e histórias inspiradoras da nossa comunidade rural.
                </p>

                <form className="mb-4 flex flex-col sm:flex-row gap-2">
                <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="w-full sm:w-auto text-contrast px-6 py-4 rounded-lg border placeholder:text-earth border-earth focus:border-olive-600 focus:text-olive-800 focus:outline-none focus:ring focus:ring-olive-600 transition"
                />
                <button
                    type="submit"
                    className="bg-olive-600 hover:bg-olive-700 text-white font-medium px-6 py-4 rounded-lg transition"
                >
                    Inscrever-se
                </button>
                </form>
                <input type="checkbox" name="check" id="auth" className="appearance-none border border-olive-600 bg-transparent outline-none checked:bg-olive-600 rounded-sm cursor-pointer h-4 w-4 mr-1 relative top-[2px]" />
                <label htmlFor="auth" className="text-sm text-olive-700">Autorizo o envio de comunicações por e-mail ou qualquer outro meio e concordo com os <a href="#" className="underline">Termos e Políticas de privacidade.</a></label>
            </div>
        </section>
    )
}

export default Newsletter