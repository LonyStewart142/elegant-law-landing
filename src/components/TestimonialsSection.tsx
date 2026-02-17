import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    role: "Empresaria",
    text: "Pérez & Asociados manejó mi caso con una profesionalidad impecable. Siempre me mantuvieron informada y lograron un resultado que superó mis expectativas.",
  },
  {
    name: "Carlos Rodríguez",
    role: "Director Ejecutivo",
    text: "Su equipo corporativo nos ha asesorado durante más de 10 años. Su conocimiento y compromiso son incomparables en el sector.",
  },
  {
    name: "Ana Martínez",
    role: "Profesora Universitaria",
    text: "En un momento difícil, encontré en ellos no solo abogados brillantes sino personas empáticas que realmente se preocuparon por mi bienestar.",
  },
];

const TestimonialsSection = () => {
  return (
    <AnimatedSection className="py-24 bg-navy-light" id="testimonios">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gold mb-3">Testimonios</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
          <div className="h-px w-16 gold-gradient mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-8 border border-border bg-card relative"
            >
              <Quote className="w-8 h-8 text-gold/30 mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="h-px w-10 gold-gradient mb-4" />
              <p className="font-serif font-semibold">{t.name}</p>
              <p className="text-sm text-gold">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TestimonialsSection;
