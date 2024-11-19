export default function WelcomeSection() {
    return (
        <section id="inicio" className="w-full py-12 md:py-24 lg:py-32 bg-[#E6CED9] flex flex-col items-center">
            <div className="container px-4 md:px-6 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#DEB8E9]" style={{ textShadow: "1px 1px 2px black" }}>
                    Bienvenidos
                </h2>
                <p className="mt-6 text-lg md:text-xl text-[#1c1c1c] leading-relaxed max-w-[800px]" style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>
                    Bienvenidos a <strong>SeguraMente</strong>, un espacio para superar tus frustraciones creadas por el mundo digital. Aquí encontrarás apoyo y herramientas para manejar la presión social y potenciar tu bienestar emocional.
                </p>
            </div>
        </section>
    );
}
