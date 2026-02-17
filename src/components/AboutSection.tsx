import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: "25+", label: "Años de experiencia" },
  { value: "3,000+", label: "Casos resueltos" },
  { value: "98%", label: "Tasa de éxito" },
  { value: "15", label: "Abogados expertos" },
];

const AboutSection = () => {
  return (
    <AnimatedSection className="py-24" id="nosotros">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-3">Sobre nosotros</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Compromiso con la <span className="text-gradient-gold">excelencia</span>
            </h2>
            <div className="h-px w-16 gold-gradient mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              Desde 1999, Pérez & Asociados se ha consolidado como un referente en el ámbito legal.
              Nuestro equipo de abogados combina conocimiento profundo, ética profesional y un enfoque
              personalizado para cada cliente.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Creemos que cada caso merece atención dedicada. Por eso, trabajamos de cerca con nuestros
              clientes para comprender sus necesidades y diseñar estrategias legales efectivas que
              protejan sus intereses.
            </p>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="p-8 border border-border bg-card text-center hover:border-gold/40 transition-colors duration-500"
              >
                <p className="font-serif text-4xl font-bold text-gradient-gold mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
