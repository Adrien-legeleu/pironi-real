"use client";

import { MotionPreset } from "@/components/ui/motion-preset";
import { MessageSquare, CheckCircle, Truck } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Vous nous contactez",
    description: "Appelez-nous ou remplissez notre formulaire en ligne. Expliquez-nous votre besoin : location sans permis, transport logistique ou chauffeur privé.",
  },
  {
    number: "02",
    icon: CheckCircle,
    title: "Nous définissons votre besoin",
    description: "Échange rapide pour comprendre vos attentes précises. Nous vous proposons la solution la mieux adaptée parmi nos trois services.",
  },
  {
    number: "03",
    icon: Truck,
    title: "Confirmation et mise à disposition",
    description: "Validation de votre réservation et mise à disposition du véhicule ou du service. Tout est prêt pour répondre à votre demande.",
  },
];

// Floating particles decoration
const FloatingParticles = () => (
  <>
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-primary/30 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}
  </>
);

export function HowItWorks() {
  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Animated Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
       
        
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container relative max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <MotionPreset
          fade
          blur
          slide={{ direction: "up", offset: 30 }}
          className="text-center mb-24"
        >
          <motion.div
            className="inline-block mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest px-5 py-2.5 rounded-full bg-primary/5 backdrop-blur-sm">
              Notre processus
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Comment ça marche ?
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Un processus simple et transparent en 3 étapes.
          </p>
        </MotionPreset>

        {/* Timeline Section */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Timeline Line - Mobile */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-px">
            <motion.div
              className="h-full bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {/* Horizontal Timeline Line - Desktop */}
          <div className="hidden md:block absolute left-0 right-0 top-24 h-px">
            <motion.div
              className="h-full bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-16 md:gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Desktop: with animation */}
                <MotionPreset
                  fade
                  slide={{ direction: "up", offset: 60 }}
                  delay={0.2 + index * 0.2}
                  className="hidden md:block"
                >
                  <div className="flex flex-col items-center gap-0">
                    {/* Icon Circle - Timeline Node */}
                    <div className="relative flex-shrink-0">
                      {/* Pulsing Ring Animation */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-primary/20"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />
                      
                      {/* Icon Container */}
                      <motion.div
                        className="relative w-20 h-20 rounded-full bg-background flex items-center justify-center z-10"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {/* Gradient Border Effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/60 via-primary/30 to-transparent p-[2px]">
                          <div className="h-full w-full rounded-full bg-background" />
                        </div>
                        
                        <step.icon className="h-9 w-9 text-primary relative z-10" strokeWidth={1.5} />
                      </motion.div>

                      {/* Floating Number Badge */}
                      <motion.div
                        className="absolute -top-5 -right-5 w-12 h-12 z-10 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold shadow-lg shadow-primary/20"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          delay: 0.4 + index * 0.2,
                        }}
                        whileHover={{ rotate: 12, scale: 1.15 }}
                      >
                        {step.number}
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="mt-12 text-center">
                      <motion.h3
                        className="text-2xl md:text-3xl font-bold text-foreground mb-4"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {step.title}
                      </motion.h3>
                      <p className="text-muted-foreground text-lg leading-relaxed max-w-sm mx-auto">
                        {step.description}
                      </p>

                      {/* Decorative Lines */}
                      <motion.div
                        className="mt-8 mx-auto w-16 h-1 bg-primary to-transparent rounded-full"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                      />
                    </div>
                  </div>
                </MotionPreset>

                {/* Mobile: without animation */}
                <div className="md:hidden block">
                  <div className="flex items-start gap-6">
                    {/* Icon Circle - Timeline Node */}
                    <div className="relative flex-shrink-0">
                      {/* Icon Container - Static on mobile */}
                      <div className="relative w-20 h-20 rounded-full bg-background flex items-center justify-center z-10">
                        {/* Gradient Border Effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/60 via-primary/30 to-transparent p-[2px]">
                          <div className="h-full w-full rounded-full bg-background" />
                        </div>
                        
                        <step.icon className="h-9 w-9 text-primary relative z-10" strokeWidth={1.5} />
                      </div>

                      {/* Floating Number Badge - Keep animation */}
                      <motion.div
                        className="absolute -top-5 -right-5 w-12 h-12 z-10 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold shadow-lg shadow-primary/20"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          delay: 0.4 + index * 0.2,
                        }}
                      >
                        {step.number}
                      </motion.div>
                    </div>

                    {/* Content - Static on mobile */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <MotionPreset
          fade
          blur
          slide={{ direction: "up", offset: 30 }}
          delay={1}
          className="text-center mt-24"
        >
          <p className="text-muted-foreground text-xl mb-8">
            Prêt à démarrer votre projet de mobilité ?
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-2xl font-semibold text-sm relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <span className="relative z-10">Demander un devis</span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </motion.svg>
          </motion.a>
        </MotionPreset>
      </div>
    </section>
  );
}
