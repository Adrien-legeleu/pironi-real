'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Sans Permis',
    description:
      'Location courte / moyenne durée pour vos déplacements en ville. Pratique, simple, rapide.',
    image: '/cars/sanspermis2.webp',
    slug: 'location-sans-permis',
  },
  {
    id: 2,
    title: 'Chauffeur',
    description:
      'Trajets avec chauffeur pour vos déplacements du quotidien ou longue distance. Qualité, confort, ponctualité.',
    image: '/cars/mercedes.png',
    slug: 'chauffeur-prive',
  },
  {
    id: 3,
    title: 'Location d’utilitaire',
    description:
      'Demande de devis. Besoin d\'un transport de marchandise ? Louez nos utilitaires jaunes.',
    image: '/cars/logistique.jpeg',
    slug: 'location-utilitaire',
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
            Des solutions de transport adaptées à tous vos besoins
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-3xl  px-10  shadow-[8px_8px_54px_rgba(0,0,0,0.08),_-8px_-8px_54px_rgba(255,255,255,0.7)] transition-all duration-500 border border-primary/10 hover:border-[#F61010]/20 overflow-hidden aspect-square flex  flex-col"
            >
              {/* Title */}
              <h3 className="text-3xl pt-8 font-bold text-[#242B33] mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-600 max-sm:text-xs  mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Image */}
              <div className="relative flex-1     rounded-t-3xl overflow-hidden bg-neutral-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-tl-3xl"
                />
              </div>

              {/* Button - Absolute positioned at bottom */}
              <Link
                href={`/services#${service.slug}`}
                className="absolute bottom-3 brightness-110 left-8 right-8 bg-primary  text-white px-6 py-3 rounded-2xl font-medium hover:brightness-100 transition-colors duration-300 flex items-center justify-center gap-2 group/btn"
              >
                En savoir plus
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
