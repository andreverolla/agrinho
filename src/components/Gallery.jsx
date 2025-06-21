function Gallery () {
    const imagens = [
    "/img/galeria1.jpg",
    "/img/galeria2.jpg",
    "/img/galeria3.jpg",
    "/img/galeria4.jpg",
    "/img/galeria5.jpg",
    "/img/galeria6.jpg",
    ];

    return (
        <section id="gallery" className="py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-olive-700 mb-12">
                Galeria de Imagens
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {imagens.map((src, index) => (
                    <div
                    key={index}
                    className="overflow-hidden rounded-lg border border-simple-stroke hover:shadow-xl transition duration-300"
                    >
                    <img
                        src={src}
                        alt={`Galeria ${index + 1}`}
                        className="w-full h-64 object-cover transform hover:scale-105 transition duration-500"
                    />
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}

export default Gallery