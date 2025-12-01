'use client';

import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function LocationSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-primary text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1),_transparent_70%)]" />
        {/* Abstract Map Lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,100 Q400,150 800,100 T1600,100" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-20" />
          <path d="M0,300 Q400,350 800,300 T1600,300" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-20" />
          <path d="M0,500 Q400,550 800,500 T1600,500" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-20" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-white/90">
              <MapPin className="w-4 h-4" />
              <span>Localisation Stratégique</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Basé à <span className="text-secondary">Saint-Cloud</span>
              <br />
              <span className="text-secondary">Au cœur de l'ouest parisien</span>
            </h2>

            <p className="text-lg text-white max-w-xl leading-relaxed">
              Idéalement situé aux <strong>Hamptons Saint-Cloud</strong>, nous sommes au plus près de nos clients. Une proximité immédiate avec <strong>Rueil-Malmaison</strong> et les quartiers résidentiels pour une réactivité optimale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-secondary backdrop-blur-sm hover:bg-secondary/90 text-primary rounded-2xl px-8 h-14 text-lg shadow-lg shadow-primary/20"
              >
                <a href="tel:0659316991">
                  Nous contacter
                </a>
              </Button>
             
            </div>
          </motion.div>

          {/* Visual Element / 3D Card Effect */}
          <div className="relative h-[400px] w-full [perspective:1000px]">
            <motion.div
              initial={{ rotateY: -20, rotateX: 5 }}
              whileInView={{ rotateY: -10, rotateX: 5 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative h-full w-full [transform-style:preserve-3d] transition-all duration-500 hover:[transform:rotateY(-5deg)_rotateX(5deg)]"
            >
              {/* Thickness/Depth Layers */}
              <div className="absolute inset-0 rounded-3xl bg-gray-200 [transform:translateZ(-20px)_translateX(10px)_translateY(10px)]" />
              <div className="absolute inset-0 rounded-3xl bg-gray-200 [transform:translateZ(-40px)_translateX(20px)_translateY(20px)]" />
              
              {/* Main Face */}
              <div className="absolute inset-0 bg-background border border-gray-100 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.2)] [transform:translateZ(0)]">
                <div className="absolute top-4 right-4 text-gray-300">
                  <Navigation className="w-12 h-12" />
                </div>
                
                <div className="space-y-6 h-full flex flex-col justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Les Hamptons</h3>
                      <p className="text-gray-500">Saint-Cloud, France</p>
                    </div>
                  </div>

                  <div className="flex-1 w-full bg-gray-100 rounded-2xl overflow-hidden relative border border-gray-100">
                     {/* Abstract Map Representation */}
                     <div className="absolute inset-0 opacity-50">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <path d="M20,50 Q50,20 80,50" stroke="#000" strokeWidth="0.5" fill="none" className="opacity-10" />
                          <path d="M10,80 Q50,50 90,80" stroke="#000" strokeWidth="0.5" fill="none" className="opacity-10" />
                          
                        </svg>
                     </div>
                     <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-medium tracking-widest uppercase text-gray-500">Zone d'intervention</span>
                     </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-100 rounded-xl p-4 border border-gray-100">
                      <div className="text-2xl font-bold text-primary">15 min</div>
                      <div className="text-sm text-gray-500">Paris Centre</div>
                    </div>
                    <div className="bg-gray-100 rounded-xl p-4 border border-gray-100">
                      <div className="text-2xl font-bold text-primary">24/7</div>
                      <div className="text-sm text-gray-500">Disponibilité</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
