function Gallery () {
    const images = [
    "/assets/1.jpg",
    "/assets/2.jpeg",
    "/assets/3.jpeg",
    "/assets/4.jpeg",
    "/assets/5.jpeg",
    "/assets/6.jpeg",
    "/assets/7.jpeg",
    "/assets/8.jpeg",
    "/assets/modern-1.jpeg",
    "/assets/modern-2.jpeg",
    "/assets/modern-3.jpeg",
    "/assets/modern-4.jpeg",
    "/assets/modern-5.jpeg",
    "/assets/modern-6.jpeg",
    "/assets/modern-7.jpeg",
    ];

    return (
        <section id="gallery" className="py-20 px-8 bg-[url('./images/pattern.svg')]">
            <div className="max-w-[1280px] mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-olive-700 mb-16">Veja as fotos de Rio Bom</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {images.map((src, index) => (
                    <div
                    key={index}
                    className="overflow-hidden rounded-lg border border-simple-stroke transition-all"
                    >
                    <img
                        src={src}
                        alt={`Foto de Rio Bom ${index + 1}`}
                        loading="lazy"
                        className="w-full h-64 object-cover transform hover:scale-105 transition-all"
                    />
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}

export default Gallery