import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ShieldCheck, CreditCard } from "lucide-react";
import FeaturesServiceSection from "@/components/blocks/features-service-section";
import ChauffeurPriveSection from "@/components/blocks/chauffeur-prive-section";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export default function ServicesPage() {
  const sectionsData = [
    {
      badge: 'PARTICULIERS & PROFESSIONNELS',
      title: 'Location Sans Permis',
      description: 'La liberté de mouvement pour tous. Des véhicules récents, confortables et faciles à conduire, disponibles immédiatement.',
     pricing: [
  {
    period: 'Journée',
    subtitle: '70 km inclus',
    price: '49€'
  },
  {
    period: 'Week-end (72h)',
    subtitle: '200 km inclus',
    price: '129€'
  },
  {
    period: 'Semaine',
    subtitle: '400 km inclus',
    price: '199€'
  },
  {
    period: '2 semaines (14 jours)',
    subtitle: '800 km inclus',
    price: '349€'
  },
  {
    period: 'Mois',
    subtitle: '2000 km inclus',
    price: '499€'
  },
  {
    period: '3 mois',
    subtitle: '6000 km inclus',
    price: '1299€'
  },
  {
    period: '6 mois',
    subtitle: '10000 km inclus',
    price: '2399€'
  },
  {
    period: 'Caution',
    subtitle: '',
    price: '800€'
  }
],

      features: [
        {
          title: 'Véhicules récents:',
          description: 'Flotte de moins de 2 ans pour votre confort et sécurité'
        },
        {
          title: 'Kilométrage illimité:',
          description: 'Roulez sans contrainte avec nos formules flexibles'
        },
        {
          title: 'Assurance tous risques:',
          description: 'Conduisez en toute sérénité avec notre couverture complète'
        },
        {
          title: 'Assistance 24/7:',
          description: 'Une équipe disponible jour et nuit pour vous accompagner'
        },
        {
          title: 'Livraison possible:',
          description: 'Recevez votre véhicule directement à domicile'
        },
        {
          title: 'Sans engagement:',
          description: 'Louez à la journée, au week-end ou au mois selon vos besoins'
        }
      ],
      image: {
        src: '/cars/sanspermis.png',
        alt: 'Location Sans Permis - Citroën Ami'
      }
    },
    {
      badge: 'PROFESSIONNELS',
      title: 'Transport & Logistique',
      description: 'Une solution fiable pour vos marchandises. Nous assurons le transport sécurisé et ponctuel de vos biens, quelle que soit la distance.',
      features: [
        {
          title: 'Transport express:',
          description: 'Livraison rapide sur toutes distances en France et Europe'
        },
        {
          title: 'Flotte adaptée:',
          description: 'Véhicules de 3m³ à 20m³ pour tous types de marchandises'
        },
        {
          title: 'Suivi en temps réel:',
          description: 'Tracez vos livraisons à chaque étape du trajet'
        },
        {
          title: 'Assurance incluse:',
          description: 'Vos marchandises protégées durant tout le transport'
        }
      ],
      image: {
        src: '/cars/logistique.webp',
        alt: 'Transport & Logistique'
      }
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-6 overflow-hidden">
        <BackgroundRippleEffect />
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm border-pironi-anthracite/10 text-pironi-anthracite bg-white/50 backdrop-blur-sm">
            Expertise Pironi
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-pironi-anthracite mb-6 tracking-tight">
            Nos services de <span className="text-primary">mobilité</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Des solutions premium adaptées à chaque besoin. Que ce soit pour le transport, la location ou un chauffeur privé, Pironi vous accompagne avec excellence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-2xl px-8 h-12 text-base bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
              <Link href="/contact">Demander un devis</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-2xl px-8 h-12 text-base border-gray-200 hover:bg-secondary bg-secondary/30  hover:text-pironi-anthracite">
              <Link href="#services-grid">Découvrir nos formules</Link>
            </Button>
          </div>
        </div>
        
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none opacity-40">
           <div className="absolute top-20 left-10 w-72 h-72 bg-pironi-red/5 rounded-full blur-3xl" />
           <div className="absolute bottom-20 right-10 w-96 h-96 bg-pironi-violet/5 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Services Section */}
      <FeaturesServiceSection sections={sectionsData} />

      {/* Chauffeur Privé Section with Tabs */}
      <ChauffeurPriveSection />

      {/* Reassurance Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-4 text-green-600">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-pironi-anthracite mb-2">Disponibilité 7j/7</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Nos équipes sont mobilisées tous les jours pour répondre à vos besoins, même en urgence.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 text-blue-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-pironi-anthracite mb-2">Sécurité Maximale</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Tous nos véhicules sont récents, entretenus et assurés tous risques pour votre sérénité.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mb-4 text-purple-600">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-pironi-anthracite mb-2">Transparence Tarifaire</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Pas de frais cachés. Nos devis sont clairs et détaillés avant toute prestation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
