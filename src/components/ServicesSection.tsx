import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Scale, Shield, Briefcase, Users, Gavel, FileText } from "lucide-react";

const services = [
  { icon: Scale, title: "Derecho Civil", desc: "Contratos, herencias, propiedad y litigios civiles con asesoría integral." },
  { icon: Shield, title: "Derecho Penal", desc: "Defensa penal experta y protección de sus derechos fundamentales." },
  { icon: Briefcase, title: "Derecho Corporativo", desc: "Constitución de empresas, fusiones y cumplimiento normativo." },
  { icon: Users, title: "Derecho Familiar", desc: "Divorcios, custodia, pensiones y mediación familiar." },
  { icon: Gavel, title: "Litigios Comerciales", desc: "Resolución de disputas comerciales y arbitraje especializado." },
  { icon: FileText, title: "Propiedad Intelectual", desc: "Registro de marcas, patentes y protección de creaciones." },
];

const ServicesSection = () => {
  return (
    <AnimatedSection className="py-24 bg-navy-light" id="servicios">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gold mb-3">Lo que hacemos</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Áreas de Práctica</h2>
          <div className="h-px w-16 gold-gradient mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 border border-border bg-card hover:border-gold/40 transition-all duration-500"
            >
              <s.icon className="w-8 h-8 text-gold mb-5 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-serif text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ServicesSection;
