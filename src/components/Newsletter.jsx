function Newsletter () {
    return (
        <section id="newsletter" className="bg-[#FDF6EC] py-20 px-6">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#2E7D32] mb-4">
                Receba Novidades do Projeto
                </h2>
                <p className="text-gray-700 mb-8">
                Cadastre seu e-mail e fique por dentro das ações, eventos e histórias inspiradoras da nossa comunidade rural.
                </p>

                <form className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="w-full sm:w-auto px-6 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] transition"
                />
                <button
                    type="submit"
                    className="bg-[#4CAF50] hover:bg-[#43A047] text-white font-medium px-6 py-3 rounded-2xl transition"
                >
                    Inscrever-se
                </button>
                </form>
            </div>
        </section>
    )
}

export default Newsletter