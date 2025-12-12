'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Truck, Car, User, Box } from 'lucide-react';

const services = [
  {
    id: 4,
    title: 'Transport de Marchandises',
    description:
      'Solution complète pour vos besoins logistiques. Transport sécurisé, flotte adaptée et suivi en temps réel.',
    image: '/cars/logistique.jpeg',
    slug: 'transport-marchandises',
    icon: Truck
  },
  {
    id: 1,
    title: 'Sans Permis',
    description:
      'Location courte / moyenne durée. Pratique, simple, rapide.',
    image: '/cars/sanspermis2.webp',
    slug: 'location-sans-permis',
    icon: Car
  },
  {
    id: 3,
    title: 'Location d’utilitaire',
    description:
      'Louez nos utilitaires pour vos déménagements et livraisons.',
    image: '/cars/logistique.jpeg',
    slug: 'location-utilitaire',
    icon: Box
  },
  {
    id: 2,
    title: 'Chauffeur',
    description:
      'Trajets avec chauffeur. Qualité, confort, ponctualité.',
    image: '/cars/mercedes.png',
    slug: 'chauffeur-prive',
    icon: User
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#242B33] mb-4">
            Nos Services
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Une expertise globale pour tous vos besoins de mobilité et transport
          </p>
        </div>

        {/* Bento Grid - 3 Columns Asymmetric Zig-Zag */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 gap-3 auto-rows-[420px] p-4 group/list">
          {services.map((service, index) => {
            const isPrimary = index === 0;
            
            // Grid Span Logic - Zig Zag Pattern
            // Row 1: Transport (2) + Ami (1)
            // Row 2: Utilitaire (1) + Chauffeur (2)
            let colSpanClass = 'col-span-1';
            
            if (index === 0) colSpanClass = 'sm:col-span-2'; // Transport
            else if (index === 1) colSpanClass = 'sm:col-span-1'; // Ami
            else if (index === 2) colSpanClass = 'sm:col-span-1'; // Utility
            else if (index === 3) colSpanClass = 'sm:col-span-2'; // Chauffeur

            return (
              <div
                key={service.id}
                className={`group/card relative flex flex-col hover:scale-[1.01] group-hover/list:scale-[0.99] pt-8 px-8 rounded-3xl overflow-hidden transition-all duration-300
                  ${colSpanClass}
                  ${isPrimary ? 'bg-white ring-1 shadow-[0_10px_30px_0_rgba(0,0,0,0.1)] hover:shadow-lg ring-primary/10' : 'bg-neutral-50 hover:bg-white shadow-[0_10px_30px_0_rgba(0,0,0,0.1)] hover:shadow-lg border border-primary/10'}
                `}
              >
                 {/* Header: Icon & Badge */}
                 <div className="flex items-start justify-between z-10">
                    <div className={`p-3 rounded-2xl ${isPrimary ? 'bg-primary/10 text-primary' : 'bg-white text-neutral-900 border border-neutral-100'}`}>
                       <service.icon className="w-6 h-6" />
                    </div>
                    {isPrimary && (
                      <span className="bg-primary text-white text-[10px] font-bold px-3 py-2 rounded-xl uppercase tracking-wider shadow-sm">
                        Recommandé
                      </span>
                    )}
                 </div>

                 {/* Text Content */}
                 <div className="mt-6 mb-6 z-10 relative">
                   <h3 className="text-3xl font-bold text-[#242B33] mb-3 tracking-tight">
                     {service.title}
                   </h3>
                   <p className="text-neutral-500 text-base leading-relaxed max-w-md">
                     {service.description}
                   </p>
                 </div>
                   <div 
                   className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none mix-blend-multiply filter contrast-150" 
                   style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                 />

                 {/* Image Container - Fills the rest */}
                 <div className="relative flex-1 w-full rounded-t-2xl overflow-hidden mt-auto  transition-all">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 "
                    />
                    
                    {/* Floating Actions */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full flex justify-center px-4">
                       {isPrimary ? (
                          <div className="flex items-center gap-3">
                             <Link
                               href="/contact?service=transport-marchandises"
                               className="bg-[#9E2C2C] text-white px-6 py-2.5 rounded-2xl font-medium text-sm hover:bg-[#8a2525] transition-colors"
                             >
                               Demander un devis
                             </Link>
                             <Link 
                               href={`/services#${service.slug}`}
                               className="w-10 h-10 flex items-center justify-center bg-neutral-100 rounded-2xl text-neutral-600 hover:text-[#9E2C2C] hover:bg-neutral-200 transition-colors"
                               title="En savoir plus"
                             >
                                <ArrowRight className="w-4 h-4" />
                             </Link>
                          </div>
                       ) : (
                          <Link
                            href={index === 1 ? '/citroen-ami' : `/services#${service.slug}`}
                            className="bg-primary text-white px-6 py-3 rounded-2xl font-medium text-sm shadow-lg hover:bg-[#8a2525] hover:scale-105 transition-all flex items-center gap-2"
                          >
                            {index === 1 ? "Découvrir l'offre" : "En savoir plus"}
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                       )}
                    </div>
                 </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
