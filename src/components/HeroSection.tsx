import { motion } from "framer-motion";
import heroImage from "@/assets/hero-law.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Oficina legal" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative z-10 container mx-auto px-6 mt-20 md:mt-0 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="inline-block mb-6">
            <div className="h-px w-20 gold-gradient mx-auto mb-4" />
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Excelencia Jurídica</p>
            <div className="h-px w-20 gold-gradient mx-auto mt-4" />
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            Defendemos{" "}
            <span className="text-gradient-gold">sus derechos</span>
            <br />
            con pasión
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10 font-light">
            Más de 25 años de experiencia protegiendo los intereses de nuestros clientes
            con dedicación, integridad y resultados comprobados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className="gold-gradient text-primary-foreground px-8 py-4 text-sm uppercase tracking-widest font-medium hover:opacity-90 transition-opacity"
            >
              Consulta Gratuita
            </a>
            <a
              href="#servicios"
              className="border border-gold text-gold px-8 py-4 text-sm uppercase tracking-widest font-medium hover:bg-primary/10 transition-colors"
            >
              Nuestros Servicios
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gold/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 gold-gradient rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
