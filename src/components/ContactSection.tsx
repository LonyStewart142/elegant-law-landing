import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Mensaje enviado", description: "Nos pondremos en contacto con usted pronto." });
    setForm({ nombre: "", email: "", telefono: "", mensaje: "" });
  };

  return (
    <AnimatedSection className="py-24" id="contacto">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gold mb-3">Contáctenos</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Hablemos de su caso</h2>
          <div className="h-px w-16 gold-gradient mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {[
              { name: "nombre", label: "Nombre completo", type: "text" },
              { name: "email", label: "Correo electrónico", type: "email" },
              { name: "telefono", label: "Teléfono", type: "tel" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  required
                  value={form[field.name as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                  className="w-full bg-card border border-border px-4 py-3 text-foreground focus:border-gold focus:outline-none transition-colors"
                />
              </div>
            ))}
            <div>
              <label className="block text-sm uppercase tracking-wider text-muted-foreground mb-2">
                Mensaje
              </label>
              <textarea
                required
                rows={4}
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                className="w-full bg-card border border-border px-4 py-3 text-foreground focus:border-gold focus:outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full gold-gradient text-primary-foreground py-4 text-sm uppercase tracking-widest font-medium hover:opacity-90 transition-opacity"
            >
              Enviar Mensaje
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {[
              { icon: MapPin, title: "Dirección", text: "Av. Principal #123, Centro" },
              { icon: Phone, title: "Teléfono", text: "+1 (000) 000-0000" },
              { icon: Mail, title: "Email", text: "contacto@perezsociados.com" },
              { icon: Clock, title: "Horario", text: "Lunes a Viernes: 9:00 - 18:00\nSábado: 10:00 - 14:00" },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-12 h-12 border border-gold/30 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-serif font-semibold mb-1">{item.title}</p>
                  <p className="text-muted-foreground text-sm whitespace-pre-line">{item.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
